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
        <div className="hidden-above-1048">
          <div className="h-screen w-screen text-center px-5 flex justify-center items-center">
            <h1 className="text-4xl">
              your screen has to be a minimum of 1048 pixels if on mobile use
              the desktop view or use a laptop of other fitting screens
            </h1>
          </div>
        </div>
        {data.music && <RecordPlayer />}
        <div className="visible-above-1048">{children}</div>
      </body>
    </html>
  );
}
