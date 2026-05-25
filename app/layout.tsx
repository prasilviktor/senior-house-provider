import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Senior House — Provider Section',
  description: 'Senior House care coordination platform — investor-facing provider value section',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;1,400&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0, background: '#faf8f5', color: '#1a1a1a' }}>
        {children}
      </body>
    </html>
  )
}
