<script setup>
import { ref } from "vue";
const activeTap = ref("delivery");
</script>

<template>
  <!-- 전체 레이아웃 -->
  <div class="info-wrap">
    <!--  -->
    <!-- 탭 메뉴 -->
    <div class="info-tap">
      <h3 @click="activeTap = 'delivery'" class="delivery-tap" :class="{ active: activeTap === 'delivery' }">
        배송 서비스
      </h3>
      <h3 @click="activeTap = 'keep'" class="keep-tap" :class="{ active: activeTap === 'keep' }">보관 서비스</h3>
    </div>
    <!--  -->
    <!-- 짐배송 영역 -->
    <section v-if="activeTap === 'delivery'" class="delivery-wrap">
      <!--  -->
      <!-- 1. 빠른 배송 서비스 -->
      <div class="fast-delivery">
        <h4 class="fast-dv-title">짐꾼의 빠른 <span>배송</span> 서비스</h4>
        <!-- 빠른 배송 서비스 순서 -->
        <ul class="fast-index">
          <li>
            <!-- <div class="a2-next-1"></div> -->
            <div class="fast-list1 fast-list">
              <h4>예약/결제</h4>
              <p>
                <span>예약 완료 시 <strong>카카오톡 알림</strong></span>
              </p>
              <div class="fast-line"></div>
              <div class="fast-icon">
                <span>01</span>
                <img src="/public/images/lee/fastIcon1.png" alt="예약/결제 이미지" />
              </div>
            </div>
            <!-- <div class="a2-next">
              <img src="/public/images/lee/nextstep.png" alt="화살표" />
            </div> -->
          </li>
          <li>
            <div class="fast-list2 fast-list">
              <h4>집앞 픽업</h4>
              <p>
                <strong>집앞</strong>에 짐을 두면 <br />
                짐꾼이 새벽픽업!
              </p>
              <div class="fast-line"></div>
              <div class="fast-icon">
                <span>02</span>
                <img src="/public/images/lee/fastIcon2.png" alt="집 앞 픽업" />
              </div>
            </div>
            <!-- <div class="a2-next">
              <img src="/public/images/lee/nextstep.png" alt="화살표" />
            </div> -->
          </li>
          <li>
            <div class="fast-list3 fast-list">
              <h4>빠른 배송</h4>
              <p>
                체크인 시간까지 <br />
                짐꾼이 <strong>빠르게</strong> 배송!
              </p>
              <div class="fast-line"></div>
              <div class="fast-icon">
                <span>03</span>
                <img src="/public/images/lee/fastIcon3.png" alt="예약/결제 이미지" />
              </div>
            </div>
            <!-- <div class="a2-next">
              <img src="/public/images/lee/nextstep.png" alt="화살표" />
            </div> -->
          </li>
          <li>
            <div class="fast-list4 fast-list">
              <h4>예약/결제</h4>
              <p>
                숙소와 상의 후 <br />
                <strong>안전한</strong> 장소에 도착!
              </p>
              <div class="fast-line"></div>
              <div class="fast-icon">
                <span>04</span>
                <img src="/public/images/lee/fastIcon4.png" alt="예약/결제 이미지" />
              </div>
            </div>
            <!-- <div class="a2-next"></div> -->
          </li>
        </ul>
      </div>
      <!--  -->
      <!-- 2. 배송 위치 -->
      <div class="dv-position">
        <ul class="position-list">
          <li class="pst-list1">
            <h4 class="pst-title">집 - 숙소</h4>
            <ul class="pst-icon">
              <li><img src="/public/images/lee/house.png" alt="집아이콘" /></li>
              <li><img src="/public/images/lee/arrow.png" alt="화살표" /></li>
              <li><img src="/public/images/lee/arrival.png" alt="도착아이콘" /></li>
            </ul>
            <ul class="pst-text">
              <li>1.가방은 문앞에! 픽업은 새벽에!</li>
              <li>2.체크인 시간에 맞춰 배송</li>
              <li>3.<span>비대면</span>으로 편리하게</li>
            </ul>
          </li>
          <li class="pst-list2">
            <h4 class="pst-title">집 - 숙소</h4>
            <ul class="pst-icon">
              <li><img src="/public/images/lee/house.png" alt="집아이콘" /></li>
              <li><img src="/public/images/lee/arrow.png" alt="화살표" /></li>
              <li><img src="/public/images/lee/arrival.png" alt="도착아이콘" /></li>
            </ul>
            <ul class="pst-text">
              <li>1.가방은 문앞에! 픽업은 새벽에!</li>
              <li>2.체크인 시간에 맞춰 배송</li>
              <li>3.<span>비대면</span>으로 편리하게</li>
            </ul>
          </li>
          <li class="pst-list3">
            <h4 class="pst-title">집 - 숙소</h4>
            <ul class="pst-icon">
              <li><img src="/public/images/lee/house.png" alt="집아이콘" /></li>
              <li><img src="/public/images/lee/arrow.png" alt="화살표" /></li>
              <li><img src="/public/images/lee/arrival.png" alt="도착아이콘" /></li>
            </ul>
            <ul class="pst-text">
              <li>1.가방은 문앞에! 픽업은 새벽에!</li>
              <li>2.체크인 시간에 맞춰 배송</li>
              <li>3.<span>비대면</span>으로 편리하게</li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="dv-position-bg"></div>
    </section>
    <!-- 짐 이동 영역 -->
    <section v-if="activeTap === 'keep'" class="keep-inner">여기는 보관</section>
  </div>
