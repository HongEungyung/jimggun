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
    <div>
        <h1>step2 로그인</h1>
        <button  @click="confirmPayment">다음</button>
    </div>

</template>

<style scoped>

</style>