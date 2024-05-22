
export const metadata = {
    title: "Pancasila",
    description: "Quiz pancasila",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
