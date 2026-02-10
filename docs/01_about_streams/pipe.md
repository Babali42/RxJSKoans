## Pipeable operators

### `pipe(...)`

**What it does**

* Chains operators to transform or react to the stream

```ts
numbers.pipe(
  tap(...)
)
```

**Mental model**

> “Describe how the stream behaves.”

---

### `tap(fn)`

**What it does**

* Runs a side effect
* Does **not** modify the stream

```ts
tap(n => sum += n)
```
**Mental model**

> “Peek at the stream without touching it.”

**Rules of thumb**

* ✅ logging, metrics, debugging
* ⚠️ avoid business logic
* ❌ don’t mutate shared state unless intentional

Your koans use `tap` correctly to **observe behavior**, not transform data.
