<template>
  <div v-if="!isHidden" class="element">
    <button class="element__hide-btn" @click="isHidden = true">Hide</button>
    <h1 class="">{{ json.name }}</h1>
    <h2 class="">{{ json.age }}</h2>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue'
interface Test {
  name: string;
  age: number;
}
const props = defineProps<{
  json: Test
}>()
const isHidden = ref(false)
</script>
<style lang="scss" scoped>

</style>
