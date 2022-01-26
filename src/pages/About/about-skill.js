import { useRef } from 'react';
import { Waypoint } from 'react-waypoint';

function AboutSkill() {

    const listSkill = [
        {
            name: "HTML",
            percent: 60
        },
        {
            name: ".Net Core",
            percent: 75
        },
        {
            name: "CSS",
            percent: 60
        },
        {
            name: "React JS",
            percent: 65
        },
        {
            name: "Javascript",
            percent: 50
        },
        {
            name: "Node JS",
            percent: 40
        },
    ]

    const progress = useRef();
    const handleSkillScrollTo = function () {
        progress.current.childNodes.forEach(item => {
            var percentItem = item.querySelector(".skill-percent");
            percentItem.style.width = percentItem.parentElement.getAttribute('skill-value') + '%'
        })
    }

    return (
        <>
            <Waypoint
                scrollableAncestor={window}
                onEnter={() => handleSkillScrollTo()}
                topOffset={'80%'}
            // onLeave={() => handleSkillLeave()}

            />

            <div className="about-skill">
                <div className="section-title">
                    <p>Skills [example]</p>
                </div>
                <div ref={progress} className="row skill-container">
                    {
                        listSkill && listSkill.map(item => (
                            <div className="col l-6 m-6 c-6 skill-item">
                                <div className="skill-text">
                                    <span>{item.name}</span>
                                    <span>{item.percent}%</span>
                                </div>
                                <div className="skill-percent-wrap" skill-value={item.percent}>
                                    <span className="skill-percent-bg" />
                                    <span className="skill-percent" />
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </>

    );
}

export default AboutSkill;