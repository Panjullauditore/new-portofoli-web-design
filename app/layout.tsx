import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "../components/Navigation";
import { CursorGlow } from "@/components/animations/CursorGlow";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Ahmad Fahrezi | Portfolio",
    description: "Full-Stack Developer & Informatics Student - Building modern web applications with passion",
    keywords: ["developer", "portfolio", "fullstack", "react", "nextjs", "typescript"],
    authors: [{ name: "Ahmad Fahrezi" }],
    openGraph: {
        title: "Ahmad Fahrezi | Portfolio",
        description: "Full-Stack Developer & Informatics Student",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.className} antialiased`}>
                <Providers>
                    <TooltipProvider>
                        <Toaster />
                        <SonnerToaster />
                        <CursorGlow />
                        <div className="min-h-screen bg-background text-foreground">
                            <Navigation />
                            {children}
                            <Footer />
                        </div>
                    </TooltipProvider>
                </Providers>
            </body>
        </html>
    );
}
