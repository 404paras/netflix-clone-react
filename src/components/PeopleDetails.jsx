import React from "react";
import { useParams } from "react-router-dom";
import "../style/peopleDetail.css";
import Footer from './Footer'
import Navbar from "./Navbar";

const PeopleDetails = () => {
  const { id, name, biography, img, bday, gender, place_of_birth, movies } =
    useParams();

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  };

  const imageUrl = `https://image.tmdb.org/t/p/original/${img}`;
  let gen = "Unknown";
  if (gender === "2") {
    gen = "Male";
  } else if (gender === "1") {
    gen = "Female";
  }

  console.log(movies);

  return (
    <>
      <Navbar />
      <div className="peopleDetails">
        <div className="info-section">
          <div className="info-img">
            <img src={imageUrl} alt="" />
          </div>
          <div className="info-details" style={{ color: "white" }}>
            <p className="name">{name}</p>
            <p className="biography">Biography</p>
            <p className="bio-data">{truncateText(biography, 900)}</p>
            <div className="moreinfo">
              <p className="bday">
                Birthday: <span className="data">{bday}</span>
              </p>
              <p className="bday">
                Place of Birth: <span className="data">{place_of_birth}</span>
              </p>
            </div>
            <p className="bday">
              Gender: <span className="data">{gen}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Footer component placed outside the peopleDetails container */}
      <Footer />
    </>
  );
};

export default PeopleDetails;
