import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Tab } from "@headlessui/react";
import CourseLoop from "./CourseLoop";
import { useEffect, useState } from "react";
import { Spinner } from "flowbite-react";

// const courses = [
//   {
//     id: "1",
//     category: "1",
//     title: "মাইক্রোসফট অফিস এপ্লিকেশন ",
//     courseCategory: "ব্যাসিক স্কিল",
//     instructor: "সোহানুর রহমান খান",
//     price: "৬,০০০",
//     thumb: "course-img.png",
//   },
//   {
//     id: "2",
//     category: "1",
//     title: "মাইক্রোসফট অফিস এপ্লিকেশন",
//     courseCategory: "ব্যাসিক স্কিল",
//     instructor: "সোহানুর রহমান খান",
//     price: "৬,০০০",
//     thumb: "course-img.png",
//   },
//   {
//     id: "3",
//     category: "1",
//     title: "মাইক্রোসফট অফিস এপ্লিকেশন",
//     courseCategory: "ব্যাসিক স্কিল",
//     instructor: "সোহানুর রহমান খান",
//     price: "৬,০০০",
//     thumb: "course-img.png",
//   },
//   {
//     id: "4",
//     category: "2",
//     title: "মাইক্রোসফট অফিস এপ্লিকেশন ",
//     courseCategory: "ডিজাইন এন্ড মাল্টিমিডিয়া",
//     instructor: "সোহানুর রহমান খান",
//     price: "৬,০০০",
//     thumb: "course-img.png",
//   },
//   {
//     id: "5",
//     category: "2",
//     title: "মাইক্রোসফট অফিস এপ্লিকেশন ",
//     courseCategory: "ডিজাইন এন্ড মাল্টিমিডিয়া",
//     instructor: "সোহানুর রহমান খান",
//     price: "৬,০০০",
//     thumb: "course-img.png",
//   },
//   {
//     id: "6",
//     category: "2",
//     title: "মাইক্রোসফট অফিস এপ্লিকেশন ",
//     courseCategory: "ডিজাইন এন্ড মাল্টিমিডিয়া",
//     instructor: "সোহানুর রহমান খান",
//     price: "৬,০০০",
//     thumb: "course-img.png",
//   },
//   {
//     id: "1",
//     category: "3",
//     title: "মাইক্রোসফট অফিস এপ্লিকেশন ",
//     courseCategory: "ব্যাসিক স্কিল",
//     instructor: "সোহানুর রহমান খান",
//     price: "৬,০০০",
//     thumb: "course-img.png",
//   },
// ];

export default function CourseCarousel({ category }) {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  // Course Data fetch
  useEffect(() => {
    if (category.id == "") {
      setLoading(true);
      fetch("http://localhost:4000/courses")
        .then((res) => res.json())
        .then((data) => {
          setCourses(data);
          setLoading(false);
        });
    } else {
      fetch(`http://localhost:4000/courses?category=${category.id}`)
        .then((res) => res.json())
        .then((data) => {
          setCourses(data);
          setLoading(false);
        });
    }
  }, []);

  // slider settings
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
    <div className="courses-carousel">
      {loading ? (
        <div className="flex items-center justify-center">
          <Spinner
            className="loading-spinner"
            aria-label="Center-aligned spinner"
          />
        </div>
      ) : (
        <Slider {...settings}>
          {courses.map((course, index) => {
            return (
              <div key={index}>
                <CourseLoop course={course}></CourseLoop>
              </div>
            );
          })}
        </Slider>
      )}
    </div>
  );
}
