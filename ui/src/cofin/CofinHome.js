import React from "react"
import logo from '../images/cofin.png';
import logo2 from '../images/inform.jpg';
import logo3 from '../images/world.png';
import logo4 from '../images/piston.png'
import logo5 from '../images/news.png'
import styled from "styled-components";

const CofinHome = () => (
<>
    <div>
        <ul>       
            <li type='none' align='right'>
                <label for="user-id"/>아이디
                <input type="text" id="user-id"/>
         
                <label for="pwd1"/> 비밀번호 
                <input type="password" id="pwd"/>&nbsp;
                
                <input type="submit" value="로그인"/>&nbsp;
            </li>
        </ul>
        <Body float="right">
            <Ul id='navi' type='none'>
                <Li class='group'>
                    <LogDiv class='title'><label>로그인</label></LogDiv>
                    <Ultyp type='none' class="sub">
                        <Lisub><A href="#">로그인</A></Lisub>
                        <Lisub><A href="#">회원가입</A></Lisub>
                    </Ultyp>
                </Li>
                <Li class='group'>
                    <Divcla class="title">지도</Divcla>
                    <Ultyp type='none' class="sub">
                        <Lisub><A href="#">국내지도</A></Lisub>
                        <Lisub><A href="#">세계지도</A></Lisub>
                    </Ultyp>
                </Li>
                <Li class='group'>
                    <Divcla class="title">뉴스</Divcla>
                    <Ultyp type='none' class="sub">
                        <Lisub><A href="#">코로나 국내 현황</A></Lisub>
                        <Lisub><A href="#">코로나 해외 현황</A></Lisub>
                    </Ultyp>
                </Li>
                <Li class='group'>
                    <Divcla class="title">백신</Divcla>
                    <Ultyp type='none' class="sub">
                        <Lisub><A href="#">백신 종류</A></Lisub>
                        <Lisub><A href="#">바이러스 변이 종류</A></Lisub>
                    </Ultyp>
                </Li>
                <Li class='group'>
                    <Divcla class="title">게시판</Divcla>
                    <Ultyp type='none' class="sub">
                        <Lisub><A href="#">자유게시판</A></Lisub>
                        <Lisub><A href="#">신고게시판</A></Lisub>
                    </Ultyp>
                </Li>
                <Li class='group'>
                    <Divcla class="title">설정</Divcla>
                    <Ultyp type='none' class="sub">
                        <Lisub><A href="#">알림</A></Lisub>
                        <Lisub><A href="#">탈퇴</A></Lisub>
                        <Lisub><A href="#">마이페이지</A></Lisub>
                    </Ultyp>
                </Li>
            </Ul>
        </Body>
    </div>
    <div align='center'>
        <img src={logo} width="350" height="500"/>   
    </div>

    <div align='center' >         
        <form>
            <button type="submit" class="subm">
                <img src={logo2} width="150" height="150" border-radius='70%'/>&nbsp;
            </button>
            <button type="submit" class="subm">
                <img src={logo3} width="150" height="150"/>&nbsp;
            </button>
            <button type="submit" class="subm">
                <img src={logo4} width="150" height="150"/>&nbsp;
            </button>
            <button type="submit" class="subm">
                <img src={logo5} width="150" height="150"/>
            </button>
        </form>
    </div>
</> 
)

export default CofinHome
const LogDiv = styled.div`
    background-color: red;
`

const Body = styled.div`
    margin:20px auto;
    padding: 0;
    font-family:"맑은 고딕";
    font-size:0.9em;
`

const Ul = styled.ul`
    width: 200px;
    text-indent: 10px;
`

const Ultyp = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
`

const Li = styled.li `
    margin=bottom:3px
`

const Divcla = styled.div`
    height: 35px
    line-height: 35px
    background-color: red;
`

const Lisub = styled.li`
    margin-bottom: 2px;
    height:35px;
    line-height:35px;
    background-color: #f4f4f4;
`

const A = styled.a`
    display: block;
    width: 100%;
    height:100%;
    text-decoration:none;
    color:#000;
`





