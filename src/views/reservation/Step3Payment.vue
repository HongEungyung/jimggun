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
      <button @click="confirmPayment">다음</button>
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
        <form class="card_form">
          <!-- 예약확인 영역 -->
          <h2>예약정보</h2>
          <ul class="card_row">
            <li>
              <label>수하물</label>
              <div>1개</div>
            </li>
            <!-- 수정 버튼 -->
            <li class="card_line">
              <label>수하물</label>
              <div>
                <button>수정</button>
              </div>
            </li>
          </ul>
        </form>
        <!-- 예약정보 확인 끝 -->
        <form>
          <!-- 예약자 정보 -->
          <div class="res_info">
            <h2>예약자 정보</h2>
            <ul>
              <!-- 라디오 체크 박스 -->
              <li>
                <label class="nation">
                  <input
                    type="radio"
                    name="od_nation"
                    value="D"
                    class="form-check-input"
                    checked />"내국인"
                </label>
              </li>
              <li>
                <label class="nation">
                  <input
                    type="radio"
                    name="od_nation"
                    value="D"
                    class="form-check-input"
                    checked />"외국인"
                </label>
              </li>
              <!-- 예약자 이름 입력 -->
              <li>
                <label class="res_info_title">예약자 성명</label>
                <input
                  class="res_info_input"
                  type="text"
                  placeholder="보내는 사람의 성함을 입력해 주세요."
                  required />
              </li>
              <!-- 휴대폰 번호 -->
              <li>
                <label class="res_info_title">휴대폰 번호</label>
                <select id="res_select">
                  <optgroup label="번호선택">
                    <option value="010">010</option>
                    <option value="010">011</option>
                  </optgroup>
                </select>
                <input
                  class="res_info_input"
                  type="text"
                  placeholder="카카오 알림톡을 받으실 연락처를 알려주세요."
                  required />
              </li>
              <!-- 이메일 -->
              <li>
                <label class="res_info_title">이메일</label>
                <input
                  class="res_info_input"
                  type="text"
                  placeholder="예약확정 안내 메일이 전송됩니다."
                  required />
              </li>
            </ul>
          </div>
          <!-- 결제 정보 -->
          <div class="res_payment_info">
            <h2>결제 정보</h2>
            <!-- 결제 수단 선택 -->
            <div class="res_pay_sl">
              <h3>결제 방법</h3>
              <fieldset>
                <input
                  type="radio"
                  class="form_check_input"
                  value="신용카드"
                  id="od_settle_card" />
                <label for="od_settle_card">신용카드</label>
                <input
                  type="radio"
                  class="form_check_input"
                  value="계좌이체"
                  id="od_settle_iche" />
                <label for="od_settle_iche">실시간 계좌이체</label>
                <input
                  type="radio"
                  class="form_check_input"
                  value="네이버페이"
                  id="od_settle_npay" />
                <label for="od_settle_npay">네이버페이</label>
              </fieldset>
            </div>
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
                      <input type="text" placeholder="쿠폰번호를 입력해 주세요">
                      <!-- 알림창 띄우기 쿠폰 번호를 입력해주세요 -->
                      <span class="coupon_btn">적용</span>
                      <span class="coupon_btn" style="display: none;">취소</span>
                    </div>
                  </li>
                  <li>
                    <label>쿠폰할인</label>
                    <strong class="right_price">0원</strong>
                  </li>
                  <li>
                    <label>최종 결제 금액</label>
                    <strong class="right_price">0원</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- 이용 약관 동의 -->
           <div class="agree_box">
            <h2>이용 약관 동의</h2>
            <div class="agree">
              <label class="agree_line">
                <input type="checkbox" value="all">"모든 약관에 동의합니다."
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" value="stipulation">
                <span>[필수]</span>
                "이용약관 동의"
                <u>보기</u>
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" value="stipulation">
                <span>[필수]</span>
                "개인정보 취급방침 동의"
                <u>보기</u>
              </label>
            </div>
            <!-- 규정 -->
            <div class="res_rules" hidden="">
					요금 규정,취소수수료 규정을 확인하세요.<br>
					아래규정 및 약관을 읽어보고, 동의하는 경우에 체크하고 최종예약을 완료해 주세요.
				</div>
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
  font-weight: 500;
  color: $primary-color;
}
</style>
