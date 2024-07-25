const clieckEl = document.querySelector('.onclick');

clieckEl.addEventListener('click', () => {
  console.log('click');
});

const dblClickEl = document.querySelector('.ondblclick');

dblClickEl.addEventListener('dblclick', () => {
  console.log('double click');
});

const mouseMoveEl = document.querySelector('.onmousemove');

mouseMoveEl.addEventListener('mousemove', () => {
  console.log('mouse move');
});

const mouseEnterEl = document.querySelector('.onmoueseenter');

mouseEnterEl.addEventListener('mouseenter', () => {
  console.log('mouse enter');
});

const mouseLeaveEl = document.querySelector('.mouseleave');

mouseLeaveEl.addEventListener('mouseleave', () => {
  console.log('mouse leave');
});

const mouseWheelEl = document.querySelector('.onmousewheel');

mouseWheelEl.addEventListener(
  'wheel',
  (event) => {
    console.log('mouse wheel');
    event.preventDefault();
    event.stopImmediatePropagation();
  },
  { passive: false, capture: true }
);

// mouseWheelEl.addEventListener('contextmenu', () => {
//   console.log('context menu');
//   //   event.preventDefault();
//   return false;
// });

function test() {
  console.log(2 / 3);
}

function test2() {
  return 2 / 3;
}

test();
console.log(3 * test());
console.log(3 * test2());
