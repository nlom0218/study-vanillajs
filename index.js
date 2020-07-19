//난.. html은 html파일에서 css는 css파일에서만 다루고 싶다!
// 즉, js에서는 로직을 처리하게 하고 싶다. js가 웹사이트의 스타일(css)를 처리하는 걸 원하지 않는다.

const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";

/*function handleClick() {
  const hasClass = title.classList.contains(CLICKED_CLASS);
  if (!hasClass) {
    title.classList.add(CLICKED_CLASS);
  } else {
    title.classList.remove(CLICKED_CLASS);
  }
}*/
//위의 함수 보다 더욱더 간단하게 함수를 만드는 방법은 다음과 같다.
function handleClick() {
  title.classList.toggle(CLICKED_CLASS);
}
//위의 함수는 toggle함수 안에 있는 값을 체크한다. 만약 class가 있으면 add아니면 remove

//init이라는 함수는 어플리케이션을 초기화 한다.
function init() {
  title.addEventListener("click", handleClick);
}
init();
