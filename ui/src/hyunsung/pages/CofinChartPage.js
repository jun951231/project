import React from "react"
import CofinChart from "hyunsung/projects/CofinChart"
import CofinChartMenu from 'hyunsung/projects/CofinChartMenu'

const CofinChartPage = () => {

return(<>
    <div>
        <CofinChartMenu></CofinChartMenu>
    </div>
    <div>
        <CofinChart></CofinChart>
    </div>

</>)

};

export default CofinChartPage