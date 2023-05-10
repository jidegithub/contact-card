import Index from './pages/Index'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Helmet from "react-helmet";
import GenerateVContactCard from './components/GenerateVContactCard';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index/>
    },
    {
      path: "profile/:profileId",
      element: <GenerateVContactCard/>,
    }
  ]);

  return (
    <>
      <Helmet title="contact card" />
      <RouterProvider router={router} />
    </>
  )
}

export default App
