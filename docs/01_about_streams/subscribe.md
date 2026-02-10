# Subscription lifecycle

### `subscribe(...)`

**What it does**

* Starts the Observable execution
* Registers callbacks for emitted values

```ts
const sub = observable.subscribe(x => { ... });
```

**Mental model**

> “I’m listening now.”

**Critical RxJS truth**

> Nothing happens until you subscribe.
> 
