import React from "react";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Card from "./Card";

export default function TopRest() {
    const link = [
        { path: "https://cdn.dummyjson.com/recipe-images/1.webp", offer: "Item at ₹199", title: "Pizza Hut", rating: "4.5", minTime: "30", maxTime: "40", name: "Pizzas", place: "New Raipur" },
        { path: "https://cdn.dummyjson.com/recipe-images/4.webp", offer: "Item at ₹199", title: "Dominoz", rating: "4.5", minTime: "30", maxTime: "40", name: "Pizzas", place: "New Raipur" },
        { path: "https://cdn.dummyjson.com/recipe-images/1.webp", offer: "Item at ₹199", title: "Burger King", rating: "4.5", minTime: "30", maxTime: "40", name: "Pizzas", place: "New Raipur" },
        { path: "https://cdn.dummyjson.com/recipe-images/4.webp", offer: "Item at ₹199", title: "Pasta King", rating: "4.5", minTime: "30", maxTime: "40", name: "Pizzas", place: "New Raipur" },
        { path: "https://cdn.dummyjson.com/recipe-images/1.webp", offer: "Item at ₹199", title: "AlZamZam", rating: "4.5", minTime: "30", maxTime: "40", name: "Pizzas", place: "New Raipur" },
        { path: "https://cdn.dummyjson.com/recipe-images/1.webp", offer: "Item at ₹199", title: "KFC", rating: "4.5", minTime: "30", maxTime: "40", name: "Pizzas", place: "New Raipur" },
        { path: "https://cdn.dummyjson.com/recipe-images/1.webp", offer: "Item at ₹199", title: "Mac Donald", rating: "4.5", minTime: "30", maxTime: "40", name: "Pizzas", place: "New Raipur" },
        { path: "https://cdn.dummyjson.com/recipe-images/1.webp", offer: "Item at ₹199", title: "Pizza King", rating: "4.5", minTime: "30", maxTime: "40", name: "Pizzas", place: "New Raipur" }
    ]
    const [Data, setData] = useState([]);
    const [Slide, setSlide] = useState(0);
    const fetchTopRestaurant = () => {
        setData(link)
    }

    const nextSlide = () => {
        if (Slide >= link.length - 2) return false;
        setSlide(Slide + 1);
    }

    const prevSlide = () => {
        if (Slide == 0) return false;
        setSlide(Slide - 2);
    }

    useEffect(
        () => {
            fetchTopRestaurant();
        }, []
    )



    return (

        <div className="max-w-[1200px] mx-auto">
            <div className="flex py-5 items-center justify-between">
                <div className="text-[25] font-bold">Top Restaurant Chains In Raipur</div>
                <div className="flex">
                    <div onClick={prevSlide} className="cursor-pointer flex border items-center justify-center rounded-full w-[30px] h-[30px] bg-[#e2e2e7] mx-2 "><FaArrowLeft /></div>
                    <div onClick={nextSlide} className="cursor-pointer flex border items-center justify-center rounded-full w-[30px] h-[30px] bg-[#e2e2e7] mx-2 "><FaArrowRight /></div>
                </div>
            </div>
            <div className="flex gap-7 overflow-hidden ">
                {
                    Data.map((d, i) => {
                        return <Card {...d} key={i} />
                    })
                }
            </div>
            <hr className="my-12"></hr>
        </div>
    )

}