<script setup></script>

<template>
  <!-- 전체 레이아웃 -->
  <div class="headerWrap">
    <!-- 이너 -->
    <div class="header headerInner">
      <!-- 로고 -->
      <a href="#" class="headerLogo"></a>
      <!-- 메뉴 -->
      <nav class="headerNav">
        <router-link to="/">홈</router-link>
        <router-link to="/information">이용안내</router-link>
        <router-link to="/charge">요금안내</router-link>
        <router-link to="/reservation">예약하기</router-link>
        <router-link to="/review">고객후기</router-link>
        <router-link to="/cs">고객센터</router-link>
      </nav>
      <div class="headerSubnav">
        <router-link to="/login">로그인</router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "/src/assets/variables";
// 전체 레이아웃
.headerWrap {
  width: 100%;
  margin: 0 auto;
}
// 이너
.headerInner {
  max-width: 1280px;
  margin: 0 auto;
  background-color: $white;
}
// 상단
.header{
    position: relative;
    height: 70px;
    display: flex;
}
// 로고
.headerLogo{
    width: 15%;
    line-height: 100px;
}
// 메뉴
</style>
