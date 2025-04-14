<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter(); // 페이지 이동을 위한 Vue Router 사용

const allAgree = ref(false);
const terms = ref(false);
const privacy = ref(false);

const name = ref('');
const phone = ref('');
const email = ref('');

const errors = ref({
  name: '',
  phone: '',
  email: '',
});
// 유효성 검사 정의
const validateField = (field) => {
  if (field === 'name') {
    errors.value.name = !name.value.trim() ? '이름을 입력해주세요.' : '';
  }

  if (field === 'phone') {
    if (!phone.value.trim()) {
      errors.value.phone = '전화번호를 입력해주세요.';
    } else if (!/^\d{3}-\d{4}-\d{4}$/.test(phone.value)) {
      errors.value.phone = '올바른 전화번호 형식이 아닙니다. (000-0000-0000)';
    } else {
      errors.value.phone = '';
    }
  }

  if (field === 'email') {
    if (!email.value.trim()) {
      errors.value.email = '이메일을 입력해주세요.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      errors.value.email = '올바른 이메일 형식이 아닙니다.';
    } else {
      errors.value.email = '';
    }
  }
};
// 모두 동의합니다
watch(allAgree, (newValue) => {
  terms.value = newValue;
  privacy.value = newValue;
});

watch([terms, privacy], ([newTerms, newPrivacy]) => {
  allAgree.value = newTerms && newPrivacy;
});
// 약관 내용 펼치기
const showTermsContent = ref(false); // 회원가입약관
const showPrivacyContent = ref(false); // 개인정보처리방침

const toggleTerms = () => {
  showTermsContent.value = !showTermsContent.value;
};
const togglePrivacy = () => {
  showPrivacyContent.value = !showPrivacyContent.value;
};

// 유효성 검사 & 회원가입 처리 함수
const validateAllFields = () => {
  validateField('name');
  validateField('phone');
  validateField('email');

  return !errors.value.name && !errors.value.phone && !errors.value.email;
};
const handleSignUp = () => {
  if (!terms.value || !privacy.value) {
    alert('모든 약관에 동의해야 회원가입이 가능합니다.');
    return;
  }

  if (validateAllFields()) {
    router.push('/signUpFinish');
  }
};
// 하이픈 자동 입력
const formatPhone = (e) => {
  let digits = e.target.value.replace(/\D/g, ''); // 숫자만 남기기

  if (digits.length <= 3) {
    phone.value = digits;
  } else if (digits.length <= 7) {
    phone.value = `${digits.slice(0, 3)}-${digits.slice(3)}`;
  } else if (digits.length <= 11) {
    phone.value = `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7, 11)}`;
  } else {
    phone.value = `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7, 11)}`;
  }
  validateField('phone');
};
</script>

