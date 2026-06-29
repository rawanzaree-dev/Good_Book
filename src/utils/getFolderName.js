export default function getFolderName(category) {
  let folder_name = "";
  if (category === "gifted") {
    folder_name = "books/most-gifted-books";
  } else if (category === "best-seller") {
    folder_name = "books/best-seller-books";
  } else if (category === "wished") {
    folder_name = "books/most-wished-for";
  }

  return folder_name;
}
