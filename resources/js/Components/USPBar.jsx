import React from "react";

export default function USPBarItem({ icon, title, description }) {
    return (
        <div className="mb-6 sm:mb-0">
            <div className="flex space-x-5 items-center">
                <div>
                    <span>{icon}</span>
                </div>
                <div>
                    <p className="text-black text-[15px] font-bold tracking-wide mb-1">
                        {title}
                    </p>
                    <p className="text-sm text-black">{description}</p>
                </div>
            </div>
        </div>
    );
}
