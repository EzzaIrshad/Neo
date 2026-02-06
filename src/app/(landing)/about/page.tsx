import HomeAbout from "@/ui/sections/about/home-about";
import AboutHero from "@/ui/sections/hero/about-hero";
import JobProcess from "@/ui/sections/process/job-process";
import Faqs from "@/ui/sections/testimonials/faqs";
import Newsletter from "@/ui/sections/testimonials/newsletter";
import Testimonials from "@/ui/sections/testimonials/testimonials";

export default function AboutPage() {
  return (
    <>
    <AboutHero />
    <JobProcess />
    <HomeAbout />
    <Testimonials />
    <Faqs />
    <Newsletter />
    </>
  );
}