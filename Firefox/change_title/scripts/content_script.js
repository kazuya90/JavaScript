//main.jsで呼び出され実際に実行するスクリプト///////////////////////////////////////
//\tで区切られた文字列を辞書型に変換する関数
function convertToDictionary() {
  var dictionary = {};
  var lines = inputValue.split("\n");
  for (var i = 0; i < lines.length; i++) {
    var words = lines[i].split("\t");
    dictionary[words[1]] = words[0];
  }
  return dictionary;
}

function changeTitle(_dict) {
  var title = document.querySelectorAll('title')
  //urlを取得
  var url = location.href;
  //辞書にある場合はタイトルに追加
  title[0].innerText = _dict[url] + title[0].innerText
}

//メイン関数
function main() {
  var inputValue_dict = convertToDictionary();
  changeTitle(inputValue_dict);
}

main();
