import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-white">
            © {new Date().getFullYear()} Ahmed Calif. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="https://github.com/ahmedcalif" className="text-white">
              Github
            </Link>
            <Link
              href="https://www.linkedin.com/in/ahmedcalif/"
              className="text-white"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
