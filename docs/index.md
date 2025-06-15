# Documentation

## FilmThumbnail component hover effect

### CSS variables

```css
:root {
    --scaling-delay: 350ms;
    --scaling-duration: 185ms;
    --animation-duration: calc(var(--scaling-delay) + var(--scaling-duration));

    --update-z-index-delay: calc(var(--scaling-delay) * 0.75);

    --show-scene-duration: 200ms;

    --visible-thumbnail-after-scaling-duration: 400ms;
    --hide-thumbnail-after-scaling-delay: calc(
      var(--animation-duration) + var(--visible-thumbnail-after-scaling-duration) + var(--show-scene-duration)
    );

    --show-scene-delay: calc(var(--hide-thumbnail-after-scaling-delay) - var(--show-scene-duration));

    --hide-scene-delay: 100ms;
    --hide-scene-duration: 350ms;
}
```

### ORDER OF OPERATIONS

1. Hover Thumbnail, it starts scaling starts after `--scaling-delay`.
2. At the same time, the thumbnail z-index is updated after `--update-z-index-delay`.
3. At the same time, the card content will be shown after `--scaling-delay`. But its duration will be shorter than the scaling: `--show-card-content-duration`.

4. Thumbnail scaling lasts for `--scaling-duration`.
5. When the thumbnail is scaling, the border radius of the media wrapper, the scene and the thumbnail are transformed.

6. When the scaling is completed, the thumbnail hidden after `--hide-thumbnail-after-scaling-delay`.
7. The duration of the thumbnail being visible after scaling is `--visible-thumbnail-after-scaling-duration`.

8. The scene is shown after `--show-scene-delay`. This should be `--hide-thumbnail-after-scaling-delay` - the time it takes to show the scene (`--show-scene-duration`).

9. When the scene ends, the `visible` class is given to the thumbnail, and the `hidden` class is given to the scene.
10. The duration of the fade-out of the scene when the hidden class is given is `--hide-scene-duration`.
11. And it has a delay of `--hide-scene-delay`.

12. If the scene isnt over and the thumbnail is unhovered, the card goes to its initial state.
13. The card content will be hidden async with the scane unscaling. Its duration is `--hide-card-content-duration`.
