<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { computed } from 'vue';
// const showTermsContent = ref(false);
// const showPrivacyContent = ref(false);
const router = useRouter();

const allAgree = ref(false);
const terms = ref(false);
const privacy = ref(false);
const showPassword = ref(false);
const showPassword2 = ref(false);

// 회원가입 폼 데이터 초기화
const signUpData = ref({
  userId: '', //아이디
  name: '', // 사용자 이름
  email: '', // 사용자 이메일
  password: '', // 비밀번호
  passwordCheck: '', // 비밀번호 확인
  phone: '', // 휴대폰 번호
});

const isFormValid = computed(() => {
  return (
    signUpData.value.userId.trim() &&
    signUpData.value.name.trim() &&
    signUpData.value.phone.trim() &&
    signUpData.value.email.trim() &&
    signUpData.value.password &&
    signUpData.value.passwordCheck &&
    isEmailVerfied.value &&
    isPhoneVerified.value &&
    !errors.value.name &&
    !errors.value.phone &&
    !errors.value.email &&
    !errors.value.passwordCheck &&
    terms.value &&
    privacy.value
  );
});

const errors = ref({
  userId: '',
  name: '',
  phone: '',
  email: '',
  passwordCheck: '',
});

const isEmailVerfied = ref(false); //이메일 인증 완료 여부
const isPhoneVerified = ref(false); //휴대폰 인증 완료 여부
// 유효성 검사 정의
const validateField = (field) => {
  if (field === 'userId') {
    errors.value.userId = !signUpData.value.userId.trim() ? '아이디를 입력해주세요.' : '';
  }
  if (field === 'name') {
    errors.value.name = !signUpData.value.name.trim() ? '이름을 입력해주세요.' : '';
  }

  if (field === 'phone') {
    if (!signUpData.value.phone.trim()) {
      errors.value.phone = '전화번호를 입력해주세요.';
    } else if (!/^\d{3}-\d{4}-\d{4}$/.test(signUpData.value.phone)) {
      errors.value.phone = '올바른 전화번호 형식이 아닙니다. (000-0000-0000)';
    } else {
      errors.value.phone = '';
    }
  }

  if (field === 'email') {
    if (!signUpData.value.email.trim()) {
      errors.value.email = '이메일을 입력해주세요.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signUpData.value.email)) {
      errors.value.email = '올바른 이메일 형식이 아닙니다.';
    } else {
      errors.value.email = '';
    }
  }
};

// 비밀번호 확인 검사
const validatePasswordMatch = () => {
  if (signUpData.value.password !== signUpData.value.passwordCheck) {
    errors.value.passwordCheck = '비밀번호가 일치하지 않습니다.';
  } else {
    errors.value.passwordCheck = '';
  }
};

// 비밀번호 표시 토글

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};

const togglePassword2 = () => {
  showPassword2.value = !showPassword2.value;
};
// 펼치기 토글
const showTermsContent = ref(false);
const showPrivacyContent = ref(false);

const toggleTerms = () => {
  showTermsContent.value = !showTermsContent.value;
};

const togglePrivacy = () => {
  showPrivacyContent.value = !showPrivacyContent.value;
};
// 전체 동의 체크
watch(allAgree, (newValue) => {
  terms.value = newValue;
  privacy.value = newValue;
});

watch([terms, privacy], ([newTerms, newPrivacy]) => {
  allAgree.value = newTerms && newPrivacy;
});

// 유효성 검사 & 회원가입 처리 함수
const validateAllFields = () => {
  validateField('userId');
  validateField('name');
  validateField('phone');
  validateField('email');
  validatePasswordMatch();

  return (
    !errors.value.userId &&
    !errors.value.name &&
    !errors.value.phone &&
    !errors.value.email &&
    !errors.value.passwordCheck
  );
};

// 회원가입 가입 처리
const handleSignup = () => {
  if (!validateAllFields()) {
    return;
  }

  // 1.회원가입 정보 준비
  const userInfo = {
    userId: signUpData.value.userId,
    name: signUpData.value.name, // 사용자 이름
    email: signUpData.value.email, // 이메일
    password: signUpData.value.password, // 비밀번호
    phone: signUpData.value.phone, // 휴대폰 번호
  };
  // 2.localStorage에서 기존 사용자 데이터 가져오기
  // 유저 배열 가져오기 (없으면 빈배열)
  // 문자열 => 객체
  const existingUsers = JSON.parse(localStorage.getItem('userDatas') || '[]');
  // 3.이메일 중복 체크
  if (existingUsers.some((userData) => userData.email === userInfo.email)) {
    alert('이미 등록된 이메일입니다.');
    return; //중복된 이메일이면 회원가입 중단
  }
  // 4.새 사용자 추가
  existingUsers.push(userInfo);
  // 5.업데이트된 사용자 데이터를 localStorage에 저장
  localStorage.setItem('userDatas', JSON.stringify(existingUsers));
  // 6.회원가빕 성공 메시지 표시
  alert('회원가입이 완료 되었습니다.');
  // 7.로그인페이지 이동
  router.push('/login');
};

