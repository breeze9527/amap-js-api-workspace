declare var div: HTMLDivElement;
declare var input: HTMLInputElement;

interface FooEventMap {
    test1: AMap.Event<'test1', string>;
    test2: AMap.Event<'test2', { data: number }>;
    test3: AMap.Event<'test3'>;
}

class Foo extends AMap.EventEmitter<FooEventMap> { }
declare var foo: Foo;

// $ExpectType Foo
foo.on('complete', event => {
    // $ExpectType "complete"
    event.type;
});
foo.on('test1', event => {
    // $ExpectType "test1"
    event.type;
    // $ExpectType string
    event.value;
});
foo.on('test2', event => {
    // $ExpectType "test2"
    event.type;
    // $ExpectType number
    event.data;
});
foo.on('test3', event => {
    // $ExpectType "test3"
    event.type;
    // $ExpectError
    event.value;
});

// $ExpectType EventListener<0>
AMap.event.addDomListener(div, 'click', event => {
    // $ExpectType number
    event.clientX;
});

// $ExpectType EventListener<1>
AMap.event.addListener(foo, 'test1', event => {
    // $ExpectType "test1"
    event.type;
    // $ExpectType string
    event.value;
});
AMap.event.addListener(foo, 'test1', function (event) {
    // $ExpectType "test1"
    event.type;
    // $ExpectType string
    event.value;
    // $ExpectType number
    this.test;
}, { test: 1 });
// $ExpectError
AMap.event.addListener(foo, 'none', () => { });

// $ExpectType EventListener<1>
AMap.event.addListenerOnce(foo, 'test1', function (event) {
    // $ExpectType "test1"
    event.type;
    // $ExpectType string
    event.value;
    // $ExpectType number
    this.test;
}, { test: 1 });

declare var eventListener: AMap.EventListener<0>;
// $ExpectType void
AMap.event.removeListener(eventListener);

// $ExpectType void
AMap.event.trigger(foo, 'test1', {
    value: 'extra'
});
// $ExpectType void
AMap.event.trigger(foo, 'test2', {
    data: 1
});

var eventData1 = {
    data: 'data'
};
// $ExpectError
AMap.event.trigger(foo, 'test2', eventData1);

// var eventData2 = {
//     value: 'data'
// };
// // $ExpectError
// AMap.event.trigger(foo, 'test2', eventData2);

// $ExpectType void
AMap.event.trigger(foo, 'test3');
// $ExpectError
AMap.event.trigger(foo, 'test3', 'abc');
