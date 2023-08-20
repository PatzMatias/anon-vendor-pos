import { Inter, Fira_Code } from "next/font/google";

const sans = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

const mono = Fira_Code({
  subsets: ['latin'],
  variable: '--font-mono'
})

export default function Fonts() {
  return (
    <style jsx global>
      {`
        :root {
          --font-sans: ${sans.style.fontFamily};
          --font-mono: ${mono.style.fontFamily};
        }
      `}
    </style>
  )
}