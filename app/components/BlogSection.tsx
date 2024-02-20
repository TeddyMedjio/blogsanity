import Card from "./Card";

const BlogSection = () => {
  return (
    <div className=" flex flex-col mb-10">
      <div className="flex justify-center my-4">
        <h1 className=" capitalize text-5xl font-semibold">blogs</h1>
      </div>
      <ul className=" flex flex-row flex-wrap justify-evenly space-y-8">
        <li className="mt-8">
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
      </ul>
    </div>
  );
};

export default BlogSection;
