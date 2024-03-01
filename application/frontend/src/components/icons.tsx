"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

function IconPlus({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn("size-4", className)}
      {...props}
    >
      <path d="M224 128a8 8 0 0 1-8 8h-80v80a8 8 0 0 1-16 0v-80H40a8 8 0 0 1 0-16h80V40a8 8 0 0 1 16 0v80h80a8 8 0 0 1 8 8Z" />
    </svg>
  );
}

function IconArrowElbow({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn("size-4", className)}
      {...props}
    >
      <path d="M200 32v144a8 8 0 0 1-8 8H67.31l34.35 34.34a8 8 0 0 1-11.32 11.32l-48-48a8 8 0 0 1 0-11.32l48-48a8 8 0 0 1 11.32 11.32L67.31 168H184V32a8 8 0 0 1 16 0Z" />
    </svg>
  );
}

function IconArrowDown({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn("size-4", className)}
      {...props}
    >
      <path d="m205.66 149.66-72 72a8 8 0 0 1-11.32 0l-72-72a8 8 0 0 1 11.32-11.32L120 196.69V40a8 8 0 0 1 16 0v156.69l58.34-58.35a8 8 0 0 1 11.32 11.32Z" />
    </svg>
  );
}

function IconUser({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn("size-4", className)}
      {...props}
    >
      <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8ZM72 96a56 56 0 1 1 56 56 56.06 56.06 0 0 1-56-56Z" />
    </svg>
  );
}

function IconCheck({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn("size-4", className)}
      {...props}
    >
      <path d="m229.66 77.66-128 128a8 8 0 0 1-11.32 0l-56-56a8 8 0 0 1 11.32-11.32L96 188.69 218.34 66.34a8 8 0 0 1 11.32 11.32Z" />
    </svg>
  );
}

function IconDownload({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn("size-4", className)}
      {...props}
    >
      <path d="M224 152v56a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-56a8 8 0 0 1 16 0v56h160v-56a8 8 0 0 1 16 0Zm-101.66 5.66a8 8 0 0 0 11.32 0l40-40a8 8 0 0 0-11.32-11.32L136 132.69V40a8 8 0 0 0-16 0v92.69l-26.34-26.35a8 8 0 0 0-11.32 11.32Z" />
    </svg>
  );
}
function IconCopy({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn("size-4", className)}
      {...props}
    >
      <path d="M216 32H88a8 8 0 0 0-8 8v40H40a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-40h40a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8Zm-56 176H48V96h112Zm48-48h-32V88a8 8 0 0 0-8-8H96V48h112Z" />
    </svg>
  );
}

function IconSend({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      className={cn("size-4", className)}
      data-darkreader-inline-fill=""
      {...props}
    >
      <path d="M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.42,29.84l85.62,40.55,40.55,85.62A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14L118.42,148.9l47.24-47.25a8,8,0,0,0-11.31-11.31L107.1,137.58,24,98.22l.14,0L216,40Z"></path>
    </svg>
  );
}

