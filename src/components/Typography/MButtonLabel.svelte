<span class="mdc-typography--button {classes}">
    <slot />
</span>

<script>
  import './styles.scss'

  export default {
    data () {
      return {
        adjustMargin: '',
      }
    },
    computed: {
      classes: ({ adjustMargin }) => adjustMargin && 'mdc-typography--adjust-margin',
    },
  }
</script>

