
export default async function getUserInfo(push:Function, handleUserInfo:Function){
    const userToken = sessionStorage.getItem("userToken")
    if(userToken){
        const result = await fetch(process.env.baseAPI + "getUserInfo",{
            method: "GET",
            headers:{
                "Authorization": "Bearer " + userToken,
                "Content-Type": "application/json",
            },
        })
        const response = await result.json();
        if(result.status === 200){
            handleUserInfo(response.data)
        }else{
            push("/signup")
        }
    }else{
        push("/signup")
    }
}