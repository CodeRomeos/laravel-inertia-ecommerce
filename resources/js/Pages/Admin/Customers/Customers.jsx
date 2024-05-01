// import { CalendarDateRangePicker } from "@/shadcn/date-range-picker";
// import { Overview } from "@/shadcn/overview";
// import { RecentSales } from "@/shadcn/recent-sales";
import { Button } from "@/shadcn/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/shadcn/ui/card";
import { ScrollArea } from "@/shadcn/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shadcn/ui/tabs";
import DashboardLayout from "../layout/layout";
import PageHeading from "../components/PageHeading";

export default function Customers() {
    return (
        <DashboardLayout>
            <ScrollArea className="h-full">
                <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
                    <PageHeading>
                        <PageHeading.Title>
                            Customers
                        </PageHeading.Title>
                        <PageHeading.Actions>
                            <Button>Download</Button>
                        </PageHeading.Actions>
                    </PageHeading>
                </div>
            </ScrollArea>
        </DashboardLayout>
    );
}
