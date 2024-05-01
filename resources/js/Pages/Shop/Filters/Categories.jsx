import React from "react";
import Card, { CardContent, CardTitle } from "@/Components/Card";

export default function Categories({ onCategoryChange }) {
    const filters = {
        categories: ["Category 1", "Category 2", "Category 3"],
    };

    const handleCategoryChange = (category) => {
        onCategoryChange(category);
    };
    return (
        <Card className="bg-white p-3 mb-4 rounded shadow-sm">
            <CardTitle className="!justify-start font-bold mb-3">
                Category
            </CardTitle>
            <CardContent>
                {filters.categories.map((category, index) => (
                    <li key={index} className="mb-2 list-none">
                        <label className="inline-flex items-center">
                            <input
                                type="checkbox"
                                className="bg-blue-900"
                                onChange={() => handleCategoryChange(category)}
                            />
                            <span className="ml-2">{category}</span>
                        </label>
                    </li>
                ))}
            </CardContent>
        </Card>
    );
}
