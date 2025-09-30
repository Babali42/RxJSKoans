import {of, Subject} from "rxjs";
import {fromArrayLike} from "rxjs/internal/observable/innerFrom";

var __ = 'Fill in the blank';

describe("", () => {
    it('simple subscription', (done: jest.DoneCallback) => {
        of(42).subscribe(x => {
            expect(x).toBe(__);
            done();
        });
    });

    it('what comes in goes out', (done: jest.DoneCallback) => {
        of(__).subscribe(x => {
            expect(x).toBe(42);
            done();
        });
    });

    it("Should subscribe to a subject",  (done: jest.DoneCallback)  => {
        var events = new Subject();
        events.subscribe(function (x) { expect(x).toBe(__); done(); });
        events.next(37);
    });

    it("how event streams relate to observables", (done: jest.DoneCallback) => {
        let observableResult = 1;
        of(73).subscribe(x => { observableResult = x; });

        let eventStreamResult = 1;
        var events = new Subject();
        //@ts-ignore
        events.subscribe(x => eventStreamResult = x);
        //events.next(73);

        expect(observableResult).toEqual(eventStreamResult);
        done();
    })

    it("events with multiples values", (done: jest.DoneCallback) => {
        var eventStreamResult = 0;
        var events = new Subject();

        //@ts-ignore
        events.subscribe(function (x) { eventStreamResult += x; });

        events.next(10);
        events.next(7);

        expect(eventStreamResult).toEqual(__);
        done();
    })

    it("", (done: jest.DoneCallback) => {
        test('the last event', function () {
            var received = '';
            var names = ['foo', 'bar'];
            fromArrayLike(names).subscribe(function (x) {
                received = x;
            });

            expect(received).toEqual('bar');
            done();
        });
    });
});

//
// test('the last event', function () {
//   var received = '';
//   var names = ['foo', 'bar'];
//   Observable.from(names).subscribe(function (x) { received = x; });
//
//   equal("bar", received);
// });
//
// test('everything counts', function () {
//   var received = 0;
//   var numbers = [3, 4];
//   Observable.from(numbers).subscribe(function (x) { received += x; });
//
//   equal(7, received);
// });
//
// test('this is still an event stream', function () {
//   var received = 0;
//   var numbers = new Subject();
//   numbers.subscribe(function (x) { received += x; });
//
//   numbers.onNext(10);
//   numbers.onNext(5);
//
//   equal(15, received);
// });
//
// test('all events will be received', function () {
//   var received = 'Working ';
//   var numbers = Range.create(9, 5);
//
//   Observable.from(numbers).subscribe(function (x) { received += x; });
//
//   equal("Working 98765", received);
// });
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
// test('events before you subscribe do not count', function () {
//   var sum = 0,
//       numbers = new Subject(),
//       observable = numbers.tap(function (n) { sum += n; });
//
//   numbers.onNext(1);
//   numbers.onNext(2);
//
//   observable.subscribe();
//
//   numbers.onNext(3);
//   numbers.onNext(4);
//
//   equal(__, sum);
// });
//
// test('events after you unsubscribe dont count', function () {
//   var sum = 0,
//       numbers = new Subject(),
//       observable = numbers.tap(function (n) { sum += n; }),
//       subscription = observable.subscribe();
//
//   numbers.onNext(1);
//   numbers.onNext(2);
//
//   subscription.dispose();
//
//   numbers.onNext(3);
//   numbers.onNext(4);
//
//   equal(__, sum);
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
