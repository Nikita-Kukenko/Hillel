<template>
  <div class="products-wrapper">
    <StoreItem
      @showModalForProduct="showModal"
      v-for="(product, $index) in products"
      :product="product"
      :key="$index"
    />

    <Modal v-show="isShowModal" @close="closeModal" class="app__modal">
      <template v-slot:header>
        <span>Header - Appp</span>
      </template>

      <template v-slot:content>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          necessitatibus repudiandae iusto quisquam, et, quidem deleniti nam qui
          quo quia quasi libero distinctio aspernatur, quod quas animi autem
          porro possimus?
        </div>
      </template>

      <template v-slot:footer>
        <div>Footer - Appp</div>
      </template>
    </Modal>
  </div>
</template>

<script>
import StoreItem from './StoreItem.vue';
import getApiUrl from '../helper/getApiUrl.js';
import modalMixin from "@/mixins/modal.js";
import Modal from "./common/Modal.vue";

export default {
  mixins: [modalMixin],
  name: 'Store',
  components: {
    StoreItem,
    Modal
  },
  data() {
    return {
      products: [],
      // isShowModal: false
    }
  },
  // methods: {
  //   showProductModal() {
  //     this.isShowModal = true;
  //   }
  // },
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
