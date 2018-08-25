## Example Button Component

```
<Button
  title="Button Title"
  font={2}
  disabled={false}
  inverted={false}
  onClick={() => console.log("working!!")}
/>
```

## PropTypes

```
Button.propTypes = {
  buttonType: PropTypes.string,
  disabled: PropTypes.bool,
  font: PropTypes.number,
  inverted: PropTypes.bool,
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired
};
```

## Default Props

```
Button.defaultProps = {
  buttonType: "Primary",
  disabled: false,
  font: 1,
  inverted: false,
  onClick: () => console.log("Working!")
};
```
