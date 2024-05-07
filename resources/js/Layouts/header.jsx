import ThemeToggle from "../Components/ThemeToggle/theme-toggle";
import { cn } from "@/shadcn";
import { MobileSidebar } from "./mobile-sidebar";
import { UserNav } from "./user-nav";
import { PopOverDropdown } from "@/Components/PopOverDropdown";
import { BellRing } from "lucide-react";
import { usePage } from "@inertiajs/react";

export default function Header() {
    const {appName} = usePage().props
    return (
        <div className="fixed top-0 left-0 right-0 supports-backdrop-blur:bg-background/60 border-b bg-background/95 backdrop-blur z-20">
            <nav className="h-14 flex items-center justify-between px-4">
                <div className="hidden lg:block">
                    <a href="/dashboard" className="flex gap-x-2 items-center">
                        <img
                            src="/fav/logo-icon.svg"
                            alt={appName}
                            className="w-12 brightness-0 invert-0 dark:brightness-100"
                        />
                        <p className="text-2xl dark:text-white">{appName}</p>
                    </a>
                </div>
                <div className={cn("block lg:!hidden")}>
                    <MobileSidebar />
                </div>

                <div className="flex items-center gap-2">
                    <PopOverDropdown
                        title={`Recent Notifications`}
                        variant="outline"
                        size="icon"
                        icon={
                            <BellRing className="w-4 h-4 text-black dark:text-white" />
                        }
                    />
                    <ThemeToggle />
                    <UserNav />
                </div>
            </nav>
        </div>
    );
}
