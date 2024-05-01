import React from "react";
import Heading from "../Heading";
import CardImage from "./CardImage";
import AddToCart from "./AddToCart";
import IconButton from "../IconButton";
import RatingAverage from "./RatingAverage";
import Price from "./Price";
import QuickView from "./QuickView";

export default function ProductCard() {
    const [confirmingUserDeletion, setConfirmingUserDeletion] =
        React.useState(false);
    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };
    const closeModal = () => {
        setConfirmingUserDeletion(false);
    };
    const [sale, setSale] = React.useState(false);
    return (
        <div className="mx-auto max-w-[300px]">
            <div className="group relative overflow-hidden">
                {!sale && (
                    <span className="absolute z-10 top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">
                        Sale
                    </span>
                )}

                <div className="absolute right-0 top-2 pr-3 z-10">
                    <IconButton
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                />
                            </svg>
                        }
                    />
                </div>

                <a href="#" className="block relative">
                    <CardImage
                        imageUrl={`https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg`}
                        imageAlt={"image"}
                    />
                    <div className="flex items-center justify-between absolute bottom-2 right-2 w-full">
                        <div className="ml-4">
                            <RatingAverage />
                        </div>
                        <div className="">
                            <QuickView
                                confirmingUserDeletion={confirmingUserDeletion}
                                confirmUserDeletion={confirmUserDeletion}
                                closeModal={closeModal}
                            />
                        </div>
                    </div>
                </a>
                <div className="mt-4">
                    <div>
                        <p className="text-md text-gray-800 font-semibold">
                            <a href="#">Basic Tee</a>
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                            Black Solid Cotton Pure Cotton T-shirt Regular Fit
                        </p>
                    </div>
                </div>
                <Price />
                <AddToCart />
            </div>
        </div>
    );
}
