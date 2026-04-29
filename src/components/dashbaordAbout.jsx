import { useEffect } from 'react';
import './style/dashboardAbout.css';
import { useLang } from '../context/LanguageContext';

export default function TextAbout() {
    const { t } = useLang();

    useEffect(() => {
        document.querySelectorAll('img').forEach(img => {
            if (img.complete) img.classList.add('loaded');
            else img.addEventListener('load', () => img.classList.add('loaded'));
        });
    }, []);

    return (
        <div className="dashboardAbout">
            <div className="textAbout">
                <h1>{t.about.title}</h1>
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
                <p>{t.about.p3}</p>
                <p>{t.about.p4}</p>
            </div>
            <div className="imageAbout">
                <img src="/image.png" alt="Daniel Esteban" />
            </div>
        </div>
    );
}
