import Courses from "@/components/Courses";
import Hero from "@/components/Hero";
import LiveSeminar from "@/components/LiveSeminar";
import Mentors from "@/components/Mentors";
import Services from "@/components/Services";
import SuccessStories from "@/components/SuccessStories";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Services></Services>
      <Courses></Courses>
      <LiveSeminar></LiveSeminar>
      <Testimonials></Testimonials>
      <SuccessStories></SuccessStories>
      <Mentors></Mentors>
    </>
  );
}
