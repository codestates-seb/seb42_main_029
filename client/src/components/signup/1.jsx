// axios 모듈 import
import axios from 'axios';

// 회원가입 정보를 담은 객체
const signUpData = {
  email: 'example@example.com',
  password: 'password123',
  username: 'example',
};

// 이메일, 비밀번호, 유저이름 유효성 검사를 위한 정규식
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const usernameRegex = /^[a-zA-Z0-9]{4,}$/;

// 이메일, 비밀번호, 유저이름 유효성 검사
if (!emailRegex.test(signUpData.email)) {
  console.log('이메일 형식이 올바르지 않습니다.');
} else if (!passwordRegex.test(signUpData.password)) {
  console.log('비밀번호는 최소 8자 이상, 영문과 숫자를 모두 포함해야 합니다.');
} else if (!usernameRegex.test(signUpData.username)) {
  console.log('유저이름은 최소 4자 이상, 영문과 숫자만 사용 가능합니다.');
} else {
  // 회원가입 요청
  axios.post('/api/signup', signUpData)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.response.data);
    });
}