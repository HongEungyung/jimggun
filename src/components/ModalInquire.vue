<script setup>
import { ref } from 'vue';
import { defineProps, defineEmits } from 'vue';

defineProps({ isOpen: Boolean });
const emit = defineEmits(['close']);

const close = () => emit('close');
const activeTab = ref('tab1'); // 기본 선택된 탭

// 탭 변경 함수
const setTab = (tab) => {
  activeTab.value = tab;
};
</script>

<template>
  <div v-if="isOpen" class="modal-overlay" @click.self="close">
    <div class="modal-content">
      <button class="close-btn" @click="close">×</button>
      <div class="inqTitle">
        <h2>출발지 조회</h2>
      </div>
      <div class="area-content">
        <div class="tabs">
          <!-- 탭 버튼 -->
          <button @click="setTab('tab1')" :class="{ active: activeTab === 'tab1' }">역공항</button>
          <button @click="setTab('tab2')" :class="{ active: activeTab === 'tab2' }">주소검색</button>
        </div>

        <!-- 탭 콘텐츠 -->
        <div class="tab-content">
          <div class="tab1" v-if="activeTab === 'tab1'">
            <div class="areaSelectBox">
              <h3 class="areaSelectBox-title">서울</h3>
              <div class="areaSelectBox-btn-box">
                <button class="areaSelectBox-btn">
                  <p>김포공항 국내선</p>
                </button>
                <button class="areaSelectBox-btn">
                  <p>서울역</p>
                </button>
                <button class="areaSelectBox-btn">
                  <p>서울고속터미널</p>
                </button>
                <button class="areaSelectBox-btn">
                  <p>용산역</p>
                </button>
              </div>
            </div>
            <div class="areaSelectBox">
              <h3 class="areaSelectBox-title">부산</h3>
              <div class="areaSelectBox-btn-box">
                <button class="areaSelectBox-btn">
                  <p>부산역</p>
                </button>
                <button class="areaSelectBox-btn">
                  <p>부산항 국제여객터미널</p>
                </button>
                <button class="areaSelectBox-btn">
                  <p>김해공항 국내선</p>
                </button>
                <button class="areaSelectBox-btn">
                  <p>김해공항 국제선</p>
                </button>
                <button class="areaSelectBox-btn">
                  <p>BEXCO</p>
                </button>
              </div>
            </div>
            <div class="areaSelectBox">
              <h3 class="areaSelectBox-title">제주</h3>
              <div class="areaSelectBox-btn-box">
                <button class="areaSelectBox-btn">
                  <p>제주공항</p>
                </button>
              </div>
            </div>
            <div class="areaSelectBox">
              <h3 class="areaSelectBox-title">강릉/양양</h3>
              <div class="areaSelectBox-btn-box">
                <button class="areaSelectBox-btn">
                  <p>강릉역</p>
                </button>
              </div>
            </div>
            <div class="areaSelectBox">
              <h3 class="areaSelectBox-title">경주</h3>
              <div class="areaSelectBox-btn-box">
                <button class="areaSelectBox-btn">
                  <p>경주역</p>
                </button>
              </div>
            </div>
            <div class="areaSelectBox">
              <h3 class="areaSelectBox-title">여수</h3>
              <div class="areaSelectBox-btn-box">
                <button class="areaSelectBox-btn">
                  <p>여수엑스포역</p>
                </button>
                <button class="areaSelectBox-btn">
                  <p>여수종합버스터미널(금호고속)</p>
                </button>
              </div>
            </div>
            <div class="areaSelectBox">
              <h3 class="areaSelectBox-title">대구</h3>
              <div class="areaSelectBox-btn-box">
                <button class="areaSelectBox-btn">
                  <p>대구공항 국내선</p>
                </button>
                <button class="areaSelectBox-btn">
                  <p>동대구역</p>
                </button>
              </div>
            </div>
            <div class="areaSelectBox">
              <h3 class="areaSelectBox-title">광주</h3>
              <div class="areaSelectBox-btn-box">
                <button class="areaSelectBox-btn">
                  <p>광주 유스퀘어(금호고속)</p>
                </button>
                <button class="areaSelectBox-btn">
                  <p>광주송정역</p>
                </button>
              </div>
            </div>
            <div class="areaSelectBox">
              <h3 class="areaSelectBox-title">목포</h3>
              <div class="areaSelectBox-btn-box">
                <button class="areaSelectBox-btn">
                  <p>목포역</p>
                </button>
              </div>
            </div>
            <div class="areaSelectBox">
              <h3 class="areaSelectBox-title">경기/인천</h3>
              <div class="areaSelectBox-btn-box">
                <button class="areaSelectBox-btn">
                  <p>김포공항 국내선</p>
                </button>
                <button class="areaSelectBox-btn">
                  <p>광명역</p>
                </button>
              </div>
            </div>
            <div class="areaSelectBox">
              <h3 class="areaSelectBox-title">천안/아산</h3>
              <div class="areaSelectBox-btn-box">
                <button class="areaSelectBox-btn">
                  <p>천안아산역</p>
                </button>
              </div>
            </div>
            <div class="areaSelectBox">
              <h3 class="areaSelectBox-title">청주</h3>
              <div class="areaSelectBox-btn-box">
                <button class="areaSelectBox-btn">
                  <p>오송역</p>
                </button>
              </div>
            </div>
            <div class="areaSelectBox">
              <h3 class="areaSelectBox-title">대전</h3>
              <div class="areaSelectBox-btn-box">
                <button class="areaSelectBox-btn">
                  <p>대전역</p>
                </button>
              </div>
            </div>
            <div class="next-btn-box">
              <button class="next-btn">확인</button>
            </div>
          </div>
          <div v-if="activeTab === 'tab2'">
            <div class="notice-box">
              <p class="notice-text">
                • ‘물품보관장소’를 정확히 작성해 주세요. 부정확할 경우 <strong>예약취소 및 추가 비용</strong>이 발생할
                수 있으며, <strong>분실/도난/변질에 대한 책임은 짐꾼에서 부담하지 않습니다.</strong>
              </p>
              <p class="notice-text">• 주소지 배송은 같은 지역 내에서만 가능합니다.</p>
            </div>
            <div class="address-box">
              <button class="address-btn">주소검색</button>
              <input type="text" class="address-input" placeholder="기본주소" />
              <input type="text" class="address-input" placeholder="상세주소" />
            </div>
            <div class="place-box">
              <p class="place-text">물품보관 장소</p>
              <input
                type="text"
                class="place-input"
                placeholder="예) 문 앞 (공동현관 비밀번호 0000#), 경비실, 택배함 등"
              />
            </div>
            <div class="complete-btn-box">
              <button class="complete-btn">주소지선택 완료</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '../assets/variables';
