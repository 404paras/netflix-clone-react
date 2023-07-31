import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import the Link component
import "../style/Banner.css";
import Loading from "./Loading";

function GetRandomNumber(min_num, max_num) {
  return Math.floor(Math.random() * (max_num - min_num) + min_num);
}

const truncateText = (text, maxLength) => {
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};

const Banner = ({ banner }) => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(banner);
      let val = GetRandomNumber(0, data.results.length);
      setList(data.results[val]);
      setIsLoading(false);
    };
    fetchData();
  }, [banner]);

  const imageUrl = `https://image.tmdb.org/t/p/original/${list.poster_path}`;

  const bannerStyle = {
    backgroundImage: `url(${imageUrl})`,
    height: "95vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
    color: "white",
    objectFit: "fill",
    backgroundColor: "black",
    marginBottom: "-5rem",
  };

  const titleToShow = list.title || list.name || "No Title";

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="banner" style={bannerStyle}>
          <div className="left">
            <span className="title">{titleToShow}</span>
            <p className="desc">{truncateText(list.overview, 150)}</p>
            <div className="btn">
              <button class="banner-btn1">
                <svg
                  style={{ fill: "black" }}
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  class="Button_icon__2M4k7"
                  height="2em"
                  width="2em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M96 448l320-192L96 64v384z"></path>
                </svg>
                <p>Play</p>
              </button>
              {/* Link to the DetailsPage with necessary data as URL parameters */}
              <Link
                style={{ textDecoration: "none" }}
                to={`/details/${list.id}/${encodeURIComponent(titleToShow)}/${
                  list.poster_path
                }/${list.overview||'No Information'}/${list.release_date}/${
                  list.rating||'NA'
                }`}
                className="banner-link"
              >
                <button class="banner-btn2" id="info-btn">
                  <svg
                    className="infos"
                    stroke="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="Button_icon__2M4k7"
                    height="2em"
                    width="2em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"></path>
                    <path d="M11 11H13V17H11zM11 7H13V9H11z"></path>
                  </svg>
                  <p>More Info</p>
                </button>
              </Link>
            </div>
          </div>
          <div style={{ flex: "8" }}></div>
        </div>
      )}
    </div>
  );
};

export default Banner;
