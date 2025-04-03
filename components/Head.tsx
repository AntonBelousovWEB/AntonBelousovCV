import SchemaMarkup from "./SchemaMarkup";
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] });

export const Head: React.FC<{ children: React.ReactNode; }> = ({ children }) => {
    return (
        <html lang="en">
            <head>
              <meta name="google-site-verification" content="Iooopk48rnOBKvdyL6YdLkLzfttQYaXpSzClCHmO9gw" />
              <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
              <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
              <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
              <link rel="manifest" href="/site.webmanifest" />
              <meta name="msapplication-TileColor" content="#da532c" />
            </head>
            <body className={inter.className}>
              {children}
              <SchemaMarkup />
            </body>
        </html>
    )
}