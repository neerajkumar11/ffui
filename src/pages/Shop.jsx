import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

// Rating component imports
import { NumInputBox } from '../components/NumInputBox';
import { TextInputBox } from '../components/TextInputBox';
import { Button } from '../components/Button';
import { Heading } from '../components/Heading';
import { SubHeading } from '../components/SubHeading';

const ShopDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Shop state
  const [shop, setShop] = useState({
    name: "Delicious Cafe",
    image: "https://images.pexels.com/photos/3844788/pexels-photo-3844788.jpeg?auto=compress&cs=tinysrgb&w=800",
    overallRating: 4.5,
    priceRating: 4.0,
    tasteRating: 4.5,
    cleanlinessRating: 4.0,
    menu: [
      { name: "Coffee", price: 3.5, rating: 4.5, ratingCount: 20 },
      { name: "Croissant", price: 2.0, rating: 4.0, ratingCount: 15 },
      { name: "Pasta", price: 8.0, rating: 4.8, ratingCount: 30 },
      { name: "Salad", price: 6.0, rating: 4.3, ratingCount: 25 },
    ],
    reviews: [
      { username: "John Doe", text: "Great place with amazing food!", rating: 5 },
      { username: "Jane Smith", text: "Good service but food was okay.", rating: 3 },
      { username: "Alice Johnson", text: "Nice ambiance but a bit pricey.", rating: 4 },
      { username: "Bob Brown", text: "Clean and tidy, loved it!", rating: 5 }
    ]
  });

  // Rating form state
  const [overallRating, setOverallRating] = useState(0);
  const [qualityRating, setQualityRating] = useState(0);
  const [valueRating, setValueRating] = useState(0);
  const [cleanlinessRating, setCleanlinessRating] = useState(0);
  const [review, setReview] = useState("");

  useEffect(() => {
    async function fetchShopDetail() {
      try {
        const response = await axios.get("https://foodfellow.onrender.com/main/shop/" + id);
        console.log(response.data.shopData);
        setShop(response.data.shopData);
      } catch (error) {
        console.error("Error fetching shop details:", error);
      }
    }
    fetchShopDetail();
  }, [id]);

  // Submit rating function
  const submitRating = async () => {
    try {
      const url = "https://foodfellow.onrender.com/main/rateShop";
      const response = await axios.post(url, {
        shopid : id,
        overallRating: overallRating,
        qualityRating: qualityRating,
        valueRating: valueRating,
        cleanlinessRating: cleanlinessRating,
        review: review
      }, {
        headers: {
          "Authorization" : localStorage.getItem("token")
        }
      });
      console.log(response.data);
      alert("Rating submitted successfully!")
      // navigate(`/shop/${id}`);
    } catch (error) {
      alert("Error submitting rating. Please try again later.");
      console.error("Error submitting rating:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="mx-auto p-10 pt-10 bg-red-100 rounded-lg shadow-md">
        <img src={shop.photoUrl} alt={shop.name} className="rounded-lg mb-4 md:w-1/2 md:float-right md:mr-8 md:mb-0 mt-10" />

        <div className="md:flex md:items-center">
          <div className="md:w-4/5 md:mr-4">
            <h1 className="text-3xl font-bold mb-4 text-green-900">{shop.name}</h1>

            {/* Ratings */}
            <h2 className="text-xl font-semibold mb-2 text-green-900 mt-8">Ratings ( {shop.ratingCount} )</h2>
            <div className="mb-4 bg-rose-50 rounded-lg p-4">
              <h2 className="text-xl font-semibold">Overall : {shop.ratingCount == 0 ? "--" : shop.overallRating}</h2>
              <p className="text-sm">Quality : {shop.ratingCount == 0 ? "--" : shop.qualityRating}</p>
              <p className="text-sm">Value For Money : {shop.ratingCount == 0 ? "--" : shop.valueRating}</p>
              <p className="text-sm">Cleanliness : {shop.ratingCount == 0 ? "--" : shop.cleanlinessRating}</p>
            </div>

            {/* Menu */}
            <div>
              <h2 className="text-xl font-semibold mb-2 text-green-900 mt-8">Menu</h2>
              <ul>
                {shop.menu.map((item, index) => (
                  <li key={index} className="mb-2 bg-rose-50 rounded-lg p-4">
                    <div className="flex justify-between">
                      <p className="text-lg text-green-900">{item.name}</p>
                      <p className="text-sm">₹{item.price.toFixed(2)}</p>
                    </div>
                    {/* <p className="text-sm">Rating: {item.rating.toFixed(2)} ({item.ratingCount})</p> */}
                  </li>
                ))}
              </ul>
            </div>

            {/* Reviews */}
            <div>
              <h2 className="text-xl font-semibold mb-2 text-green-900 mt-8">Reviews</h2>
              <ul>
                {shop.reviews.map((review, index) => (
                  <li key={index} className="mb-2 bg-rose-50 rounded-lg p-4">
                    <p className="text-lg text-green-900">{review.text}</p>
                    <p className="text-sm">By: {review.username}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Rating Form */}
            <div className="mt-8">
              <Heading label={"Add Review"} />
              <SubHeading label={"Help others by adding rating and review"} />
              <NumInputBox onChange={e => setOverallRating(e.target.value)} placeholder="1 - 5" label={"Overall Rating"} />
              <NumInputBox onChange={e => setQualityRating(e.target.value)} placeholder="1 - 5" label={"Quality of Items"} />
              <NumInputBox onChange={e => setValueRating(e.target.value)} placeholder="1 - 5" label={"Value for Money"} />
              <NumInputBox onChange={e => setCleanlinessRating(e.target.value)} placeholder="1 - 5" label={"Cleanliness and Hygiene"} />
              <TextInputBox onChange={e => setReview(e.target.value)} placeholder="Add your review" label={"Review"} />
              <div className="pt-4">
                <Button onClick={submitRating} label={"Submit"} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ShopDetailPage;

