import { Nunito } from 'next/font/google'
import '@/app/global.css'
import Header from '@/components/base/Header'

const nunitoFont = Nunito({
    subsets: ['latin'],
    display: 'swap',
})

const RootLayout = ({ children }) => {
    return (
        <html lang="ja" className={nunitoFont.className}>
            <head>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/favicons/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicons/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicons/favicon-16x16.png"
                />
                <link rel="manifest" href="/favicons/site.webmanifest" />
                <link
                    rel="mask-icon"
                    href="/favicons/safari-pinned-tab.svg"
                    color="#5bbad5"
                />
                <meta name="msapplication-TileColor" content="#2d89ef" />
                <meta name="theme-color" content="#ffffff" />
            </head>
            <body className="antialiased">
                <Header />
                <main className="max-w-[85rem] w-full mx-auto px-4">
                    {children}
                </main>
            </body>
        </html>
    )
}

export const metadata = {
    title: 'TRAVEL SKIES',
}

export default RootLayout
