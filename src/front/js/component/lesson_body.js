import React, { useState } from "react";
import { lesson1Content } from "./lessoncontent";

export default function LessonBody() {
  return (
    <div className="accordion">
      {lesson1Content.map(
        ({ title, intro, body, practice, question1, question2, question3 }) => {
          const [isActive, setIsActive] = useState(false);
          function toggle() {
            setIsActive(!isActive);
          }
          return (
            <div className="accordion-item" onClick={toggle}>
              <div className="accordion-title">
                <div>{title}</div>
                <div>{isActive ? "-" : "+"}</div>
              </div>
              {isActive && (
                <div className="accordion-content">
                  <div>{intro}</div>
                  <div>{body}</div>
                </div>
              )}
              {isActive && (
                <div className="accordion-questions">
                  <h3>{practice}</h3>
                  <h5>{question1}</h5>
                  <h5>{question2}</h5>
                  <h5>{question3}</h5>
                </div>
              )}
            </div>
          );
        }
      )}
    </div>
  );
}
