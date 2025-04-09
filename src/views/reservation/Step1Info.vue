<script setup>
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import ModalInquire from "@/components/ModalInquire.vue"; // 모달 컴포넌트 임포트
import DatePicker from "@/components/DatePicker.vue"; // 날짜 선택 컴포넌트 임포트

const isModalOpen = ref(false);
const route = useRoute();
// useRouter() 라우트를 변경(이동)할때 사용 (push(), replace(), go())
const router = useRouter();
// console.log(route.params);
const emit = defineEmits(["next", "prev"]);
defineProps({ resevationData: Object });
const name = ref("");
const phone = ref("");
const luggageCount = ref(1);
const prevStep = () => emit("prev");
const nextStep = () => {
  emit("next", {
    name: name.value, //예약자 이름
    phone: phone.value, //예약자 전화번호
    luggageCount: luggageCount.value, // 짐개수
  });
};
// 각 섹션별 토글 상태 관리
const toggleStates = ref({
  // 출발지
  departure: {
    isVisible: true,
    awesome: false,
  },
  // 도착지
  arrival: {
    isVisible: false,
    awesome: true,
  },
  // 수하물
  luggage: {
    isVisible: false,
    awesome: true,
  },
});
// 토글 함수
const toggleSection = (section) => {
  toggleStates.value[section].isVisible =
    !toggleStates.value[section].isVisible;
  toggleStates.value[section].awesome = !toggleStates.value[section].awesome;
};
// 수하물별 금액 책정
const products = ref([
  {
    id: 1,
    name: "S",
    price: 10000,
    description: "최장변 길이 55cm이하",
    quantity: 0,
  },
  {
    id: 2,
    name: "M",
    price: 20000,
    description: "최장변 길이 65cm미만",
    quantity: 0,
  },
  {
    id: 3,
    name: "L",
    price: 30000,
    description: "최장변 길이 65cm이상",
    quantity: 0,
  },
]);
// 현재 선택된 상품 가져오기
// const product = computed(() => {
//   return products.value.find((p) => p.id === Number(route.params.id)) || {};
// });
const id = Number(route.params.id);
const product = computed(() => {
  return products.value.find((p) => p.id === id) || {};
});

// 가격 포맷 함수 ,
const formatPrice = (price) => {
  if (!price) return "0";
  return `${price.toLocaleString()}`;
};
// 수량 상태 변수
// const quantity = ref(0);
const changeQuantity = (productId, amount) => {
  const product = products.value.find((p) => p.id === productId);
  if (product) {
    const newQuantity = product.quantity + amount;
    if (newQuantity >= 0 && newQuantity <= 5) {
      product.quantity = newQuantity;
    }
  }
};
// 총금액 계산
const totalPrice = computed(() => {
  return products.value.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
});

// 날짜 선택 관련 상태
const isDatePickerOpen = ref(false);
const selectedDepartureDate = ref("");
const selectedArrivalDate = ref("");
const datePickerType = ref(""); // 'departure' 또는 'arrival'
//위치잡기
const datePickerPosition = ref({ top: 0, left: 0 });
const openDatePicker = (type, event) => {
  datePickerType.value = type;
  const inputElement = event.target;
  const rect = inputElement.getBoundingClientRect();
  // 입력 필드 아래에 위치하도록 설정
  datePickerPosition.value = {
    top: rect.bottom + window.scrollY + 5, // 5px 간격
    left: rect.left + window.scrollX,
  };
  isDatePickerOpen.value = true;
};

// 날짜 선택 팝업 열기
// const openDatePicker = (type) => {
//   datePickerType.value = type;
//   isDatePickerOpen.value = true;
// };

