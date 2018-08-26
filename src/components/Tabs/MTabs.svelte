<nav id="icon-tab-bar" class="mdc-tab-bar mdc-tab-bar--icon-tabs">
  <a class="mdc-tab mdc-tab--active" href="#recents">
    <i class="material-icons mdc-tab__icon" aria-label="Recents">phone</i>
  </a>
  <a class="mdc-tab" href="#favorites">
    <i class="material-icons mdc-tab__icon" aria-label="Favorites">favorite</i>
  </a>
  <a class="mdc-tab" href="#nearby">
    <i class="material-icons mdc-tab__icon" aria-label="nearby">person_pin</i>
  </a>
  <span class="mdc-tab-bar__indicator"></span>
</nav>

<script>
import { MDCRipple } from '@material/ripple'

export default {
  data () {
    return {
      mdcRipple: null,
      icon: '',
      raised: '',
      unelevated: '',
      stroked: '',
      dense: '',
      compact: '',
      disabled: '',
      name: '',
      href: '',
      type: '',
      background: '',
      color: ''
    }
  },
  computed: {
    classes: ({ raised, unelevated, stroked, dense, compact, background, color }) => {
      const classList = []

      raised && classList.push('mdc-button--raised')
      unelevated && classList.push('mdc-button--unelevated')
      stroked && classList.push('mdc-button--stroked')
      dense && classList.push('mdc-button--dense')
      compact && classList.push('mdc-button--compact')
      background && classList.push('mdc-theme--' + background + '-bg')
      color && classList.push('mdc-theme--' + color)

      return classList.join(' ')
    }
  },
  oncreate () {
    this.set({ mdcRipple: MDCRipple.attachTo(this.refs.self) })
  },
  ondestroy () {
    this.get('mdcRipple').destroy()
  }
}
</script>

<style type="text/scss">
  @import "@material/tab-scroller/mdc-tab-scroller";
  @import "@material/tab-indicator/mdc-tab-indicator";
  @import "@material/tab/mdc-tab";
</style>