function IconTUM({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 192.756 192.756"
      fill="currentColor"
      className={cn("size-4", className)}
      {...props}
    >
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M0 0h192.756v192.756H0V0z"
        clipRule="evenodd"
      ></path>
      <path
        fill="none"
        stroke="#000"
        strokeMiterlimit="2.613"
        strokeWidth="1.992"
        d="M39.271 23.397v60.78h13.107v-60.69h14.558v60.69h41.687V24.129h14.83v59.958h13.744V24.129h15.016v59.958h13.74V10.216H95.425v60.505h-15.11V10.306H26.799v13.091h12.472z"
      ></path>
      <path
        fillRule="evenodd"
        d="M32.595 123.959h-2.132v-17.242h-4.616v-1.99h11.415v1.99h-4.667v17.242zm6.629-19.229h9.918v1.993h-7.787v5.715h7.558v1.988h-7.558v7.551h7.787v1.99h-9.918V104.73zm27.408 4.213c-1.521-1.582-3.628-2.553-5.833-2.553-4.261 0-7.712 3.725-7.712 7.959 0 4.236 3.476 7.959 7.762 7.959 2.155 0 4.262-1.02 5.783-2.549v2.65c-1.65 1.197-3.679 1.887-5.707 1.887-5.403 0-9.968-4.412-9.968-9.871 0-5.51 4.489-10.025 9.968-10.025 2.13 0 4.006.613 5.707 1.889v2.654zm13.991 3.596v-7.809h2.131v19.237h-2.131v-9.44h-9.79v9.44h-2.129V104.73h2.129v7.809h9.79zm4.368-8.631l14.913 15.715v-14.896h2.131v20.101l-14.912-15.689v14.82h-2.132v-20.051zm22.027 20.059h-2.129V104.73h2.129v19.237zm11.927-15.43c-.762-1.328-1.676-2.092-3.299-2.092-1.699 0-3.17 1.223-3.17 2.984 0 1.658 1.699 2.424 2.994 3.012l1.266.559c2.486 1.098 4.592 2.348 4.592 5.41 0 3.367-2.689 5.943-6.012 5.943-3.068 0-5.352-1.99-5.959-4.977l2.078-.584c.279 1.963 1.775 3.57 3.83 3.57s3.932-1.582 3.932-3.752c0-2.242-1.75-3.008-3.525-3.824l-1.166-.51c-2.232-1.02-4.162-2.168-4.162-4.924 0-2.986 2.514-4.898 5.354-4.898 2.131 0 3.932 1.098 4.947 2.986l-1.7 1.097zm19.459.377c-1.523-1.582-3.627-2.551-5.834-2.551-4.262 0-7.711 3.725-7.711 7.959 0 4.236 3.475 7.959 7.762 7.959 2.156 0 4.26-1.02 5.783-2.551v2.652c-1.648 1.201-3.68 1.887-5.707 1.887-5.404 0-9.967-4.412-9.967-9.871 0-5.51 4.486-10.025 9.967-10.025 2.131 0 4.008.613 5.707 1.889v2.652zm14.034 3.619v-7.806h2.128v19.232h-2.128v-9.438h-9.792v9.438h-2.13v-19.232h2.13v7.806h9.792zm4.605-7.803h9.916v1.993h-7.785v5.715h7.558v1.988h-7.558v7.551h7.785v1.99h-9.916V104.73zm-127.36 56.612l6.95 16.146 6.974-16.146 3.881 20.332h-2.182l-2.46-13.01h-.051l-6.162 13.799-6.138-13.799h-.051l-2.461 13.01h-2.181l3.881-20.332zm41.826.281l14.913 15.713v-14.897h2.13v20.102l-14.913-15.689v14.822h-2.13v-20.051zm37.354 5.106c-1.521-1.582-3.625-2.549-5.832-2.549-4.262 0-7.711 3.723-7.711 7.957s3.475 7.961 7.76 7.961c2.158 0 4.262-1.021 5.783-2.553v2.654c-1.648 1.199-3.676 1.889-5.705 1.889-5.402 0-9.967-4.416-9.967-9.875 0-5.51 4.487-10.023 9.967-10.023 2.129 0 4.008.611 5.705 1.889v2.65zm17.422 3.521v-7.807h2.131v19.235h-2.131v-9.438h-9.789v9.438h-2.131v-19.235h2.131v7.807h9.789zm8.168-7.811h9.918v1.991h-7.787v5.711h7.559v1.992h-7.559v7.551h7.787v1.99h-9.918v-19.235zm15.449-.816l14.916 15.713v-14.897h2.129v20.102l-14.912-15.689v14.822h-2.133v-20.051zm-95.764 12.201c0 1.43-.052 3.061.837 4.285.837 1.174 2.459 1.838 3.854 1.838 1.369 0 2.866-.639 3.753-1.709 1.016-1.227.94-2.908.94-4.414v-11.453h2.129v12.041c0 2.092-.151 3.748-1.673 5.33-1.319 1.428-3.221 2.193-5.149 2.193-1.8 0-3.652-.688-4.945-1.963-1.672-1.607-1.876-3.369-1.876-5.561V162.37h2.13v11.454z"
        clipRule="evenodd"
      ></path>
      <path
        fillRule="evenodd"
        d="M56.708 165.152c.761 0 1.378-.621 1.378-1.389 0-.766-.618-1.387-1.378-1.387-.763 0-1.38.621-1.38 1.387a1.385 1.385 0 001.38 1.389zm4.254.006c.761 0 1.38-.623 1.38-1.387 0-.768-.619-1.389-1.38-1.389s-1.38.621-1.38 1.389c0 .764.619 1.387 1.38 1.387zm-33.034-19.777c0 1.43-.051 3.061.836 4.285.837 1.174 2.461 1.838 3.855 1.838 1.37 0 2.867-.639 3.754-1.709 1.013-1.227.938-2.91.938-4.414v-11.453h2.131v12.041c0 2.092-.154 3.748-1.675 5.33-1.318 1.428-3.221 2.193-5.148 2.193-1.801 0-3.651-.688-4.946-1.963-1.673-1.607-1.877-3.367-1.877-5.561v-12.041h2.132v11.454zm13.837-12.256l14.913 15.713v-14.897h2.131v20.1l-14.914-15.687v14.822h-2.13v-20.051zm22.414 20.045h-2.132v-19.236h2.132v19.236zm10.09-4.566l5.453-14.67h2.309l-7.762 20.382-7.761-20.382h2.308l5.453 14.67zm10.079-14.67h9.917v1.99h-7.787v5.713h7.559v1.99h-7.559v7.553h7.787v1.99h-9.917v-19.236zm14.617 19.236h-2.132v-19.236h2.763c3.629 0 7 .971 7 5.307 0 2.959-1.85 5.051-4.793 5.307l6.09 8.623h-2.615l-5.781-8.445h-.531v8.444h-.001z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M98.965 142.836h.656c2.412 0 4.846-.457 4.846-3.443 0-3.164-2.309-3.469-4.871-3.469h-.631v6.912z"
        clipRule="evenodd"
      ></path>
      <path
        fillRule="evenodd"
        d="M118.416 137.688c-.76-1.324-1.674-2.09-3.295-2.09-1.701 0-3.17 1.223-3.17 2.984 0 1.658 1.697 2.422 2.99 3.008l1.27.562c2.486 1.098 4.592 2.348 4.592 5.408 0 3.367-2.689 5.943-6.014 5.943-3.068 0-5.352-1.988-5.959-4.975l2.08-.586c.279 1.965 1.775 3.572 3.83 3.572s3.93-1.582 3.93-3.75c0-2.246-1.748-3.012-3.525-3.828l-1.166-.51c-2.232-1.021-4.16-2.168-4.16-4.924 0-2.982 2.512-4.896 5.354-4.896 2.131 0 3.93 1.098 4.945 2.984l-1.702 1.098zm7.357 15.482h-2.128v-19.236h2.128v19.236zm9.68.006h-2.131V135.93h-4.615v-1.989h11.412v1.989h-4.666v17.246zm26.822 0h-2.129V135.93h-4.617v-1.989h11.414v1.989h-4.668v17.246zm-18.584-5.459l-2.308 5.459h-2.332l8.824-20.155 8.6 20.155h-2.362l-2.254-5.459h-8.168z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M147.826 138.021l-3.273 7.706h6.467l-3.194-7.706z"
        clipRule="evenodd"
      ></path>
      <path
        fillRule="evenodd"
        d="M151.639 136.279c.779 0 1.41-.635 1.41-1.416 0-.783-.631-1.416-1.41-1.416-.777 0-1.408.633-1.408 1.416a1.411 1.411 0 001.408 1.416zm-7.662.033c.779 0 1.41-.635 1.41-1.416 0-.783-.631-1.418-1.41-1.418-.775 0-1.406.635-1.406 1.418a1.41 1.41 0 001.406 1.416z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

function IconSidebar({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn("size-4", className)}
      {...props}
    >
      <path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16ZM40 56h40v144H40Zm176 144H96V56h120v144Z" />
    </svg>
  );
}

function IconMessage({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn("size-4", className)}
      {...props}
    >
      <path d="M216 48H40a16 16 0 0 0-16 16v160a15.84 15.84 0 0 0 9.25 14.5A16.05 16.05 0 0 0 40 240a15.89 15.89 0 0 0 10.25-3.78.69.69 0 0 0 .13-.11L82.5 208H216a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16ZM40 224Zm176-32H82.5a16 16 0 0 0-10.3 3.75l-.12.11L40 224V64h176Z" />
    </svg>
  );
}
function IconMoon({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn("size-4", className)}
      {...props}
    >
      <path d="M233.54 142.23a8 8 0 0 0-8-2 88.08 88.08 0 0 1-109.8-109.8 8 8 0 0 0-10-10 104.84 104.84 0 0 0-52.91 37A104 104 0 0 0 136 224a103.09 103.09 0 0 0 62.52-20.88 104.84 104.84 0 0 0 37-52.91 8 8 0 0 0-1.98-7.98Zm-44.64 48.11A88 88 0 0 1 65.66 67.11a89 89 0 0 1 31.4-26A106 106 0 0 0 96 56a104.11 104.11 0 0 0 104 104 106 106 0 0 0 14.92-1.06 89 89 0 0 1-26.02 31.4Z" />
    </svg>
  );
}

