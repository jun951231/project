import React from 'react'
import { Link } from 'react-router-dom'

const NavigationCofin = () => (
<nav class="navi">
    <ul>
        
        <li><Link to='/cofin/FreeBoard'>자유게시판</Link></li>
        <li><Link to='/cofin/Write'>글쓰기</Link></li>
        
    </ul>
</nav>
)

export default NavigationCofin