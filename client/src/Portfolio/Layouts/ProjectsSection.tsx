import React from 'react'

import { ProjectsSection, ProjectsContainer } from './Projects/CardItem'
import ProjectCard from './Projects/ProjectCard'

const Portfolio = (): JSX.Element => (
  <ProjectsSection id="portfolio">
    <div className="header portfolio-header">
      <div className="inner">
        <div data-aos="fade-up">
          <span>My Project</span> <span className="line" />
        </div>
        <h3 data-aos="fade-up">My Portfolio</h3>
      </div>
    </div>
    <ProjectsContainer>
      <ProjectCard
        description={`A cryptocurrency mobile app which allows users buy and sell bitcoins, Etherum,
              Coinbase and Gift cards.Users can also recharge their mobile numbers from the app
              directly.`}
        image="https://i.pinimg.com/564x/65/66/ac/6566acdf9b62a091872d8ebdd6e1f463.jpg"
        link="https://www.behance.net/gallery/104144345/Crypto-App"
        title="Radio Mobile App"
      />
      <ProjectCard
        description={`A cryptocurrency mobile app which allows users buy and sell bitcoins, Etherum,
              Coinbase and Gift cards.Users can also recharge their mobile numbers from the app
              directly.`}
        image="https://i.pinimg.com/564x/65/66/ac/6566acdf9b62a091872d8ebdd6e1f463.jpg"
        link="https://www.behance.net/gallery/104144345/Crypto-App"
        title="Radio Mobile App"
      />
      <ProjectCard
        description={`A cryptocurrency mobile app which allows users buy and sell bitcoins, Etherum,
              Coinbase and Gift cards.Users can also recharge their mobile numbers from the app
              directly.`}
        image="https://i.pinimg.com/564x/65/66/ac/6566acdf9b62a091872d8ebdd6e1f463.jpg"
        link="https://www.behance.net/gallery/104144345/Crypto-App"
        title="Radio Mobile App"
      />
      <ProjectCard
        description={`A cryptocurrency mobile app which allows users buy and sell bitcoins, Etherum,
            Coinbase and Gift cards.Users can also recharge their mobile numbers from the app
            directly.`}
        image="https://i.pinimg.com/564x/65/66/ac/6566acdf9b62a091872d8ebdd6e1f463.jpg"
        link="https://www.behance.net/gallery/104144345/Crypto-App"
        title="Radio Mobile App"
      />
    </ProjectsContainer>
  </ProjectsSection>
)

export default Portfolio
