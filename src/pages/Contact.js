import React from "react";
import ContactForm from "../components/ContactForm";
import TwoCol from "../components/TwoCol";
import lang from "../utils/langConstants";
import { useSelector } from "react-redux";
import { images } from "../utils/constants";

const Contact = () => {
  const selectedLanguage = useSelector((store) => store.config.lang);
  return (
    <div className="banner-top-padding">
      <TwoCol
        imageURL={images.teamDiscuss}
        title={lang[selectedLanguage].contact.twoColTitle}
        description={lang[selectedLanguage].contact.twoColSubTitle}
        buttonText={lang[selectedLanguage].contact.twoColButton}
        link="#contact-us"
        imageAlign="right"
      />
      <ContactForm />
    </div>
  );
};

export default Contact;
