import { cn } from "@/shadcn";
import { DashboardNav } from "../components/dashboard-nav";

export default function Sidebar() {
    return (
        <nav
            className={cn(
                `relative hidden h-screen border-r pt-16 lg:block w-72`
            )}
        >
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    <div className="space-y-1">
                        <h2 className="mb-2 px-4 text-xl font-semibold tracking-tight">
                            Overview
                        </h2>
                        <DashboardNav
                            items={[
                                {
                                    title: "Dashboard",
                                    href: route("admin.dashboard"),
                                    icon: "dashboard",
                                    label: "Dashboard",
                                },
                                {
                                    title: "Catalog",
                                    href: route("admin.catalog.products"),
                                    icon: "panelsRightBottom",
                                    label: "Catalog",
                                    items: [
                                        {
                                            title: "Products",
                                            href: route(
                                                "admin.catalog.products"
                                            ),
                                            icon: "package",
                                            label: "Products",
                                        },
                                        {
                                            title: "Categories",
                                            href: route(
                                                "admin.catalog.categories"
                                            ),
                                            icon: "package",
                                            label: "Categories",
                                        },
                                    ],
                                },
                                {
                                    title: "Customers",
                                    href: route("admin.customers.customers"),
                                    icon: "user",
                                    label: "Customers",
                                    items: [
                                        {
                                            title: "Customers",
                                            href: route(
                                                "admin.customers.customers"
                                            ),
                                            icon: "user",
                                            label: "Customers",
                                        },
                                    ],
                                },
                                {
                                    title: "Blog",
                                    href: route("admin.blog.posts.index"),
                                    icon: "pages",
                                    label: "Blogs",
                                    items: [
                                        {
                                            title: "Posts",
                                            href: route("admin.blog.posts.index"),
                                            icon: "post",
                                            label: "Posts",
                                        },
                                        {
                                            title: "Categories",
                                            href: route("admin.blog.categories.index"),
                                            icon: "folders",
                                            label: "Categories",
                                        },
                                    ],
                                },
                            ]}
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
}
