import React from 'react';
import { createBrowserRouter} from 'react-router'
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/Error Page/ErrorPage';
import Home from '../pages/Home/Home';
import PageRead from '../Components/Page to read/PageRead';
import BookDetails from '../Components/Book Details/BookDetails';
import ListedBook from '../pages/Listed Book/ListedBook';
import ReadListCard from '../pages/Read List Card/ReadListCard';


export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: '/',
        loader: ()=>fetch('booksData.json'),
        Component: Home
      },
      {
        path: '/PageRead',
          loader: () => fetch('booksData.json'),
        Component: PageRead
      },
      {
        path: '/:bookId',
        loader: () => fetch('booksData.json'),
        Component: BookDetails
      },
      {
        path: '/listedBook',
        loader: () => fetch('booksData.json'),
        Component: ListedBook
      }
      
    ]

  }
])
