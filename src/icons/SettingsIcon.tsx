import * as React from "react";

export default function SettingsIcon(props: any) {
    return (
        <svg
            width={props.size || 18}
            height={props.size || 18}
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M22.7806 10.8989L18.1477 2.87456C17.8552 2.36775 17.2181 2 16.6329 2H7.36725C6.78207 2 6.14491 2.36775 5.85245 2.87456L1.21944 10.8989C0.926853 11.4057 0.926853 12.1412 1.21944 12.648L5.85245 20.6725C6.14491 21.1793 6.78207 21.547 7.36725 21.547H16.6329C17.2181 21.547 17.8552 21.1793 18.1477 20.6725L22.7806 12.648C23.0731 12.1412 23.0731 11.4057 22.7806 10.8989ZM11.9999 15.273C10.0703 15.273 8.50047 13.7031 8.50047 11.7734C8.50047 9.84404 10.0703 8.27418 11.9999 8.27418C13.9294 8.27418 15.4994 9.84404 15.4994 11.7734C15.4994 13.7031 13.9295 15.273 11.9999 15.273Z" />
        </svg>
    );
}
