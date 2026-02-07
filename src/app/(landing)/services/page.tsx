import OurBlogs from "@/ui/sections/blogs/our-blogs";
import ServicesHero from "@/ui/sections/hero/services-hero";
import JobProcess from "@/ui/sections/process/job-process";
import Faqs from "@/ui/sections/testimonials/faqs";
import Testimonials from "@/ui/sections/testimonials/testimonials";

export default function ServicePage() {
  return (
    <>
    <ServicesHero />
    <JobProcess />
    <Testimonials />
    <Faqs />
    <OurBlogs />
    </>
  );
}