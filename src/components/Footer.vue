<script setup></script>

<template>
  <!-- 전체 레이아웃 -->
  <div class="footerWrap">
    <!-- 이너 -->
    <div class="footer footerInner">
      <!-- 로고 -->
      <router-link to="/" class="footerLogo">
        <img src="/public/images/jimggun_logo.png" alt="짐꾼로고" />
      </router-link>
      <!-- 푸터 콘텐츠 -->
      <div class="footercontents">
        <!-- 왼쪽 텍스트 정보 -->
        <div class="footerLeftText">
          <p>대표자 : 1조</p>
          <p>주소 : 대구 중앙대로 394 제일빌딩 5F</p>
          <p>사업자등록번호 : 123-45-67890</p>
          <p>개인정보보호책임자 : 1조</p>
          <p>이메일 : jimggun@gmail.com</p>
          <p>Copyright ⓒ JIMGGUN Corp. All Rights Reserved.</p>
        </div>
        <!-- 오른쪽 -->
        <div class="footerRightText">
          <p class="footerPhonNumber">1234-5678</p>
          <p>오전 9시 ~ 오후 6시 (토요일, 공휴일 휴무)</p>
          <div class="footerRightButtons">
            <button>제휴문의</button>
            <button>고객센터</button>
          </div>
          <div class="footerRightServices">
            <p>서비스 이용약관</p>
            <span>|</span>
            <p>개인정보처리방침</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "/src/assets/variables";
// 전체 레이아웃
.footerWrap {
  width: 100%;
  margin: 0 auto;
  font-size: 14px;
  color: $font-gray;
}
// 이너
.footerInner {
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 20px;
  background-color: $white;
}
// 푸터
.footer {
  position: relative;
  height: 296px;
  display: flex;
  flex-direction: column;
  justify-content: center
}
// 푸터 콘텐츠
.footercontents{
    display: flex;
    justify-content: space-between;
  align-items: center;
}
// 로고
.footerLogo {
  display: block;
  width: 60px;
  padding-bottom: 30px;
  img {
    width: 100%;
  }
}
//  왼쪽 텍스트
.footerLeftText{
    p{
        margin-bottom: 8px;
    }
}
// 오른쪽 영역
.footerRightText{
    text-align: right;
    .footerPhonNumber{
        font-size: $title-font-S;
        color: $font-primary;
        font-weight: 600;
    }
    p{
        margin-bottom: 12px;
    }
    button{
        margin-bottom: 12px;
        &:first-child{
            margin-right: 6px;
        }
    }
    span{
        margin-bottom: 12px;
    }
}
.footerRightButtons{
    button{
        font-size: 12px;
        color: $font-gray;
        line-height: 16px;
        background-color: $white;
        padding: 3px 8px;
        border: 1px solid $bg-primary;
        // border-color: $bg-primary;
    }
}
.footerRightServices{
    display: flex;
    justify-content: flex-end;
    span{
        margin: 0 20px;
        color: $bg-primary;
    }
}
</style>
