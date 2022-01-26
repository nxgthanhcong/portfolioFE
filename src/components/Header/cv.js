function CV() {
    return (
        <div className="cv">
            <a className="cv-fixed-btn hide" href="/" style={{ "--clr": '#18d26e', "--i": 2 }}>
                <span className="animated-text cv-text" data-text="Check_CV...">Check_CV...</span>
            </a>
            <div className="cv-content hide">
                <i className="fas fa-times cv-close" />
                <embed src="./assets/images/cv.pdf" width="100%" />
            </div>
        </div >
    );
}

export default CV;