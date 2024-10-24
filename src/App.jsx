import HomePage from './routes/homePage/homePage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './routes/layout/layout';
import MysoreProperties from './routes/mysoreProperties/mysoreProperties';
import BangaloreProperties from './routes/bangloreProperties/bangloreProperties';
import BanglorePropertyDetail from './routes/bangloreProperties/banglorePropertyDetails';
import MysorePropertyDetail from './routes/mysoreProperties/mysorePropertyDetails';
import About from './components/about/about';
import Blogs from './components/blogs/blogs';
import Contact from './components/contact/contact';

function App() {
  const router = createBrowserRouter([
    {
      path: "/the-eagles-test/",
      element: <Layout />,
      children: [
        {
          path: "/the-eagles-test/",
          element: <HomePage />
        },
        {
          path: "/the-eagles-test/mysore-listings",
          element: <MysoreProperties />
        },
        {
          path: "/the-eagles-test/mysore-listings/:id",
          element: <MysorePropertyDetail />
        },
        {
          path: "/the-eagles-test/bangalore-listings",
          element: <BangaloreProperties />
        },
        {
          path: "/the-eagles-test/bangalore-listings/:id",
          element: <BanglorePropertyDetail />
        },
        {
          path: "/the-eagles-test/about-us",
          element: <About />
        },
        {
          path: "/the-eagles-test/blogs",
          element: <Blogs />
        },
        {
          path: "/the-eagles-test/contact",
          element: <Contact />
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
