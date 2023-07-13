import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full h-[50px] bg-latte relative z-[100]">
      <div className="w-full h-full flex justify-between items-center px-2 shadow-md">
        <Link href={"/"}>
          <Image
            src={"/logo_transparent.png"}
            width={50}
            height={50}
            alt="ShelfShare Logo"
            priority={true}
          />
        </Link>
        <Link href={"/signup"} className="bg-dark-brown px-2 py-1 text-latte rounded-md">
          Signup
        </Link>
      </div>
    </nav>
  );
}
