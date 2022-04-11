function fn(ctor) {
    return new ctor('hello');
}
function fn2(ctor) {
    ctor('hello');
    return new ctor('hello');
}
