import React from "react";

export default function Surface({ className = "bg-white", children }) {
    return (
        <div
            className={`bg-white py-8 sm:py-24 px-4 sm:px-6 lg:px-8 ${className}`}
        >
            {children}
        </div>
    );
}
