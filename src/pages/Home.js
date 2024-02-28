import Banner from "../components/Banner/Banner";
import RecommendedMenu from "../components/RecommendedMenu/RecommendedMenu";
import NewsAndPromotion from "../components/NewsAndPromotion/NewsAndPromotion";

const Home = (props) => {
    return (
        <>
            <Banner {...props} />
            <RecommendedMenu {...props} />
            <NewsAndPromotion />
        </>
    )
}

export default Home;