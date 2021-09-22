import React from 'react'
import PasswordGenerator from '../components/images/pg2.PNG'
import CodeQuiz from '../components/images/quizhome.PNG'
import DayScheduler from '../components/images/workdayscheduler.PNG'
import WeatherDashboard from '../components/images/weatherdashboard2.PNG'
import NoteTaker from '../components/images/NoteTaker.PNG'
import Congo from '../components/images/congo.png'
import Project from './Project'

const Portfolio = () => {
    const [header] = React.useState({ subHeader: "Portfolio", text: "A look at my previous projects" });
    return (
        <div className="portfolio" id="portfolio">
            <div className="container">
                <div className="portfolioTop">
                    <h1 className="portfolioTopHeader">{header.subHeader}</h1>
                    <p className="portfolioTopText">{header.text}</p>
                </div>
                <div className="row">
                    <Project title="passwordGenerator" link="https://ba1bers.github.io/PasswordGenerator/" image={PasswordGenerator}/>
                    <Project title="codeQuiz" link="https://ba1bers.github.io/CodeQuiz/" image={CodeQuiz} />
                    <Project title="dayScheduler" link="https://ba1bers.github.io/Scheduler/" image={DayScheduler}/>
                </div>
                <div className="row">
                    <Project title="weatherDashboard" link="https://ba1bers.github.io/weather-dashboard/" image={WeatherDashboard} />
                    <Project title="noteTaker" link="https://mighty-cove-49648.herokuapp.com/" image={NoteTaker} />
                    <Project title="congo" link="https://congomedia.herokuapp.com/" image={Congo} />
                </div>
            </div>
        </div>

    )
}

export default Portfolio
