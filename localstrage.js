// 表示したページの情報を記録する

$(document).on('click', '.ls', function() {
    
    const recentViews = [{
        url: url = $(this).attr("href"),
        title: title = this.text,
    }];

    const savePages = 20;
    const recentViewsStart = JSON.parse(localStorage.getItem('recentViews'));

    if (recentViewsStart) 
    {
      for(i=0;i<savePages;i++) 
      {
          if (recentViewsStart[i] && recentViews[0].url !== recentViewsStart[i].url) 
          {
            recentViews.push(recentViewsStart[i]);
          }
      }
    }
    // JSON文字列に変換して保存
    // keyとvalueに対して 1:1なら何も変換しなくて良いが、オブジェクトにして保存する場合はJSON.stringifyを用いる必要がある
    localStorage.setItem('recentViews',JSON.stringify(recentViews));

});

// 参考URL
// https://www.tam-tam.co.jp/tipsnote/javascript/post5978.html