import "cropperjs/dist/cropper.css";

export default async function getCropData(cropperObject: any){
    if(cropperObject){
        const file = await fetch(cropperObject.getCroppedCanvas().toDataURL())
        const blob = await file.blob();
        return new File([blob],"bookCover.png",{type: "image/png"});
    }
}