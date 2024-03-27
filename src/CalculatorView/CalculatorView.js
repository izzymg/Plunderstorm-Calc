import { useState } from 'react';
import PlunderInput from '../PlunderInput/PlunderInput';
import { MAX_RENOWN, RENOWN_PLUNDER } from "../util"
import RenownInput from '../RenownInput/RenownInput';

import styles from "./CalculatorView.module.css"

export default function CalculatorView() {

  let [plunder, setPlunder] = useState(0)


  const needed = () =>
    (RENOWN_PLUNDER*MAX_RENOWN)-plunder
  
  const neededPerDay = () =>
    Math.ceil(needed() / daysLeft)
  
  const neededPerDayMillion = () =>
    Math.ceil((1000000-plunder) / daysLeft)

  const daysLeft = Math.round(Math.abs((new Date(Date.now()) - new Date(2024, 4, 1)) / (24 * 60 * 60 * 1000)));
  return (
    <>
      <h2>Ye got <span className='mono'>~{daysLeft}</span> days o' plunderin left</h2>

      <RenownInput initialRenown={plunder / RENOWN_PLUNDER} onUpdate={v => setPlunder(v*RENOWN_PLUNDER)}/>
      <PlunderInput initialPlunder={plunder} onUpdate={setPlunder}/>


      <div className={styles.results}>
        <span>⚙️ You should earn <span className="mono">~{neededPerDay()}</span> Plunder per-day to cap</span>
        <span>💰 You need <span className="mono">{needed()}</span> Plunder </span>
        <div className={styles.mili}>
          <span>💀💀 GOIN FOR A MILLION? ⚔️⚔️</span>
          <span>You should earn <span className='mono'>{neededPerDayMillion()}</span> Plunder per-day</span>
        </div>
      </div>
    </>
  )
}