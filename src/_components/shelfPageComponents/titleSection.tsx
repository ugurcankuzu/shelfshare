import EPreviewMode from "@/_enums/EPreviewMode";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ITitleSection {
  title: string;
  previewMode: EPreviewMode;
}
export default function TitleSection({ title, previewMode }: ITitleSection) {
  return (
    <div className="w-full h-[300px] bg-latte flex justify-start items-end p-4">
      <div className=" flex justify-center items-center gap-2 ">
        <h2 className="text-dark-brown text-2xl">{title}</h2>
        {previewMode && previewMode === EPreviewMode.OWNER_MODE && (
          <button className="text-latte bg-dark-accent flex justify-center items-center p-2 rounded-md">
            <FontAwesomeIcon icon={faShareNodes} />
          </button>
        )}
      </div>
    </div>
  );
}
