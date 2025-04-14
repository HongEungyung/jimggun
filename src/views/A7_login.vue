<script setup>
import { ref } from 'vue';
</script>

<template>
  <div class="a7-wrap">
    <div class="logoContainer">
      <img src="../../public/images/jimggun_logo.png" alt="로고" class="logo" />
    </div>
    <div class="loginInputContainer">
      <input type="text" placeholder="아이디" class="loginInput" />
      <input type="text" placeholder="비밀번호" class="loginInput" />
    </div>
    <button class="loginBtn">로그인</button>
    <div class="routerContainer">
      <router-link to="/signUp" class="goSignUp">회원가입</router-link>
    </div>
    <div class="snsLoginContainer">
      <p>자주 사용하는 계정으로 간편하게 로그인</p>
      <div class="snsIconBox">
        <div class="snsIcon naver">
          <img src="../../public/images/kang/naver.png" alt="네이버" />
        </div>
        <div class="snsIcon kakao">
          <img src="../../public/images/kang/kakao.png" alt="카카오" />
        </div>
        <div class="snsIcon google">
          <img src="../../public/images/kang/google.png" alt="구글" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '/src/assets/variables';

.a7-wrap {
  max-width: 510px;
  margin: auto;
  padding-top: 100px;
  flex-direction: column;
  text-align: center;
  font-family: $font-family;
}
a {
  text-decoration: none;
  color: $font-primary;
}
//로고
.logo {
  width: 126px;
}
//인풋
.loginInputContainer {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  margin-top: 50px;
}
.loginInput {
  width: 88%;
  height: 60px;
  border: 1px solid $input-select;
  border-radius: 10px;
  font-size: 14px;
  color: $font-light-gray;
  padding: 21px 23px;
}
//로그인 버튼
.loginBtn {
  width: 88%;
  height: 60px;
  background-color: $primary-color;
  color: $white;
  font-size: 18px;
  font-weight: bold;
  margin-top: 60px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}
//회원가입
.routerContainer {
  margin-top: 20px;
}
.goSignUp {
  font-size: 14px;
}
//간편 로그인
.snsLoginContainer {
  margin-top: 50px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.snsLoginContainer > p {
  font-size: 18px;
  color: $font-primary;
}
.snsIconBox {
  display: flex;
  margin-top: 20px;
  gap: 50px;
}
.snsIcon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 10px;
  cursor: pointer;
}

.naver {
  background: $naver-color;
}
.kakao {
  background: $kakao-color;
}
.google {
  background-color: $bg-light;
}
</style>
