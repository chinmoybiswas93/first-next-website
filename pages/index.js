import Courses from "@/components/Courses";
import Hero from "@/components/Hero";
import LiveSeminar from "@/components/LiveSeminar";
import Services from "@/components/Services";
import CenterSlider from "@/components/SlideCenter";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Services></Services>
      <Courses></Courses>
      <LiveSeminar></LiveSeminar>
      <Testimonials></Testimonials>
    </>
  );
}
