import App from './App'

const app = new App({
  target: document.body,
  data: {
    name: 'Svelte Material Design Components',
  },
})

window.app = app

export default app
