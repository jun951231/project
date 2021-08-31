import React from 'react'
import { Link } from 'react-router-dom'

const NavigationCofin = () => (
<nav class="navi">
    <ul>
        
        <li type='none'>
            <Link to='/cofin/CofinHome'>코핀홈페이지</Link> &nbsp;
            <Link to='/cofin/FreeBoard'>자유게시판</Link> &nbsp;
            <Link to='/cofin/Write'>글쓰기</Link></li>
        
    </ul>
</nav>
)

export default NavigationCofin