
import InfoSection from "../components/blogs/blog3/InfoSection";
import { MainFooter } from "../components/footer/Footer";
import Navbar from "../components/Navbar";
import BlogsImgSection from "../components/blogs/BlogsImgSection";

export default function BlogsPage() {
    return (
        <div>
            <Navbar />
            <BlogsImgSection
                imageUrl="/images/blogs/blog4.jpeg"
                altText="Woman performing Bhujangasana cobra yoga pose"
                priority={true}
            />
            <InfoSection />
            <MainFooter />
        </div>
    );
}


