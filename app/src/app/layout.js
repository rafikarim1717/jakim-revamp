import { meta } from "@/lib/meta";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = meta({ title: "JAKIM 2027 · Jakarta International Marathon (konsep revamp)", lang: "id", path: "/" });

export const viewport = { themeColor: "#0F2A22" };

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <div className="site">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
