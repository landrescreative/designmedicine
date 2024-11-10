import './[locale]/globals.css';
require('dotenv').config();

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return children;
}
