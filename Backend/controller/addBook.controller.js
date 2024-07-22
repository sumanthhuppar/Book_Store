import Book from '../model/book.model.js';

// Function to add a new book
export const addBook = async (req, res) => {
     
    const { name, price, category, image, title } = req.body;

    try {
        const newBook = new Book({
            name,
            price,
            category,
            image,
            title
        });

        await newBook.save();
        res.status(201).json(newBook);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};