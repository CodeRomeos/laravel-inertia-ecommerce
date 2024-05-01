// src/components/Slider.js
import React, { useState, useEffect } from "react";
import IconButton from "./IconButton";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Heading from "./Heading";

const Slide = ({ img, label }) => (
    <div className="w-full flex-shrink-0 relative">
        <img src={img} alt={`Slide`} className="w-full h-full object-cover" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/4 -translate-y-1/2 text-center bg-white bg-opacity-40 px-8 py-2">
            <Heading level="2" className="sm:!text-6xl uppercase">
                {label}
            </Heading>
        </div>
    </div>
);

const SliderControls = ({ onPrev, onNext }) => (
    <>
        <IconButton
            onClick={onPrev}
            icon={<ChevronLeft />}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white"
        />
        <IconButton
            onClick={onNext}
            icon={<ChevronRight />}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white"
        />
    </>
);

const Slider = ({ slides, duration = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, duration);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative w-full overflow-hidden">
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <Slide key={index} img={slide.img} label={slide.label} />
                ))}
            </div>
            <SliderControls onPrev={prevSlide} onNext={nextSlide} />
        </div>
    );
};
export default Slider;
