import { Link } from "react-router-dom";

function MainTitle() {
    return (
        <Link to="/">
            <svg className="svgText">
                <symbol id="s-text">
                    <text textAnchor="left" x="0%" y="80%">Ng Thanh Cong</text>
                </symbol>
                <g className="g-ants">
                    <use xlinkHref="#s-text" className="text-copy" />
                    <use xlinkHref="#s-text" className="text-copy" />
                    <use xlinkHref="#s-text" className="text-copy" />
                    <use xlinkHref="#s-text" className="text-copy" />
                    <use xlinkHref="#s-text" className="text-copy" />
                </g>
            </svg>
        </Link>
    );
}

export default MainTitle;