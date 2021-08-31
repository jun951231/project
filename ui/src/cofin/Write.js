import React from 'react'
import styled from 'styled-components'

const Write = () => (
    <div>
        <table border="1" width='1200' align='center'>
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
                <td align='center'>
                    <input type="text" placeholder="제목을 입력하시오"
                    maxLength='20' width="100%"/>
                </td>
            </tr>
            <tr height="750">
                <td colSpan="2">
                    <Textarea placeholder="내용을 입력하시오." cols='180'></Textarea>
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

const Textarea = styled.textarea`
    height:740px
`