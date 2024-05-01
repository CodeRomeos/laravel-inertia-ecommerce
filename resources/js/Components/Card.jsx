import React from "react";

const Card = ({
    type = "default",
    children,
    bgImage = null,
    className = "",
}) => {
    const [styles, stylesSet] = React.useState({});

    React.useEffect(() => {
        if (bgImage) {
            stylesSet({ ...styles, ...{ backgroundImage: `url(${bgImage})` } });
        }
    }, [bgImage]);
    return (
        <>
            {type === "default" && (
                <div className={`${className}`} style={styles}>
                    {children}
                </div>
            )}
            {type === "cover" && (
                <div className={`relative w-full ${className}`}>{children}</div>
            )}
        </>
    );
};
export default Card;

export const CardTitle = ({ children, className = "" }) => (
    <div className={`flex items-center justify-center ${className}`}>
        {children}
    </div>
);
export const CardImage = ({ src = null, className = "", alt = "image" }) => (
    <img className={`object-cover ${className}`} src={src} alt={alt} />
);

export const CardContent = ({ children, className = "" }) => (
    <div className={`"bg-red-500 text-white" ${className}`}>{children}</div>
);
export const CardOverLay = () => (
    <div className="absolute inset-0 group-hover:opacity-30 bg-gray-700 opacity-60 rounded-md"></div>
);

export const CardActions = ({ children, className = "" }) => (
    <div className={`flex items-center justify-center ${className}`}>
        {children}
    </div>
);

Card.Title = CardTitle;
Card.Image = CardImage;
Card.Content = CardContent;
Card.Actions = CardActions;
Card.OverLay = CardOverLay;
