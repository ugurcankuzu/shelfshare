import Image from "next/image";
import Navbar from "../_components/Navbar";
import WelcomeSection from "../_components/landingPageComponents/welcomeSection";
import InfoCard from "../_components/landingPageComponents/infoCard";
import { faComments, faPlus, faShareNodes } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <main className="w-full h-fit flex flex-col bg-dark-brown">
      <Navbar />
      <WelcomeSection />
      <section className="w-full h-fit flex flex-col gap-6 p-4">
        <InfoCard icon={faPlus} text={"Create Your Own Shelves"}/>
        <InfoCard icon={faShareNodes} text={"Share Your Shelves in Platforms"}/>
        <InfoCard icon={faComments} text={"Discuss with Community"}/>
      </section>
    </main>
  );
}
