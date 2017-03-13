<template>
  <div>
    <div class="tile is-ancestor">
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-parent is-12">
        <article class="tile is-child box">
          <h4 class="title">Active Devices</h4>
          <div class="table-responsive">
            <table class="table is-bordered is-striped is-narrow">
              <thead>
                <tr>
                  <th></th>
                  <th>Super Market</th>
                  <th>Year started</th>
                  <th colspan="3">Links</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th></th>
                  <th>Super Market</th>
                  <th>Year started</th>
                  <th colspan="3">Links</th>
                </tr>
              </tfoot>
              <tbody>
                <tr>
                  <td class="is-icon">
                    <i class="fa fa-android"></i>
                  </td>
                  <td>
                    <a class="button is-small" @click="openModalCard()">Freezer 1</a>
                  </td>
                  <td>
                    2017
                  </td>
                  <td class="is-icon">
                    <a href="#">
                      <i class="fa fa-github"></i>
                    </a>
                  </td>
                  <td class="is-icon">
                    <a href="#">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </td>
                  <td class="is-icon">
                    <a href="#">
                      <i class="fa fa-globe"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td class="is-icon">
                    <i class="fa fa-firefox"></i>
                  </td>
                  <td>
                    <a class="button is-small" @click="openModalCard()">Freezer 2</a>
                  </td>
                  <td>
                    2017
                  </td>
                  <td class="is-icon">
                    <a href="#">
                      <i class="fa fa-github"></i>
                    </a>
                  </td>
                  <td class="is-icon">
                    <a href="#">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </td>
                  <td class="is-icon">
                    <a href="#">
                      <i class="fa fa-globe"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td class="is-icon">
                    <i class="fa fa-linux"></i>
                  </td>
                  <td>
                    <a class="button is-small" @click="openModalCard()">Freezer 3</a>
                  </td>
                  <td>
                    2017
                  </td>
                  <td class="is-icon">
                    <a href="#">
                      <i class="fa fa-github"></i>
                    </a>
                  </td>
                  <td class="is-icon">
                    <a href="#">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </td>
                  <td class="is-icon">
                    <a href="#">
                      <i class="fa fa-globe"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td class="is-icon">
                    <i class="fa fa-wordpress"></i>
                  </td>
                  <td>
                    <a class="button is-small" @click="openModalCard()">Freezer 4</a>
                  </td>
                  <td>
                    2017
                  </td>
                  <td class="is-icon">
                    <a href="#">
                      <i class="fa fa-github"></i>
                    </a>
                  </td>
                  <td class="is-icon">
                    <a href="#">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </td>
                  <td class="is-icon">
                    <a href="#">
                      <i class="fa fa-globe"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>
        <!-- <article class="tile is-child box">
          <h4 class="title">Five</h4>
          <p>Yolo</p>
          <div class="content">
            <chart :type="'doughnut'" :data="chartData"></chart>
          </div>
        </article> -->
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import CardModal from './modals/CardModal'

const CardModalComponent = Vue.extend(CardModal)

const openCardModal = (propsData = {
  visible: true
}) => {
  return new CardModalComponent({
    el: document.createElement('div'),
    propsData
  })
}

export default {
  components: {
    CardModal
  },

  data () {
    return {
      cardModal: null
    }
  },

  methods: {
    openModalCard () {
      const cardModal = this.cardModal || (this.cardModal = openCardModal({
        title: 'Freezer 1',
        url: this.$store.state.pkg.homepage
      }))
      cardModal.$children[0].active()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
