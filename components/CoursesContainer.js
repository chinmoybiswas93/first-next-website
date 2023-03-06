import CourseLoop from "./CourseLoop";
import { useEffect, useState } from "react";
import { Spinner } from "flowbite-react";

export default function CoursesContainer({ category }) {
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

  return (
    <div className="mt-8 courses-carousel">
      {loading ? (
        <div className="flex items-center justify-center">
          <Spinner
            className="loading-spinner"
            aria-label="Center-aligned spinner"
          />
        </div>
      ) : (
        <div className="grid grid-cols-4">
          {courses.map((course, index) => {
            return (
              <div key={index}>
                <CourseLoop course={course}></CourseLoop>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
