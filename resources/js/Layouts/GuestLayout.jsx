import Navbar from "./Navbar";
import Bar from "@/Components/Bar";
import Footer from "@/Components/Footer";

export default function Guest({ children }) {
    return (
        <div>
            <Bar />
            <Navbar />
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
                {children}
            </div>
            <Footer />
        </div>
    );
}
