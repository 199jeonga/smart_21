# 210915_HTML 및 CLI 명령어

# 09.14-15

## 키보드 언어 정리

``` 
` 백틱
^ 캐럿
& 앤퍼센트, 엔드키, AnP, 그리고
| 원사인, or
\ 백슬러쉬
/ 슬러쉬
* 모든, Astarisk
$ 끝
(소괄호) 
_ 언더바
- 대쉬
<> 꺽쇠
: 정의
; 정의를 끝낼 때
```

## VScode 단축키



**여러 줄 동시에 작성** ctrl + alt + ↑ or ↓

**같은 문구 동시 선택** ctrl + D

**하위폴더를 지정할 때** (윈도우는 둘다 가능하지만, 맥은 /만 가능하기 때문에 /를 사용하는 것이 좋다.)

- / ▶ linux, unix(mac)

- \ ▶ window 방식 

VScode-여러줄 같은 문구 동시에 넣을 때 ctrl+shift+p ▶ emmit > wrap(단축키 지정하면 편함!) ▶ <> 신경쓰지 않고 적기

- a[href=http://naver.com class=box]
- 첫번째태그 > 두번째태그

**내용 숫자 늘리는 단축키** (플러그인 Increment Selection) li ctrl+alt+L

**같은 형제 단일 때, 중간에 내용을 추가하고 싶으면**

- 아래에 빈칸 추가 ctrl + Enter
- 위에 빈칸 추가 shfit +  ctrl + Enter

**한줄 복사** shift + alt + ↑ or ↓

**한 줄 잘라내기** shift + del



[깃대신에 사용하는 깃으로 만드는 홈페이지](https://vercel.com/199jeonga/basic)



## 파일, 폴더 경로

> /루트(설정최상위)      ./현재위치     ../현재 위치의 상단 폴더

`http://naver.com` ://는 인터넷 프로토콜, 약속



- **절대경로** (정확하고 변하지 않는 위치) `c:/program/..`

- **상대경로** (위치를 알려주어 찾아갈 수 있게 하는 것) `./../폴더명/파일명`



## HTML

**`<!-- -->`** ◀ 주석처리, 문서의 첫째줄에는 사용하지 않아야 함.

**ctrl+/  **◀ 눌러도 주석처리 가능!



### 폴더, 파일 기준

- 웹 구현 시 지정된 기준폴더를 설정하여 최상단으로 인식
- 최초로 인식하는 파일은 지정된 위치기준 가장 상위 폴더에서 `index.html`를 인식시켜야 함
- 웹페이지를 구현하는 **<u>서버 먼저 동작 후</u>** 다음 차례 진행

**최상단 폴더를 기준으로 VScode 실행**

`    <meta      charset=   "UTF-8">`

태그/요소   속성/프로퍼티  속성값/벨류



### head 태그

#### 해드 기본 태그

```html
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=divice-width, inital-scale=1.0">
    <title>test</title>
    <!--CSS/Design-->
    <style>
      /* design (CSS주석표시)*/
      body {background-color:#fda;}
    </style>
</head>
```

#### ▼ 반응형을 위한 헤드 내 메타태그

`    <meta name="viewport" content="width=divice-width, initial-scale=1.0">`



#### ▼ 비표준화 브라우저 용 메타태그

`    <meta http-equiv="X-UA-Compatible" content="IE=edge">`  

- UA-Compatible=표준화된 브라우저 형식

- X-UA-Compatible=표준이 아닌 것

- edge=익스플로러의 가장 마지막 버전



### body 태그

<u>ctrl + [ or ]키를 누르면 문장 전체를 들여쓰기, 내어쓰기 할 수 있다.</u>



#### 이동 태그

```html
<a href="./main.html">메인 페이지로 이동</a>
```

▶ ./ 현재 폴더에서 시작한다는 뜻!



```
    <script>
      window.location = "./main.html";
      //스크립트에선 주석을 이렇게 표현
    </script>
```

