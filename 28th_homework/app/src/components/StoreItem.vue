StoreItem

<template>
  <div class="product">
    <section>{{ product.name }}</section>
    <div class="product-img_wrapper">
      <img class="product-img" src='../assets/box.png' alt="some-product">
      <img v-show="product.sale" class="sale" src='../assets/sale.png' alt="sale" />
    </div>
    <p>{{ product.info }}</p>
    <section>Price: {{ product.price }}$</section>
    <span class="product-top" v-show="product.isTop">TOP PRODUCT</span>

    <img class="pencil" src='../assets/pencil.png' alt="edit" @click="showModalForProduct" />
  </div>
</template>

<script>

export default {
  name: 'StoreItem',
  props: {
    product: Object
  },
  methods: {
    showModalForProduct() {
      this.$emit('showModalForProduct', { product: this.product });
    }
  },
}
</script>

<style scoped lang="scss">

  .product {
    padding: 15px;
    border: 1px solid green;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .product, .product-img_wrapper {
    position: relative;
  }

  .product-img_wrapper {
    margin: 10px 0 15px;
  }

  .product-img, .product-img_wrapper {
    width: 100px;
    height: 100px;
  }

  .pencil {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 25px;
    height: 25px;
    margin: 5px;
    cursor: pointer;
    &:active{
        transform: scale(.8);
      }
  }

  .product-top, .sale {
    position: absolute;
  }

  .product-top {
    width: 100px;
    border-radius: 12px;
    border: 1px solid goldenrod;
    background-color: gold;
    color: red;
    font-size: 10px;
    padding: 3px;
    top: -5px;
    left: -5px;
  }

  .sale {
    right: 2px;
    bottom: -10px;
  }

</style>