// 날짜 선택 완료
const handleDateSelect = (date) => {
  if (datePickerType.value === "departure") {
    selectedDepartureDate.value = date;
  } else if (datePickerType.value === "arrival") {
    selectedArrivalDate.value = date;
  }
  isDatePickerOpen.value = false;
};
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
            src="/public/images/icon/reservation-bar1.png"
            alt="예약진행바" />
        </div>
        <div class="progress_text">
          <p>예약하기</p>
          <p>확인 및 결제</p>
          <p>예약완료</p>
        </div>
      </section>
      <!-- 배송정보 -->
      <h2 class="a4_title">배송정보 입력<span>*</span></h2>
      <form>
        <!-- 배송정보 입력창 -->
        <div id="res_content">
          <div>
            <!-- 출발지 -->
            <div
              class="row_box item_line"
              :class="{ active: toggleStates.departure.isVisible }">
              <div @click="toggleSection('departure')">
                <div>
                  <h3 v-if="toggleStates.departure.awesome">출발지</h3>
                  <h3 v-else>어디서 짐을 가져갈까요?</h3>
                  <span
                    v-if="toggleStates.departure.awesome"
                    class="fa accordion_icon">
                    <img
                      src="/public/images/icon/toggleDown_icon.png"
                      alt="아래아이콘" />
                  </span>
                  <span v-else class="fa accordion_icon">
                    <img
                      src="/public/images/icon/toggleUp_icon.png"
                      alt="아래아이콘" />
                  </span>
                </div>
              </div>
              <!-- 토글 활성화 된 콘텐츠 영역 -->
              <div v-if="toggleStates.departure.isVisible" class="row_line">
                <!-- 출발지 입력 영역 -->
                <div class="row">
                  <label>출발지</label>
                  <div class="res_input">
                    <img src="/public/images/icon/lens_icon.png" alt="돋보기" />

                    <input
                      type="text"
                      value=""
                      readonly=""
                      autocomplete="off"
                      placeholder="출발장소"
                      @click="isModalOpen = true" />
                    <!-- 모달 컴포넌트 -->
                    <ModalInquire
                      :isOpen="isModalOpen"
                      @close="isModalOpen = false" />
                  </div>
                </div>
                <!-- 맡길 날짜 선택 -->
                <div class="row">
                  <label>맡길 날짜</label>
                  <div class="res_input">
                    <img src="/public/images/icon/data_icon.png" alt="달력" />
                    <input
                      class="date_input"
                      type="text"
                      :value="selectedDepartureDate"
                      readonly
                      autocomplete="off"
                      placeholder="맡길 날짜"
                      @click="openDatePicker('departure', $event)" />
                  </div>
                </div>
                <!-- 맡길 시간 선택 -->
                <div class="row">
                  <label>맡길 시간</label>
                  <div class="res_input">
                    <img src="/public/images/icon/watch_icon.png" alt="시계" />
                    <input
                      type="text"
                      v-model="time"
                      value=""
                      readonly=""
                      autocomplete="off"
                      placeholder="맡길 시간" />
                  </div>
                </div>
              </div>
              <!-- 도착지 -->
            </div>
            <!-- 도착지 -->
            <div
              class="row_box item_line"
              :class="{ active: toggleStates.arrival.isVisible }">
              <div @click="toggleSection('arrival')">
                <div>
                  <h3 v-if="toggleStates.arrival.awesome">도착지</h3>
                  <h3 v-else>어디에 짐을 놔둘까요?</h3>
                  <span
                    v-if="toggleStates.arrival.awesome"
                    class="fa accordion_icon">
                    <img
                      src="/public/images/icon/toggleDown_icon.png"
                      alt="아래아이콘" />
                  </span>
                  <span v-else class="fa accordion_icon">
                    <img
                      src="/public/images/icon/toggleUp_icon.png"
                      alt="아래아이콘" />
                  </span>
                </div>
              </div>
              <!-- 토글 활성화 된 콘텐츠 영역 -->
              <div v-if="toggleStates.arrival.isVisible" class="row_line">
                <!-- 도착지 입력 영역 -->
                <div class="row">
                  <label>도착지</label>
                  <div class="res_input">
                    <img src="/public/images/icon/lens_icon.png" alt="돋보기" />
                    <input type="text" value="" readonly="" autocomplete="off" placeholder="도착장소"/>
                  </div>
                </div>
                <!-- 찾을 날짜 선택 -->
                <div class="row">
                  <label>찾을 날짜</label>
                  <div class="res_input">
                    <img src="/public/images/icon/data_icon.png" alt="달력" />
                    <input
                      class="date_input"
                      type="text"
                      :value="selectedArrivalDate"
                      readonly
                      autocomplete="off"
                      placeholder="찾을 날짜"
                      @click="openDatePicker('arrival', $event)" />
                  </div>
                </div>
                <!-- 찾을 시간 선택 -->
                <div class="row">
                  <label>찾을 시간</label>
                  <div class="res_input">
                    <img src="/public/images/icon/watch_icon.png" alt="시계" />
                    <input
                      type="text"
                      value=""
                      readonly=""
                      autocomplete="off"
                      placeholder="찾을 시간" />
                  </div>
                </div>
              </div>
            </div>
            <!-- 수하물 -->
            <div
              class="luggage_box"
              :class="{ active: toggleStates.luggage.isVisible }">
              <div @click="toggleSection('luggage')">
                <div>
                  <h3 v-if="toggleStates.luggage.awesome">수하물</h3>
                  <h3 v-else>보내는 짐의 크기와 갯수를 알려주세요</h3>
                  <span
                    v-if="toggleStates.luggage.awesome"
                    class="fa accordion_icon">
                    <img
                      src="/public/images/icon/toggleDown_icon.png"
                      alt="아래아이콘" />
                  </span>
                  <span v-else class="fa accordion_icon">
                    <img
                      src="/public/images/icon/toggleUp_icon.png"
                      alt="아래아이콘" />
                  </span>
                </div>
              </div>
              <!--토글 활성화 된 콘텐츠 영역 -->
              <div v-if="toggleStates.luggage.isVisible" class="row_line">
                <!-- 수하물 입력 영역 -->
                <ul class="carrier_list">
                  <li v-for="product in products" :key="product.id">
                    <div class="cr_name_area">
                      <p>
                        <span class="product cr_name"
                          >{{ product.name }}사이즈</span
                        >
                        <span class="cr_txt">{{ product.description }}</span>
                      </p>
                    </div>
                    <div class="cr_btn_area">
                      <button
                        type="button"
                        @click="changeQuantity(product.id, -1)">
                        <i
                          ><img src="/public/images/icon/minus_icon.png" alt=""
                        /></i>
                      </button>
                      <input v-model="product.quantity" min="0" max="5" />
                      <button
                        type="button"
                        @click="changeQuantity(product.id, 1)">
                        <i
                          ><img src="/public/images/icon/plus_icon.png" alt=""
                        /></i>
                      </button>
                    </div>
                  </li>
                </ul>
                <!-- 주의문 -->
                <div class="cr_warning">
                  <i
                    ><img src="/public/images/icon/warning_icon.png" alt=""
                  /></i>
                  <span><strong>수하물 개당요금입니다.</strong></span>
                </div>
                <!-- 도움말 -->
                <div class="cr_help_text">
                  아래의 물건이 포함되어 있다면
                  <b>배송을 거부당할 수 있어요.</b>
                  <ul>
                    <li>
                      비닐/종이 쇼핑백, 우산, 박스 등 파손 위험이 있는 물품
                    </li>
                    <li>부재성 및 악취가 심한 물품</li>
                    <li>타인에게 해를 가할 수 있는 물품</li>
                    <li>일반 위탁 수하물 허용량을 초과한 물품</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 입력 결과창 -->
        <div id="res_result_box">
          <!-- 모바일 -->
          <div class="rrb_mb"></div>
          <!-- 웹 -->
          <ul class="rrb_detail">
            <li class="rrb_fr">
              <label>출발지</label>
              <div>-</div>
            </li>
            <li class="rrb_fr_data">
              <label>짐 맡길 일정</label>
              <div>-</div>
            </li>
            <li class="rrb_to">
              <label>도착지</label>
              <div>-</div>
            </li>
            <li class="rrb_to_data">
              <label>짐 찾을 일정</label>
              <div>-</div>
            </li>
            <li class="rrb_cr">
              <label>수하물</label>
              <div>-</div>
            </li>
          </ul>
          <!-- 총 금액 -->
          <div class="rrb_default">
            <div class="rrb_price">
              <label>배송 예상 금액</label>
              <div>{{ formatPrice(totalPrice) }}원</div>
            </div>
            <div @click="nextStep" class="rrb_sumbit_btn">
              <input type="button" value="배송 예약하기" />
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>

  <!-- 날짜 선택 팝업 -->
  <DatePicker
    v-if="isDatePickerOpen"
    :type="datePickerType"
    @select="handleDateSelect"
    @close="isDatePickerOpen = false" 
    :style="{
      position: 'absolute',
      top: `${datePickerPosition.top}px`,
      left: `${datePickerPosition.left}px`,
      zIndex: 1000,
    }"
    />
