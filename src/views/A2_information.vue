<script setup>
import { ref } from "vue";
const activeTap = ref("delivery");
</script>

<template>
  <!-- 전체 레이아웃 -->
  <div class="info-wrap">
    <!--  -->
    <!-- 탭 메뉴 -->
    <div class="info-tap inner">
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
      <div class="fast-delivery inner">
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
              <img src="/public/images/lee/nex`tstep.png" alt="화살표" />
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
        <ul class="position-list inner">
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
              <li><img src="/public/images/lee/airplane.png" alt="비행기아이콘" /></li>
              <li><img src="/public/images/lee/arrow.png" alt="화살표" /></li>
              <li><img src="/public/images/lee/house.png" alt="집아이콘" /></li>
            </ul>
            <ul class="pst-text">
              <li>1.픽업한 가방은 무인보관함에!</li>
              <li>2.고객님의 <span>요청사항</span>에 맞춰 전달</li>
            </ul>
          </li>
          <li class="pst-list3">
            <h4 class="pst-title">집 - 숙소</h4>
            <ul class="pst-icon">
              <li><img src="/public/images/lee/airplane.png" alt="비행기아이콘" /></li>
              <li><img src="/public/images/lee/arrow.png" alt="화살표" /></li>
              <li><img src="/public/images/lee/arrival.png" alt="도착아이콘" /></li>
            </ul>
            <ul class="pst-text">
              <li>1.공항 <span>무인보관함</span>에 짐 넣기</li>
              <li>2.체크인 시간에 맞춰 배송</li>
            </ul>
          </li>
        </ul>
        <div class="dv-position-bg"></div>
      </div>
      <!--  -->
      <!-- 3. 문의/불가능 품목 -->
      <!-- 3-1 문의 품목 -->
      <div class="inquire inner">
        <h2 class="inquire-title">이런 품목은 <span>문의해요!</span></h2>
        <ul class="inquire-menu">
          <li class="inquire-list1 inquire-list">
            <div class="iq-img">
              <img src="/public/images/lee/bike.png" alt="자전거아이콘" />
            </div>
            <p class="iq-text">가전제품, 자전거, 악기 등 <span>포장되지 않은</span> 품목들</p>
          </li>
          <li class="inquire-list2 inquire-list">
            <div class="iq-img">
              <img src="/public/images/lee/shopping-bag.png" alt="쇼핑백아이콘" />
            </div>
            <p class="iq-text">골프배낭, 쇼핑백 등 배낭 <span>입구가 오픈</span>되어 있는 가방들</p>
          </li>
          <li class="inquire-list3 inquire-list">
            <div class="iq-img">
              <img src="/public/images/lee/big-box.png" alt="큰박스아이콘" />
            </div>
            <p class="iq-text">포장은 되어있으나 <span>부피가 큰</span> 품목들</p>
          </li>
        </ul>
      </div>
      <!-- 3-2 불가능 품목 -->
      <div class="diffcult">
        <div class="diffcult-container inner">
          <h2 class="diffcult-title">이런 품목은 <span>어려워요</span></h2>
          <ul class="diffcult-menu">
            <li class="diffcult-list1 diffcult-list">
              <div class="dc-icon">
                <img src="/public/images/lee/cake.png" alt="케이크" />
              </div>
              <p class="dc-text">신선식품, 가공식품, 건강기능 식품 등 모든 <span>식품류</span></p>
            </li>
            <li class="diffcult-list2 diffcult-list">
              <div class="dc-icon">
                <img src="/public/images/lee/plant.png" alt="식물" />
              </div>
              <p class="dc-text">동물, 식물 등 <span>생명</span>을 가지고 있는 모든 것</p>
            </li>
            <li class="diffcult-list3 diffcult-list">
              <div class="dc-icon">
                <img src="/public/images/lee/jewel.png" alt="귀중품" />
              </div>
              <p class="dc-text">
                현금 및 귀중품 등 <span>분실</span> 및 <span>도난</span> 우려가 있는 품목들 <br />
                (분실시 짐꾼은 책임지지 않습니다.)
              </p>
            </li>
            <li class="diffcult-list4 diffcult-list">
              <div class="dc-icon">
                <img src="/public/images/lee/fire.png" alt="성냥" />
              </div>
              <p class="dc-text">부탄가스, 라이터와 같은 <span>발화성/인화성</span> 물질</p>
            </li>
          </ul>
        </div>
      </div>
      <!--  -->
      <!-- 4. 유의사항 -->
      <div class="careful inner">
        <h2 class="careful-title">유의사항</h2>
        <ul class="careful-box">
          <li class="careful-list">
            예약시 숙소명과 주소가 불일치 시 작성해주신 주소로 배송되며, 잘못된 예약으로 인해 발생한 문제는 책임지지
            않습니다.
          </li>
          <li class="careful-list">
            직접 투숙하는 숙소 이외에 짐을 두었다가 파손 및 분실사고 발생 시 책임지지 않습니다.
          </li>
          <li class="careful-list">
            취급하지 않는 품목을 가방에 함께 넣을 경우 파손 및 분실 시 짐꾼은 책임지지 않습니다.
          </li>
          <li class="careful-list">
            수화물의 결함, 교통장애, 천재지변 등의 이유로 수화물의 문제가 발생할 시 ‘짐꾼’에서 책정한 보상특약에 따라
            처리합니다.
          </li>
          <li class="careful-list">
            픽업시 픽업장소에 짐이 없고, 고객님과 연락이 되지 않을 경우 서비스 이용은 취소되며, 환불은 되지 않습니다.
          </li>
          <li class="careful-list">
            고객님의 개인사유로 인해 픽업이 늦어질 경우 미리 고객센터에 연락 주시기 바랍니다.
          </li>
          <li class="careful-list">
            여러개의 짐을 하나로 묶어서 예약한 경우 서비스 이용이 거절될 수 있으며, 거절 될 시 환불이 불가합니다.
          </li>
          <li class="careful-list">
            정확한 가방배송을 위해 카카오톡 가방사진 링크에 가방과 보관장소를 첨부해주시고 업로드 하지 않을 시 발생한
            문제는 책임지지 않습니다.
          </li>
        </ul>
      </div>
    </section>
    <!-- 짐 보관 영역 -->
    <section v-if="activeTap === 'keep'" class="keep-inner">
      <!-- 1. 안전 보관 서비스 -->
      <div class="safe-storage inner">
        <h4 class="safe-title">짐꾼의 안전 <span>보관</span> 서비스</h4>
        <ul class="safe-index">
          <li>
            <div class="safe-list safe-list1">
              <div class="safe-text">
                <h4>위치확인</h4>
                <p>
                  <span>희망하는 지역의 지점 <strong>미리 확인</strong>하기</span>
                </p>
              </div>
              <div class="safe-line"></div>
              <div class="safe-icon">
                <span>01</span>
                <img src="/public/images/lee/safe1.png" alt="안전보관아이콘1" />
              </div>
            </div>
          </li>
          <li>
            <div class="safe-list safe-list2">
              <div class="safe-text">
                <h4>위치확인</h4>
                <p>
                  <span>보관할 짐과 함께 <strong>지점 방문</strong>하기</span>
                </p>
              </div>
              <div class="safe-line"></div>
              <div class="safe-icon">
                <span>02</span>
                <img src="/public/images/lee/safe2.png" alt="안전보관아이콘2" />
              </div>
            </div>
          </li>
          <li>
            <div class="safe-list safe-list3">
              <div class="safe-text">
                <h4>위치확인</h4>
                <p>
                  <span>보관함 선택 및 암호 설정 후 <strong>결제</strong>하기</span>
                </p>
              </div>
              <div class="safe-line"></div>
              <div class="safe-icon">
                <span>03</span>
                <img src="/public/images/lee/safe3.png" alt="안전보관아이콘3" />
              </div>
            </div>
          </li>
          <li>
            <div class="safe-list safe-list4">
              <div class="safe-text">
                <h4>위치확인</h4>
                <p>
                  <span>짐을 안전하게<strong>보관</strong>시작</span>
                </p>
              </div>
              <div class="safe-line"></div>
              <div class="safe-icon">
                <span>04</span>
                <img src="/public/images/lee/safe4.png" alt="안전보관아이콘4" />
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!-- 2. 보관함 위치 맵 -->
      <div class="storage-position inner">
        <h4>짐꾼의 보관함 위치</h4>
        <div id="kakaoMap"></div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "/src/assets/variables";
