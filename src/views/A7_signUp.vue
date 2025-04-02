<script setup>
import { ref, watch } from 'vue';

const allAgree = ref(false);
const terms = ref(false);
const privacy = ref(false);

watch(allAgree, (newValue) => {
  terms.value = newValue;
  privacy.value = newValue;
});

watch([terms, privacy], ([newTerms, newPrivacy]) => {
  allAgree.value = newTerms && newPrivacy;
});
</script>

<template>
  <div class="wrap">
    <h1>짐꾼 회원가입</h1>
    <div class="checkboxWrap">
      <input type="checkbox" v-model="terms" class="checkbox" />
      <p>회원가입약관</p>
      <img src="../../public/images/kang/moreView.png" alt="펼치기" class="moreView" />
    </div>
    <div class="checkboxWrap">
      <input type="checkbox" v-model="privacy" class="checkbox" />
      <p>개인정보처리방침안내</p>
      <img src="../../public/images/kang/moreView.png" alt="펼치기" class="moreView" />
    </div>
    <div class="allAgree">
      <input type="checkbox" v-model="allAgree" class="checkbox" />
      <p>전체약관에 동의합니다.</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '/src/assets/variables';

.wrap {
  max-width: 510px;
  margin: auto;
  padding-top: 100px;
}

h1 {
  margin-bottom: 50px;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
}

.checkboxWrap {
  width: 499px;
  height: 62px;
  border: 1px solid $bg-primary;
  border-radius: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.checkboxWrap > p {
  color: $font-primary;
  font-size: 14px;
  margin-left: 5px;
  flex-grow: 1;
}

.checkbox {
  width: 22px;
  height: 22px;
  margin-left: 20px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 2px solid $bg-primary;
  border-radius: 4px;
  background-color: white;
  position: relative;
  cursor: pointer;

  &:checked {
    background-color: $primary-color;
  }

  &:checked::after {
    content: '\2713';
    position: absolute;
    top: -2px;
    left: 3px;
    color: white;
    font-size: 16px;
  }
}

.moreView {
  width: 20px;
  height: 20px;
  margin-left: 10px;
  margin-left: auto;
  margin-right: 21px;
}
.allAgree {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 15px;
}

.allAgree > p {
  font-size: 16px;
  font-weight: bold;
  margin-left: 5px;
}
</style>
