import * as React from "react";

export default function InfoIcon(props: any) {
    return (
        <svg
            width={props.size || 20}
            height={props.size || 20}
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M21.4115 5.89744C21.3613 5.23605 21.0744 4.6149 20.6035 4.14777C20.1326 3.68064 19.5092 3.39879 18.8474 3.35385C18.1808 3.30256 17.4218 3.25128 16.6218 3.21026V5.33333C16.6218 5.80936 16.4327 6.2659 16.0961 6.6025C15.7595 6.9391 15.303 7.12821 14.8269 7.12821C14.3509 7.12821 13.8944 6.9391 13.5578 6.6025C13.2212 6.2659 13.0321 5.80936 13.0321 5.33333V3.02564H10.4679V5.33333C10.4679 5.80936 10.2788 6.2659 9.94224 6.6025C9.60564 6.9391 9.14911 7.12821 8.67308 7.12821C8.19705 7.12821 7.74051 6.9391 7.40391 6.6025C7.06731 6.2659 6.87821 5.80936 6.87821 5.33333V3.21026C6.07821 3.21026 5.31923 3.30256 4.64231 3.35385C3.98481 3.39788 3.36546 3.67841 2.89872 4.14359C2.42761 4.61251 2.14014 5.23474 2.08846 5.89744C1.93462 7.79487 1.75 10.4923 1.75 12.5128C1.75 14.5333 1.93462 17.2308 2.08846 19.1385C2.14076 19.7964 2.42718 20.4138 2.89575 20.8786C3.36432 21.3434 3.98398 21.6248 4.64231 21.6718C6.3141 21.7949 9.44231 22 11.75 22C14.0577 22 17.1859 21.7949 18.8474 21.6718C19.5076 21.6272 20.1297 21.3468 20.6004 20.8817C21.0711 20.4167 21.3589 19.798 21.4115 19.1385C21.5654 17.2308 21.75 14.5333 21.75 12.5128C21.75 10.4923 21.5654 7.79487 21.4115 5.89744ZM11.75 15.8462H7.64744C7.44342 15.8462 7.24777 15.7651 7.10351 15.6209C6.95925 15.4766 6.87821 15.2809 6.87821 15.0769C6.87821 14.8729 6.95925 14.6773 7.10351 14.533C7.24777 14.3887 7.44342 14.3077 7.64744 14.3077H11.75C11.954 14.3077 12.1497 14.3887 12.2939 14.533C12.4382 14.6773 12.5192 14.8729 12.5192 15.0769C12.5192 15.2809 12.4382 15.4766 12.2939 15.6209C12.1497 15.7651 11.954 15.8462 11.75 15.8462ZM15.8526 11.7436H7.64744C7.44342 11.7436 7.24777 11.6625 7.10351 11.5183C6.95925 11.374 6.87821 11.1784 6.87821 10.9744C6.87821 10.7703 6.95925 10.5747 7.10351 10.4304C7.24777 10.2862 7.44342 10.2051 7.64744 10.2051H15.8526C16.0566 10.2051 16.2522 10.2862 16.3965 10.4304C16.5408 10.5747 16.6218 10.7703 16.6218 10.9744C16.6218 11.1784 16.5408 11.374 16.3965 11.5183C16.2522 11.6625 16.0566 11.7436 15.8526 11.7436Z"></path>
            <path d="M9.44231 2.76923V5.33333C9.44231 5.53735 9.36126 5.733 9.21701 5.87726C9.07275 6.02152 8.87709 6.10256 8.67308 6.10256C8.46906 6.10256 8.27341 6.02152 8.12915 5.87726C7.98489 5.733 7.90385 5.53735 7.90385 5.33333V2.76923C7.90385 2.56522 7.98489 2.36956 8.12915 2.2253C8.27341 2.08104 8.46906 2 8.67308 2C8.87709 2 9.07275 2.08104 9.21701 2.2253C9.36126 2.36956 9.44231 2.56522 9.44231 2.76923Z"></path>
            <path d="M15.5962 2.76923V5.33333C15.5962 5.53735 15.5151 5.733 15.3709 5.87726C15.2266 6.02152 15.0309 6.10256 14.8269 6.10256C14.6229 6.10256 14.4273 6.02152 14.283 5.87726C14.1387 5.733 14.0577 5.53735 14.0577 5.33333V2.76923C14.0577 2.56522 14.1387 2.36956 14.283 2.2253C14.4273 2.08104 14.6229 2 14.8269 2C15.0309 2 15.2266 2.08104 15.3709 2.2253C15.5151 2.36956 15.5962 2.56522 15.5962 2.76923Z"></path>
        </svg>
    );
}
