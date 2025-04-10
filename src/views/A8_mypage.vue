<script setup></script>

<template>
  <!-- 페이지 전체 -->
  <div class="mypage-wrap">
    <!-- 마이페이지 콘텐츠 all -->
    <div class="mypage-all">
      <!-- 첫번째 영역 -->
      <div class="my-intro">
        <!-- 첫번째 영역 타이틀 -->
        <div class="intro-name">
          <h1>서강준</h1>
          <h2>님</h2>
          <h3>의 여행을 가볍게!</h3>
          <h4>정보수정</h4>
        </div>
        <!-- 첫번째 영역 박스들 -->
        <div class="intro-current">
          <!-- 첫번째 영역 박스 1 -->
          <div class="current-ing">
            <div class="ing-text">
              <span>진행중인 예약</span>
              <div class="ing-text-p">
                <p class="ing-number">2</p>
                <p>건</p>
              </div>
            </div>
            <div class="ing-img img1">
              <img src="/public/images/hong/mypage-reservation-icon.png" alt="진행중인 예약" />
            </div>
          </div>
          <!-- 첫번째 영역 박스 2 -->
          <div class="current-ing">
            <div class="ing-text">
              <span>배송 진행중</span>
              <div class="ing-text-p">
                <p class="ing-number">1</p>
                <p>건</p>
              </div>
            </div>
            <div class="ing-img img2">
              <img src="/public/images/hong/mypage-delivery-icon.png" alt="배송 진행중" />
            </div>
          </div>
          <!-- 첫번째 영역 박스 3 -->
          <div class="current-ing">
            <div class="ing-text">
              <span>보유 쿠폰</span>
              <div class="ing-text-p">
                <p class="ing-number">2</p>
                <p>장</p>
              </div>
            </div>
            <div class="ing-img img3">
              <img src="/public/images/hong/mypage-coupon-icon.png" alt="보유 쿠폰" />
            </div>
          </div>
          <!-- 첫번째 영역 박스 4 -->
          <div class="current-ing">
            <div class="ing-text">
              <span>작성 후기</span>
              <div class="ing-text-p">
                <p class="ing-number">0</p>
                <p>건</p>
              </div>
            </div>
            <div class="ing-img img4">
              <img src="/public/images/hong/mypage-review-icon.png" alt="작성 후기" />
            </div>
          </div>
        </div>
      </div>

      <!-- 두번째 영역 -->
      <div class="my-second">
        <!-- 두번째 영역 타이틀 -->
        <div class="second-title">
          <h3>최근 이용 내역</h3>
          <p>전체보기</p>
        </div>
        <!-- 두번째 영역 박스들 -->
        <div class="second-boxes">
          <!-- 박스 1 -->
          <div class="sec-box">
            <div class="sec-box1-texts">
              <div class="sec-box1-texts-p">
                <p>집 앞</p>
                <p class="sec-arrow">→</p>
                <p>숙소</p>
              </div>
                <span>2025.01.08</span>
            </div>
            <div class="sec-box1-status status1">
              <p>배송 중</p>
            </div>
          </div>
          <!-- 박스 2 -->
          <div class="sec-box">
            <div class="sec-box1-texts">
              <div class="sec-box1-texts-p">
                <p>숙소</p>
                <p class="sec-arrow">→</p>
                <p>집 앞</p>
              </div>
                <span>2025.01.22</span>
            </div>
            <div class="sec-box1-status status2">
              <p>인수 대기</p>
            </div>
          </div>
          <!-- 박스 3 -->
          <div class="sec-box">
            <div class="sec-box1-texts">
              <div class="sec-box1-texts-p">
                <p>서울역</p>
                <p class="sec-arrow">→</p>
                <p>대구 공항</p>
              </div>
                <span>2025.01.25</span>
            </div>
            <div class="sec-box1-status status3">
              <p>배송 완료</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 세번째 영역 + 네번째 영역 -->
      <div class="my-third-forth">
        <!-- 세번째 영역 -->
        <div class="my-third">
          <!-- 세번째 영역 타이틀 -->
          <div class="third-title">
            <h3>내가 작성한 후기</h3>
            <p>전체보기</p>
          </div>
          
            <img src="/public/images/hong/mypage-review-empty-icon.png" alt="내가 작성한 후기" />
          
        </div>

        <!-- 네번째 영역 -->
        <div class="my-forth">
          <!-- 네번째 영역 타이틀 -->
          <div class="forth-title">
            <h3>나의 쿠폰함</h3>
            <p>전체보기</p>
          </div>
          <!-- 네번째 영역 박스들 -->
          <div class="forth-boxes">
            <!-- 네번째 박스 1 -->
            <div class="forth-box">
              <!-- 네번째 박스 왼쪽 텍스트 -->
              <div class="forth-box-texts">
                <div class="forth-box-texts-price">
                  <p>2,000</p>
                  <span>원 할인</span>
                </div>
                <p>2025.03.31까지</p>
              </div>
              <!-- 네번째 박스 오른쪽 버튼 -->
              <div class="forth-box-button">
                <p>사용하기</p>
              </div>
            </div>
            <!-- 네번째 박스 2 -->
            <div class="forth-box">
              <!-- 네번째 박스 왼쪽 텍스트 -->
              <div class="forth-box-texts">
                <div class="forth-box-texts-price">
                  <p>5,000</p>
                  <span>원 할인</span>
                </div>
                <p>2025.03.29까지</p>
              </div>
              <!-- 네번째 박스 오른쪽 버튼 -->
              <div class="forth-box-button">
                <p>사용하기</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "/src/assets/variables";
