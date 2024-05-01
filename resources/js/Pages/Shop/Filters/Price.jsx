import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Card, { CardContent, CardTitle } from "@/Components/Card";

export default function Price({ onRangeChange }) {
    const [priceRange, setPriceRange] = React.useState([300, 50000]);

    const handleSliderChange = (value) => {
        setPriceRange(value);
        onRangeChange(value);
    };
    return (
        <Card className="bg-white p-3 mb-4 rounded shadow-sm">
            <CardTitle className="!justify-start font-bold mb-3">
                Price
            </CardTitle>
            <CardContent>
                <Slider
                    range
                    min={300}
                    max={4000}
                    step={1}
                    value={priceRange}
                    onChange={handleSliderChange}
                />
                <div className="flex justify-between mt-2">
                    <span className="bg-slate-600 text-white text-xs px-2 py-0.5 rounded-full">
                        ${priceRange[0]}
                    </span>
                    <span className="bg-slate-600 text-white text-xs px-2 py-0.5 rounded-full">
                        ${priceRange[1]}
                    </span>
                </div>
            </CardContent>
        </Card>
    );
}
