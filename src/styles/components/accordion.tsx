import { useState } from "react";

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
        borderBottom: "1.5px solid rgb(18, 70, 148)",
        margin: 10,
        zIndex:-1
      }}
      
    >
      <button
        style={{
          width: "100%",
          position: "relative",
          textAlign: "left",
          padding: "4px",
          border: "none",
          background: "transparent",
          outline: "none",
          cursor: "pointer",
        }}
        onClick={toggle}
        type="button"
      >
        <h3>+ {title}</h3>
      </button>
      <div style={{ display: isShowing ? "block" : "none", padding: "5px" }}>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Accordion;
