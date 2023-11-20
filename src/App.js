//import styles from './App.module.css';
import {ReactComponent as Logo1} from './svg/logo1.svg';
import {ReactComponent as Logo2} from './svg/logo2.svg';
import Header from './components/header/Header';
import Card from './components/card/Card';
import Goals from './components/goals/Goals';
import About from './components/about/About';
import Calculator from './components/calculator/Calculator';

function App() {

  const header = 'Green Horizon Initiative';
  const cards = [{title: 'For sustainable future', text:['Take control of your carbon footprint and become a catalyst for change. Our webpage is your gateway to understanding and addressing the environmental impact of your lifestyle. Through our innovative carbon footprint calculator and resources on achieving net zero emissions, we empower you to make informed choices that shape a sustainable future.']},
                 {title:'Carbon footprint calculator', text:['Calculating the carbon footprint of different foods helps provide transparency into the environmental impact of what we eat. This allows consumers to make more informed choices.',
                 'Food production accounts for over a quarter of global greenhouse gas emissions. Tracking carbon footprints creates awareness of how individual food choices collectively contribute to climate change.',
                 'Are you concerned about climate change and interested in living more sustainably? Use our carbon footprint calculator to easily track the environmental impact of your daily habits and explore areas where small changes can collectively make a big difference to nature.']}
                ];
  const goals = {title:'Our Goals', goals:[
    {header: 'Make Better Choices',
      description: 'Armed with insights from our data and analysis, you can make purchasing, transportation and consumption choices that are better for both people and planet. Play your part through empowered decision making.' },
    {header: 'Shape a Sustainable Future',
      description: 'With the support of individuals globally reducing emissions, we can influence policy and shift systems towards net zero standards. Together through education and action, we will secure environmental protection for generations to come.'},
    {header: 'Increase Awareness',
      description: 'We strive to spread the message far and wide about the climate impact of our daily habits. By engaging more individuals and communities, we can amplify our collective efforts.'}
              ]};
   const about = {title: 'About Us',
                description: 'Green Horizon Initiative is a non-profit organization dedicated to raising awareness about climate change and empowering individuals to reduce their carbon footprint through sustainable lifestyle choices. We were founded in 2020 by a group of environmentally-conscious citizens who wanted to make it easier for people to understand their impact on the planet and take informed action. Our goal is to positively influence individual behaviors through education and by making sustainability accessible to all. Our flagship program is a free online carbon footprint calculator that allows users to quickly and easily track the greenhouse gas emissions from their daily activities such as food consumption. By transparently showing individual carbon footprints, we aim to encourage emission-cutting practices.'
                }
  
                return(
    <div className="container-fluid">
      <Header header={header} />
      <Card imageToRender={<Logo1 />} header={cards[0].title} text={cards[0].text} />
      <Goals header={goals.title} goals={goals.goals} />
      <Card imageToRender={<Logo2 />} header={cards[1].title} text={cards[1].text} reverse="flex-row-reverse"/>
      <Calculator />
      <About title={about.title} text={about.description} />
    </div>
  )
}

export default App;
