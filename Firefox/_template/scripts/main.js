//ブラウザを巡回してタブを切り替えながらスクリプトを実行////////////////////////

//content_script.jsを実行する関数
function execute_content_script(tabId) {
  browser.tabs.executeScript(tabId, { file: "/scripts/content_script.js" });
}

//ツールバーに表示されたボタンを取得
const button = document.getElementById("button");

//ボタンクリック時すべてのタブでcontent_script.jsを実行
button.addEventListener("click", (e) => {
  browser.tabs.query({}, tabs => {
    let index = 0;

    function activateAndExecute() {
      if (index < tabs.length) {
        let tab = tabs[index];
        browser.tabs.update(tab.id, { active: true }).then(() => {
          execute_content_script(tab.id);
          index++;
          setTimeout(activateAndExecute, 1000); // 1秒待って次のタブへ
        });
      }
    }

    activateAndExecute();
  });
});
