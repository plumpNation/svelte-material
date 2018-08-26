{#if href}
<a {href} class="mdlist-item {classes}" aria-selected={selected}>
  {#if icon}
  <MIcon inDrawer {icon} />
  {/if}

  <span class="mdc-list-item__text"><slot /></span>
</a>

{:else}

<li class="mdc-list-item {classes}" aria-selected={selected}>
  {#if icon}
  <MIcon inDrawer {icon} />
  {/if}

  <span class="mdc-list-item__text"><slot /></span>
</li>
{/if}

<script>
  export default {
    data () {
      return {
        selected: false,
        icon: null,
        href: null
      }
    },
    computed: {
      classes ({icon, selected}) {
        const classes = []

        if (selected) classes.push('mdc-list-item--selected')

        return classes
      }
    },
    components: {
      MIcon: '../Icon/MIcon.svelte',
    },
  }
</script>

<style>
  .mdc-list-item__text {
    display: inline-block;
    vertical-align: middle;
  }
</style>
