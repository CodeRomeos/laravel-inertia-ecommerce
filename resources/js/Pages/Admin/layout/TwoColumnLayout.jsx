import { ScrollArea } from "@/shadcn/ui/scroll-area";
import DashboardLayout from "./layout";

export default function TwoColumnLayout({ children }) {
    return (
        <DashboardLayout>
            <ScrollArea className="h-full">
                <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
                    {children}
                </div>
            </ScrollArea>
        </DashboardLayout>
    );
}

const Heading = ({ children }) => {
    return <div className="w-full">{children}</div>;
};

const Content = ({ children }) => {
    return (
        <div className="grid sm:grid-cols-3 gap-4">{children}</div>
    );
};

const Main = ({children}) => {
    return (
        <main className="sm:col-span-2 w-full space-y-4">
            {children}
        </main>
    );
}

const Aside = ({children}) => {
    return (
        <aside className="w-full h-full space-y-4">
            {children}
        </aside>
    );
}

const Actions = ({children}) => {
    return (
        <div className="w-full h-full my-4">
            {children}
        </div>
    );
}

TwoColumnLayout.Heading = Heading;
TwoColumnLayout.Aside = Aside;
TwoColumnLayout.Content = Content;
TwoColumnLayout.Main = Main;
TwoColumnLayout.Actions = Actions;
