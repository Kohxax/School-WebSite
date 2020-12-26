
const onScroll = () => {
  console.log('scroll');
};
  
window.addEventListener("scroll", () => {
  onScroll();
});

const header = document.getElementById("header");
  const hH = header.clientHeight;
  let pos = 0;

const onScroll = () => {
  if(pos > hH) {
      header.classList.add('header--unpinned');
  } else {
      header.classList.remove('eader--unpinned');
  }
};

window.addEventListener("scroll", () => {
  pos = window.scrollY;
  onScroll();
});

let lastPos = 0;

const onScroll = () => {
    if(pos > hH && pos > lastPos) {
      header.classList.add('header--unpinned');
    }
    if(pos < hH || pos < lastPos) {
      header.classList.remove('header--unpinned');
    }

    lastPos = pos;
};

const winH = window.innerHeight;
const docH = document.documentElement.scrollHeight;
const windBtm = docH - winH;

if(pos < hH || pos < lastPos || windBtm <= pos) {
  header.classList.remove('header--unpinned');
}