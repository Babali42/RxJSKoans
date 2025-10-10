import {of, Subject, tap} from "rxjs";
import {fromArrayLike} from "rxjs/internal/observable/innerFrom";
import {Rangea} from "./Range";

var __ = 'Fill in the blank';

describe("", () => {
    test('simple subscription', (done: jest.DoneCallback) => {
        of(42).subscribe(x => {
            expect(x).toBe(__);
            done();
        })
    })

    test('what comes in goes out', (done: jest.DoneCallback) => {
        of(__).subscribe(x => {
            expect(x).toBe(42);
            done();
        })
    })

    test("subscribe to a subject", (done: jest.DoneCallback) => {
        var events = new Subject();
        events.subscribe(function (x) {
            expect(x).toBe(__);
            done();
        });
        events.next(37);
    });

    test("how event streams relate to observables", (done: jest.DoneCallback) => {
        let observableResult = 1;
        of(73).subscribe(x => {
            observableResult = x;
        });

        let eventStreamResult = __;
        var events = new Subject();
        //@ts-ignore
        events.subscribe(x => eventStreamResult = x);
        //events.next(73);

        expect(observableResult).toEqual(eventStreamResult);
        done();
    })

    test("events with multiples values", (done: jest.DoneCallback) => {
        var eventStreamResult = 0;
        var events = new Subject();

        //@ts-ignore
        events.subscribe(function (x) {
            // @ts-ignore
            eventStreamResult += x;
        });

        events.next(10);
        events.next(7);

        expect(eventStreamResult).toEqual(__);
        done();
    })

    test("get the last event", (done: jest.DoneCallback) => {
        var received = '';
        var names = ['foo', 'bar'];
        fromArrayLike(names).subscribe(function (x) {
            received = x;
        });

        expect(received).toEqual(__);
        done();
    })

    test("everything counts", () => {
        var received = 0;
        var numbers = [3, 4];
        fromArrayLike(numbers).subscribe(function (x) {
            received += x;
        });

        expect(received).toEqual(__);
    })

    test("this is still an event stream", () => {
        var received = 0;
        var numbers = new Subject();
        numbers.subscribe(function (x) {
            // @ts-ignore
            received += x;
        });

        numbers.next(10);
        numbers.next(5);

        expect(received).toEqual(__);
    })

    test('events before you subscribe do not count', () => {
        let sum = 0;
        const numbers = new Subject();
        const observable = numbers.pipe(
            tap(n => { // @ts-ignore
                sum += n; })
        );

        // Emit events before subscription
        numbers.next(1);
        numbers.next(2);

        // Subscribe after first emissions
        observable.subscribe();

        // Emit more events after subscription
        numbers.next(3);
        numbers.next(4);

        expect(sum).toBe(__); // Only 3 + 4 after subscription
    });

    test('events after you unsubscribe don’t count', () => {
        let sum = 0;
        const numbers = new Subject();
        const observable = numbers.pipe(
            tap(n => { // @ts-ignore
                sum += n; })
        );

        const subscription = observable.subscribe();

        // Emit events before unsubscribing
        numbers.next(1);
        numbers.next(2);

        // Unsubscribe
        subscription.unsubscribe();

        // Emit events after unsubscribing
        numbers.next(3);
        numbers.next(4);

        expect(sum).toBe(__); // Only 1 + 2 before unsubscribe
    });

    test('all events will be received', function () {
        let received = 'Working ';
        const numbers = Rangea.create(9, 5);

        fromArrayLike(numbers).subscribe(function (x) { received += x; });

      expect(received).toEqual(__);
    });
})

//
// test('do things in the middle', function () {
//   var status = [];
//   var daysTilTest = Observable.from(Range.create(4, 1));
//
//   daysTilTest.tap(function (d) { status.push(d + '=' + (d === 1 ? 'Study Like Mad' : __)); }).subscribe();
//
//   equal('4=Party,3=Party,2=Party,1=Study Like Mad', status.toString());
// });
//
// test('nothing listens until you subscribe', function () {
//   var sum = 0,
//       numbers = Observable.from(Range.create(1, 10)),
//       observable = numbers.tap(function (n) { sum += n; });
//
//   equal(0, sum);
//   observable.__();
//
//   equal(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10, sum);
// });
//
// test('events while subscribing', function () {
//   var received = [],
//       words = new Subject(),
//       observable = words.tap(received.push.bind(received));
//
//   words.onNext('Peter');
//   words.onNext('said');
//
//   var subscription = observable.subscribe();
//
//   words.onNext('you');
//   words.onNext('look');
//   words.onNext('pretty');
//
//   subscription.dispose();
//
//   words.onNext('ugly');
//
//   equal(__, received.join(' '));
// });
