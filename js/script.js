'use strict';

(function onClick() {
  const btn = document.querySelector('#btn');
  btn.addEventListener('click', () => {
    alert('Hey, you clicked the button!');
  });
})();