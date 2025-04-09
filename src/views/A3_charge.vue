<script setup></script>

<template>
  <section class="charge-wrap inner">
    <!-- 요금안내 타이틀 -->
    <h2 class="charge-title"><span>배송 서비스 요금 안내</span></h2>
    <!-- 1. 요금안내 품목 -->
    <ul class="charge-menu">
      <li class="charge-list charge-list1">
        <div class="list-box">
          <div class="icon-box">
            <img src="/public/images/lee/chargeIcon1.png" alt="케리어아이콘" />
          </div>
          <p class="list-text">
            <span class="lt1">캐리어</span>
            <span class="lt2">기내용, 화물용 등</span>
          </p>
          <h4 class="price">￦ 11,000 ~</h4>
        </div>
      </li>
      <li class="charge-list charge-list2">
        <div class="list-box">
          <div class="icon-box">
            <img src="/public/images/lee/chargeIcon2.png" alt="가방아이콘" />
          </div>
          <p class="list-text">
            <span class="lt1">백팩</span>
            <span class="lt2">소형 및 대형 배낭 등</span>
          </p>
          <h4 class="price">￦ 11,000 ~</h4>
        </div>
      </li>
      <li class="charge-list charge-list3">
        <div class="list-box">
          <div class="icon-box">
            <img src="/public/images/lee/chargeIcon3.png" alt="골프가방아이콘" />
          </div>
          <p class="list-text">
            <span class="lt1">기타</span>
            <span class="lt2">레디백, 골프백 등</span>
          </p>
          <h4 class="price">￦ 6,000 ~</h4>
        </div>
      </li>
    </ul>
    <!-- 2. 사이즈 가격 측정 안내 -->
    <div class="size-wrap">
      <div class="size-info">
        <ul class="size-text">
          <li class="s-size size">
            <ul class="sub-info">
              <li class="size"><span>S 사이즈</span></li>
              <li class="size-length"><span>~54cm / ~10kg</span></li>
              <li class="size-price"><span>￦ 11,000</span></li>
            </ul>
          </li>
          <li class="m-size size">
            <ul class="sub-info">
              <li class="size"><span>M 사이즈</span></li>
              <li class="size-length"><span>~65cm / ~20kg</span></li>
              <li class="size-price"><span>￦ 16,000</span></li>
            </ul>
          </li>
          <li class="l-size size">
            <ul class="sub-info">
              <li class="size"><span>L 사이즈</span></li>
              <li class="size-length"><span> 66cm~ / ~30kg</span></li>
              <li class="size-price"><span>￦ 21,000</span></li>
            </ul>
          </li>
          <li class="ex-size size">
            <ul class="sub-info">
              <li class="size"><span>기타</span></li>
              <li class="size-length"><span> 30kg ~</span></li>
              <li class="size-price"><span> 가격 문의</span></li>
            </ul>
          </li>
        </ul>
        <div class="size-img">
          <img src="/public/images/lee/sizeinfo.png" alt="사이즈예시" />
        </div>
      </div>
      <p class="size-text-info">
        <span>최고 길이</span> 또는 <span>최고 무게</span>에 따라 사이즈가 산정됩니다. ex) 무게가 <span>18kg</span> &
        최고길이가 <span>60cm</span>인 캐리어 = <span>M</span>사이즈
      </p>
    </div>
    <!-- 3. 거리에 따른 추가요금 -->
    <div class="distance-wrap">
      <h3 class="distance-title">추가요금 안내</h3>
      <ul class="distance-text">
        <li class="divide divide1">
          <ul class="sub-divide">
            <li><span class="divide-title">구분</span></li>
            <li><span class="divide-title">타권역</span></li>
            <li><span class="divide-title">동일권역</span></li>
          </ul>
        </li>
        <li class="divide">
          <ul class="sub-divide">
            <li><span class="divide-title">S 사이즈</span></li>
            <li><span class="divide-text">+ 0원</span></li>
            <li><span class="divide-text">+ 0원</span></li>
          </ul>
        </li>
        <li class="divide">
          <ul class="sub-divide">
            <li><span class="divide-title">M 사이즈</span></li>
            <li><span class="divide-text">+ 1,000원</span></li>
            <li><span class="divide-text">+ 0원</span></li>
          </ul>
        </li>
        <li class="divide">
          <ul class="sub-divide">
            <li><span class="divide-title">L 사이즈</span></li>
            <li><span class="divide-text">+ 2,000원</span></li>
            <li><span class="divide-text">+ 0원</span></li>
          </ul>
        </li>
      </ul>
      <p class="distance-info">
        <span>※ 권역소개</span>
        <span>타권역 : 동일권역 외 모든 지역</span>
        <span>동일권역 : 출발지로부터 150km 내에 위치</span>
      </p>
    </div>
    <!-- 4. 유의 사항 -->
    <div class="charge-careful inner">
      <h2 class="charge-careful-title">유의사항</h2>
      <ul class="charge-careful-box">
        <li class="charge-careful-list">서비스 이용 하루 전날 18:00시까지 취소 및 변경이 가능합니다.(취소시 100% 환불)</li>
        <li class="charge-careful-list">서비스 이용 1일전 18시이후부터는 취소 및 환불이 불가하오니 유의하시기 바랍니다.</li>
        <li class="charge-careful-list">짐꾼의 픽업방식으로 인해 당일 예약은 불가능합니다.</li>
        <li class="charge-careful-list">배송 짐에 아이스박스 포함 시 꼭 문의하시기 바랍니다.</li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "/src/assets/variables";
