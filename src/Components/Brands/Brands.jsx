import { Helmet } from "react-helmet";
import Logo from "./Logo/Logo";

const Brands = () => {
  return (
    <div>
      <Helmet>
      <title>Brand || TidalWave</title>
      </Helmet>
      <Logo></Logo>
    </div>
  );
};

export default Brands;
