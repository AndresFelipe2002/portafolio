import React from "react";
import { Card as CardComponent, Button } from "react-bootstrap";
import "./Card.css";

export const Card = ({ img, title, description, url }) => {
  return (
    <CardComponent style={{ width: "30rem" }}>
      <CardComponent.Img
        variant="top"
        src={img}
        alt="img-proyecto"
        title="proyecto"
        loading="lazy"
      />
      <CardComponent.Body>
        <CardComponent.Title>{title}</CardComponent.Title>
        <CardComponent.Text>{description}</CardComponent.Text>
        <Button
          style={{ backgroundColor: "rgb(0,238,255)", borderRadius: "5px" }}
        >
          <a href={url} target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-box-arrow-up-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M7.364 3.5a.5.5 0 0 1 .5-.5H14.5A1.5 1.5 0 0 1 16 4.5v10a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 3 14.5V7.864a.5.5 0 1 1 1 0V14.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5H7.864a.5.5 0 0 1-.5-.5z"
              />
              <path
                fillRule="evenodd"
                d="M0 .5A.5.5 0 0 1 .5 0h5a.5.5 0 0 1 0 1H1.707l8.147 8.146a.5.5 0 0 1-.708.708L1 1.707V5.5a.5.5 0 0 1-1 0v-5z"
              />
            </svg>
          </a>
        </Button>
      </CardComponent.Body>
    </CardComponent>
  );
};
