StoreItem

<template>
  <div class="product">
    <section>Name: {{ product.name }}</section>
    <img class="product-img" src='../assets/box.png' alt="some-product">
    <section>Price: {{ product.price }}$</section>
    <section>{{ product.isTop ? 'TOP PRODUCT' : '' }}</section>
  </div>
</template>

<script>

export default {
  name: 'StoreItem',
  props: {
    product: Object
  },
  created(){
    console.log(this.product);
  }
}
</script>

<style scoped lang="scss">
  .product {
    padding: 5px;
    border: 1px solid green;
    box-sizing: border-box;
  }

  .product-img {
    width: 100px;
    height: 100px;
  }
</style>