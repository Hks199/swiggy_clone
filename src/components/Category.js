import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export default function Category() {

    const link = [
        { path: "https://cdn.dummyjson.com/recipe-images/1.webp", name: "pizza" },
        { path: "https://cdn.dummyjson.com/recipe-images/4.webp", name: "Biryani" },
        { path: "https://cdn.dummyjson.com/recipe-images/1.webp", name: "Burger" },
        { path: "https://cdn.dummyjson.com/recipe-images/4.webp", name: "Ice Cream" },
        { path: "https://cdn.dummyjson.com/recipe-images/1.webp", name: "pasta" },
        { path: "https://cdn.dummyjson.com/recipe-images/2.webp", name: "Noodles" },
        { path: "https://cdn.dummyjson.com/recipe-images/1.webp", name: "Manchuriyan" },
        { path: "https://cdn.dummyjson.com/recipe-images/2.webp", name: "Maggi" },
        { path: "https://cdn.dummyjson.com/recipe-images/1.webp", name: "Sandwich" },
        { path: "https://cdn.dummyjson.com/recipe-images/1.webp", name: "Dhabeli" },
        { path: "https://cdn.dummyjson.com/recipe-images/1.webp", name: "Pav Bhaji" },
    ]


    const [Slide, setSlide] = useState(0);
    const [Categoies, setCategories] = useState([]);

    const fetchCategory = () => {
        setCategories(link)
    }

    const nextSlide = () => {
        if (Slide >= Categoies.length - 5) return false
        setSlide(Slide + 3)
    }

    const prevSlide = () => {
        // eslint-disable-next-line 
        if (Slide == 0) return false;
        setSlide(Slide - 3)
    }


    useEffect(
        () => {
            fetchCategory();
            // eslint-disable-next-line
        }, []
    )
    return (
        <div className="max-w-[1200px] mx-auto">
            <div className="flex py-5 items-center justify-between">
                <div className="text-[25] font-bold">What's On Your Mind?</div>
                <div className="flex">
                    <div onClick={prevSlide} className="cursor-pointer flex border items-center justify-center rounded-full w-[30px] h-[30px] bg-[#e2e2e7] mx-2 "><FaArrowLeft /></div>
                    <div onClick={nextSlide} className="cursor-pointer flex border items-center justify-center rounded-full w-[30px] h-[30px] bg-[#e2e2e7] mx-2 "><FaArrowRight /></div>
                </div>
            </div>
            <div className=" flex justify-between  overflow-hidden">
                {Categoies.map((link, index) => {
                    return (
                        <div style={{
                            transform: `translateX(-${Slide * 150}%)`
                        }} key={index} className="w-[100px] mx-[25px] my-6 shrink-0 duration-500">
                            <img className="rounded-full" src={link.path} alt="" />
                            <h5 className="text-center">{link.name}</h5>
                        </div>
                    )
                })
                }
            </div>
            <hr className="my-6"></hr>
        </div>
    )
}