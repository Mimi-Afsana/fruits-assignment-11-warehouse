import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./components/Home/Home";
import Inventory from "./components/Inventory/Inventory";
import ManageInventories from "./components/ManageInventories/ManageInventories";
import Header from "./components/shared/Header/Header";
import Footer from "./components/shared/Footer/Footer";
import Login from "./socialmedia/Login/Login";
import Signup from "./socialmedia/Signup/Signup";
import RequireAuth from "./socialmedia/RequireAuth/RequireAuth";
import MyItems from "./components/MyItems/MyItems";
import AddNewItem from "./components/AddNewItem/AddNewItem";
import ManageItem from "./ManageItem/ManageItem";
import About from "./components/About/About";
import Contactus from "./components/Contactus/Contactus";
import Blogs from "./components/Blogs/Blogs";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
        <Route
          path="/inventory/:inventoryId"
          element={
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manage"
          element={<ManageInventories></ManageInventories>}
        ></Route>
        <Route
          path="/manage/:inventoryId"
          element={<ManageInventories></ManageInventories>}
        ></Route>
        <Route path="/manageitem" element={<ManageItem></ManageItem>}></Route>
        <Route path="/myitem" element={<MyItems></MyItems>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contactus></Contactus>}></Route>
        <Route
          path="/addnewitem"
          element={
            <RequireAuth>
              <AddNewItem></AddNewItem>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
