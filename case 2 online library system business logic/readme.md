# Case 1: Online Library System

## Problem Statement:

You need to create a basic system for an online library where users can borrow and return books. The system should track available books, borrowed books, and handle various scenarios like trying to borrow a book that is unavailable or returning a book that wasn't borrowed. Each book has a title, author, and a unique ID.

## Requirements:

- Users should be able to borrow books from the library if the book is available.
- Users should be able to return books they have borrowed.
- The library should track the status of each book (available or borrowed).
- Provide feedback if a user tries to borrow an already borrowed book or return a book they didn't borrow.
- Provide a way to search for books based on title or author.

## Instructions:

1. Break down tasks: Identify the core tasks involved in borrowing, returning, and managing books.
2. Build Functions:

- Create a function to borrow a book.
- Create a function to return a book.
- Create a function to search books by title or author.
- Create a function to display available books and borrowed books separately.

## Edge Cases:

- Handle a situation where a user tries to borrow a book that's already borrowed.
- Handle the case where a user tries to return a book they never borrowed.
- What happens if the user searches for a book that doesn’t exist?
