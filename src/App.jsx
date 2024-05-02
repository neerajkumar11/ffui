import { BrowserRouter, Route, Routes } from "react-router-dom";
import {RecoilRoot} from "recoil";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { OTP } from "./pages/OTP";
import ShopList from "./pages/Shops";
import Shop from "./pages/Shop";
import {Rating} from "./pages/Rating"

function App() {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/otp" element={<OTP />} />
            <Route path="/shops" element={<ShopList />} />
            <Route path="/shop/:id" element={<Shop />} />
            <Route path="/rate" element={<Rating />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  )
}

export default App