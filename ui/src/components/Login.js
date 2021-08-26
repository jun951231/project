import React from "react";

const Login = () => (
<div>
    <form action="login.php" method="POST">
        <ul>
            <li>
                <label for="id">아이디</label>
                <input type="text" id="id"></input>
            </li>
            <li>
                <label for="pw">비밀번호</label>
                <input type="password" id="pw"></input>
            </li>
            <li>
                <input type="submit" title="로그인" value="로그인"></input>
            </li>
        </ul>
    </form>
</div>

)

export default Login