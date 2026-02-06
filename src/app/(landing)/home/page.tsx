import HomeAbout from "@/ui/sections/about/home-about";
import HomeHero from "@/ui/sections/hero/home-hero";
import JobOpening from "@/ui/sections/jobs/job-opening";
import JobProcess from "@/ui/sections/process/job-process";
import OurServices from "@/ui/sections/services/our-services";
import Testimonials from "@/ui/sections/testimonials/testimonials";

export default function Home() {
  return (
    <>
    <HomeHero />
    <HomeAbout />
    <JobProcess />
    <OurServices />
    <JobOpening />
    <Testimonials />
    </>
  );
}
