<template>
  <div>
    <!-- <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">One</p>
          <p class="subtitle">Subtitle</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">Two</p>
          <p class="subtitle">Subtitle</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">Three</p>
          <p class="subtitle">Subtitle</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">Four</p>
          <p class="subtitle">Subtitle</p>
        </article>
      </div>
    </div> -->

    <div class="tile is-ancestor">
      <div class="tile is-parent is-12">
        <article class="tile is-child box">
          <h4 class="title">Temperature Monitoring</h4>
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Select Super Market</label>
            </div>
            <div class="control">
                <div class="select is-fullwidth">
                  <select v-model="selected.superMarket">
                    <option v-for="smarket in superMarket" :value="smarket">{{smarket}}</option>
                  </select>
                </div>
            </div>
          </div>
          <div class="control is-horizontal" v-if="this.selected.superMarket === 'Market 1'">
              <div class="control-label">
                <!-- <chart :type="'doughnut'" :data="chartData"></chart> -->
                <div class="select is-fullwidth">
                  <!-- <center><button class="button is-white">Devices at {{ this.selected.superMarket }}</button></center> -->
                  <center><router-link to="devices/devices1"> {{ this.selected.superMarket }} </router-link></center>
                </div>
              </div>
          </div>
          <div class="control is-horizontal" v-if="this.selected.superMarket === 'Market 2'">
              <div class="control-label">
                <!-- <chart :type="'doughnut'" :data="chartData"></chart> -->
                <div class="select is-fullwidth">
                  <!-- <center><button class="button is-white">Devices at {{ this.selected.superMarket }}</button></center> -->
                  <center><router-link to="devices/devices2"> {{ this.selected.superMarket }} </router-link></center>
                </div>
              </div>
          </div>
        </article>
      </div>
      <!-- <div class="tile is-parent is-6">
        <article class="tile is-child box">
          <h4 class="title">Six</h4>
          <div class="content">
            <chart :type="'pie'" :data="chartData"></chart>
          </div>
        </article>
      </div> -->
    </div>


    <div class="tile is-ancestor">
      <div class="tile is-parent is-4">
        <article class="tile is-child box">
          <h4 class="title">Radar Graph</h4>
          <chart :type="'radar'" :data="seriesData" :options="options_3"></chart>
        </article>
      </div>
      <div class="tile is-parent is-4">
        <article class="tile is-child box">
          <h4 class="title">Line Graph</h4>
          <chart :type="'line'" :data="seriesData" :options="options_3"></chart>
        </article>
      </div>
      <div class="tile is-parent is-4">
        <article class="tile is-child box">
          <h4 class="title">Bars Graph</h4>
          <chart :type="'bar'" :data="seriesData" :options="options_3"></chart>
        </article>
      </div>
    </div>

    <div class="tile is-ancestor">
      <!-- <div class="tile is-parent is-6">
        <article class="tile is-child box">
          <h4 class="title">Live Temp. Feed</h4>
          <chart :type="'radar'" :data="waveData" :options="options"></chart>
        </article>
      </div> -->
      <div class="tile is-parent is-6">
        <article class="tile is-child box">
          <h4 class="title">Live Temperature Feed</h4>
          <chart :type="'bar'" :data="waveData" :options="options"></chart>
        </article>
      </div>
      <div class="tile is-parent is-6">
        <article class="tile is-child box">
          <h4 class="title">Live Temperature Feed</h4>
          <chart :type="'bar'" :data="waveData1" :options="options"></chart>
        </article>
      </div>
    </div>

    <!-- <div class="tile is-ancestor">
      <div class="tile is-vertical is-9">
        <div class="tile">
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">Seven</p>
              <p class="subtitle">Subtitle</p>
              <div class="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
              </div>
            </article>
          </div>
          <div class="tile is-8 is-parent">
            <article class="tile is-child box">
              <p class="title">Eight</p>
              <p class="subtitle">Subtitle</p>
              <div class="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
              </div>
            </article>
          </div>
        </div>
        <div class="tile">
          <div class="tile is-8 is-parent">
            <article class="tile is-child box">
              <p class="title">Nine</p>
              <p class="subtitle">Subtitle</p>
              <div class="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
              </div>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">Ten</p>
              <p class="subtitle">Subtitle</p>
              <div class="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <div class="content">
            <p class="title">Eleven</p>
            <p class="subtitle">Subtitle</p>
            <div class="content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
              <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
            </div>
          </div>
        </article>
      </div>
    </div> -->
  </div>
</template>

<script>
import Chart from 'vue-bulma-chartjs'

export default {
  components: {
    Chart
  },

  data () {
    return {
      data: [300, 50, 100],
      superMarket: ['Market 1', 'Market 2'],
      selected: {
        superMarket: 'Market 1'
      },
      options: {
        segmentShowStroke: false
      },
      backgroundColor: [
        '#1fc8db',
        '#fce473',
        '#42afe3',
        '#ed6c63',
        '#97cd76'
      ],
      labels_2: ['April', 'May', 'June', 'Jule', 'August', 'September', 'October', 'November', 'December'],
      data_2: [1, 9, 3, 4, 5, 6, 7, 8, 2].map(e => (Math.sin(e) * 25) + 25),
      labels_3: ['May', 'June', 'Jule', 'August', 'September', 'October', 'November'],
      data_3: [
        [5, 15, -15, -9, 6, -5, 0],
        [-10, -18, 10, 19, -8, 12, -18]
      ],
      options_3: {
        tooltips: {
          mode: 'label'
        }
      },
      backgroundColor_3: [
        'rgba(31, 200, 219, 1)',
        'rgba(151, 205, 118, 1)'
      ],
      series: ['Market 1', 'Market 2']
    }
  },

  computed: {
    chartData () {
      return {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          data: this.data,
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ]
        }]
      }
    },

    waveData () {
      return {
        labels: this.labels_2,
        datasets: [{
          label: 'Market 1',
          data: this.data_2,
          backgroundColor: this.backgroundColor[0]
        }]
      }
    },

    waveData1 () {
      return {
        labels: this.labels_2,
        datasets: [{
          label: 'Market 2',
          data: this.data_2,
          backgroundColor: this.backgroundColor[0]
        }]
      }
    },

    seriesData () {
      let data = {
        labels: this.labels_3
      }
      data.datasets = this.series.map((e, i) => {
        return {
          data: this.data_3[i],
          label: this.series[i],
          borderColor: this.backgroundColor_3[i].replace(/1\)$/, '.5)'),
          pointBackgroundColor: this.backgroundColor_3[i],
          backgroundColor: this.backgroundColor_3[i].replace(/1\)$/, '.5)')
        }
      })
      return data
    }
  },

  created () {
    setInterval(() => {
      // https://vuejs.org/guide/list.html#Mutation-Methods
      this.data_2.unshift(this.data_2.pop())
    }, 377)
  }

  // mounted () {
  //   setInterval(() => {
  //     // https://github.com/vuejs/vue/issues/2873
  //     // Array.prototype.$set/$remove deprecated (use Vue.set or Array.prototype.splice instead)
  //     this.data.forEach((item, i) => {
  //       this.data.splice(i, 1, Math.ceil(Math.random() * 1000))
  //     })
  //   }, 1024)
  // }
}
</script>

<style lang="scss" scoped>
</style>
