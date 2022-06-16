import React, {useState} from 'react'
import './index.css'

function App() {
  // state
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [kmi, setBmi] = useState('')
  const [message, setMessage] = useState('')

let calcBmi = (event) => {
    //prevent submitting
    event.preventDefault()

    if (weight === 0 || height === 0) 
      alert('Prašome įvesti savo svorį ir ūgį')
     else {
      let kmi = (weight / (height * height) *10000)
      setBmi(kmi.toFixed(1))

      // Logic for message

      if (kmi < 18.5) {
        setMessage('Per mažas svoris')
      } else if (kmi >= 18.5 && kmi <= 24.9 ) {
        setMessage('Normalus svoris')
      } else if (kmi >= 25 && kmi <= 29.9) {
        setMessage('Viršsvoris')
      } else if (kmi >= 30.0 && kmi <= 34.9 ) {
        setMessage('Nutukimas')
      } else if (kmi >= 35.0 && kmi <= 39.0) {
        setMessage('Didelis nutukimas') 
       if (kmi <= 39.00) {
          setMessage('')}
      }
    }   
  }

  //  show image based on bmi calculation
  let imgSrc;

  if (kmi < 1) { imgSrc = null }  
   else if (kmi < 18.5) {imgSrc = require('../src/img/small.png')} 
   else if (kmi <= 25) {imgSrc = require('../src/img/normal.png')} 
   else if (kmi <= 29.9) { imgSrc = require('../src/img/over-weight.png')} 
   else if (kmi <= 34.9) { imgSrc = require('../src/img/big-weight.png')}
   else if (kmi <= 39) { imgSrc = require('../src/img/very-big-weight.png')}  


  let reload = () => {
   window.location.reload()
  } 
  
  return (
    <div className="app">
      <div className='container'>
        <h2 className='center'>KŪNO MASĖS INDEKSAS</h2>
        <h3>Skaičiuoklė</h3>
        <form onSubmit={calcBmi}>
          <div>
            <label>Svoris (kg)</label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>Ūgis (cm)</label>
            <input value={height} onChange={(event) => setHeight(event.target.value)} />
          </div>
          <div>
            <button className='btn' type='submit'>Apskaičiuok</button>
            <button className='btn btn-outline' onClick={reload} type='submit'>Perskaičiuok</button>
          </div>
        </form>
        <div className='center'>
          <h3>Tavo KMI indeksas: {kmi}</h3>
          <p>{message}</p>
        </div>
        <div className='img-container'>
          <img src={imgSrc} alt=''></img>
        </div>
      </div>
    </div>
  );
}

export default App