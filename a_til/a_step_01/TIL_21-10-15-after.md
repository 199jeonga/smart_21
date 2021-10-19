```css
.gnb a{
  display: block;
  width: 100%; height: 100%;
  padding: 0.1875rem 0.5rem; padding-right: 0.25rem; box-sizing: border-box;
  background-image: url("../../img/gcass/nav.png");
  background-repeat: no-repeat;
  background-position-x: 0;
}
```

- 기본값

```css
.about{background-position: 0 0;}
.study{background-position: 0 -60px;}
.photo{background-position: 0 -120px;}
.blog{background-position: 0 -180px;}
.press{background-position: 0 -240px;}

.about:hover{background-position-x: -138px;}
.study:hover{background-position-x: -138px;}
.photo:hover{background-position-x: -138px;}
.blog:hover{background-position-x: -138px;}
.press:hover{background-position-x: -138px;}

.gnb a:hover{background-position-x: 100%;}
.gnb .qna:hover{background-position-x: -158px;}
```

↓

```css
.about{background-position-y:clac(60px * -0);}
.study{background-position-y:clac(60px * -1);}
.photo{background-position-y:clac(60px * -2);}
.blog{background-position-y:clac(60px * -3);}
.press{background-position-y:clac(60px * -4);}
.gnb .qna{
    width: 115px; height: 111px;
    background-position: -20px -294px;
}

.gnb a:hover{background-position-x: 100%;}
.gnb .qna:hover{background-position-x: -158px;}
```

- `.gnb a:hover{background-position-x: 100%;}` ▶ x값을 calc로 수정이 가능하다고 함. 
  - 나중에 정아가 해주겠지.



