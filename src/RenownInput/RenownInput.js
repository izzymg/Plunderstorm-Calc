import { MAX_RENOWN } from "../util"

export default function RenownInput({ initialRenown, onUpdate }) {
    const onRenownChange = (e) =>
        onUpdate(Math.min(Math.max(e.target.value, 0), MAX_RENOWN) || 0)

    return(
        <div className="inputWrap">
            <label htmlFor='plunder'>YE RENOWN</label>
            <input id='plunder' type='text' value={initialRenown} onChange={onRenownChange} placeholder='0'></input>
        </div>
    )
}