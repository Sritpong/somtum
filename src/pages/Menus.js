import { useState } from "react";

// COMPONENTS
import MenusHeader from "../components/Menus/MenusHeader";
import MenusList from "../components/Menus/MenusList";

const Menus = (props) => {
    const [selectedCategory, setSelectedCategory] = useState(0);

    return (
        <>
            <MenusHeader {...props} setSelectedCategory={setSelectedCategory} />
            <MenusList {...props} selectedCategory={selectedCategory} />
        </>
    )
}

export default Menus;