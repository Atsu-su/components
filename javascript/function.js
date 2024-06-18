/* =========================================
ユーティリティ
========================================= */

  /* -----------------------------------------
  c()
  機能：コンソールへの標準出力
  ----------------------------------------- */
  const c = (value) => {
    console.log(value);
  }

  /* -----------------------------------------
  setPageTitle()
  機能：titleタグの値をファイル名に変更する
  ----------------------------------------- */
  const setPageTitle = () => {
    // 現在のページのURLを取得する
    var currentPageUrl = window.location.href;
    // ファイル名のみを抽出する
    var fileName = currentPageUrl.split("/").pop();
    // 拡張子を除去する
    var pageTitle = fileName.split(".")[0];
    // <title> 要素にタイトルを設定する
    document.title = pageTitle;
  }

/* =========================================
クラスの操作関連
========================================= */

  /* -----------------------------------------
  addClass()
  機能：クラスの追加
  特記：クラス名は可変長の引数が可能
  ----------------------------------------- */
  const addClass = (element, ...className) => {
    element.classList.add(...className);
  }

  /* -----------------------------------------
  removeClass()
  機能：クラスの削除
  特記：クラス名は可変長の引数が可能
  ----------------------------------------- */
  const removeClass = (element, ...className) => {
    element.classList.remove(...className);
  }

  /* -----------------------------------------
  removeClassAll()
  機能：クラスの削除
  特記：クラス名は可変長の引数が可能
  対象：引数に指定されたのクラスが存在している要素全て
  ----------------------------------------- */
  const removeClassAll = (elements, ...className) => {
    elements.forEach((element) => {
      element.classList.remove(...className);
    });
  }

  /* -----------------------------------------
  toggleClass()
  機能：クラスの付け替え
  ----------------------------------------- */
  const toggleClass = (ele, className) => {
    if (ele.classList.contains(className)) {
      ele.classList.remove(className);
    } else {
      ele.classList.add(className);
    }
  }

/* =========================================
値の取得関連
========================================= */

  /* -----------------------------------------
  getHeight()
  機能：borderを含めた要素の高さを取得する
  ----------------------------------------- */
  const getHeight = (element) => {
      element.style.display = 'block';
      let height = element.offsetHeight;
      element.style.display = 'none';
      return height;
  }

  /* -----------------------------------------
  getWidth()
  機能：borderを含めた要素の幅を取得する
  ----------------------------------------- */
  const getWidth = (element) => {
      element.style.display = 'block';
      let width = element.offsetWidth;
      element.style.display = 'none';
      return width;
  }

/* =========================================
アニメーション関連
========================================= */

  /* -----------------------------------------
  fadeOut()
  機能：opacityを下げ、最終的にdisplay:noneとなる
  ----------------------------------------- */
  const fadeOut = (ele, speed = 'medium') => {
    const speedList = {slow: 100, medium: 50, fast: 10};
    if (speedList[speed]) {
      ele.style.opacity = 1;
      let t = 1;
      let interval = 1;
      const coefficient = speedList[speed];
      fadeOutFn(ele, coefficient, t, interval);
    }
  }

  const fadeOutFn = (ele, coefficient, t, interval) => {
    let opacity = ele.style.opacity - Math.exp(t/100)/coefficient;
    t += interval;

    ele.style.opacity = opacity;
    const timeId = setTimeout(function(){
      fadeOutFn(ele, coefficient, t, interval);
    }, 50);
    if (opacity < 0) {

      // 新たに追加した（前はvisibility: hidden;）
      ele.style.display = 'none';

      clearTimeout(timeId);
    }
  }

  /* -----------------------------------------
  fadeIn()
  機能：opacityを上げ、最終的にopacity:1となる
  ----------------------------------------- */
  const fadeIn = (ele, speed = 'medium') => {
    const speedList = {slow: 100, medium: 50, fast: 10};
    ele.style.display = 'block';
    ele.style.opacity = 0;
    if (speedList[speed]) {
      let t = 1;
      let interval = 1;
      const coefficient = speedList[speed];
      fadeInFn(ele, coefficient, t, interval);
    }
  }

  const fadeInFn = (ele, coefficient, t, interval) => {
    let opacity = parseFloat(ele.style.opacity) + 0.1 * t / coefficient;

    t += interval;
    ele.style.opacity = opacity;

    const timeId = setTimeout(function(){
      fadeInFn(ele, coefficient, t, interval);
    }, 10);

    if (opacity > 1) {
      clearTimeout(timeId);
      ele.style.opacity = 1;
    }
  }

/* -----------------------------------------
XXX()
機能：XXX
----------------------------------------- */