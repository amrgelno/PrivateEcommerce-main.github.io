import "./VideoSection.css"
import video_1 from "../../assets/videos/video_1.mp4"
import { useTranslation } from "react-i18next";


export default function VideoSection() {
  const { t } = useTranslation()
  return (
    <div className="CP VideoSection_c">
      <p className="sectionTitle w-full">{t("aboutProject")}</p>
      <div className=" AboutProject grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="videoCardContainer">
          <video controls>
              <source src={video_1} type="video/mp4" />
          </video>
        </div>
        <div className="AboutProjectContent">
            <p className="AboutProjectContentTitle mb-3">{t("programDescriptionTitle")}</p>
            <p className="AboutProjectContentDesc mb-5">{t("programDescription")}</p>
        </div>
      </div>
    </div>
  )
}
