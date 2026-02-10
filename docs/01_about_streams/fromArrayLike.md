# fromArrayLike

### What it does

Converts an array (or array-like) into an Observable

Emits each element sequentially

```typescript
fromArrayLike([3, 4]) // emits 3, then 4
```


### Mental model

> “Replay a collection as a stream.”

### Important

Like of, it only runs after subscription

Each emission is separate (important for operators like map, reduce, etc.)
