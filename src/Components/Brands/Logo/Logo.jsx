import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  const [brandLogo, setBrandLogo] = useState([]);
  useEffect(() => {
    fetch("/logo.json")
      .then((res) => res.json())
      .then((data) => {
        setBrandLogo(data);
      });
  }, []);
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mb-5 gap-3 rounded-lg bg-slate-300 max-w-screen-xl mx-auto ">
        {brandLogo?.map((brand, idx) => (
          <Link to={`/brand/${brand.name}`}
            key={idx}
            className="py-5 w-full flex items-center justify-center gap-3 hover:text-white hover:bg-[#353535] hover:rounded-lg uppercase font-semibold text-xl"
          >
            <img src={brand?.img} alt="" className="w-40 h-auto " />
            <span>{brand?.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Logo;
