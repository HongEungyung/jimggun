<script setup>
import { ref } from 'vue';
</script>

<template>
  <div class="a7-wrap">
    <h1 class="A7-h1">자주 사용하는 계정으로<br />간편하게 로그인</h1>
    <!-- <h1 class="A7-h1">
      짐꾼에게 짐을 맡기고
      <br />
      지금 여행을 떠나세요 !
    </h1>
    <p>자주 사용하는 계정으로 간편하게 로그인</p> -->
    <div class="btn-warp">
      <router-link to="/signUp" class="routerBtn routerBtn1">
        <button class="loginBtn naver">
          <img src="../../public/images/kang/naver.png" alt="네이버" class="icon" /> 네이버 로그인
        </button>
      </router-link>
      <router-link to="/signUp" class="routerBtn routerBtn2">
        <button class="loginBtn kakao">
          <img src="../../public/images/kang/kakao.png" alt="카카오" class="icon" />카카오 로그인
        </button>
      </router-link>
      <router-link to="/signUp" class="routerBtn routerBtn3">
        <button class="loginBtn google">
          <img src="../../public/images/kang/google.png" alt="구글" class="icon" />구글 로그인
        </button>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '/src/assets/variables';

.a7-wrap {
  max-width: 520px;
  margin: auto;
  padding-top: 100px;
  text-align: center;
}
a {
  text-decoration: none;
}
.A7-h1 {
  font-size: 36px;
  font-weight: bold;
  line-height: 45px;
  color: $font-primary;
  // margin-bottom: 10px;
  margin-bottom: 61px;
}
p {
  font-size: 20px;
  color: $font-gray;
  margin-bottom: 61px;
}
// 로그인 버튼
.btn-warp {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;
  gap: 15px;
}
.routerBtn {
  width: 100%;
  cursor: default;
}
// 간편 로그인
.loginBtn {
  // width: 507px;
  width: 97.5%;
  height: 60px;
  font-size: 18px;
  font-weight: bold;
  // margin-bottom: 15px;
  text-decoration: none;
  border: none;
  outline: none;
  border-radius: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.naver {
  background-color: $naver-color;
  color: #fff;
}
.naver > .icon,
.kakao > .icon {
  display: block;
  margin-left: 10px;
  margin-right: 141px;
}
.kakao {
  background-color: $kakao-color;
  color: $font-primary;
}
.google {
  color: $font-primary;
  margin-bottom: 100px;
  background-color: #fff;
  border: $input-select, 1px, solid;
}
.google > .icon {
  display: block;
  margin-left: 10px;
  margin-right: 157px;
}
</style>
