// 保存されているものを表示するコード

  $(document).ready(function() {
    // contentsRecentViewsはローカルストレージの名前
    const recentViewsList = JSON.parse(localStorage.getItem('recentViews'));

    const displayPages = 2;
    for(i=0; i < displayPages; i++)
    {
      if(recentViewsList)
      {
        const anchor = $("<a></a>",{
          href: recentViewsList[i]['url'],
          text: recentViewsList[i]['title'],
        });

        const list = $("<li></li>").append(anchor);

        $('.displayLocalstrage').append(list);
      }
    }

});

// 参考URL
// https://qiita.com/ounziw/items/6501502262ff33aacbbc
// http://semooh.jp/jquery/api/manipulation/append/content/