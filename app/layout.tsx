import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Shadowrealm Agents',
  description: 'A multi-agent fantasy RPG',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
