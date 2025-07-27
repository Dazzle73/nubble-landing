"use client";
import { Instagram } from "lucide-react";
import Link from "next/link";
import React from "react";
import { NubbleLogo } from "@/components/blocks/branding/NubbleLogo";

export function SimpleFooterWithFourGrids() {
  const product = [
    {
      title: "Features",
      href: "#",
    },
    {
      title: "Pricing",
      href: "#",
    },
    {
      title: "FAQ",
      href: "#",
    },
  ];

  const support = [
    {
      title: "Contact",
      href: "mailto:nubble.help@gmail.com",
    },
    {
      title: "UGC Program",
      href: "/ugc",
    },
    {
      title: "Privacy Policy",
      href: "/privacy-policy",
    },
    {
      title: "Terms & Conditions",
      href: "/terms-conditions",
    },
  ];

  const download = [
    {
      title: "iOS App",
      href: "#",
    },
    {
      title: "Android App",
      href: "#",
    },
    {
      title: "Web App",
      href: "#",
    },
  ];
  return (
    <div className="border-t border-border px-8 py-20 bg-card w-full relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex sm:flex-row flex-col justify-between items-start md:px-8">
        <div className="max-w-sm">
          <div className="mr-0 md:mr-4 md:flex mb-4">
            <Logo />
          </div>

          <p className="text-muted-foreground">
            AI-powered nutrition tracking for a healthier you.
          </p>
          <div className="flex items-center space-x-4 mt-8">
            <Link
              href="https://instagram.com/nubbleapp"
              className="text-primary hover:text-primary/90 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Nubble on Instagram"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link
              href="https://tiktok.com/@nubbleapp"
              className="text-primary hover:text-primary/90 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Nubble on TikTok"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512">
                <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
              </svg>
            </Link>
          </div>
          <div className="mt-8 text-sm text-muted-foreground">
            © 2025 Nubble. All rights reserved.
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 items-start mt-10 sm:mt-0 md:mt-0">
          <div className="flex justify-start space-y-4 flex-col w-full">
            <p className="font-bold text-foreground">Product</p>
            <ul className="text-muted-foreground list-none space-y-4 text-sm">
              {product.map((page, idx) => (
                <li key={"pages" + idx} className="list-none">
                  <Link
                    className="transition-colors hover:text-foreground"
                    href={page.href}
                  >
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-start space-y-4 flex-col">
            <p className="font-bold text-foreground">Support</p>
            <ul className="text-muted-foreground list-none space-y-4 text-sm">
              {support.map((legal, idx) => (
                <li key={"legal" + idx} className="list-none">
                  <Link
                    className="transition-colors hover:text-foreground"
                    href={legal.href}
                  >
                    {legal.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-start space-y-4 flex-col">
            <p className="font-bold text-foreground">Download</p>
            <ul className="text-muted-foreground list-none space-y-4 text-sm">
              {download.map((auth, idx) => (
                <li key={"auth" + idx} className="list-none">
                  <Link
                    className="transition-colors hover:text-foreground"
                    href={auth.href}
                  >
                    {auth.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export const Logo = () => {
  return (
    <NubbleLogo width={130} height={40} />
  );
};