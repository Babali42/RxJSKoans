# Subjects & event streams

## Subject : What it is

Both:

- an Observable (you can subscribe)
- an Observer (you can next values)

```typescript
const s = new Subject<number>();
s.subscribe(console.log);
s.next(10);
```

### Mental model

“A live event bus.”

### Key properties

- Hot observable
- No replay by default
- Values emitted before subscription are lost

This is exactly what you test here:

> events before you subscribe do not count
> 
> events after you unsubscribe don’t count
