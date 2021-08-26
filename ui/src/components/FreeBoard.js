import React from "react"

const FreeBoard = () =>(
    <div>
        <table border="1" width='1200' align='center'>
            <tr>
                <td colSpan="5" align='center'>자유게시판</td>
            </tr>
            <tr align='center'>
                <td> </td>
                <td>Date</td>
                <td width="900">Title</td>
                <td>Writer</td>
                <td>View</td>
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
                    <button type="submit" value="submit" onClick="window.open()">글쓰기</button>
                    <input type="button" value="수정"/>
                    <input type="button" value="삭제"/>
                </td>
            </tr>
        </table>
    </div>
)

export default FreeBoard