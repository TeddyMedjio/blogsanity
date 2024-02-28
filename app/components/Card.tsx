import Image from "next/image";

const Card = ({ postData }: { postData: any }) => {
  return (
    <div className=" flex flex-col space-y-2 bg-primary-bg w-72 hover:scale-105 transition-transform duration-200 ease-out rounded overflow-hidden">
      <div>
        <Image src={postData.image} width={300} height={50} alt="laptop" />
      </div>
      <div className="flex flex-col space-y-1">
        <p className="font-semibold text-sm text-primary-brand">
          {postData.author.name}, {Date(postData.publshedAt).substring(0, 10)}
        </p>
        <h1 className="text-xl font-bold">{postData.title}</h1>
        <p className=" line-clamp-2">{postData.body}</p>
      </div>
      <div className="flex flex-row flex-wrap space-x-2">
        {postData.categories.map((category) => (
          <p
            key={category._id}
            className="border bg-primary-dark text-primary-bg py-1 px-2 text-xs rounded-full"
          >
            {category.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Card;
