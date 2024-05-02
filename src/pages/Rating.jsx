import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import { NumInputBox } from "../components/NumInputBox"
import { TextInputBox } from "../components/TextInputBox"

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Rating = () => {

    const [email, setEmail] = useState("");
    const [overallRating, setOverallRating] = useState(0);
    const [qualityRating, setQualityRating] = useState(0);
    const [valueRating, setValueRating] = useState(0);
    const [cleanlinessRating, setCleanlinessRating] = useState(0);
    const [review, setReview] = useState("");
    const navigate = useNavigate();


    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Add Review"} />
        <SubHeading label={"Help others by adding rating and review"} />
        <NumInputBox onChange={e => {
            setRating(e.target.value);
        }} placeholder="1 - 5" label={"Overall rating"} />
        <InputBox onChange={e => {
            setPriceRating(e.target.value);
        }} placeholder="1 - 5" label={"Price rating"} />
        <InputBox onChange={e => {
            setQualityRating(e.target.value);
        }} placeholder="1 - 5" label={"Quality rating"} />
        <InputBox onChange={e => {
            setCleanlinessRating(e.target.value);
        }} placeholder="1 - 5" label={"Cleanliness rating"} />
        <TextInputBox onChange={e => {
            setReview(e.target.value);
        }} placeholder="Review" label={"Review"} />
        <div className="pt-4">
          <Button onClick={async () => {
            try {
                const url = "https://foodfellow.onrender.com/review";
                const response = await axios.post(url, {}, {
                    headers : {
                        'rating' : rating,
                        'priceRating' : priceRating,
                        'qualityRating' : qualityRating,
                        'cleanlinessRating' : cleanlinessRating,
                        'review' : review
                    }
                });
                console.log(response.data);
                navigate("/signup");
            } catch(err) {
                console.log(err);
            }
          
          }} label={"Add Review"} />
        </div>
        {/* <div className="pt-4">
          <Button onClick={async () => {
            try {
                const url = "https://foodfellow.onrender.com/signin";
                const response = await axios.post(url, {}, {
                    headers : {
                        'email' : email,
                        'password' : password
                    }
                });
                console.log(response.data);
                localStorage.setItem("token", response.data.token)
                navigate("/signup");
            } catch(err) {
                console.log(err);
            }
          
          }} label={"Sign in"} />
        </div> */}
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
      </div>
    </div>
  </div>
}