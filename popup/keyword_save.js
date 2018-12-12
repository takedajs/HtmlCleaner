create_input();

/**
 * キーワードを登録するためのフォームを作成。
 */
function create_input(){
    var storage_keywords = [];
    var storage_elements = [];

    browser.storage.local.get('value', function(items) {
        storage_keywords = items.value;
    });

    browser.storage.local.get('element', function(items) {
        storage_elements = items.element;
    });

    // コールバック関数より後に実行させる
    window.setTimeout(
        function(){

            // キーワード登録フォーム作成
            for (var i=0; i < 10; i++) {
                var input = document.createElement("input");
                input.setAttribute("type","text");
                input.setAttribute("class","keyword");
                // 登録されている要素がある場合
                if (storage_keywords != undefined) {
                    input.setAttribute("value", storage_keywords[i]);
                }
                document.getElementById("keywords").appendChild(input);
            }
        },
        300
    );

    // コールバック関数より後に実行させる
    window.setTimeout(
      function(){
        // キーワード登録フォーム作成
        for (var i=0; i < 10; i++) {
          var input = document.createElement("input");
          input.setAttribute("type","text");
          input.setAttribute("class","element");
          // 登録されている要素がある場合
          if (storage_elements != undefined) {
            input.setAttribute("value", storage_elements[i]);
          }
          document.getElementById("elements").appendChild(input);
        }
      },
      300
    );
}

document.addEventListener("click", function(e) {
    if (e.target.classList.contains("save")) {

        // ストレージ内のデータを削除
        browser.storage.local.remove("value");
        browser.storage.local.remove("element");

        var keywords = document.getElementsByClassName("keyword");
        var elements = document.getElementsByClassName("element");

        var array_keywords = [];
        for (var i = 0; i < keywords.length; i++) {
            array_keywords.push(keywords[i].value);
        }

      var array_elements = [];
      for (var i = 0; i < elements.length; i++) {
        array_elements.push(elements[i].value);
      }

        browser.storage.local.set({'value': array_keywords, 'element': array_elements}, function() {});

        browser.tabs.reload();

        alert("Completion of registration");
    }
});