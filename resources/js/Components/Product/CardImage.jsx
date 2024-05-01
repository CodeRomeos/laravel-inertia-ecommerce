import React from "react";

function ImageContent({ src, alt }) {
    return (
        <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
    );
}

function ImageWrapper({ children }) {
    return (
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            {children}
        </div>
    );
}

export default function CardImage({ imageUrl, imageAlt }) {
    return (
        <ImageWrapper>
            <ImageContent src={imageUrl} alt={imageAlt} />
        </ImageWrapper>
    );
}
