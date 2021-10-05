- [ ] 10/4 과제 제출 1440px, 레이아웃 구조 제작
  - 독파 챌린지는 js 처리되기 때문에 나중에 fixed처리, 지금은 absolute 처리해야 함. 여기서 레프트 기준으로 하면 나중에 js에서 fixed처리할 때 (브라우저 기준으로 변경되기 때문에) 번거로워 지니까 가운데 기준으로 해야함( left:50% marin-left:-nnpx ) 이런너낌~!
  - 이미지X
  - 메뉴, 호버XX

- [ ] 10/7 1280px 보다 큰 규격에 해당하는 레이아웃 구조

- 1280 고정 기준





- [ ] gnb 시멘틱 구조로 작성, html, position 
- [x] 추천도서, 신간도서 포지션으로 수정
- [x] 독파 포지션 전체로 잡기
- [x] 수상도서, 매거진 포지션 풀기
- [x] 버튼→ book_list 순서 포지션으로 변경
- [ ] 샵 버튼, 포지션으로 수정, 더보기가 가장 나중에
- [ ] a, button 태그 추가



- [ ] 웹진부터 브랜드 리스트까지 이어서 진행



```html
<section id="awardBox">
    <div class="award_title">
        <div class="title_inner clearfix">
            <h2>수상도서</h2>
            <div class="award_tab">
                <button class="title_tab_btn" type="button">국내외 문학상</button>
                <button class="title_tab_btn" type="button">우리동네 문학상</button>
            </div>
        </div>
    </div><!-- // award_title -->
    <div class="award_inner am_inner_area">
        <div class="lr_btn">
            <button class="next" type="button">next</button>
            <button class="prev" type="button">prev</button>
        </div>
        <ul class="book_part clearfix">
            <li class="book_con">
                <div class="book_con_click">
                    <p class="title"><a href="#">title</a></p>
                    <p class="content"><a href="#">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat tempora voluptatem magnam esse quia rem.</a></p>
                </div>
            </li>
            <li class="book_con"><a href="#">list</a></li>
            <li class="book_con"><a href="#">list</a></li>
            <li class="book_con"><a href="#">list</a></li>
            <li class="book_con"><a href="#">list</a></li>
        </ul>
        <div class="more_btn"><a href="#">More view</a></div>
    </div><!-- //award_inner -->
</section><!-- //awardBox -->
```

```css
#awardBox{
  position: relative;
  width: 100%; height: auto;
  padding: 105px 0;
}
  .award_title{
    width: 100%; height: 170px;
    padding-top: 104px; box-sizing: border-box;
    background-color: #333;
  }
    /* .title_inner{} */
      .title_inner h2{
        float: left;
        color:#fff;
      }
      /* .title_tab_btn{} */
  .award_inner{
  }
    /*.book_part{ }
    .lrmore_btn{}
    .lrmore_btn .next{
    }
    .lrmore_btn div{
    }
    .lrmore_btn a{
    }
    .lrmore_btn .prev{
    }
    */
```

```html
<section id="magazineBox">
    <div class="magazine_title">
        <div class="title_inner clearfix">
            <h2>Magazine</h2>
            <div class="magazine_tab title_tab_btn"></div>
        </div>
    </div><!-- //magazine_title -->
    <div class="magazine_inner am_inner_area">
        <ul class="book_part clearfix">
            <li class="book_con">
                <div class="book_con_click">
                    <p class="title"></p>
                    <p class="content"></p>
                </div>
            </li>
            <li class="book_con"></li>
            <li class="book_con"></li>
            <li class="book_con"></li>
            <li class="book_con"></li>
        </ul>
        <div class="lrmore_btn"></div>
    </div>
</section><!-- //magazineBox -->

```

