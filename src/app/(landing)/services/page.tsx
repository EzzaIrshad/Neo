import OurBlogs from "@/ui/sections/blogs/our-blogs";
import JobProcess from "@/ui/sections/process/job-process";
import OurServices from "@/ui/sections/services/our-services";
import Faqs from "@/ui/sections/testimonials/faqs";
import Testimonials from "@/ui/sections/testimonials/testimonials";

export default function ServicePage() {
  return (
    <>
    <OurServices />
    <JobProcess />
    <Testimonials />
    <Faqs />
    <OurBlogs />
    </>
  );
}