html이지만, html이 아닌 스크립트언어이며,

window. 은 삭제가 가능 = 브라우저 내에서 이렇게 실행하겠다는 뜻이라 삭제가 가능

main으로 돌아오겠음 이라는 뜻





#### H태그, 제목 태그

![h1태그 화면에 표시](../add_data/html_basic/htmlCode_img1.png)

```html
    <h1>작성된 문서에서 가장 중요한 제목! 한 번만 사용 가능</h1>
    <h2>두번째로 중요한 제목, H1의 하위 영역의 제목</h2>
    <h3>세번째로 중요한 제목, H2의 하위 영역의 제목</h3>
    <h4>네번째로 중요한 제목, H3의 하위 영역의 제목</h4>
    <h5>다섯번째로 중요한 제목, H4의 하위 영역의 제목</h5>
    <h6>영역을 설정하는 제목 요소의 형태 중 가장 하위 영역의 요소</h6>
```



#### 선긋기

![hr태그 화면에 표시](../add_data/html_basic/htmlCode_img2.png)

```html
    <hr />
```



#### 문단(설명하는 요소)

![문단태그 화면에 표시](../add_data/html_basic/htmlCode_img3.png)

```html
    <p>paragraph, 문단을 위미하는 요소. 줄바꿈을 위해서는<br /> 코드를 삽입, 설명을 하는 요소</p>

    <pre>
    내용을 구성하는 P와 유사한 기능과 의미를 가졌으나,
    pre는 현재 에디터 화면 그대로를 표현한다.
    </pre>
```

P태그 내에 DIV 태그를 담을 수는 없다.



#### 인용문 표현

![인용문태그 화면에 표시](../add_data/html_basic/htmlCode_img4.png)

```html
    <q>인용문 표현(한줄에 주로 사용)</q>
    <blockquote>인용문을 표현하는 형태(여러 줄에 주로 사용)</blockquote>
```



#### 주소 표현

![어드레스태그 화면에 표시](../add_data/html_basic/htmlCode_img5.png)

```html
    <address>
      <p>서울특별시-</p>
      <p>copyright - </p>
    </address>
```



#### 묶음

```html
<div>
    블럭요소의 의미없는 묶음
</div>
<span>
    인라인요소의 의미없는 묶음
</span>
```



#### 강조 표시

![](../add_data/html_basic/htmlCode_img6.png)

```html
    <div>
      <p>내용을 작성할 경우, 필요 시 강조의 표현을 사용하는 경우가 있다!</p>
      <p><strong>강제성을 처리</strong>하고자 하는 경우, <br />
        <em>권유의 강조,</em> <br />
        기존내용 <del>처리완료의 의미</del>를 가지는 강조
        내용을 <ins>인식하게 하는 강조</ins></p>
        <mark>내용을 형광펜으로 체크하는 듯한 형태</mark>
        
        
        <p>
          사용률이 줄거나 의미가 변해서 다른 의미로 사용되거나, 삭제된 태그
          <b>굵은글씨</b><br />
          <i>기울임 ▶ 아이콘, 이모티콘으로 바뀜</i><br />
          <s>줄긋기 삭제됨</s><br />
          <strike>줄긋기 삭제됨</strike><br />
          <u>밑줄</u>
        </p>
    </div>
```



#### class 이름 짓기

```html
<head>
    <style>
        .sample {backround-color:red;}
    </style>
</head>

<span class="sample">
    인라인요소의 의미없는 묶음
</span>
```



#### 링크연결 및 이미지 연결

```html
    <div>
      <h3>링크의 의미와 이미지의 의미</h3>
      <a href="http://naver.com" target="_blank">네이버로 이동</a>
      <img src="" alt="내용확인을 위해 임시 이미지 불러오기" />
    </div>

<a><img></a> = 가능
```

+a와 img 태그 모두 인라인 태그임으로, H3의 블럭태그와 분리시켜주는 것이 좋다.





#### 리스트

