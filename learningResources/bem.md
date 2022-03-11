# BEM

[BEM](https://css-tricks.com/bem-101) is a methodology for defining and naming block-level elements in CSS. It is a simple way to organize your CSS classes and make them easier to manage.

At Launch Academy, we use BEM to organize our CSS classes. We nest selectors to achieve specificity and avoid conflicts, but we avoid nesting more than two levels unless necessary. An example is below:

```css
.cats {
  @apply some-tailwind-classes

  & .cats__heading {
    @apply some-tailwind-classes;
  }
}

.cats-list {
  @apply some-tailwind-classes

  & .cats-list__item {
    @apply some-tailwind-classes;
  }

  & .cats-list__image {
    @apply some-tailwind-classes;
  }
}
```

```jsx
<div className="cats">
  <h1 className="cats__heading">Cats</h1>
  <ul className="cats-list">
    <li className="cats-list__item">
      <img className="cats-list__image" src="https://placekitten.com/200/300" alt="Kitten" />
    </li>
    <li className="cats-list__item">
      <img className="cats-list__image" src="https://placekitten.com/200/300" alt="Kitten" />
    </li>
    <li className="cats-list__item">
      <img className="cats-list__image" src="https://placekitten.com/200/300" alt="Kitten" />
    </li>
  </ul>
</div>
```

## File co-location

We co-locate files around the relevant React component. So, a typical directory might look like

```no-formatting
/CatList
  - CatList.jsx
  - /styles
    - catList.pcss
  - /hooks
    - useCatList.js
```
