import React, { useState } from "react";
import CommonButton from "./CommonButton";

const PodcastHeadingSlider = ({ podcastData }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div className="podcast-slider-container">
        <h2 className="Enterprise-paragrapgh-book-a-demo">
          <span
            style={{ color: "#00954A", fontSize: "24px", fontWeight: "600" }}
          >
            Inside the CFO Office
          </span>
          <br />
          A Community where Finance Leaders share <br />
          How they Solve the Hardest Challenges
        </h2>
      </div>

      <div className="podcast-slider-strip">
        <div
          className="podcast-slider-track"
          style={{ animationPlayState: isHovered ? "paused" : "running" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {[...podcastData, ...podcastData].map((episode, idx) => (
            <div key={idx} className="podcast-slider-episode">
              <div className="podcast-slider-episode-content">
                <img
                  src={episode.author_profile_pic}
                  alt={episode.author}
                  className="podcast-slider-author-img"
                  style={{
                    background: `url(${episode.author_profile_pic}) lightgray 0px 19.877px / 100% 100% no-repeat, #FFF`,
                  }}
                />
                <div className="podcast-slider-author-position-container">
                  <p className="podcast-slider-position">{episode.quote}</p>

                  <div className="podcast-slider-author-position-heading">
                    <h3 className="podcast-slider-author">{episode.author}</h3>
                    <p className="podcast-slider-position">
                      {episode.position_without_company}
                    </p>
                  </div>
                  <img
                    src={episode.podcast_logo}
                    alt="flison logo"
                    className="podcast-slider-logo"
                  />
                </div>
              </div>
              <CommonButton
                text={"Watch Full Conversation"}
                type={"primary"}
                href={`https://finfloh.com/podcast/${episode.slug}`}
                openInNewTab={true}
                iconSrc="images/ArrowRight.svg"
                iconPosition="right"
                className="full-width-button"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PodcastHeadingSlider;
