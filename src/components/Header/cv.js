import { useState } from "react";

function CV() {

    const [hideCV, setHideCV] = useState(true);

    const openCV = function () {
        setHideCV(false);
    }

    const closeCV = function () {
        setHideCV(true);
    }

    return (
        <div className="cv">
            <span className="cv-fixed-btn hide"
                style={{ "--clr": '#18d26e', "--i": 2 }}
                onClick={() => openCV()}
            >
                <span className="animated-text cv-text" data-text="Check_CV...">Check_CV...</span>
            </span>
            <div className={hideCV ? "cv-content hide" : "cv-content"}>
                <i className="fas fa-times cv-close"
                    onClick={() => closeCV()}
                />
                <embed src="./assets/images/cv.pdf" width="100%" />
            </div>
        </div >
    );
}

export default CV;