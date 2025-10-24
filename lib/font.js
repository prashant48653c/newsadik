import { Inter, Outfit } from 'next/font/google'

export const outfit = Outfit({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: "--outfit",
    display: 'swap',
})

export const inter = Inter({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: "--inter",
    display: 'swap',
})