// 페이지 전체
.mypage-wrap {
  background-color: $sub-color;
  display: flex;
  justify-content: center;
  align-items: center;
  //   내용 전체
  .mypage-all {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin: 100px 0;
    //   첫번째 영역
    .my-intro {
      padding: 70px 40px 50px;
      background-color: $white;
      width: 100%;
      max-width: 980px;
      border-radius: 10px;
      box-shadow: $reservation-boxShadow;
      // 첫번째 영역 타이틀
      .intro-name {
        margin-bottom: 50px;
        display: flex;
        // gap: 5px;
        align-items: center;
        justify-content: flex-start;
        h1 {
          font-size: $title-font-L;
          font-weight: 700;
          margin-right: 5px;
        }
        h2 {
          font-size: $title-font-L;
          font-weight: 500;
          margin-right: 9px;
        }
        h3 {
          font-size: $text-font-XL;
          color: $white;
          background-color: $primary-color;
          border-radius: 50px;
          text-align: center;
          line-height: 30px;
          padding: 3px 9px;
        }
        h4 {
          margin-left: auto;
          text-decoration: underline;
          color: $font-light-gray;
          cursor: pointer;
        }
      }
      // 첫번째 영역 박스들
      .intro-current {
        display: flex;
        justify-content: space-between;
        gap: 20px;
        // 첫번째 영역 박스
        .current-ing {
          display: flex;
          align-items: flex-end;
          border: 1px solid $bg-primary;
          border-radius: 10px;
          box-shadow: 2px 4px 10px rgba(17, 17, 17, 0.02);
          padding: 25px 30px;
          gap: 25px;
          cursor: pointer;
          .ing-text {
            display: flex;
            flex-direction: column;
            gap: 4px;
            span {
              font-size: $text-font-M;
              color: $font-gray;
            }
            .ing-text-p {
              display: flex;
              align-items: center;
              gap: 2px;
              .ing-number {
                font-size: $title-font-S;
                font-weight: 700;
                color: $primary-color;
              }
              p {
                font-size: $text-font-XL;
                font-weight: 700;
              }
            }
          }
          // 박스 1 아이콘
          .ing-img {
            width: 30px;
            img {
              width: 100%;
            }
          }
          // 박스 2 아이콘
          .img2 {
            width: 50px;
            img {
              width: 100%;
            }
          }
          // 박스 3 아이콘
          .img3 {
            width: 40px;
            img {
              width: 100%;
            }
          }
          // 박스 4 아이콘
          .img4 {
            width: 35px;
            img {
              width: 100%;
            }
          }
        }
      }
    }

    //   두번째 영역
    .my-second {
      padding: 40px;
      background-color: $white;
      width: 100%;
      max-width: 980px;
      border-radius: 10px;
      box-shadow: $reservation-boxShadow;
      // 두번째 영역 타이틀
      .second-title {
        display: flex;
        justify-content: space-between;
        margin-bottom: 25px;
        h3 {
          font-size: $text-font-L;
          font-weight: 700;
        }
        p {
          font-size: $text-font-S;
          color: $font-light-gray;
          text-decoration: underline;
          cursor: pointer;
        }
      }
      // 두번째 영역 박스들
      .second-boxes {
        display: flex;
        flex-direction: column;
        gap: 20px;
        // 박스 1
        .sec-box {
          border: 1px solid $input-select;
          border-radius: 10px;
          padding: 20px 25px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          .sec-box1-texts {
            display: flex;
            flex-direction: column;
            gap: 9px;
            .sec-box1-texts-p{
              display: flex;
              gap: 10px;
              p {
                font-weight: 500;
              }
              .sec-arrow {
              }
            }
            span {
              font-size: $text-font-XS;
              color: $font-light-gray;
            }
          }
          .sec-box1-status {
            p {
            }
          }
          .status1 {
            padding: 5px 12px;
            color: #78e976;
            background-color: #f5fee8;
            border-radius: 50px;
          }
          .status2 {
            padding: 5px 12px;
            color: #ffa945;
            background-color: #fef8e8;
            border-radius: 50px;
          }
          .status3 {
            padding: 5px 12px;
            color: #45a6ff;
            background-color: #e8f9fe;
            border-radius: 50px;
          }
        }
      }
    }

    // 세번째 + 네번째 영역
    .my-third-forth {
      display: flex;
      gap: 20px;
      // 세번째 영역
      .my-third {
        background-color: $white;
        width: 100%;
        max-width: 480px;
        border-radius: 10px;
        box-shadow: $reservation-boxShadow;
        padding: 40px;
position: relative;
        // 세번째 영역 타이틀
        .third-title {
          display: flex;
          justify-content: space-between;
          margin-bottom: 25px;
          h3 {
            font-size: $text-font-L;
            font-weight: 700;
          }
          p {
            font-size: $text-font-S;
            color: $font-light-gray;
            text-decoration: underline;
            cursor: pointer;
          }
        }
        
          img {
            display: block;
            position: absolute;
            top: 55%;
            left: 50%;
            transform: translate(-50% , -50%);
            height: 38.26px;
            width: 50px;
          }
        
      }
      // 네번째 영역
      .my-forth {
        background-color: $white;
        width: 100%;
        max-width: 480px;
        border-radius: 10px;
        box-shadow: $reservation-boxShadow;
        padding: 40px;
        // padding: 20px 15px 15px;
        // 네번째 영역 타이틀
        .forth-title {
          display: flex;
          justify-content: space-between;
          margin-bottom: 25px;
          h3 {
            font-size: $text-font-L;
            font-weight: 700;
          }
          p {
            font-size: $text-font-S;
            color: $font-light-gray;
            text-decoration: underline;
            cursor: pointer;
          }
        }
        //   네번째 영역 박스들
        .forth-boxes {
          display: flex;
          flex-direction: column;
          gap: 15px;
          // 박스 1
          .forth-box {
            border: 1px solid $input-select;
            border-radius: 10px;
            padding: 20px 25px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            // 왼쪽 텍스트
            .forth-box-texts {
              display: flex;
              flex-direction: column;
              gap: 8px;
              .forth-box-texts-price {
                display: flex;
                p {
                  font-size: $text-font-L;
                  font-weight: 700;
                  color: $font-primary;
                  line-height: 20px;
                }
                span {
                  font-size: $text-font-M;
                  font-weight: 700;
                  line-height: 20px;
                }
              }
              p {
                font-size: $text-font-XS;
                color: $font-light-gray;
              }
            }
            // 오른쪽 버튼
            .forth-box-button {
              cursor: pointer;
              p {
                font-size: $text-font-S;
                color: $white;
                border-radius: 8px;
                padding: 7px 14px;
                background-color: $font-primary;
              }
            }
          }
        }
      }
    }
  }
}
</style>
