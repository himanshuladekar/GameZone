import React from "react";
import "./../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <nav className="navbar">
        <div className="logo">GameZone</div>
        <div className="auth-links">
          <a href="/login">Login</a>
          <a href="/signup">Signup</a>
        </div>
      </nav>
      <main>
  <h1>Welcome to the Site of Games</h1>
  <h2>Bored from surfing net have a look in our site</h2>
  <h3>Refer images does it remind you your favourite games in childhood</h3>
  <h3>Signup and start your Gaming</h3>
  <div className="img-container">
    <img
      src="https://i5.walmartimages.com/asr/2f515337-c2b1-4fe2-8818-95f7f885a186.8c124b6e92968704199d289e00b304b4.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff"
      alt="tictactoe"
    />
    <img
      src="https://www.wikihow.com/images/thumb/3/33/Play-Rock%2C-Paper%2C-Scissors-Step-5-Version-3.jpg/aid42597-v4-728px-Play-Rock%2C-Paper%2C-Scissors-Step-5-Version-3.jpg"
      alt="rock paper"
    />
  </div>
</main>

    </div>
  );
};

export default Home;