function IconSun({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn("size-4", className)}
      {...props}
    >
      <path d="M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0Zm72 88a64 64 0 1 1-64-64 64.07 64.07 0 0 1 64 64Zm-16 0a48 48 0 1 0-48 48 48.05 48.05 0 0 0 48-48ZM58.34 69.66a8 8 0 0 0 11.32-11.32l-16-16a8 8 0 0 0-11.32 11.32Zm0 116.68-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0-11.32-11.32ZM192 72a8 8 0 0 0 5.66-2.34l16-16a8 8 0 0 0-11.32-11.32l-16 16A8 8 0 0 0 192 72Zm5.66 114.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32-11.32ZM48 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8Zm80 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8Zm112-88h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16Z" />
    </svg>
  );
}
function IconSettings({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className={cn("size-4", className)}
      {...props}
    >
      <rect width="256" height="256" fill="none" />
      <circle
        cx="128"
        cy="128"
        r="40"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M130.05,206.11c-1.34,0-2.69,0-4,0L94,224a104.61,104.61,0,0,1-34.11-19.2l-.12-36c-.71-1.12-1.38-2.25-2-3.41L25.9,147.24a99.15,99.15,0,0,1,0-38.46l31.84-18.1c.65-1.15,1.32-2.29,2-3.41l.16-36A104.58,104.58,0,0,1,94,32l32,17.89c1.34,0,2.69,0,4,0L162,32a104.61,104.61,0,0,1,34.11,19.2l.12,36c.71,1.12,1.38,2.25,2,3.41l31.85,18.14a99.15,99.15,0,0,1,0,38.46l-31.84,18.1c-.65,1.15-1.32,2.29-2,3.41l-.16,36A104.58,104.58,0,0,1,162,224Z"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </svg>
  );
}

function IconDatabase({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className={cn("size-4", className)}
      {...props}
    >
      <rect width="256" height="256" fill="none" />
      <ellipse
        cx="128"
        cy="80"
        rx="88"
        ry="48"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M40,80v48c0,26.51,39.4,48,88,48s88-21.49,88-48V80"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M40,128v48c0,26.51,39.4,48,88,48s88-21.49,88-48V128"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </svg>
  );
}
export {
  IconPlus,
  IconArrowElbow,
  IconArrowDown,
  IconUser,
  IconTUM,
  IconCheck,
  IconCopy,
  IconDownload,
  IconSend,
  IconSidebar,
  IconMessage,
  IconMoon,
  IconSun,
  IconSettings,
  IconDatabase,
};
