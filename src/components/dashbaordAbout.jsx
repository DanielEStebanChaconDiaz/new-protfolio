import './style/dashboardAbout.css';
import { useLang } from '../context/LanguageContext';

export default function TextAbout() {
    const { t } = useLang();
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
                <img src="/image.png" alt="Daniel Chacon" />
            </div>
        </div>
    );
}
