import Image from 'next/image'

interface Prop{
    text: string
}

const TitleBadge = ({text}: Prop) => {
    return (
        <div className="mb-4.5 inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-2 text-sm font-medium text-muted-foreground">
            <Image
                src="/assets/svg/black-sparkle.svg"
                alt="Sparkles"
                width={23}
                height={23}
            />
            {text}
        </div>
    )
}

export default TitleBadge