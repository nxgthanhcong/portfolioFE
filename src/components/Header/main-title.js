
function MainTitle() {

    return (
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
    );
}

export default MainTitle;