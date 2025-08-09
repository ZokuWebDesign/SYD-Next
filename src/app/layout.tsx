import "@/app/global.css";
import { metadata } from "./metadata";
import "@/lib/performance";
import { Toaster } from "sonner";

export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#6366f1" />
        
        {/* Critical preconnects - load these first */}
        <link rel="preconnect" href="https://i.imgur.com" />
        <link rel="dns-prefetch" href="https://i.imgur.com" />
        
        {/* Optional: Add other domains you use */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Critical CSS - inline for above-the-fold content */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical above-the-fold styles */
            body { margin: 0; }
            * { box-sizing: border-box; }
            .min-h-screen { min-height: 100vh; }
            .scroll-smooth { scroll-behavior: smooth; }
            .relative { position: relative; }
            .overflow-hidden { overflow: hidden; }
            .-z-10 { z-index: -10; }
            .object-cover { object-fit: cover; }
          `
        }} />
      </head>
      <body suppressHydrationWarning className="min-h-screen bg-background font-sans antialiased">
        {children}
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}