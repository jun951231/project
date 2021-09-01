import React from "react";

const Join = () => (
    <div>
        <h1>회원 가입</h1>
        <form>
        <ul>
            <li>
                <label>
                    아이디: <input type="text" id="user_id" size="10" minlength="4" maxlength="15"></input>
                </label>
                <small>4~15자리 이내의 영문과 숫자</small>
            </li>
            <li>
                <label>
                    이메일: <input type="email" id="user_email"></input>
                </label>
            </li>
            <li>
                <label>
                    비밀번호: <input type="password" id="user_pwd"></input>
                </label>
            </li>
            <li>
                <label>
                    비밀번호 확인: <input type="password" id="user_pwd"></input>
                </label>
            </li>
            <li>
                <input type="submit" value="회원가입"></input>
            </li>
        </ul>
        </form>
    </div>

);

export default Join;