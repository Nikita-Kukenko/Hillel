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
        <form class="edit-form" action="submit" @input="editProduct">
          Name: <input type="text" :value="item.product.name" id="name" />
          Info: <textarea class="product-info" :value="item.product.info" id="info" />
          Price: <input type="text" :value="item.product.price" id="price" />
          
          <button type="submit" @click="changeDataOnTheServer">Edit</button>
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
      item: [],
      newItem : {}
    }
  },
  methods: {
    showModal(item) {
      this.isShowModal = true;
      this.item = item;
    },
    closeModal() {
      this.isShowModal = false;
    },
    editProduct(event) {
      event.preventDefault()

      // понимаю что решение довольно громоздкое и неизящное, но ничего другого в голову не приходит (кроме ref, но это явно неудачная идея)
      const id = event.target.id;
      const newItem = Object.assign({}, this.item.product);

      switch(id) {
        case 'name':
          newItem.name = event.target.value;
          break;
        case 'info':
          newItem.info = event.target.value;
          break;
        case 'price':
          newItem.price = event.target.value;
          break;
        default :
          break;
      }

      this.newItem = newItem;
    },
    async changeDataOnTheServer() {
      const prevProducts = this.products;
      const newProducts = [];
      const newItemInfo = this.newItem;

      prevProducts.forEach(product => {
        if(product.id === newItemInfo.id) {
          product.name = newItemInfo.name;
          product.info = newItemInfo.info;
          product.price = newItemInfo.price;
          newProducts.push(product);
        } else {
          newProducts.push(product);
        }
      })

      this.products = newProducts;

      await fetch(getApiUrl('products'), {
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.products)
      })

      this.closeModal();
    }
  },
  async created() {
    this.products = await(await fetch(getApiUrl('products'))).json() || [];
  }
}
</script>

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
