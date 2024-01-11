"use client";

import { Fragment } from "react";

import Image from "next/image";
import logo from "../../public/assets/Color logo - no background.svg";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  return (
    <Fragment>
      <div className="hero__container">
        <section className="hero">
          <div className="hero-title">
            <h3>Hello Entrepreneurs!</h3>
            <h2>Looking an Edge in Your Business?</h2>
            <div className="hero__button-container">
              <button onClick={() => router.push("/blog")}>Blog</button>
              <button onClick={() => router.push("/tools")}>Tools</button>
            </div>
          </div>
          <div className="hero-logo">
            <div className="hero-logo__image-container">
              <Image src={logo} alt="EdgeInMind" width={600} height={350} />
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default Home;
