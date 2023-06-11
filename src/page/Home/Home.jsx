import PopularClasses from "../../components/PopularClasses/PopularClasses";
import PopularInstructors from "../../components/PopularInstructors/PopularInstructors";
import Unknow from "../../components/Unknow/Unknow";
import Banner from "../../components/banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner/>
            <PopularClasses/>
            <Unknow/>
            <PopularInstructors/>
        </div>
    );
};

export default Home;