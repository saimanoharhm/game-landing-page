import React from "react";
import classes from "./LandingPage.module.css";
import mainImage from "../assets/main-image.png";
import Card from "./others/Card";
import logo from "../assets/logo.png";

const cards = [
  {
    id: "1",
    title: "Counter strike",
    description:
      "We’re all about collaboration. We trust each other to make great things. And it’s our responsibility to create an environment that helps you do your best work: balancing time spent together with time to do your own thing. Come by, you’ll see what we mean.",
    backgroundColor: "#1060FF",
    titleColor: "#fff",
    descriptionColor: "#ccc",
  },
  {
    id: "2",
    title: "Counter strike",
    description:
      "We’re all about collaboration. We trust each other to make great things. And it’s our responsibility to create an environment that helps you do your best work: balancing time spent together with time to do your own thing. Come by, you’ll see what we mean.",
    backgroundColor: "#FFC612",
    titleColor: "#000",
    descriptionColor: "#555",
  },
  {
    id: "3",
    title: "Counter strike",
    description:
      "We’re all about collaboration. We trust each other to make great things. And it’s our responsibility to create an environment that helps you do your best work: balancing time spent together with time to do your own thing. Come by, you’ll see what we mean.",
    backgroundColor: "#1060FF",
    titleColor: "#fff",
    descriptionColor: "#ccc",
  },
  {
    id: "4",
    title: "Riot Games",
    description:
      "We’re all about collaboration. We trust each other to make great things. And it’s our responsibility to create an environment that helps you do your best work: balancing time spent together with time to do your own thing. Come by, you’ll see what we mean.",
    backgroundColor: "#FFC612",
    titleColor: "#000",
    descriptionColor: "#555",
  },
];

const LandingPage = () => {
  const cardList = cards.map((card) => (
    <Card
      id={card.id}
      key={card.title + "_" + card.id}
      title={card.title}
      description={card.description}
      backgroundColor={card.backgroundColor}
      titleColor={card.titleColor}
      descriptionColor={card.descriptionColor}
    />
  ));
  return (
    <div className={classes.container}>
      <div className={classes.section1}>
        <header className={classes.heading}>
          <h1>Publishers</h1>
        </header>
        <img className={classes.logo} src={logo} alt="logo" />
        <div
          className={classes.image}
          style={{
            backgroundImage: `url(${mainImage})`,
          }}
        />
      </div>
      <div className={classes.section2}>
        <ul className={classes.card}>{cardList}</ul>
      </div>
    </div>
  );
};

export default LandingPage;
