import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Menu from "@/components/Menu";
import About from "@/components/About";
import InstagramFeed from "@/components/InstagramFeed";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Highlights />
        <Menu />
        <About />
        <InstagramFeed />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
