function ServicesContent() {

    const listService = [
        {
            title: "Web Design",
            description: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
            img: "./assets/images/service-icons/icon1.png"
        },
        {
            title: "Web App",
            description: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
            img: "./assets/images/service-icons/icon2.png"
        },
        {
            title: "Android App",
            description: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
            img: "./assets/images/service-icons/icon3.png"
        },
        {
            title: "Photography",
            description: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
            img: "./assets/images/service-icons/icon4.png"
        },
        {
            title: "Content",
            description: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
            img: "./assets/images/service-icons/icon5.png"
        },
        {
            title: "Video Editting",
            description: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
            img: "./assets/images/service-icons/icon6.png"
        },
    ]

    return (
        <div className="resume-content">
            <div className="row">
                {
                    listService.map(item => (
                        <div className="col l-4 m-6 c-12">
                            <div className="service__item">
                                <div className="service-img">
                                    <img src={item.img} />
                                </div>
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
}

export default ServicesContent;