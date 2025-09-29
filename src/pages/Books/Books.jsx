import { Suspense } from "react";
import Book from "../Book/Book";
import { CircleLoader } from "react-spinners";

const Books = ({data}) => {

    return (
        <div>
            <h1 className="text-4xl font-semibold text-center m-10 md:m-16">Books</h1>
            <Suspense fallback={<span><CircleLoader></CircleLoader></span>}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {data.map(singleBook => <Book key={singleBook.bookId} singleBook={singleBook}></Book>)}
                </div>
            </Suspense>
        </div>
    );
};

export default Books;