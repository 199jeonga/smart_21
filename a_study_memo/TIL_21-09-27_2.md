# 수업내용 정리

```html
<!-- layout -->
<div id="wrap">
    <div id="headBox" role="banner">
        <h1>file name</h1>
        <div class="unb" role="navigation">
            <h2 class="blind">utility navigation</h2>
        </div>
        <div class="gnb" role="navigation">
            <h2 class="blind">global navigation</h2>
            <ul class="clearfix">
                <li>li_01</li>
                <li>li_02</li>
                <li>li_03</li>
                <li>li_04</li>
                <li>li_05</li>
            </ul>
        </div>    
    </div>
    <!-- // #headBox -->  
    <div id="adViewBox" role="region">
        <h2 class="blind">주요 광고 내용</h2>
        <div class="view_outer">view_outer</div>
        <div class="view_indicator">
            <ul class="clearfix">
                <li>ad_01</li>
                <li>ad_02</li>
                <li>ad_03</li>
                <li>ad_04</li>
                <li>ad_05</li>
                <li>ad_06</li>
            </ul>
        </div>
        
```

##  Wai- area, role

[mbn aria 보기](https://developer.mozilla.org/ko/docs/Web/Accessibility/ARIA/ARIA_Techniques)

ARIA : 규칙, 상태, 속성

- 지원하는 상태와 속성을 구분하여 요소에 적용할 수 있게 하는 의미

- 브라우저의 접근성에 API 추가 정보가 노출되지만, DOM 에는 영향을 주지 않는다.
  - 접근성을 높이지만 h1~h3등 목차와는 연관되지 않는 다는 말 같음
- 시맨틱태그를 사용하면 area를 사용하지 않아도 되지만 div와 같이 의미가 없는 태그를 사용한다면 area를 사용해야 한다.



역할

`위젯역할`, `복합역할`, `문서구조역할`,`랜드마크 역할`, `라이브 지역 역할`, `창역할`

속성

`위젯속성`, `라이브지역속성`, `드래그앤드롭속성`,`관계속성`

etc.



다양한 역할과 속성이 있기 때문에 필요 할 때마다 상단 사이트를 통해 확인하는 것이 좋음.



## 목차의 제목

```html
<div class="community_area">
    <ul>
        <li class="community_con clearfix">
            <dl>
                <dt>community_title</dt>
                <dd>contents</dd>
            </dl>
        </li>
        <li class="community_con clearfix">
            <dl>
                <dt>community_title</dt>
                <dd>contents</dd>
            </dl>
        </li>
        <li class="community_con clearfix">
            <dl>
                <dt>community_title</dt>
                <dd>contents</dd>
            </dl>
        </li>
    </ul>
</div>
```

▼  ▼  ▼  ▼  ▼  ▼  ▼  이렇게 태그 줄일 수 있을 듯! ▼  ▼  ▼  ▼  ▼  ▼  ▼ 

```html
<div class="community_area">
    <dl class="community_con clearfix">
        <dt>community_title</dt>
        <dd>contents</dd>
    </dl>
    <dl class="community_con clearfix">
        <dt>community_title</dt>
        <dd>contents</dd>
    </dl>
    <dl class="community_con clearfix">
        <dt>community_title</dt>
        <dd>contents</dd>
    </dl>
</div>
```

제목이 없다면 큰 필요가 없는 div 라는 의미가 강하기 때문에 h2~h6의 제목들을 사용해주는 것이 좋음.

또한 접근성 측면에서도, H1~H6의 순서로 제목부터 내용을 나열하는 식으로 설명을 하기 때문에 제목을 넣어준 후 디자인에서 필요가 없다면 css에서 수정해줘야 함.

- 제목의 순서는 H1 ~ H6로 내림차순으로 진행해줘야 함.
- `overflow: hidden; width: 0; height: 0; ` **필요하지만 디자인 상으로 없애**고 싶은 요소들은 오버플로우 히든으로 처리한다.



## 부모자식 선택자, (class, id)

```html
<div id="adviewBox">
    <div class="view_outer">
        <h2 class="blind">주요광고내용</h2>
        view_outer
    </div>
    <div class="view_indicator">
        <ul class="clearfix">
            <li>view_list_00</li>
            <li>view_list_01</li>
            <li>view_list_02</li>
            <li>view_list_03</li>
            <li>view_list_04</li>
            <li>view_list_05</li>
        </ul>
    </div>
</div><!-- //adviewBox-->
```

```css
.view_indicator {
    width: 850px; height: 60px;
    margin:auto; 
    background-color: #0ac;
}
.view_indicator ul {
    width: 100%; height:auto;
    padding:10px 15px; 
}
.view_indicator li {
    float:left; 
    width:120px; height: 40px; 
    margin-right:20px;
    background-color: #fa0;
}
.view_indicator li:last-child{ margin-right: 0;}
```

- div>ul>li>a 이런 식으로 3개 이상 들어가는 것은 좋지 않음. class 혹은 id로 끊어주는 것이 좋음.
- 사방 여백을 주는 패딩은 가장 큰 부모요소에게 주는 것이 좋음
- 만약 여기서 스크롤, 더보기와 같은 기능이 있다면 ul을 묶은 div 요소가 하나 더 있어야 한다. ul은 사이즈 확장, div요소는 overflow:hidden을 진행해야 함!