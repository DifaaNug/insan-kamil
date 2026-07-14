import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Featured from "./components/Featured";
import Categories from "./components/Categories";
import LatestPosts from "./components/LatestPosts";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Featured />
      <Categories />
      <LatestPosts />
      <Footer />
    </main>
  );
}
