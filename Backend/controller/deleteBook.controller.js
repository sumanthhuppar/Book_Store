import BookModel from '../model/book.model.js';

export const deleteBook = async (req, res) => {
    try {
        const result = await BookModel.findByIdAndDelete(req.params.id);
        if (result) {
            res.status(200).send({ message: 'Book successfully deleted', id: req.params.id });
        } else {
            res.status(404).send({ message: 'Book not found' });
        }
    } catch (error) {
        res.status(500).send({ message: 'Error deleting book', error: error.message });
    }
}