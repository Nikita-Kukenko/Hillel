let diagrams = [
  {
    value: 100,
    name: 'ONE',
    color: 'red'
  },
  {
    value: 120,
    name: 'TWO',
    color: 'orange'
  },
  {
    value: 110,
    name: 'THREE',
    color: 'yellow'
  },
  {
    value: 160,
    name: 'FOUR',
    color: 'green'
  },
  {
    value: 210,
    name: 'FIVE',
    color: 'lightblue'
  },
  {
    value: 190,
    name: 'SIX',
    color: 'darkblue'
  },
  {
    value: 300,
    name: 'SEVEN',
    color: 'purple'
  }
]

Vue.component('DiagramsApp', {
  data() {
    return {
      items: '',
    }
  },
  created: function() {
    let newInfo = JSON.parse(localStorage.getItem('newData'));
    this.$data.items = newInfo || diagrams;
  },
  methods: {
    sortDiagrams: function() {
      let diagramsItem = this.$data.items;
      
      let newSortDiagrams = diagramsItem.sort(function(a, b) {
          if(a.value > b.value) {
            return 1
          } else if (a.value < b.value) {
            return -1
          }
        
          return 0
        })

      let sirializeNewSortDiagrams = JSON.stringify(newSortDiagrams);
      localStorage.setItem('newData', sirializeNewSortDiagrams);
    }
  },
  template: `
    <div>
      <div class="diagrams-wrapper">
        <diagram-block
          :itemsData="items"
          v-for="item in items"
          :itemInfo="item"
        />
      </div>
      <sort-diagrams-button
        @sortValue="sortDiagrams"
      />
    </div>
  `
});

Vue.component('DiagramBlock', {
  props: ['itemInfo', 'itemsData'],
  methods: {
    changeDiagramsValue: function(obj) {
      let newDiagram = this.$props.itemInfo;
      let newData = this.$props.itemsData;
      newDiagram.value = obj.value;

      let sirializeNewData = JSON.stringify(newData);
      localStorage.setItem('newData', sirializeNewData);
    }
  },
  template: `
    <div>
      <diagrams-item
        :diagramProps="itemInfo"
      />
      <diagrams-item-regulator
        @changeRegulatorValue="changeDiagramsValue"
        :valueRegulator="itemInfo.value"
      />
    </div>
  `
})

Vue.component('DiagramsItem', {
  props: ['diagramProps'],
  template: `
    <div
      class="diagram"
      :style = "{
        backgroundColor: diagramProps.color,
        height: diagramProps.value + 'px'
      }"
    >
      <p>{{ diagramProps.name }}</p>
    </div>
  `
})

Vue.component('DiagramsItemRegulator', {
  props: ['valueRegulator'],
  methods: {
    changeRegulatorValue() {
      this.$emit('changeRegulatorValue', { value: this.$el.value })
    }
  },
  template: `
    <input
      @input="changeRegulatorValue()"
      class="diagram-item_input"
      type="range"
      min="100"
      max="300"
      :value="valueRegulator"
    >
  `
})

Vue.component('sortDiagramsButton', {
  methods: {
    sortValue() {
      this.$emit('sortValue')
    }
  },
  template: `
    <button
      class="sort-button"
      @click="sortValue()"
    >Sort Diagrams</button>
  `
})


const vue = new Vue({
  el: '#app'
});
