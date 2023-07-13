export default async function getShelf(
  _id: string,
  push: Function,
  handleShelfInformation: Function
) {
  const userToken = sessionStorage.getItem("userToken");
  const result = await fetch(process.env.baseAPI + "getShelf?_id=" + _id, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + userToken,
      "Content-Type": "application/json",
    },
  });
  const response = await result.json();
  if (result.status === 200) {
    handleShelfInformation({
      shelfName: response.shelfName,
      ownerId: response.ownerId,
      books: response.books,
      previewMode: response.previewMode,
    });
  } else {
    alert(response.message);
  }
}
