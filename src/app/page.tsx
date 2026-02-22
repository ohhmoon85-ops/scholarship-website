import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import NewsSection from "@/components/sections/NewsSection";
import YoutubeSection from "@/components/sections/YoutubeSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/*
          헤더 높이 보정
          상단 유틸바(36px) + 메인 헤더(68px) = 104px
        */}
        <div className="pt-[104px]">
          <HeroSection />
        </div>
        <AboutSection />
        <NewsSection />
        <YoutubeSection />
      </main>
      <Footer />
    </>
  );
}
