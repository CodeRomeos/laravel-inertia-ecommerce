import { Button } from "@/shadcn/ui/button";
import { ScrollArea } from "@/shadcn/ui/scroll-area";
import DashboardLayout from "../layout/layout";
import PageHeading from "../components/PageHeading";
import AdminLayout from "../layout/layout";
import { Head } from "@inertiajs/react";

export default function Categories() {
    return (
        <AdminLayout>
            <Head>
                <title>Categories</title>
            </Head>
            <ScrollArea className="h-full">
                <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
                    <PageHeading>
                        <PageHeading.Title>Categories</PageHeading.Title>
                        <PageHeading.Actions>
                            <Button>Download</Button>
                        </PageHeading.Actions>
                    </PageHeading>
                </div>
            </ScrollArea>
        </AdminLayout>
    );
}
