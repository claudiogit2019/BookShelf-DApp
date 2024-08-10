// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BookShelf {
    struct Book {
        uint id;
        string name;
        uint price;
        address payable owner;
        bool forSale;
    }

    uint public bookCount = 0;
    mapping(uint => Book) public books;

    event BookAdded(uint id, string name, uint price, address owner, bool forSale);
    event BookBought(uint id, address newOwner);

    function addBook(string memory _name, uint _price) public {
        require(bytes(_name).length > 0, "Book name cannot be empty");
        require(_price > 0, "Book price must be greater than zero");

        bookCount++;
        books[bookCount] = Book(bookCount, _name, _price, payable(msg.sender), true);

        emit BookAdded(bookCount, _name, _price, msg.sender, true);
    }

    function buyBook(uint _id) public payable {
        Book memory _book = books[_id];
        require(_book.id > 0 && _book.id <= bookCount, "Book does not exist");
        require(msg.value >= _book.price, "Insufficient funds to buy this book");
        require(_book.forSale == true, "Book is not for sale");

        _book.owner.transfer(msg.value);
        _book.owner = payable(msg.sender);
        _book.forSale = false;
        books[_id] = _book;

        emit BookBought(_id, msg.sender);
    }
}
