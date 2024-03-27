import { MAX_RENOWN, RENOWN_PLUNDER } from "../util"

export default function PlunderInput({ initialPlunder, onUpdate }) {
    const onPlunderChange = (e) =>
        onUpdate(Math.min(Math.max(e.target.value, 0), MAX_RENOWN * RENOWN_PLUNDER) || 0)

    return(
        <div className="inputWrap">
            <label htmlFor='plunder'>YE PLUNDER</label>
            <input id='plunder' type='text' pattern="[0-9]*" inputmode="numeric" value={initialPlunder} onChange={onPlunderChange} placeholder='0'></input>
        </div>
    )
}