const result = document.querySelector('.result');
const contents = document.querySelector('.contents')

contents.addEventListener('click', function(event) {
  //버튼 눌렸을 때 진행되는 함수

  const target = event.target; // 클릭한 함수 가져온다.
  const action = target.classList[0]; // 클릭된 요소에 클레스 정보를 가져와준다
  const buttonContent = target.textContent;
  


  if (target.matches('button')) {
    if (action === 'number') {
      console.log(buttonContent);
    }
    
  }




})
