- [ ] 10/4 과제 제출 1440px, 레이아웃 구조 제작
- [ ] 10/7 1280px 보다 큰 규격에 해당하는 레이아웃 구조
- [ ] 탭1
- [ ] 탭2
- [ ] 포지션 수정
- [ ] 포지션 한 번 더
- [ ] 모달 한 번



```html
      <article id="subBox">
        <h2 class="blind">subBox</h2>
        <div class="sub_img_area">img</div>
        <div class="sub_con_area clearfix">
          <p>subBox</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium nihil doloribus</p>
          <div class="button"><img src="../img/button/btn_01.png" art="-바로가기"></div>
          <div class="button"><img src="../img/button/btn_02.png" art="-바로가기"></div>
        </div>
      </article><!--subBox-->
```

```css
/*subBox=========================================*/
#subBox {
width: 100%; height: 350px;
box-sizing: border-box; padding: 50px 170px 0;
background-color: #ffbd55;
}
.sub_img_area{
  float: left;
  width: 460px; height: 300px;
  background-color: #efefef;
}
.sub_con_area{
  float: right;
  width: auto; height: auto;
  margin-top: 45px;  margin-right: 170px; 
}
.sub_con_area p:first-child{
  width: auto; height: auto;
  font-size: 40px; font-weight: 900;
  margin-bottom: 17px;
}
.sub_con_area p:nth-child(2){
  width: 300px; height: auto;
  font-size: 18px; font-weight: 700;
  margin-bottom: 11px;
}
.sub_con_area div{
  float: left;
  width: auto; height: auto;
  margin-right: 30px;
}


```

