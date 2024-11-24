//main.jsで呼び出され実際に実行するスクリプト////////////////////////////////////////////////
//htmlの各要素を持つクラス
class HtmlElement {
  constructor() {
    this._html = document.getElementsByTagName("html")[0];
    this.html = this._html.outerHTML;
    this.title = this._html.getElementsByTagName("title")[0].innerHTML;
    this._html
  }
}

//メイン関数
function main() {
  alert("main");
}

main();