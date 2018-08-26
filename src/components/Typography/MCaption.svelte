<span class="mdc-typography--caption {classes}">
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

