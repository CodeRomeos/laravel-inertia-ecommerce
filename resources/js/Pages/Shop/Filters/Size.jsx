import React from "react";
import Card, { CardContent, CardTitle } from "@/Components/Card";

export default function Sizes({ onSizeChange }) {
    const sizes = ["S", "M", "L", "XL"];

    const [selectedSizes, setSelectedSizes] = React.useState([]);

    const handleSizeChange = (size) => {
        const updatedSizes = selectedSizes.includes(size)
            ? selectedSizes.filter((s) => s !== size)
            : [...selectedSizes, size];

        setSelectedSizes(updatedSizes);
        onSizeChange(updatedSizes);
    };
    return (
        <Card className="bg-white p-3 mb-4 rounded shadow-sm">
            <CardTitle className="!justify-start font-bold mb-3">
                Colors
            </CardTitle>
            <CardContent>
                <ul>
                    {sizes.map((size, index) => (
                        <li key={index} className="mb-2">
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    className="form-checkbox"
                                    onChange={() => handleSizeChange(size)}
                                />
                                <span className="ml-2">{size}</span>
                            </label>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}
