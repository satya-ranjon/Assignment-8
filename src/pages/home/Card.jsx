import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ donate }) => {
  const { id, title, img, colors, tag } = donate || {};

  return (
    <Link to={`/donation/${id}`}>
      <div
        style={{ backgroundColor: colors[2] }}
        className={`flex flex-col gap-4 rounded-md overflow-hidden cursor-pointer lg:h-[23.2rem]`}>
        <img src={img} alt={title} className="w-full h-56" />
        <div
          style={{ backgroundColor: colors[1], color: colors[0] }}
          className={`px-4 py-2 w-fit mx-4 font-semibold`}>
          {tag}
        </div>
        <h1
          style={{ color: colors[0] }}
          className={`mx-4 mb-4 font-bold text-2xl`}>
          {title}
        </h1>
      </div>
    </Link>
  );
};

Card.propTypes = {
  donate: PropTypes.object.isRequired,
};

export default Card;
