<script setup>

</script>

<template>
<div class="res_wrap">
    <div class="res_inner">
      <!-- 상단 -->
      <section class="res_top">
        <div class="res_text_box">
          <p id="res_top_title">3분 안에 예약하고</p>
          <h2>짐꾼을 부르세요!</h2>
        </div>
        <!-- 프로그래스바 -->
        <div class="progress_bar">
          <img
            src="/public/images/jung/reservation-bar3.png"
            alt="예약진행바" />
        </div>
        <div class="progress_text">
          <p>예약하기</p>
          <p>확인 및 결제</p>
          <p>예약완료</p>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "/src/assets/variables";
@import "/src/assets/resTop.scss";

.progress_text p:last-child {
      // font-size: 1.875rem;
      font-weight: 500;
      color: $primary-color;
    }
</style>