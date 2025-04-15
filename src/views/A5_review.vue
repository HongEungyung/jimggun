<script setup>
import { computed, ref, watchEffect } from 'vue';
// 더미 데이터 (변경되지 않는 초기 데이터)
const dummyReviews = [
  {
    name: '홍길동',
    images: ['/images/kang/1-1.jpg', '/images/kang/1-2.jpg', '/images/kang/1-3.jpg'],
    title: '뚜벅이 여행객들에게 강추!',
    content:
      '처음 이용해봤는데 너무 좋았습니다.\n매번 짐 때문에 고생했는데, 짐 걱정이 없으니까 여행의 질이 너무 좋아졌어요.\n안내도 너무 친절하게 잘해주셔서 좋았어요.\n처음부터 끝까지 친절하고 자세하게 알려주십니다.\n뚜벅이 여행객들에게 강추합니다!',
  },
  {
    name: '김길동',
    images: ['/images/kang/2-1.jpg', '/images/kang/2-2.jpg', '/images/kang/2-3.jpg'],
    title: '공항부터 호텔까지 가벼운 마음으로 여행 시작!',
    content:
      '유모차에 아이들 짐까지 들고 이동하는 게 늘 힘들었는데,\n이번에 짐 운반 서비스를 이용하면서 여행의 질이 확 달라졌어요.\n아이 손 잡고 여유롭게 이동하니 정말 좋았습니다.\n다음 여행도 무조건 이용할 거예요.',
  },
  {
    name: '이길동',
    images: ['/images/kang/3-1.png', '/images/kang/3-2.png', '/images/kang/3-3.png'],
    title: '아이들과 함께한 가족 여행의 필수템',
    content:
      '호텔 체크아웃 후 밤 비행기까지 시간이 남았는데,\n짐 때문에 카페도 마음 놓고 못 갔던 경험이 있어서 이번엔 운반 서비스를 신청했어요.\n덕분에 하루 종일 가볍게 돌아다닐 수 있었고,\n공항에서 짐을 바로 받아 너무 만족스러웠습니다.',
  },
  {
    name: '박길동',
    images: ['/images/kang/4-1.jpg', '/images/kang/4-2.jpg'],
    title: '시간과 체력을 아껴주는 최고의 선택',
    content:
      '비행기에서 내린 뒤 무거운 캐리어를 들고 다닐 생각에 걱정이 많았는데,\n짐 운반 서비스를 이용하니 정말 편했어요.\n바로 관광지로 직행할 수 있어서 하루를 알차게 썼습니다.\n서비스도 친절했고, 호텔 도착하니 짐이 먼저 와 있어서 감동!',
  },
];
// 사진이 무조건 3개가 나오도록 하는 함수
const defaultImg = '/images/kang/default.png'; // 대체 이미지

const getThreeImages = (images) => {
  const filled = [...images];
  while (filled.length < 3) {
    filled.push(defaultImg);
  }
  return filled;
};
// 로컬스토리지에서 불러올 데이터
// 사용자가 새롭게 작성한 리뷰를 저장하고 불러오는 역할
const reviews = ref([]);
//더미데이터 + 로컬스토리지데이터 합치기

const allReviews = computed(() => [...dummyReviews, ...reviews.value]);
// 이름 마스킹
function maskedName(name) {
  const [user, domain] = name.split('@');
  if (user.length <= 4) {
    return user[0] + '*'.repeat(user.length - 1);
  } else {
    const visible = user.slice(0, 4);
    const masked = '*'.repeat(user.length - 4);
    return visible + masked;
  }
}

// 리뷰 펼침 상태 배열 추가
const expandedStates = ref([]);

// 모든 리뷰 데이터가 준비된 후, 초기 펼침 상태 설정
watchEffect(() => {
  expandedStates.value = allReviews.value.map(() => false);
});

// 특정 인덱스의 토글 상태 변경 함수
const toggleContent = (index) => {
  expandedStates.value[index] = !expandedStates.value[index];
};

//줄바꿈
function formatContent(content) {
  return content.replace(/\n/g, '<br>');
}
// 리뷰 더보기 3개까지
const defaultVisible = 3;
const showAllReviews = ref(false);

const visibleReviews = computed(() =>
  showAllReviews.value ? allReviews.value : allReviews.value.slice(0, defaultVisible)
);
// 리뷰 더보기
const toggleReviews = () => {
  showAllReviews.value = !showAllReviews.value;
};
</script>

