interface BlogsImageSectionProps {
    imageUrl: string;
    altText: string;
    priority?: boolean; // Set to true if the image is at the very top of the page
}

export default function BlogsImageSection({
    imageUrl,
    altText,
    priority = false
}: BlogsImageSectionProps) {
    return (
        <div className="relative w-full overflow-hidden bg-gray-100">
            <img
                src={imageUrl}
                alt={altText}
                className="w-full h-auto object-cover md:max-h-[520px]"
                loading={priority ? "eager" : "lazy"}
            />
        </div>
    );
}