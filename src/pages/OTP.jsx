import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import Header1 from '../components/Header1';
import axios from "axios";
import { useNavigate } from "react-router-dom"
import {useSetRecoilState} from "recoil";
import { emailState } from "../recoil_state"


export const OTP = () => {
    const [email, setEmail] = useState("");
    const setEmailState = useSetRecoilState(emailState);
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
          setEmail(e.target.value);
        }} placeholder="rollno@nitt.edu" label={"NITT Webmail"} />
        <div className="pt-4">
          <Button onClick={async () => {
            try {
                const url = "https://foodfellow.onrender.com/auth/send-otp";
                const response = await axios.post(url, {
                    email : email
                });
                console.log(response.data);
                setEmailState(email);
                navigate("/signup");
            } catch(err) {
                alert("Please check your email id")
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