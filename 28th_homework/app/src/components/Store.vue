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
        <h4 class="modal-title">Edit product</h4>
      </template>

      <template v-slot:content>

        <form class="edit-form" action="submit">
          Name: <input type="text" :value="item.product.name" ref="inputName" />
          Info: <textarea class="product-info" :value="item.product.info" ref="inputInfo" />
          Price: <input type="text" :value="item.product.price" ref="inputPrice" />
          
          <button type="submit" @click="editProduct">Edit</button>
        </form>

      </template>
    </Modal>
  </div>
</template>

<script>
import StoreItem from './StoreItem.vue';
import getApiUrl from '../helper/getApiUrl.js';
import Modal from "./common/Modal.vue";

export default {
  name: 'Store',
  components: {
    StoreItem,
    Modal
  },
  data() {
    return {
      products: [],
      isShowModal: false,
      item: []
    }
  },
  methods: {
    showModal(item) {
      this.isShowModal = true;
      this.$data.item = item;
    },
    closeModal() {
      this.isShowModal = false;
    },
    editProduct(event) {
      event.preventDefault()

      let prevProducts = this.$data.products;
      let newItem = this.$data.item;
      let newProducts = [];

      prevProducts.forEach(product => {
        if(product.id === newItem.product.id) {
          product.name = this.$refs.inputName.value;
          product.info = this.$refs.inputInfo.value;
          product.price = this.$refs.inputPrice.value;
          newProducts.push(product);
        } else {
          newProducts.push(product);
        }
      })

      this.$data.products = newProducts;

      this.changeDataOnTheServer();
      this.closeModal();
    },
    changeDataOnTheServer() {
      fetch(getApiUrl('products'), {
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.products)
      })
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
    padding: 10px;
  }
  .product-info {
    width: 350px;
    height: 100px;
  }
  .modal-title {
    margin: 0;
    padding: 3px;
  }
  .edit-form {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
  }
</style>
