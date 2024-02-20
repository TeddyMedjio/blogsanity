import Image from "next/image";

const Card = () => {
  return (
    <div className=" flex flex-col space-y-2 bg-primary-bg w-72 hover:scale-105 transition-transform duration-200 ease-out rounded overflow-hidden">
      <div>
        <Image src="/img/laptop.webp" width={300} height={50} alt="laptop" />
      </div>
      <div className="flex flex-col space-y-1">
        <p className="font-semibold text-sm text-primary-brand">
          Teddy, Fev 20 2023
        </p>
        <h1 className="text-xl font-bold">How to Program</h1>
        <p className=" line-clamp-2">
          This Blog is perfect if you have a blog idea and you want to share.
          Using high-quality sections and components you can showcase blog
          articles in a very beautiful a
        </p>
      </div>
      <div className="flex flex-row flex-wrap space-x-2">
        <p className="border bg-primary-dark text-primary-bg py-1 px-2 text-xs rounded-full">
          Programming
        </p>
        <p className="border bg-primary-dark text-primary-bg py-1 px-2 text-xs rounded-full">
          Cloud
        </p>
      </div>
    </div>
  );
};

export default Card;
