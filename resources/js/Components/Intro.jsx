import React from "react";
import Heading from "./Heading";

export default function Intro({ features }) {
    return (
        <div
            style={{
                background: "url(./temp/bg-story.png)",
                backgroundPosition: "center !important",
                backgroundRepeat: "no-repeat !important",
                backgroundSize: "cover !important",
            }}
        >
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div>
                    <Heading level="2" className="">
                        <span className="text-blue-600">Our</span> Story
                    </Heading>
                    <p className="mt-4 text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Est dicta laborum adipisci alias voluptas? Praesentium
                        modi quibusdam eos. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Voluptatibus, aut?
                        Blanditiis harum perspiciatis quod suscipiitae animi
                        cum, magni ut illum aop. Perferendis recusandae quas ea!
                        Eligendi unde repudiandae nulla, nesciunt tenetur
                        molestias assumenda rerum possimus, iusto officia
                        quaerat ullam vero et sapiente iste debitis.
                    </p>
                    <p className="mt-4 text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Est dicta laborum adipisci alias voluptas? Praesentium
                        modi quibusdam eos.
                    </p>
                    {/* <Heading level="4" className="mt-12">
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
                    </dl> */}
                </div>

                <div className="grid grid-cols-1 sm:gap-6 lg:gap-8 group bg-black overflow-hidden">
                    <div className="group-hover:scale-105 transition-all duration-500 relative">
                        <img
                            src="./temp/our-story.jpg"
                            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                            className="h-100 w-full bg-gray-100"
                        />
                        <div className="absolute h-full z-10 top-0 opacity-0 group-hover:opacity-100 transition-all duration-700 scale-0 group-hover:scale-100">
                            <div className="flex items-center h-full">
                                <div className="p-8 bg-white w-[80%] mx-auto bg-opacity-65 backdrop-blur-sm shadow-lg rounded">
                                    <Heading level="2" className="!mb-3">
                                        Lorem title
                                    </Heading>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Praesentium optio, earum
                                    consectetur, cumque autem possimus ad
                                    asperiores tempore, repudiandae fugit
                                    debitis? Nostrum voluptas eius id excepturi
                                    saepe ducimus numquam laudantium!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
