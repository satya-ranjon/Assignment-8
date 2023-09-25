import { useState } from "react";
import useDonate from "../../hooks/useDonate";
import SingleDonationCard from "./SingleDonationCard";

const Donation = () => {
  const [showAll, setShowAll] = useState(4);
  const [donets] = useDonate();

  const handleShowAll = () => {
    setShowAll(donets.length);
  };

  return (
    <div className=" my-16">
      <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6">
        {donets?.slice(0, showAll).map((donate) => (
          <SingleDonationCard key={donate.id} donate={donate} />
        ))}
      </div>
      {showAll < donets.length && (
        <div className="flex justify-center w-full items-center my-10">
          <button
            onClick={handleShowAll}
            className=" text-sm font-normal text-white bg-[#009444] rounded-lg py-2 px-4">
            See All
          </button>
        </div>
      )}
    </div>
  );
};

export default Donation;
