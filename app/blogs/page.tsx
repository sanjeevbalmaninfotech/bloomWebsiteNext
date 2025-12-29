import BlogsImageSection from "../components/blogs/BlogsImageSection";
import InfoSection from "../components/blogs/InfoSection";
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


