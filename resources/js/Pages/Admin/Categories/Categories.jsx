import { Button } from "@/shadcn/ui/button";
import { ScrollArea } from "@/shadcn/ui/scroll-area";
import DashboardLayout from "../layout/layout";
import PageHeading from "../components/PageHeading";

export default function Categories() {
    return (
        <DashboardLayout>
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
        </DashboardLayout>
    );
}
