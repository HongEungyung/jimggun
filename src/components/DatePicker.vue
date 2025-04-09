<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  type: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["select", "close"]);

const currentDate = ref(new Date());
const selectedDate = ref(null);

// 현재 월의 날짜 배열 생성
const daysInMonth = computed(() => {
  const year = currentDate.value.getFullYear();
  const month = currentDate.value.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const days = [];
  const firstDayOfWeek = firstDay.getDay();

  // 이전 달의 날짜들
  for (let i = firstDayOfWeek - 1; i >= 0; i--) {
    const prevDate = new Date(year, month, -i);
    days.push({
      date: prevDate,
      isCurrentMonth: false,
    });
  }

  // 현재 달의 날짜들
  for (let i = 1; i <= lastDay.getDate(); i++) {
    const date = new Date(year, month, i);
    days.push({
      date,
      isCurrentMonth: true,
    });
  }

  // 다음 달의 날짜들
  const remainingDays = 42 - days.length; // 6주 * 7일 = 42
  for (let i = 1; i <= remainingDays; i++) {
    const nextDate = new Date(year, month + 1, i);
    days.push({
      date: nextDate,
      isCurrentMonth: false,
    });
  }

  return days;
});

// 월 이동
const changeMonth = (offset) => {
  currentDate.value = new Date(
    currentDate.value.getFullYear(),
    currentDate.value.getMonth() + offset,
    1
  );
};

// 날짜 선택
const selectDate = (date) => {
  if (date.isCurrentMonth) {
    selectedDate.value = date.date;
    const formattedDate = formatDate(date.date);
    emit("select", formattedDate);
  }
};

// 날짜 포맷팅
const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

// 현재 월 표시
const currentMonth = computed(() => {
  return `${currentDate.value.getFullYear()}년 ${
    currentDate.value.getMonth() + 1
  }월`;
});
</script>

<template>
  <div class="date-picker-overlay" @click="emit('close')">
    <div class="date-picker" @click.stop>
      <div class="date-picker-header">
        <button @click="changeMonth(-1)">&lt;</button>
        <span>{{ currentMonth }}</span>
        <button @click="changeMonth(1)">&gt;</button>
      </div>
      <div class="date-picker-grid">
        <div
          class="weekday"
          v-for="day in ['일', '월', '화', '수', '목', '금', '토']"
          :key="day">
          {{ day }}
        </div>
        <div
          v-for="(day, index) in daysInMonth"
          :key="index"
          class="day"
          :class="{
            'current-month': day.isCurrentMonth,
            selected:
              selectedDate && formatDate(day.date) === formatDate(selectedDate),
          }"
          @click="selectDate(day)">
          {{ day.date.getDate() }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "/src/assets/variables";
// .date-picker-overlay {
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background-color: rgba(0, 0, 0, 0.5);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 1000;
// }

.date-picker {
  background-color: white;
  border-radius: 10px;
  padding: 20px 20px 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 350px;
}

.date-picker-header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 15px;
  button {
    background: none;
    border: none;
    font-size: 1.2em;
    cursor: pointer;
    padding: 5px 10px;
    
    &:hover {
      color: $primary-color;
    }
  }
}

.date-picker-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  
}

.weekday {
  text-align: center;
  // font-weight: bold;
  padding: 5px;
  color: $font-gray;
}

.day {
  
  text-align: center;
  padding: 10px;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background-color: rgba($primary-color, 0.1);
    &.current-month{
      color: $font-primary;
      font-weight: 500;
    }
  }
  &.current-month {
    color: $font-gray;
  }
  
  &:not(.current-month) {
    color: $disabled-color;
    font-weight: 100;
    opacity: 0;
  }
  &.selected {
    background-color: $primary-color;
    color: white;
  }
}
</style>
