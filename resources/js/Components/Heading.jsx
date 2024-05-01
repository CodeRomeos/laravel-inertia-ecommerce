import React from "react";

export const H1 = ({ children, className = "" }) => (
    <h1
        className={`text-5xl font-bold tracking-tight text-gray-900 ${className}`}
    >
        {children}
    </h1>
);
export const H2 = ({ children, className = "" }) => (
    <h2
        className={`text-4xl font-bold tracking-tight text-gray-900 ${className}`}
    >
        {children}
    </h2>
);
export const H3 = ({ children, className = "" }) => (
    <h3
        className={`text-3xl font-bold tracking-tight text-gray-900 ${className}`}
    >
        {children}
    </h3>
);
export const H4 = ({ children, className = "" }) => (
    <h4
        className={`text-2xl font-bold tracking-tight text-gray-900 ${className}`}
    >
        {children}
    </h4>
);
export const H5 = ({ children, className = "" }) => (
    <h5
        className={`text-xl font-bold tracking-tight text-gray-900 ${className}`}
    >
        {children}
    </h5>
);
export const H6 = ({ children, className = "" }) => (
    <h6
        className={`text-lg font-bold tracking-tight text-gray-900 ${className}`}
    >
        {children}
    </h6>
);
export default function Heading({ level = "1", children, className = "" }) {
    switch (level) {
        case "1":
            return <H1 className={className}>{children}</H1>;
            break;
        case "2":
            return <H2 className={className}>{children}</H2>;
            break;
        case "3":
            return <H3 className={className}>{children}</H3>;
            break;
        case "4":
            return <H4 className={className}>{children}</H4>;
            break;
        case "5":
            return <H5 className={className}>{children}</H5>;
            break;
        case "6":
            return <H6 className={className}>{children}</H6>;
            break;

        default:
            return <H1 className={className}>{children}</H1>;
            break;
    }
}
