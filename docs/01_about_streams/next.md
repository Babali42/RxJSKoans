# next(value)

**What it does**

* Pushes a value into a Subject
* Immediately delivered to **current subscribers only**

```ts
subject.next(37);
```

**Mental model**

> “Fire an event *now*.”
