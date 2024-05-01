import React from "react";

export default function Price({ className = "" }) {
    return (
        <div className={`flex gap-x-2 my-4 ${className}`}>
            <p className="text-sm font-semibold text-gray-900">Rs. 1800</p>
            <p className="text-sm font-medium text-gray-400 line-through">
                Rs. 3600
            </p>
            <p className="text-sm font-medium text-red-400">50% OFF</p>
        </div>
    );
}
