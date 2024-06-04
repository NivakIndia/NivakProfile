import React, { useEffect, useState } from 'react'
import send from '../../assets/send.svg'
import hello from '../../assets/hand.svg'

const Data = () => {
  const toRotate = ["Software ", "Web "]
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setisDeleting] = useState(false)
  const [text, settext] = useState("")
  const [delta, setdelta] = useState(300)
  const period = 2000;

  const tick = () => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i]
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
    settext(updatedText);

    if(isDeleting) setdelta(prev => prev/2)
    
    if(!isDeleting && updatedText === fullText){
      setisDeleting(true)
      setdelta(period)
    }
    else if(isDeleting && updatedText === ''){
      setisDeleting(false)
      setLoopNum(loopNum+1)
      setdelta(300)
    }
  }

  useEffect(() => {
    let ticker = setInterval(() => {
        tick()
    }, delta)
  
    return () => {
      clearInterval(ticker)
    }
  }, [text])
  

  return (
    <div className="home_data">
        <h1 className="home_title">Karunanithi M 
            <img src={hello} className='home_hand'/>
        </h1> 
        <span className='nickname'>(Kavin)</span>
        <h3 className="home_subtitle">{text} Developer</h3>
        <p className="home_description">
           My other name KAVIN while spelled backwards it became NIVAK that's the logo i made and using for my porjects
        </p>
        <a href="#contact" className="button button_flex">
            Say Hello
            <img src={send} alt='send' style={{marginLeft: '10px'}}/>
        </a>
    </div>
  )
}

export default Data
