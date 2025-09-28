import "./Education.css";

export default function Education() {
  const phases = [
    {
      title: "B.E - Computer Science and Engineering",
      description: "Bannari Amman Institute of Technology",
      date: "Sep 2022 - Mar 2025",
      tag: "8.01 CGPA",
    },
    {
      title: "DME (SWC) - Mechanical Engineering Sandwich",
      description: "CIT Sandwich Polytechnic College",
      date: "Aug 2019 - Feb 2022",
      tag: "92 Percentage",
    },
    {
      title: "HSC",
      description: "Cambridge Matric Higher Secondary School",
      date: "Jul 2018 - Mar 2019",
      tag: "68.6 Percentage",
    },
    {
      title: "SSLC",
      description: "Government High School",
      date: "Jun 2016 - Apr 2017",
      tag: "88.6 Percentage",
    },
  ];

  return (
    <div className="timeline-container">
      <h1 className="timeline-title">Education <span>Details</span> </h1>

      <div className="timeline">
        {phases.map((phase, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h2>{phase.title}</h2>
              <p>{phase.description}</p>
              <span className="timeline-date">{phase.date}</span>
              <span className="timeline-tag">{phase.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
