- [ ] 10/4 과제 제출 1440px, 레이아웃 구조 제작
- [ ] 10/7 1280px 보다 큰 규격에 해당하는 레이아웃 구조
- [ ] vscode snippets 다시 작성! css 넣어서! 넣고 지워

```js
"html_add_css": {
  "prefix": "ht1",
  "body": [
    "<!DOCTYPE html>",
    "<!-- ${TM_FILENAME_BASE}.html -->",
    "<html lang=\"ko-KR\" class=\"no-js\">",
    "",
    "<head>",
    "  <meta charset=\"UTF-8\">",
    "  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">",
    "  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
    "",
    "  <link rel=\"stylesheet\" href=\"../css/common/reset.css\">",
    "  <link rel=\"stylesheet\" href=\"../css/common/common.css\">",
    "  <link rel=\"stylesheet\" href=\"../css/src/${TM_FILENAME_BASE}.css\">",
    "",
    "  <script src=\"../js/common/modernizr-custom.js\"></script>",
    "",
    "  <title>${1}</title>",
    "  <link rel=\"shortcut icon\" href=\"../favicon.png\" type=\"image/png\">",
    "  <link rel=\"apple-touch-icon\" href=\"../favicon.png\">",
    "",
    "</head>",
    "<body>",
    "  <!-- layout -->",
    "  <div id=\"wrap\">",
    "    <h1><a href=\"./a_00_content.html\">웹</a></h1>",
    "    <hr />",
    "  </div><!--#wrap-->",
    "",
    "  <!-- script -->",
    "  <script>",
    "  </script>",
    "</body>",
    "</html>"
  ],
  "description": "html_add_css"
}
```













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

