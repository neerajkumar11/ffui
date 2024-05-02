import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import Header1 from "../components/Header1"
import axios from "axios";
import { useNavigate } from "react-router-dom"
import { useRecoilValue } from "recoil"
import { emailState } from "../recoil_state"

export const Signup = () => {

    const email = useRecoilValue(emailState);

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [otp, setOTP] = useState("");
    const navigate = useNavigate();

    return (
    <>
    <Header1 />
    <div className="bg-red-100 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-rose-200 w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign up"} />
        <SubHeading label={"Enter your infromation to create an account"} />
        <InputBox onChange={e => {
          setName(e.target.value);
        }} placeholder="Enter your name" label={"Name"} />
        <InputBox onChange={e => {
        //   setUsername(e.target.value);
        }} placeholder={email} disabled={true} label={"NITT Webmail"} />
        <InputBox onChange={(e) => {
          setPassword(e.target.value)
        }} placeholder="Enter your Password" label={"Password"} />
        <InputBox onChange={(e) => {
          setOTP(e.target.value)
        }} placeholder="Enter the OTP sent on your webmail" label={"OTP"} />
        <div className="pt-4">
          <Button onClick={async () => {
            try {
            const response = await axios.post("https://foodfellow.onrender.com/auth/signup", {
                email: email,
                name: name,
                password: password,
                otp: otp
            });
            console.log(response.data);
            localStorage.setItem("token", response.data.token)
            navigate("/shops")
          } catch (err){
            alert("Please enter the correct data");
            console.log(err);
          }
          }} label={"Sign up"} />
        </div>
        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
      </div>
    </div>
  </div>
  </>
)}