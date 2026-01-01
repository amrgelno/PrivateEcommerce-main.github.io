import "./AboutProject.css"
import * as MdIcons from "react-icons/md";
import * as Hi2Icons from "react-icons/hi2";
import DCard from "../../components/DCard/DCard"
import { useTranslation } from "react-i18next";


export default function AboutProject() {
  const { t } = useTranslation()
  
  const keyFeatures = t("keyFeatures");
  return (
    <div className="CP AboutProject_c">
      <p className="sectionTitle w-full">{t("keyFeaturesTitle")}</p>
      <div className="AboutProjectContentList flex flex-wrap justify-center items-center gap-4">
        {
          keyFeatures.map((item,i)=>{
            const IconSet = item.IconLib === "md" ? MdIcons : Hi2Icons;
            const IconComp = IconSet[item.keyFeatureIcon];
            return <DCard key={i} icon={IconComp ? <IconComp /> : null} title={item.keyFeatureTitle} desc={item.keyFeatureDesc}/>
            
          })
        }
      </div>
    </div>
  )
}
