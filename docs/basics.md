# Basics

## Breakpoints

Breakpoints provide a way to organize your styles by specif screen sizes.

Particle has 4 breakpoints: Small, medium, large and very large:

| Breakpoint | Alias | Min size |
|------------|-------|----------|
| Small      | s     | 480px    |
| Medium     | m     | 768px    |
| Large      | l     | 1024px   |
| Very large | vl    | 1200px   |

## Banner

Banner is a full width and height element, great for content that fills the entire screen. You can use it by the class `.banner`.

```html
<div class="banner algn-items-center d-flex just-content-center">
    Hey! I fill the entire screen
</div>
```

## Container

Container is a spaced element that has the maximum size of 1024px if large breakpoint is called (>= 1024px). Use it by the class `.container`.

```html
<div class="container algn-center">
    <div class="grid">
        <div class="col">Oh!</div>
        <div class="col">Very</div>
        <div class="col">organized</div>
    </div>
</div>
```

---

### [Grid >](grid.md)