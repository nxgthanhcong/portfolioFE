function ContactContent() {
    return (
        <div className="resume-content">
            <div className="row">
                <div className="col l-6 m-6 c-12">
                    <div className="contact__item">
                        <p className="icon">
                            <i className="fas fa-map-marker-alt" />
                        </p>
                        <div className="contact-text">
                            <h3>My Address</h3>
                            <p>1102 Huynh Tan Phat, P.Tan Phu, Q7, TP.HCM</p>
                        </div>
                    </div>
                </div>
                <div className="col l-6 m-6 c-12">
                    <div className="contact__item">
                        <p className="icon">
                            <i className="fas fa-share-alt" />
                        </p>
                        <div className="contact-text">
                            <h3>Socials</h3>
                            <p>
                                <a href>
                                    <i className="fab fa-twitter" />
                                </a>
                                <a href>
                                    <i className="fab fa-facebook-f" />
                                </a>
                                <a href>
                                    <i className="fab fa-instagram" />
                                </a>
                                <a href>
                                    <i className="fab fa-linkedin" />
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col l-6 m-6 c-12">
                    <div className="contact__item">
                        <p className="icon">
                            <i className="fas fa-paper-plane" />
                        </p>
                        <div className="contact-text">
                            <h3>Email</h3>
                            <p>nxgthanhcongc</p>
                            {/* ommunity@gmail.com */}
                        </div>
                    </div>
                </div>
                <div className="col l-6 m-6 c-12">
                    <div className="contact__item">
                        <p className="icon">
                            <i className="fas fa-mobile-alt" />
                        </p>
                        <div className="contact-text">
                            <h3>Phone number</h3>
                            <p>+84 396 399 123</p>
                        </div>
                    </div>
                </div>
                <div className="col l-12">
                    <div className="contact__form">
                        <div className="row">
                            <div className="col l-6 m-6 c-12">
                                <input type="text" placeholder="Your name" />
                            </div>
                            <div className="col l-6 m-6 c-12">
                                <input type="text" placeholder="Your email" />
                            </div>
                            <div className="col l-12 m-12 c-12">
                                <input type="text" placeholder="Subject" />
                            </div>
                            <div className="col l-12 m-12 c-12">
                                <textarea name id cols={30} rows={10} defaultValue={""} />
                            </div>
                        </div>
                        <button className="form-submit-btn">
                            Send message
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactContent;