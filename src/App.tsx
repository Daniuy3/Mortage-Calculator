import { ToastContainer } from "react-toastify"
import Form from "./components/Form"
import Totals from "./components/Totals"
import 'react-toastify/dist/ReactToastify.css';
function App() {


  return (
    <div className="h-screen grid items-center">
      <main className="grid grid-cols-1 md:grid-cols-2 container mx-auto bg-white lg:rounded-3xl max-w-5xl">
        <Form/>
        <Totals/>
      </main>
      <ToastContainer/>
    </div>
  )
}

export default App
