{#if (level < 2)}
<h3 class="{classes}">
  <slot></slot>
</h3>
{:else}
<h4 class="{classes}">
  <slot></slot>
</h4>
{/if}


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
        const classList = ['mdc-typography--subtitle1' + level]

        adjustMargin && classList.push('mdc-typography--adjust-margin')

        return classList.join(' ')
      },
    },
  }
</script>