<template>
  <div class="A5-wrap">
    <div class="A5-inner">
      <div class="A5-h1-box">
        <h1 class="A5-h1">이용후기</h1>
      </div>

      <div class="review-box" v-for="(review, index) in visibleReviews" :key="index">
        <h2 class="review-writer">{{ maskedName(review.name) }} 님 감사합니다!</h2>
        <h3 class="review-title">{{ review.title }}</h3>

        <!-- ▼ 토글 버튼 -->
        <button class="toggle-content-btn" @click="toggleContent(index)">
          {{ expandedStates[index] ? '▲' : '▼' }}
        </button>

        <!-- 내용이 펼쳐질 때만 보여주기 -->
        <div v-if="expandedStates[index]" class="review-content">
          <p v-html="formatContent(review.content)"></p>
        </div>

        <div class="review-images">
          <img
            v-for="(img, imgIndex) in getThreeImages(review.images)"
            :key="imgIndex"
            :src="img"
            alt="리뷰 이미지"
            class="user-image"
          />
        </div>
      </div>
      <div v-if="allReviews.length > defaultVisible" class="toggle-review-box">
        <button class="review-toggle-btn" @click="toggleReviews">
          {{ showAllReviews ? '접기' : '더 많은 후기 보기' }}
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '/src/assets/variables';
.A5-wrap {
  background-color: $sub-color;
  width: 100%;
  font-family: $font-family;
  padding-top: 70px;
}
.A5-inner {
  max-width: 1280px;
  margin: auto;
  text-align: center;
}
// 이용후기
.A5-h1-box {
  width: 100%;
  max-width: 400px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
  // border: 3px solid #f1f1f5;
  margin: auto;
  background-color: $primary-color;
  color: #fff;
}
.A5-h1 {
  // font-size: $title-font-XS;
  font-size: $text-font-L;
}

// 리뷰 박스
.review-box {
  width: 84.4%;
  background: #fff;
  margin: 80px auto;
  padding-top: 55px;

  padding-bottom: 95px;
  border-radius: 25px;
  box-shadow: $reservation-boxShadow;
}
//작성자
.review-writer {
  text-align: left;
  padding-left: 90px;
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;

  color: $font-primary;
}
//제목
.review-title {
  display: flex;
  text-align: left;
  padding-left: 90px;
  font-size: $text-font-M;
  color: $font-primary;
  line-height: 20px;
  position: relative;
  // min-height: 48px;
}
//내용
.review-content {
  display: flex;
  text-align: left;
  padding-left: 90px;
  font-size: 13px;
  color: $font-primary;
  line-height: 16px;
  position: relative;
  // min-height: 48px;
}
.review-content p {
  flex: 1;
}
//내용 보기 버튼
.toggle-content-btn {
  background: none;
  border: none;

  font-weight: bold;
  font-size: 14px;
  margin-top: 10px;
  cursor: pointer;
}

.review-images {
  display: flex;
  justify-content: center;
  gap: 70px;
  margin-top: 35px;
}

.user-image {
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
}
// 리뷰 더보기 버튼
.toggle-review-box {
  text-align: center;
  margin-top: 90px;
  padding-bottom: 100px;

  .review-toggle-btn {
    font-size: $text-font-S;
    line-height: 20px;
    // font-weight: bold;
    padding: 12px 16px;
    color: #fff;
    background-color: $primary-color;
    border: none;
    border-radius: 6px;
    margin: 12px auto;
    cursor: pointer;
    // box-shadow: $info-boxShadow;
  }
}
//반응형
@media screen and (max-width: 1100px) {
  .review-images img:nth-child(n + 3) {
    display: none;
  }
  .review-images {
    // justify-content: left;
    padding-left: 90px;

    justify-content: center;
    padding-left: 0px;
  }
}
@media screen and (max-width: 900px) {
  .review-images {
    gap: 30px;
    margin-top: 10px;
  }
  .user-image {
    width: 220px;
    height: 220px;
  }
}
@media screen and (max-width: 730px) {
  .review-images img:nth-child(n + 2) {
    display: none;
  }
}
@media screen and (max-width: 440px) {
  .A5-h1 {
    padding-top: 50px;
  }
  .review-box {
    padding-top: 40px;
    padding-bottom: 55px;
  }
  .review-title {
    padding-left: 40px;
    font-size: 14px;
  }
  .review-content {
    padding-left: 40px;
    width: 80%;
  }
}
</style>
