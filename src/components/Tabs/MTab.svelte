<button class="mdc-tab {classes}" role="tab">
  <slot name="icon"/>

  {#if hasIcon && label}
  <span class="mdc-tab__icon-text">
    <slot/>
  </span>
  {:elseif label}
  <span>
    <slot />
  </span>
  {/if}
</button>

<script>
  import { MDCTab } from '@material/tab'

  export default {
    oncreate () {
      this.tab = new MDCTab(document.querySelector('.mdc-tab'))
    },

    computed: {
      classes: ({active, hasIcon, label}) => ({
        'mdc-tab--active': active,
        'mdc-tab--with-icon-and-text': hasIcon && label,
      }),
      hasIcon: ({slots}) => !!slots.icon,
    },
  }
</script>
