import App from "./App.jsx";
import Posts from "./components/Posts.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Posts />,
      },
    ],
  },
];

export default routes;
