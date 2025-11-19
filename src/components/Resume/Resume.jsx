import React from "react";
import Resume1 from "../../assets/vijay.v-resume.pdf";

const Resume = () => {
  const pdfFile = Resume1;

  return (
    <div style={{ padding: "20px" }}>
      <a href={pdfFile} download="Vijay-Resume.pdf">
        <button
          style={{
            padding: "10px 20px",
            background: "#4A4AEF",
            color: "white",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          Download Resume
        </button>
      </a>

      <iframe
        src={pdfFile}
        style={{ width: "100%", height: "90vh", border: "none" }}
        title="Resume Viewer"
      />
    </div>
  );
};

export default Resume;

