# 01번



```html
<!doctype html>
<!--문서이름-->
<html lang="ko-KR">
    <head>
        <meta charset="UTF-8">
        <meta http="X-UA-Compatible" content="IE=edge">
        <meta name=viewport content="width=device-width, inital-scale=1.0">
        <title></title>
        <!--style-->
        <style></style>
    </head>
    <body>
        <!--layout-->
        
        <!--script-->
        <script></script>
    </body>
</html>
```

# 02번

```html
<!doctype html>
<html lang="kr_KO">
     <head>
         <meta charset=“UTF-8”>
             <title>웹페이지 구축하기</title>
         <style>
             body, html {margin:0; padding:0; border:none;}
         </style>
     </head>
     <body>
         <h1>내용파악하기</h1>
         <h2>
            <a href=“http://naver.com">네이버로이동</a>
        </h2>
     </body>
</html>
```

# 03번

```css
#id { }
.class { }
```

ID - 중복사용 불가능하다, 연결점 O, 

class - 여러개의 값O, 중복으로 사용 가능

# 04번

```html
<img src="" alt="" />
```

**src** 이미지의 주소

**alt** 다양한 사유로 이미지가 나오지 않을 때 대신 나오는 문구 (접근성)



# 05번

## id=“adBox” 내부의 a태그 전체선택

```html
#adBox a { }
```

## id=“adBox” 내부의 광고상자  ( class=“ad_01” ~ “ad_04” ) 크기  가로:100%, 세로:100%,  배경색(각각 #333, #369, #963, #693 )

```html
#adBox>div { width:100%; height:100%;}
#adBox .ad_01{ background-color:#333;}
#adBox .ad_02{ background-color:#258;}
#adBox .ad_03{ background-color:#963;}
#adBox .ad_04{ background-color:#693;}
```

## h2,h3,p의 각각 생기는 여백을 제거하는  방법

```html
h2, h3, p { margin:0; padding:0; }
```

모든 브라우저는 각 엘리먼트에 개별로 여백, 외곽선, 기타옵션 설정되어있다.

(`RESET.css`)-기본설정되어있는 css를 초기화 시키는 것



