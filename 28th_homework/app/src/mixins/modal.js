const modalMixin = {
  data() {
    return {
      isShowModal: false,
    };
  },
  methods: {
    showModal() {
      this.isShowModal = true;
    },
    closeModal() {
      this.isShowModal = false;
    },
  },
};

export default modalMixin;