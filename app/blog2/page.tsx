import BlogsImageSection from "../components/blogs/blog2/BlogsImageSection";
import InfoSection from "../components/blogs/blog2/InfoSection";
import { MainFooter } from "../components/footer/Footer";
import Navbar from "../components/Navbar";

export default function BlogsPage() {
    return (
        <div>
            <Navbar />
            <BlogsImageSection />
            <InfoSection />
            <MainFooter />
        </div>
    );
}


