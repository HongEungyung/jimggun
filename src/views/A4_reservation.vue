<script setup></script>

<template>
  <div class="wrap">
    <div class="inner">
      <!--진행상황 상단 -->
      <section class="reservation-title">
        <p>3분 안에 예약하고</p>
        <h2>짐꾼을 부르세요!</h2>
        <img src="/public/images/icon/reservation-bar1.png" alt="예약진행바" />
        <div class="reservationStatus">
          <p>예약하기</p>
          <p>확인 및 결제</p>
          <p>예약완료</p>
        </div>
      </section>
      <!-- 배송정보  -->
      <h3>배송정보 입력<span>*</span></h3>
      <!-- 배송정보 입력창 -->
      <section>
        <article class="deliveryInfo">
          <!-- 출발지 -->
          <div class="departure">
            <p>어디서 짐을 가져갈까요?</p>
            <div class="deliveryInfo_line"></div>
            <form @submit.prevent="deliveryInfoForm"></form>
          </div>
          <!-- 도착지 -->
          <div class="destination"></div>
          <!-- 수하물 -->
          <div class="baggage"></div>
        </article>
        <!-- 배송정보 업데이트창 -->
        <article class="deliveryUpdata"></article>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "/src/assets/variables"; // 반드시 최상단!
.wrap {
  background-color: $sub-color;
}
</style>
