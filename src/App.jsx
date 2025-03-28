
import { RouterProvider } from "react-router-dom";
import route from "./routes/routes";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  return (
    <>
      <RouterProvider router={route} />
      <ToastContainer autoClose={2000} theme="light"/>
    </>
  )
}

export default App;