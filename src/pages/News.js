import { useState } from "react";

// COMPONENTS
import NewsHeader from "../components/News/NewsHeader";
import NewsNews from "../components/News/NewsNews";
import NewsBlogs from "../components/News/NewsBlogs";
import NewsPromotions from "../components/News/NewsPromotions";

const News = () => {
    const [selectedMenu, setSelectedMenu] = useState("all");

    return (
        <div style={
            {
                marginTop: 50
            }
        }>
            <NewsHeader selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
            {
                selectedMenu === 'all' && <>
                    <NewsNews />
                    <NewsBlogs />
                    <NewsPromotions />
                </>
            }
            {
                selectedMenu === 'news' && <NewsNews />
            }
            {
                selectedMenu === 'blogs' && <NewsBlogs />
            }
            {
                selectedMenu === 'promotions' && <NewsPromotions />
            }
        </div>
    )
}

export default News;