import React from "react";
// import Heading from "@/Components/Heading";
import ProductCard from "@/Components/Product/ProductCard";
import GuestLayout from "@/Layouts/GuestLayout";
// import Navbar from "@/Layouts/Navbar";
import { Head, Link } from "@inertiajs/react";
import Slider from "@/Components/Slider";
import SmallLineCard from "@/Components/SmallLineCard";
import PrimaryButton from "@/Components/PrimaryButton";
import CoverCard from "@/Components/CoverCard";
import Heading from "@/Components/Heading";
import Surface from "@/Layouts/Surface";
// import Promo from "@/Components/Promo";

import USPBarItem from "@/Components/USPBar";
import { USPItem, productShowcaseList } from "@/data";
import Intro from "@/Components/Intro";
import SwiperCarousel from "@/Components/SwiperCarousel";
import ShowCase from "@/Components/Showcase/Showcase";
import Sale from "@/Components/Sale/Sale";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const features = [
        { name: "Origin", description: "Designed by Good Goods, Inc." },
        {
            name: "Material",
            description:
                "Solid walnut base with rare earth magnets and powder coated steel card cover",
        },
        { name: "Dimensions", description: '6.25" x 3.55" x 1.15"' },
        {
            name: "Finish",
            description: "Hand sanded and finished with natural oil",
        },
        { name: "Includes", description: "Wood card tray and 3 refill packs" },
        {
            name: "Considerations",
            description:
                "Made from natural materials. Grain and color vary with each item.",
        },
    ];

    const slides = [
        { img: "./slides/s1.jpeg", label: "apple" },
        { img: "./slides/s2.jpeg", label: "Mango" },
        { img: "./slides/s3.jpeg", label: "Banana" },
        { img: "./slides/s4.jpeg", label: "Guava" },
    ];

    const handleItemClick = (index) => {
        console.log(`Clicked item index: ${index}`);
    };
    return (
        <GuestLayout>
            <Head title="Welcome" />
            <Slider slides={slides} duration={5000} />
            <Surface className="bg-slate-100">
                {/* <Card bgImage={"./slides/s4.jpeg"}>
                    <Card.Title className="text-lg font-semibold">
                        Simple Card
                    </Card.Title>
                    <Card.Content>
                        <p className="text-gray-700">
                            This is a simple card with background.
                        </p>
                    </Card.Content>
                    <Card.Actions>
                        <PrimaryButton>View</PrimaryButton>
                    </Card.Actions>
                </Card> */}

                <Heading level="2" className="mb-4 text-center">
                    Shop By Category
                </Heading>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                    {[
                        {
                            cat: "Men",
                            img: "./temp/Men.jpg",
                        },
                        {
                            cat: "Accessories",
                            img: "./temp/accessories.jpg",
                        },
                        {
                            cat: "Women",
                            img: "./temp/women.jpg",
                        },
                        {
                            cat: "Kids",
                            img: "./temp/kids.jpg",
                        },
                    ].map((item, index) => (
                        <React.Fragment key={index}>
                            <CoverCard
                                title={item.cat}
                                src={item.img}
                                alt="ok"
                                content={"lorem"}
                                imgClass="min-h-64"
                                contentClass="hide"
                                overlay={true}
                                actions={
                                    <>
                                        <PrimaryButton>OK</PrimaryButton>
                                    </>
                                }
                            />
                        </React.Fragment>
                    ))}
                </div>
            </Surface>

            <Surface className="!bg-slate-100">
                <div className="max-w-7xl mx-auto">
                    <Heading level="2" className="">
                        Trending Products
                    </Heading>

                    <SwiperCarousel
                        count={8}
                        slidesPerView={4}
                        speed={3000}
                        delay={3500}
                        breakpoints={{ sm: 2, md: 4, xl: 5 }}
                    >
                        <ProductCard />
                    </SwiperCarousel>
                </div>
            </Surface>

            <Surface>
                <div className="max-w-7xl mx-auto">
                    <Heading level="2" className="">
                        Just In
                    </Heading>

                    <SwiperCarousel
                        count={5}
                        slidesPerView={4}
                        speed={3000}
                        delay={3500}
                        breakpoints={{ sm: 2, md: 4, xl: 4 }}
                    >
                        <ProductCard />
                    </SwiperCarousel>
                </div>
            </Surface>

            <Surface className="!bg-slate-100">
                <div className="max-w-7xl mx-auto">
                    <Heading level="2" className="">
                        Featured
                    </Heading>
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        <ProductCard />
                    </div>
                </div>
            </Surface>

            <Surface className="!py-8">
                <Sale />
            </Surface>

            <Surface className="!py-8">
                <div className="w-full">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-center">
                        {USPItem.map((item, index) => (
                            <React.Fragment key={index}>
                                <USPBarItem
                                    icon={item.icon}
                                    title={item.label}
                                    description={item.details}
                                />
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </Surface>

            <Surface className="!bg-slate-100">
                <SmallLineCard />
            </Surface>

            <Surface className="bg-slate-100">
                <div className="max-w-7xl mx-auto">
                    <Heading level="2" className="">
                        Limited Edition
                    </Heading>
                    <ShowCase
                        data={productShowcaseList}
                        defaultActiveIndex={1}
                        onItemClick={handleItemClick}
                    />
                </div>
            </Surface>

            <Surface>
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                        <img
                            src="./temp/t-4.jpeg"
                            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                            className="rounded-lg bg-gray-100"
                        />
                        <img
                            src="./temp/t-1.jpeg"
                            alt="Top down view of walnut card tray with embedded magnets and card groove."
                            className="rounded-lg bg-gray-100"
                        />
                        <img
                            src="./temp/t-3.jpeg"
                            alt="Side of walnut card tray with card groove and recessed card area."
                            className="rounded-lg bg-gray-100"
                        />
                        <img
                            src="./temp/t-2.jpeg"
                            alt="Walnut card tray filled with cards and card angled in dedicated groove."
                            className="rounded-lg bg-gray-100"
                        />
                    </div>

                    <div>
                        <Heading level="2" className="">
                            First On <span className="text-blue-600"> U</span>
                            lka
                        </Heading>
                        <p className="mt-4 text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Est dicta laborum adipisci alias voluptas?
                            Praesentium modi quibusdam eos.
                        </p>
                        <Heading level="4" className="mt-12">
                            Specification
                        </Heading>
                        <dl className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                            {features.map((feature) => (
                                <div
                                    key={feature.name}
                                    className="border-t border-gray-200 pt-4"
                                >
                                    <dt className="font-medium text-gray-900">
                                        {feature.name}
                                    </dt>
                                    <dd className="mt-2 text-sm text-gray-500">
                                        {feature.description}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </Surface>

            <Surface className="!px-0">
                <Intro features={features} />
            </Surface>
        </GuestLayout>
    );
}
