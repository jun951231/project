import React from "react";

const DateMonth = () => (
    <div>
    <form >
        <h3>조회기간 선택</h3>
        <label><input type="date" id="start"></input></label>
        <label><input type="date" id="end"></input></label>
    </form>
    <form>
        <h3>조회기간 선택</h3>
        <label><input type="month" id="start"></input></label>
        <label><input type="month" id="end"></input></label>
    </form>
    <form>
        <h3>조회기간 선택</h3>
        <label><input type="week" id="start"></input></label>
        <label><input type="week" id="end"></input></label>
    </form>
    </div>
)

export default DateMonth