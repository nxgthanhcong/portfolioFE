import { useEffect, useState } from "react";

function Footer() {

    const [activeItem, setActiveItem] = useState(window.location.pathname);
    useEffect(() => {
        setActiveItem(window.location.pathname);
        console.log("check redrender footer");
    }, [window.location.pathname]);

    return (
        <footer
            className={activeItem !== "/" ? "footer" : "footer hide"}
            id="footer"
        >
            <div className="waves">
                <div className="wave" id="wave1" />
                <div className="wave" id="wave2" />
                <div className="wave" id="wave3" />
                <div className="wave" id="wave4" />
            </div>
            <ul className="footer__social">
                <li><a href><i className="fab fa-facebook" /></a></li>
                <li><a href><i className="fab fa-facebook-messenger" /></a></li>
                <li><a href><i className="fab fa-tiktok" /></a></li>
                <li><a href><i className="fab fa-instagram" /></a></li>
            </ul>
            <ul className="footer__menu">
                <li><a href>Home</a></li>
                <li><a href>About</a></li>
                <li><a href>Services</a></li>
                <li><a href>Team</a></li>
                <li><a href>Contact</a></li>
            </ul>
            <p>© 2021 GitHub, Ng Thanh Cong coder</p>
        </footer>
    );
}

export default Footer;