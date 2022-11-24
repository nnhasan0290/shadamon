import { BiCategoryAlt, BiSearchAlt2 } from "react-icons/bi";
import { ImLocation2 } from "react-icons/im";

const CategoryLocation = () => {
  return (
    <div className="flex items-center justify-around gap-10 py-2 text-lg text-common-gray font-semibold bg-white rounded-b-lg mb-2">
      <div className="flex items-center gap-1">
        <div>
          <BiCategoryAlt />
        </div>
        <h3>Categories</h3>
      </div>
      <div className="flex items-center gap-2">
        <div>
          <ImLocation2 />
        </div>
        <h3>Location</h3>
      </div>
      <div className="flex items-center gap-2">
        <h3>Search</h3>
        <div>
          <BiSearchAlt2 />
        </div>
      </div>
    </div>
  );
};

export default CategoryLocation;
