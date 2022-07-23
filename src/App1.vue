<script setup>
import Converter from './components/Converter.vue'
import { ref } from 'vue'
import currencies from './currencies'

// console.log(currency);
const rte = ref(0);
const cur = ref('');
const rte2 = ref(0);
const cur2 = ref('');
function upt() {
  rte.value = rate.value.split('_')[0];
  cur.value = rate.value.split('_')[1];
  rte2.value = rate2.value.split('_')[0];
  cur2.value = rate2.value.split('_')[1];
  rater.value = (rte2.value/rte.value).toFixed(4);

  console.log(rate.value, rater.value, rte2.value)
}

const rate = ref('0_NULL')
const rater = ref(0)
const rate2 = ref('0_NULL')
const converter1 = ref(0)
const converter2 = ref(0)

</script>

<template>
  <h1>CoinPair</h1>
  <p></p>
  <div>
    <div class="flex bg-gray-200 justify-between py-16 px-10 rounded-xl mb-5">
      <select class="bg-gray-200 border-0" v-model="rate" @change="upt" >
        <template v-for="(curr, i) in currencies" :key="i">
          <option v-if="curr.rates" :value="curr.rates+'_'+curr.code">{{curr.code}}</option>
        </template>
      </select>
      <input class="border-0 text-right bg-gray-200" v-model="converter1" @keyup="converter2 = rte*converter1" type="tel">
    </div>
  </div>


  <div class="flex bg-gray-900 text-white justify-between py-8 px-20 rounded-xl my-20 mx-35">
    <p>💱 1 {{cur}} = {{rater}} {{cur2}}</p>
  </div>
  
  <div>
    <div class="flex bg-gray-200 justify-between py-16 px-10 rounded-xl">
      <select class="bg-gray-200 border-0" v-model="rate2" @change="upt">
        <option disabled value="0_NULL">NULL</option>
        <option value="1.00_USD">USD</option>
        <option value="1.2985_AUD">AUD</option>
        <option value="0.7117_GBP">GBP</option>
        <option value="0.0016_NGN">NGN</option>
      </select>
      <input class="border-0 text-right bg-gray-200" :value="converter2" type="tel" disabled>
    </div>
  </div>

</template>

<style scoped>
  .border-0{border-width: 0;}
  .bg-gray-200{background-color: #ededed}
</style>