// 모달창
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
  /* 전체 스크롤 바 스타일 */
  ::-webkit-scrollbar {
    width: 10px; /* 세로 스크롤 바 너비 */
    height: 10px; /* 가로 스크롤 바 높이 */
  }

  /* 스크롤 바 트랙 (배경) */
  ::-webkit-scrollbar-track {
    background: $bg-primary;
    border-radius: 10px;
  }

  /* 스크롤 바 핸들  */
  ::-webkit-scrollbar-thumb {
    background: $primary-color;
    border-radius: 10px;
  }

  /* 스크롤 바 핸들 호버 시 */
  ::-webkit-scrollbar-thumb:hover {
    background: $primary-hover;
  }
}
.modal-content {
  background: white;
  // width: 1472px;
  width: 76.6%;
  text-align: center;
  max-height: 90vh;
  overflow-y: auto;
}
.close-btn {
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  position: fixed;
  top: 0;
  right: 0;
}
// 상단 텍스트
.inqTitle {
  border-bottom: 1px solid $bg-primary;
}
h2 {
  line-height: 56px;
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  margin-left: 16px;
}
.area-content {
  // width: 1440px;
  width: 97.8%;
  margin: auto;
}
//탭 버튼
.tabs {
  margin-top: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.tabs > button {
  padding: 8px 16px;
  border: none;
  background-color: #fff;
  color: $font-gray;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
}

.tabs > button.active {
  border-bottom: 4px solid $font-gray;
  font-weight: bold;
  color: $font-primary;
}

// 탭 1

.areaSelectBox {
  width: 97.8%;
  margin: auto;
  display: flex;
  justify-content: left;
  flex-direction: column;
  align-items: flex-start;
}
.areaSelectBox-title {
  margin-top: 24px;
  margin-bottom: 8px;
  margin-left: 12px;
  font-size: 18px;
  font-weight: bold;
  color: $font-primary;
}
// 탭1 지역 선택 버튼
.areaSelectBox-btn-box {
  display: flex;
  gap: 10px;
}
.areaSelectBox-btn {
  border-radius: 50px;
  border: $input-select solid 1px;
  background-color: #fff;
  color: $font-light-gray;
}
.areaSelectBox-btn > p {
  padding: 6px 15px;
  font-size: 16px;
}
.areaSelectBox-btn:active {
  border: $primary-color solid 1px;
  color: $primary-color;
  background-color: rgba(255, 111, 0, 0.1); // #FF6F00 + 10% opacity
}
// 탭1 확인 버튼
.next-btn-box {
  margin-top: 90px;
}
.next-btn {
  background: #505050;
  color: #fff;
  font-size: 16px;
  padding: 6px 12px;
  margin-left: 95.4%;
  margin-top: 12px;
  margin-bottom: 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
// 탭2
// 탭2 주의사항 텍스트
.notice-box {
  margin: 25px 16px;
  text-align: left;
}
.notice-text {
  font-size: 16px;
  color: $font-gray;
  line-height: 32px;
}
strong {
  font-weight: bold;
  color: $font-primary;
}
// 탭2 주소
.address-box {
  width: 97.8%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding-left: 12px;
  margin-bottom: 30px;
}

.address-btn {
  padding: 5px 8px;
  font-size: 14px;
  border: 1px solid $font-primary;
  border-radius: 6px;
  background-color: #fff;
  color: $font-light-gray;
  cursor: pointer;
}
.address-input {
  width: 98.3%;
  line-height: 45px;
  padding-left: 12px;
  font-size: 16px;
}
// 탭2 물품보관장소
.place-box {
  width: 97.8%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding-left: 12px;
  margin-bottom: 51px;
}
.place-text {
  font-size: 16px;
  color: $font-primary;
}
.place-input {
  width: 98.3%;
  line-height: 45px;
  padding-left: 12px;
  font-size: 14px;
}
// 주소지선택 완료 버튼
.complete-btn-box {
  width: 100%;
}
.complete-btn {
  font-size: 14px;
  line-height: 20px;
  font-weight: bold;
  padding: 6px 12px;
  color: #fff;
  background-color: $primary-color;
  border: none;
  border-radius: 6px;
  margin: 12px auto;
  cursor: pointer;
}
</style>
