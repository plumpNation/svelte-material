## Icon

### Markup

```html
<MIcon icon="edit" on:click="clicked()" />
```

### Script

```javascript
methods: {
    clicked() {
        // do something
    }
}
```

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| icon | String | - | true | material icon name |
| inDrawer | boolean | false | false | if using the icon in a drawer list item |

Events are mapped to the inner element.

### Reference

- https://material.io/icons
