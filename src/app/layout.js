import "./globals.css";
import data from "./data";
import RecordPlayer from "@/components/RecordPlayer";

export const metadata = {
  title: `${data.to}'s card`,
  description: `Valentine's Card for ${data.to}`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/hearts-1.png" type="image/png" />
      </head>
      <body>
        {data.music && <RecordPlayer />}
        {children}
      </body>
    </html>
  );
}
