<script setup>
import { ref } from "vue";
// 결제 , step
const emit = defineEmits(["next", "prev"]);
defineProps({ resevationData: Object });
const agree = ref(false);
const prevStep = () => emit("prev");
const confirmPayment = () => emit("next", { paymentComfirmed: true });
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
            src="/public/images/jung/reservation-bar2.png"
            alt="예약진행바" />
        </div>
        <div class="progress_text">
          <p>예약하기</p>
          <p>확인 및 결제</p>
          <p>예약완료</p>
        </div>
      </section>
      <!-- 하단 -->
      <section class="res_order_wrap">
        <form class="card_form card_box">
          <!-- 예약확인 영역 -->
          <h2 class="pay_title">예약정보<span>*</span></h2>
          <div class="res_pay_card res_cart">
            <ul class="cart_row">
              <li>
                <label>출발지</label>
                <div>대구역</div>
              </li>
              <li>
                <label>짐 맡길 일정</label>
                <div>몇일 몇시</div>
              </li>
              <li>
                <label>도착지</label>
                <div>동대구역</div>
              </li>
              <li>
                <label>짐 찾을 일정</label>
                <div>몇일 몇시</div>
              </li>
              <li>
                <label>수하물</label>
                <div>L 1개</div>
              </li>
            </ul>
            <div class="cart_line"></div>
            <!-- 수정 버튼 -->
            <div class="edbtn">
              <button class="edit_btn">수정</button>
            </div>
          </div>
        </form>
        <!-- 예약정보 확인 끝 -->
        <form>
          <!-- 예약자 정보 -->
          <div class="res_info card_box">
            <h2 class="pay_title">예약자 정보<span>*</span></h2>
            <div class="res_pay_card">
              <ul>
                <!-- 라디오 체크 박스 -->
                <div class="nation_check">
                  <li>
                    <label class="nation">
                      <input
                        type="radio"
                        name="od_nation"
                        value="D"
                        class="form_check_input"
                        checked />내국인
                    </label>
                  </li>
                  <li>
                    <label class="nation">
                      <input
                        type="radio"
                        name="od_nation"
                        value="D"
                        class="form_check_input"
                        checked />외국인
                    </label>
                  </li>
                </div>
                <!-- 예약자 이름 입력 -->
                <li class="info_row">
                  <label class="res_info_title">예약자 성명</label>
                  <input
                    class="res_info_input"
                    type="text"
                    placeholder="보내는 사람의 성함을 입력해 주세요."
                    required />
                </li>
                <!-- 휴대폰 번호 -->
                <li class="info_row">
                  <label class="res_info_title">휴대폰 번호</label>
                  <select class="res_select res_info_input">
                    <optgroup label="번호선택">
                      <option value="010">010</option>
                      <option value="010">011</option>
                    </optgroup>
                  </select>
                  <input
                    class="res_info_input"
                    type="text"
                    placeholder="카카오 알림톡을 받으실 연락처를 알려주세요."
                    id="number_input"
                    required />
                </li>
                <!-- 이메일 -->
                <li class="info_row">
                  <label class="res_info_title">이메일</label>
                  <input
                    class="res_info_input"
                    type="text"
                    placeholder="예약확정 안내 메일이 전송됩니다."
                    required />
                </li>
              </ul>
            </div>
          </div>
          <!-- 결제 정보 -->
          <div class="res_payment_info card_box">
            <h2 class="pay_title">결제 정보<span>*</span></h2>
            <!-- 결제 수단 선택 -->
            <div class="res_pay_card">
              <div class="res_pay_sl">
                <h3>결제 방법</h3>

                <fieldset>
                  <input
                    type="radio"
                    name="od_settle"
                    class="form_check_input"
                    value="신용카드"
                    id="od_settle_card" />
                  <label for="od_settle_card">신용카드</label>
                  <input
                    type="radio"
                    name="od_settle"
                    class="form_check_input"
                    value="계좌이체"
                    id="od_settle_iche" />
                  <label for="od_settle_iche">실시간 계좌이체</label>
                  <input
                    type="radio"
                    name="od_settle"
                    class="form_check_input"
                    value="네이버페이"
                    id="od_settle_npay" />
                  <label for="od_settle_npay">네이버페이</label>
                </fieldset>

                <!-- 라인 -->
                <div class="res_pay_line"></div>
                <!-- 결제 -->
                <div class="pay_order_box">
                  <!-- 좌측 영역 -->
                  <div class="pay_order">
                    <h3>결제 금액</h3>
                  </div>
                  <!-- 우측 영역 -->
                  <div class="pay_order od_right">
                    <ul class="od_right_ul">
                      <li>
                        <label>운송요금</label>
                        <strong class="right_price">0원</strong>
                      </li>
                      <li>
                        <label>추가요금</label>
                        <strong class="right_price">0원</strong>
                      </li>
                      <li>
                        <label>쿠폰적용</label>
                        <div class="coupon_area">
                          <input
                            type="text"
                            placeholder="쿠폰번호를 입력해 주세요" />
                          <!-- 알림창 띄우기 쿠폰 번호를 입력해주세요 -->
                          <span class="coupon_btn close_btn">적용</span>
                          <span class="coupon_btn" style="display: none"
                            >취소</span
                          >
                        </div>
                      </li>
                      <li>
                        <label>쿠폰할인</label>
                        <strong class="right_price">0원</strong>
                      </li>
                      <li class="right_line"></li>
                      <li>
                        <label>최종 결제 금액</label>
                        <strong class="right_price">0원</strong>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 이용 약관 동의 -->
          <div class="agree_box card_box">
            <h2 class="pay_title">이용 약관 동의<span>*</span></h2>
            <div id="agree_card">
              <div class="agree">
                <label>
                  <input type="checkbox" value="all" />모든 약관에 동의합니다.
                </label>
              </div>
              <div class="agree agree_line"></div>
              <div class="agree">
                <label>
                  <input type="checkbox" value="stipulation" />
                  <span>[필수]</span>
                  이용약관 동의
                  <u>보기</u>
                </label>
              </div>
              <div class="agree">
                <label>
                  <input type="checkbox" value="stipulation" />
                  <span>[필수]</span>
                  개인정보 취급방침 동의
                  <u>보기</u>
                </label>
              </div>
            </div>
            <!-- 규정 -->
            <div class="res_rules" hidden="">
              요금 규정,취소수수료 규정을 확인하세요.<br />
              아래규정 및 약관을 읽어보고, 동의하는 경우에 체크하고 최종예약을
              완료해 주세요.
            </div>
          </div>
          <!-- 결제하기 버튼 -->
          <div class="confirm_btn" @click="confirmPayment">
            <input class="c_btn btn_submit" type="button" value="결제하기" />
          </div>
        </form>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "/src/assets/variables";
