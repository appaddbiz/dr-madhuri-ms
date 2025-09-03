import "@/node_modules/react-modal-video/css/modal-video.css";
import "../public/assets/css/zefxa.css";
import "swiper/css";
// import "swiper/css/navigation"
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { dmSans, manrope } from "@/lib/font";

export const metadata = {
  title: "Dr. Madhuri M S",
  description: "Compassionate care, expertise in women’s health",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
