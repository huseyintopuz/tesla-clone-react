import React from 'react'

export const Svg = ({ children }) => {
    return (
        <svg viewBox="0 0 342 35">
            {children}
        </svg>
    )
}

export const Tesla = () => {
    return (
        <Svg>
            <path d="M0 .1a9.7 9.7 0 007 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 007-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 006-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 00-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 13.8h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 14.1h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zM308.5 7h26a9.6 9.6 0 007-7h-40a9.6 9.6 0 007 7z" fill="var(--tds-icon--fill, #171a20)"></path>
        </Svg>
    )
}

export const Close = () => {
    return (
        <Svg>
            <g stroke="var(--tds-icon--fill, #171a20)" stroke-width="1.5" stroke-linecap="round"><line x1="10" y1="10" x2="20" y2="20"></line><line x1="20" y1="10" x2="10" y2="20"></line></g>
        </Svg>
    )
}

export const Down = () => {
    return (
        <Svg>
            <path stroke="var(--tds-icon--fill, #171a20)" stroke-width="1.5" d="M10.5 17.5l4.5-4 4.5 4" fill="none" stroke-linecap="round" stroke-linejoin="round" transform="rotate(90 90 90)"></path>
        </Svg>
    )
}

export const Next3 = () => {
    return (
        <Svg>
            <path d="M15.5 6v4.3A17 17 0 0022 9v1c-1.9.8-4 1.2-6.5 1.2v3.3h9v1h-9v3.3c2.3 0 4.3.4 6.1 1l.4.2v1c-2-.9-4.3-1.3-7-1.3h.5V24h-1v-4.3A17 17 0 008 21v-1c2-.8 4.3-1.3 7-1.3h-.5v-3.2h-9v-1h9v-3.3c-2.5 0-4.6-.4-6.5-1.2V9c1.9.8 4 1.3 6.5 1.3V6h1z" fill="var(--tds-icon--fill, #171a20)"></path><path d="M15 6.3c.6 0 1.1.2 1.6.5.6.5 1 1.1 1.5 1.9.9 1.6 1.4 3.8 1.4 6.3s-.5 4.7-1.4 6.3c-.4.8-1 1.4-1.5 1.9-.5.3-1 .6-1.6.6-.6 0-1.1-.3-1.6-.6-.6-.5-1-1.1-1.5-1.9-.9-1.6-1.4-3.8-1.4-6.3s.5-4.7 1.4-6.3c.4-.8 1-1.4 1.5-1.9.5-.3 1-.5 1.6-.5z" stroke="var(--tds-icon--fill, #171a20)" fill="none"></path><path d="M15 5a10 10 0 110 20 10 10 0 010-20zm0 1.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17z" fill="var(--tds-icon--fill, #171a20)"></path>
        </Svg>
    )
}
