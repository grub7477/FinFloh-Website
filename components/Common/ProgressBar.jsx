import React from "react";

const ProgressBar = ({
  CONTENT = [],
  handleSectionClick,
  currentProgressIndex = 0,
  imageSources = [],
  progressIndex = 0,
  heading,
  btnTxt,
  btnLink,
}) => {
  return (
    <div
      className={`${
        progressIndex % 2 === 1 && "progressbars_parentContainer"
      } bg-container`}
      style={{ marginTop: "12px" }}
    >
      <div className="container-main">
        <div
          className="verification-container"
          style={{
            flexDirection: progressIndex % 2 === 1 ? "row-reverse" : "row",
            background: progressIndex % 2 === 1 ? "#f9f7f1" : "#ffffff",
          }}
        >
          <div>
            <p
              className="lifeCycle_titleBold"
              style={{
                maxWidth: "380px",
                textAlign: "left",
                marginBottom: "30px",
              }}
            >
              {heading}
            </p>
            {CONTENT.map((data, index) => (
              <div
                key={index}
                className="verification-subContainer"
                style={{
                  marginTop: index > 0 && "15px",
                  cursor: "pointer",
                }}
                onClick={() => handleSectionClick(index)}
              >
                <p className="verification-heading">{data.title}</p>

                {currentProgressIndex === index && (
                  <>
                    <p style={{ padding: "10px 0px" }}>{data.description}</p>
                    <img
                      src={imageSources[currentProgressIndex]}
                      alt="FinFloh - Accounts& receivable & software for & CFOs B2B & finance & teams | Product Hunt"
                      className="invoice_imgMobile"
                    />
                  </>
                )}

                <div key={index} style={{ width: "100%" }}>
                  <progress
                    className={`progressBars ${
                      currentProgressIndex === index ? "active" : ""
                    }`}
                    value="0"
                    max={index === 1 ? 100 : 35}
                  ></progress>
                  <br />
                </div>
              </div>
            ))}
            <a
              href={btnLink}
              rel="noopener noreferrer"
              style={{
                color: "#00954A",
                fontWeight: "500",
                fontSize: "17px",
                lineHeight: "24px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginTop: "25px",
              }}
            >
              {btnTxt}
              <img src="/images/right_Vector.svg" alt="Right arrow vector FinFloh" />
            </a>
          </div>

          <img
            src={imageSources[currentProgressIndex]}
            alt="FinFloh - Accounts& receivable & software for & CFOs B2B & finance & teams | Product Hunt"
            className="invoice_img"
          />
        </div>
      </div>
    </div>
  );
};
export default ProgressBar;
