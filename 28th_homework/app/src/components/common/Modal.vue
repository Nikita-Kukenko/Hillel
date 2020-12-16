<template>
    <div class="modal">
        <div class="modal__inner">
            <div class="modal__container">
                <section class="modal__header header">
                    <slot name="header"></slot>
                </section>
                
                <section class="modal__content content">
                    <slot name="content"></slot>
                </section>

                <section class="modal__footer footer">
                    <slot name="footer"></slot>
                </section>

                <span class="modal__close" @click="close">X</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        close() {
            this.$emit('close', false);
        }
    }
}
</script>

<style lang="scss">
.modal {
    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    background-color: rgba(0, 0, 0, .4);
    &__inner {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &__container {
        width: 30%;
        min-height: 300px;
        padding: 10px;
        position: relative;
        background-color: white;
        border-radius: 3px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: stretch;
    }
    &__header, &__content {
        border-bottom: 1px solid black;
    }
    &__close {
        color: red;
        cursor: pointer;
        font-size: 16px;
        position: absolute;
        right: 10px;
        top: 5px;
        transition: all .5s;
        &:active{
            transform: scale(.8);
        }
    }
}
</style>