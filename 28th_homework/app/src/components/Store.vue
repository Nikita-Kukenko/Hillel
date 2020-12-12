<template>
  <div class="products-wrapper">
    <StoreItem 
      v-for="(product, $index) in products"
      :product="product"
      :key="$index"
    />
  </div>
</template>

<script>
import StoreItem from './StoreItem.vue';
import getApiUrl from '../helper/getApiUrl.js';

export default {
  name: 'Store',
  components: {
    StoreItem
  },
  data() {
    return {
      products: []
    }
  },
  async created() {
    this.products = await(await fetch(getApiUrl('products'))).json() || [];
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .products-wrapper {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    border: 1px solid blue;
    box-sizing: border-box;
    padding: 5px;
  }
</style>
