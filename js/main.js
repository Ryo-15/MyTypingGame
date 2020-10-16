'use strict';

{
  // 単語の設定
  const word = 'red';
  // 何文字目を打っているか
  let loc = 0;

  // キー入力を取得
  const target = document.getElementById('target');
  target.textContent = word;

  document.addEventListener('keydown', e => {
    // 文字入力の判定
    if (e.key === word[loc]) {
      loc++;

      // 1: _ed
      // 2: __d
      // 3: ___

    }
  });
}