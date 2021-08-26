import React from "react";

const CourseRegister = () => (
    <div>
        <h1>여름방학 특강 신청</h1>
        <form>
            <fieldset>
                <legend>수강 신청인</legend>
                <ul>
                    <li>
                        <label class="reg" for="id">학번</label>
                        <input type="text" id="id"></input>
                    </li>
                    <li>
                        <label class="reg" for="name">이름</label>
                        <input type = "text" id = "name"></input>
                    </li>
                    <li>
                        <label class="reg" for="class">학과</label>
                        <select id="class">
                            <optgroup label="공과대학">
                                <option value="archi">건축공학과</option>
                                <option value="mechanix">기계공학과</option>
                                <option value="indust">산업공학과</option>
                                <option value="elec">전기전자공학과</option>
                                <option value="computer">컴퓨터공학과</option>
                                <option value="chemical">화학공학과</option>
                        </optgroup>
                        <optgroup label="인문대학">
                            <option value="history">사학과</option>
                                <option value="lang">어문학과</option>
                                <option value="philo">철학과</option>
                            </optgroup>
                        </select>
                    </li>
                </ul>
            </fieldset>
        </form>
    </div>
    );

export default CourseRegister;