<template>
  <div class="wrap">
    <h1>짐꾼 회원가입</h1>
    <!--약관 동의-->
    <div class="checkboxWrap">
      <input type="checkbox" v-model="terms" class="checkbox" />
      <p>회원가입약관</p>
      <img src="../../public/images/kang/moreView.png" alt="펼치기" class="moreView" @click="toggleTerms" />
    </div>
    <!-- 약관 펼쳐지는 내용 -->
    <div v-if="showTermsContent" class="termsContent">
      <p>
        [회원가입약관]<br />
        제1조 목적<br />
        이 약관은 회원가입을 위해 필요한...
      </p>
    </div>
    <div class="checkboxWrap">
      <input type="checkbox" v-model="privacy" class="checkbox" />
      <p>개인정보처리방침안내</p>
      <img src="../../public/images/kang/moreView.png" alt="펼치기" class="moreView" @click="togglePrivacy" />
    </div>
    <!-- 개인정보 처리방침 펼쳐지는 내용 -->
    <div v-if="showPrivacyContent" class="termsContent">
      <p>
        [개인정보 처리방침]<br />
        수집하는 개인정보 항목은 다음과 같습니다...
      </p>
    </div>
    <div class="allAgree">
      <input type="checkbox" v-model="allAgree" class="checkbox" />
      <p>전체약관에 동의합니다.</p>
    </div>
    <!--개인정보 입력-->
    <h2>개인정보 입력</h2>
    <div class="infoWrap">
      <span class="star">*</span> <span class="infoSectionTitle">이름</span>
      <input
        type="text"
        v-model="name"
        placeholder="홍길동"
        class="infoInput name"
        @input="validateField('name')"
      /><img src="../../public/images/kang/inputName.png" alt="이름 입력" class="infoIcon" />
      <p class="errorText" v-if="errors.name">{{ errors.name }}</p>
    </div>

    <div class="infoWrap">
      <span class="star">*</span> <span class="infoSectionTitle">전화번호</span>
      <input
        type="tel"
        v-model="phone"
        @input="formatPhone"
        pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
        placeholder="000-0000-0000"
        class="infoInput phone"
      /><img src="../../public/images/kang/inputPhone.png" alt="전화번호 입력" class="infoIcon" />
      <p class="errorText" v-if="errors.phone">{{ errors.phone }}</p>
    </div>

    <div class="infoWrap">
      <span class="star">*</span> <span class="infoSectionTitle">E-mail</span>
      <input
        type="email"
        v-model="email"
        placeholder="0000@naver.com"
        class="infoInput mail"
        @input="validateField('email')"
      /><img src="../../public/images/kang/inputMail.png" alt="이메일 입력" class="infoIcon" />
      <p class="errorText" v-if="errors.email">{{ errors.email }}</p>
    </div>

    <div class="btTextParent">
      <p class="btText"><strong>*휴대전화</strong>는 수하물 운송 서비스 이용시 필수</p>
    </div>
    <button type="button" class="signUpBtn" @click="handleSignUp">가입하기</button>
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
  color: $font-primary;
}
//약관 동의
.checkboxWrap {
  // width: 499px;
  width: 97.8%;
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
    border-color: $primary-color;
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
  cursor: pointer;
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
// 약관 & 개인정보처리방침
.termsContent {
  background-color: $bg-light;
  font-size: 13px;
  color: $font-primary;
  border: 1px solid $bg-primary;
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 10px;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  line-height: 1.6;
  // max-height: 200px;
  // overflow-y: auto;
}
//개인정보 입력
h2 {
  font-size: 20px;
  font-weight: bold;
  color: $font-primary;
  margin-top: 40px;
  margin-bottom: 20px;
}
.infoWrap {
  width: 501px;
  height: 92px;
  border: 1px solid $bg-primary;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: left;
  margin-bottom: 10px;
  position: relative;
}
.star {
  font-size: 16px;
  font-weight: bold;
  color: $primary-color;
  margin-left: 20px;
  margin-right: 2px;
}
.infoSectionTitle {
  font-size: 16px;
  font-weight: bold;
  color: $font-primary;
  margin-right: 52px;
  display: inline-block;
}
.infoInput {
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
}
.infoIcon {
  width: 20px;
  height: 20px;
  margin-left: auto;
  margin-right: 36px;
}
.btText {
  font-size: 12px;
  color: $font-gray;
  margin-left: auto;
  margin-right: 6px;
  margin-top: 10px;
  display: block;
}
.btTextParent {
  display: flex;
  justify-content: flex-end;
}
.name {
  padding-left: 52px;
}
.phone {
  padding-left: 24px;
}
.mail {
  padding-left: 32px;
}
.signUpBtn {
  width: 480px;
  height: 56px;
  background-color: $primary-color;
  color: #fff;
  border: none;
  outline: none;
  border-radius: 10px;
  display: block;
  margin: 60px auto;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}
.signUpBtn:hover {
  background-color: $primary-hover;
}
// 유효성 검사 텍스트
.errorText {
  color: $error-color;
  font-size: 14px;
  position: absolute;
  left: 160px;
  top: 64px;
}
//반응형
@media screen and (max-width: 540px) {
  .checkboxWrap {
    width: 360px;
  }
  .wrap {
    width: 360px;
    padding-top: 50px;
  }
  .infoWrap {
    width: 360px;
  }
  .signUpBtn {
    width: 340px;
  }
  .name {
    padding-left: 42px;
  }
  .phone {
    padding-left: 14px;
  }
  .mail {
    padding-left: 22px;
  }
  .infoIcon {
    margin-right: 15px;
  }
  .infoSectionTitle {
    font-size: 14px;

    margin-right: 10px;
  }
}
</style>