내용은 무조건 [ li, dt, dd ]만 작성 가능하다. 태그 내부에 사용하는 것은 가능

p, div와 같은 태그는 불가능하다.



##### 순서가 없는 리스트 ul

![](../add_data\html_basic\htmlCode_img7.png)

```html
<h3>순서가 없는 리스트</h3>
<ul>
    <li>순서가 없는 리스트01</li>
    <li>순서가 없는 리스트02</li>
</ul>
```



##### 순서가 있는 리스트 ol

![](../add_data\html_basic\htmlCode_img8.png)

```html
<h3>순서가 있는 리스트</h3>
<ol>
    <li>순서가 있는 리스트01</li>
    <li>순서가 있는 리스트02</li>
</ol>
```



##### 제목(데이터)이 있는 리스트 dl,dt,dd

![](../add_data\html_basic\htmlCode_img9.png)

```html
<h3>제목이 있는 리스트</h3>
<dl>
    <dt>내용에 대한 제목</dt>
    <dd>내용임</dd>
    <dd>내용임</dd>
    <dt>두줄도 가능함</dt>
    <dd>내용임</dd>
    <dd>내용임</dd>
</dl>
```



##### 다단 리스트 ( 하위리스트)

권장 하단은 3단이나 그 이상도 가능하다.

![](../add_data\html_basic\htmlCode_img10.png)

```html
<h3>다단 리스트</h3>
<ul>
    <li>다단리스트1</li>
    <li>다단리스트2</li>
    <li>다단리스트3
        <ul>
            <li>다단리스트</li>
            <li>다단리스트</li>
        </ul>
    </li>
</ul>
```



#### CLASS, ID

```html
<div id="part">
    <h2></h2>
</div>

<div class="ex_part">    //<div class="ex_part ex_part3">
    <h3></h3>
    <ul>
        <li></li>
        <li></li>
    </ul>
</div>


<div id="part2" class="ex_part">
    <h2></h2>
</div>
```

**ID ** 중복 불가능

**class** 중복 가능, 한개의 태그 안에 class 두개의 속성을 사용하지는 못하며, 속성값만 입력해야 한다.

id와 class는 두개 다 사용이 가능하다.



## style



```html
<head>
	<style>
      div{width:500px; }
      .ex_part{background-color:#fdf;}
    </style>
</head>
<body>
    <div class="ex_part">
      <h2>기초 목차</h2>
      <ul>
        <li><a target="_blank" href="./a_01_basic.html">제목 및 내용</a></li>
        <li><a target="_blank" href="./a_01_basic_list.html">리스트</a></li>
      </ul>
    </div>
</body>
```



#### display 태그

- lnline-block
  - 기본으로 인라인 블럭 ▶ img, button, input, selet, textarea
- block
- inline

```css
.other{
    display:inline-block;
    display:none;
    background-color:cadetblue; 
    width:100px; height:200px;
}
```

같은 속성을 사용했을 때, 먼저 요청한 것은 사라진다. ~~(모두 그런 것은 아님)~~

dosplay:none을 사용하면 화면에는 보이지 않으나, 태그가 사라진 것은 아님.



#### 선택자

```css
        .ex_part ul li a{ color:blue; }  //X
        .ex_part ol li a{color:green;}   //X

태그는 작성한 순으로 적용되기 때문에 ul의 블루 적용으로 a 모두를 변화시키고, ol을 따로 지정함으로 식을 줄일 수 있다.

        .ex_part a{ color:blue; }
        .ex_part ol a{color:green;}

<div class="ex_part">
    <h2>글씨 색상 파란색으로 변경</h2>
    <ul>
        <li><a href="http://naver.com">네이버</a>로 이동</li>
        <li> 붉은색 글씨 사용
        <ol>
            <li>하위 추가 내용은 녹색</li>
            <li><a href="#">다음</a>으로 <span>이동</span></li>
        </ol>
        </li>
    </ul>
</div>
```

