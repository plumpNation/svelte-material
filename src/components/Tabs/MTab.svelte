<a class="mdc-tab {classes}">
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
</a>

<script>
  import { MDCTab } from '@material/tab'

  import MIcon from '../Icon/MIcon.svelte'

  export default {
    components: {
      MIcon,
    },

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
