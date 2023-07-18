import { Footer } from "./components/footer/Footer";
import Header from "./components/header/Header";
import { HeroBanner } from "./components/intro/HeroBanner";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Header />
      <HeroBanner />
      <Footer />
    </main>
  );
}
