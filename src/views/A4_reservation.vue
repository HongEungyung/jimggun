<script setup></script>

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
          <div class="res_line" role="tablist">
            <!-- 출발지 -->
            <!-- 예약하기 시작할때 accordion 열림 active-->
            <div class="res_box item_line active">
              <div
                class="ui_accordian"
                role="tab"
                id="ui-id-3"
                aria-controls="ui-id-4"
                aria-selected="false"
                aria-expanded="false"
                tabindex="0">
                <h3>출발지</h3>
                <h4>어디에서 짐을 맡길까요?</h4>
                <span class="fa accordion_icon">
                  <img
                    src="/public/images/icon/toggleDown_icon.png"
                    alt="아래아이콘" />
                </span>
              </div>
              <!-- 아코디언 활성화 된 콘텐츠 영역 -->
              <div
                class="ui-accordion-content"
                id="ui-id-4"
                aria-labelledby="ui-id-3"
                role="tabpanel"
                aria-hidden="false"
                style="display: block">
                <!-- 출발지 입력 영역 -->
                <div class="row">
                  <label>출발지</label>
                  <i class="input_icon">
                    <img src="/public/images/icon/lens_icon.png" alt="돋보기"
                  /></i>
                  <input
                    type="text"
                    value=""
                    class="res-input"
                    readonly=""
                    autocomplete="off"
                    placeholder="출발장소" />
                </div>
                <!-- 기타 장소 입력 영역 뺴도될듯 -->
                <!-- <div class="row row_etc">
                <label>물품보관장소</label>
                <input type="text">
              </div> -->
                <!-- 맡길 날짜 선택 -->
                <div class="row">
                  <label>맡길 날짜</label>
                  <i class="input_icon">
                    <img src="/public/images/icon/data_icon.png" alt="달력"
                  /></i>
                  <input
                    type="text"
                    value=""
                    class="res-input"
                    readonly=""
                    autocomplete="off"
                    placeholder="맡길 날짜" />
                </div>
                <!-- 맡길 시간 선택 -->
                <div class="row">
                  <label>맡길 시간</label>
                  <i class="input_icon">
                    <img src="/public/images/icon/watch_icon.png" alt="시계"
                  /></i>
                  <input
                    type="text"
                    value=""
                    class="res-input"
                    readonly=""
                    autocomplete="off"
                    placeholder="맡길 시간" />
                </div>
                <!-- 항공편명 입력 빼도 될 듯 -->
                <!-- <div class="row no_active"></div> -->
              </div>
            </div>
            <!-- 도착지 -->
            <div class="res_box item_line">
              <div
                class="ui_accordian"
                role="tab"
                id="ui-id-5"
                aria-controls="ui-id-6"
                aria-selected="false"
                aria-expanded="false"
                tabindex="-1">
                <h3>도착지</h3>
                <h4>어디에서 짐을 찾을까요?</h4>
                <span class="fa accordion_icon">
                  <img
                    src="/public/images/icon/toggleDown_icon.png"
                    alt="아래아이콘" />
                </span>
              </div>
              <!-- 아코디언 활성화 된 콘텐츠 영역 -->
              <div
                class="ui-accordion-content"
                id="ui-id-6"
                aria-labelledby="ui-id-5"
                role="tabpanel"
                aria-hidden="false"
                style="display: block">
                <!-- 출발지 입력 영역 -->
                <div class="row">
                  <label>도착지</label>
                  <i class="input_icon">
                    <img src="/public/images/icon/lens_icon.png" alt="돋보기"
                  /></i>
                  <input
                    type="text"
                    value=""
                    class="res-input"
                    readonly=""
                    autocomplete="off"
                    placeholder="출발장소" />
                </div>
                <!-- 기타 장소 입력 영역 뺴도될듯 -->
                <!-- <div class="row row_etc">
                <label>물품보관장소</label>
                <input type="text">
              </div> -->
                <!-- 맡길 날짜 선택 -->
                <div class="row">
                  <label>찾을 날짜</label>
                  <i class="input_icon">
                    <img src="/public/images/icon/data_icon.png" alt="달력"
                  /></i>
                  <input
                    type="text"
                    value=""
                    class="res-input"
                    readonly=""
                    autocomplete="off"
                    placeholder="찾을 날짜" />
                </div>
                <!-- 맡길 시간 선택 -->
                <div class="row">
                  <label>찾을 시간</label>
                  <i class="input_icon">
                    <img src="/public/images/icon/watch_icon.png" alt="시계"
                  /></i>
                  <input
                    type="text"
                    value=""
                    class="res-input"
                    readonly=""
                    autocomplete="off"
                    placeholder="찾을 시간" />
                </div>
                <!-- 항공편명 입력 빼도 될 듯 -->
                <!-- <div class="row no_active"></div> -->
              </div>
            </div>
            <!-- 수하물 -->
            <div class="res_box result_Y">
              <div
                class="ui_accordian"
                role="tab"
                id="ui-id-1"
                aria-controls="ui-id-2"
                aria-selected="false"
                aria-expanded="false"
                tabindex="-1">
                <h3>수하물</h3>
                <h4>보내는 짐의 크기와 갯수를 알려주세요</h4>
                <span class="fa accordion_icon">
                  <img
                    src="/public/images/icon/toggleDown_icon.png"
                    alt="아래아이콘" />
                </span>
              </div>
              <!-- 아코디언 활성화 된 콘텐츠 영역 -->
              <div
                class="ui-accordion-content"
                id="ui-id-2"
                aria-labelledby="ui-id-1"
                role="tabpanel"
                aria-hidden="false"
                style="display: block">
                <!-- 수하물 입력 영역 -->
                <ul class="carrier_list">
                  <li>
                    <div class="cr_name_area">
                      <p>
                        <span class="cr_name">S 사이즈</span>
                        <span class="cr_txt">최장변 길이 55cm이하</span>
                      </p>
                    </div>
                    <div class="cr_btn_area">
                      <button type="button" class="cr_btn" txt="감소">
                        <i
                          ><img src="/public/images/icon/minus_icon.png" alt=""
                        /></i>
                      </button>
                      <input
                        type="text"
                        value="0"
                        class="cr_btn_center"
                        maxlength="5" />
                      <button type="button" class="cr_btn" txt="증가">
                        <i
                          ><img src="/public/images/icon/plus_icon.png" alt=""
                        /></i>
                      </button>
                    </div>
                  </li>
                  <li>
                    <div class="cr_name_area">
                      <p>
                        <span class="cr_name">M 사이즈</span>
                        <span class="cr_txt">최장변 길이 65cm미만</span>
                      </p>
                    </div>
                    <div class="cr_btn_area">
                      <button type="button" class="cr_btn" txt="감소">
                        <i
                          ><img src="/public/images/icon/minus_icon.png" alt=""
                        /></i>
                      </button>
                      <input
                        type="text"
                        value="0"
                        class="cr_btn_center"
                        maxlength="5" />
                      <button type="button" class="cr_btn" txt="증가">
                        <i
                          ><img src="/public/images/icon/plus_icon.png" alt=""
                        /></i>
                      </button>
                    </div>
                  </li>
                  <li>
                    <div class="cr_name_area">
                      <p>
                        <span class="cr_name">L 사이즈</span>
                        <span class="cr_txt">최장변 길이 65cm이상</span>
                      </p>
                    </div>
                    <div class="cr_btn_area">
                      <button type="button" class="cr_btn" txt="감소">
                        <i
                          ><img src="/public/images/icon/minus_icon.png" alt=""
                        /></i>
                      </button>
                      <input
                        type="text"
                        value="0"
                        class="cr_btn_center"
                        maxlength="5" />
                      <button type="button" class="cr_btn" txt="증가">
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
        <div id="res_result_box"></div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "/src/assets/cards";
