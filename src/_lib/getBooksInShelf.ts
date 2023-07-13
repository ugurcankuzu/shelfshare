export default async function getBooksInShelf(
  _id: string,
  handleBookList: Function,
  push: Function
) {
  const userToken = sessionStorage.getItem("userToken");
  if (userToken) {
    const result = await fetch(process.env.baseAPI + "getBooksInShelf?_id="+_id, {
      method: "GET",
      headers: {
        authorization: "Bearer " + userToken,
      }
    });
    const response = await result.json();
    if (result.status === 200) {
      handleBookList(response.books);
    } else {
      alert("Please refresh page");
    }
  }else{
    push("/signup");
  }
}
