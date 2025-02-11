import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './slider.css';

const Slider = () => {
  const quotes = [
    {
      quoteTitle: "Quote From Prophet",
      quoteDescription:
        "Abu Musa Al-Ash`ari (may Allah be pleased with him) narrated that the Prophet (peace and blessings be upon him) said: 'Keep refreshing your knowledge of the Qur’an for [I swear] by the One in whose hand the soul of Muhammad is, it is more liable to escape [from memory] than camels do from their hobbles.'",
      reference: "(Al-Bukhari and Muslim)",
    },
    {
      quoteTitle: "Quote From Prophet",
      quoteDescription:
        "`A’ishah (may Allah be pleased with her) narrated that the Prophet (peace and blessings be upon him) said: 'One who is proficient in reciting the Qur’an is associated with the noble, pious (angel) scribes. As for he who stammers when reciting the Qur’an and finds it difficult, he will be granted a double reward.'",
      reference: "(Al-Bukhari and Muslim)",
    },
    {
      quoteTitle: "Quote From Prophet",
      quoteDescription:
        "`Abdullah ibn `Amr ibn Al-`Aas (may Allah be pleased with him) narrated that the Prophet (peace and blessings be upon him) said: 'The one who was devoted to the Qur’an will be told [on the Day of Resurrection]: ‘Recite [the Qur’an] and ascend [in ranks] as you used to recite when you were in the world. Your rank will be at the last verse you recite.'",
      reference: "(Abu Dawud and At-Tirmidhi)",
    },
    {
      quoteTitle: "Quote From Prophet",
      quoteDescription:
        "Uthman ibn `Affan (may Allah be pleased with him) narrated that the Prophet (peace and blessings be upon him) said: 'The best among you [Muslims] are those who learn the Qur’an and teach it.'",
      reference: "(Al-Bukhari)",
    },
    {
      quoteTitle: "Quote From Prophet",
      quoteDescription:
        "Abdullah ibn Mas`ud (may Allah be pleased with him) narrated that the Prophet (peace and blessings be upon him) said: 'Whoever recites a letter of the Book of Allah will be credited with a good deed and a good deed is multiplied into ten. I do not say that [the word:] “Alif Lam Meem” is [counted as] one letter. Rather, Alif is one letter, Lam is one letter and Meem is one letter.'",
      reference: "(At-Tirmidhi)",
    },
    {
      quoteTitle: "Quote From Prophet",
      quoteDescription:
        "Abu Umamah (may Allah be pleased with him) narrated that the Prophet (peace and blessings be upon him) said: 'Recite the Qur’an, for it will come as an intercessor for its reciters on the Day of Resurrection.'",
      reference: "(Muslim)",
    },
    {
      quoteTitle: "Quote From Prophet",
      quoteDescription:
        "An-Nawwas ibn Sam`an (may Allah be pleased with him) narrated that the Prophet (peace and blessings be upon him) said: 'On the Day of Resurrection, the Qur’an will be brought with its people who acted according to it in this world. The Surahs of Al-Baqarah and Aal-`Imran will be at the front arguing on behalf of their [devoted] reciter.'",
      reference: "(Muslim)",
    },
    {
      quoteTitle: "Quote From Prophet",
      quoteDescription:
        "Abu Hurairah (may Allah be pleased with him) narrated that the Prophet (peace and blessings be upon him) said: 'Whenever a group of people assembles in one of the Houses of Allah (i.e., Mosques), reciting the Book of Allah and studying it, tranquility descends upon them, Mercy covers them, angels surround them, and Allah makes mention of them among those who are with Him.'",
      reference: "(Muslim)",
    },
    {
      quoteTitle: "Quote From Prophet",
      quoteDescription:
        "Abdullah ibn `Abbas (may Allah be pleased with him) narrated that the Prophet (peace and blessings be upon him) said: 'A person who has nothing of the Qur’an in his heart is like a ruined house.'",
      reference: "(At-Tirmidhi)",
    },
  ];

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {quotes.map((quote, index) => (
          <SwiperSlide key={index} xl={3} lg={4} md={6} sm={12} className="mb-4">
            <div className="quote-wrapper">
              <h2 className="quote-title">{quote.quoteTitle}</h2>
              <p className="quote-description">{quote.quoteDescription}</p>
              <p className="quote-reference">{quote.reference}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
