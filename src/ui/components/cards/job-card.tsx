import { BarChart4Icon, Clock, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

type JobCardProps = {
    logo: string;
    company: string;
    title: string;
    salary: string;
    location: string;
    tags: string[];
    link: string;
};

const JobCard = ({ logo, company, title, salary, location, tags, link }: JobCardProps) => {
    return (
        <div className="flex flex-col gap-13.5 max-w-85 sm:max-w-150 w-full border border-[#ececec] rounded-2xl px-3 py-5.5 sm:p-8 hover:bg-white hover:shadow-[0_2px_20px_#4343431a] transition-all duration-300 cursor-pointer">
            {/* top section */}
            <div className="flex max-sm:flex-col sm:items-end justify-between gap-5.5">
                {/* company detail */}
                <div className="flex items-end gap-4">
                    {/* company logo */}
                    <Image
                        src={logo}
                        alt="Company logo"
                        width={45}
                        height={40}
                        className="w-auto h-10 object-contain"
                    />
                    {/* company info */}
                    <div>
                        <span className="block text-muted-foreground">{company}</span>
                        <span className="text-2xl font-semibold leading-none">{title}</span>
                    </div>
                </div>

                {/* salary & location */}
                <div className="sm:text-right text-muted-foreground">
                    <span className="block  font-bold">{salary}</span>
                    <span>{location}</span>
                </div>
            </div>

            {/* bottom section */}
            <div className="flex max-sm:flex-col sm:items-end justify-between gap-4.5">

                {/* tags */}
                <div className="flex gap-3.75">
                    {tags.map((tag, index) => {
                        const icons = [MapPin, Clock, BarChart4Icon];
                        const IconComponent = icons[index % icons.length];
                        return (
                            <div key={index} className="bg-[#fafafa] border border-[#4443] rounded-full flex items-center justify-center gap-1.25 p-1.5 pr-3">
                                <IconComponent className="size-4 text-muted-foreground" />
                                <span className="font-medium text-muted-foreground text-sm">{tag}</span>
                            </div>
                        );
                    })}
                </div>

                {/*action button */}
                <Link
                    href={link}
                    className="text-center max-sm:w-full text-white font-medium tracking-wide leading-6 border border-[#18181899] bg-[linear-gradient(270deg,#434343,#000)]
                rounded-full px-3.5 py-2"

                >
                    See Details
                </Link>
            </div>
        </div>
    )
}

export default JobCard