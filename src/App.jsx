import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import RetseptDetail from "./pages/RetseptDetail";
import RetseptLayout from "./layout/RetseptLayout";
import Contactlayout from "./layout/Contactlayout";
import Retsepts from "./pages/Retsepts";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path=":id"  element={<RetseptDetail/>}/>
        {/* <Route path=""></Route> */}
        <Route path="retsepts" element={<RetseptLayout/>}>
          <Route index element={<Retsepts/>}/>
          <Route path=":id" element={<RetseptDetail/>}/>
        </Route>
        <Route path="contact" element={<Contactlayout/>}/>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
