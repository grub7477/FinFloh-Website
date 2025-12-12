import React from 'react';

const Loader = ({ text = "Loading..." }) => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.spinner}></div>
      <p style={styles.text}>{text}</p>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

const styles = {
  wrapper: {
    textAlign: "center",
    padding: "40px",
  },
  spinner: {
    margin: "0 auto",
    width: "40px",
    height: "40px",
    border: "4px solid #e5e7eb",
    borderTop: "4px solid #00954a",
    borderRadius: "50%",
    animation: "spin 0.8s linear infinite",
  },
  text: {
    marginTop: "16px",
    fontSize: "16px",
    color: "#4a5568",
  },
};

export default Loader; 