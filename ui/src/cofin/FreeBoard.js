import React from "react"

const FreeBoard = () =>(
    <div>
        <ul>       
            <li>
                <label for="user-id"/>아이디
                <input type="text" id="user-id"/>
            </li>
            <li>    
                <label for="pwd1"/> 비밀번호
                <input type="password" id="pwd"/>
            </li>
            <li>
                <input type="submit" value="로그인"/>
            </li>
        </ul>
        <table border="1" width='1200' align='center'>
            <tr>
                <td colSpan="5" align='center'>자유게시판</td>
            </tr>
            <tr align='center'>
                <td>분류</td>
                <td width="900">제목</td>
                <td>글쓴이</td>
                <td>날짜</td>
            </tr>
            <tr height="750">
                <td colSpan="5" align='center'>
                    글이 없습니다.
                </td>
            </tr>
            <tr>
                <td colSpan="5" align='center'>
                    1 2 3 4 5 6 7 8 9 10
                </td>
            </tr>
            <tr>
                <td colSpan="1" align='left'>
                    <input type="button" align='left' value="신고하기"></input>
                </td>
                <td colspan="4" align='right'>                    
                    <input type="button" onClick="Write('/Write')" value="글쓰기"/>
                    
                    <input type="button" value="수정"/>
                    <input type="button" value="삭제"/>
                </td>
            </tr>
        </table>
    </div>
)            


export default FreeBoard

