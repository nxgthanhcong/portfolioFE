import { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

function PortfolioContent() {

    const listPortfolio = [
        {
            id: 1,
            name: "App 1",
            breifDescription: "App 1 description",
            listImages: [
                "./assets/images/portfolio/portfolio-1.jpg",
                "./assets/images/portfolio/portfolio-2.jpg",
                "./assets/images/portfolio/portfolio-3.jpg"
            ],
            category: "Web app",
            client: "ASU Company",
            projectDate: "01 March, 2020",
            projectUrl: "abc.com",
            description: `Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi
            labore
            quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque
            enim.
            Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi
            nulla at esse enim cum deserunt eius.`,
        },
        {
            id: 2,
            name: "App 2",
            breifDescription: "App 2 description",
            listImages: [
                "./assets/images/portfolio/portfolio-2.jpg",
                "./assets/images/portfolio/portfolio-1.jpg",
                "./assets/images/portfolio/portfolio-3.jpg"
            ],
            category: "Moblie app",
            client: "ZZZ Company",
            projectDate: "01 March, 2020",
            projectUrl: "abc.com",
            description: `Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi
            labore
            quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque
            enim.
            Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi
            nulla at esse enim cum deserunt eius.`,
        },
        {
            id: 3,
            name: "App 3",
            breifDescription: "App 3 description",
            listImages: [
                "./assets/images/portfolio/portfolio-3.jpg",
                "./assets/images/portfolio/portfolio-5.jpg",
                "./assets/images/portfolio/portfolio-6.jpg"
            ],
            category: "Android app",
            client: "CCC Company",
            projectDate: "01 March, 2020",
            projectUrl: "abc.com",
            description: `Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi
            labore
            quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque
            enim.
            Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi
            nulla at esse enim cum deserunt eius.`,
        }
    ]

    const [isDisplayProfolioGallery, setIsDisplayProfolioGallery] = useState("");
    const [isDisplayProfolioDetail, setIsDisplayProfolioDetail] = useState("");
    const [curentGalleryIndex, setCurentGalleryIndex] = useState(0);
    const [curentGalleryItemCount, setCurentGalleryItemCount] = useState(0);

    function handleShowGalleryClick(item) {
        setIsDisplayProfolioGallery(item.id);
        setCurentGalleryIndex(0);
        setCurentGalleryItemCount(item.listImages.length);
    }

    function handleHideGalleryClick() {
        setIsDisplayProfolioGallery(-1);
    }

    function handleShowDetailClick(id) {
        setIsDisplayProfolioDetail(id);
    }

    function handleHideDetailClick() {
        setIsDisplayProfolioDetail(-1);
    }

    function handleGalleryNextClick() {
        if (curentGalleryIndex + 1 >= curentGalleryItemCount) {
            setCurentGalleryIndex(0)
        } else {
            setCurentGalleryIndex(curentGalleryIndex + 1)
        }
    }

    function handleGalleryPrevClick() {
        if (curentGalleryIndex - 1 < 0) {
            setCurentGalleryIndex(curentGalleryItemCount - 1)
        } else {
            setCurentGalleryIndex(curentGalleryIndex - 1)
        }
    }

    document.onkeydown = e => {
        switch (e.keyCode) {
            case 27:
                setIsDisplayProfolioGallery(-1);
                setIsDisplayProfolioDetail(-1);
                break;
            case 37:
                handleGalleryPrevClick();
                break;
            case 39:
                handleGalleryNextClick();
                break;
            default:
                break;
        }
    }

    return (
        <div className="resume-content">
            <div className="row">
                {
                    listPortfolio.map(item => (
                        <div key={item.id} className="col l-4 m-6 c-12">
                            <div className="portfolio__item">
                                <img src={item.listImages[0]} alt="" />
                                <div className="item-content">
                                    <h3>{item.name}</h3>
                                    <p>{item.breifDescription}</p>
                                    <p>
                                        <i
                                            onClick={() => handleShowGalleryClick(item)}
                                            className="fas fa-plus"
                                        />
                                        <i
                                            className="fas fa-link"
                                            onClick={() => handleShowDetailClick(item.id)}
                                        />
                                    </p>
                                </div>
                            </div>
                            <div className="gallery-wrap">
                                <div
                                    className={item.id === isDisplayProfolioGallery
                                        ? "portfolio__gallery"
                                        : "portfolio__gallery hide"}
                                >
                                    <img src={item.listImages[curentGalleryIndex]} alt="" />
                                    <div
                                        className="gallery-icon icon-next"
                                        onClick={() => handleGalleryNextClick()}
                                    >
                                        <i className="fas fa-chevron-right" />
                                    </div>
                                    <div
                                        className="gallery-icon icon-prev"
                                        onClick={() => handleGalleryPrevClick()}

                                    >
                                        <i className="fas fa-chevron-left" />
                                    </div>
                                    <div
                                        className="gallery-icon icon-close"
                                        onClick={() => handleHideGalleryClick()}
                                    >
                                        <i className="fas fa-close" />
                                    </div>
                                </div>
                                <div
                                    className={item.id === isDisplayProfolioDetail
                                        ? "portfolio__detail"
                                        : "portfolio__detail hide"}
                                >
                                    <div className="portfolio__detail-wrap">
                                        <h2>This is an example of {item.name} detail</h2>
                                        <div className="row">
                                            <div className="col l-8 m-12 c-12">
                                                <Swiper
                                                    className="portfolio__slider"
                                                    spaceBetween={50}
                                                    slidesPerView={1}
                                                    onSlideChange={() => console.log('slide change')}
                                                    onSwiper={(swiper) => console.log(swiper)}
                                                >
                                                    {
                                                        item.listImages.map(img => (
                                                            <SwiperSlide>
                                                                <img src={img} alt="" />
                                                            </SwiperSlide>
                                                        ))
                                                    }
                                                    <div className="swiper-pagination" />

                                                </Swiper>
                                            </div>
                                            <div className="detail__item col l-4 m-12 c-12">
                                                <h3>Project information</h3>
                                                <p><span>Category: </span>{item.category}</p>
                                                <p><span>Client: </span>{item.client}</p>
                                                <p><span>Project date: </span>{item.projectDate}</p>
                                                <p><span>Project URL: </span>{item.projectUrl}</p>
                                                <i>
                                                    {item.description}
                                                </i>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="portfolio__detail-icon icon-close"
                                        onClick={() => handleHideDetailClick()}
                                    >
                                        <i className="fas fa-close" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
}

export default PortfolioContent;