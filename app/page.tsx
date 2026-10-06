import { Hero } from "@/components/home/Hero";
import { HomeStorySection } from "@/components/home/HomeStorySection";
import { HomeStoriesSection } from "@/components/home/HomeStoriesSection";
import { SectionLogoBridge } from "@/components/home/SectionLogoBridge";
import { HomePhotoInterlude } from "@/components/home/HomePhotoInterlude";
import { BrandThread } from "@/components/home/BrandThread";
import { HomeCertificatesSection } from "@/components/home/HomeCertificatesSection";
import { HomeLegislationSection } from "@/components/home/HomeLegislationSection";
import { HomeContactSection } from "@/components/home/HomeContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeStorySection />
      <HomeStoriesSection />
      <SectionLogoBridge />
      <HomePhotoInterlude />
      <BrandThread>
        <HomeCertificatesSection />
        <HomeLegislationSection />
        <HomeContactSection />
      </BrandThread>
    </>
  );
}
