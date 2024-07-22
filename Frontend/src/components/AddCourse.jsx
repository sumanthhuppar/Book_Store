import React, { useState } from 'react';
import axios from 'axios';

function AddBook() {
    const [book, setBook] = useState({
        name: '',
        price: 0,
        category: '',
        image: '',
        title: ''
    });

    const handleChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4001/addBook/add', book); // Hard-coded URL
            console.log('Book added:', response.data);
            // Reset form
            setBook({
                name: '',
                price: 0,
                category: '',
                image: '',
                title: ''
            });
            // Optionally, show a success message to the user
            alert('Book successfully added!');
        } catch (error) {
            if (error.response) {
                console.error('Error adding book:', error.response.data);
            } else {
                // Handle errors without a response (e.g., network errors)
                console.error('Error adding book:', error.message);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={book.name}
                onChange={handleChange}
                placeholder="Name"
                required
            />
            <input
                type="number"
                name="price"
                value={book.price}
                onChange={handleChange}
                placeholder="Price"
                required
            />
            <input
                type="text"
                name="category"
                value={book.category}
                onChange={handleChange}
                placeholder="Category"
                required
            />
            <input
                type="text"
                name="image"
                value={book.image}
                onChange={handleChange}
                placeholder="Image URL"
                required
            />
            <input
                type="text"
                name="title"
                value={book.title}
                onChange={handleChange}
                placeholder="Title"
                required
            />
            <button type="submit">Add Book</button>
        </form>
    );
}

export default AddBook;
