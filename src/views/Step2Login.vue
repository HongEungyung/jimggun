<script setup>
import { ref } from 'vue';
// 결제 , step
const emit = defineEmits(['next', 'prev']);
defineProps({ resevationData: Object });
const agree = ref(false);
const prevStep = () => emit('prev');
const confirmPayment = () => emit('next', { paymentComfirmed: true });
</script>

<template>
  
  <div class="login-btn-box">
    <div class="btn-warp">
      <router-link to="/signUp" class="routerBtn routerBtn1">
        <button class="loginBtn naver">
          <img src="../../../public/images/kang/naver.png" alt="네이버" class="icon" /> 네이버 로그인
        </button>
      </router-link>
      <router-link to="/signUp" class="routerBtn routerBtn2">
        <button class="loginBtn kakao">
          <img src="../../../public/images/kang/kakao.png" alt="카카오" class="icon" />카카오 로그인
        </button>
      </router-link>
      <router-link to="/signUp" class="routerBtn routerBtn3">
        <button class="loginBtn google">
          <img src="../../../public/images/kang/google.png" alt="구글" class="icon" />구글 로그인
        </button>
      </router-link>
      <router-link class="routerBtn routerBtn4">
        <button @click="confirmPayment" class="loginBtn nonAccount">비회원으로 예약하기</button>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '/src/assets/variables';
.login-btn-box {
  max-width: 520px;
  margin: auto;
  padding-top: 100px;
  text-align: center;
}
a {
  text-decoration: none;
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
  margin-bottom: 30px;
  background-color: #fff;
  border: $input-select, 1px, solid;
}
.google > .icon {
  display: block;
  margin-left: 10px;
  margin-right: 157px;
}
.nonAccount {
  background-color: $bg-primary;
  color: $font-primary;
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
}
</style>
