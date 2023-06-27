import React from "react";
import "./Project.css";

function Project(){
    return (
        <div className="PmainContainer">
            <h3 className="PmainTitle">Projects</h3>
            <div className="Pprojects">
                <div className="PprojectRow1">
                    <a href="https://lulubeanana17.github.io/apple.github.io/">
                        <div className="Pproject1">
                            <div className="PprojectCover">
                                <div className="PtextContainer">
                                    <div className="Phead">Apple Webpage</div>
                                    <div>Clone coding<br/>
                                        HTML, CSS, JavaScridivt, React</div>    
                                </div>                                
                            </div>
                        </div>
                    </a>
                    <a href="https://lulubeanana17.github.io/swingger.github.io/">
                        <div className="Pproject2">
                            <div className="PprojectCover">
                                <div className="PtextContainer">
                                    <div className="Phead">Social Network App</div>
                                    <div>Inspired by Twitter<br/>
                                        HTML, CSS, JavaScript, Firebase, React</div>    
                                </div>                                
                            </div>
                        </div>
                    </a>
                </div>                
            </div>
        </div>
    )
}

export default Project;