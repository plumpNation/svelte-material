<div class="mdc-layout-grid__cell {classes}">
  <slot />
</div>

<script>
  import './styles.scss'

  export default {
    data () {
      return {
        span: '',
        spanDesktop: '',
        spanTablet: '',
        spanPhone: '',
        order: '',
        align: ''
      }
    },

    computed: {
      classes ({ span, spanDesktop, spanTablet, spanPhone, align, order }) {
        const classList = []

        span && classList.push('mdc-layout-grid__cell--span-' + span)
        spanDesktop && classList.push('mdc-layout-grid__cell--span-' + spanDesktop + '-desktop')
        spanTablet && classList.push('mdc-layout-grid__cell--span-' + spanTablet + '-tablet')
        spanPhone && classList.push('mdc-layout-grid__cell--span-' + spanPhone + '-phone')
        align && classList.push('mdc-layout-grid__cell--align-' + align)
        order && classList.push('mdc-layout-grid__cell--order-' + order)

        return classList.join(' ')
      }
    }
  }
</script>
