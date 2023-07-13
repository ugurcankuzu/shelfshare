export default async function createBook(
  file: File,
  shelfId: string,
  name: string,
  author: string,
  formVisibilityHandler: Function,
  handleAddedBook: Function
) {
  const userToken = sessionStorage.getItem("userToken");

  if (userToken) {
    const formData = new FormData();
    formData.append("bookCover", file, file.name);
    formData.append("shelfId", shelfId);
    formData.append("name", name);
    formData.append("author", author);
    const result = await fetch(process.env.baseAPI + "createBook", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + userToken,
      },
      body: formData,
    });
    const response = await result.json();
    if (result.status === 200) {
      formVisibilityHandler(false);
      handleAddedBook(response.book);
    } else {
      alert(response.message);
      formVisibilityHandler(false);
    }
  }
}
