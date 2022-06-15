---
title: "無程式經驗，如何在GitHub用Jekyll建Blog (設置篇）"
date: 2022-06-08
toc: true
toc_label: "目錄"

tags:
 - GitHub Pages
 - Jekyll
 - Blog
 
header:
  overlay_color: "#015"
  overlay_filter: "0.3"
  overlay_image: /assets/images/setup.jpeg
  
sidebar:
  nav: "foo"
  
---
本文寫給毫無程式經驗，想要用 Jekyll 在 GitHub 建 Blog 的新手，內含步驟文和實踐心得。

## 部落格之始
如果你想要建部落格，有滿多人會從現有的部落格平台（痞客邦、Medium）開始，只要註冊就可以開始發布內容了。

如果你想要擁有網站的自主權又不想碰太多程式編寫的部分，可以選擇 [Wordpress.org](https://wordpress.org) ，眾多外掛任你挑，掌握SEO數據和資料庫。網路上有很多教學文，註冊後購買主機 (hosting) 和域名 (domain)，就建好了。我另一個部落格也是用 Wordpress 建置，有興趣的話，也許之後可以寫教學心得文。

如果你想要開始學寫程式，建立自己的 GitHub Page 是滿好的開始，可以紀錄學習的過程，也能夠**為其他有相似問題的人提供解法**。我個人而言，除了想要練習寫文章、學程式之外，更大的原因是不想花錢買主機和個人網域，就開始了簡單設置個人 Blog 的念頭。其實我連用 Wordpress 架的另一個網站也是用 GitHub Page 的方式，沒有去買主機。

## Jekyll 是什麼？
[Jekyll](https://jekyllrb.com/) 是一個簡單的靜態網站生成器 (static site generator)，它是由 [Ruby](https://zh.wikipedia.org/zh-tw/Ruby) 編寫而成，將純文本文檔（Markdown, HMTL, CSS) 轉換成靜態網站。他很簡單直觀，適合初學者使用。網路上有滿多參考文章，和佈景主題可以選，跟著步驟做，很快就可以做出來了。最吸引人的地方是，Jekyll 可以和 GitHub Page 搭配，做出免費美觀的網頁。

## Github 是什麼？
  GitHub 是公開的原始碼代管平台，你可以上傳專案，紀錄自己寫過什麼程式、對別人的開發做了什麼貢獻。通常工程師要投履歷的時候都會附上自己的 GitHub 頁面，展現過往的參與和 side projects。概念就像是作品集的倉庫，你可以看所有公開的專案，也可以社群互動。像這次使用的 Jekyll 模板就是從開發者的 GitHub 下載，根據它的說明安裝，一步步設置。
  
## 怎麼做？
如同我在 [問題篇](/jekyll-github-start/) 所說的，建議你參考官方教學，通常那是最直觀的方法。這裡不會太多手把手的教學，僅分享我的作法和心得。

### 創辦 GitHub 帳戶
首先到 [GitHub](https://github.com/) 註冊帳戶，一般人使用免費版的就可以了，付費方案代表你不想公開上傳內容。到你註冊的郵箱驗證完後，就到你的頁面建立 Repositories，中文是倉庫/倉儲，放置你的程式碼的地方。

點選 `New repository` 創造新的倉庫，記得你 `Repository name` 設成 `你的帳號名.github.io`，這樣你做的網站的域名才會是 `你的帳號名.github.io`。更詳細的教學，你可以參考 [GitHub 的官方文件](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll) 。

### 安裝 Jekyll 和 Git
到 [Jekyll的安裝指南](https://jekyllrb.com/docs/installation/)，依照你的電腦系統下載安裝相關元件。必裝的有：
* Ruby 版本 2.5.0 以上（建議不要高於2.7.0，會跑不出來）
* 建議裝 rvm 管理切換成不同版本的 ruby
* 裝 RubyGems
* 裝 GCC, Make

當初我光是裝這幾個就卡關好幾個小時。Ruby 一直出現錯誤訊息，翻了論壇才知道版本不能太高。翻了很久找不到要如何下載 GCC，結果在 [Troubleshooting](https://jekyllrb.com/docs/troubleshooting/) 這裡就很清楚的寫 macOS 建議裝 xcode 裡面會附 GCC，不用另外找下載點。🤦  (再次強調看官方文件的重要性)

1. 都安裝好了，就在終端機輸入 `gem install jekyll bundler` 
2. 創造存取部落格文件資料夾（例如：路徑為本機的 myblog 資料夾)，輸入 `jekyll new myblog`
3. 切換目錄到你的資料夾，輸入 `cd myblog`
4. 建立網站且可以在本地主機瀏覽 (local server)，輸入 `bundle exec jekyll serve`
5. 就可以在瀏覽器輸入 `https;//localhost:4000` 預覽你的網站囉

### 找你喜歡的 Jeykll Theme
你可以自己從頭建網站設計和後台，或是直接套用現成版型再慢慢修。這裡有一些[模板網站](https://jekyllrb.com/docs/themes/)，提供參考。原則上選評分星星高、比較少錯誤的模板。像是我選的 [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) 廣受好評又幾乎沒有 bug，對初學者來說相當友善。有些模板外觀滿好看的，但其實簡單模板也有發揮空間。之後都還可以摸索，把網站改成你理想的樣子。

套用方式和相關設定都在開發者的指南 (Guide)，花點時間讀，每次做一小部分，或是搜尋其他人如何修改版型，也能得到一點靈感。我也還在持續修改中...

### 發布至網站
當你在本地主機做好內容，準備正式發佈到網路前，你有兩個方式上傳檔案（就我知道的方法）

* 在 Repository 點選 `Upload files`
* 下載 GitHub Desktop，將資料上傳到 Repository

我是使用第二種方法，因為我不想每次新增文章、修改網站外觀的時候，都要登入 GitHub 網頁帳戶（有點懶），將整個資料夾重新上傳（忘了哪些有修改，乾脆整個傳）。 GitHub Desktop 的好處是：會自動紀錄你修改的內容，上傳的時候會有版本紀錄。萬一不喜歡新上傳版本，也可以回復到前一本的狀態。


## 結語
如果你想學程式，強烈建議在部落發布寫學習筆記，[這篇文章](https://dotblogs.com.tw/hatelove/2017/03/26/why-engineers-should-keep-blogging)點出了許多好處。就算你沒有要當工程師，只是好玩，寫部落格這件事也是保持學習動能的方法。

無論什麼原因，你點進了這篇文章，看到這裡，就去建自己的部落格吧！無論是 Medium、Wordpress、Jekyll 什麼方式都好，寫什麼都好，生活感悟、職場心得、分享知識等，你獲得的好處比想像中的多太多了。
（一年後再回來告訴你好處有什麼 😅)
