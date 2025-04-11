import { About } from "@/components/About/About";
import { Footer } from "@/components/Global/Footer";
import { Navbar } from "@/components/Global/Navbar";

export default function AboutPage() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <About />
        </main>

        <Footer />
      </div>
    </>
  );
}
