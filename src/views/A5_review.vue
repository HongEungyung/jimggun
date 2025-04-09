<script setup>
import { computed, ref } from 'vue';
// 더미 데이터 (변경되지 않는 초기 데이터)
const dummyReviews = [
  {
    name: 'adsf1234@naver.com',
    images: ['/images/kang/1-1.jpg', '/images/kang/1-2.jpg', '/images/kang/1-3.jpg'],
    content:
      '처음 이용해봤는데 너무 좋았습니다.\n매번 짐 때문에 고생했는데, 짐 걱정이 없으니까 여행의 질이 너무 좋아졌어요.\n안내도 너무 친절하게 잘해주셔서 좋았어요.\n처음부터 끝까지 친절하고 자세하게 알려주십니다.\n뚜벅이 여행객들에게 강추합니다!',
  },
  {
    name: '1q2w3e4r@naver.com',
    images: ['/images/kang/2-1.jpg', '/images/kang/2-2.jpg', '/images/kang/2-3.jpg'],
    content:
      '처음 이용해봤는데 너무 좋았습니다.\n매번 짐 때문에 고생했는데, 짐 걱정이 없으니까 여행의 질이 너무 좋아졌어요.\n안내도 너무 친절하게 잘해주셔서 좋았어요.\n처음부터 끝까지 친절하고 자세하게 알려주십니다.\n뚜벅이 여행객들에게 강추합니다!',
  },
  {
    name: 'qwer1234@naver.com',
    images: ['/images/kang/3-1.png', '/images/kang/3-2.png', '/images/kang/3-3.png'],
    content:
      '처음 이용해봤는데 너무 좋았습니다.\n매번 짐 때문에 고생했는데, 짐 걱정이 없으니까 여행의 질이 너무 좋아졌어요.\n안내도 너무 친절하게 잘해주셔서 좋았어요.\n처음부터 끝까지 친절하고 자세하게 알려주십니다.\n뚜벅이 여행객들에게 강추합니다!',
  },
  {
    name: 'kang1234@naver.com',
    images: ['/images/kang/4-1.jpg', '/images/kang/4-2.jpg'],
    content:
      '처음 이용해봤는데 너무 좋았습니다.\n매번 짐 때문에 고생했는데, 짐 걱정이 없으니까 여행의 질이 너무 좋아졌어요.\n안내도 너무 친절하게 잘해주셔서 좋았어요.\n처음부터 끝까지 친절하고 자세하게 알려주십니다.\n뚜벅이 여행객들에게 강추합니다!',
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
    return user[0] + '*'.repeat(user.length - 1) + '@' + domain;
  } else {
    const visible = user.slice(0, 4);
    const masked = '*'.repeat(user.length - 4);
    return visible + masked + '@' + domain;
  }
}
const showFull = ref(Array(dummyReviews.length).fill(false)); // 각 리뷰의 더보기 상태 저장

// 더보기 상태 토글
const toggleShowFull = (index) => {
  showFull.value[index] = !showFull.value[index];
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

const toggleReviews = () => {
  showAllReviews.value = !showAllReviews.value;
};
</script>

<template>
  <div class="A5-wrap">
    <div class="A5-inner">
      <h1 class="A5-h1">이용후기</h1>
      <div class="review-box" v-for="(review, index) in visibleReviews" :key="index">
        <h2 class="review-title">{{ maskedName(review.name) }} 님 감사합니다!</h2>
        <div class="review-content" @click="toggleShowFull(index)">
          <p :class="{ 'clamp-text': !showFull[index] }" v-html="formatContent(review.content)"></p>
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
}
.A5-inner {
  max-width: 1280px;
  margin: auto;
  text-align: center;
}
// 이용후기
.A5-h1 {
  font-size: 28px;

  padding-top: 100px;
  padding-bottom: 3.5px;
  position: relative;
  display: inline-block;
  color: $font-primary;
}
// 이용후기 밑줄
.A5-h1::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 10%;
  width: 80%;
  height: 1px;
  background-color: $font-primary;
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
.review-title {
  text-align: left;
  padding-left: 90px;
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;

  color: $font-primary;
}
.review-content {
  display: flex;
  text-align: left;
  padding-left: 90px;
  font-size: 13px;
  color: $font-primary;
  line-height: 16px;
  position: relative;
  min-height: 48px;
}
.review-content p {
  flex: 1;
}
.clamp-text {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  max-height: calc(16px * 2);
}

// .toggle-btn {
//   position: absolute;
//   top: 15px;
//   left: 60%;
//   background: none;
//   border: none;
//   color: $font-primary;
//   cursor: pointer;
//   font-weight: bold;
// }
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
    font-size: 16px;
    line-height: 20px;
    font-weight: bold;
    padding: 10px 14px;
    color: #fff;
    background-color: $primary-color;
    border: none;
    border-radius: 6px;
    margin: 12px auto;
    cursor: pointer;
    box-shadow: $info-boxShadow;
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
