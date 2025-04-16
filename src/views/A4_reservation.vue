<script setup>
import Step1Info from './reservation/Step1Info.vue';
import Step2Login from './reservation/Step2Login.vue';
import Step3Payment from './reservation/Step3Payment.vue';
import Step4Confirmation from './reservation/Step4Confirmation.vue';
import { computed, ref } from 'vue';
// 현재 단계
const currentStep = ref(1);
const steps = [Step2Login, Step1Info,  Step3Payment, Step4Confirmation];
// 현재 표시할 컴포넌트
const currentStepComponent = computed(() => steps[currentStep.value - 1]);
// 예약 진행 데이터 (출발지 도착지 예약 정보)
const resevationData = ref({
  departure: "", // 출발지 정보
  destination: "", // 도착지 정보
  name: "", // 예약자 이름
  phone: "", // 예약자 번호
  luggageCount: 1, // 짐갯수 - 는 무조건 1개이상이 되어야 한다
  paymentComfirmed: false,
});
// 다음 버튼 클릭시 다음 단계 이동
const goToNextStep = (data) => {
  //(data)는 다음단계 이동시 정보를 가지고 이동해야 해서
  // console.log(data);
  // 기존 데이터(예약 진행 데이터)에 새 데이터 병합
  resevationData.value = { ...resevationData.value, ...data };
  console.log("다음단계로 이동", resevationData.value);

  if (currentStep.value < steps.length) currentStep.value++;
};
</script>

<template>
 <div class="res-wrap">
    <main>
      <div class="reservation-container">
        <component
          :is="currentStepComponent"
          @next="goToNextStep"
          :resevationData="resevationData" />
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
@import "/src/assets/variables";
.res-warp{
  background-color: $sub-color;
}
</style>