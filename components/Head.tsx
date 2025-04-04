import { personSchema } from "@/app/schema";
import { Inter } from "next/font/google"
import { organizationSchema } from "@/app/organizationSchema";
import { websiteSchema } from "@/app/websiteSchema";
import { breadcrumbSchema } from "@/app/breadcrumbSchema";
import { ServiceSchema } from "@/app/ServiceSchema";

const inter = Inter({ subsets: ["latin"] });

export const Head: React.FC<{ children: React.ReactNode; }> = ({ children }) => {
    return (
        <html lang="en">
            <head>
                <meta name="google-site-verification" content="TZ6c8LDq6aa-m3AmKWJ1TAJS1n2gsudrj7CgbWP-Oqw" />
                <meta 
                    http-equiv="Content-Security-Policy" 
                    content="
                      default-src 'self' vercel.app;
                      script-src 'self' 'unsafe-inline' 'unsafe-eval' vercel.app;
                      style-src 'self' 'unsafe-inline';
                      img-src 'self' data: blob: vercel.app;
                      font-src 'self';
                      connect-src 'self' vercel.app;
                      frame-src 'none';
                      worker-src 'self' blob:;
                      media-src 'self';
                      base-uri 'self';
                      form-action 'self';
                      object-src 'none';
                    "
                />

                <script type="application/ld+json">
                    {JSON.stringify(personSchema)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(ServiceSchema)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(organizationSchema)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(websiteSchema)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>

                <link rel="icon" sizes="16x16" href="/img/favicons/favicon-16x16.ico" type="image/x-icon" />
                <link rel="icon" sizes="32x32" href="/img/favicons/favicon-32x32.ico" type="image/x-icon" />
                <link rel="icon" sizes="96x96" href="/img/favicons/favicon-96x96.ico" type="image/x-icon" />
                <link rel="shortcut icon" sizes="16x16" href="/img/favicons/favicon-16x16.ico" type="image/x-icon" />
                <link rel="shortcut icon" sizes="32x32" href="/img/favicons/favicon-32x32.ico" type="image/x-icon" />
                <link rel="shortcut icon" sizes="96x96" href="/img/favicons/favicon-96x96.ico" type="image/x-icon" />

                <link rel="apple-touch-icon" sizes="57x57" href="/img/favicons/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="/img/favicons/apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/img/favicons/apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="/img/favicons/apple-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="/img/favicons/apple-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="/img/favicons/apple-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="/img/favicons/apple-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/img/favicons/apple-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/img/favicons/apple-icon-180x180.png" />
                <link rel="icon" type="image/png" sizes="192x192"  href="/img/favicons/android-icon-192x192.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/img/favicons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/img/favicons/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/img/favicons/favicon-16x16.png" />
                <meta name="msapplication-TileColor" content="#2e489f" />
                <meta name="msapplication-TileImage" content="/img/favicons/ms-icon-144x144.png" />

                <link rel="manifest" href="/img/favicons/manifest_3.json" crossOrigin="use-credentials" />

                <meta name="robots" content="NOODP" />
                <meta name="robots" content="max-image-preview:large" />
                <meta name="robots" content="max-video-preview:-1" />
                <meta name="robots" content="max-snippet:22200020" />
            </head>
            <body className={inter.className}>
              {children}
            </body>
        </html>
    )
}