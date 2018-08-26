<div ref:self role="progressbar" class="mdc-linear-progress">
  <div class="mdc-linear-progress__buffering-dots"></div>
  <div class="mdc-linear-progress__buffer"></div>
  <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
    <span class="mdc-linear-progress__bar-inner"></span>
  </div>
  <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
    <span class="mdc-linear-progress__bar-inner"></span>
  </div>
</div>

<script>
  import { MDCLinearProgress } from '@material/linear-progress'

export default {
    data () {
      return {
        open: false,
        indeterminate: false,
        reverse: false,
        progress: 0,
        buffer: 0
      }
    },

    onstate ({ changed }) {
      this.updateMDCLinearProgress(changed)
    },

    oncreate () {
      this.mdcLinearProgress = MDCLinearProgress.attachTo(this.refs.self)

      this.updateMDCLinearProgress(this.get())
    },

    ondestroy () {
      const { mdcLinearProgress } = this.get()

      mdcLinearProgress.destroy()
    },

    methods: {
      show () {
        const { mdcLinearProgress } = this.get()

        mdcLinearProgress.open()
      },

      hide () {
        const { mdcLinearProgress } = this.get()

        mdcLinearProgress.close()
      },

      /**
       * Called by oncreate and onstate, so must support properties not existing.
       */
      updateMDCLinearProgress ({
        progress,
        buffer,
        indeterminate,
        reversed,
        open
      }) {
        if (!this.mdcLinearProgress) return

        if (progress) {
          this.mdcLinearProgress.progress = progress
        }

        if (buffer) {
          this.mdcLinearProgress.buffer = buffer
        }

        if (indeterminate) {
          this.mdcLinearProgress.determinate = !indeterminate
        }

        if (reversed) {
          this.mdcLinearProgress.reverse = reversed
        }

        open ? this.mdcLinearProgress.open() : this.mdcLinearProgress.close()
      }
    }
  }
</script>
