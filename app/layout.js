import "@/node_modules/react-modal-video/css/modal-video.css";
import "../public/assets/css/zefxa.css";
import "swiper/css";
// import "swiper/css/navigation"
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { dmSans, manrope } from "@/lib/font";
import Script from "next/script";
// import Plugin from "@/components/plugin/Plugin";

export const metadata = {
  title: "Dr. Madhuri M S",
  description: "Compassionate care, expertise in women’s health",
  icons: {
    icon: "/assets/flat-icons/Dr-Madhurifavicon.png",
    apple: "/assets/flat-icons/Dr-Madhurifavicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${manrope.variable}`}>
      <body>
        {children}

        {/* jQuery Plugin */}
        {/* <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
          strategy="afterInteractive"
        />
        <Script id="appadd-plugin" strategy="afterInteractive">{`
          (function(){
            function execute(){
              try {
                var eppathurl = window.location.origin + window.location.pathname;
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function(){
                  if (this.readyState === 4 && this.status === 200) {
                    if (this.response !== 0) {
                      var temp = this.response.split("||||||||||");
                      if (window.jQuery) {
                        jQuery('head').append(temp[0]);
                        jQuery('body').append(temp[1]);
                      } else {
                        document.head.insertAdjacentHTML('beforeend', temp[0]);
                        document.body.insertAdjacentHTML('beforeend', temp[1]);
                      }
                    }
                  }
                };
                xhr.open('GET', atob('aHR0cHM6Ly9wbHVnaW5zLmFwcGFkZC5pbi5uZXQvYWxsaGVhZGRhdGE/ZWtleT1lLUFQUEFERDg0ODIzNTkyNjMmZWtleXBhc3M9YXY4dFVidGxVdnExczMxS09vTjRoUTlqdW5xTWppeU04WXdGJnNpdGV1cmw9') + eppathurl);
                xhr.send();
              } catch (e) {
                console.error('AppAdd plugin failed', e);
              }
            }
            if (document.readyState === 'complete') { execute(); }
            else { window.addEventListener('load', execute); }
          })();
        `}</Script> */}

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QDDNNJJ07B"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-QDDNNJJ07B');
        `}</Script>
      </body>
    </html>
  );
}
