# RxJS Koans

The Koans walk you along the path to enlightenment in order to learn RxJS.

An up to date version of https://github.com/Reactive-Extensions/RxJSKoans/

## Summary :

1. 01_about_streams.test.ts
   * Core concepts
     * [of](docs/01_about_streams/of.md)
     * [fromArrayLike](docs/01_about_streams/fromArrayLike.md)
     * [Subject](docs/01_about_streams/Subject.md)
     * [subscribe](docs/01_about_streams/subscribe.md)
     * [unsubscribe](docs/01_about_streams/unsubscribe.md)
     * [Pipeable operators (pipe and tap)](docs/01_about_streams/pipe.md)

## Big conceptual takeaways

From the tests, we’re reinforcing the **right RxJS laws**:

1. **Cold vs Hot**
    * `of`, `fromArrayLike` → cold
    * `Subject` → hot
2. **Subscription is everything**
    * No subscribe = no execution
    * Unsubscribe = stream stops
3. **Events are temporal**
    * Before subscribe → lost
    * After unsubscribe → lost
4. **Streams ≠ values**
    * A stream can emit:
        * 0
        * 1
        * many
        * or infinite values
