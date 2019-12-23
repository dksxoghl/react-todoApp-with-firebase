import React from "react";

const TaskDisplay=({tasks,deleteH})=>{
    return (
        tasks.map((task) => {
            return (
                <div className="box" key={task.id}>
                    <div className="level">
                    <p className="title level-left">{task.todo}</p>
                    <button className="button is-danger level-right" onClick={() => deleteH(task.id)}>삭제</button>
                    </div>
                </div>
            )
        })
    )
}
export default TaskDisplay;
