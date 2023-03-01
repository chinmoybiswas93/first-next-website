import Image from "next/image";

const services = [
  {
    title: "এক্সপার্ট ইন্সট্রাক্টর",
    description:
      "কেবল ক্লাস নয়,  জেআইটি সবসময় প্রস্তুত শিক্ষার্থীদের যেকোনো দরকারে, যেকোনো সময়। ",
    icon: "instructor-icon.svg",
  },
  {
    title: "সার্টিফিকেট প্রদান",
    description:
      "কেবল ক্লাস নয়,  জেআইটি সবসময় প্রস্তুত শিক্ষার্থীদের যেকোনো দরকারে, যেকোনো সময়। ",
    icon: "certificate-icon.svg",
  },
  {
    title: "ক্লাস ভিডিও",
    description:
      "কেবল ক্লাস নয়,  জেআইটি সবসময় প্রস্তুত শিক্ষার্থীদের যেকোনো দরকারে, যেকোনো সময়। ",
    icon: "class video icon.svg",
  },
  {
    title: "24/7 সাপোর্ট ",
    description:
      "কেবল ক্লাস নয়,  জেআইটি সবসময় প্রস্তুত শিক্ষার্থীদের যেকোনো দরকারে, যেকোনো সময়। ",
    icon: "support icon.svg",
  },
];

export default function Services() {
  return (
    <section className="bg-orangeBg">
      <div className="lg:container px-4 lg:px-0 mx-auto grid lg:grid-cols-2 grid-col-1 lg:py-20 py-16 items-center">
        <div className="text-center lg:text-left">
          <h3 className="text-[16px] md:text-[18px] font-medium text-text">
            আমাদের সুবিধা সমূহ
          </h3>
          <h2 className="xl:text-[40px] md:text-[36px] text-[32px] font-bold lg:text-left text-secondary my-3 leading-normal">
            জেআইটির বিশেষ সেবা
          </h2>
          <p className="lg:w-8/12 w-11/12 md:w-10/12 mx-auto lg:mx-0 text-center text-text lg:text-left mb-5">
            কেবল ক্লাস নয়, জেআইটি সবসময় প্রস্তুত শিক্ষার্থীদের যেকোনো দরকারে,
            যেকোনো সময়। তাই উন্নতমানের কোর্সের সাথে আপনি পাচ্ছেন কিছু বোনাস
            সুবিধা, যা শুধুমাত্র আমরাই দিয়ে থাকি।
          </p>
          <button className="bg-primary hover:bg-secondary px-5 py-2 rounded-md text-white font-medium">
            বিস্তারিত
          </button>
          <div className="mx-auto md:w-8/12 lg:w-10/12 lg:mx-0 mt-6 grid grid-cols-3">
            <div className="stat">
              <h3 className="font-semibold text-secondary text-[30px] md:text-[36] xl:text-[40px]">
                ২০+
              </h3>
              <p className="text-text">কোর্স</p>
            </div>
            <div className="stat">
              <h3 className="font-semibold text-secondary text-[30px] md:text-[36] xl:text-[40px]">
                ৮+
              </h3>
              <p className="text-text">ইন্সট্রাক্টর</p>
            </div>
            <div className="stat">
              <h3 className="font-semibold text-secondary text-[30px] md:text-[36] xl:text-[40px]">
                ২০০০
              </h3>
              <p className="text-text">স্টুডেন্ট</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4 mt-8">
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="border rounded-lg hover:bg-white hover:cursor-pointer hover:drop-shadow-lg"
              >
                <div className="py-6 px-8">
                  <div className="flex items-center mb-5">
                    <Image
                      src={`images/${service.icon}`}
                      height={"28"}
                      width={"28"}
                      alt="insturctor icon"
                    ></Image>
                    <h3 className="text-[18px] font-semibold ml-2 text-secondary">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-text mb-5">{service.description}</p>
                  <div className="text-right">
                    <button>
                      <Image
                        src={"images/arrow.svg"}
                        height={"10"}
                        width={"20"}
                        alt="arrow icon"
                      ></Image>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
