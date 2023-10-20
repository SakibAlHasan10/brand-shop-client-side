import Banner from "../../Components/Banner/Banner";
import Brands from "../../Components/Brands/Brands";
import SectionOne from "../../Components/SectionOne";
import SectionTwo from "../../Components/SectionTwo";

const Home = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-8">
            <Banner></Banner>
            <SectionOne></SectionOne>
            <Brands></Brands>
            <SectionTwo></SectionTwo>
        </div>
    );
};

export default Home;