// 하이픈 자동 입력
const formatPhone = (e) => {
  let digits = e.target.value.replace(/\D/g, '');
  if (digits.length <= 3) {
    signUpData.value.phone = digits;
  } else if (digits.length <= 7) {
    signUpData.value.phone = `${digits.slice(0, 3)}-${digits.slice(3)}`;
  } else if (digits.length <= 11) {
    signUpData.value.phone = `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7, 11)}`;
  } else {
    signUpData.value.phone = `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7, 11)}`;
  }
  validateField('phone');
};
// 휴대폰인증 처리
const handlePhoneVerificaion = () => {
  alert('인증완료');
  isPhoneVerified.value = true; // 임시로 인증완료처리
};
// 이메일 인증 처리
const handleEmailVerification = () => {
  alert('인증완료');
  isEmailVerfied.value = true; //임시로 인증 완료 처리
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
    <form class="signup-form" @submit.prevent="handleSignup">
      <div class="infoWrap">
        <span class="star">*</span> <span class="infoSectionTitle">아이디</span>
        <input type="text" v-model="signUpData.userId" placeholder="아이디" class="infoInput ID" />
      </div>
      <div class="infoWrap">
        <span class="star">*</span> <span class="infoSectionTitle">비밀번호</span>
        <input
          :type="showPassword ? 'text' : 'password'"
          placeholder="비밀번호"
          class="infoInput password"
          v-model="signUpData.password"
          @input="validatePasswordMatch"
        />
        <button type="button" @click="togglePassword" class="toggle-password">
          {{ showPassword ? '👁️' : '👁️‍🗨️' }}
        </button>
      </div>
      <div class="infoWrap">
        <span class="star">*</span> <span class="infoSectionTitle">비밀번호확인</span>
        <input
          :type="showPassword2 ? 'text' : 'password'"
          placeholder="비밀번호확인"
          class="infoInput passwordCheck"
          v-model="signUpData.passwordCheck"
          @input="validatePasswordMatch"
        />
        <button type="button" @click="togglePassword2" class="toggle-password">
          {{ showPassword2 ? '👁️' : '👁️‍🗨️' }}
        </button>
        <p class="errorText" v-if="errors.passwordCheck">{{ errors.passwordCheck }}</p>
      </div>
      <div class="infoWrap">
        <span class="star">*</span> <span class="infoSectionTitle">이름</span>
        <input
          type="text"
          v-model="signUpData.name"
          placeholder="홍길동"
          class="infoInput name"
          @input="validateField('name')"
        />
        <p class="errorText" v-if="errors.name">{{ errors.name }}</p>
      </div>

      <div class="infoWrap">
        <span class="star">*</span> <span class="infoSectionTitle">전화번호</span>
        <input
          type="tel"
          v-model="signUpData.phone"
          @input="formatPhone"
          pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
          placeholder="000-0000-0000"
          class="infoInput phone"
        />
        <p class="errorText" v-if="errors.phone">{{ errors.phone }}</p>
        <button type="button" @click="handlePhoneVerificaion" :disabled="isPhoneVerified" class="verify-btn">
          {{ isPhoneVerified ? '인증완료' : '인증하기' }}
        </button>
      </div>

      <div class="infoWrap">
        <span class="star">*</span> <span class="infoSectionTitle">E-mail</span>
        <input
          type="email"
          v-model="signUpData.email"
          placeholder="0000@naver.com"
          class="infoInput mail"
          @input="validateField('email')"
        />
        <p class="errorText" v-if="errors.email">{{ errors.email }}</p>
        <button type="button" @click="handleEmailVerification" :disabled="isEmailVerfied" class="verify-btn">
          {{ isEmailVerfied ? '인증완료' : '인증하기' }}
        </button>
      </div>

      <div class="btTextParent">
        <p class="btText"><strong>*휴대전화</strong>는 수하물 운송 서비스 이용시 필수</p>
      </div>
      <button type="submit" class="signUpBtn" :disabled="!isFormValid">회원가입</button>
    </form>
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
  width: 98%;
  height: 60px;
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
  width: 98%;
  height: 70px;
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

  color: $font-primary;
  margin-right: 52px;
  display: inline-block;
}
.infoInput {
  border: none;
  outline: none;
  font-size: 16px;

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
.ID {
  padding-left: 41px;
}
.password {
  padding-left: 27px;
}
.name {
  padding-left: 55px;
}
.phone {
  padding-left: 27px;
}
.mail {
  padding-left: 35px;
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
  left: 165px;
  top: 48px;
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
