import "./Homepage.css";
import React from "react";
import {Link} from "react-router-dom";

function Homepage() {
  return (
    <div className="homepageContainer">
      <div className="introOfMe">
        <h4>HELLO, MY NAME IS SIYOON</h4>
        <h2>I make applications.</h2>
      </div>
      <div className="detailOfMe">
        <p>I'm a cross-functional developer and <Link to="communicator" className="communicator">communicator</Link>.<br/>
        I'm also adaptable person using <Link to="agile" className="agile">agile development</Link> by developing in <Link to="project" className="languages">different languages</Link>.</p>
      </div>
    </div>
  );
}

export default Homepage;
