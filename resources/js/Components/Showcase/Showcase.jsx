import { useState } from "react";
import Heading from "../Heading";
import Price from "../Product/Price";
import RatingAverage from "../Product/RatingAverage";
import AddToCart from "../Product/AddToCart";
import PrimaryButton from "../PrimaryButton";

export default function ShowCase({
    data,
    defaultActiveIndex = 0,
    onItemClick,
}) {
    const [activeItem, setActiveItem] = useState(defaultActiveIndex);

    const handleItemClick = (index) => {
        setActiveItem(index);
        if (onItemClick) {
            onItemClick(index);
        }
    };

    return (
        <div className="showcase">
            {data.map((item, index) => (
                <div
                    key={index}
                    className={`showcase-item flex flex-[0.5] min-h-[400px] m-4 items-center justify-center rounded-3xl bg-cover bg-center relative overflow-hidden cursor-pointer transition-all duration-700 group ${
                        index === activeItem
                            ? `active flex-[6]`
                            : ""
                    }`}
                    style={{
                        backgroundImage: `url(${item.imgUrl})`,
                    }}
                    onClick={() => handleItemClick(index)}
                >
                    <div className="absolute h-full z-10 transition-all duration-700 scale-95 group-hover:scale-100 hidden group-[.active]:block">
                        <div className="flex items-center h-full">
                            <div className="p-8 bg-white w-[80%] mx-auto bg-opacity-65 backdrop-blur-sm rounded">
                                <p className="text-2xl">{item.name}</p>
                                <p className="hidden sm:block">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Praesentium optio, earum
                                    consectetur, cumque autem possimus ad
                                    asperiores tempore, repudiandae fugit
                                    debitis? Nostrum voluptas eius id excepturi
                                    saepe ducimus numquam laudantium!
                                </p>
                                <div className="">
                                    <Price />
                                    <RatingAverage className="!inline-flex mb-4" />
                                    <div className="flex gap-x-4">
                                        <PrimaryButton>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="w-5 h-5 me-3"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                                />
                                            </svg>
                                            Add to Wishlist
                                        </PrimaryButton>
                                        <div className="max-w-sm">
                                            <AddToCart />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
