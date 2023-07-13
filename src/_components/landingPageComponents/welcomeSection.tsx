import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function WelcomeSection() {
  return (
    <section className="w-full h-[400px] bg-latte">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <Image
          src={"/logo_transparent.png"}
          alt="ShelfShare Logo"
          width={200}
          height={200}
        />
        <p className="font-thin text-center">Your library, amplified by ShelfShare <br/> with <FontAwesomeIcon icon={faHeart} width={25} className="inline text-dark-brown drop-shadow-md"/></p>
      </div>
    </section>
  );
}