</template>

<style lang="scss" scoped>
@import "/src/assets/cards";
@import "/src/assets/variables"; // 반드시 최상단!
@import "/src/assets/resTop.scss";
.progress_text p:first-child {
  // font-size: 1.875rem;
  font-weight: 500;
  color: $primary-color;
}
// 배송정보 타이틀
.a4_title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  span {
    color: $primary-color;
    margin-left: 4px;
  }
}
// 배송정보 입력창
#res_content {
  width: 68%;
  display: inline-block;
  max-width: 700px;
  min-width: 320px;
  margin: 0px auto 30px;
  min-height: 350px;
}
.row_box > div:first-child {
  cursor: pointer;
}
.row_box {
  height: 54px;
  background-color: #fff;
  padding: 18px 25px;
  margin: 0 1vh 3vh 0;
  border-radius: 10px;
  transition: all 0.3s;
  &.active {
    border: none;
    box-shadow: $reservation-boxShadow;
    height: 298px;
  }
  h3 {
    display: inline-block;
    font-size: 18px;
    font-weight: 600;
  }
}
// 토글 아이콘
.accordion_icon {
  float: right;
  color: gray;
  font-size: 1.5em;
  padding: 0px 10px;
}
// 토글시 라인
.row_line {
  margin: 15px 0;
  border-top: 2px dashed $input-select;
}

