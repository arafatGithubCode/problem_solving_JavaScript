// In stock books
const inStock = [
  { id: 1, title: "New Change", author: "Arafat H" },
  { id: 2, title: "Chapter Open", author: "John K" },
  { id: 3, title: "Dark for Light", author: "L. Jey" },
];

// Convert array to object for faster lookups
const inStockedBooks = inStock.reduce((acc, book) => {
  acc[book.id] = book;
  return acc;
}, {});

// List of borrowed books
let borrowedBooksList = {};

// Check if a book is available for borrowing
const isBookAvailable = (bookId) => {
  if (inStockedBooks[bookId] && !borrowedBooksList[bookId]) {
    console.log(`${inStockedBooks[bookId].title} is available for borrow`);
    return true;
  } else if (borrowedBooksList[bookId]) {
    console.log(`${inStockedBooks[bookId].title} is already borrowed.`);
    return false;
  } else {
    console.log(`Book with id ${bookId} is not available in stock.`);
    return false;
  }
};

// Borrow a book function
const borrowBook = (user, bookId) => {
  if (isBookAvailable(bookId)) {
    borrowedBooksList[bookId] = { ...inStockedBooks[bookId], borrowedBy: user };
    console.log(`${user} has borrowed "${inStockedBooks[bookId].title}".`);
    return true;
  }
  return false;
};

// Return a borrowed book
const returnBook = (user, bookId) => {
  if (
    borrowedBooksList[bookId] &&
    borrowedBooksList[bookId].borrowedBy === user
  ) {
    delete borrowedBooksList[bookId];
    console.log(`${user} has returned "${inStockedBooks[bookId].title}".`);
    return true;
  } else if (!borrowedBooksList[bookId]) {
    console.log(`This book was not borrowed.`);
    return false;
  } else {
    console.log(`This book was borrowed by someone else.`);
    return false;
  }
};

// Example borrow request
const bookBorrowRequest = {
  user: "Tamim",
  bookId: 1, // "New Change"
};

// Borrow the book
borrowBook(bookBorrowRequest.user, bookBorrowRequest.bookId);

// Return the book
returnBook(bookBorrowRequest.user, bookBorrowRequest.bookId);
