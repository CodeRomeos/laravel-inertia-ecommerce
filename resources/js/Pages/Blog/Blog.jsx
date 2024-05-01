import React from "react";
import Card, { CardContent, CardTitle } from "@/Components/Card";
import CardImage from "@/Components/Product/CardImage";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import { Posts } from "@/Data";
import Surface from "@/Layouts/Surface";
import Pagination from "@/Components/Pagination";
export default function Blog({ auth, postList }) {
    const Article = ({ articleItem }) => {
        return (
            <Card className="!p-3 bg-slate-50 mb-4 rounded shadow hover:shadow-md transition-all group">
                <CardImage
                    imageUrl={`https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg`}
                    imageAlt={"image"}
                />
                <CardTitle className="font-semibold my-4 !justify-start group-hover:text-blue-900 text-xl sm:h-14 sm:overflow-hidden !items-start">
                    <a href={route("blog.find", articleItem.slug)}>
                        {articleItem.title}
                    </a>
                </CardTitle>
                <time className="text-sm border-b border-slate-200 pb-2 block mb-2">
                    Posted on - 12 Jan, 2024
                </time>
                <CardContent className="!pb-8 !text-gray-500 first-letter:capitalize first-letter:text-xl first-letter:text-blue-900">
                    {articleItem.body}
                </CardContent>
            </Card>
        );
    };

    return (
        <GuestLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Blog
                </h2>
            }
        >
            {/* {console.log(postList)} */}
            <Head title="Blog" />
            <Surface>
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4">
                    {postList.data &&
                        postList.data.length > 0 &&
                        postList.data.map((articleItem, index) => (
                            <React.Fragment key={index}>
                                <Article articleItem={articleItem} />
                            </React.Fragment>
                        ))}
                    <Pagination class="mt-6" links={postList.links} />
                </div>
            </Surface>
        </GuestLayout>
    );
}
