<aside ref:self class="mdc-drawer mdc-drawer--temporary mdc-typography">
  <nav class="mdc-drawer__drawer">
    {#if slots['toolbarSpacer']}
    <div class="mdc-drawer--temporary__toolbar-spacer {spacerClasses}">
      <slot name="toolbarSpacer" />
    </div>
    {/if}

    {#if slots['header']}
    <header class="mdc-drawer__header">
      <div class="mdc-drawer__header-content {headerClasses}">
        <slot name="header" />
      </div>
    </header>
    {/if}

    {#if slots['default']}
    <nav id="icon-with-text-demo" class="mdc-drawer__content mdc-list {contentClasses}">
      <slot />
    </nav>
    {/if}
  </nav>
</aside>

<script>
  import './styles.scss'

  import { MDCTemporaryDrawer } from '@material/drawer'

  export default {
    data () {
      return {
        slots: [],
        initialOpen: false,
        primaryHeader: '',
        primaryToolbarSpacer: false,
        primaryContent: '',
        open: false,
        mdcTemporaryDrawer: false,
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

        this.set({ open: !open, mdcPersistentDrawer })
      },
    },

    oncreate () {
      const { initialOpen } = this.get()

      this.set({
        slots: this.options.slots,
        mdcTemporaryDrawer: MDCTemporaryDrawer.attachTo(this.refs.self),
        initialOpen,
      })

      // this.set({ mdcTemporaryDrawer.open: this.get('open') })
    },

    ondestroy () {
      const { mdcTemporaryDrawer } = this.get()

      mdcTemporaryDrawer.destroy()
    },
  }
</script>
