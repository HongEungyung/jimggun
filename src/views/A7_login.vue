<script setup>
import { ref } from 'vue';
import ModalInquire from '@/components/ModalInquire.vue'; // 모달 컴포넌트 임포트

const isModalOpen = ref(false);
</script>

<template>
  <div class="wrap">
    <h1>
      짐꾼에게 짐을 맡기고 <br />
      지금 여행을 떠나세요 !
    </h1>
    <h2>짐 보관부터 운송, 그리고 KTX특송까지</h2>
    <p @click="isModalOpen = true">자주 사용하는 계정으로 간편하게 로그인</p>
      <!-- 모달 컴포넌트 -->
      <ModalInquire :isOpen="isModalOpen" @close="isModalOpen = false" />
    <div class="btn">
      <router-link to="/signUp" class="routerBtn">
        <button class="loginBtn naver">
          <img src="../../public/images/kang/naver.png" alt="네이버" class="icon" /> 네이버 로그인
        </button>
      </router-link>
      <router-link to="/signUp" class="routerBtn">
        <button class="loginBtn kakao">
          <img src="../../public/images/kang/kakao.png" alt="카카오" class="icon" />카카오 로그인
        </button>
      </router-link>
      <router-link to="/signUp" class="routerBtn">
        <button class="loginBtn google">
          <img src="../../public/images/kang/google.png" alt="구글" class="icon" />구글 로그인
        </button>
      </router-link>
    </div>
    <router-link to="/" class="toMain">
      <div class="toMainContent">
        <span>메인으로 돌아가기</span>
        <img src="../../public/images/kang/toMain.png" alt="메인으로" class="toMainIcon" />
      </div>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
@import '/src/assets/variables';

.wrap {
  max-width: 520px;
  margin: auto;
  padding-top: 100px;
  text-align: center;
}

h1 {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10px;
}

h2 {
  font-size: 20px;
  font-weight: bold;
  color: $font-gray;
  margin-bottom: 61px;
}

p {
  font-size: 20px;
  color: $font-gray;
  margin-bottom: 61px;
}

.btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;
}

.loginBtn {
  width: 507px;
  height: 60px;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
  text-decoration: none;
  border: none;
  outline: none;
  border-radius: 10px;
  display: flex;
  align-items: center;
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
  margin-bottom: 36px;
  background-color: #fff;
  border: $input-select, 1px, solid;
}
.google > .icon {
  display: block;
  margin-left: 10px;
  margin-right: 157px;
}
.toMain {
  text-decoration: none;
}
.routerBtn {
  text-decoration: none;
}
span {
  font-size: 16px;
  position: relative;
  padding-bottom: 2px;
  color: $font-light-gray;
  display: inline-block;
  text-align: right;
}
span::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 115px;
  height: 1px;
  background-color: $font-light-gray;
}
.toMainContent {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.toMainIcon {
  padding-left: 10px;
}
</style>
