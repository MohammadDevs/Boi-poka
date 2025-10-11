import React from 'react';
import { createBrowserRouter} from 'react-router'
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/Error Page/ErrorPage';
import Home from '../pages/Home/Home';
import PageRead from '../Components/Page to read/PageRead';
import BookDetails from '../Components/Book Details/BookDetails';


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
        Component: PageRead
      },
      {
        path: '/:bookId',
        loader: () => fetch('booksData.json'),
        Component: BookDetails
      }
    ]

  }
])
