<script setup>
import { ref } from "vue";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/autoplay";
// 슬라이드 이미지 데이터
const slides = ref(["/images/hong/mainbanner1.png", "/images/hong/mainbanner2.png", "/images/hong/mainbanner3.png", "/images/hong/mainbanner4.png"]);
</script>

<template>
  <div class="main-wrap">
    <!-- 메인배너 슬라이드 -->
    <section class="visual">
      <Swiper :modules="[Autoplay]" :loop="true" :autoplay="{ delay: 3000 }">
        <SwiperSlide v-for="(slide, index) in slides" :key="index">
          <div class="slide" :style="{ backgroundImage: `url(${slide})` }"></div>
        </SwiperSlide>
      </Swiper>
    </section>
    <!-- 파트 1 -->
    <section class="a1-part1 inner">
      <div class="a1-part1-title">
        <h3>짐꾼 혜택</h3>
        <p>지금 받을 수 있는</p>
        <p>혜택을 확인해보세요.</p>
      </div>
      <ul class="a1-part1-boxes">
        <li class="part1-box1 part1-box">
          <div class="part1-img">
            <img src="/public/images/hong/smallbanner-coupon.png" alt="혜택1" />
          </div>
          <div class="box1-text">
            <h3>짐꾼 혜택 몰아보기</h3>
            <p>앱 다운로드 고객 한정 할인 중</p>
          </div>
        </li>
        <li class="part1-box2 part1-box">
          <div class="part1-img">
            <img src="/public/images/hong/smallbanner-protect.png" alt="혜택2" />
          </div>
          <div class="box1-text">
            <h3>짐꾼 혜택 몰아보기</h3>
            <p>앱 다운로드 고객 한정 할인 중</p>
          </div>
        </li>
        <li class="part1-box3 part1-box">
          <div class="part1-img">
            <img src="/public/images/hong/smallbanner-english.png" alt="혜택3" />
          </div>
          <div class="box1-text">
            <h3>짐꾼 혜택 몰아보기</h3>
            <p>앱 다운로드 고객 한정 할인 중</p>
          </div>
        </li>
      </ul>
    </section>

    <!-- 파트 2 제목-->
    <section class="a1-part2 inner">
      <div class="a1-part2-title">
        <h3>여행가방 걱정 끝</h3>
        <p>짐꾼은 집앞에서 역/공항으로 역/공항에서 숙소로 여행짐을</p>
        <p>배송하는 캐리어 딜리버리 서비스입니다.</p>
      </div>

      <!-- 파트2 내용 -->
      <div class="part2-contents-all">
        <!-- 왼쪽 두개 -->
        <div class="part2-left">
          <!-- 1 -->
          <div class="p2-contents">
            <!-- 아이콘 -->
            <div class="p2-contents-icons">
              <img src="/public/images/hong/part2-icon1.png" alt="해외출장" />
              <h3>해외출장</h3>
            </div>
            <!-- 말풍선 글 -->
            <div class="p2-contents-texts">
              <h3>출장갈때, 더 편하게 짐꾼!</h3>
              <p>미팅 끝나고 가는 출장까지, <br> 짐은 짐꾼에 맡기고 두 손 가볍게 <br>이동하세요!</p>
              <div class="bubble-img">
                <img src="/public/images/hong/bubble-left.png" alt="말풍선" />
              </div>
            </div>
          </div>
          <!-- 2 -->
          <div class="p2-contents">
            <!-- 아이콘 -->
            <div class="p2-contents-icons">
              <img src="/public/images/hong/part2-icon2.png" alt="골프투어" />
              <h3>골프투어</h3>
            </div>
            <!-- 말풍선 글 -->
            <div class="p2-contents-texts">
              <h3>골프투어도, 더 즐겁게 짐꾼!</h3>
              <p>골프, 스쿠버다이빙, 서핑, 스키! <br>즐거운만큼 무거운 취미 용품들 <br>짐꾼이 안전하게 배송해드릴게요!</p>
              <div class="bubble-img">
                <img src="/public/images/hong/bubble-left.png" alt="말풍선" />
              </div>
            </div>
          </div>
        </div>

        <!-- 오른쪽 두개 -->
        <div class="part2-right">
          <!-- 3 -->
          <div class="p2-contents">
            <!-- 말풍선 글 -->
            <div class="p2-contents-texts">
              <h3>주말여행 갈 때, 더 빠르게 짐꾼!</h3>
              <p>짧은 주말을 이용해 떠나는 여행! <br>회사에 들고가자니 눈치보이는 <br>캐리어 짐꾼이 먼저 옮겨드릴게요!</p>
              <div class="bubble-img">
                <img src="/public/images/hong/bubble-right.png" alt="말풍선" />
              </div>
            </div>
            <!-- 아이콘 -->
            <div class="p2-contents-icons">
              <img src="/public/images/hong/part2-icon3.png" alt="주말여행" />
              <h3>주말여행</h3>
            </div>
          </div>
          <!-- 4 -->
          <div class="p2-contents">
            <!-- 말풍선 글 -->
            <div class="p2-contents-texts">
              <h3>퇴근 후 여행, 더 가볍게 짐꾼!</h3>
              <p>사람 많고, 정신없는 출근시간 <br>지옥철에 크고 무거운 캐리어와 <br>함께 타는 건 이제 그만!</p>
              <div class="bubble-img">
                <img src="/public/images/hong/bubble-right.png" alt="말풍선" />
              </div>
            </div>
            <!-- 아이콘 -->
            <div class="p2-contents-icons">
              <img src="/public/images/hong/part2-icon4.png" alt="퇴근여행" />
              <h3>퇴근여행</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>

