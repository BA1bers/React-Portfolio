import React from 'react'
import PasswordGenerator from '../components/images/pg2.PNG'
import CodeQuiz from '../components/images/quizhome.PNG'
import DayScheduler from '../components/images/workdayscheduler.PNG'
import WeatherDashboard from '../components/images/weatherdashboard2.PNG'
import NoteTaker from '../components/images/NoteTaker.PNG'
import Mernlin from '../components/images/mernlin.jpg'
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
                    <div className="portProjects">
                    <Project title="passwordGenerator" link="https://ba1bers.github.io/PasswordGenerator/" image={PasswordGenerator} />
                    <p>Password generator allows you to input the criteria you need for a password and creates one for you<br>
                    </br>link to github repository <a href="https://github.com/BA1bers/PasswordGenerator" target="_blank" rel="noopener noreferrer">here</a>
                    </p>
                    </div>
                    <div className="portProjects">
                    <Project title="codeQuiz" link="https://ba1bers.github.io/CodeQuiz/" image={CodeQuiz} />
                    <p>A timed quiz that keeps track of your score. For every question you get wrong, time is deducted from the timer.<br>
                    </br>link to github repository <a href="https://github.com/BA1bers/CodeQuiz" target="_blank" rel="noopener noreferrer">here</a>
                    </p>
                    </div>
                    <div className="portProjects">
                    <Project title="dayScheduler" link="https://ba1bers.github.io/Scheduler/" image={DayScheduler}/>
                    <p>A daily planner where you can mark down important events<br>
                    </br>link to github repository <a href="https://github.com/BA1bers/Scheduler" target="_blank" rel="noopener noreferrer">here</a>
                    </p>
                    </div>
                </div>
                <div className="row">
                    <div className="portProjects">
                    <Project title="weatherDashboard" link="https://ba1bers.github.io/weather-dashboard/" image={WeatherDashboard} />
                    <p>Allows you to search any city and it will retrieve the forecast, temperature, wind speed, and U.V. index for the next 5 days<br>
                    </br>link to github repository <a href="https://github.com/BA1bers/weather-dashboard" target="_blank" rel="noopener noreferrer">here</a>
                    </p>
                    </div>
                    <div className="portProjects">
                    <Project title="noteTaker" link="https://mighty-cove-49648.herokuapp.com/" image={NoteTaker} />
                    <p>A simple note taking app to save thoughts and keep track of tasks that need to be completed<br>
                    </br>link to github repository <a href="https://github.com/BA1bers/Note-Taker" target="_blank" rel="noopener noreferrer">here</a>
                    </p>
                    </div>
                    <div className="portProjects">
                    <Project title="mernlin" link="https://mernlin-pizza.herokuapp.com/Hero" image={Mernlin} />
                    <p>MERNlin's Pizza is an application built for a restaurant order system. It allows users to create account to receive discounts by becoming a member<br>
                    </br>link to github repository <a href="https://github.com/BA1bers/Mernlin-Pizza" target="_blank" rel="noopener noreferrer">here</a>
                    </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Portfolio
