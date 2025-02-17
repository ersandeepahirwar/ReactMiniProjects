import React from "react";

const Card = ({ source, text, title, link }) => {
  return (
    <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3 p-2">
      <div className="card" style={{ background: "#242323" }}>
        <img src={source} alt={text} className="card-img-top" />
        <div className="card-body text-center text-sm-start">
          <h6 className="card-title text-light fw-normal">{title}</h6>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-danger mt-2"
            style={{ background: "#ff0000" }}
          >
            Watch Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
