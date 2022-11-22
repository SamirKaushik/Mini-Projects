import { useState } from "react";
const Dropdown = () => {
    const colors = ["cyan", "green", "grey", "steelblue","blue"];
    const [options, setOptions] = useState(colors);
    const [addedOptions, setAddedOptions] = useState([]);
    const [toggle,setToggle]=useState(0);
    const handleOptions = (colour) => {
        const newOptions = options.filter((option) => option !== colour)
        setOptions(newOptions);
        setAddedOptions([...addedOptions, colour]);
    }
    const handleAddedOptions = (colour) => {
        const newOptions = addedOptions.filter((option) => option !== colour)
        setAddedOptions(newOptions);
        setOptions([...options, colour]);
    }
    const handleClear=()=>{
        setAddedOptions([]);
        setOptions(colors);
    }
    const clearSVG = <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x" viewBox="0 0 16 14">
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
    </svg>;
    const removeAddedOptionSVG = <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-x" viewBox="0 0 15 10">
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
    </svg>;
    const toggleSVG = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 20">
        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
    </svg>;
    return (
        <div id='dropdown'>
            <div id='input'>
                <div id="added_options" style={{ display: "flex"}}>
                    {addedOptions.map((colour) => {
                        return (<div className="hoverable" style={{ color: colour, borderRadius: "2px", marginLeft: "5px", padding: "2px 5px", backgroundColor: "light" + colour, display:"flex"}} onClick={() => handleAddedOptions(colour)}>
                            {colour + " "} {removeAddedOptionSVG}
                        </div>);
                    })}
                </div>
                <div id="func">
                    <button id='clear' className="button hoverable" onClick={handleClear}>
                        {clearSVG}
                    </button>
                    <button id='toggle' className="button hoverable" onClick={()=>{
                        setToggle(~toggle);
                    }}>
                        {toggleSVG}
                    </button>
                </div>
            </div>
            <div id='options' style={toggle===0?{display:'none'}:{display:'block'}}>
                {options.map((colour) => {
                    return (<div className="hoverable" style={{ color: colour, padding: "10px 10px" }} onClick={() => handleOptions(colour)}>
                        {colour}
                    </div>);
                })}
            </div>
        </div>
    );
}
export default Dropdown;