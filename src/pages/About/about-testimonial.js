// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

function AboutTestimonial() {

    const listTestimonial = [
        {
            name: "Ng Thanh Cong",
            position: "Coder",
            avatar: "./assets/images/avatar.jpg",
            content: "Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt official tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia.",
        },
        {
            name: "Ng Thanh Cong 2",
            position: "Coder",
            avatar: "./assets/images/avatar.jpg",
            content: "Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt official tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia.",
        },
        {
            name: "Ng Thanh Cong 3",
            position: "Coder",
            avatar: "./assets/images/avatar.jpg",
            content: "Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt official tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia.",
        },
        {
            name: "Ng Thanh Cong 4",
            position: "Coder",
            avatar: "./assets/images/avatar.jpg",
            content: "Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt official tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia.",
        },
        {
            name: "Ng Thanh Cong 5",
            position: "Coder",
            avatar: "./assets/images/avatar.jpg",
            content: "Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt official tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia.",
        },
    ]

    return (
        <div className="about-testimonial">
            <div className="section-title">
                <p>TESTIMONIALS [example]</p>
            </div>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                className="testimonial-slider"
            >
                {
                    listTestimonial && listTestimonial.map(item => (
                        <SwiperSlide>
                            <div className="slide-auto__item">
                                <p>
                                    <i className="fas fa-quote-left" />
                                    {item.content}
                                    <i className="fas fa-quote-right" />
                                </p>
                                <div className="testimonial__person">
                                    <img src={item.avatar} alt="" />
                                    <h4>{item.name}</h4>
                                    <p>{item.position}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className="swiper-pagination" />
        </div>
    );
}

export default AboutTestimonial;