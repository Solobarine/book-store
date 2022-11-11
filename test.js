const apiAddBook = async (book) => {
  const data = {
    item_id: book.item_id,
    title: book.Title,
    author: book.Author,
    category: book.Category,
  };

  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/YT5Zn3abbZAmKMoCagyt/books',options).then((res) => res.text()).then(y => console.log(y));
}
const libro = {
  item_id: 80,
    Title: 'Firnd',
    Author: 'Oh',
    Category: 'Horror',

}
apiAddBook(libro)
