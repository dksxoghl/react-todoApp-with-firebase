import React from "react";

const TaskAdd=({value,changeH, clickH})=>{
    return (
            <form className="field has-addons">
                <div className="control is-expanded">
                <input className="input" value={value} onChange={changeH}/>
                </div>
                <div className="control">
                <button className="button is-primary" onClick={clickH}>저장</button>
                </div>
            </form>
    );
}
export default TaskAdd;