// 이너 값
.inner {
  width: 100%;
  max-width: 1240px;
  padding: 0 20px;
  margin: 0 auto;
}
// 전체 레이아웃
.charge-wrap {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  //   요금안내 타이틀
  .charge-title {
    width: 100%;
    max-width: 560px;
    // height: 60px;
    padding: 15px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid rgba(229, 229, 236, 1);
    margin: 70px 0;
    // 타이틀 글자조절
    span {
      color: $font-light-gray;
      font-size: $title-font-S;
      font-weight: bold;
    }
  }
  //   1. 요금 안내 품목
  .charge-menu {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    margin-top: 30px;
    margin-bottom: 75px;
    // li
    .charge-list {
      display: flex;
      align-items: center;
      justify-content: center;
      width: calc(100% / 3);
      max-width: 270px;
      box-shadow: $info-boxShadow;
      .list-box {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
        margin: 50px 0;

        .icon-box {
          width: 70px;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            max-width: 66px;
            max-height: 120px;
          }
        }
        .list-text {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          .lt1 {
            font-size: $title-font-XS;
            font-weight: bold;
            color: $font-primary;
          }
          .lt2 {
            font-size: $text-font-M;
            color: $font-light-gray;
          }
        }
        .price {
          font-size: $title-font-XS;
          color: $primary-color;
          font-weight: bold;
        }
      }
    }
  }
  //   2. 사이즈 가격 측정 안내
  .size-wrap {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 100px;
    .size-info {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      background-color: $sub-color;
      padding: 80px 20px;
      .size-text {
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 40px;
        .size {
          .sub-info {
            width: 100%;
            display: flex;
            align-items: center;
            li {
              width: calc(100% / 3);
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .size {
              span {
                font-size: $title-font-S;
                font-weight: 600;
                color: $font-gray;
              }
            }
            .size-length {
              span {
                font-size: $text-font-M;
                font-weight: 500;
                color: $font-light-gray;
              }
            }
            .size-price {
              span {
                font-size: $title-font-S;
                font-weight: bold;
                color: $primary-color;
              }
            }
          }
        }
      }
      .size-img {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    // 2-1. size info text
    .size-text-info {
      width: 100%;
      font-size: $text-font-S;
      color: $font-light-gray;
      text-align: right;
      span {
        color: $font-primary;
      }
    }
  }
  // 3. 거리에 따른 추가요금
  .distance-wrap {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;
    .distance-title {
      font-size: $title-font-M;
      font-weight: bold;
      min-width: 240px;
      margin-bottom: 80px;
      text-align: center;
    }
    .distance-text {
      width: 100%;
      max-width: 1000px;
      display: flex;
      flex-direction: column;
      gap: 40px;
      padding-bottom: 60px;
      border-bottom: 1px solid rgba(118, 118, 118, 0.2);
      .divide1 {
        margin-bottom: 10px;

        padding-bottom: 30px;
        border-bottom: 1px solid rgba(118, 118, 118, 0.2);
      }
      .divide {
        width: 100%;
        // flex-direction: column;
        .sub-divide {
          width: 100%;
          display: flex;

          li {
            width: calc(100% / 3);
            display: flex;
            align-items: center;
            justify-content: center;
            .divide-title {
              color: $font-primary;
              font-size: $title-font-XS;
              font-weight: bold;
            }
            .divide-text {
              color: $font-gray;
              font-size: $text-font-L;
            }
          }
        }
      }
    }
    .distance-info {
      width: 100%;
      max-width: 1000px;
      display: flex;
      flex-direction: column;
      gap: 5px;
      margin-top: 20px;
      span {
        font-size: $text-font-S;
        font-weight: bold;
        color: $font-light-gray;
      }
    }
  }
  // 4. 유의사항
  .charge-careful {
    width: 100%;
    margin-top: 10px;
    margin-bottom: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    .charge-careful-title {
      font-size: $title-font-XL;
      font-weight: bold;
    }
    .charge-careful-box {
      display: flex;
      flex-direction: column;
      gap: 20px;
      .charge-careful-list {
        list-style: disc;
        font-size: $text-font-L;
        font-weight: 300;
        color: $font-primary;
      }
    }
  }
} // 전체 레이아웃 닫힘 영역
@media screen and (max-width: 900px) {
  .size-img img {
    width: 225px !important;
    height: 180px !important;
  }
  .sub-info .size span {
    font-size: $title-font-XS !important;
  }
  .sub-info .size-length span {
    font-size: $text-font-S !important;
  }
  .sub-info .size-price span {
    font-size: $title-font-XS !important;
  }
}
</style>
