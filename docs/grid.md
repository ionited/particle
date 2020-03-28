# Grid

The grid is a flexbox based system to make simple or complex layouts.

To start with grid you can use `.grid` class:

```html
<div class="grid">
</div>
```

Internal content can be separated into columns.

You can use `.col` class for columns with flexible size based on the number of the colums.

```html
<div class="grid">
    <div class="col"></div><!--50%-->
    <div class="col"></div><!--50%-->
</div>
```

But you can use 12 predefined sizes:

```html
<div class="grid">
    <div class="col-3"></div><!--25%-->
    <div class="col-3"></div><!--25%-->
    <div class="col-3"></div><!--25%-->
    <div class="col-3"></div><!--25%-->
</div>
```

And you can also use breakpoints:

| Breakpoint | >=       |
|------------|----------|
| col-s      | 480px    |
| col-m      | 768px    |
| col-l      | 1024px   |
| col-vl     | 1200px   |

```html
<div class="grid">
    <div class="col-12 col-l-6"></div><!--If screen width >= 1024px col has 50%-->
    <div class="col-12 col-l-6"></div><!--If screen width >= 1024px col has 50%-->
</div>
```

---

### [Utils >](utils.md)