import { blogCardData } from "@/constants/blog-card-data"
import BlogCard from "@/ui/components/cards/blog-card"

const BlogsList = () => {
    return (
        <section className="section-container py-10 md:py-15 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-3 sm:px-10">
                {
                    blogCardData.map((blog,idx)=>(
                        <BlogCard key={idx} image={true} data={blog} />
                    ))
                }
            </div>
        </section>
    )
}

export default BlogsList