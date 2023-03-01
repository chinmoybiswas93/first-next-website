import Courses from "@/components/Courses";
import CoursesWithTabSlider from "@/components/CoursesWithTabSlider";
import Hero from "@/components/Hero";
import SimpleSlider from "@/components/ReactSlick";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Services></Services>
      {/* <Courses></Courses> */}
      <CoursesWithTabSlider></CoursesWithTabSlider>
    </>
  );
}
