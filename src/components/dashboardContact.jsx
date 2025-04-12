import './style/contact.css';

export default function Contact() {
    return (
        <section className="contactSection">
            {/* Decorative orbs */}
            <div className="glowingOrb orb1"></div>
            <div className="glowingOrb orb2"></div>
            
            <div className="contactContainer">
                <h2 className="contactTitle">Get <span className="highlight">In Touch</span></h2>
                <p className="contactDescription">
                    ¿Tienes un proyecto en mente, una idea o simplemente quieres saludar? ¡Escríbeme!
                </p>

                <form className="contactForm" onSubmit={(e) => e.preventDefault()}>
                    <div className="formFieldContainer">
                        <input type="text" placeholder="Your Name" required />
                    </div>
                    <div className="formFieldContainer">
                        <input type="email" placeholder="Your Email" required />
                    </div>
                    <div className="formFieldContainer">
                        <textarea placeholder="Your Message" rows="5" required />
                    </div>
                    <div className="submitContainer">
                        <button type="submit" className="contactSubmit">
                            <span>Send Message</span>
                        </button>
                    </div>
                </form>

                <p className="contactEmail">
                    Or email me directly at: <a href="mailto:danielesteban.dev@gmail.com">danielesteban.dev@gmail.com</a>
                </p>
            </div>
        </section>
    );
}