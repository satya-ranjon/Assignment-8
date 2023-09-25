import { useLoaderData } from "react-router-dom";
import Card from "./Card";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      {/* hero section  */}
      <div className="absolute top-32 sm:top-52 left-0 right-0 w-full flex flex-col justify-center items-center">
        <h1 className="font-bold text-lg sm:text-4xl lg:text-5xl	">
          I Grow By Helping People In Need
        </h1>
        <div className="flex justify-start items-center mt-8 rounded-lg overflow-hidden ">
          <input
            type="text"
            placeholder="Search here..."
            className="text-lg outline-none p-1 sm:p-2 w-52 sm:w-full border-[1px] border-gray-200 border-r-0 rounded-l-lg placeholder:text-xs"
          />
          <button className="p-1 sm:p-2 bg-red-500 text-lg text-white px-3 sm:px-5  border-[1px] border-red-500">
            Search
          </button>
        </div>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:lg:grid-cols-4 gap-4 my-12 ">
        {data?.map((donate) => (
          <Card key={donate.id} donate={donate} />
        ))}
      </div>
    </div>
  );
};

export default Home;
