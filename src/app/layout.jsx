// app/layout.js

import "./index.css";
export default function Layout({ children }) {
    return (
        <>
            <html lang="en">
                <body>{children}</body>
            </html>
        </>

    );
}
