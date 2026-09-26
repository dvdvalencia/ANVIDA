import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {WhatsAppButton} from "@/components/layout/WhatsAppButton";
 
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-blue-400 font-sans">
      <Navbar />
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-blue-600 sm:items-start">
        <h1 className="text-4xl font-bold text-black dark:text-white sm:text-5xl">ANVIDA</h1>
      <WhatsAppButton />
      </main>
      <Footer />
    </div>
  );
}
