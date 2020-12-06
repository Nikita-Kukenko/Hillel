const app = new Vue({
  el: '#app',
  data: {
    message: 'Привет, Vue!',
    taskListOne: [
      'Сходить в магазин',
      'Сделать ДЗ',
      'Погулять с собакой',
      'Повесить картину'
    ],
    taskListTwo: [
      'Покормить кота',
      'Приготовить ужин',
      'Выбить ковёр',
      'Полить цветы'
    ],
    makeTransfer(delList, addList) {
      const item = delList.pop()
      addList.unshift(item);
    }
  }
})