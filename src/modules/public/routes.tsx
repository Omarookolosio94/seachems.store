import About from "./views/About";
import Cart from "./views/Cart";
import Checkout from "./views/Checkout";
import Contact from "./views/Contact";
import Home from "./views/Home";
import Notfound from "./views/Notfound";
import Privacy from "./views/Privacy";
import Products from "./views/Products";
import SingleProduct from "./views/SingleProduct";
import Terms from "./views/Terms";

const routes = [
  {
    name: "Home",
    layout: "/",
    path: "home",
    icon: "",
    component: <Home />,
  },
  {
    name: "Single Products",
    layout: "/",
    path: "products/:productId",
    icon: "",
    component: <SingleProduct />,
  },
  {
    name: "Products",
    layout: "/",
    path: "products",
    icon: "",
    component: <Products />,
  },
  {
    name: "Cart",
    layout: "/",
    path: "cart",
    icon: "",
    component: <Cart />,
  },
  {
    name: "Checkout",
    layout: "/",
    path: "checkout",
    icon: "",
    component: <Checkout />,
  },
  {
    name: "About",
    layout: "/",
    path: "about",
    icon: "",
    component: <About />,
  },
  {
    name: "Privacy",
    layout: "/",
    path: "privacy",
    icon: "",
    component: <Privacy />,
  },
  {
    name: "Terms",
    layout: "/",
    path: "terms",
    icon: "",
    component: <Terms />,
  },
  {
    name: "Contact",
    layout: "/",
    path: "contact",
    icon: "",
    component: <Contact />,
  },
  {
    name: "Notfound",
    layout: "/",
    path: "notfound",
    icon: "",
    component: <Notfound />,
  },
];

export default routes;
