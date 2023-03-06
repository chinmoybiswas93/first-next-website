import Courses from "@/components/Courses";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import LiveSeminar from "@/components/LiveSeminar";
import Mentors from "@/components/Mentor";
import Services from "@/components/Services";
import SuccessStories from "@/components/SuccessStories";
import Testimonials from "@/components/Testimonials";

export default function Home({ services, categories, courses }) {
  // const { services, categories, courses } = props;
  // console.log(services);
  // console.log(categories);
  // console.log(courses);
  return (
    <>
      <Hero></Hero>
      <Services services={services}></Services>
      <Courses categories={categories}></Courses>
      <LiveSeminar></LiveSeminar>
      <Testimonials></Testimonials>
      <SuccessStories></SuccessStories>
      <Mentors></Mentors>
      <Faq></Faq>
    </>
  );
}

export async function getStaticProps() {
  const urls = [
    "http://localhost:4000/services",
    "http://localhost:4000/categories",
    "http://localhost:4000/courses",
  ];

  const data = await Promise.all(
    urls.map(async (url) => {
      const res = await fetch(url);
      const dataJson = await res.json();
      return dataJson;
    })
  );

  // console.log(data);
  return {
    props: {
      services: data[0],
      categories: data[1],
      courses: data[2],
    },
  };
}
