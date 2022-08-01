//=========================================================
// А что если...
//=========================================================

// function slow(x) {
//     alert(`Called with ${x}`);
//     return x;
// }

let worker = {
    slow(min, max) {
        alert(`Called with ${min},${max}`);
        return min + max;
    }
};

function cachingDecorator(func, hash) {
    let cache = new Map();

    return function (x) {
        let key = hash(arguments); // (*)
        if (cache.has(key)) {
            return cache.get(key);
        }

        let result = func.call(this, ...arguments); // (**)

        cache.set(key, result);
        return result;
    };
}

function hash(args) {
    return args[0] + ',' + args[1];
}

// worker.slow = cachingDecorator(worker.slow, hash);

// alert(worker.slow(3, 5)); // работает
// alert("Again " + worker.slow(3, 5));


//=========================================================
// Задание №1
//=========================================================

function work(a, b) {
    alert(a + b); // произвольная функция или метод
}

function spy(func) {

    function wrapper(...args) {
        wrapper.calls.push(args);
        return func.apply(this, arguments);
    }

    wrapper.calls = [];

    return wrapper;
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
    alert('call:' + args.join()); // "call:1,2", "call:4,5"
}

//=========================================================
// Codewars
//=========================================================
