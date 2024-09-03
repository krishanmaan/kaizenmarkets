import Image from "next/image";
import Hero from "./components/Hero";
import Instruments from "./components/Instruments";
import Costs from "./components/Costs";
import Kaizenmarkets from "./components/Kaizenmarkets";
import Plan from "./components/Plan";
import Footor from "./components/Footor";
import StartTradingPage from "./components/StartTradingPage";

export default function Home() {
  return (
    <>
     
      <Hero />
      <Costs />
      <Kaizenmarkets />
      <Plan />
      <Instruments />
      <StartTradingPage/>
      <Footor/>

    </>
  );
}
