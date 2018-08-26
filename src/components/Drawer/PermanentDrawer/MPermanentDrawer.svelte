<aside class="mdc-drawer mdc-drawer--permanent">
  <nav class="mdc-drawer__drawer">
    {#if slots['toolbarSpacer']}
    <slot name="toolbarSpacer" />
    {/if}
    <slot />
  </nav>
</aside>

<script>
  import './styles.scss'

export default {
    data () {
      return {
        slots: [],
      }
    },

    oncreate () {
      this.set({ slots: this.options.slots })
    },
  }
</script>
