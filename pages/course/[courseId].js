import { useRouter } from "next/router";

export default function courseSingle() {
  const router = useRouter();
  const courseId = router.query.courseId;
  return (
    <section>
      <div className="lg:container px-4 lg:px-0 mx-auto lg:py-20 py-16 items-center">
        <h1 className="text-xl font-bold">Course {courseId} Details</h1>
      </div>
    </section>
  );
}
