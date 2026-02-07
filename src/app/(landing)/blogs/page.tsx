import BlogsList from "@/ui/sections/blogs/blogs-list";
import BlogsHero from "@/ui/sections/hero/blogs-hero";
import Newsletter from "@/ui/sections/testimonials/newsletter";

export default function BlogsPage() {
    return (
        <>
            <BlogsHero />
            <BlogsList />
            <Newsletter />
        </>
    );
}