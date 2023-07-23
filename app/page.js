import { Footer } from "./components/footer/Footer";
import Header from "./components/header/Header";
import { HeroBanner } from "./components/intro/HeroBanner";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-grow flex-col">
        <HeroBanner />
        <Footer />
      </div>
    </div>
  );
}
