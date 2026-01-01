import "./Hero.css"
import heroImg from "../../assets/img/heroImg.jpg"
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation()
  return (
    <div className="CP heroContainer">
        <div className="heroLeft">
            <p className="heroTitle">{t("heroTitle")}</p>
            <p className="heroDesc">{t("heroDesc")}</p>
            <a href="https://fashionecommerce1.vercel.app" className="g-btn heroBtn" target="_blank">{t("heroTryBtn")}</a>
        </div>
        <div className="heroRight rounded-xl overflow-hidden">
            <img src={heroImg} alt="" />
        </div>
    </div>
  )
}
