import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'PlotNest — Find your place', description: 'An interactive real estate platform prototype by Utpal Sonowal.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
