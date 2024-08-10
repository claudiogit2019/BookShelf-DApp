// frontend/src/components/BookList.js

import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import BookShelf from "./artifacts/contracts/BookShelf.sol/BookShelf.json";

// Reemplaza con la dirección del contrato desplegado en la red local
const bookShelfAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

function BookList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadBooks();
  }, []);

  async function loadBooks() {
    try {
      // Asegúrate de que MetaMask esté disponible y el usuario haya conectado su cuenta
      if (!window.ethereum) {
        setError("MetaMask no está instalado. Instala MetaMask para continuar.");
        setLoading(false);
        return;
      }

      // Solicitar acceso a la cuenta del usuario
      await window.ethereum.request({ method: 'eth_requestAccounts' });

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(bookShelfAddress, BookShelf.abi, provider);
      const bookCount = await contract.bookCount();
      let booksArray = [];
      
      for (let i = 1; i <= bookCount; i++) {
        const book = await contract.books(i);
        booksArray.push(book);
      }

      setBooks(booksArray);
    } catch (err) {
      console.error(err);
      setError("Hubo un problema al cargar los libros.");
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <div>Cargando libros...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.length === 0 ? (
          <li>No se encontraron libros.</li>
        ) : (
          books.map((book, index) => (
            <li key={index}>
              {book.name} - {ethers.utils.formatEther(book.price)} ETH
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default BookList;
