import TitleBadge from '@/ui/components/badge/title-badge'
import { Input } from '@/ui/components/shadcn/input'
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,

} from '@/ui/components/shadcn/select'

const ContactHero = () => {
    return (
        <section className="section-container bg-white mt-5 p-5 sm:p-10 md:p-15 rounded-2xl">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:max-lg:items-end">

                {/* form */}
                <div className='flex flex-col'>
                    {/* header */}
                    <div className="flex flex-col gap-4 mb-15">
                        {/* header badge */}
                        <div className="w-fit">
                            <TitleBadge text="Get In Touch" />
                        </div>

                        <h1 className="text-[clamp(38px,5vw,62px)] max-w-100 font-medium">
                            We&apos;re here to help you
                        </h1>

                    </div>
                    <div className="pt-5 lg:pt-11 lg:pr-12.5">
                        <form method='get' className='flex flex-col gap-5'>
                            <div className="space-y-6">
                                {/* name & purpose */}
                                <div className="flex max-xl:flex-col gap-6 w-full">
                                    <div className='flex-1'>
                                        <label htmlFor="name" className='text-muted-foreground'>Name</label>
                                        <Input
                                            id='name'
                                            name='name'
                                            placeholder="Enter Your Full Name"
                                            className="border border-[#00000026] rounded-[6px] mt-2 text-base text-muted-foreground bg-white w-full py-2 px-3"
                                        />
                                    </div>
                                    <div className='flex-1'>
                                        <label htmlFor="purpose" className='text-muted-foreground'>Purpose</label>
                                        <Select>
                                            <SelectTrigger className='border border-[#00000026] rounded-[6px] mt-2 text-muted-foreground bg-white py-2 px-3'>
                                                <SelectValue placeholder="Select Your Purpose.." />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="inquiry">Job Application Inquiry</SelectItem>
                                                <SelectItem value="partnership">Paternership & Collaboration</SelectItem>
                                                <SelectItem value="support">General Questions or Supoort</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                {/* email */}
                                <div>
                                    <label htmlFor="email" className='text-muted-foreground'>Email Address</label>
                                    <Input
                                        id='email'
                                        name='email'
                                        placeholder="Enter Your Email"
                                        className="border border-[#00000026] rounded-[6px] mt-2 text-base text-muted-foreground bg-white w-full py-2 px-3"
                                    />
                                </div>

                                {/* inquiry */}
                                <div>
                                    <label htmlFor="inquiry" className='text-muted-foreground'>Inquiry Message</label>
                                    <textarea
                                        id='inquiry'
                                        name='inquiry'
                                        rows={5}
                                        placeholder="Tell us briefly what you're looking for..."
                                        className="border border-[#00000026] rounded-[6px] mt-2 text-base text-muted-foreground bg-white w-full py-2 px-3"
                                    />
                                </div>

                                {/* button */}
                                <button
                                    type='submit'
                                    className="text-center max-sm:w-full py-3 px-6 text-white font-medium tracking-wide leading-6 rounded-full cursor-pointer border border-[#18181899] bg-[linear-gradient(108deg,#4d4d4d,#000)]"

                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* map */}
                <div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d37502.83702007106!2d71.50644752720963!3d30.18208447086423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1770496448242!5m2!1sen!2s"
                        width="570"
                        height="737"
                        className='border-none w-full h-full min-h-80 sm:min-h-100 md:max-lg:h-130'
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">

                    </iframe>
                </div>
            </div>
        </section>
    )
}

export default ContactHero