import React from "react";
import TaskStorage from "./api/TaskStorage";
import TaskGen from "./component/TaskGen";
const App = () => {
    return (
        <>
            <TaskStorage>
                <TaskGen/>
            </TaskStorage>

        </>
    )
}
export default App;