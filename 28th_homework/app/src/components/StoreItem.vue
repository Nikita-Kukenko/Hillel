<template>
  <div class="product">
    <p>{{ product.name }}</p>
    <div class="product-img_wrapper">
      <img class="product-img" src='../assets/box.png' alt="some-product">
      <img v-show="product.showSale" class="sale" src='../assets/sale.png' alt="sale" />
    </div>
    <p>{{ product.info }}</p>
    <p>
      Price: <span :class="{ old_prise: product.showSale }" >{{ product.price }}$</span>
             <span :class="{ sale_prise: product.salePrice }" v-show="product.showSale">{{ product.salePrice }}$</span>
    </p>
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
  }
}
</script>

<style scoped lang="scss">

  p {
    margin: 0 0 15px;
  }

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
    border-radius: 10px;
    border: 1px solid goldenrod;
    background-color: gold;
    color: red;
    font-size: 12px;
    padding: 3px;
    top: -5px;
    left: -5px;
  }

  .sale {
    right: 2px;
    bottom: -10px;
  }

  .old_prise {
    text-decoration: line-through;
    transform: translate(5px, -15px);
    font-size: 12px;
    opacity: 0.8;
    display: inline-block;
  }

  .sale_prise {
    display: inline-block;
    transform: translate(-30px, 0px);
  }

</style>