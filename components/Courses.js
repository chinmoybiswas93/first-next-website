import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Tab } from "@headlessui/react";
import styles from "../styles/Courses.module.css";
import CourseCarousel from "./CourseCarousel";

// const categories = [
//   {
//     id: "1",
//     name: "সকল কোর্স",
//   },
//   {
//     id: "2",
//     name: "ব্যাসিক স্কিল",
//   },
//   {
//     id: "3",
//     name: "ডিজাইন এন্ড মাল্টিমিডিয়া",
//   },
//   {
//     id: "4",
//     name: "ওয়েব ডিজাইন এন্ড ডেভেলপমেন্ট",
//   },
//   {
//     id: "5",
//     name: "ডিজিটাল মার্কেটিং",
//   },
//   {
//     id: "6",
//     name: "ব্যাসিক স্কিল",
//   },
//   {
//     id: "7",
//     name: "ডিজাইন এন্ড মাল্টিমিডিয়া",
//   },
// ];

export default function Courses({categories}) {
  var settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    variableWidth: true,
  };
  return (
    <section>
      <div className="lg:container px-4 lg:px-0 mx-auto lg:py-20 py-16 items-center">
        <div className="text-center lg:text-left">
          <h2 className="heading text-center my-3 leading-normal">
            কোর্স সমূহ
          </h2>
          <p className="text-desc lg:w-8/12 w-11/12 md:w-10/12 mx-auto text-center text-text mb-5">
            দেশ ও দেশের বাইরে বর্তমানে যে স্কিলগুলোর চাহিদা সবচেয়ে বেশি, সেসব
            দিয়েই সাজানো হয়েছে আমাদের কোর্স লিস্ট। এখান থেকে আপনার সুবিধামত
            অনলাইন বা অফলাইন কোর্সে এনরোল করতে পারবেন যেকোনো সময়।
          </p>
        </div>
        <div className="mt-8">
          <Tab.Group>
            <Tab.List className="px-6 course-tab-list">
              <Slider className="px-3" {...settings}>
                {categories.map((category, index) => {
                  return (
                    <Tab className={styles.tabItem} key={index}>
                      {category.name}
                    </Tab>
                  );
                })}
              </Slider>
            </Tab.List>
            <Tab.Panels className={"tab-panel mt-8"}>
              {categories.map((category, index) => {
                return (
                  <Tab.Panel className={"tab-panel-content"} key={index}>
                    <CourseCarousel category={category}></CourseCarousel>
                  </Tab.Panel>
                );
              })}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </section>
  );
}
