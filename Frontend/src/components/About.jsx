"use client";

import { React, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const gitHubButton = () => {
  const githubLink = "https://github.com/harrisb002/BlueSandbox";

  const baseStyle = {
    display: "inline-block",
    backgroundImage: "linear-gradient(180deg, #f6f8fa, #ebf0f4 90%)",
    padding: "5px 10px",
    textDecoration: "none",
    borderRadius: "5px",
    fontFamily:
      '"Segoe UI", Helvetica, Arial, sans-serif',
    fontWeight: "900",
    fontSize: "16px",
  };

  return (
    <a href={githubLink} style={baseStyle}>
      <FontAwesomeIcon
        icon={faGithub}
        style={{
          height: "18px",
          transform: "translateY(2px)",
          paddingRight: "2px",
        }}
      />{" "}
      View on GitHub
    </a>
  );
};

export default gitHubButton;
