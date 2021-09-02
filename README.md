# Business Card Maker

## 로그인

https://firebase.google.com/docs/auth/web/google-signin

- 서비스는 로직을 분리하여 사용함. (service/)

## 로그인후 라우터

- 로그인후 화면이동
- 로그인 DB에 저장된 data.user.uid 통해서 로그인처리함.
- 인증 상태 관찰자 설정 및 사용자 데이터 가져오기
  (https://firebase.google.com/docs/auth/web/start#set_an_authentication_state_observer_and_get_user_data)
- 로그아웃 처리
