<script setup lang="ts">
import Element from './components/Element.vue'
import jsonina from './jsonina.json' 
import { useWeb3 } from '@distributedlab/web3-provider'
import { onMounted } from 'vue'

const web3 = useWeb3()

onMounted(async () => {
  await web3.init()
  console.log(web3.providers.value)
  console.log(window.ethereum, 'window ethereum')
})
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <Element v-for="(json, id) in jsonina.data" :key="id" :json="json" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
