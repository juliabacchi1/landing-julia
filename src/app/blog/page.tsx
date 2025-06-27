import BlogHeader from "./BlogHeader";
import BlogCategories from "./BlogCategories";
import FeaturedPost from "./FeaturedPost";
import PopularTopics from "./PopularTopics";
import NewsletterForm from "./NewsletterForm";
import RelatedResources from "./RelatedResources";
import BackToSiteLink from "./BackToSiteLink";
import Footer from "../components/FooterSection";

export default function BlogPage() {
  return (
    <main>
      <BlogHeader />
      <BlogCategories />
      <FeaturedPost />
      <PopularTopics />
      <NewsletterForm />
      <RelatedResources />
      <BackToSiteLink />
      <Footer />
    </main>
  );
}
