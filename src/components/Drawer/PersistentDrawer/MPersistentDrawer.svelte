<aside ref:self class="mdc-drawer mdc-drawer--persistent mdc-typography">
  <nav class="mdc-drawer__drawer">
    {#if slots['toolbarSpacer']}
    <div class="mdc-temporary-drawer__toolbar-spacer {spacerClasses}">
      <slot name="toolbarSpacer" />
    </div>
    {/if}

    {#if slots['header']}
    <header class="mdc-drawer__header {headerClasses}">
      <div class="mdc-drawer__header-content">
        <slot name="header" />
      </div>
    </header>
    {/if}

    {#if slots['default']}
    <nav class="mdc-drawer__content mdc-list {contentClasses}">
      <slot />
    </nav>
    {/if}
  </nav>
</aside>

<script>
  import { MDCPersistentDrawer } from '@material/drawer'

  import './styles.scss'

  export default {
    data () {
      return {
        slots: [],
        initialOpen: false,
        primaryHeader: '',
        primaryToolbarSpacer: false,
        primaryContent: '',
        open: false,
        mdcPersistentDrawer: false,
      }
    },

    computed: {
      spacerClasses: ({ primaryToolbarSpacer }) => {
        return primaryToolbarSpacer &&
          'mdc-theme--primary-bg mdc-theme--text-primary-on-primary'
      },
      headerClasses: ({ primaryHeader }) => {
        return primaryHeader &&
          'mdc-theme--primary-bg mdc-theme--text-primary-on-primary'
      },
      contentClasses: ({ primaryContent }) => {
        return primaryContent &&
          'mdc-theme--primary-bg mdc-theme--text-primary-on-primary'
      },
    },

    methods: {
      toggle () {
        const { open, mdcPersistentDrawer } = this.get()

        mdcPersistentDrawer.open = open

        this.set({
          open: !open,
          mdcPersistentDrawer,
        })
      },
    },

    oncreate () {
      this.set({ slots: this.options.slots })
      this.set({ mdcPersistentDrawer: MDCPersistentDrawer.attachTo(this.refs.self) })
      this.set({ open: this.get('initialOpen') })
      // this.set({ mdcPersistentDrawer.open: this.get('open') })
    },

    ondestroy () {
      this.get('mdcPersistentDrawer').destroy()
    },
  }
</script>
