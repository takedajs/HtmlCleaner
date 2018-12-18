
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

// サイトキーワードフォーム作成
window.setTimeout(
  function(){
    for (var i=0; i < 10; i++) {
      var input = document.createElement("input");
      input.setAttribute("type","text");
      input.setAttribute("class","keyword");
      // 登録されている情報がある場合
      if (storage_keywords != undefined) {
          input.setAttribute("value", storage_keywords[i]);
      }
      document.getElementById("keywords").appendChild(input);
    }
  },
  300
);

// 要素登録フォーム作成
window.setTimeout(
  function(){
    for (var i=0; i < 10; i++) {
      var input = document.createElement("input");
      input.setAttribute("type","text");
      input.setAttribute("class","element");
      // 登録されている情報がある場合
      if (storage_elements != undefined) {
        input.setAttribute("value", storage_elements[i]);
      }
      document.getElementById("elements").appendChild(input);
    }
  },
  300
);

// submitボタン押下時
document.addEventListener("click", function(e) {
  if (e.target.classList.contains("save")) {

    // ストレージ内のデータを削除
    browser.storage.local.remove("value");
    browser.storage.local.remove("element");

    var keywords = document.getElementsByClassName("keyword");
    var elements = document.getElementsByClassName("element");

    var array_keywords = [];
    var array_elements = [];

    for (var i = 0; i < keywords.length; i++) {
      array_keywords.push(keywords[i].value);
    }

    for (var i = 0; i < elements.length; i++) {
      array_elements.push(elements[i].value);
    }

    // フォームに登録された情報をストレージに保存
    browser.storage.local.set({'value': array_keywords, 'element': array_elements}, function() {});

    browser.tabs.reload();

    alert("Completion of registration");
  }
});
