import React from 'react'
import PasswordGenerator from '../components/images/pg2.PNG'
import CodeQuiz from '../components/images/quizhome.PNG'
import DayScheduler from '../components/images/workdayscheduler.PNG'
import WeatherDashboard from '../components/images/weatherdashboard2.PNG'
import NoteTaker from '../components/images/NoteTaker.PNG'
import Congo from '../components/images/congo.png'

const Portfolio = () => {
    const [header] = React.useState({ subHeader: "Portfolio", text: "A look at my previous projects" });
    return (
        <div className="portfolio">
            <div className="container">
                <div className="portfolioTop">
                    <h1 className="portfolioTopHeader">{header.subHeader}</h1>
                    <p className="portfolioTopText">{header.text}</p>
                </div>
                <div className="row">
                    <div className="passwordGenerator">
                        <div className="project">
                            <a href="https://ba1bers.github.io/PasswordGenerator/" target="_blank" rel="noopener noreferrer">
                            <img src={PasswordGenerator} alt="PasswordGenerator" />
                            </a>
                        </div>
                    </div>
                    <div className="codeQuiz">
                        <div className="project">
                            <a href="https://ba1bers.github.io/CodeQuiz/" target="_blank" rel="noopener noreferrer">
                            <img src={CodeQuiz} alt="CodeQuiz" />
                            </a>
                        </div>
                    </div>
                    <div className="dayScheduler">
                        <div className="project">
                            <a href="https://ba1bers.github.io/Scheduler/" target="_blank" rel="noopener noreferrer">
                            <img src={DayScheduler} alt="DayScheduler" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="weatherDashboard">
                        <div className="project">
                            <a href="https://ba1bers.github.io/weather-dashboard/" target="_blank" rel="noopener noreferrer" >
                            <img src={WeatherDashboard} alt="WeatherDashboard" />
                            </a>
                        </div>
                    </div>
                    <div className="noteTaker">
                        <div className="project">
                            <a href="https://mighty-cove-49648.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <img src={NoteTaker} alt="NoteTaker" />
                            </a>
                        </div>
                    </div>
                    <div className="congo">
                        <div className="project">
                            <a href="https://congomedia.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <img src={Congo} alt="Congo" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Portfolio
