import { useState } from "react";

// COMPONENTS
import MenusHeader from "../components/Menus/MenusHeader";
import MenusList from "../components/Menus/MenusList";

const Menus = (props) => {
    const [selectedCategory, setSelectedCategory] = useState(0);

    return (
        <div style={
            {
                marginTop: 50
            }
        }>
            <MenusHeader {...props} setSelectedCategory={setSelectedCategory} />
            <MenusList {...props} selectedCategory={selectedCategory} />
        </div>
    )
}

export default Menus;