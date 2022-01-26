import { Link } from "react-router-dom";

function NavigationMenu(props) {

    const { activeItem, setActiveItem } = props;
    const listNavigationItems = [
        {
            path: "/",
            color: "#18d26e",
            name: "Home"
        },
        {
            path: "/about",
            color: "#f53b57",
            name: "About"
        },
        {
            path: "/resume",
            color: "#ffa801",
            name: "Resume"
        },
        {
            path: "/services",
            color: "rgba(255,255,255,0.4)",
            name: "Services"
        },
        {
            path: "/portfolio",
            color: "#18d26e",
            name: "Portfolio"
        },
        {
            path: "/contact",
            color: "#5d62fb",
            name: "Contact"
        },
    ]

    const smoothScroll = function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const handleNavigationItemClick = function (item) {
        setActiveItem(item.name);
        smoothScroll();
    }

    return (
        <ul className="header__list header__navigation">
            {
                listNavigationItems.map(item => (
                    <li
                        className="navigation__item"
                    >
                        <Link
                            onClick={() => handleNavigationItemClick(item)}
                            className={activeItem === item.path ? "animated-button" : ""}
                            to={item.path}
                            style={{ "--clr": item.color }}
                        >
                            <span>{item.name}</span>
                        </Link>
                    </li >
                ))
            }
        </ul >
    );
}

export default NavigationMenu;