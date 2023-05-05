import * as React from "react";

export default function ShoppingCartIcon(props: any) {
    return (
        <svg
            width={props.size || 20}
            height={props.size || 20}
            viewBox="0 0 64 64"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g id="SVGRepo_iconCarrier">
                <g>
                    <circle cx="44" cy="60" r="4"></circle>
                    <circle cx="28" cy="60" r="4"></circle>
                    <path d="M63.246,21.66C62.492,20.617,61.285,20,60,20H18.977L15.934,3.285C15.59,1.383,13.934,0,12,0H4 C1.789,0,0,1.789,0,4s1.789,4,4,4h4.66l7.406,40.715C16.41,50.617,18.066,52,20,52h32c1.723,0,3.25-1.102,3.793-2.734l8-24 C64.203,24.047,63.996,22.703,63.246,21.66z"></path>
                </g>
            </g>
        </svg>
    );
}
