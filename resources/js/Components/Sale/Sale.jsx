import React from "react";

export default function Sale() {
    return (
        <section className="py-28 w-full table relative bg-[url('./temp/sale-image.jpeg')] bg-center bg-fixed bg-no-repeat bg-cover">
            <div className="absolute inset-0 bg-slate-900/30"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 text-center">
                    <h3 className="font-semibold text-3xl leading-normal mb-4 text-white">
                        End of Season Clearance <br /> Sale upto 30%
                    </h3>

                    <p className="text-white/80 max-w-xl mx-auto">
                        Upgrade your style with our curated sets. Choose
                        confidence, embrace your unique look.
                    </p>

                    <div className="mt-6">
                        <a
                            href="sale.html"
                            className="py-2 px-5 inline-block font-semibold tracking-wide align-middle text-center bg-white text-orange-500 rounded-md"
                        >
                            <i className="mdi mdi-cart-outline"></i> Shop Now
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
