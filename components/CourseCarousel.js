import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Tab } from "@headlessui/react";
import CourseLoop from "./CourseLoop";

const courses = [
  {
    id: "1",
    category: "1",
    title: "মাইক্রোসফট অফিস এপ্লিকেশন ",
    courseCategory: "ব্যাসিক স্কিল",
    instructor: "সোহানুর রহমান খান",
    price: "৬,০০০",
    thumb: "course-img.png",
  },
  {
    id: "2",
    category: "1",
    title: "মাইক্রোসফট অফিস এপ্লিকেশন",
    courseCategory: "ব্যাসিক স্কিল",
    instructor: "সোহানুর রহমান খান",
    price: "৬,০০০",
    thumb: "course-img.png",
  },
  {
    id: "3",
    category: "1",
    title: "মাইক্রোসফট অফিস এপ্লিকেশন",
    courseCategory: "ব্যাসিক স্কিল",
    instructor: "সোহানুর রহমান খান",
    price: "৬,০০০",
    thumb: "course-img.png",
  },
  {
    id: "4",
    category: "2",
    title: "মাইক্রোসফট অফিস এপ্লিকেশন ",
    courseCategory: "ডিজাইন এন্ড মাল্টিমিডিয়া",
    instructor: "সোহানুর রহমান খান",
    price: "৬,০০০",
    thumb: "course-img.png",
  },
  {
    id: "5",
    category: "2",
    title: "মাইক্রোসফট অফিস এপ্লিকেশন ",
    courseCategory: "ডিজাইন এন্ড মাল্টিমিডিয়া",
    instructor: "সোহানুর রহমান খান",
    price: "৬,০০০",
    thumb: "course-img.png",
  },
  {
    id: "6",
    category: "2",
    title: "মাইক্রোসফট অফিস এপ্লিকেশন ",
    courseCategory: "ডিজাইন এন্ড মাল্টিমিডিয়া",
    instructor: "সোহানুর রহমান খান",
    price: "৬,০০০",
    thumb: "course-img.png",
  },
  {
    id: "1",
    category: "3",
    title: "মাইক্রোসফট অফিস এপ্লিকেশন ",
    courseCategory: "ব্যাসিক স্কিল",
    instructor: "সোহানুর রহমান খান",
    price: "৬,০০০",
    thumb: "course-img.png",
  },
];

export default function CourseCarousel() {
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mt-8 courses-carousel">
      <Slider {...settings}>
        {courses.map((course, index) => {
          return (
            <div key={index}>
                <CourseLoop course={course}></CourseLoop>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
