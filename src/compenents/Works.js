import "./Works.css";

function Works() {
    let translateMeter = 0;

    const moveRight = () => {
      if (window.screen.availWidth > 770) {
        if (translateMeter === -150) {
          return;
        } else {
          document.querySelector(
            ".projectsContainer"
          ).style.transform = `translate(${translateMeter - 50}vh)`;
          translateMeter = translateMeter - 50;
        }
      } else if(window.screen.availWidth > 430 && window.screen.availWidth < 770) {
        if (translateMeter === -250) {
          return;
        } else {
          document.querySelector(
            ".projectsContainer"
          ).style.transform = `translate(${translateMeter - 50}vh)`;
          translateMeter = translateMeter - 50;
        }
      }
    };
    const moveLeft = () => {
        if(translateMeter === 0) {
            return;
        } else {
            document.querySelector(".projectsContainer").style.transform = `translate(${translateMeter + 50}vh)`;
            translateMeter = translateMeter + 50;
        }
    };

    return (
      <div className="workContainer">
        <h3>Projects / Clon coding</h3>
        <div className="projectsOutlier">
          <div className="moveLeft" onClick={moveLeft}>
            <i class="fas fa-angle-left"></i>
          </div>
          <div className="projectsContainerCover">
            <div className="projectsContainer">
              <a href="https://lulubeanana17.github.io/TodoList.github.io/">
                <div className="project1">
                    <div className="coverProject">
                        <h4>To-Do list</h4>
                    </div>
                </div>
              </a>
              <a href="https://lulubeanana17.github.io/calendar-todo.github.io/">
                <div className="project2">
                    <div className="coverProject">
                        <h4>Calendar</h4>
                    </div>
                </div>
              </a>
              <a href="https://lulubeanana17.github.io/cointicker.github.io/">
                <div className="project3">
                    <div className="coverProject">
                        <h4>Live Coin Ticker</h4>
                    </div>
                </div>
              </a>
              <a href="https://lulubeanana17.github.io/netflex.github.io/">
                <div className="project4">
                    <div className="coverProject">
                        <h4>Netflex</h4>
                    </div>
                </div>
              </a>
              <a href="https://lulubeanana17.github.io/apple.github.io/">
                <div className="project5">
                    <div className="coverProject">
                        <h4>Applie</h4>
                    </div>
                </div>
              </a>
              <a href="https://lulubeanana17.github.io/swingger.github.io/">
                <div className="project6">
                    <div className="coverProject">
                        <h4>Swingger</h4>
                    </div>
                </div>
              </a>
            </div>
          </div>
          <div className="moveRight" onClick={moveRight}>
            <i class="fas fa-angle-right"></i>
          </div>
        </div>
      </div>
    );
}

export default Works;