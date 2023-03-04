import Image from "next/image";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className="bg-orangeBg">
      <div className="lg:container px-4 lg:px-0 mx-auto lg:py-20 py-16 items-center grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div className="col-1 col-start-1 col-end-1 md:col-start-1 md:col-end-4 lg:col-start-1 lg:col-end-2 border text-center lg:text-left">
          <div className="flex justify-center lg:justify-start">
            <a href="/">
              <Image src="images/Logo.svg" alt="logo" height="88" width="160" />
            </a>
          </div>
          <p className="w-8/12 lg:w-10/12 mx-auto lg:mx-0 mt-4 text-text">
            অন ক্যাম্পাস কিংবা অনলাইন লাইভ স্কিল ডেভেলপমেন্ট প্ল্যাটফর্ম।
          </p>
          <div className="mt-8">
            <p className="w-8/12 lg:w-10/12 mx-auto lg:mx-0 mt-4 text-text">
              {" "}
              কমিউনিটি- এর সাথে কানেক্টেড থাকতে
            </p>
            <div className="social-icons flex justify-center lg:justify-start gap-4 mt-3">
              <button>
                <Image
                  src={"/images/footer-socials (1).png"}
                  width={"30"}
                  height={"30"}
                ></Image>
              </button>
              <button>
                <Image
                  src={"/images/footer-socials (2).png"}
                  width={"30"}
                  height={"30"}
                ></Image>
              </button>
              <button>
                <Image
                  src={"/images/footer-socials (3).png"}
                  width={"30"}
                  height={"30"}
                ></Image>
              </button>
              <button>
                <Image
                  src={"/images/footer-socials (4).png"}
                  width={"30"}
                  height={"30"}
                ></Image>
              </button>
            </div>
          </div>
        </div>
        <div className="col-2 border">Col 2</div>
        <div className="col-3 border">Col 3</div>
        <div className="col-4 border">Col 4</div>
      </div>
    </footer>
  );
}
