import React from "react";
import logo from '../images/pf.png';

const OnlineProfile = () => (
    <div>
        <h1>온라인 프로필</h1>
        <figure>
            <img src={logo} />
            <figcaption>오늘은 남은 인생이 시작되는 첫째날</figcaption>
        </figure>
        <h1>Roh Jun IL</h1>
        <p>이메일 : jun951231@gmail.com</p>
        <h2>Who I am?</h2>
        <p>컴퓨터 언어를 배우기 위해 강남 비트캠프 본원 등교 중인 사회 초년생.
        자바, 파이썬 너무 어려워.
        </p>
        <h2>GitHub</h2>
        <ul>
            <li><a href="https:github.com/jun951231" target="_blank">GitHub</a></li>
        </ul>
        
        <h2>Skills</h2>
        <ul>
            <li>사용 언어
                <ul>
                    <li><mark>HTML</mark></li>
                    <li><mark>CSS</mark></li>
                    <li>JAVA</li>
                    <li>Javascript</li>
                    <li>Python</li>
                </ul>
            </li>
            <li>사용툴
                <ul>
                    <li>IntelliJ</li>
                    <li>PyCharm</li>
                    <li>Docker</li>
                    <li>Spring FrameWork</li>
                    <li>Sql Developer</li>
                    <li>Evernote</li>
                    <li><b>MongoDB</b></li>
                </ul>
            </li>
        </ul>
        <h2>Academic</h2>
        <table>
            <caption>학력 사항</caption>
            <thead>
                <tr>
                    <th>출신학교</th>
                    <th>전공</th>
                    <th>기간</th>
                    <th>졸업구분</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>강원애니고등학교</td>
                    <td>카툰</td>
                    <td>2012~2014</td>
                    <td>졸업</td>
                </tr>
                <tr>
                    <td>대진대학교</td>
                    <td>문예창작학과</td>
                    <td>2014~2021</td>
                    <td>졸업</td>
                </tr>
            </tbody>
        </table>   
    </div>
    );
    
export default OnlineProfile;