import { useEffect, useRef, useState } from 'react';
import './style/cv.css';
import { useLang } from '../context/LanguageContext';

export default function Curriculum() {
    const containerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    const { t } = useLang();

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    // CV files exist in /public with spaces — encode correctly
    const cvEs = encodeURI('/CV  Spanish.pdf');
    const cvEn = encodeURI('/CV  English.pdf');

    return (
        <section className="cvSection" id="CV">
            <div className="glowingOrb orb1"></div>
            <div className="glowingOrb orb2"></div>

            <div className="cvContainer" ref={containerRef}>
                <h2 className="cvTitle">
                    {t.cv.title} <span className="highlight">{t.cv.titleHighlight}</span>
                </h2>
                <p className="cvSubtitle">{t.cv.subtitle}</p>

                <div className="cvViewer">
                    <div className="cvFrameContainer">
                        {isMobile ? (
                            <div className="mobile-cv-message">
                                <p>{t.cv.mobileMessage}</p>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 15L8 11H16L12 15Z" fill="#00d8ff" />
                                    <path d="M12 3V11M12 15L8 11H16L12 15ZM21 15V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V15" stroke="#00d8ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        ) : (
                            <iframe
                                src={cvEs}
                                title="Daniel Esteban CV"
                                frameBorder="0"
                                className="cvFrame"
                                loading="lazy"
                                onLoad={(e) => e.target.classList.add('loaded')}
                            />
                        )}
                    </div>
                </div>

                <div className="downloadContainer">
                    <a
                        href={cvEs}
                        className="cvDownload"
                        download="DanielEsteban_CV_Español.pdf"
                    >
                        <span className="cvDownloadIcon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 15L8 11H16L12 15Z" fill="currentColor" />
                                <path d="M12 3V11M12 15L8 11H16L12 15ZM21 15V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                        {t.cv.downloadEs}
                    </a>

                    <a
                        href={cvEn}
                        className="cvDownload cvDownloadSecondary"
                        download="DanielEsteban_CV_English.pdf"
                    >
                        <span className="cvDownloadIcon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 15L8 11H16L12 15Z" fill="currentColor" />
                                <path d="M12 3V11M12 15L8 11H16L12 15ZM21 15V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                        {t.cv.downloadEn}
                    </a>
                </div>
            </div>
        </section>
    );
}
