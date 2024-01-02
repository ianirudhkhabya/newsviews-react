const About = () => {
  const aboutStyle = {
    marginTop: "4rem",
  };

  return (
    <div className="container" style={aboutStyle}>
      <div className="card bg-light text-dark p-4">
        <div className="card-body">
          <h1 className="card-title text-center mb-4">About NewsViews</h1>
          <p className="card-text">
            NewsViews is a React-based news application that allows users to
            explore the latest headlines from various categories. It utilizes
            the NewsAPI to fetch real-time news data.
          </p>
          <p className="card-text">
            This application is developed as a learning project to demonstrate
            the use of React, React Router, and integration with a third-party
            API.
          </p>
          <h2 className="card-title mt-4">Developed by:</h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Anirudh Khabya</li>
          </ul>
          <h2 className="card-title mt-4">Technologies Used:</h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">React and React Router</li>
            <li className="list-group-item">NewsAPI</li>
            <li className="list-group-item">Bootstrap</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
