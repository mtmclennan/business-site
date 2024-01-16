"use client";

import { Fragment } from "react";
import Image from "next/legacy/image";
import logo from "../../../public/assets/Color logo - no background.svg";

const About = () => {
  return (
    <Fragment>
      <section className="contact-hero__section">
        <div className="contact-hero">
          <h3>About</h3>
          <div>
            <Image src={logo} alt="EdgeInBusiness" layout="responsive" />
          </div>
          <p>Here to help you!</p>
        </div>
      </section>
      <section className="about-content__container">
        <p>
          Welcome to EdgeInBusiness, your go-to resource for new business owners
          embarking on the exciting journey of entrepreneurship. At
          EdgeInBusiness, we understand the challenges and uncertainties that
          come with starting and managing a small business. That&apos;s why
          we&apos;re dedicated to providing you with invaluable insights,
          practical tips, and expert advice to empower you on your path to
          success.
        </p>
        <br></br>
        <p>
          Our blog covers a wide range of topics essential for new business
          owners, including strategic planning, marketing strategies, financial
          management, legal considerations, and much more. Whether you&apos;re
          launching a startup, taking over a family business, or diving into a
          new venture, our goal is to be your trusted companion every step of
          the way.
        </p>
        <br></br>
        <p>
          We believe that knowledge is the key to overcoming obstacles and
          making informed decisions. That&apos;s why our team of experienced
          writers and industry experts curate content that is not only
          informative but also actionable. From comprehensive guides to
          real-life success stories, EdgeInBusiness is here to inspire, educate,
          and support you as you navigate the dynamic world of entrepreneurship.
        </p>
        <br></br>
        <p>
          Join our community of like-minded business enthusiasts, and let&apos;s
          build a thriving future together. Explore our blog, engage with our
          community, and let EdgeInBusiness be your resource for turning your
          entrepreneurial dreams into reality. Welcome to a wealth of
          information tailored just for you – the aspiring business owner ready
          to conquer the challenges and savor the triumphs of entrepreneurship.
        </p>
        <p>Build wealth, realise your potential.</p>
      </section>
    </Fragment>
  );
};

export default About;
