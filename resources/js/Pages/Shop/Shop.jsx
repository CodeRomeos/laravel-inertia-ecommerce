import React from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import Heading from "@/Components/Heading";
import FiltersSidebar from "./Filters/FiltersSidebar";
import { productList } from "@/data";
import ProductCard from "@/Components/Product/ProductCard";

export default function Shop({ auth }) {
    const [filteredProducts, setFilteredProducts] = React.useState(productList);
    const [priceRange, setPriceRange] = React.useState([0, 100]);
    const [selectedCategories, setSelectedCategories] = React.useState([]);
    const [selectedColors, setSelectedColors] = React.useState([]);
    const [selectedSizes, setSelectedSizes] = React.useState([]);
    const [selectedRating, setSelectedRating] = React.useState(null);
    const [resetFilters, setResetFilters] = React.useState(false);
    const handlePriceRangeChange = (value) => {
        setPriceRange(value);
        filterProducts(
            value,
            selectedCategories,
            selectedColors,
            selectedSizes,
            selectedRating
        );
    };

    const handleCategoryChange = (category) => {
        const updatedCategories = selectedCategories.includes(category)
            ? selectedCategories.filter((c) => c !== category)
            : [...selectedCategories, category];

        setSelectedCategories(updatedCategories);
        filterProducts(
            priceRange,
            updatedCategories,
            selectedColors,
            selectedSizes,
            selectedRating
        );
    };

    const handleColorChange = (colors) => {
        setSelectedColors(colors);
        filterProducts(
            priceRange,
            selectedCategories,
            colors,
            selectedSizes,
            selectedRating
        );
    };

    const handleSizeChange = (sizes) => {
        setSelectedSizes(sizes);
        filterProducts(
            priceRange,
            selectedCategories,
            selectedColors,
            sizes,
            selectedRating
        );
    };

    const handleRatingChange = (rating) => {
        setSelectedRating(rating);
        filterProducts(
            priceRange,
            selectedCategories,
            selectedColors,
            selectedSizes,
            rating
        );
    };

    const filterProducts = (priceRange, categories, colors, sizes, rating) => {
        const filtered = productList.filter(
            (product) =>
                product.price >= priceRange[0] &&
                product.price <= priceRange[1] &&
                (categories.length === 0 ||
                    categories.includes(product.category)) &&
                (colors.length === 0 || colors.includes(product.color)) &&
                (sizes.length === 0 || sizes.includes(product.size)) &&
                (rating === null || product.rating >= rating)
        );
        setFilteredProducts(filtered);
    };

    const handleResetFilters = () => {
        setPriceRange([0, 100]);
        setSelectedCategories([]);
        setSelectedColors([]);
        setSelectedSizes([]);
        setSelectedRating(null);
        setFilteredProducts(productList);
        setResetFilters(true);
    };

    const ProductList = ({ products }) => {
        return products.map((product, index) => (
            <React.Fragment key={index}>
                <ProductCard />
            </React.Fragment>
        ));
    };
    return (
        <GuestLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Shop
                </h2>
            }
        >
            <Head title="Shop" />

            <div className="page-shop sm:flex block p-6 sm:px-12">
                <div className="w-full sm:w-1/4 p-4 border-r">
                    <h2 className="text-xl font-bold mb-4">Filters</h2>
                    <FiltersSidebar
                        onCategoryChange={handleCategoryChange}
                        onColorChange={handleColorChange}
                        onSizeChange={handleSizeChange}
                        onRatingChange={handleRatingChange}
                        onRangeChange={handlePriceRangeChange}
                        onResetFilters={handleResetFilters}
                        resetFilters={resetFilters}
                    />
                </div>
                <div className="w-full sm:w-3/4 p-4">
                    <div className="mt-8">
                        <ProductList products={filteredProducts} />
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
