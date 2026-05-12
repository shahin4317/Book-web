import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import Books from "../pages/books/Books";
import ErrorPage from "../pages/errorPage/ErrorPage";
import BookDetalis from "../pages/BookDetalis/BookDetalis";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
      {
        index: true,
        Component: Homepage,
      },
      {
        path:"/books",
        Component: Books,
      },
      {
        path: "/booksDetalis/:bookId",
        Component: BookDetalis,
        loader: () => fetch("/booksData.json"),
      }
    ],
    errorElement: <ErrorPage></ErrorPage>
  },
  {
    path:'/books',
    element:'books'
  }
]);
