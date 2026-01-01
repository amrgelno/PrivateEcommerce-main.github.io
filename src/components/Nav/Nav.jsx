import "./Nav.css"
import { useEffect} from "react";
import { FaEarthAfrica } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import "../../assets/css/bootstrap.min.css"
import "../../assets/js/bootstrap.bundle.min.js"

export default function Nav() {
    const { t, i18n } = useTranslation();
    
      useEffect(()=>{
        document.documentElement.lang = i18n.language
      },[i18n,i18n.languages])
      const languages = [{code:"en",language:"English"},{code:"tr",language:"Türkçe"},{code:"ar",language:"العربية"}]
    
      const changeLang = (lang) => {
        setLanguage(lang)
        localStorage.setItem("selectedLanguage",lang)
        i18n.changeLanguage(lang)
      }
    
      const setLanguage = ()=>{
        document.documentElement.lang = "en"
      }


  return (
    <nav className='CP flex justify-between items-center text-center text-3xl'>
      <a href="/" className="navLogo">Private Ecommerce</a>
            <div className="dropdown">
              <button className="dropdown-btn flex items-center gap-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <FaEarthAfrica /> <span>Languages</span>
              </button>
              <ul className="dropdown-menu">
                {
                  languages.map((lang,i)=>{
                    return <button key={i} href="#" className="langBtn dropdown-item block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden" onClick={()=>{changeLang(lang.code)}}>{lang.language}</button>
                  })
                }
              </ul>
            </div>
    </nav>
  )
}
