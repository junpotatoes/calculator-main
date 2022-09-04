const calculator = document.querySelector('.calculator');
const result = document.querySelector('.result');
const contents = document.querySelector('.contents');
const operator = document.querySelector('.operator')
const calculation = document.querySelector('.calculation');


function calculate(n1, operator, n2) {
  let result = 0;

  if (operator === '+') {
    result = Number(n1) + Number(n2);
  } else if (operator === '-') {
    result = Number(n1) - Number(n2);
  } else if  (operator === '×') {
    result = Number(n1) * Number(n2);
  } else if (operator === '÷') {
    result = Number(n1) / Number(n2);
  }
   return String(result);
}
let firstNum, operatoration, previousKey, previousNum;


contents.addEventListener('click', function(event) {
  //버튼 눌렸을 때 진행되는 함수

  const target = event.target; // 클릭한 함수 가져온다.
  const action = target.classList[0]; // 클릭된 요소에 클레스 정보를 가져와준다
  const buttonContent = target.textContent;
  


  if (target.matches('button')) {
    if (action === 'number') {
      console.log(buttonContent);
      if (result.textContent === '0' || previousKey === 'operator') {
        
        result.textContent = buttonContent;
      } else {
        result.textContent += buttonContent;
      }
      // 연산자를 누르면 초기화시키고 다시 입력이 되야한다
     previousKey = 'number';
    }

    if (action === 'operator') {
      firstNum = result.textContent;
      operatoration = buttonContent;
      previousKey = 'operator';
      console.log(previousKey);
      console.log(operatoration);
    }

    if (action === 'clear_ac') {
      result.textContent = '0';
      firstNum = undefined;
      operatoration = undefined;
      
      
    }

    if (action === 'calculation') {
      previousNum = result.textContent;
     result.textContent = calculate(firstNum, operatoration, previousNum)
     console.log('결과');
    }
    
  }




})
