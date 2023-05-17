import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Web devers | projects",
  description:
    "Check out all our latest projects in website an webapp development. We build a variety of projects from simple business landing pages to complex webapps such as management systems and ensure complete client satisfaction.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
