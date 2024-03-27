export default function PlunderInput({ initialPlunder, onUpdate }) {
    const onPlunderChange = (e) =>
        onUpdate(Math.max(e.target.value, 0) || 0)
    return(
        <div className="inputWrap">
            <label htmlFor='plunder'>ENTER PLUNDER:</label>
            <input id='plunder' type='text' pattern="[0-9]*" inputMode="numeric" value={initialPlunder} onChange={onPlunderChange} placeholder='0'></input>
        </div>
    )
}