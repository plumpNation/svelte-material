<p class="{classes}">
  <slot />
</p>

<script>
  import './styles.scss'

  export default {
    data () {
      return {
        adjustMargin: '',
        level: 1,
      }
    },
    computed: {
      classes: ({adjustMargin, level}) => {
        const classList = ['mdc-typography--body' + level]
        adjustMargin && classList.push('mdc-typography--adjust-margin')

        return classList.join(' ')
      },
    },
  }
</script>
