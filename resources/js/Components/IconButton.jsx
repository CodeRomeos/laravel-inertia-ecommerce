import React from "react";

export default function IconButton({ icon, className = "", ...any }) {
    return (
        <button className={className} {...any}>
            {icon}
        </button>
    );
}
