import React from "react";
import Modal from "../Modal";
import IconButton from "../IconButton";
import { MoveRight, Search } from "lucide-react";
import CardImage from "./CardImage";
import Heading from "../Heading";
import AddToCart from "./AddToCart";
import PrimaryButton from "../PrimaryButton";

export default function QuickView({
    confirmUserDeletion,
    confirmingUserDeletion,
    closeModal,
}) {
    return (
        <>
            <PrimaryButton
                // onClick={confirmUserDeletion}
                onClick={confirmUserDeletion}
            >
                <Search size={20} /> Quick View
            </PrimaryButton>

            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <button
                    onClick={closeModal}
                    className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                >
                    <span className="sr-only">Close</span>
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                <div className="p-3 grid grid-cols-1 sm:grid-cols-5 gap-x-4">
                    <div className="col-span-2">
                        <CardImage
                            imageUrl={`https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg`}
                            imageAlt={"image"}
                        />
                    </div>
                    <div className="col-span-3 p-3">
                        <Heading level="2" className="!text-xl mb-1">
                            Black Tee
                        </Heading>
                        <p className="text-2xl text-gray-900">Rs. 1800</p>

                        {/* Short description */}
                        <div className="mt-6">
                            <h4 className="text-sm font-medium text-gray-900">
                                Details
                            </h4>
                            <p className="text-gray-500 text-sm">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Sit deleniti saepe laboriosam
                                ..{" "}
                                <a
                                    href="#"
                                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                                >
                                    read more
                                </a>
                            </p>
                        </div>

                        {/* Ratings */}
                        <div className="mt-6">
                            <h4 className="sr-only">Reviews</h4>
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    <svg
                                        className="text-gray-900 h-5 w-5 flex-shrink-0"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                    <svg
                                        className="text-gray-900 h-5 w-5 flex-shrink-0"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                    <svg
                                        className="text-gray-900 h-5 w-5 flex-shrink-0"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                    <svg
                                        className="text-gray-900 h-5 w-5 flex-shrink-0"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                    <svg
                                        className="text-gray-200 h-5 w-5 flex-shrink-0"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <p className="sr-only">3.9 out of 5 stars</p>
                                <a
                                    href="#"
                                    className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                                >
                                    117 reviews
                                </a>
                            </div>
                        </div>

                        {/* Color */}
                        <div className="mt-6">
                            <div className="flex items-center justify-between">
                                <h4 className="text-sm font-medium text-gray-900">
                                    Size
                                </h4>
                                <a
                                    href="#"
                                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                                >
                                    3 More colors
                                </a>
                            </div>

                            <fieldset className="mt-4">
                                {/* <legend className="sr-only">Choose a color</legend> */}
                                <span className="flex items-center space-x-3">
                                    <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
                                        <input
                                            type="radio"
                                            name="color-choice"
                                            value="White"
                                            className="sr-only"
                                            aria-labelledby="color-choice-0-label"
                                        />
                                        <span
                                            id="color-choice-0-label"
                                            className="sr-only"
                                        >
                                            White
                                        </span>
                                        <span
                                            aria-hidden="true"
                                            className="h-8 w-8 bg-white rounded-full border border-black border-opacity-10"
                                        ></span>
                                    </label>

                                    <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
                                        <input
                                            type="radio"
                                            name="color-choice"
                                            value="Gray"
                                            className="sr-only"
                                            aria-labelledby="color-choice-1-label"
                                        />
                                        <span
                                            id="color-choice-1-label"
                                            className="sr-only"
                                        >
                                            Gray
                                        </span>
                                        <span
                                            aria-hidden="true"
                                            className="h-8 w-8 bg-gray-200 rounded-full border border-black border-opacity-10"
                                        ></span>
                                    </label>

                                    <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-900">
                                        <input
                                            type="radio"
                                            name="color-choice"
                                            value="Black"
                                            className="sr-only"
                                            aria-labelledby="color-choice-2-label"
                                        />
                                        <span
                                            id="color-choice-2-label"
                                            className="sr-only"
                                        >
                                            Black
                                        </span>
                                        <span
                                            aria-hidden="true"
                                            className="h-8 w-8 bg-gray-900 rounded-full border border-black border-opacity-10"
                                        ></span>
                                    </label>
                                </span>
                            </fieldset>
                        </div>

                        {/* Sizes */}
                        <div className="mt-6">
                            <div className="flex items-center justify-between">
                                <h4 className="text-sm font-medium text-gray-900">
                                    Size
                                </h4>
                                <a
                                    href="#"
                                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                                >
                                    2 more sizes
                                </a>
                            </div>

                            <fieldset className="mt-4">
                                <legend className="sr-only">
                                    Choose a size
                                </legend>
                                <div className="grid grid-cols-4 gap-4">
                                    <label className="group relative flex items-center justify-center rounded-md border p-1 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                                        <input
                                            type="radio"
                                            name="size-choice"
                                            value="XXS"
                                            className="sr-only"
                                            aria-labelledby="size-choice-0-label"
                                        />
                                        <span id="size-choice-0-label">
                                            XXS
                                        </span>

                                        <span
                                            className="pointer-events-none absolute -inset-px rounded-md"
                                            aria-hidden="true"
                                        ></span>
                                    </label>

                                    <label className="group relative flex items-center justify-center rounded-md border p-1 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                                        <input
                                            type="radio"
                                            name="size-choice"
                                            value="XS"
                                            className="sr-only"
                                            aria-labelledby="size-choice-1-label"
                                        />
                                        <span id="size-choice-1-label">XS</span>

                                        <span
                                            className="pointer-events-none absolute -inset-px rounded-md"
                                            aria-hidden="true"
                                        ></span>
                                    </label>

                                    <label className="group relative flex items-center justify-center rounded-md border p-1 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                                        <input
                                            type="radio"
                                            name="size-choice"
                                            value="S"
                                            className="sr-only"
                                            aria-labelledby="size-choice-2-label"
                                        />
                                        <span id="size-choice-2-label">S</span>

                                        <span
                                            className="pointer-events-none absolute -inset-px rounded-md"
                                            aria-hidden="true"
                                        ></span>
                                    </label>

                                    <label className="group relative flex items-center justify-center rounded-md border p-1 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-not-allowed bg-gray-50 text-gray-200">
                                        <input
                                            type="radio"
                                            name="size-choice"
                                            value="XXXL"
                                            disabled
                                            className="sr-only"
                                            aria-labelledby="size-choice-7-label"
                                        />
                                        <span id="size-choice-7-label">
                                            XXXL
                                        </span>
                                        <span
                                            aria-hidden="true"
                                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                        >
                                            <svg
                                                className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                                viewBox="0 0 100 100"
                                                preserveAspectRatio="none"
                                                stroke="currentColor"
                                            >
                                                <line
                                                    x1="0"
                                                    y1="100"
                                                    x2="100"
                                                    y2="0"
                                                    vector-effect="non-scaling-stroke"
                                                />
                                            </svg>
                                        </span>
                                    </label>
                                </div>
                            </fieldset>
                        </div>

                        {/* Categories */}
                        {/* <div className="flex gap-x-2 mt-6">
                            <p className="text-sm text-black">Categories</p>
                            <a
                                href="#!"
                                className="bg-gray-200 text-xs py-1 text-black px-2 rounded block"
                            >
                                Clothing
                            </a>
                            <a
                                href="#!"
                                className="bg-gray-200 text-xs py-1 text-black px-2 rounded block"
                            >
                                Men
                            </a>
                        </div> */}

                        {/* Action Buttons */}
                        <div className="flex gap-x-3 mt-8 mb-3">
                            <AddToCart isQuickView={true} />
                        </div>
                        <PrimaryButton
                            className={`gap-x-2 w-full justify-center`}
                        >
                            View <MoveRight />
                        </PrimaryButton>
                    </div>
                </div>
            </Modal>
        </>
    );
}
