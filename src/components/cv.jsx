// cv.jsx
import { useEffect, useRef, useState } from 'react';
import './style/cv.css';

export default function Curriculum() {
    const containerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {
        // Check if we're on a mobile device
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        // Initial check
        checkMobile();
        
        // Add resize listener
        window.addEventListener('resize', checkMobile);
        
        // Animation observer
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

    return (
        <section className="cvSection" id="CV">
            {/* Elementos decorativos */}
            <div className="glowingOrb orb1"></div>
            <div className="glowingOrb orb2"></div>
            
            <div className="cvContainer" ref={containerRef}>
                <h2 className="cvTitle">My <span className="highlight">Curriculum</span></h2>
                <p className="cvSubtitle">Check out my professional experience and qualifications</p>
                
                <div className="cvViewer">
                    <div className="cvFrameContainer">
                        {isMobile ? (
                            <div className="mobile-cv-message">
                                <p>For better viewing experience, please download the CV</p>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 15L8 11H16L12 15Z" fill="#00d8ff"/>
                                    <path d="M12 3V11M12 15L8 11H16L12 15ZM21 15V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V15" stroke="#00d8ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        ) : (
                            <iframe 
                                src="/cv.pdf"
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
                        href="/cv.pdf" 
                        className="cvDownload" 
                        download="DanielEstebanCV.pdf"
                    >
                        <span className="cvDownloadIcon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 15L8 11H16L12 15Z" fill="currentColor"/>
                                <path d="M12 3V11M12 15L8 11H16L12 15ZM21 15V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                        Download CV
                    </a>
                </div>
            </div>
        </section>
    );
}