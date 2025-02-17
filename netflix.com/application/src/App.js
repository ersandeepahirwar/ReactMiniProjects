import React from "react";

import Card from "./components/Card";

const App = () => {
  const data = [
    {
      id: 1,
      source: "https://bit.ly/45lolqv",
      text: "Friends Poster",
      title: "Friends",
      link: "https://www.netflix.com/in/title/70153404",
    },
    {
      id: 2,
      source: "https://bit.ly/45jGrZI",
      text: "Money Heist Poster",
      title: "Money Heist",
      link: "https://www.netflix.com/in/title/80192098",
    },
    {
      id: 3,
      source: "https://bit.ly/4cgDXgW",
      text: "Stranger Things Poster",
      title: "Stranger Things",
      link: "https://www.netflix.com/in/title/80057281",
    },
    {
      id: 4,
      source: "https://bit.ly/4bVZ6gG",
      text: "Vikings Poster",
      title: "Vikings",
      link: "https://www.netflix.com/in/title/80025678",
    },
    {
      id: 5,
      source: "https://bit.ly/3VkGdNj",
      text: "The Crown Poster",
      title: "The Crown",
      link: "https://www.netflix.com/in/title/80025678",
    },
    {
      id: 6,
      source: "https://bit.ly/45lFfoA",
      text: "The Witcher Poster",
      title: "The Witcher",
      link: "https://www.netflix.com/in/title/80189685",
    },
    {
      id: 7,
      source: "https://bit.ly/4aWBC9W",
      text: "The Last Kingdom Poster",
      title: "The Last Kingdom",
      link: "https://www.netflix.com/in/title/80074249",
    },
    {
      id: 8,
      source: "https://bit.ly/3VAtJmb",
      text: "Titans Poster",
      title: "Titans",
      link: "https://www.netflix.com/in/title/80218200",
    },
  ];

  return (
    <div
      className="container-fluid p-5"
      style={{ background: "#000000", minHeight: "100vh" }}
    >
      <div className="row">
        {data.map(({ id, source, text, title, link }) => {
          return (
            <Card
              key={id}
              source={source}
              text={text}
              title={title}
              link={link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
