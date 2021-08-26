import React from 'react'

const Write = () => (
    <div>
        <table border="1" width='500'>
            <tr>
                <th colSpan="2">
                    자유게시판 글쓰기
                </th>
            </tr>
            <tr>
                <td width="50">
                    <select>                        
                        <option>뉴스</option>
                        <option>잡담</option>
                        <option>확진자 발견</option>
                    </select>
                </td>
                <td>
                    <input type="text" placeholder="제목을 입력하시오"
                    maxLength='20' width="100%"/>
                </td>
            </tr>
            <tr>
                <td colSpan="2" height="400">
                    <textarea placeholder="내용을 입력하시오." width= "100%" height= "100%"></textarea>
                </td>
            </tr>
            <tr>
                <td colSpan="2" align="right">
                    <input type="button" value="등록"/>
                    <input type="button" value="목록으로"/>
                </td>
            </tr>
        </table>
    </div>

)

export default Write