import React from "react";
// import "./CallForPaper.css";

const Track = ({ title, items }) => {
  return (
    <div className="trc">
      <div className="about_heads">
        <h2>{title}</h2>
      </div>
      <div className="call_list ">
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const CallForPaper = () => {
  return (
    <main className="mains">
      <div>
        <div className="subm_head">
          <h2>CALL FOR PAPER</h2>
          <div className="lines"></div>
        </div>
        <div className="about_contents">
          <p>
            Prospective authors are invited to submit the manuscripts of their
            original research contributions and review articles in the following
            areas but not limited to
          </p>
        </div>
      </div>

      <div className="track1">
        <Track
          title="Artificial Intelligence and Applications"
          items={[
            "AI Algorithms",
            "Artificial Intelligence tools & Applications",
            "IOT",
            "Data Mining and Machine Learning Tools",
            "Heuristic and AI Planning Strategies and Tools",
            "Hybrid Intelligent Systems",
            "Information Retrieval",
            "Intelligent System Architectures",
            "Pervasive Computing and Ambient Intelligence",
            "Robotics",
            "Web Intelligence Applications",
            "Recent Trends and Developments"
          ]}
        />

        <Track
          title="Data Engineering"
          items={[
            "Database-as-a-Service and Cloud/Edge Computing",
            "Big Data Analytics",
            "Smart Data Clustering and Classification Techniques",
            "Data Integration and Interoperability",
            "Smart Data Grids and Processing",
            "Peer-to-peer, Parallel and Distributed Databases",
            "Data Visualization and Interactive Data"
          ]}
        />

        <Track
          title="Explorations"
          items={[
            "Web Data Mining and Information Extraction",
            "Smart Information Retrieval and Integration",
            "Uncertain, Probabilistic and Approximate Databases",
            "Smart Data Management and Workflows",
            "Advanced Query Processing and Optimization",
            "Data Mining and Knowledge Discovery"
          ]}
        />

        <Track
          title="Computational Intelligence"
          items={[
            "Machine Learning for Database Systems",
            "Semantic Web",
            "Multimedia Information Processing and Analysis",
            "Deep Learning",
            "Statistical and Reinforcement Learning",
            "Data Visualization and Interactive v Data-driven Fuzzy Systems Design",
            "Artificial Neural Network",
            "Social Networks Visualization and Analysis",
            "Supervised and Unsupervised Learning",
            "High Performance Computing",
            "Cognitive Intelligence and Decision Making Models",
            "Nature Inspired, Evolutionary Computation and Hybrid learning Algorithms"
          ]}
        />
      </div>
    </main>
  );
};

export default CallForPaper;
