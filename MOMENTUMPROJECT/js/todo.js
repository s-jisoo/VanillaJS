const listH = document.querySelector(".listHeader");


/* listHeader 에다가 현재 날짜 0000년 00월 00일 000요일 */
const date = new Date();
const year = date.getFullYear();
const month = String(date.getMonth()).padStart(2,"0");
const Gdate = String(date.getDate()).padStart(2,"0");
// 한국어로 요일 만들기. Date 객체로 day만 가져다쓰면 숫자로 표기됨. (일-토가 0-6으로 표기됨.)
const dayN = {weekday:'long'};
const day = new Intl.DateTimeFormat('ko-KR',dayN).format(date);

listH.innerText = `${year}년 ${month}월 ${Gdate}일 ${day}`;

