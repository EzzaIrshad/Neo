"use client";
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Fade from 'embla-carousel-fade'
import Autoplay from 'embla-carousel-autoplay'
import { useEffect, useState } from 'react';
import PrimaryButton from '../buttons/primary-button';
import Image from 'next/image';
import { routes } from '@/app/routes';

type PropType = {
    direction?: string
    options?: EmblaOptionsType
    content: Array<{ id: number, title: string, description: string, benefits: string[], imageSrc: string }>
}

const ServicesFadeCarousel = ({ direction, options, content }: PropType) => {

    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade(), Autoplay()])
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        if (!emblaApi) return
        emblaApi.plugins().autoplay?.play()
        emblaApi.on('select', () => setCurrentIndex(emblaApi.selectedScrollSnap()))
    }, [emblaApi])

    return (
        <div>
            <div className={`flex w-full  ${direction ? "justify-start" : "justify-end"}`}>
                <div className="w-full lg:w-140 xl:w-160">
                    <div className="w-full text-right font-medium text-xl tracking-wide">{String(currentIndex + 1).padStart(2, '0')}/{String(content.length).padStart(2, '0')}</div>
                    <div className="flex items-start mt-2 mb-8 gap-5">
                        {content.map((item) => (
                            <div key={item.id} className={`w-full lg:w-55 h-0.75 ${item.id === currentIndex + 1 ? 'bg-[#4449]' : 'bg-[#ecedeb]'}`} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex -ml-4 touch-pan-y touch-pinch-zoom">
                    {content.map((item) => (
                        <div className={`flex-[0_0_100%] flex max-lg:flex-col gap-10 justify-between min-w-0 pl-4 ${direction && "flex-row-reverse"}`} key={item.id}>
                            <div className="flex flex-col justify-start items-start">
                                <h3 className='font-medium text-[22px] lg:text-4xl'>{item.title}</h3>
                                <p className='text-muted-foreground md:text-lg xl:text-xl tracking-wide max-w-112.5 mt-4.5'>
                                    {item.description}
                                </p>
                                <h4 className='text-lg md:text-xl xl:text-2xl mt-8 font-medium'>What you get:</h4>
                                <ul className="mt-2 mb-2.5 pl-10 space-y-1">
                                    {item.benefits.map((benefit, idx) => (
                                        <li key={idx} className='list-disc text-muted-foreground tracking-wide'>{benefit}</li>
                                    ))}
                                </ul>
                                <div className="mt-5 md:mt-13.5">
                                    <PrimaryButton
                                        text="Discover Now"
                                        bgColor="linear-gradient(270deg, #434343, #000)"
                                        link={routes.landing.services}
                                    />
                                </div>
                            </div>
                            <Image
                                src={item.imageSrc}
                                alt='service image'
                                width={697}
                                height={366}
                                className='rounded-2xl object-cover w-full h-auto lg:max-w-140 xl:max-w-160 max-h-75 lg:max-h-91.5 select-none'
                            />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default ServicesFadeCarousel