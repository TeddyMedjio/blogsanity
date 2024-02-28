import Card from "./Card";
import { getPosts } from "@/lib/client";

const BlogSection = async () => {
  const posts = await getPosts();

  return (
    <div className=" flex flex-col mb-10">
      <div className="flex justify-center my-4">
        <h1 className=" capitalize text-5xl font-semibold">blogs</h1>
      </div>
      <ul className=" flex flex-row flex-wrap justify-evenly space-y-8">
        {posts.map((post) => (
          <li key={post._id} className="mt-8">
            <Card postData={post} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogSection;
