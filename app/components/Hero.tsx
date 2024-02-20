import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className=" flex flex-col md:flex-row py-8 items-center">
      <div className="flex flex-col space-y-4 flex-1">
        <h1 className=" capitalize text-3xl md:text-5xl font-semibold ">
          A Blog For All Ages And Website Lovers
        </h1>
        <p>
          This Blog is perfect if you have a blog idea and you want to share.
          Using high-quality sections and components you can showcase blog
          articles in a very beautiful and unique way.
        </p>
        <Link
          href="/contact"
          className="bg-primary-brand flex justify-center text-primary-bg w-44 py-2 rounded"
        >
          Contact Us
        </Link>
      </div>
      <div className=" flex justify-center flex-1 mt-10 md:mt-0">
        <Image
          src="/img/hero.png"
          width={500}
          height={100}
          alt="extended family hero image"
        />
      </div>
    </div>
  );
};

export default Hero;
