import { Contact } from "@/components/Contact/Contact";
import { Footer } from "@/components/Global/Footer";
import { Navbar } from "@/components/Global/Navbar";
import Head from "next/head";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact | Ahmed Calif</title>
        <meta
          name="description"
          content="Get in touch with Ahmed Calif for collaborations and commissions"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <div className="container mx-auto px-4 py-8 md:py-16">
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <Contact />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
