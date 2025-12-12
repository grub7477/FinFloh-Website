import React, { useState } from "react";
import WebsiteLayout from "../components/Layouts/WebsiteLayout";
import HeadComponent from "../components/Common/HeadComponent";
import { useRouter } from "next/router";
import { podcastData, AiInFinanceData } from "../data/podcastData";

const Podcast = () => {
  const router = useRouter();

  const handleVideoClick = (slug) => {
    router.push(`/podcast/${slug}?type=inside-the-cfo-office`);
  };

  const handleAiInFinanceVideoClick = (slug) => {
    router.push(`/podcast/${slug}?type=ai-in-finance`);
  };

  const latestPodcast = podcastData[0]
  const latestAiInFinancePodcast = AiInFinanceData[0];

  return (
    <>
      <HeadComponent
        title="FinFloh PODCAST"
        description="Listen to top finance leaders reveal behind-the-scenes insights from the CFO office, sharing their journeys, digital transformation projects, and perspectives on AI."
        canonicalUrl="https://finfloh.com/podcast"
        includePublisher
        includeMainEntity
        MainEntityProps={{
          entityType: "WebPage",
          headline: "Podcast for and by modern finance teams",
          articleSection: [
            "Inside the CFO Office Podcast",
            "Finance AI Podcast",
          ],
          hasPartProps: [
            {
              "@type": "ItemList",
              name: "Features",
            },
            {
              "@type": "ItemList",
              name: "Resources",
            },
          ],
        }}
        includeBreadcrumbs
        breadcrumbItems={[
          {
            name: "Podcast",
            item: "https://finfloh.com/podcast",
          },
        ]}
      />
      <WebsiteLayout>
        <div className="bg-container">
          <div className="podcast-container container-main">
            <div className="podcast-header">
              <div className="podcast-heading">The FinFloh Podcast</div>
              {/* <div className="podcast-heading-mobile">FINFLOH PODCAST</div> */}
            </div>
            <div>
              <h2 className="empty-header">
                Podcast for and by modern finance teams
              </h2>
              <p className="latest-podcast-heading">Our Latest Episodes</p>
            </div>
            <div className="latest-podcast-section">
              <div className="latest-podcast-container">
                <div
                  className="latest-podcast-episode"
                  onClick={() => handleVideoClick(latestPodcast.slug)}
                >
                  <div className="thumbnail-container">
                    <img
                      src={latestPodcast.thumbnail}
                      alt={latestPodcast.title}
                      className="latest-podcast-episode-thumbnail"
                    />
                    <img
                      src={latestPodcast.thumbnail_mobile}
                      alt={latestPodcast.title}
                      className="latest-podcast-episode-thumbnail-mobile"
                    />
                    <img
                      src="images/play_circle.svg"
                      alt="Play"
                      className="latest-play-circle"
                    />
                  </div>
                  <div className="podcast-common-content">
                    <div className="podcast-info">
                      <span>{`EPISODE ${latestPodcast.episode}`}</span>
                      {latestPodcast.isNew && (
                        <span className="new-episode green-text">
                          NEW EPISODE
                        </span>
                      )}
                      {latestPodcast.Spotlight && (
                        <span className="new-episode green-text">
                          Spotlight Episode
                        </span>
                      )}
                    </div>
                    <div className="latest-podcast-title">
                      {/* How can CFOs unify Business, Finance, AR, AP, FP&A... */}
                      {latestPodcast.title}
                    </div>
                    <div className="latest-podcast-author">
                      {latestPodcast.author}
                    </div>
                    <div className="latest-podcast-position">
                      {latestPodcast.position}
                    </div>
                  </div>
                </div>
              </div>
              <div className="latest-podcast-container">
                <div
                  className="latest-podcast-episode"
                  onClick={() =>
                    handleAiInFinanceVideoClick(latestAiInFinancePodcast.slug)
                  }
                >
                  <div className="thumbnail-container">
                    <img
                      src={latestAiInFinancePodcast.thumbnail}
                      alt={latestAiInFinancePodcast.title}
                      className="latest-podcast-episode-thumbnail"
                    />
                    <img
                      src={latestAiInFinancePodcast.thumbnail_mobile}
                      alt={latestAiInFinancePodcast.title}
                      className="latest-podcast-episode-thumbnail-mobile"
                    />
                    <img
                      src="images/play_circle.svg"
                      alt="Play"
                      className="latest-play-circle"
                    />
                  </div>
                  <div className="podcast-common-content">
                    <div className="podcast-info">
                      <span>{`EPISODE ${latestAiInFinancePodcast.episode}`}</span>
                      {latestAiInFinancePodcast.isNew && (
                        <span className="new-episode green-text">
                          NEW EPISODE
                        </span>
                      )}
                    </div>
                    <div className="latest-podcast-title">
                      {latestAiInFinancePodcast.title}
                    </div>
                    <div className="latest-podcast-author">
                      {latestAiInFinancePodcast.author}
                    </div>
                    <div className="latest-podcast-position">
                      {latestAiInFinancePodcast.position}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="podcast-main">
              <div className="podcast-main-left">
                <div className="podcast-images">
                  <div>
                    <img
                      src="images/chair-0311.svg"
                      alt="chair"
                      className="chair-img"
                    />
                  </div>
                  <div style={{ paddingTop: "2px" }}>
                    <img
                      src="images/InsideTheCFOOffice.svg"
                      alt="InsideTheCFOOffice"
                      className="logo-img"
                    />
                  </div>
                </div>

                <div className="podcast-content">
                  <h2 className="empty-header">
                    Inside the CFO Office Podcast, Finance AI Podcast
                  </h2>
                  <p>
                    Exclusive channel where finance leaders in the CFO Office
                    share their biggest challenges, learnings and insights on
                    the future of finance. Each podcast on a new and interesting
                    topic relevant to the finance world of current times.
                  </p>
                </div>

                <div className="podcast-hostedBy">
                  <div className="podcast-hostedBy-left">
                    <div className="img-hostedBy">
                      <img src="images/Amartya-profilepic.svg" alt="" />
                    </div>
                    <div className="hosted-by">
                      <p className="h-y">Hosted By</p>
                      <p className="h-y-n">Amartya Singh</p>
                      <p className="h-y-p">CEO & Cofounder, FinFloh</p>
                    </div>
                  </div>
                  <div className="linkdln-profile">
                    <a href="https://www.linkedin.com/in/amartya-singh/">
                      <span>Connect on </span>

                      <img src="images/image11.svg" alt="Linkedin" />
                    </a>
                  </div>
                  <div className="linkdln-profile-mobile">
                    <a href="https://www.linkedin.com/in/amartya-singh/">
                      Connect on Linkedin
                    </a>
                  </div>
                </div>
              </div>

              <div className="podcast-main-right">
                <div className="podcast-main-right-container">
                  {podcastData.map((podcast) => (
                    <div
                      key={podcast.slug}
                      className="podcast-episode"
                      onClick={() => handleVideoClick(podcast.slug)}
                    >
                      <div className="thumbnail-container">
                        <img
                          src={podcast.thumbnail}
                          alt={podcast.title}
                          className="podcast-episode-thumbnail"
                        />
                        <img
                          src={podcast.thumbnail_mobile}
                          alt={podcast.title}
                          className="podcast-episode-thumbnail-mobile"
                        />
                        <img
                          src="images/play_circle.svg"
                          alt="Play"
                          className="play-circle"
                        />
                      </div>
                      <div className="podcast-information podcast-common-content">
                        <div className="podcast-info">
                          <span>{`EPISODE ${podcast.episode}`}</span>
                          {podcast.isNew && (
                            <span className="new-episode green-text">
                              NEW EPISODE
                            </span>
                          )}
                        </div>

                        <div className="latest-podcast-title">
                          {podcast.title}
                        </div>
                        <div className="latest-podcast-author">
                          {podcast.author}
                        </div>
                        <div className="latest-podcast-position">
                          {podcast.position}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="podcast-main" style={{ marginBottom: "120px" }}>
              <div className="podcast-main-left-Ai">
                <div className="podcast-images">
                  <div>
                    <img
                      src="images/Finance-Leader-in-Focus-logo.svg"
                      alt="InsideTheCFOOffice"
                      className="logo-img"
                    />
                  </div>
                </div>

                <div className="podcast-content">
                  <h2 className="empty-header">Finance leaders in focus</h2>
                  <p style={{ color: "#DEACFF" }}>
                    Go behind the scenes with today’s top finance leaders.
                    Explore their journeys, big wins, and hard lessons, plus the
                    strategies, tools, and trends shaping the future of finance.
                  </p>
                </div>
                <div
                  className="podcast-hostedBy"
                  style={{ background: "#571086", width: "100%" }}
                >
                  <div className="podcast-hostedBy-left">
                    <div className="img-hostedBy">
                      <img
                        src="images/valerius-podcast.svg"
                        alt="valerius finfloh"
                      />
                    </div>
                    <div className="hosted-by">
                      <p className="h-y" style={{ color: "#DEACFF" }}>
                        Hosted By
                      </p>
                      <p className="h-y-n" style={{ color: "#FFF" }}>
                        Valerius Dcunha
                      </p>
                      <p className="h-y-p" style={{ color: "#DEACFF" }}>
                        Founding Member - Business & Strategy
                      </p>
                    </div>
                  </div>
                  <div
                    className="linkdln-profile"
                    style={{ background: "#8C4AB9" }}
                  >
                    <a href="https://www.linkedin.com/in/valerius-d/">
                      <span style={{ color: "#FFF" }}>Connect on </span>

                      <img src="images/image11.svg" alt="Linkedin" />
                    </a>
                  </div>
                  <div className="linkdln-profile-mobile">
                    <a href="https://www.linkedin.com/in/valerius-d/">
                      Connect on Linkedin
                    </a>
                  </div>
                </div>
                <div
                  className="podcast-hostedBy"
                  style={{ background: "#571086", width: "100%" }}
                >
                  <div className="podcast-hostedBy-left">
                    <div className="img-hostedBy">
                      <img
                        src="images/Amartya-profilepic.svg"
                        alt="Amartya-profilepic finfloh"
                      />
                    </div>
                    <div className="hosted-by">
                      <p className="h-y" style={{ color: "#DEACFF" }}>
                        Hosted By
                      </p>
                      <p className="h-y-n" style={{ color: "#FFF" }}>
                        Amartya Singh
                      </p>
                      <p className="h-y-p" style={{ color: "#DEACFF" }}>
                        CEO & Cofounder, FinFloh
                      </p>
                    </div>
                  </div>
                  <div
                    className="linkdln-profile"
                    style={{ background: "#8C4AB9" }}
                  >
                    <a href="https://www.linkedin.com/in/amartya-singh/">
                      <span style={{ color: "#FFF" }}>Connect on </span>

                      <img src="images/image11.svg" alt="Linkedin" />
                    </a>
                  </div>
                  <div className="linkdln-profile-mobile">
                    <a href="https://www.linkedin.com/in/amartya-singh/">
                      Connect on Linkedin
                    </a>
                  </div>
                </div>
              </div>

              <div className="podcast-main-right custom-podcast-height">
                {/* <div className="podcast-main-right-heading">
                  <div className="left-text">All Episodes</div>
                  <div className="right-text">6 videos</div>
                </div> */}
                <div className="podcast-main-right-container">
                  {AiInFinanceData.map((latestAiInFinancePodcast) => (
                    <div
                      key={latestAiInFinancePodcast.slug}
                      className="podcast-episode"
                      onClick={() =>
                        handleAiInFinanceVideoClick(
                          latestAiInFinancePodcast.slug
                        )
                      }
                    >
                      <div className="thumbnail-container">
                        <img
                          src={latestAiInFinancePodcast.thumbnail}
                          alt={latestAiInFinancePodcast.title}
                          className="podcast-episode-thumbnail"
                        />
                        <img
                          src={latestAiInFinancePodcast.thumbnail_mobile}
                          alt={latestAiInFinancePodcast.title}
                          className="podcast-episode-thumbnail-mobile"
                        />
                        <img
                          src="images/play_circle.svg"
                          alt="Play"
                          className="play-circle"
                        />
                      </div>
                      <div className="podcast-information podcast-common-content">
                        <div className="podcast-info">
                          <span>{`EPISODE ${latestAiInFinancePodcast.episode}`}</span>
                          {latestAiInFinancePodcast.isNew && (
                            <span className="new-episode green-text">
                              NEW EPISODE
                            </span>
                          )}
                        </div>

                        <div className="latest-podcast-title">
                          {latestAiInFinancePodcast.title}
                        </div>
                        <div className="latest-podcast-author">
                          {latestAiInFinancePodcast.author}
                        </div>
                        <div className="latest-podcast-position">
                          {latestAiInFinancePodcast.position}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </WebsiteLayout>
    </>
  );
};

export default Podcast;
