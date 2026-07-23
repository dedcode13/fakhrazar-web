import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "فناوران جرقه فخرآذر | تجهیزات کنترل سطح صنعتی",
  description:
    "طراحی و تولید تجهیزات Corona Treatment، Anti Static و Static Charger برای صنایع چاپ، بسته‌بندی، پلاستیک و لمینیشن.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
