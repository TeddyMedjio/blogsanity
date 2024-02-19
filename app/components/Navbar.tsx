import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex flex-row px-5 md:px-10 lg:px-14 items-center justify-between mt-4">
      <div>
        <Image
          src="/img/logo.png"
          height={50}
          width={50}
          alt="logo"
          className="rounded-full"
        />
      </div>
      <nav className=" flex flex-row space-x-4">
        <p>Blog</p>
        <p>About</p>
        <p>Contact</p>
      </nav>
    </div>
  );
};

export default Navbar;