**부모의 속성을 그대로 따름 ▶ { 속성 :  inherit; }**



하나의 요소를 선택하여 CSS를 적용 ▶ 타입, 요소 선택자 ( ex. div, p, a, li etc. )

요소 요소를 선택하여 CSS를 적용 ▶ 자손 선택자               ( ex. div ul{ } )

요소>요소를 선택하여 CSS를 적용 ▶ 자식선택자               ( ex. div>ul{} )



선택자를 연달아 쓸 때 ▶ ㅁㅁ이자ㅁㅁ인 선택된다.

- ex) div.ex_part ▶ div이자 .ex_part 인 것이 선택된다.

## cli, 터미널

#### 기본 단축키

**복사** ▶ ctrl+Ins

**붙여넣기** ▶  shift + Ins



#### PC 정보 확인하기

**cli에서 ip 확인하기** ▶ IPconfig

**컴퓨터 이름 파악하기** ▶ whoami



#### 새 파일 만들기 = touch

$ touch test.html tset2.html find.html



#### 새 폴더 만들기 = mkdir

$ mkdir css js

**-p는 중간 연결을 안 해도 되게 해준다.**

`$ mkmkdir  dss js/src/tset/box`  

▲ 이런 연결은 불가능 하다, 하나하나 만들어서 진행해야 함 그걸 안 하게 해주는 게   **<u>-p</u>** (-는 옵션이라는 뜻)  **$ mkdir -p css js/src/tset/box**



#### <u>삭제하기  rm -rf  </u>

(-rf는 디렉토리와 파일로 강제를 뜻함, <u>강제로 삭제하겠다.</u> -r은 파일, -f는 폴더 파일과 폴더 개별로 하나씩도 가능)

$ rm -rf find.html test.html test.html



#### 파일 현재 경로보기

<u>cli 내에서 경로보기</u>

aytjoeun@DESKTOP-BMCU7K8 MINGW64 /e/work/c_jeonga/smart_21/c_code (main)
<u>$ pwd</u>
/e/work/c_jeonga/smart_21/c_code    ◀ 결과



#### <u>폴더, 파일 열어주기</u>

aytjoeun@DESKTOP-BMCU7K8 MINGW64 /e/work/c_jeonga/smart_21/c_code (main)
**$ start .**



#### <u>위치 이동</u>

$ cd.. || cd 폴더명/폴더명



#### 파일 및 폴더 사용

**열기**  ▶ start .

**폴더 만들기** ▶ mkdir 폴더명

**화면 지우기**  ▶ clear

**현재위치 확인** ▶ pwd

**현재 디렉토리의 목록보기**  ▶ ls  

**목록의 숨김폴더까지 모두 보기** ▶  ls -a 



##### 이동

**CLI 현재 폴더 이동** ▶ cd

- **상단 위치** ▶ cd ..

- **최근 위치** ▶  cd -

- cd e:    // 드라이브이기 때문에 <u>:를 붙여줘야 한다.</u>
- cd 폴더명
- cd ~   // cli를 시작했던 최초로 돌아감



<u>단순한 이동 뿐만이 아닌, 파일 이름 변경까지 가능하다.</u>

**파일, 폴더의 이동** ▶ mv

**복사하여 이동** ▶ cp

- 상위 폴더로 이동 ▶ ./
- 이동



#### 기타

**여태 사용한 명령어 보기** ▶ history

- ! nn   // 히스토리 내 nn번째 명령어 실행

**두개의 명령여 연결** ▶ mkdir 폴더명 && touch 폴더명/파일명   //폴더 생성 후 파일만들기 





#### 파일 경로 이동

하위폴더를 지정할 때 (윈도우는 둘다 가능하지만, 맥은 /만 가능하기 때문에 <u>/를 사용하는 것이 좋다.</u>)

- / ▶ linux, unix(mac)

- \ ▶ window 독자적인 방식  <u>< 개발은 \, 사용은 /, \ 두개 다 사용 가능></u>
