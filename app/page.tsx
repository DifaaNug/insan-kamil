import NavbarWrapper from "./components/NavbarWrapper";
import Hero from "./components/Hero";
import About from "./components/About";
import Featured from "./components/Featured";
import Categories from "./components/Categories";
import LatestPosts from "./components/LatestPosts";
import Footer from "./components/Footer";

// ISR: Cache halaman selama 60 detik, lalu revalidate
export const revalidate = 60;

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavbarWrapper />
      <Hero />
      <About />
      <Featured />
      <Categories />
      <LatestPosts />
      <Footer />
    </main>
  );
}
