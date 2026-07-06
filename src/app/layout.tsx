import "./globals.css";
import { Quicksand} from "next/font/google";

const customfront = Quicksand({
    weight: "700",
    subsets: ["latin"],
}) 

export const metadata = {
  title: "Pokinote",
  description: "PokiNote app shell",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className="h-full">
      {/* 
    
      */}
      <body className="mx-auto min-h-screen max-w-[430px] bg-[#FAF6E8] ">
        <div className="flex min-h-screen flex-col bg-white">
          {children}
        </div>
      </body>
    </html>
  );
}