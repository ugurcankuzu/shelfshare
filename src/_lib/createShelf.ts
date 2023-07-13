export default async function createShelf(shelfName: string,push: Function) {
  const userToken = sessionStorage.getItem("userToken");
  if (userToken) {
    const result = await fetch(process.env.baseAPI + "createShelf", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + userToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ shelfName: shelfName }),
    });
    const response = await result.json();
    if(result.status === 200){
        push("/shelf/"+response.shelfId)
    }else{
        alert(response.message);
    }
  }
}
