import React from "react";
import "./Education.css";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Engineering - ECE",
      college: "SSN Institute of Engineering and Technology",
      year: "2021 - 2025",
      grade: "CGPA: 8.4",
    },
    {
      degree: "Higher Secondary Education",
      college: "ABC Matriculation Hr. Sec School",
      year: "2020 - 2021",
      grade: "Percentage: 87%",
    },
    {
      degree: "Secondary Schooling",
      college: "ABC Matriculation Hr. Sec School",
      year: "2018 - 2019",
      grade: "Percentage: 90%",
    },
  ];

  return (
    <section className="education-section container" id="education">
      <h2 className="gradient-text text-center mb-5 section-title">
        <FaGraduationCap /> Education
      </h2>

      <div className="timeline">
        {education.map((edu, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content shadow-lg">
              <h4 className="degree">{edu.degree}</h4>
              <p className="college">{edu.college}</p>
              <div className="d-flex justify-content-between small-text">
                <span>{edu.year}</span>
                <span className="grade">{edu.grade}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

