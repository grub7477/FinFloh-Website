import React, { useRef, useState } from "react";
import WebsiteLayout from "../../components/Layouts/WebsiteLayout";
import HeadComponent from "../../components/Common/HeadComponent";
import { useRouter } from "next/router";
import {
  podcastData,
  AiInFinanceData,
  CreditToCashData,
} from "../../data/podcastData";
import { podcastContent } from "../../data/podcastContent";
import Link from "next/link";

const PodcastDetails = () => {
  const router = useRouter();
  const { slug, type } = router.query;
  const iframeRef = useRef(null);
  const [activeChapter, setActiveChapter] = useState(0);
  if (!router.isReady) {
    return <div>Loading...</div>;
  }

  const getPodcastData = () => {
    if (type === "ai-in-finance") {
      return AiInFinanceData.find((podcast) => podcast.slug === slug);
    } else if (type === "credit-to-cash") {
      return CreditToCashData.find((podcast) => podcast.slug === slug);
    }
    return podcastData.find((podcast) => podcast.slug === slug);
  };

  const getLatestEpisodes = () => {
    const regularLatest = podcastData[0]; // Get the first (latest) inside-the-cfo-office podcast
    const aiLatest = AiInFinanceData[0]; // Get the first (latest) ai-in-finance podcast
    const CreditToCash = CreditToCashData[0];
    return { regularLatest, aiLatest, CreditToCash };
  };

  const podcast = getPodcastData();
  const content =
    podcastContent[
      type === "credit-to-cash"
        ? "credit-to-cash"
        : type === "ai-in-finance"
        ? "ai-in-finance"
        : "inside-the-cfo-office"
    ]?.[slug];

  const { regularLatest, aiLatest, CreditToCash } = getLatestEpisodes();

  if (!podcast || !content) {
    return <div>Loading...</div>;
  }

  const timeToSeconds = (timeStr) => {
    const [minutes, seconds] = timeStr.split(":").map(Number);
    return minutes * 60 + seconds;
  };

  const canonicalUrl = `https://finfloh.com/podcast/${slug || ""}${
    type ? `?type=${type}` : ""
  }`;

  const handleChapterClick = (timeStr, index) => {
    const seconds = timeToSeconds(timeStr);
    if (iframeRef.current) {
      let currentSrc = iframeRef.current.src;
      currentSrc = currentSrc.replace(/&start=\d+/, "");
      const newSrc = `${currentSrc}&start=${seconds}`;
      iframeRef.current.src = newSrc;
      setActiveChapter(index);
    }
  };
  return (
    <>
      <HeadComponent
        title={`${podcast.title} - FinFloh PODCAST`}
        description={podcast.title}
        canonicalUrl={canonicalUrl}
      />
      <WebsiteLayout>
        <div className="bg-container">
          <div className="podcast-details-container container-main">
            <div className="podcast-details-header">
              {/* <button onClick={() => router.back()} className="back-button"> */}
              <Link href="/podcast" className="back-button">
                ← Back to Podcasts
              </Link>
            </div>
            <div className="podcast-details-header">
              <h1 className="podcast-details-title">{podcast.title}</h1>
              <div className="podcast-details-meta">
                <span className="episode-number">
                  Episode {podcast.episode}
                </span>
                <span className="episode-date">{podcast.date}</span>
                {/* <span className="episode-date">{podcast.date}</span> */}
              </div>
            </div>

            <div className="podast-details-videoContainer">
              <div className="video-container">
                <iframe
                  ref={iframeRef}
                  src={podcast.video_url}
                  title={podcast.title}
                  width="100%"
                  height="100%"
                  allow="accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture fullscreen"
                  allowFullScreen
                  className="podcast-video"
                  loading="lazy"
                ></iframe>
              </div>

              {content.chapters && (
                <section className="chapters-section">
                  <h2>Chapters</h2>
                  <div className="chapters-list">
                    {content.chapters.map((chapter, index) => (
                      <button
                        key={index}
                        onClick={() => handleChapterClick(chapter.time, index)}
                        className={`chapter-button ${
                          activeChapter === index ? "active" : ""
                        }`}
                      >
                        <span className="chapter-time">{chapter.time}</span>
                        <span className="chapter-title">{chapter.title}</span>
                      </button>
                    ))}
                  </div>
                </section>
              )}
            </div>
            <div className="Takeaways_hostedBy_container">
              <div className="key-takeaways">
                <h2>Key Takeaways</h2>
                <ul>
                  {content.keyTakeaways.map((takeaway, index) => (
                    <li key={index}>{takeaway}</li>
                  ))}
                </ul>
              </div>
              <div className="podcast-hostedBy-container">
                <h2>Speakers</h2>
                <div className="podcast-hostedBy-left speaker-1">
                  <div className="img-hostedBy">
                    <img
                      src={podcast.author_profile_pic}
                      alt="podcast.profile_pic"
                      style={{ width: "100px", height: "100px" }}
                    />
                  </div>
                  <div className="hosted-by">
                    <p className="h-y">Guest Speaker</p>
                    <p className="h-y-n">{podcast.author}</p>
                    <p className="h-y-p">{podcast.position}</p>
                  </div>
                </div>
                <div className="podcast-hostedBy-left speaker-1">
                  <div className="img-hostedBy">
                    <img
                      src={podcast.hosted_profile_pic}
                      alt="hosted_profile_pic"
                      style={{ width: "100px", height: "100px" }}
                    />
                  </div>
                  <div className="hosted-by">
                    <p className="h-y">Hosted By</p>
                    <p className="h-y-n">{podcast.hosted_by}</p>
                    <p className="h-y-p">{podcast.hosted_position}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="transcript">
              <h2>Episode Transcript</h2>
              <div className="transcript-content">
                {content.transcript.split("\n").map((line, index) => {
                  // Check if line starts with a speaker name (ends with a colon)
                  if (line.includes(": ")) {
                    const [speaker, text] = line.split(": ");
                    return (
                      <p key={index}>
                        <span className="speaker-name">{speaker}: </span>
                        {text}
                      </p>
                    );
                  }
                  return <p key={index}>{line}</p>;
                })}
              </div>
            </div>

            <section className="latest-episodes-section latest-episodes-container">
              <h2 className="latest-episodes-header">Latest Episodes</h2>
              <div className="latest-podcast-section">
                <div className="latest-podcast-container">
                  <Link
                    href={`/podcast/${regularLatest.slug}?type=inside-the-cfo-office`}
                  >
                    <div className="latest-podcast-episode">
                      <div className="thumbnail-container">
                        <img
                          src={regularLatest.thumbnail}
                          alt={regularLatest.title}
                          className="latest-podcast-episode-thumbnail"
                        />
                        <img
                          src={regularLatest.thumbnail_mobile}
                          alt={regularLatest.title}
                          className="latest-podcast-episode-thumbnail-mobile"
                        />
                        <img
                          src="/images/play_circle.svg"
                          alt="Play"
                          className="latest-play-circle"
                        />
                      </div>
                      <div className="podcast-common-content">
                        <div className="podcast-info">
                          <span>{`EPISODE ${regularLatest.episode}`}</span>
                          {regularLatest.isNew && (
                            <span className="new-episode green-text">
                              NEW EPISODE
                            </span>
                          )}
                        </div>
                        <div className="latest-podcast-title">
                          {regularLatest.title}
                        </div>
                        <div className="latest-podcast-author">
                          {regularLatest.author}
                        </div>
                        <div className="latest-podcast-position">
                          {regularLatest.position}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="latest-podcast-container">
                  <Link href={`/podcast/${aiLatest.slug}?type=ai-in-finance`}>
                    <div className="latest-podcast-episode">
                      <div className="thumbnail-container">
                        <img
                          src={aiLatest.thumbnail}
                          alt={aiLatest.title}
                          className="latest-podcast-episode-thumbnail"
                        />
                        <img
                          src={aiLatest.thumbnail_mobile}
                          alt={aiLatest.title}
                          className="latest-podcast-episode-thumbnail-mobile"
                        />
                        <img
                          src="/images/play_circle.svg"
                          alt="Play"
                          className="latest-play-circle"
                        />
                      </div>
                      <div className="podcast-common-content">
                        <div className="podcast-info">
                          <span>{`EPISODE ${aiLatest.episode}`}</span>
                          {aiLatest.isNew && (
                            <span className="new-episode green-text">
                              NEW EPISODE
                            </span>
                          )}
                        </div>
                        <div className="latest-podcast-title">
                          {aiLatest.title}
                        </div>
                        <div className="latest-podcast-author">
                          {aiLatest.author}
                        </div>
                        <div className="latest-podcast-position">
                          {aiLatest.position}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </WebsiteLayout>
    </>
  );
};

export default PodcastDetails;
