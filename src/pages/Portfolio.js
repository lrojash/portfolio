import React from 'react'
import Card from '../components/Card'
import '../styles/card.css'
import '../styles/portfolio.css'

function Portfolio() {
    return (
        <div id="portfolio" className="wrapper" style={{border: '1px solid rgba(0,0,0,0)'}}>
            <ul className="stage" style={{marginTop: '5vh'}}>
                <section className="completed" style={{ display: 'grid', columnGap: '2%', width: '100vw', gridTemplateColumns: 'auto auto auto', gridTemplateRows: 'auto auto auto auto', justifyContent: 'center' }}>
                    <h1 className="project-intro" style={{ color: 'white', paddingTop: '20px', fontSize: '2.5em', textAlign: 'center', gridColumn: '1 / span3', }}>Completed Projects</h1>
                    <li className="scene" >
                        <Card
                            title="Track Our Universe"
                            description="The application simulates the environment a teller would use to perfom their duties at a bank. I am using my previous employment as a reference."
                            site="https://github.com/lrojash/Track-Our-Universe"
                        />
                    </li>
                    <li className="scene">
                        <Card
                            title="BakStabbers"
                            description="The application is a social media website that is a clone of twitter. The user is able to creat, edit, and delete any posts they make."
                            site="https://github.com/lrojash/BakStabbers"
                        />
                    </li>
                    <li className="scene">
                        <Card
                            title="Teller Management System"
                            description="The application simulates the environment a teller would use to perfom their duties at a bank. I am using my previous employment as a reference."
                            site="https://github.com/lrojash/TMS"
                        />
                    </li>
                    <h1 style={{ color: 'white', fontSize: '2.5em', paddingTop: '40px', gridColumn: '1 / span3', textAlign: 'center' }}>Current Projects</h1>
                    <li className="scene" style={{ paddingLeft: '50%' }}>
                        <Card
                            title="BOTS"
                            description="The application will display numerous robots reaching random destination as quickly as possible while avoiding other robots/obstacles."
                            site="https://github.com/lrojash/Bots"
                        />
                    </li>
                    <li className="scene" style={{ paddingLeft: '50%' }}>
                        <Card
                            title="Safe Bank Inc"
                            description="The software is intended to simulate the environment that a typical bank employee uses throughout their workday. The user will be able to log in as a manager, banker, or teller"
                            site="https://github.com/lrojash/Safe-Bank-Inc"
                        />
                    </li>
                </section>
            </ul>
        </div >
    )
}
export default Portfolio