@import "/src/assets/resTop.scss";

.progress_text p:nth-child(2) {
  // font-size: 1.875rem;
  font-weight: 600;
  color: $primary-color;
}
// 소타이틀
.pay_title {
  font-size: 20px;
  font-weight: bold;
  span {
    color: $primary-color;
    margin-left: 4px;
  }
}
.card_box {
  margin: 50px 0;
}
//예약 정보
.res_cart {
  padding: 0;
  .cart_row {
    padding: 35px 35px 0;
    li {
      display: flex;
      justify-content: space-between;
      font-weight: bold;
      margin-bottom: 24px;
      > div {
        font-size: 15px;
      }
      // &:last-child{
      //   margin-bottom: 20px;
      // }
    }
  }
}
.edbtn {
  padding: 12px 35px;
  display: flex;
  flex-direction: row-reverse;
}
.cart_line {
  border-bottom: 1px dashed $input-select;
  width: 100%;
}
// 예약자 정보
.res_info ul li {
  margin-bottom: 25px;

  &:last-child {
    margin-bottom: 0;
  }
}
.nation_check {
  display: flex;
  gap: 30px;
  label {
    display: flex;
    gap: 10px;
    font-weight: bold;
  }
}
// 체크박스
.form_check_input {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  appearance: none;
  border: 1px solid $input-select;
  &:checked {
    border: 4px solid $primary-color;
  }
}
// 예약자 인풋
.info_row {
  width: 100%;
  display: flex;
  align-items: center;
}
.res_info_title {
  font-weight: bold;
  text-wrap: nowrap;
  width: 110px;
  height: 50px;
  padding-top: 18px;
}
.res_info_input {
  padding: 0.375rem 0.75rem;
  border: 1px solid $input-select;
  color: $font-light-gray;
  border-radius: 6px;
  width: 100%;
  height: 45px;
  transition: all 0.3s;
  &:focus {
    border: none;
    outline: 3px solid rgba(255, 111, 0, 0.5);
    box-shadow: $reservation-boxShadow;
  }
}
.res_select {
  width: 15%;
  font-size: 15px;
  color: $font-gray;
}
#number_input {
  width: 85%;
  margin-left: 10px;
}
// 결제 정보
.res_pay_sl {
  h3 {
    font-weight: bold;
  }
  fieldset {
    border: 2px solid $input-select;
    border-radius: 20px;
    padding: 10px 20px 12px;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 15px;
    font-size: 15px;
    label {
      margin-right: 10px;
    }
  }
}
.res_pay_line {
  border-bottom: 1px dashed $input-select;
  margin: 15px 0;
}
.pay_order_box {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-0.5 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));
  .pay_order {
    flex: 0 0 auto;
    width: 50%;
    padding: 0 12px;
    ul > li {
      width: 100%;
      margin: 23px 0;
      display: flex;
      justify-content: space-between;
      label {
        font-size: 13px;
      }
      &.right_line {
        width: 100%;
        border-bottom: 1px dashed $input-select;
      }
      &:last-child strong {
        color: $primary-color;
      }
      // 쿠폰
      .coupon_area {
        input {
          text-align: center;
          padding: 10px;
          width: 260px;
          height: 30px;
          font-size: 13px;
          color: $font-light-gray;
          border: 1px solid $input-select;
          background: #fff;
          border-radius: 5px;
          &:focus {
            border: none;
            outline: 3px solid rgba(255, 111, 0, 0.5);
            box-shadow: $reservation-boxShadow;
          }
        }
        .coupon_btn {
          padding: 7.5px 8px;
          font-size: 14px;
          margin-left: 5px;
          font-weight: 300;
          cursor: pointer;
        }
      }
    }
  }
}
// 이용약관 동의
#agree_card {
  padding: 35px 35px;
  margin-top: 12px;
  border-radius: 10px;
  .agree {
    width: 100%;
    margin-bottom: 10px;
    &.agree_line {
      border-bottom: 1px dashed $input-select;
    }
    input {
      width: 16px;
      height: 16px;
      margin: 0 10px;
      vertical-align: bottom;
      background-color: #fff;
      border: 1px solid rgba(0, 0, 0, 0.25);
      cursor: pointer;
    }
    span {
      margin-right: 4px;
      color: $primary-color;
    }
    u {
      color: $font-light-gray;
      float: right;
      font-size: 13px;
      cursor: pointer;
    }
  }
}
// 결제하기 버튼
.confirm_btn {
  margin: 0 0 50px 0;
  display: flex;
  .btn_submit {
    width: 50%;
    font-size: 16px;
    font-weight: bold;
    padding: 20px 0;
    margin: auto;
    cursor: pointer;
  }
}
</style>
