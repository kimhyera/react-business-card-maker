# Business Card Maker

배포링크 : https://kimhyera.github.io/react-business-card-maker/

## 로그인

https://firebase.google.com/docs/auth/web/google-signin

- 서비스는 로직을 분리하여 사용함. (service/)

## 로그인후 라우터

- 로그인후 화면이동
- 로그인 DB에 저장된 data.user.uid 통해서 로그인처리함.
- 인증 상태 관찰자 설정 및 사용자 데이터 가져오기
  (https://firebase.google.com/docs/auth/web/start#set_an_authentication_state_observer_and_get_user_data)
- 로그아웃 처리

## Maker 작업

- set카드 임이의 데이터 state 생성
- maker, preview list read

## AddForm 작업

- input 데이터 ref 사용하여 받아온다.
  (obj 값 : 네이밍Ref.current.value , <form ref={formRef}>
- updated = [...cards, obj]; 기존배열에 끼워 넣기
  setCards(updated); 업데이트 처리완료
  장점: jquery 에서는 업데이트를 하고 다시 로드를 하였는데
  리액트는 업데이트를 하면 자동 랜더링이 된다.

## State 업데이트 작업

- input 변경이 생기면 onChange 함수 호출함
- 성능고려 데이터 바뀜
<pre>
	const obj = {
		id :cards,
	}

  //card map() 처리가 아닌 card key 를 map 처리한다. (Object.keys() 이용)
</pre>

## 이미지 업로더

- 프롭전달 많음...이럴경우 service 를 외부에서 만든후 전달함
<pre>
  //index 
  const ImageUploader = new ImageUploader();
  </pre>

- input type="file" 클릭하기 위한 코드
<pre>
	const onButtonClick = () => {
		inputRef.current.click();
	};
    </pre>

- 파일 타겟
  event.target.files[0]
