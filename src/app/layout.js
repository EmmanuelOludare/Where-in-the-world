import './globals.css';
import { Nunito_Sans } from 'next/font/google';
import { ThemeProvider } from "../components/theme-provider";

const nunitosans = Nunito_Sans({
  weight: ['300', '600', '800'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Where in the world',
  description: 'REST application for countries of the world',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunitosans.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
