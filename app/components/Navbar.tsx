import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-row px-5 md:px-10 lg:px-14 items-center justify-between mt-4">
      <div>
        <Link href="/">
          <Image
            src="/img/logo.png"
            height={50}
            width={50}
            alt="logo"
            className="rounded-full"
          />
        </Link>
      </div>
      <nav className=" flex flex-row space-x-4">
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </div>
  );
};

export default Navbar;