// 폰트 칼라 하나도 안 넣음 . 넣기!!!

@import "/src/assets/variables";
.inner {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 20px;
}
.main-wrap {
  width: 100%;
  /* 슬라이드 */
  .visual {
    width: 100%;
  }
  .slide {
    width: 100%;
    height: 38vw;
    background-size: cover;
    background-position: center;
  }
  /* part 1 */
  .a1-part1 {
    display: flex;
    justify-content: space-between;
    margin-top: 130px;
    /* 타이틀 */
    .a1-part1-title {
      width: 30%;
      h3 {
        font-size: $title-font-M;
        font-weight: bold;
        margin-bottom: 15px;
      }
      p {
        line-height: 20px;
      }
    }
    /* 이미지 박스 */
    /* ul */
    .a1-part1-boxes {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 65%;
      gap: 20px;
      /* li */
      .part1-box {
        display: flex;
        flex-direction: column;
        width: calc((100% - 100px) / 3);
        overflow: hidden;
        border: 1px solid $input-select;
        border-radius: 10px;

        .part1-img {
          width: 100%;
          img {
            width: 100%;
          }
        }
        .box1-text {
          padding: 18px;
          h3 {
            font-size: $text-font-XL;
            font-weight: bold;
            margin-bottom: 8px;
          }
          p {
            font-size: $text-font-S;
          }
        }
      }
    }
  }

  //   part 2
  .a1-part2 {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    gap: 50px;
    //   p2 제목
    .a1-part2-title {
      text-align: center;
      h3 {
        font-size: $title-font-L;
        font-weight: bold;
        margin-bottom: 12px;
      }
      p {
        font-size: $text-font-XS;
        line-height: 16px;
      }
    }

    //  p2 내용
    .part2-contents-all {
      display: flex;
      justify-content: center;
      gap: 100px;
      //   왼쪽 둘
      .part2-left {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 45px;
        // 1
        .p2-contents {
          display: flex;
          align-items: center;
          gap: 75px;
          // 아이콘
          .p2-contents-icons {
            display: flex;
            flex-direction: column;
            text-align: center;
            gap: 10px;
            width: 100px;
            img {
              width: 100%;
            }
            h3 {
              font-size: $title-font-S;
              font-weight: 600; //semibold
            }
          }
          // 말풍선 글
          .p2-contents-texts {
            position: relative;
            width: 200px;
            h3 {
              font-size: $text-font-M;
              font-weight: 600;
              margin-bottom: 10px;
            }
            p {
              font-size: $text-font-S;
              line-height: 16px;
            }
              .bubble-img{
                  position: absolute;
                  bottom: -36px;
                  left: 38%;
                  transform: translateX(-50%);
                  width: 280px;
                  z-index: -1;
                img{
                    width: 100%;
                    display: block;
                }
            }
          }
        }
      }

      // 오른쪽 둘
      .part2-right {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 45px;
        // 3
        .p2-contents {
          display: flex;
          align-items: center;
          gap: 70px;
          // 아이콘
          .p2-contents-icons {
              display: flex;
              flex-direction: column;
              text-align: center;
              gap: 10px;
              width: 100px;
              img {
                  width: 100%;
                }
                h3 {
                    font-size: $title-font-S;
                    font-weight: 600; //semibold
                }
            }
            // 말풍선 글
            .p2-contents-texts {
              // background: url("/public/images/hong/bubble-right.png") center center / cover no-repeat;
              position: relative;
              width: 200px;
              h3 {
                font-size: $text-font-M;
                font-weight: 600;
                margin-bottom: 10px;
              }
              p {
                font-size: $text-font-S;
                line-height: 16px;
              }
              .bubble-img{
                  position: absolute;
                  bottom: -36px;
                  left: 55%;
                  transform: translateX(-50%);
                  width: 280px;
                  z-index: -1;
                img{
                    width: 100%;
                    display: block;
                }
            }
            }
        }
      }
    }
  }
}
</style>
