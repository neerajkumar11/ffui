import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import Header1 from "../components/Header1"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Signin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    return (
      <>
      <Header1 />
    <div className="bg-red-100 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-rose-200 w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign in"} />
        <SubHeading label={"Enter your credentials to access your account"} />
        <InputBox onChange={e => {
            setEmail(e.target.value);
        }} placeholder="rollno@nitt.edu" label={"Email"} />
        <InputBox onChange={e => {
            setPassword(e.target.value);
        }} placeholder="some" label={"Password"} />
        <div className="pt-4">
          <Button onClick={async () => {
            try {
                const url = "https://foodfellow.onrender.com/auth/signin";
                const response = await axios.post(url, {
                    email : email,
                    password : password
                });
                console.log(response.data);
                localStorage.setItem("token", response.data.token)
                navigate("/shops");
            } catch(err) {
                alert("Please entter the correct data");
                console.log(err);
            }
          
          }} label={"Sign in"} />
        </div>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
      </div>
    </div>
  </div>
  </>
)}