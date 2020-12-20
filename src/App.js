import React from "react";
import "./styles.css";
import { useState } from "react";

const foodDB = {
  pizza: [
    { name: "Adam's Pizza", rating: "5/5" },
    { name: "360 degree pizzeria", rating: "4.3/5" },
    { name: "Dominos Pizza", rating: "4.5/5" },
    { name: "Pizza Max", rating: "4.5/5" },
    { name: "Pizza Hut", rating: "4.5/5" }
  ],

  burger: [
    { name: "Voyager", rating: "4/5" },
    { name: "The Burger Junction", rating: "4.5/5" },
    { name: "Qissa Cafe", rating: "4.5/5" },
    { name: "Kashi", rating: "4.5/5" },
    { name: "Cafe17", rating: "4.5/5" }
  ],
  north_indian: [
    { name: "Tandoor", rating: "4/5" },
    { name: " Rasoi Fort Kochi", rating: "4.5/5" },
    { name: " Sardar ji ka dhaba", rating: "4.5/5" },
    { name: "Ember", rating: "4.5/5" },
    { name: "Barbque Nation", rating: "4.5/5" }
  ],
  south_indian: [
    { name: "Kerala Cafe", rating: "4/5" },
    { name: "Brindavan Restaurant", rating: "4.5/5" },
    { name: "Kayees", rating: "5/5" },
    { name: "Paalaram", rating: "5/5" },
    { name: "Alibaba and 41 dishes", rating: "3.5/5" }
  ],
  arabic: [
    { name: "Zaatar", rating: "4/5" },
    { name: "Real Arabia", rating: "4.5/5" },
    { name: "Al Taza", rating: "4.5/5" },
    { name: "Cafe d' Arabia", rating: "4.5/5" },
    { name: "The Hotspot", rating: "4.5/5" }
  ]
};
const food = require("/src/food.jpg");
export default function App() {
  const [selectedGenre, setGenre] = useState("pizza");
  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App" style={{ width: "700px", margin: "auto" }}>
      <img
        src={food}
        style={{ width: "700px", height: "400px", position: "relative" }}
        alt="error"
      />
      <view
        style={{
          position: "absolute",
          top: 50,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "4rem",
            color: "white"
          }}
        >
          hungrybites
        </p>
        <p style={{ fontSize: "smaller", color: "white" }}>
          Discover your new favorites.
        </p>

        <div>
          {Object.keys(foodDB).map((genre) => (
            <button
              onClick={() => genreClickHandler(genre)}
              style={{
                cursor: "pointer",
                backgroundColor: "transparent",
                borderRadius: "0.5rem",
                padding: "0.5rem  1rem",
                margin: "1rem 0.3rem",
                color: "white"
              }}
            >
              {genre}
            </button>
          ))}
        </div>
      </view>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {foodDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid black",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
      <hr />
      <footer>hungrybites@kochi</footer>
    </div>
  );
}
