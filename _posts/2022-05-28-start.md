---
title: "無程式經驗，如何在Github用Jekyll建Blog (問題篇）"
date: 2022-05-28

tags:
 - Github Pages
 - Jekyll
---

本文寫給毫無程式經驗，想要用 Jekyll 在 Github 建 Blog 的新手，內含我如何參考網路教學文和問題解決的心得。教學步驟文請看[這篇](https://studyoverload.github.io/jekyll-github)。

## 在開始之前
我想在閱讀這篇文章的讀者，大多數已經決定要在 Github 用 Jekyll 建 Blog了，或許你已經讀過一輪 Google 搜尋 排名第一頁的所有文章，或是在做的過程中遇到一些問題。有幾件事情是我希望在開始之前就知道的，可以幫助我有效率的解決途中的 bug，和培養學習心態。


### 參考官方教學指南
我知道看原文感覺很麻煩，但這是最貼近開發者思維的方法。當然閱讀其他工程師撰寫的中文教學文也會滿有幫助，不過會建議可以先看看官方的說明。畢竟，這些開發者要別人使用他們的產品，教學文要夠完整才行。

可以先從這些開始： [Jeykll 的官方設置文](https://jekyllrb.com/docs/installation)、[Github相關教學文](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll)，以及[我使用的 Jekyll Theme 設置指南](https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide)。當初我先選了一個人的教學跟著做，遇到問題後，我開始搜尋其他人的作法，但這讓我充滿困惑。每個工程師都有他自己做這些步驟的理由，但中途切換到不同的教學文，讓我不知道該從何做起才不會衝突。身為程式初學者，我無法判斷哪些元件要不要安裝，哪些步驟是否適用於我的設置環境，我只知道我的東西跑不出來。如果下次要做別的 project，我會先從官方文件開始。


### 心態建立
就算有步驟文教學，有很大的機率，會有 bug。根據每個人系統不同（Windows、MacOS)、安裝的程式版本內容差異，甚至是少一個空格或拼字錯誤，都有可能會花上許多時間修正。保持耐心，仔細閱讀錯誤訊息，若有不理解之處，可以參考 [Troubleshooting Jekyll build errors for Github](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/troubleshooting-jekyll-build-errors-for-github-pages-sites) 。如果找不到的話，再丟上 Google 搜尋，或是請有程式經驗的朋友幫忙看看。如果還是無法解決，可以在 [Jekyll論壇](https://talk.jekyllrb.com/)、 [stackoverflow](https://stackoverflow.com/) 發問。

提問的時候，包含這幾個部分，會讓人比較了解目前的狀況：
* 先簡單描述你想要達到的目標
* 已安裝的相關元件、版本
* 跑哪些指令的時候出現問題
* 有試過什麼方法和效果
* 截圖錯誤訊息

## 執行過程中
開始做的時候，可以開一個檔案紀錄學習過程。

對於初學者來說，看到一堆程式碼和落落長的英文教學，頭就痛了起來。儘管可以跟著教學文的步驟做，但通常這些都是有經驗的工程師所寫的文章，內容比較簡略，有許多基本的用詞還是需要自己另外學習。筆記下來，找到一些可以學習的方向，

如果你打算發布到部落格的話，使用 Markdown 文件寫下來，之後就可以直接套用到 Jekyll 的 post 裡面，或是存到電腦裡面 。或者你可以使用 [Notion](https://www.notion.so/product) 、[Obsidian](https://obsidian.md/) 之類的知識資料庫，整合所有的學習資源和心得，也是滿方便日後應用。

### 寫心得筆記
一邊做，一邊紀錄所學，也是加深記憶和提升學習效果的方法。不需要去想說有沒有人看，寫得完不完整。這是給自己的筆記，如果能順便幫助到其他人也很好。況且，初學者的優勢在於什麼都不懂，能夠同理別人的基礎問題，幫助其他初學者從0開始。舉一個簡單的指令為例：
```
進到本機的 blog 資料夾，執行 bundle
```

像這樣短短一句話，只要你不知道要如何進到指定的資料夾中，或是執行 bundle 出現錯誤，就有可能卡關很久。他的意思是：

   1. 進入終端機
   2. 輸入 `cd blog`
   3. 就會進入本機名為 blog 的資料夾
   4. 輸入 `bundle`
   
   `cd`: 切換目錄

   `bundle`: 輸入 bundle 指令的用意是確保 gems 所安裝的套件是你所需要的，能順利跑出來不會亂掉。
   出現錯誤的話，如果說有 missing gem 的話，就輸入  `gem install jekyll bundler` 安裝。
`

不瞞你說，我幾乎看完了關於如何用 Jekyll 模板套用在 Github 的中文文章，按照裡面的步驟做，還是滿頭問號，花了至少 8小時在 setting 上面，無法順利跑出程式碼。不知道為什麼，在終端機  (terminal) 裡面跑的時候，一直出現錯誤 (Error)。於是我把顯示為「錯誤訊息」的內容搜尋一遍，又翻了一堆英文教學和論壇，把每個人的解法複製貼上，一直試到解決為止。

這可以說是最土法煉鋼的方式，因為我不懂終端機的常用指令，也不了解要如何 debug。我就把這些錯誤訊息截圖下來，反覆測試「解除安裝、重新安裝、設定不同版本、在不同路徑下指令」，一個個試這些看不懂的指令，最後找出了規律，順利發布在我的 github.io 頁面。
