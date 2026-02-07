import Image from 'next/image'
import PrimaryButton from '../buttons/primary-button'
import { routes } from '@/app/routes';

interface Props {
    image?: boolean;
    data: {
        category: string;
        blogImg: string;
        title: string;
        date: string;
        authorImage: string;
        authorName: string;
        authorPosition: string;
    };
}

const BlogCard = ({ image, data }: Props) => {
    return (
        <div>
            {
                image &&
                <div className='w-full'>
                    <Image
                        src={data.blogImg}
                        alt='blog image'
                        width={638}
                        height={444}
                        className='h-auto w-full max-h-125 md:h-111 object-cover rounded-lg'
                    />
                </div>
            }
            <div className='bg-white rounded-2xl flex flex-col justify-start items-start h-auto py-4 md:py-8 px-3 md:px-6.5 mb-5 shadow'>
                {/* blog detail */}
                <div className="h-7.5 border border-[#4443] flex items-center rounded-full py-1.5 px-3 hover:bg-[#fafafa] cursor-pointer">
                    <span className='text-muted-foreground text-sm font-medium'>{data.category}</span>
                </div>
                <h3 className='text-[17px] md:text-2xl font-medium mt-4.5'>{data.title}</h3>
                <span className='max-sm:text-[13px] text-muted-foreground mt-3'>{data.date}</span>
                <div className="flex max-sm:flex-col justify-between gap-4 sm:items-center w-full mt-12">
                    {/* author detail */}
                    <div className="flex items-center gap-4">
                        <Image
                            src={data.authorImage}
                            alt='blog writer image'
                            width={44}
                            height={50}
                            className='h-auto w-11 object-cover rounded-full'
                        />
                        <div>
                            <span className="sm:text-lg font-medium block">{data.authorName}</span>
                            <span className="text-muted-foreground text-xs sm:text-sm">{data.authorPosition}</span>
                        </div>
                    </div>
                    <PrimaryButton
                        text='Read More'
                        bgColor="white"
                        textColor="#1f1f1f"
                        link={routes.landing.blogs}
                    />
                </div>
            </div>
        </div>
    )
}

export default BlogCard