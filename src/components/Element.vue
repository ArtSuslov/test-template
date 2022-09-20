<template>
  <div class="element">
    <h1 class="">{{ json.name }}</h1>
    <h2 class="">{{ json.age }}</h2>
  </div>
</template>
<script setup lang="ts">
interface Test {
  name: string;
  age: number;
}
const props = defineProps<{
  json: Test
}>()
</script>
<style lang="scss" scoped>

</style>
