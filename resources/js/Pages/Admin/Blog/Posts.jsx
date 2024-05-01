import { Button } from "@/shadcn/ui/button";
import { ScrollArea } from "@/shadcn/ui/scroll-area";
import DashboardLayout from "../layout/layout";
import PageHeading from "../components/PageHeading";
import { Link } from "@inertiajs/react";
import {
    ArrowUpDown,
    ChevronDown,
    MoreHorizontal,
    Pencil,
    PlusCircle,
} from "lucide-react";
import { Checkbox } from "@/shadcn/ui/checkbox";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/shadcn/ui/dropdown-menu";
import RTable from "@/Components/Admin/RTable";

export const columns = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) =>
                    table.toggleAllPageRowsSelected(!!value)
                }
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "title",
        header: "Title",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("title")}</div>
        ),
    },
    {
        accessorKey: "category.title",
        header: "Category"
    },
    {
        accessorKey: "slug",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Slug
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => (
            <div className="lowercase">{row.getValue("slug")}</div>
        ),
    },
    {
        accessorKey: "inactive_at",
        header: () => <div className="text-right">In-Active At</div>,
        cell: ({ row }) => (
            <div className="lowercase">{row.getValue("inactive_at")}</div>
        ),
    },
    {
        id: "actions",
        header: () => <div className="text-right">Actions</div>,
        enableHiding: false,
        cell: ({ row }) => {
            const payment = row.original;

            return (
                <div className="text-right">
                    <Button asChild variant="outline" size="icon">
                        <Link
                            href={route(
                                "admin.blog.posts.edit",
                                row.original.id
                            )}
                        >
                            <Pencil className="h-4 w-4" />
                        </Link>
                    </Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem
                                onClick={() =>
                                    navigator.clipboard.writeText(payment.id)
                                }
                            >
                                Copy payment ID
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>View customer</DropdownMenuItem>
                            <DropdownMenuItem>
                                View payment details
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            );
        },
    },
];

export default function Posts({ blogPosts }) {
    return (
        <DashboardLayout>
            <ScrollArea className="h-full">
                <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
                    <PageHeading>
                        <PageHeading.Title>Posts</PageHeading.Title>
                        <PageHeading.Actions>
                            <Button variant="outline">Download</Button>
                            <Button asChild>
                                <Link
                                    href={route("admin.blog.posts.create")}
                                >
                                    <PlusCircle className="h-4 w-4 mr-2" />{" "}
                                    Create New
                                </Link>
                            </Button>
                        </PageHeading.Actions>
                    </PageHeading>
                    <RTable
                        data={blogPosts.data}
                        columns={columns}
                        searchColumns={["title", "slug"]}
                    />
                </div>
            </ScrollArea>
        </DashboardLayout>
    );
}
