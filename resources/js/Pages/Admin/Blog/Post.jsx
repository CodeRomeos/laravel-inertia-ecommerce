import { Button } from "@/shadcn/ui/button";
import { Head, Link } from "@inertiajs/react";
import PageHeading from "../components/PageHeading";
import { useForm } from "@inertiajs/react";
import { Label } from "@/shadcn/ui/label";
import { Input } from "@/shadcn/ui/input";
import InputError from "@/Components/InputError";
import { Textarea } from "@/shadcn/ui/textarea";
import React from "react";
import EditorInput from "../components/EditorInput";
import { textToSlug } from "@/Helpers/GlobalFunctions";
import { TextMuted } from "@/shadcn/ui/text-muted";
import { MoreHorizontal, PlusCircle } from "lucide-react";
import ShadcnCard from "@/Components/Admin/ShadcnCard";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/shadcn/ui/dropdown-menu";
import MetaInputsCard from "@/Components/Admin/MetaInputsCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shadcn/ui/select";
import TwoColumnLayout from "../layout/TwoColumnLayout";

export default function Post({ blogPost, blogCategories }) {
    const [title, titleSet] = React.useState(blogPost ? blogPost.title : "");
    const { data, setData, post, processing, errors, reset } = useForm({
        title: blogPost ? blogPost?.title : "",
        slug: blogPost ? blogPost?.slug : "",
        body: blogPost ? blogPost?.body : "",
        blog_category_id: blogPost ? blogPost?.blog_category_id : "",
        meta_title: blogPost ? blogPost?.meta_title : "",
        meta_description: blogPost ? blogPost?.meta_description : "",
        meta_keyword: blogPost ? blogPost?.meta_keyword : "",
        inactive_at: blogPost ? blogPost?.inactive_at : "",
    });

    const submit = (e) => {
        e.preventDefault();

        if (blogPost) {
            post(
                route("admin.blog.posts.update", { id: blogPost.id })
            );
        } else {
            post(route("admin.blog.posts.store"));
        }
    };

    React.useEffect(() => {
        setData("title", title);
        if (!blogPost) setData("slug", textToSlug(title));
    }, [title]);

    return (
        <TwoColumnLayout>
            <Head>
                <title>{`${
                    blogPost ? "Edit Post - " + blogPost.title : "Create"
                } Post`}</title>
            </Head>
            <TwoColumnLayout.Heading>
                <PageHeading>
                    <PageHeading.Title>
                        Post - {blogPost ? "Edit " + blogPost.title : "Create"}
                    </PageHeading.Title>
                    <PageHeading.Actions>
                        <Button asChild variant="outline">
                            <Link href={route("admin.blog.posts.index")}>
                                Cancel
                            </Link>
                        </Button>
                        <Button asChild>
                            <Link href={route("admin.blog.posts.create")}>
                                <PlusCircle className="h-4 w-4 mr-2" /> Create
                                New
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
                                        navigator.clipboard.writeText(
                                            payment.id
                                        )
                                    }
                                >
                                    Copy payment ID
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    View customer
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    View payment details
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </PageHeading.Actions>
                </PageHeading>
                <div className="flex justify-between">
                    <div>
                        {blogPost ? (
                            <Link className="text-blue-600 italic text-sm">
                                {route("admin.blog.posts.edit", blogPost.id)}
                            </Link>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="flex gap-4"></div>
                </div>
            </TwoColumnLayout.Heading>
            <form onSubmit={submit}>
                <TwoColumnLayout.Content>
                    <TwoColumnLayout.Main>
                        <ShadcnCard
                            className="space-y-4"
                            title="General"
                            description={<></>}
                        >
                            <div>
                                <Label
                                    htmlFor="title"
                                    // className={`${errors.title ? "text-red-500" : ""}`}
                                >
                                    Title
                                </Label>
                                <Input
                                    id="title"
                                    type="text"
                                    name="title"
                                    value={title}
                                    autoFocus
                                    className="mt-1 block w-full text-3xl h-18"
                                    placeholder="Post title..."
                                    onChange={(e) => {
                                        titleSet(e.target.value);
                                        setData("title", e.target.value);
                                    }}
                                />

                                <InputError
                                    message={errors.title}
                                    className="mt-2"
                                />
                            </div>
                            <div>
                                <Label
                                    htmlFor="slug"
                                    // className={`${errors.slug ? "text-red-500" : ""}`}
                                >
                                    Slug
                                </Label>
                                <Input
                                    id="slug"
                                    type="text"
                                    name="slug"
                                    value={data.slug}
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData(
                                            "slug",
                                            textToSlug(e.target.value)
                                        )
                                    }
                                />

                                <InputError
                                    message={errors.slug}
                                    className="mt-2"
                                />
                            </div>
                            <div>
                                <Label
                                    htmlFor="blog_category_id"
                                    // className={`${errors.slug ? "text-red-500" : ""}`}
                                >
                                    Category
                                </Label>
                                <Select
                                    onValueChange={(cid) => setData("blog_category_id", cid)}
                                    id="blog_category_id"
                                    name="blog_category_id"
                                    value={`${data.blog_category_id}`}
                                >
                                    <SelectTrigger className="mt-1 w-full">
                                        <SelectValue placeholder="Select Category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {blogCategories.map((c) => (
                                            <SelectItem
                                                value={`${c.id}`}
                                                key={c.id}
                                            >
                                                {c.title}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Label
                                    htmlFor="body"
                                    // className={`${errors.body ? "text-red-500" : ""}`}
                                >
                                    Body
                                </Label>
                                <EditorInput
                                    value={data.body}
                                    onChange={(e) => setData("body", e)}
                                />
                                <InputError
                                    message={errors.body}
                                    className="mt-2"
                                />
                            </div>
                        </ShadcnCard>
                    </TwoColumnLayout.Main>
                    <TwoColumnLayout.Aside>
                        {blogPost && (
                            <ShadcnCard title="Info">
                                <TextMuted>
                                    {blogPost
                                        ? "Created - " +
                                          blogPost.created_at_string
                                        : ""}
                                </TextMuted>
                                <br />
                                <TextMuted>
                                    {blogPost
                                        ? "Updated - " +
                                          blogPost.updated_at_string
                                        : ""}
                                </TextMuted>
                            </ShadcnCard>
                        )}
                        <MetaInputsCard
                            data={data}
                            setData={setData}
                            errors={errors}
                        />
                    </TwoColumnLayout.Aside>
                </TwoColumnLayout.Content>
                <TwoColumnLayout.Actions>
                    <Button>Submit</Button>
                </TwoColumnLayout.Actions>
            </form>
        </TwoColumnLayout>
    );
}
