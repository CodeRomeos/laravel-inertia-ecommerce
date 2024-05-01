import React from "react";
import PrimaryButton from "../PrimaryButton";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import SecondaryButton from "../SecondaryButton";
import IconButton from "../IconButton";
import TextInput from "../TextInput";

const ItemCount = () => {
    return (
        <div className="flex items-center gap-x-2">
            <IconButton
                icon={<Minus size={16} />}
                className="bg-gray-300 p-2 rounded"
            />
            <TextInput
                type="text"
                value={1}
                className="!w-8 !h-8 border-1 text-center bg-slate-50"
            />
            <IconButton
                icon={<Plus size={16} />}
                className="bg-gray-300 p-2 rounded"
            />
        </div>
    );
};
export default function AddToCart({ isQuickView }) {
    return (
        <>
            {isQuickView && <ItemCount />}
            <PrimaryButton
                // onClick={confirmUserDeletion}
                className={`gap-x-2 w-full justify-center`}
            >
                <ShoppingCart size={20} /> Add To Cart
            </PrimaryButton>
        </>
    );
}
