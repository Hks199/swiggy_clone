import React, { useEffect, useState } from "react";
import Card from "./Card";
export default function Onlinedelivery() {
    const link = [
        { path: "https://cdn.dummyjson.com/recipe-images/1.webp", offer: "Item at ₹199", title: "Pizza Hut", rating: "4.5", minTime: "30", maxTime: "40", name: "Pizzas", place: "New Raipur" },
        { path: "https://cdn.dummyjson.com/recipe-images/4.webp", offer: "Item at ₹199", title: "Dominoz", rating: "4.5", minTime: "30", maxTime: "40", name: "Pizzas", place: "New Raipur" },
        { path: "https://cdn.dummyjson.com/recipe-images/1.webp", offer: "Item at ₹199", title: "Burger King", rating: "4.5", minTime: "30", maxTime: "40", name: "Pizzas", place: "New Raipur" },
        { path: "https://cdn.dummyjson.com/recipe-images/4.webp", offer: "Item at ₹199", title: "Pasta King", rating: "4.5", minTime: "30", maxTime: "40", name: "Pizzas", place: "New Raipur" },
        { path: "https://cdn.dummyjson.com/recipe-images/1.webp", offer: "Item at ₹199", title: "AlZamZam", rating: "4.5", minTime: "30", maxTime: "40", name: "Pizzas", place: "New Raipur" },
        { path: "https://cdn.dummyjson.com/recipe-images/1.webp", offer: "Item at ₹199", title: "KFC", rating: "4.5", minTime: "30", maxTime: "40", name: "Pizzas", place: "New Raipur" },
        { path: "https://cdn.dummyjson.com/recipe-images/1.webp", offer: "Item at ₹199", title: "Mac Donald", rating: "4.5", minTime: "30", maxTime: "40", name: "Pizzas", place: "New Raipur" },
        { path: "https://cdn.dummyjson.com/recipe-images/1.webp", offer: "Item at ₹199", title: "Pizza King", rating: "4.5", minTime: "30", maxTime: "40", name: "Pizzas", place: "New Raipur" },
        { path: "https://cdn.dummyjson.com/recipe-images/1.webp", offer: "Item at ₹199", title: "Pizza Hut", rating: "4.5", minTime: "30", maxTime: "40", name: "Pizzas", place: "New Raipur" },
        { path: "https://cdn.dummyjson.com/recipe-images/4.webp", offer: "Item at ₹199", title: "Dominoz", rating: "4.5", minTime: "30", maxTime: "40", name: "Pizzas", place: "New Raipur" },
        { path: "https://cdn.dummyjson.com/recipe-images/1.webp", offer: "Item at ₹199", title: "Burger King", rating: "4.5", minTime: "30", maxTime: "40", name: "Pizzas", place: "New Raipur" },
        { path: "https://cdn.dummyjson.com/recipe-images/4.webp", offer: "Item at ₹199", title: "Pasta King", rating: "4.5", minTime: "30", maxTime: "40", name: "Pizzas", place: "New Raipur" },
        { path: "https://cdn.dummyjson.com/recipe-images/1.webp", offer: "Item at ₹199", title: "AlZamZam", rating: "4.5", minTime: "30", maxTime: "40", name: "Pizzas", place: "New Raipur" },
        { path: "https://cdn.dummyjson.com/recipe-images/1.webp", offer: "Item at ₹199", title: "KFC", rating: "4.5", minTime: "30", maxTime: "40", name: "Pizzas", place: "New Raipur" },
        { path: "https://cdn.dummyjson.com/recipe-images/1.webp", offer: "Item at ₹199", title: "Mac Donald", rating: "4.5", minTime: "30", maxTime: "40", name: "Pizzas", place: "New Raipur" },
        { path: "https://cdn.dummyjson.com/recipe-images/1.webp", offer: "Item at ₹199", title: "Pizza Hut", rating: "4.5", minTime: "30", maxTime: "40", name: "Pizzas", place: "New Raipur" },
        { path: "https://cdn.dummyjson.com/recipe-images/4.webp", offer: "Item at ₹199", title: "Dominoz", rating: "4.5", minTime: "30", maxTime: "40", name: "Pizzas", place: "New Raipur" },
        { path: "https://cdn.dummyjson.com/recipe-images/1.webp", offer: "Item at ₹199", title: "Burger King", rating: "4.5", minTime: "30", maxTime: "40", name: "Pizzas", place: "New Raipur" },
        { path: "https://cdn.dummyjson.com/recipe-images/4.webp", offer: "Item at ₹199", title: "Pasta King", rating: "4.5", minTime: "30", maxTime: "40", name: "Pizzas", place: "New Raipur" },
        { path: "https://cdn.dummyjson.com/recipe-images/1.webp", offer: "Item at ₹199", title: "AlZamZam", rating: "4.5", minTime: "30", maxTime: "40", name: "Pizzas", place: "New Raipur" },
        { path: "https://cdn.dummyjson.com/recipe-images/1.webp", offer: "Item at ₹199", title: "KFC", rating: "4.5", minTime: "30", maxTime: "40", name: "Pizzas", place: "New Raipur" },
        { path: "https://cdn.dummyjson.com/recipe-images/1.webp", offer: "Item at ₹199", title: "Mac Donald", rating: "4.5", minTime: "30", maxTime: "40", name: "Pizzas", place: "New Raipur" },
    ]
    const [Data, setData] = useState([]);
    const fetchTopRestaurant = () => {
        setData(link)
    }

    useEffect(
        () => {
            fetchTopRestaurant();
        }, []
    )

    return (
        <>
            <div className="max-w-[1200px] mx-auto">
                <div>
                    <div className="text-[25] font-bold my-6">Restaurants with online food delivery in Tatibhandh</div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                    {
                        Data.map((data, i) => {
                            return <Card  {...data} key={i} />
                        })
                    }
                </div>
            </div>
        </>
    )

}


