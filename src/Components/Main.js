import React, { useEffect, useRef } from "react";

import "./main.css";
import {
  Checks,
  Envelope,
  FacebookLogo,
  InstagramLogo,
  MapPin,
  Phone,
  TwitterLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "./Slider";
import Faq from "./Faq/Faq";
import gsap from "gsap";

const Main = () => {
  const currentYear = new Date().getFullYear();

  const headingRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, x: 400, filter: "blur(10px)" },
      { opacity: 1, x: 0, filter: "blur(0px)", duration: 1, ease: "power3.out" }
    );
  }, []);

  const coursesDetails = [
    {
      courseName: "হিফযুল কোরআন",
      topic: [
        "সম্পূর্ণ কোরআন সহিহ শুদ্ধভাবে হিফয",
        "মাখরাজ",
        "তাজবীদ",
        "সিফাত",
        "নাজরানা",
        "প্রয়োজনীয় মাসলা মাসায়েল",
        "২৪/৭ Whatsapp এ সাপোর্ট",
      ],
    },
    {
      courseName: "সহিহ কোরআন শিক্ষা",
      status: "Popular",
      topic: [
        "মাখরাজ",
        "তাজবীদ",
        "সিফাত",
        "নাজরানা",
        "মাসনুন দোয়া",
        "প্রয়োজনীয় আয়াত / সুরাহ",
        "প্রয়োজনীয় মাসলা মাসায়েল",
        "২৪/৭ Whatsapp এ সাপোর্ট",
      ],
    },
    {
      courseName: "আরবি ভাষা শিক্ষা",
      topic: [
        "মাখরাজ",
        "তাজবীদ",
        "সিফাত",
        "নাজরানা",
        "Hedayatun Nahu (Arabic-Bangla)",
        "Mijanus-sarf-and-Munshaib",
        "Essential Tamrinaat",
        "২৪/৭ Whatsapp এ সাপোর্ট",
      ],
    },
  ];

  const initiatives = [
    {
      title: "আল কুরআনের দারস",
      description:
        "আলহামদুলিল্লাহ আমরা শিশু থেকে প্রাপ্ত বয়স্ক সবার জন্যে কুরআন শিক্ষার আয়োজন করেছি। এ মহৎ কাজে আপনিও অংশগ্রহণ করতে পারেন।",
      image: "/koran.png",
      buttonText: "Sponsor Now!",
    },
    {
      title: "ইসলামিক আকিদা",
      description:
        "আমরা ইসলামের মৌলিক আকিদাগুলো শিক্ষাদান করে থাকি, যাতে একজন মুসলিম ইসলাম সম্পর্কে আরো বিস্তৃতভাবে জানতে সক্ষম হয়। আমাদের কার্যক্রম আরো ব্যাপক করতে আপনিও অংশ নিতে পারেন।",
      image: "/praying.png",
      buttonText: "Donate Now!",
    },
    {
      title: "ইসলামিক এক্টিভিটি",
      description:
        "আমাদের স্বল্প সামর্থ্যে ইসলামিক সৌন্দর্য ছড়িয়ে দিতে চাই। সেই লক্ষ্যে মুসলিম কমিউনিটিতে দাওয়া ও সচেতনতা তৈরি করছি। আমাদের সীমিত উদ্যোগকে আরো বিস্তৃত করতে আপনার সহযোগিতা কামনা করি।",
      image: "/islam.png",
      buttonText: "Join with us!",
    },
    {
      title: "মানবিক সেবা",
      description:
        "আমরা ধীরে ধীরে আমাদের কার্যক্রম মানবিক সেবার দিকে নিয়ে যেতে চাই। দরিদ্র বিমোচন, অতিদরিদ্র মেয়েদের বিবাহ, ইয়াতিমের ভরণপোষণ ও গৃহহীন জনগোষ্ঠীর জন্য সহায়তা দিচ্ছি। আমাদের এই প্রকল্পে আপনিও অংশগ্রহণ করুন।",
      image: "/social-care.png",
      buttonText: "Get Involved!",
    },
  ];

  return (
    <>
      <div className="top-bar">
        <div className="top-info">
          <Envelope size={20} />{" "}
          <span className="ps-1">tolabulquran@gmail.com</span>
        </div>
        <div className="top-info">
          <Phone size={20} /> <span className="ps-1">+880 1334-757374</span>
        </div>
      </div>
      <section className="hero-section">
        <Container>
          <Row className="align-items-center py-5">
            <Col xs={12} lg={6} className="hero-img-wrapper">
              <img src="/image1.png" alt="image1" />
            </Col>
            <Col xs={12} lg={6} className="hero-details" ref={headingRef}>
              <h1>সহিহ কুরআন শিখুন ঘরে বসেই..</h1>
              <p>
                কুরআন শিক্ষা প্রত্যেক মুসলিমের জন্য ফরজ । তাই আর অনীহা না করে আজ
                থেকেই কুরআন দিয়ে জীবন গড়া শুরু করুন।
              </p>
              <button
                className="button"
                onClick={() => (window.location.href = "#contact")}
              >
                যোগাযোগ করুন
              </button>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="commit-section">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} lg={6} className="commit-details">
              <h1>আল- কুরআন শিখুন যে কোন সময়, বিশ্বের যেকোন স্থান থেকে!</h1>
              <h4 className="commit-tag">বিশ্বস্থতায় আমরা প্রতিশ্রুতিবদ্ধ।</h4>
              <p>
                আলহামদুলিল্লাহ তলাবুল কুরআন বিশ্বব্যাপি বাংলাদেশি ভাই-বোনদের
                তাদের সুবিধামত সময়ে ,সপ্তাহের যেকোন দিন ,অভিজ্ঞ শিক্ষক /
                শিক্ষিকা দ্বারা লাইভ সহিহ কোরআন শিক্ষা / হিফযুল কোরআন / আরবি
                ভাষা শিক্ষা সেবা প্রদান করে আসছে। আমাদের বিশেষায়িত শিক্ষক আছেন
                যারা ভার্চুয়াল ক্লাস নেওয়ায় বিশেষ প্রশিক্ষিত। তলাবুল কুরআন
                থেকে কুরআন শিখে আপনি বিশুদ্ধভাবে সকল নিয়ম অনুসরণ করে কুরআন পড়তে
                পারবেন ইনশাল্লাহ । আমাদের প্রতিষ্ঠানে শিশু, কিশোর ও
                প্রাপ্তবয়স্কদের জন্যে আলাদা আলাদা শিক্ষক রয়েছে, যাতে আপনার
                শেখাটা উপভোগ্য হয়। এখানে নারী-পুরুষদের জন্যে সম্পুর্ন পৃথক
                ব্যাবস্থাপনা। নারীদের জন্যে নারী শিক্ষিকা এবং পুরুষদের জন্যে
                পুরুষ শিক্ষক। আমাদের সকল শিক্ষক হাফেজ, ক্বারি, মাওলানা। সেই সাথে
                উচ্চতর ইসলামিক বিষয়ে অধ্যায়নরত, আমাদের অধিকাংশ শিক্ষক মিশরের
                আল- আজহার বিশ্ববিদ্যালয়ের ছাত্র / ছাত্রী,আর এই কারণে আমরা
                ২৪ঘন্টাই যেকোন সময় ক্লাস করাতে পারি আলহামদুলিল্লাহ্‌ আমাদের
                সমৃদ্ধ শিক্ষক প্যানেল থেকে আপনি বা আপনার সন্তানের জন্যে বেস্ট
                শিক্ষক সিলেক্ট করতে পারবেন। সেইসাথে পরবর্তীতে যেকোন সমস্যাই
                শিক্ষক পরিবর্তন করার বিকল্প অপশনও রয়েছে। আমরা স্বতঃস্ফূর্তভাবে
                শ্রেষ্ঠ শিক্ষক প্রদানে প্রতুশ্রুতিবদ্ধ। আমাদের শিক্ষক প্যানেলে
                বিভিন্ন ভাষায় দক্ষ শিক্ষক রয়েছে, যারা ইংরেজি,আরবি,
                বাংলা,হিন্দি, ভাষায় পাঠদানে সক্ষম। একজন মুসলিম হিসেবে আল কোরআন
                পড়তে জানা এবং আমল করা আমাদের ওপর ফরয ,আর আরবি ভাষা এমন এক ভাষা
                যেইখানে সামান্য টান ,গুন্নাহ ছুটে গেলেই অর্থ পরিবর্তন হয়ে যাই
                ,তাই লাইভ ক্লাসের মাধ্যমে অভিজ্ঞ হুজুরের কাছে সহিহ সুদ্ধভাবে
                কোরআন শেখার বিকল্প নেই । কুরআন আপনার জান্নাতে যাওয়ার পথকে সুগম
                করবে। আল্লাহ আপনার সহায় হোন।। জাযাকুমুল্লাহু খাইরান।
              </p>
              <button
                className="button commitBtn"
                onClick={() => (window.location.href = "#contact")}
              >
                আজই শুরু করুন
              </button>
            </Col>
            <Col xs={12} lg={6} className="commit-img-wrapper">
              <img src="/image2.png" alt="image1" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="courses-section">
        <Container>
          <Row className="courses-wrapper">
            <h1 className="courses-mainTag">
              তলাবুল কোরআন প্লাটফর্মে যা যা শিখতে পারবেন
            </h1>
            <p className="courses-p">
              আমাদের সকল ক্লাস লাইভ ওয়ান টু ওয়ান পদ্ধতিতে Teams অ্যাপের মাধ্যমে
              নেয়া হয় এবং যাদের জন্য এটি কঠিন মনে হবে তাদের জন্য আমরা WhatsApp এ
              ভিডিও কলের মাধ্যমে স্ক্রিন শেয়ার দিয়ে শেখানোর ব্যবস্থা করে থাকি
              এবং অনলাইনে ক্লাস নেয়ার জন্য Technical বিষয়ে শিক্ষকদের যথেষ্ট
              Training করিয়ে তার পর আমরা আমাদের প্রতিটা শিক্ষক নির্বাচন করি।
              আমরা সচরাচর ৩০ মিনিট অথবা ৬০ মিনিট এর ক্লাস অফার করি কিন্তু আপনারা
              চাইলে এইটাও আপনাদের সুবিধামত Customize করে নিতে পারেন ঠিক যেমন
              আপনারা আপনাদের সুবিধামত সময়ে ,সপ্তাহে যেকোনো দিন আমাদের
              তলাবুল কোরআনে ক্লাস করতে পারেন এবং প্রয়োজনে যেকোন সময় ক্লাস টাইম
              অথবা ক্লাসের তারিখ শিক্ষক অথবা আমাদের সাথে কথা বলে পরিবর্তন করে
              নিতে পারেন আমরা কিন্তু আপনাদের থেকে আগে কোন টাকা বা হাদিয়া নেব না।
              আপনারা আমাদের ট্রায়াল ক্লাস করে যদি আমাদের সকল কিছু ভালো লাগে
              তাহলে সপ্তাহে কতদিন পরবেন,কত সময় ধরে পরবেন এইগুলাও আপনারাই ঠিক
              করবেন তারপর ১টা মাস ক্লাস করার পর আপনি ঠিক যতগুলো ক্লাস করেছেন
              আমরা শুধুমাত্র ঠিক ততগুলো ক্লাসের জন্যই আপনাকে ইনভয়েস দেব
              ইনশা-আল্লাহ এছাড়া আমরা আমাদের ওয়েবসাইটে অথবা ফেইসবুক পেইজে আমাদের
              হাদিয়ার কোন উল্লেখ করিনা কারণ আমরা চাই আগে আপানরা আমাদের সাথে কথা
              বলুন ,আমাদের সম্পর্কে বিস্তারিত জানুন এবং তারপর আপনার যদি আমাদের
              মানসম্পন্ন মনে হয় কেবল তখনি হাদিয়ার ব্যাপার টা নিয়ে আলোচনা করা
              যাবে এছাড়াও আমাদের হাদিয়া নির্ধারিত নয় এটিও আপনারাই ঠিক করতে
              পারবেন যে কোরআন এর খেদমতে আপনারা কতটুকু খরচ করতে রাজি আছেন এবং
              পরকালের জন্য আপনারা কতটুকু বিনিয়োগ করে আপনার জীবনকে কোরআন দিয়ে
              সাজিয়ে নিতে পারবেন ।
            </p>
            <div className="courses">
              {coursesDetails.map((course, index) => (
                <div key={index} className="course-card">
                  <div>
                    <h2 className="courseName">{course.courseName}</h2>
                    <p className="popular">{course?.status}</p>
                    <ul className="course-topic-wrapper">
                      {course.topic.map((topic, i) => (
                        <li key={i} className="topic">
                          <Checks size={24} color="#2AB71A" />{" "}
                          <span className="ps-2">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    className="button"
                    onClick={() => (window.location.href = "#contact")}
                  >
                    শুরু করুন
                  </button>
                </div>
              ))}
            </div>
          </Row>
        </Container>
      </section>
      <section className="initiatives-section">
        <Container>
          <h2 className="text-center mb-5 fw-semibold">আমাদের কার্যক্রম</h2>
          <Row className="justify-content-center">
            {initiatives.map((initiative, index) => (
              <Col key={index} xl={3} lg={4} md={6} sm={12} className="mb-4">
                <div className="initiative-card">
                  <img
                    src={initiative.image}
                    alt={initiative.title}
                    className="initiative-image"
                  />
                  <h2 className="initiative-title">{initiative.title}</h2>
                  <p className="initiative-description">
                    {initiative.description}
                  </p>
                  <button className="button">{initiative.buttonText}</button>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section className="quote-section">
        <div className="bg-elements" />
        <Container>
          <Row className="justify-content-center">
            {" "}
            <Col lg={10}>
              <Slider />
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row className="justify-content-center">
            {" "}
            <Col lg={10}>
              <Faq />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="contact-section" id="contact">
        <Container>
          <h2 className="text-center mb-5 fw-semibold">About Tolabul Quran</h2>
          <Row className="justify-content-center">
            <Col xl={4} lg={4} md={6} sm={12} className="mb-4">
              <div className="contact-card">
                <Phone size={32} color="#4CAF50" />
                <h3>WhatsApp Number</h3>
                <p>+880 1334-757374</p>
              </div>
            </Col>
            <Col xl={4} lg={4} md={6} sm={12} className="mb-4">
              <div className="contact-card">
                <Envelope size={32} color="#4CAF50" />
                <h3>Email</h3>
                <p>tolabulquran@gmail.com</p>
              </div>
            </Col>
            <Col xl={4} lg={4} md={6} sm={12} className="mb-4">
              <div className="contact-card">
                <MapPin size={32} color="#4CAF50" />
                <h3>Address</h3>
                <p>Dhaka, Bangladesh</p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5">
            <Col xs={12} className="text-center">
              <h3>About Tolabul Quran</h3>
              <p>
                Tolabul Quran is an online platform with a vision to spread the
                knowledge of the Quran throughout the world. We are the first
                online platform to provide live one-on-one Quran classes at your
                suitable time. You can take our live classes anytime you want,
                and our specialized teachers are ready to teach you the Quran in
                a correct way so that you can recite the holy book without any
                mistake.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <footer className="footer">
        <div className="footer-content">
          <div className="social-media">
            <a
              href="https://www.facebook.com/TolabulQuranAcademy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FacebookLogo size={32} weight="fill" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <YoutubeLogo size={32} weight="fill" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <InstagramLogo size={32} weight="fill" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <TwitterLogo size={32} weight="fill" />
            </a>
          </div>

          <div className="footer-text">
            <p>
              © {currentYear} tolabulQuran - All rights reserved
            </p>
            <div className="footer-links">
              <a href="/terms" className="footer-link">
                Terms & Conditions
              </a>{" "}
              |
              <a href="/privacy" className="footer-link">
                {" "}
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Main;
