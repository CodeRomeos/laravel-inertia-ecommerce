import React from "react";
import Categories from "./Categories";
import Colors from "./Colors";
import Sizes from "./Size";
import Ratings from "./Ratings";
import Price from "./Price";

export default function FiltersSidebar({
    onCategoryChange,
    onRangeChange,
    onColorChange,
    onSizeChange,
    onRatingChange,
    onResetFilters,
    resetFilters,
}) {
    React.useEffect(() => {
        if (resetFilters) {
            onCategoryChange([]);
            onColorChange([]);
            onSizeChange([]);
            onRatingChange(null);
            onResetFilters();
        }
    }, [
        resetFilters,
        onCategoryChange,
        onColorChange,
        onSizeChange,
        onRangeChange,
        onRatingChange,
        onResetFilters,
    ]);

    const ClearFilters = () => {
        return (
            <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-0.5 px-4 my-4"
                onClick={onResetFilters}
            >
                <span className="sr-only">Clear Filters</span>
                <span className="flex gap-x-3 items-center">
                    <svg
                        className="h-5 w-5 text-gray-900"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>
                    Reset Filters
                </span>
            </button>
        );
    };

    return (
        <div>
            {/* <ClearFilters /> */}
            <Price onRangeChange={onRangeChange} />
            <Categories onCategoryChange={onCategoryChange} />
            <Colors onColorChange={onColorChange} />
            <Sizes onSizeChange={onSizeChange} />
            <Ratings onRatingChange={onRatingChange} />
        </div>
    );
}
