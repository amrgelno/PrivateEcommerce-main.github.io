import "./Mainfeatures.css"
import DCard from "../../components/DCard/DCard";
import * as DiIcons from "react-icons/di";
import * as FaIcons from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Mainfeatures() {
const { t } = useTranslation()
const technos = t("Technos");

  return (
    <div className="CP mainContainer mainFeaturesContainer_c">
        <p className="sectionTitle w-full">Techno</p>
        <div className="features_c flex flex-wrap justify-center items-center gap-4">
          {
            technos.map((item, i) => {
              const IconSet = item.IconLib === "fa" ? FaIcons : DiIcons;
              const IconComp = IconSet[item.TechnoIcon];
              return <DCard key={i} title={item.TechnoTitle} icon={IconComp ? <IconComp /> : null} />
            })
          }
        </div>
    </div>
  )
}
