import CoursesTab from "./CoursesTab";

export default function Courses() {
  return (
    <section>
      <div className="lg:container px-4 lg:px-0 mx-auto lg:py-20 py-16 items-center">
        <div className="text-center lg:text-left">
          <h2 className="xl:text-[40px] md:text-[36px] text-[32px] font-bold text-center text-secondary my-3 leading-normal">
            কোর্স সমূহ
          </h2>
          <p className="lg:w-8/12 w-11/12 md:w-10/12 mx-auto text-center text-text mb-5">
            দেশ ও দেশের বাইরে বর্তমানে যে স্কিলগুলোর চাহিদা সবচেয়ে বেশি, সেসব
            দিয়েই সাজানো হয়েছে আমাদের কোর্স লিস্ট। এখান থেকে আপনার সুবিধামত
            অনলাইন বা অফলাইন কোর্সে এনরোল করতে পারবেন যেকোনো সময়।
          </p>
        </div>
        <div>
          <CoursesTab></CoursesTab>
        </div>
      </div>
    </section>
  );
}
