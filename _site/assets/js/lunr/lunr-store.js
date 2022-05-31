var store = [{
        "title": "Post from yesteryear",
        "excerpt":"This is a post from the year 2013.  ","categories": ["jekyll-archives-master","test","source"],
        "tags": [],
        "url": "/jekyll-archives-master/test/source/post-from-yesteryear/",
        "teaser": null
      },{
        "title": "Tagged post",
        "excerpt":"This is a tagged post  ","categories": ["jekyll-archives-master","test","source"],
        "tags": ["Test Tag","tagged"],
        "url": "/jekyll-archives-master/test/source/tagged-post/",
        "teaser": null
      },{
        "title": "Introducing Jekyll archives!",
        "excerpt":"Post with category and tags.  ","categories": ["jekyll-archives-master","test","source","plugins"],
        "tags": ["new"],
        "url": "/jekyll-archives-master/test/source/plugins/introducing-jekyll-archives/",
        "teaser": null
      },{
        "title": "Pretty Slugs",
        "excerpt":"Post with 💎 category.  ","categories": ["jekyll-archives-master","test","source","💎"],
        "tags": [],
        "url": "/jekyll-archives-master/test/source/%F0%9F%92%8E/pretty-slugs/",
        "teaser": null
      },{
        "title": "無程式經驗，如何在Github用Jekyll建Blog (問題篇）",
        "excerpt":"本文寫給毫無程式經驗，想要用 Jekyll 在 Github 建 Blog 的新手，內含我如何參考網路教學文和問題解決的心得。 教學步驟文請看這篇。 在開始之前 我想在閱讀這篇文章的讀者，大多數已經決定要在 Github 用 Jekyll 建 Blog了，或許你已經讀過一輪 Google 搜尋 排名第一頁的所有文章，或是在做的過程中遇到一些問題。有幾件事情是我希望在開始之前就知道的，可以幫助我有效率的解決途中的 bug，和培養學習心態。 一、參考官方教學指南 我知道看原文感覺很麻煩，但這是最貼近開發者思維的方法。如果要別人使用他們的產品，教學說明要夠完整才行。其他工程師撰寫的中文教學文也是參考官方文件，加上他們實踐後的想法而來的。關於安裝和設置的教學，都寫得滿清楚的，使用的英文不會很複雜，就當作練習讀英文的開始也不錯。 可以先從這些開始： Jeykll 的官方設置文、Github相關教學文，以及我使用的 Jekyll Theme 設置指南。當初我沒有按照官網的說明，而是選了網路分享的中文教學跟著做，遇到問題後，我開始搜尋其他人的作法，但這讓我充滿困惑。每個工程師都有他自己做這些步驟的理由，但中途切換到不同的教學文，讓我不知道該從何做起才不會衝突。身為程式初學者，我無法判斷好壞，我只知道我的東西跑不出來。下次要做別的東西，我就學會要先看官方文件，再參考其他人的想法。 二、心態建立 就算有步驟文教學，有很大的機率，會有 bug。根據每個人系統不同（Windows、macOS)、安裝的程式版本內容差異，甚至是少一個空格或拼字錯誤，都有可能會花上許多時間修正。保持耐心，仔細閱讀錯誤訊息，若有不理解之處，可以參考 Troubleshooting Jekyll build errors for Github 。如果找不到的話，再丟上 Google 搜尋，或是請有程式經驗的朋友幫忙看看。如果還是無法解決，可以在 Jekyll論壇、 stackoverflow 發問。 提問的時候，包含這幾個部分，會讓人比較了解目前的狀況： 先簡單描述你想要達到的目標 已安裝的相關元件、版本 跑哪些指令的時候出現問題 有試過什麼方法和效果 附上錯誤訊息截圖 三、寫心得筆記 開始做的時候，可以開一個檔案紀錄學習過程。 對於初學者來說，看到一堆程式碼和落落長的英文教學，頭就痛了起來。儘管可以跟著教學文的步驟做，但通常這些都是有經驗的工程師所寫的文章，內容比較簡略，有許多基本的用詞還是需要自己另外學習。筆記下來，找到一些可以學習的方向。...","categories": [],
        "tags": ["Github Pages","Jekyll"],
        "url": "/jekyll-github-start/",
        "teaser": null
      },{
        "title": "無程式經驗，如何在Github用Jekyll建Blog (教學篇）",
        "excerpt":"本文寫給毫無程式經驗，想要用 Jekyll 在 Github 建 Blog 的新手，內含步驟文和實踐心得。   部落格之始  如果你想要建部落格，有滿多人會從現有的部落格平台（痞客邦、Medium）開始，只要註冊就可以開始發布內容了。   如果你想要擁有網站的自主權又不想碰太多程式編寫的部分，可以選擇 Wordpress.org ，眾多外掛任你挑，掌握SEO數據和資料庫。網路上有很多教學文，註冊後購買主機 (hosting) 和域名 (domain)，就建好了。我另一個部落格也是用 Wordpress 建置，有興趣的話，也許之後可以寫教學心得文。   如果你想要開始學寫程式，建立自己的 Github Page 是滿好的開始，可以紀錄學習的過程，也能夠為其他有相似問題的人提供解法。我個人而言，除了想要練習寫文章、學程式之外，更大的原因是不想花錢買主機和個人網域，就開始了簡單設置個人 Blog 的念頭。其實我連用 Wordpress 架的另一個網站也是用 Github Page 的方式，沒有去買主機。   Jekyll 是什麼？  Jekyll 是一個簡單的靜態網站生成器 (static site generator)，它是由 Ruby 編寫而成，將純文本文檔（Markdown, HMTL, CSS) 轉換成靜態網站。他很簡單直觀，適合初學者使用。網路上有滿多參考文章，和佈景主題可以選，跟著步驟做，很快就可以做出來了。最吸引人的地方是，Jekyll 可以和 Github Page 搭配，做出免費美觀的 Blog。  ","categories": [],
        "tags": ["blog"],
        "url": "/jekyll-github/",
        "teaser": null
      }]
