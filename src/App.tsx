import Index from './pages/Index'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
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
      <RouterProvider router={router} />
    </>
  )
}

export default App
