import AdminProvider from "./admin-provider";

export default function BlankLayout({ children }) {
    return (
        <AdminProvider>
            <div className="flex h-screen overflow-hidden">
                <main className="w-full tracking-tight bg-background">
                    {children}
                </main>
            </div>
        </AdminProvider>
    );
}
