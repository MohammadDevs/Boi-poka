import Book from "../Book/Book";

const Books = ({data}) => {

    return (
        <div>
            <h2>books</h2>
            {data.map(singleBook => <Book key={singleBook.bookId} singleBook={singleBook}></Book>)}
        </div>
    );
};

export default Books;