var delete_count = 1;

window.setInterval(domDelete,1000);

function domDelete() {

  // 現在のサイトURLを取得
  var url = location.href;

  var storage_keywords = [];
  var storage_elements = [];

  // ストレージに登録しているサイトキーワード取得
  browser.storage.local.get('value', function(items) {
    storage_keywords = items.value;
  });

  // ストレージに登録している要素取得
  browser.storage.local.get('element', function(items) {
    storage_elements = items.element;
  });

  window.setTimeout(
    function(){
      var key = "";
      var isMatch = false;

      // 表示されてるURLが登録されてるサイトキーワードに一致するか判別
      for (var i = 0; i < storage_keywords.length; i++) {
        if (storage_keywords[i]) {
          var regexp = new RegExp(storage_keywords[i], 'i');
          isMatch = regexp.test(url);
          if (isMatch) {
            key = i;
            break;
          }

        }
      }

      if (isMatch) {
        // 指定要素を削除
        var test = document.getElementsByClassName(storage_elements[i]);
        for (var i = 0; i < test.length; i++) {
          test[i].remove();
          console.log("合計 " + delete_count + " 件の広告を削除");
          delete_count++;
        }
      }
    },
    300
  );
}
