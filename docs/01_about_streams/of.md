# Of

### What it does

Creates an Observable that:
- synchronously emits the provided values
- then completes

```typescript
of(42)          // emits 42, then completes
of(1, 2, 3)     // emits 1 → 2 → 3
```

### Mental model

“Turn values into an Observable.”

### Key point

Emissions happen on subscribe

Cold Observable (each subscriber gets its own execution)
