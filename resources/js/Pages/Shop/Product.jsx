import React from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";

export default function Shop({ auth }) {
    return (
        <GuestLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Shop
                </h2>
            }
        >
            <Head title="Product" />

            <div className="sm:flex block p-6 sm:px-12">
                Single product
            </div>
        </GuestLayout>
    );
}
