import { BiCategoryAlt, BiSearchAlt2 } from "react-icons/bi";
import { ImLocation2 } from "react-icons/im";
import { useState, useCallback, useEffect } from "react";

const CategoryLocation = () => {
  const [y, setY] = useState(0);
  const [scrollTop, setScrollTop] = useState(false);

  const handleNavigation = useCallback(
    (e: any) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        setScrollTop(true);
      } else if (y < window.scrollY) {
        setScrollTop(false);
      }
      setY(window.scrollY);
    },
    [y]
  );
  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);
  return (
    <div
      className={`flex items-center justify-around gap-5 sm:gap-10 py-2 text-lg text-common-gray font-semibold bg-white rounded-b-lg mb-2 lg:static fixed w-full max-w-[500px] z-[100] transition-all duration-300 ${
        !scrollTop ? "top-0" : "top-[48px]"
      }`}
    >
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
        <h3 className="hidden sm:block">Search</h3>
        <div>
          <BiSearchAlt2 />
        </div>
      </div>
    </div>
  );
};

export default CategoryLocation;
