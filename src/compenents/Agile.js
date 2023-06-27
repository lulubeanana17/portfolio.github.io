import React from 'react';
import excelFile from '../media/Everdose.xlsx';
import "./Agile.css";

function Agile(){
    const downloadExcelFile = () => {
        const link = document.createElement('a');
        link.href = excelFile;
        link.setAttribute('download', 'file.xlsx');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="AmainContainer">
            <div className='AfloatContainer'>
                <div className="AtitleContainer">
                    <div className="Ayear">Semester1 2023</div>
                    <div className="AprojectName">Agile and Lean delivery</div>
                </div>
                <div className="AinfoContainer">
                    <div className="Abrief">
                        <div className="AbriefName">Brief</div>
                        <div className="AshortDesc">
                            <p>The purpose of this lecture was to start the project from beginning to the end.
                               Applying Agile and lean concept, the goal is delivering a product. </p>
                        </div>
                    </div>
                    <div className='AteamContainer'>
                        <div className="AteamMembers">
                            <div className="AteamName">Kakama</div>
                            <div className="Amember">
                                <ul>
                                    <li>David Holden</li>
                                    <li>Vijay Kumar</li>
                                    <li>Siyoon Jung</li>
                                    <li>Benny Tran</li>
                                </ul>
                            </div>
                        </div>
                        <div className="Aroles">
                            <div className="AroleName">Roles</div>
                            <div className="Arole">
                                <ul>
                                    <li>Scrum Master</li>
                                    <li>Product Owner</li>
                                    <li>Developer</li>
                                    <li>Tester</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Afiles'>
                    <div className='Awireframe'>
                        <div className='AwireframeName'>Project Design</div>
                        <div className='AwireframeDesign'>
                            <embed src={require('../media/AgileDesign.pdf') }/>
                        </div>
                    </div>
                    <div className='Aexcel'>
                        <div className='AexcelName'>Project Management Tool</div>
                        <div className='AexcelDownload'>
                            <button onClick={downloadExcelFile}>Download Excel File</button>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default Agile;