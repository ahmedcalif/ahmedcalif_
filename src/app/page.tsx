import { Homepage } from "@/components/Home/Homepage";
import { Footer } from "@/components/Global/Footer";

export default function Home() {
  return (
    <>
      <main className="flex-grow">
        <Homepage />
      </main>

      <Footer />
    </>
  );
}
