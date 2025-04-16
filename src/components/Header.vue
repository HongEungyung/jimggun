<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth"; // auth.js 경로에 맞게 수정

const authStore = useAuthStore();
const router = useRouter();

// 로그인 상태 계산
const isLoggedIn = computed(() => authStore.getIsLoggedIn);

// 로그아웃 후 리다이렉트
const handleLogout = () => {
  authStore.logout();
  router.push("/"); // 원하면 '/login'으로 변경 가능
};
</script>

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
        <!-- 로그인 상태일 때 -->
        <template v-if="isLoggedIn">
          <router-link to="/mypage">마이페이지</router-link>
          <router-link to="/" @click.prevent="handleLogout">로그아웃</router-link>
        </template>

        <!-- 로그아웃 상태일 때 -->
        <template v-else>
          <router-link to="/login">로그인</router-link>
        </template>

        <!-- 언어 선택 -->
        <div class="headerSubLangs">
          <a href="#">KOR</a>
          <span>|</span>
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
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  // margin-bottom: 5px;
  // z-index: 10;
  // 헤더
  .header {
    position: relative;
    height: 90px;
    display: flex;
  }
  // 이너
  .headerInner {
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 20px;
    background-color: $white;
    justify-content: space-between;
    // 로고
    .headerLogo {
      display: block;
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
        font-size: $text-font-L;
        a {
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
      a {
        color: $font-gray;
        text-decoration: none;
      }
      span {
        color: $font-gray;
        padding: 0 5px;
      }
    }
  }
}
</style>
