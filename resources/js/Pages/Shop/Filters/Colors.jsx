import React from "react";
import Card, { CardContent, CardTitle } from "@/Components/Card";

export default function Colors({ onColorChange }) {
    const colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF"];

    const [selectedColors, setSelectedColors] = React.useState([]);

    const handleColorChange = (color) => {
        const updatedColors = selectedColors.includes(color)
            ? selectedColors.filter((c) => c !== color)
            : [...selectedColors, color];

        setSelectedColors(updatedColors);
        onColorChange(updatedColors);
    };

    return (
        <Card className="bg-white p-3 mb-4 rounded shadow-sm">
            <CardTitle className="!justify-start font-bold mb-3">
                Colors
            </CardTitle>
            <CardContent>
                <ul>
                    {colors.map((color, index) => (
                        <li key={index} className="mb-2 list-none">
                            <label className="inline-flex items-center">
                                <div
                                    style={{ backgroundColor: color }}
                                    className="h-6 w-6"
                                ></div>
                                <input
                                    type="checkbox"
                                    onChange={() => handleColorChange(color)}
                                />
                                <span className="ml-2">{color}</span>
                            </label>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}
