import ReactPlayer from "react-player";
import logoVideo from "../../../assets/video/logo.mp4";
import style from "./SectionIntroStyle.module.css";

const SectionIntro = () => {
    return (
        <article className={style.sectionIntroContent}>
            {/* <section className={style.decoreLine} /> */}
            <section className={style.videoWrapeer}>
                <ReactPlayer
                    url={logoVideo}
                    muted={true}
                    playing={true}
                    loop={true}
                    width="90%"
                    height="90%"
                    playsinline
                    // onEnded={handleEndedVideo}
                />
            </section>
        </article>
    );
};

export default SectionIntro;