.row {
  position: relative;
  padding-top: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  label {
    font-weight: 600;
  }
  input {
    position: relative;
    width: 466px;
    height: 45px;
    font-size: $text-font-M;
    font-weight: bold;
    border: 1px solid $input-select;
    border-radius: 10px;
    padding-left: 45px;
    outline: none;
    transition: all 0.3s;
    &:focus {
      border: none;
      outline: 3px solid rgba(255, 111, 0, 0.5);
      box-shadow: $reservation-boxShadow;
    }
  }
  // 아이콘
  .res_input {
    position: relative;
    img {
      position: absolute;
      top: 25%;
      left: 15px;
      z-index: 10;
    }
  }
}
.date_input {
  font-weight: 100;
}
.date_input:hover {
  // border: none;
  outline: 3px solid rgba(255, 111, 0, 0.5);
  box-shadow: $reservation-boxShadow;
}
// 수하물
.luggage_box {
  height: 54px;
  background-color: #fff;
  padding: 18px 25px;
  margin: 0 1vh 3vh 0;
  border-radius: 10px;
  transition: all 0.7s;
  &.active {
    border: none;
    box-shadow: $reservation-boxShadow;
    height: 488px;
  }
  h3 {
    display: inline-block;
    font-size: 18px;
    font-weight: 600;
  }
}
.carrier_list {
  padding: 30px 0;
  li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
  }
  .cr_name {
    font-size: 20px;
    font-weight: bold;
    white-space: nowrap;
  }
  .cr_txt {
    font-size: 14px;
    white-space: nowrap;
    margin-left: 20px;
  }
  // 수하물 버튼
  .cr_btn_area {
    button {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color: rgba(255, 111, 0, 0.1);
      border: 1px solid rgba(255, 111, 0, 0.5);
      cursor: pointer;
      i {
        width: 100%;
      }
    }
    input {
      width: 30px;
      text-align: center;
      border: none;
    }
  }
}

// 수하물 주의문
.cr_warning {
  display: flex;
  align-items: center;
  gap: 4px;
  span {
    color: $warning-color;
  }
}
// 수하물 도움말
.cr_help_text {
  background-color: $bg-light;
  padding: 15px;
  border: 1px solid $bg-primary;
  border-radius: 10px;
  margin-top: 15px;
  color: $font-light-gray;
  font-size: 13px;
  b {
    color: $primary-color;
    margin-bottom: 10px;
  }
  ul li {
    margin-top: 10px;
    display: flex;
    align-items: center;
    gap: 12px;
    &::before {
      content: "";
      display: block;
      width: 5px;
      height: 5px;
      background-color: $font-light-gray;
      border-radius: 50%;
    }
  }
}
// 입력 결과창
#res_result_box {
  width: 30%;
  display: block;
  float: right;
  border-radius: 10px;
  padding: 5px 15px 15px;
  font-size: 13px;
  background-color: #fff;
  position: relative;
}
// 입력 정보 값
.rrb_detail li {
  display: flex;
  justify-content: space-between;
  margin: 14px 0;
  :first-child {
    font-size: 14px;
    color: $font-gray;
  }
}
// 금액 값
.rrb_default {
  border-top: 1px solid $input-select;
  .rrb_price {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    font-size: 14px;
    font-weight: bold;
    div {
      color: $primary-color;
      font-size: 15px;
    }
  }
  .rrb_sumbit_btn {
    input {
      width: 100%;
      height: 2.375rem;
      background-color: $primary-color;
      border-radius: 10px;
      font-weight: bold;
      cursor: pointer;
      border: none;
      color: #fff;
      padding: 6px 12px;
      font-size: 14px;
      &:hover {
        background-color: $primary-hover;
      }
    }
  }
}

.date_input {
  cursor: pointer;
  &:hover {
    border-color: $primary-color;
  }
}
</style>
