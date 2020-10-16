'use strict';

{
  // 次の単語
  function setWord() {
    word = words[Math.floor(Math.random() * words.length)]
    target.textContent = word;
    loc = 0;
  }
  // 単語リスト
  const words = [
    'red',
    'blue',
    'pink',
  ]
  // 単語の設定
  let word;
  // 何文字目を打っているか
  let loc = 0;

  // キー入力を取得
  const target = document.getElementById('target');
  setWord();

  document.addEventListener('keydown', e => {
    // 入力が正しくなければ、処理終了（早期リターン）
    if (e.key !== word[loc]) {
      return;
    }
    // 入力が正しければ、_に置き換える
    loc++;
    // 1: _ed
    // 2: __d
    // 3: ___
    target.textContent = '_'.repeat(loc) + word.substring(loc);

    // 入力後次の単語へ
    if (loc === word.length) {
      setWord();
    }
  });
}