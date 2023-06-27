import "./Communicator.css";

function Communicator(){ 
    let translateMeter = 0;

    const moveRight = () => {
        if (translateMeter === -200) {
            return;
          } else {
            document.querySelector(
              ".CexplanationContainer"
            ).style.transform = `translate(${translateMeter - 100}vh)`;
            translateMeter = translateMeter - 100;
          }
    };
    const moveLeft = () => {
        if(translateMeter === 0) {
            return;
        } else {
            document.querySelector(".CexplanationContainer").style.transform = `translate(${translateMeter + 100}vh)`;
            translateMeter = translateMeter + 100;
        }
    };
      
    return (
        <div className="CmainContainer">
            <h3 className="CmainTitle">EXPERIENCES</h3>
            <div className="CsubContainer">
                <div className="moveLeft" onClick={moveLeft}>
                    <i class="fas fa-angle-left"></i>
                </div>
                <div className="CexplanationSection">
                    <div className="CexplanationContainer">
                        <div id="0" className="CexplanationBox1">
                            <div className="CboxCover">
                                <h3 id="CfontWhite">DATACOMP 2022</h3>
                                <p id="CfontGrey">It was a great opportunity I could apply what I have learnt
                                                 to the team project and see how IT staffs work in real life.
                                                 Applying agile development is a new experience and
                                                 working with them motivated me to work harder.</p>
                            </div>                        
                        </div>
                        <div id="1" className="CexplanationBox2">
                            <div className="CboxCover">
                                <h3 id="CfontWhite">Guest Service Agent</h3>
                                <p id="CfontGrey">Heritage Aukcland I worked is a headquarter of Heritage group.
                                                As all calls coming to reception, we are in charge of dealing with
                                                calls and transfering them to a specific person. In the work environment,
                                                I leanrt how to communicate between clients and staffs.</p>
                            </div>                            
                        </div>
                        <div id="2" className="CexplanationBox3">
                            <div className="CboxCover">
                                <h3 id="CfontWhite">Receptionist</h3>
                                <p id="CfontGrey">Thankful to SO/ Auckland for giving a good experience i can work
                                                as a receptionist. I have leanrt how to communicate with people effectively
                                                and deal with problems caused by miscommunication.</p>
                            </div>                            
                        </div>                        
                    </div>                    
                </div>
                <div className="moveRight" onClick={moveRight}>
                    <i class="fas fa-angle-right"></i>
                </div>
            </div>
        </div>
    )
}

export default Communicator;
