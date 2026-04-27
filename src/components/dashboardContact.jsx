import './style/contact.css';
import { useLang } from '../context/LanguageContext';

export default function Contact() {
    const { t } = useLang();

    return (
        <section className="contactSection">
            <div className="glowingOrb orb1"></div>
            <div className="glowingOrb orb2"></div>

            <div className="contactContainer">
                <h2 className="contactTitle">
                    {t.contact.title} <span className="highlight">{t.contact.titleHighlight}</span>
                </h2>
                <p className="contactDescription">{t.contact.description}</p>

                <form className="contactForm" onSubmit={(e) => e.preventDefault()}>
                    <div className="formFieldContainer">
                        <input type="text" placeholder={t.contact.name} required />
                    </div>
                    <div className="formFieldContainer">
                        <input type="email" placeholder={t.contact.email} required />
                    </div>
                    <div className="formFieldContainer">
                        <textarea placeholder={t.contact.message} rows="5" required />
                    </div>
                    <div className="submitContainer">
                        <button type="submit" className="contactSubmit">
                            <span>{t.contact.send}</span>
                        </button>
                    </div>
                </form>

                <p className="contactEmail">
                    {t.contact.or}{' '}
                    <a href="mailto:danielesteban.dev@gmail.com">danielesteban.dev@gmail.com</a>
                </p>
            </div>
        </section>
    );
}
