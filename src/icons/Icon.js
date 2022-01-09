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
            <g stroke="var(--tds-icon--fill, #171a20)" ><line x1="15" y1="15" x2="30" y2="30"></line><line x1="30" y1="15" x2="15" y2="30"></line></g>
        </Svg>
    )
}

export const Down = () => {
    return (
        <Svg>
            <path stroke="var(--tds-icon--fill, #171a20)" strokeWidth="1.5" d="M10.5 17.5l4.5-4 4.5 4" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="rotate(90 90 90)"></path>
        </Svg>
    )
}

export const World = () => {
    return (
        <svg viewBox="0 0 30 30">
            <path d="M15.5 6v4.3A17 17 0 0022 9v1c-1.9.8-4 1.2-6.5 1.2v3.3h9v1h-9v3.3c2.3 0 4.3.4 6.1 1l.4.2v1c-2-.9-4.3-1.3-7-1.3h.5V24h-1v-4.3A17 17 0 008 21v-1c2-.8 4.3-1.3 7-1.3h-.5v-3.2h-9v-1h9v-3.3c-2.5 0-4.6-.4-6.5-1.2V9c1.9.8 4 1.3 6.5 1.3V6h1z" fill="var(--tds-icon--fill, #171a20)"></path><path d="M15 6.3c.6 0 1.1.2 1.6.5.6.5 1 1.1 1.5 1.9.9 1.6 1.4 3.8 1.4 6.3s-.5 4.7-1.4 6.3c-.4.8-1 1.4-1.5 1.9-.5.3-1 .6-1.6.6-.6 0-1.1-.3-1.6-.6-.6-.5-1-1.1-1.5-1.9-.9-1.6-1.4-3.8-1.4-6.3s.5-4.7 1.4-6.3c.4-.8 1-1.4 1.5-1.9.5-.3 1-.5 1.6-.5z" stroke="var(--tds-icon--fill, #171a20)" fill="none"></path><path d="M15 5a10 10 0 110 20 10 10 0 010-20zm0 1.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17z" fill="var(--tds-icon--fill, #171a20)"></path>
        </svg>
    )
}
export const Chat = () => {
    return (
        <svg width="28" height="26" xmlns="http://www.w3.org/2000/svg" ><g fill="#171A20"><path d="M23.8.85H4.2A3.85 3.85 0 00.35 4.7v12.6l.007.235A3.85 3.85 0 004.2 21.15h3.15v2.859c0 .332.117.653.33.907l.122.13c.515.478 1.317.51 1.87.047l4.709-3.943H23.8a3.85 3.85 0 003.85-3.85V4.7A3.85 3.85 0 0023.8.85zM4.2 2.95h19.6c.966 0 1.75.784 1.75 1.75v12.6a1.75 1.75 0 01-1.75 1.75h-9.927a.7.7 0 00-.45.163L9.45 22.54v-2.79a.7.7 0 00-.7-.7H4.2a1.75 1.75 0 01-1.75-1.75V4.7c0-.966.784-1.75 1.75-1.75z"></path><path d="M14 9.6a1.4 1.4 0 110 2.8 1.4 1.4 0 010-2.8zm-5.6 0a1.4 1.4 0 110 2.8 1.4 1.4 0 010-2.8zm11.2 0a1.4 1.4 0 110 2.8 1.4 1.4 0 010-2.8z"></path></g></svg>
    )
}
// export const Falcon = () => {
//     return (
//         <svg width="28" height="26" viewBox="0 0 28 28">
//             <use href="#tcl-badge-model-x-falcon-wings"></use>
//         </svg>
//     )
// }