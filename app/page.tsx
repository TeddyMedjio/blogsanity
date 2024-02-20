import BlogSection from "./components/BlogSection";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className=" flex min-h-screen flex-col px-5 md:px-10 lg:px-14">
      <Hero />
      <BlogSection />
    </main>
  );
}
