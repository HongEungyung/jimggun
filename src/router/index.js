import { createRouter , createWebHistory } from "vue-router";
import A1_home from "@/views/A1_home.vue";
import A2_information from "@/views/A2_information.vue";
import A3_charge from "@/views/A3_charge.vue";
import A4_reservation from "@/views/A4_reservation.vue";
import A5_review from "@/views/A5_review.vue";
import A6_cs from "@/views/A6_cs.vue";
import A7_login from "@/views/A7_login.vue";
import A7_signUp from "@/views/A7_signUp.vue";
import A7_signUpFinish from "@/views/A7_signUpFinish.vue";
import A8_mypage from "@/views/A8_mypage.vue";
import A9_Inquiry from "@/views/A9_inquiry.vue";

const routes = [
    {path : "/" , component : A1_home},
    {path : "/information" , component : A2_information},
    {path : "/charge" , component : A3_charge},
    {path : "/reservation" , component : A4_reservation},
    {path : "/review" , component : A5_review},
    {path : "/cs" , component : A6_cs},
    {path : "/login" , component : A7_login},
    {path : "/signUp" , component : A7_signUp},
    {path : "/signUpFinish" , component : A7_signUpFinish},
    {path : "/mypage" , component : A8_mypage},
    {path : "/inquiry" , component : A9_Inquiry}
]
const router = createRouter({
    history : createWebHistory(),
    routes,
})
export default router