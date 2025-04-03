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
const selectedValue = ref('');
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
          <div v-if="activeTab === 'tab1'">
            <div class="search-box">
              <label for="comboBox" class="areaSelect"></label>
              <select id="comboBox" v-model="selectedValue" class="custom-select">
                <option value="" disabled hidden>지역 선택</option>
                <option value="seoul">서울</option>
                <option value="busan">부산</option>
                <option value="daegu">제주</option>
                <option value="gangneung">강릉/양양</option>
                <option value="gyeongju">경주</option>
                <option value="yeosu">여수</option>
                <option value="daegu">대구</option>
                <option value="gwangju">광주</option>
                <option value="mokpo">목포</option>
                <option value="gyeonggi">경기/인천</option>
                <option value="cheonan">천안/아산</option>
                <option value="cheongju">청주</option>
                <option value="daejeon">대전</option>
              </select>
              <input type="text" placeholder="역공항 명 검색" class="searchInput" />
            </div>
          </div>
          <div v-if="activeTab === 'tab2'">
            <h2>탭 2 내용</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '../assets/variables';
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
}
.modal-content {
  background: white;
  width: 1472px;
  //   height: 1601px;

  text-align: center;
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
  width: 1440px;
  margin: auto;
}
//탭
.tabs {
  margin-top: 30px;
}

button {
  padding: 8px 16px;
  border: none;
  background-color: #fff;
  color: #111;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
}

button.active {
  border-bottom: 4px solid $font-gray;
}

.tab-content {
  display: flex;
  justify-content: flex-start; /* 왼쪽 정렬 */
  align-items: center; /* 수직 정렬 */
}
.search-box {
  display: flex;
}
.custom-select {
  width: 112px;
  height: 45px;
  margin-left: 12px;
  margin-top: 30px;
  border: 1px solid $input-select;
  border-radius: 6px;
  font-size: 14px;
}
option[value=''] {
  color: $font-light-gray;
}
.searchInput {
  width: 1289px;
  height: 45px;
}
</style>
