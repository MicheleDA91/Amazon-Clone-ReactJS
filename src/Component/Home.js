import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/29/kindle/journeys/YTZlOTFjNzUt/YTZlOTFjNzUt-ODZiNTc3ZDIt-w1500._CB405020660_.jpg"
          alt="amazon"
        />

        <div className="home__row">
          <Product
            id="12432"
            title="Microsoft Surface Pro 7, Core i5, RAM 8 GB, SSD 128 GB, Platinum"
            price={1000}
            rating={5}
            image="https://m.media-amazon.com/images/I/71q6XKHi2dL._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id="124342"
            title="H.Koenig KB14 Macchina per ghiaccio, Fabbricatore cubetti 2 misure, 12 kg, Ciclo produttivo 10-13 minuti, Senza impianto idraulico, Acciaio Inox, 120W"
            price={119.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/71y4sinfBmL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="1223432"
            title="Minecraft - Nintendo Switch"
            price={54}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71dIHv1zh7L._SL1500_.jpg"
          />
          <Product
            id="1243652"
            title="RUNMUS Stereo Gaming Headset for PS4, Xbox One, Nintendo Switch, PC, PS3, Mac, Laptop, Over Ear Headphones PS4 Headset Xbox One Headset with Surround Sound, LED Light & Noise Canceling Microphone"
            price={539.954}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51HzG7dwAHL._AC_SY200_.jpg"
          />
          <Product
            id="12431232"
            title="Jenga Classic Game"
            price={4.66}
            rating={2}
            image="https://images-na.ssl-images-amazon.com/images/I/81OAWwX3djL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12467332"
            title="AmazonBasics 48 Pack AA High-Performance Alkaline Batteries"
            price={14.66}
            rating={5}
            image="https://m.media-amazon.com/images/I/71UyNLSv2mL._AC_UL480_FMwebp_QL65_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
