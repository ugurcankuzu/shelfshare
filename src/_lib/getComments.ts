export default async function getComments(shelfId:string,handleComments:Function){
    const result = await fetch(process.env.baseAPI + "getComments?shelfId="+shelfId,{
        method:"GET",
    });
    const response = await result.json();

    if(result.status === 200){
        handleComments(response)
    }else{
        alert(response.message)
    }
}