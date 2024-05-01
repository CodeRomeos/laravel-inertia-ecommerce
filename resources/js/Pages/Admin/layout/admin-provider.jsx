import "../../../../css/shadcn.css";
import { ThemeProvider } from "../components/ThemeToggle/theme-provider";

export default function AdminProvider({ children }) {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            {children}
        </ThemeProvider>
    );
}
