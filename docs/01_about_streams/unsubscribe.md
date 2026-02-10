# unsubscribe()

**What it does**

* Stops receiving future emissions
* Cleans up resources

```ts
sub.unsubscribe();
```

**Mental model**

> “I’m done listening.”

**Angular note**

* In Angular:

    * `async` pipe
    * `takeUntilDestroyed`
      handle this automatically
