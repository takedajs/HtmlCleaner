
window.setInterval(deleteDom,1000);

function deleteDom() {

  // 現在のサイトURLを取得
  var url = location.href;

  // 登録しているサイトキーワードを取得

  var storage_keywords = [];
  browser.storage.local.get('value', function(items) {
    storage_keywords = items.value;
  });

  // サイトキーワードと現在のサイトURLが一致するか判別

  // 一致する場合、サイトキーワードのkeyを取得

  // 取得したkeyと一致するelementを取得する

  // サイトのhtmlから一致するelementを削除する

  //var test = document.getElementsByClassName("promoted-tweet");
  //
  //for (var i = 0; i < test.length; i++) {
  //  test[i].remove();
  //}
}