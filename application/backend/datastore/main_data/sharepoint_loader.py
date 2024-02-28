import os
import urllib.parse
from typing import Iterable

from O365 import Account
from dotenv import load_dotenv

from application.backend.datastore.main_data.main_schema import LocalDocument

load_dotenv()

TEMP_DIR = "sharepoint_temp"

SHAREPOINT_COLUMNS = [
    "Faculty",
    "TargetGroup",
    "Topic",
    "Subtopic",
    "Title",
    "Source",  # Currently unused
    "DegreePrograms",
    "Language",
]


def load_from_sharepoint() -> Iterable[LocalDocument]:
    """
    Loads documents from SharePoint including their column values, downloading them onto the local file system.

    Expects the following environment variables to be set:
    O365_CLIENT_ID: The client ID for the SharePoint API
    O365_CLIENT_SECRET: The client secret for the SharePoint API
    O365_DRIVE_ID: The ID of the SharePoint drive
    O365_FOLDER_PATH: The path of the folder in SharePoint

    :return: an iterable of LocalDocuments
    """
    client_id = os.environ["O365_CLIENT_ID"]
    client_secret = os.environ["O365_CLIENT_SECRET"]
    drive_id = os.environ["O365_DRIVE_ID"]
    folder_path = os.environ["O365_FOLDER_PATH"]
    assert client_id, "O365_CLIENT_ID not set"
    assert client_secret, "O365_CLIENT_SECRET not set"
    assert drive_id, "O365_DRIVE_ID not set"
    assert folder_path, "O365_FOLDER_PATH not set"

    account = Account(
        (client_id, client_secret),
        auth_flow_type="credentials",
        tenant_id="5d7b49e9-50d2-40dc-bab1-14a2d903542c",
    )
    if account.authenticate():
        print("Authenticated with SharePoint")
    drive = account.storage().get_drive(drive_id)
    target_folder = drive.get_item_by_path("/Data_ChatBot")

    # FIXME: Any way to fetch all files recursively with a single request?
    items = target_folder.get_items()
    folders = [f for f in items if f.is_folder]
    files = {
        f.name: f for f in items if f.is_file
    }  # Warning! This will overlook files with the same name
    while len(folders) != 0:
        folder = folders.pop()
        items = folder.get_items()
        for item in items:
            if item.is_folder:
                folders.append(item)
            elif item.is_file:
                files[item.name] = item

    local_documents = []
    filenames_to_download = files.keys()
    print(f"Downloading {len(filenames_to_download)} files from SharePoint...")
    items = (
        account.sharepoint()
        .get_site("tumde.sharepoint.com", "/sites/MGTChatbot")
        .get_list_by_name(folder_path)
        .get_items(expand_fields=SHAREPOINT_COLUMNS)
    )
    os.makedirs(TEMP_DIR, exist_ok=True)
    for item in items:
        # Format the web_url to get rid of encoding (e.g. %20), then split by / and get the last part
        # If this is a file name we got from OneDrive, we can get its fields
        name = urllib.parse.unquote(item.web_url).split("/")[-1]
        if name not in filenames_to_download:
            continue
        file = files[name]
        print(f"Downloading {name}...", end="\r")
        file.download(to_path=TEMP_DIR, chunk_size=8 * 1024)
        print(f"Downloading {name}... Done!")
        local_document = LocalDocument(
            file_path=f"{TEMP_DIR}/{name}",
            faculty=item.fields.get("Faculty", None),
            target_group=item.fields.get("TargetGroup", None),
            topic=item.fields.get("Topic", None),
            subtopic=item.fields.get("Subtopic", None),
            title=item.fields.get("Title", None),
            degree_programs=set(item.fields.get("DegreePrograms", [])),
            language=item.fields.get("Language", None),
        )
        local_documents.append(local_document)

    return local_documents


if __name__ == "__main__":
    load_from_sharepoint()
