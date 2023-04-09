// 입력 데이터가 텍스트 파일 형태로 주어지는 경우, 파일 시스템 모듈을 사용
// 예를 들어 /dev/stdin파일에 적힌 텍스트를 읽어오는 경우, 다음과 같이 코드를 작성한다.
// 기능: 전체 텍스트를 읽어 온 뒤에, 줄바꿈 기호를 기준으로 구분하여 리스트로 변환하기


let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) { // 한 줄씩 입력받아 배열에 넣기
  arr.push(Number(input[i]));
}
arr.sort(function(a, b) { // 오름차순 정렬 수행
  return a - b;
})

let answer = "";
for (let i = 0; i < arr.length; i++) {
  answer += arr[i] + "\n";
}
console.log(answer);