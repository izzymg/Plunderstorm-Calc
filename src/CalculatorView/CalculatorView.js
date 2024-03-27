import { useState } from 'react';
import PlunderInput from '../PlunderInput/PlunderInput';
import { MAX_RENOWN, RENOWN_PLUNDER } from "../util"
import RenownInput from '../RenownInput/RenownInput';

import styles from "./CalculatorView.module.css"

function Results({ needed, neededPerDay }) {
  if(needed > 0) {
    return(
      <>
        <span>⚙️ Earn <span className="mono">~{neededPerDay}</span> per-day to cap</span>
        <span>💰 You need <span className="mono">{needed}</span> Plunder total </span>
      </>
    )
  } else {
    return(
      <span>🍻🥂 Yer already there lass / lad!</span>
    )
  }
}

export default function CalculatorView() {

  const getInitialPlunder = () =>
    localStorage.getItem("plunder") || 0
  
  const getInitialDeadline = () =>
    Math.round(Math.abs((new Date(Date.now()) - new Date(2024, 4, 1)) / (24 * 60 * 60 * 1000)));

  let [plunder, setPlunder] = useState(getInitialPlunder)
  let [deadline, setDeadline] = useState(getInitialDeadline)

  const updatePlunder = (v, x) => {
    localStorage.setItem("plunder", v * x)
    setPlunder(v * x)
  }

  const renown = () =>
    Math.min(1 + (plunder/2500), 40)

  const needed = () =>
    (RENOWN_PLUNDER*MAX_RENOWN)-plunder
  
  const neededPerDay = () =>
    Math.ceil(needed() / deadline)
  
  const neededPerDayMillion = () =>
    Math.ceil((1000000-plunder) / deadline)

  return (
    <>
      <div className={styles.daysLeft}>
        <span>Ye got</span>
        <input type='text' onChange={v => setDeadline(parseInt(v.target.value) || getInitialDeadline())} className='mono' value={deadline}/>
        <span>days o' plunderin left</span>
      </div>
    
      <RenownInput initialRenown={renown()} onUpdate={v => updatePlunder(v-1, RENOWN_PLUNDER)}/>
      <PlunderInput initialPlunder={plunder} onUpdate={v => updatePlunder(v, 1)}/>


      <div className="resultsWrap">
        <div className={styles.results}>
          <Results needed={needed()} neededPerDay={neededPerDay()}></Results>
          <div className={styles.mili}>
            <span>💀💀 GOIN FOR A MILLION? ⚔️⚔️</span>
            <span>Earn <span className='mono'>{neededPerDayMillion()}</span> per-day</span>
          </div>
        </div>
      </div>
    </>
  )
}