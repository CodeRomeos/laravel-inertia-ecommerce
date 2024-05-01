import React from "react";
import Heading from "./Heading";
import Price from "./Product/Price";
import RatingAverage from "./Product/RatingAverage";

import QuickView from "./Product/QuickView";

export default function SmallLineCard() {
    const [confirmingUserDeletion, setConfirmingUserDeletion] =
        React.useState(false);
    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };
    const closeModal = () => {
        setConfirmingUserDeletion(false);
    };

    const ProductCard = ({ imageSrc, productLink, title }) => (
        <div className="w-full">
            <div className="w-full group bg-white border p-3 relative overflow-hidden">
                <div className="w-full h-full flex justify-center items-center gap-x-4">
                    <div className="w-[75px] h-[100px]">
                        <img
                            src={imageSrc}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex-1 h-full flex flex-col justify-center">
                        <a href={productLink}>
                            <p className="title mb-2 sm:text-[15px] text-[13px] font-600 leading-[24px] line-clamp-1 hover:text-blue-600">
                                {title}
                            </p>
                        </a>

                        <Price className="mt-0" />
                        <div className="flex justify-between items-center">
                            <RatingAverage className="px-0" />
                            <div className="absolute -bottom-11 right-3 transition-all duration-500 group-hover:bottom-2">
                                <QuickView
                                    confirmingUserDeletion={
                                        confirmingUserDeletion
                                    }
                                    confirmUserDeletion={confirmUserDeletion}
                                    closeModal={closeModal}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    return (
        <div className="max-w-7xl mx-auto">
            <Heading level="2" className="mb-4">
                Popular Products
            </Heading>
            <div className="w-full">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 ">
                    {[1, 2, 3, 5, 19, 12, 9, 21, 23, 11, 10, 0].map((index) => (
                        <React.Fragment key={index}>
                            <ProductCard
                                imageSrc="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                                productLink="#!"
                                title="Musaphics consequat consectetur aliquip nulla deserunt non ea"
                                mainPrice="25.25"
                                offerPrice="10.99"
                            />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}
