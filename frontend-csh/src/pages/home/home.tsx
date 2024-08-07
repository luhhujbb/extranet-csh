import {ReactNode} from "react";
import {Divider} from "@mui/joy";
import {useTranslation} from "react-i18next";

import "./home.css";

const Home = (): ReactNode => {
    const {t} = useTranslation();

    return (
        <div className="home-container">
            <div className="home-summary-container">
                <p className="home-summary">{t("home.title")}</p>
                <div className="video-wrapper">
                    <video autoPlay muted loop className="home-summary-video">
                        <source src="/assets/videos/stroch.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <Divider/>
            <div className="home-flyer-container">
                <div className="home-flyer">
                    <p className="home-flyer-title">{t("home.conferenceTitle").toUpperCase()}</p>
                    <img
                        src="/assets/next-conference/next_conference.png"
                        alt={t("home.conferenceTitle")}
                        className="home-flyer-image"
                    />
                </div>
                <div className="home-flyer">
                    <p className="home-flyer-title">{t("home.programTitle").toUpperCase()}</p>
                    <img
                        src="/assets/program/program.png"
                        alt={t("home.programTitle")}
                        className="home-flyer-image"
                    />
                </div>
            </div>
            <Divider/>
        </div>
    );
};

export {Home};