@import "/src/assets/variables"; // 반드시 최상단!

.res_wrap {
  width: 100%;

  background-color: $sub-color;
  // margin: 2rem;      /* = 20px */
  // padding: 1.5rem;   /* = 15px */
}
.res_inner {
  max-width: 920px;
  min-width: 320px;
  margin: 0 auto;
}
// 상단
.res_top {
  text-align: center;
  margin: 120px 0 50px 0;
}
.res_text_box{
  margin-bottom: 70px;
}
#res_top_title {
  margin: 10px 0;
  display: inline-block;
  border-radius: 20px;
  line-height: 1.4;
  background-color: $primary-color;
  color: #fff;
  font-weight: bold;
  font-size: 1.25rem;
  padding: 5px 20px;
}
// 프로그래스 영역
.progress_bar{
  width: 100%;
  margin-bottom: 25px;
}
.progress_text{
  font-size: 1.875rem;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
}
.res_text_box h2 {
  font-size: 2.25rem;
  font-weight: bold;
  
}
// 배송정보 입력
.a4_title{
  font-size: 2.25rem;
  font-weight: bold;
}
.a4_title span{
  color: $primary-color;
}
// 배송정보 입력창
#res_content {
  width: 68%;
  display: inline-block;
  max-width: 700px;
  min-width: 320px;
  margin: 0px auto 30px;
  min-height: 350px;
  background-color: aliceblue;
}
#res_result_box {
  width: 30%;
  display: block;
  float: right;
  border: 1px solid #dfdfdf;
  border-radius: 10px;
  padding: 5px 15px 15px;
  font-size: 13px;
  background-color: rgb(246, 111, 111);
  position: relative;
}
// 입력창 
.row input {
  width: 466px;
  height: 45px;
  font-size: $text-font-M;
  font-weight: bold;
  border: 1px solid $input-select;
  border-radius: 10px;
}
.a4_row_box.active {
  box-shadow: $reservation-boxShadow;
  border: none;
}

.row_box > div:first-child {
  cursor: pointer;
}
.row_box .accordion_icon {
  float: right;
  color: gray;
  font-size: 1.5em;
  padding: 0px 10px;
}
// 수하물 주의문
.cr_warning span {
  color: $warning-color;
}
// 수하물 도움말

.cr_help_text b {
  color: $primary-color;
}
.cr_help_text ul li {
  display: flex;
  align-items: center;
  gap: 12px;
}
.cr_help_text ul li::before {
  content: "";
  display: block;
  width: 5px;
  height: 5px;
  background-color: $font-gray;
  border-radius: 50%;
}
</style>
