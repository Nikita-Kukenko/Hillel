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
    let newInfo = JSON.parse(localStorage.getItem('newData'));
    return {
      items: newInfo || diagrams,
    }
  },
  methods: {
    changeDiagramsValue: function(obj) {
      let newDiagrams = this.$data.items;

      newDiagrams.forEach(item => {
        if(item.name === obj.name) {
          item.value = obj.value
        }
      })

      let sirializeNewDiagrams = JSON.stringify(newDiagrams);
      localStorage.setItem('newData', sirializeNewDiagrams);
    },
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
        <diagrams-item
          :diagramProps = "item"
          v-for="item in items"
        />
      </div>
      <div class="regulator-wrapper">
        <diagrams-item-regulator
          @changeRegulatorValue="changeDiagramsValue"
          v-for="item in items"
          :valueRegulator="item.value"
          :itemName="item.name"
        />
      </div>
      <sort-diagrams-button
        @sortValue="sortDiagrams"
      />
    </div>
  `
});

Vue.component('DiagramsItem', {
  props: ['diagramProps'],
  data() {
    return {}
  },
  methods: {
    
  },
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
  props: ['valueRegulator', 'itemName'],
  data() {
    return {}
  },
  methods: {
    changeRegulatorValue() {
      this.$emit('changeRegulatorValue', { value: this.$el.value, name: this.$el.name })
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
            :name="itemName"
          >
  `
})

Vue.component('sortDiagramsButton', {
  props: ['valueRegulator', 'itemName'],
  data() {
    return {}
  },
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