</template>

<style lang="scss" scoped>
@import "/src/assets/variables";
// 전체 레이아웃
.info-wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 20px;
}
.delivery-wrap {
  display: flex;
  flex-direction: column;
}
// 탭메뉴 스타일
.info-tap {
  display: flex;
  align-items: center;
  margin: 70px auto;
  width: 100%;
  max-width: 800px;
  height: 50px;
}
.info-tap h3 {
  flex: 1;
  text-align: center;
  height: 100%;
  line-height: 50px;
  color: $font-light-gray;
  font-size: $text-font-L;
  cursor: pointer;
  border: 3px solid #f1f1f5;
  &.active {
    background-color: $primary-color;
    color: $white;
    border: none;
  }
}
.keep-tap {
  //   border-left: 3px solid #f1f1f5;
}
// 짐배송 영역
// 1. 빠른 배송 서비스
.fast-delivery {
  width: 100%;
  display: flex;
  flex-direction: column;
  .fast-dv-title {
    font-weight: 600;
    font-size: $title-font-M;
    margin: 0 auto;
    margin-bottom: 70px;
    span {
      color: $primary-color;
    }
  }
  .fast-index {
    width: 100%;
    display: flex;
    margin-bottom: 100px;
    align-items: center;
    justify-content: center;

    li {
      position: relative;
      width: calc(100% / 4);
      display: flex;
      align-items: center;
      justify-content: space-around;
      &:first-child {
        .a2-next-1 {
          min-width: 20px;
          height: 326px;
        }
      }
      &:last-child {
        .a2-next {
          min-width: 20px;
          height: 326px;
          // padding: 0;
        }
      }
      .fast-list {
        width: 90%;
        max-width: 240px;
        min-width: 175px;
        max-height: 326px;
        border: 1px solid rgba(229, 229, 236, 1);
        border-radius: 10px;
        box-shadow: $info-boxShadow;
      }
      .fast-list1,
      .fast-list2,
      .fast-list3 {
        &::after {
          content: "";
          position: absolute;
          top: 50%;
          right: 0;
          transform: translate(50%, -50%);
          display: block;
          width: 16px;
          height: 24px;
          background: url("/public/images/lee/nextstep.png");
        }
      }
      .a2-next {
        padding: 0 15px;
        min-width: 20px;
        img {
          width: 100%;
          min-width: 16px;
        }
      }
      .fast-list1 {
        p {
          display: flex;

          align-items: center;
        }
      }
      div {
        padding: 0 25px;
        h4 {
          font-size: $text-font-XL;
          font-weight: bold;
          margin-top: 40px;
        }
        p {
          margin: 18px 0;
          font-size: $text-font-M;
          color: $font-gray;
          line-height: 1.4;
          min-height: 45px;
          strong {
            color: $font-primary;
            font-weight: 600;
          }
        }
        .fast-line {
          width: 100%;
          padding: 0 25px;
          height: 2px;
          background-color: $bg-light;
          margin: 0;
        }
        .fast-icon {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin: 0;
          margin-top: 25px;
          padding: 0;
          span {
            font-weight: bold;
            font-size: $text-font-XL;
            color: $primary-color;
          }
          img {
            margin-top: 25px;
            margin-bottom: 30px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1000px) {
  .fast-list::after{
    display: none !important;
  }
}
// 2. 배송위치
.dv-position {
  width: 100%;
  background-color: $sub-color;
  .position-list {
    display: flex;
    justify-content: space-around;
    width: 100%;
    li {
      width: calc(100% / 3);
      max-width: 390px;
      .pst-title {
      }
      .pst-icon {
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
