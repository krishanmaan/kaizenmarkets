import Image from "next/image";
import Hero from "./components/Hero";
import Instruments from "./components/Instruments";
import Costs from "./components/Costs";
import Kaizenmarkets from "./components/Kaizenmarkets";
import Plan from "./components/Plan";
import Footor from "./components/Footor";
import StartTradingPage from "./components/StartTradingPage";
import Certificate from "./components/Certificate";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Costs />
      <Kaizenmarkets />
      <Plan />
      <Instruments />
      <StartTradingPage />
      <Certificate />
      <Footor />

    </>
  );
}
