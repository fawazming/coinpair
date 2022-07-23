<script setup>

defineProps({
  cur: String
})
</script>
<template>
  <div>
    <div class="flex bg-gray-200 justify-between py-16 px-10 rounded-xl">
      <select class="bg-gray-200 border-0">
        <option>{{cur}}</option>
      </select>
      <input class="border-0 text-right bg-gray-200" type="tel">
    </div>
  </div>
  
</template>

<style scoped>
  .border-0{border-width: 0;}
  .bg-gray-200{background-color: #ededed}
</style>