// 전체 레이아웃
.info-wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.inner {
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
// 2. 배송위치
.dv-position {
  position: relative;
  width: 100%;
  background-color: $sub-color;
  .position-list {
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding-top: 70px;
    > li {
      width: calc(100% / 3);
      max-width: 390px;
      display: flex;
      flex-direction: column;
      align-items: center;
      // justify-content: center;
      padding-bottom: 70px;
      .pst-title {
        padding-top: 55px;
        padding-bottom: 40px;
        font-size: $title-font-S;
        font-weight: bold;
        text-align: center;
      }
      .pst-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        li {
          &:nth-child(2) {
            max-width: 44px;
          }
          &:first-child {
            min-width: 70px;
          }
          &:last-child {
            min-width: 70px;
          }
          img {
            width: 100%;
          }
        }
      }
      .pst-text {
        padding-top: 55px;
        padding-bottom: 60px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
        li {
          width: 100%;
          max-width: 250px;
          font-weight: 500;
          font-size: $text-font-L;
          color: $font-gray;
          span {
            color: $primary-color;
            font-size: $text-font-XL;
            font-weight: bold;
          }
        }
      }
    }
  }
  .dv-position-bg {
    position: absolute;
    width: 100%;
    max-width: 5000px;
    // height: 100%;
    background-color: $sub-color;
    z-index: -1;
  }
}
// 3. 문의/불가능 품목
// 3-1 문의(inquire) 품목
.inquire {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 122px;
  margin-bottom: 120px;
  .inquire-title {
    font-size: $title-font-M;
    font-weight: bold;
    min-width: 240px;
    span {
      color: $primary-color;
    }
  }
  .inquire-menu {
    display: flex;
    flex-direction: column;
    gap: 45px;
    width: 100%;
    max-width: 800px;
    .inquire-list {
      display: flex;
      align-items: center;
      width: 100%;
      gap: 30px;
      background-color: $sub-color;
      border-radius: 10px;
      .iq-img {
        width: 110px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 25px 0;
        margin-left: 60px;
        img {
          max-width: 102px;
        }
      }
      .iq-text {
        font-size: 18px;
        color: $font-gray;
        font-weight: 500;
        span {
          font-size: 20px;
          color: $font-primary;
          font-weight: bold;
        }
      }
    }
  }
}
// 3-2 불가능(diffcult) 품목
.diffcult {
  position: relative;
  width: 100%;
  padding-top: 120px;
  padding-bottom: 120px;
  background-color: $sub-color;
  .diffcult-container {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .diffcult-title {
      font-size: $title-font-M;
      font-weight: bold;
      min-width: 240px;
      span {
        color: $primary-color;
      }
    }
    .diffcult-menu {
      display: flex;
      flex-direction: column;
      gap: 45px;
      width: 100%;
      max-width: 800px;
      .diffcult-list {
        display: flex;
        align-items: center;
        width: 100%;
        gap: 30px;
        background-color: $white;
        border-radius: 10px;
        .dc-icon {
          width: 110px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 25px 0;
          margin-left: 60px;
          img {
            max-width: 102px;
          }
        }
        .dc-text {
          font-size: 18px;
          color: $font-gray;
          font-weight: 500;
          span {
            font-size: 20px;
            color: $font-primary;
            font-weight: bold;
          }
        }
      }
    }
  }
}
// 4. 유의사항
.careful {
  width: 100%;
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  .careful-title {
    font-size: $title-font-XL;
    font-weight: bold;
  }
  .careful-box {
    display: flex;
    flex-direction: column;
    gap: 20px;
    .careful-list {
      list-style: disc;
      font-size: $text-font-L;
      font-weight: 300;
      color: $font-primary;
    }
  }
}
// 반응형 레이아웃
@media screen and (max-width: 1000px) {
  .fast-list::after {
    display: none !important;
  }
  .iq-text,
  .dc-text {
    font-size: 16px !important;
  }
  .iq-text span,
  .dc-text span {
    font-size: 18px !important;
  }
}
//
// 짐 보관 영역
// 1. 안전 보관 서비스
.safe-storage {
  width: 100%;
  display: flex;
  flex-direction: column;
  .safe-title {
    font-weight: 600;
    font-size: $title-font-M;
    margin: 0 auto;
    margin-bottom: 70px;
    span {
      color: $primary-color;
    }
  }
  .safe-index {
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
      .safe-list {
        width: 90%;
        max-width: 240px;
        min-width: 175px;
        max-height: 326px;
        border: 1px solid rgba(229, 229, 236, 1);
        border-radius: 10px;
        box-shadow: $info-boxShadow;
        padding: 0 25px;
        .safe-text {
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
            display: flex;
            align-items: center;
            span {
              strong {
                color: $font-primary;
                font-weight: 600;
              }
            }
          }
        }
        .safe-line {
          width: 100%;
          padding: 0 25px;
          height: 2px;
          background-color: $bg-light;
          margin: 0;
        }
        .safe-icon {
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
      .safe-list1,
      .safe-list2,
      .safe-list3 {
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
    }
  }
}
// 반응형 레이아웃
@media screen and (max-width: 1000px) {
  .safe-list::after {
    display: none !important;
  }
}
</style>
