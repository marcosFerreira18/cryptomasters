import React, { useState } from "react";
import { AccordionDescription, AccordionTitle } from "./styles";

interface IAccordion {
  title: string;
  content: string;
}

const Accordion: React.FC<IAccordion> = ({ title, content }) => {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div
      style={{
        marginBottom: "15px",
        lineHeight: "15px",
        borderBottom: "1.5px solid rgba(79, 161, 71, 0.26)",
        margin: 10,
        zIndex: -1,
      }}
    >
      <button
        style={{
          width: "100%",
          position: "relative",
          textAlign: "left",
          padding: "3px",
          border: "none",
          background: "transparent",
          outline: "none",
          cursor: "pointer",
        }}
        onClick={toggle}
        type="button"
      >
        <AccordionTitle>+ {title}</AccordionTitle>
      </button>
      <div style={{ display: isShowing ? "block" : "none", padding: "10px", background: "#0003", borderRadius: 5 }}>
        <AccordionDescription>{content}</AccordionDescription>
      </div>
    </div>
  );
};

export default Accordion;
