export default function urlFormatter(url : string){
    const index = url.indexOf("/uploads/");
    if(index !== -1){
        return "/uploads/" + url.slice(index + "/uploads/".length)
    }else{
        return ""
    }
}