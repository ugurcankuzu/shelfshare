import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface IInfoCard{
    icon: IconDefinition,
    text: String
}

export default function InfoCard({icon,text}: IInfoCard){
    return (
        <div className="w-full h-[200px] bg-latte shadow-md rounded-md flex flex-col justify-center items-center gap-2">
            <FontAwesomeIcon icon={icon} width={45} className="text-dark-brown"/>
            <p className="text-dark-brown">{text}</p>
        </div>
    )
}