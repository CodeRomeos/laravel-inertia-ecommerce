import React from "react";
import { Camera, Star } from "lucide-react";

export default function RatingAverage({ className = "" }) {
    return (
        <div
            className={`flex items-center gap-x-1 bg-white bg-opacity-40 px-3 rounded-lg ${className}`}
        >
            <label className="text-xs">4.7</label>
            <Star strokeWidth={1.5} size={16} />
            <span>|</span>
            <span className="text-xs">10</span>
        </div>
    );
}
