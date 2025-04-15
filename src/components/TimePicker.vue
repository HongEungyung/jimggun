<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  isOpen: Boolean,
  position: Object,
});

const emit = defineEmits(["select", "close"]);

const hours = Array.from({ length: 24 }, (_, i) => i);
const minutes = Array.from({ length: 6 }, (_, i) => i * 10); // 10분 간격으로 변경
const selectedHour = ref(0);
const selectedMinute = ref(0);

// 시간이 변경될 때마다 즉시 반영
watch([selectedHour, selectedMinute], () => {
  const time = `${selectedHour.value
    .toString()
    .padStart(2, "0")}:${selectedMinute.value.toString().padStart(2, "0")}`;
  emit("select", time);
  // emit("close");
});
</script>

<template>
  <div class="date-picker-overlay" @click="emit('close')">
    <div class="time-picker"  @click.stop>
      <div class="time-picker-content">
        <div class="time-selector">
          <div class="time-column">
            <div class="time-scroll">
              <div
                v-for="hour in hours"
                :key="hour"
                class="time-option"
                :class="{ selected: selectedHour === hour }"
                @click="selectedHour = hour">
                {{ hour.toString().padStart(2, "0") }}
              </div>
            </div>
          </div>

          <div class="time-column">
            <div class="time-scroll">
              <div
                v-for="minute in minutes"
                :key="minute"
                class="time-option"
                :class="{ selected: selectedMinute === minute }"
                @click="selectedMinute = minute">
                {{ minute.toString().padStart(2, "0") }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.time-picker {
  /* position: absolute; */
  z-index: 1000;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  width: 200px;
  /* overflow: hidden; */
}

.time-picker-content {
  padding: 16px;
}

.time-selector {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.time-column {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.time-scroll {
  height: 200px;
  overflow-y: auto;
  border-radius: 8px;
  padding: 8px;
  scrollbar-width: none;
  &:hover {
    scrollbar-width: thin;
  }
}

.time-scroll::-webkit-scrollbar {
  width: 4px;
}

/* .time-scroll::-webkit-scrollbar-thumb {
  background: #ddd;
  border-radius: 2px;
  
} */

.time-option {
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 4px;
  text-align: center;
  transition: all 0.2s;
}

.time-option:hover {
  background: #fdf3e7;
}

/* .time-option.selected {
  background: #ff6f00;
  color: white;
} */
</style>
