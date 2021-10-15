- [ ] 서브페이지 디자인 PC, 타블렛 완성 시키기

  

### silde+btn

```css
.slide_wrapper{
  position:relative;
  width: 800px; height: 500px;
  margin: auto;
  background-color: #ccc;
}

.btn{
  position: absolute; top: 50%; left: 50%;
  width: 120%; height: 0; 
  margin: auto;
  background-color: #aaa;
  transform: translateX(-50%);
}
.btn button{
  width: 40px; height: 40px; border-radius: 100%;
  background-color: #ada;
  transform: translateY(-50%);
}
.prev{float: left;}
.next{float: right;}
```

- .btn의 `height: 0`을 줘야 배경 img 클릭 시 거슬리지 않는다.
- .btn 버튼이 뷰박스의 사이즈를 벗어나게 하는 방법
  - width값을 100% 이상( width: 120%;  )으로 지정한 후 평소와 같이 진행한다. 







### JS 학습 전 해야할 일

1. 만들고자 하는 것 선정(간단한 것이라도)
2. 형태의 기능 고민
3. 형태 구성 (구현이 안 되거나 어려운 건 주석처리)
4. 형태에 따른 기능의 목적과 방향성 (뭐를 어떻게 해서 어떻게하게 할 거야?)
5. 만들려는 형태의 원하는 순서를 파악 → 설명 작성
6. 다시 순서대로 나열

`설명(내가 하고자 하는 역할 나열)` → `선택자(변수)` → `함수(기능의 묶음)` → `기능(선기능)` → `이벤트처리` : 알고리즘

### css 학습 전 해야할 일

1. 큰틀
2. 중간 레이아웃 (margin,padding,border)
3. font / 링크...
4. hover/focus
5. 이미지
6. 이외에 html/css를 js에서 구현해야하는 기능에 파악 (action, 숨어있던기능을 나타나게)
7. animation/효과
