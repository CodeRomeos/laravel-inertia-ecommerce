import React from "react";
import Card from "@/Components/Card";
import PrimaryButton from "./PrimaryButton";

export default function CoverCard({
    actions,
    title,
    content,
    overlay = true,
    alt,
    src = null,
    contentClass,
    titleClass,
    imgClass,
}) {
    return (
        <Card type="cover" className="group overflow-hidden">
            <Card.Image
                className={`object-cover group-hover:scale-105 transition-all duration-300 rounded-md ${imgClass}`}
                src={src}
                alt={alt}
            />
            {overlay && <Card.OverLay />}
            <div className="absolute inset-0 translate-y-1/4 text-white space-y-7">
                {title && (
                    <Card.Title
                        className={`!text-3xl font-bold group-hover:scale-125 transition duration-500 ${titleClass}`}
                    >
                        {title}
                    </Card.Title>
                )}
                {content && (
                    <div
                        className={`flex items-center justify-center ${contentClass}`}
                    >
                        <Card.Content>{content}</Card.Content>
                    </div>
                )}
                {actions && <Card.Actions>{actions}</Card.Actions>}
            </div>
        </Card>
    );
}
