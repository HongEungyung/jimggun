<script setup></script>

<template>
  <!-- 전체 레이아웃 -->
  <div class="headerWrap">
    <!-- 이너 -->
    <div class="header headerInner">
      <!-- 로고 -->
      <router-link to="/" class="headerLogo">
        <img src="/public/images/jimggun_logo.png" alt="짐꾼로고" />
      </router-link>
      <!-- 메뉴 -->
      <ul class="headerNav">
        <li><router-link to="/information">이용안내</router-link></li>
        <li><router-link to="/charge">요금안내</router-link></li>
        <li><router-link to="/reservation">예약하기</router-link></li>
        <li><router-link to="/review">고객후기</router-link></li>
        <li><router-link to="/cs">고객센터</router-link></li>
      </ul>
      <div class="headerSubnav">
        <router-link to="/login">로그인</router-link>
        <div class="headerSubLangs">
        <a href="#">KOR</a> |
        <a href="#">ENG</a>
        </div>
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
  justify-content: space-between;
}
// 상단
.header {
  position: relative;
  height: 70px;
  display: flex;
}
// 로고
.headerLogo {
  width: 10%;
  max-width: 200px;
  padding: 10px 0;
  box-sizing: border-box;
  img {
    height: 100%;
  }
}
// 메뉴
.headerNav {
  width: 750px;
  display: flex;
  align-items: center;
  li {
    width: calc(100% / 5);
    text-align: center;
    font-weight: bold;
    font-size: $text-font-M;
    a{
        color: $font-primary;
        text-decoration: none;
    }
  }
}
// 로그인
.headerSubnav {
  display: flex;
  align-items: center;
  gap: 30px;
  font-size: $text-font-S;
  font-weight: 500;
  a{
    color: $font-gray;
    text-decoration: none;
  }
}
</style>
