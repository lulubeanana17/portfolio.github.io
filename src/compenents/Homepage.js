import "./Homepage.css";

function Homepage() {
  return (
    <div className="homepageContainer">
      <div className="welcome">
        <h3>Hi, I'm Siyoon</h3>
        <p>
          A person who is enthusiatic about society problem,
          <br />
          trying to solve with technologies.
          <br />
          Believe that we can improve the world
          <br />
          by gradual changes with computer tech.
          <br />
          That's me.
        </p>
      </div>
      <div className="skills">
        <h3>Skills</h3>
        <div className="skillsCon">
          <div className="skillContainer1">
            <div className="cover"></div>
          </div>
          <div className="skillContainer2">
            <div className="cover"></div>
          </div>
          <div className="skillContainer3">
            <div className="cover"></div>
          </div>
          <div className="skillContainer4">
            <div className="cover"></div>
          </div>
          <div className="skillContainer5">
            <div className="cover"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
