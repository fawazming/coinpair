<script setup>
import Converter from './components/Converter.vue'
import { ref } from 'vue'
import {curr, pcrr} from './currencies'

console.log(pcrr['INR']);
const rte = ref(0);
const cur = ref('');
const rte2 = ref(0);
const cur2 = ref('');
function upt() {
  // rte.value = rate.value.split('_')[0];
  cur.value = rate.value.split('_')[1];
  rte.value = pcrr[`${cur.value}`];
  cur2.value = rate2.value.split('_')[1];
  rte2.value = pcrr[`${cur2.value}`];
  // rte2.value = rate2.value.split('_')[0];
  // cur2.value = rate2.value.split('_')[1];
  rater.value = (rte2.value/rte.value).toFixed(4);

  console.log(rte.value, rater.value, rte2.value)
}

const rate = ref('0_NULL')
const rater = ref(0)
const rate2 = ref('0_NULL')
const converter1 = ref('')
const converter2 = ref(0)

</script>

<template>
  <h1 class="my-0">CoinPair</h1>
  <p></p>
  <div>
    <div class="flex bg-gray-200 justify-between items-center py-16 px-10 rounded-xl mb-5">
      <select class="bg-gray-200 border-0" v-model="rate" @change="upt" title="Currency 1">
        <option disabled value="0_NULL">NULL</option>
        <option value="0.0016_NGN">NGN</option>
        <template v-for="(cr, i) in curr" :key="i">
          <option :value="cr.rates+'_'+cr.code">{{cr.code}}</option>
        </template>
        <option value="1.00_USD">USD</option>
      </select>
      <div>
        <label>Value</label>
        <input class="border-0 text-right bg-gray-200" v-model="converter1" @keyup="converter2 = rater*converter1" type="tel" placeholder="To be converted" title="To be converted">
      </div>
    </div>
  </div>


  <div class="flex bg-gray-900 text-white justify-between py-8 px-20 rounded-xl my-20 mx-35">
    <p>💱 1 {{cur}} = {{rater}} {{cur2}}</p>
  </div>
  
  <div>
    <div class="flex bg-gray-200 justify-between items-center py-16 px-10 rounded-xl">
      <select class="bg-gray-200 border-0" v-model="rate2" @change="upt" title="Currency 2">
        <option disabled value="0_NULL">NULL</option>
        <option value="1.00_USD">USD</option>
        <template v-for="(cr, i) in curr" :key="i">
          <option :value="cr.rates+'_'+cr.code">{{cr.code}}</option>
        </template>
        <option value="0.0016_NGN">NGN</option>
      </select>
      <p class="border-0 text-right bg-gray-200 my-0">{{converter2}}</p>
    </div>
  </div>

  <footer class="my-20"><p class="text-center my-0">Handcrafted with ❤️ by fawazming  :::<small class="mx-35">&copy; 2022</small></p></footer>
</template>

<style scoped>
  .border-0{border-width: 0;}
  .bg-gray-200{background-color: #ededed}
</style>
