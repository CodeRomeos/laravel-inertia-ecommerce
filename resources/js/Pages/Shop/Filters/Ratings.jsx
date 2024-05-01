import React from "react";
import Card, { CardContent, CardTitle } from "@/Components/Card";
import { StarFilledIcon } from "@radix-ui/react-icons";

export default function Ratings({ onRatingChange }) {
    const [selectedRating, setSelectedRating] = React.useState([]);

    const handleRatingChange = (rating) => {
        const updatedRating = selectedRating.includes(rating)
            ? selectedRating.filter((r) => r !== rating)
            : [...selectedRating, rating];

        setSelectedRating(updatedRating);
        onRatingChange(updatedRating);
    };
    return (
        <Card className="bg-white p-3 mb-4 rounded shadow-sm">
            <CardTitle className="!justify-start font-bold mb-3">
                Ratings
            </CardTitle>
            <CardContent>
                {[5, 4, 3, 2, 1].map((rating, key) => (
                    <div key={key} className="mb-">
                        <label className="inline-flex items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox"
                                onChange={() => handleRatingChange(rating)}
                                // checked={selectedRating === rating}
                            />
                            <span className="ml-2 2 flex">
                                {[...Array(rating)].map((_, index) => (
                                    <StarFilledIcon
                                        key={index}
                                        color="tomato"
                                    />
                                ))}
                            </span>
                        </label>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}
