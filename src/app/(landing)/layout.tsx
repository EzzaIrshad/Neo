import LandingFooter from "@/ui/sections/footers/landing-footer";
import LandingHeader from "@/ui/sections/headers/landing-header";


export default function LandingLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <LandingHeader />
            {children}
            <LandingFooter />
        </>
    );
}