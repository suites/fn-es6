import { L, C } from 'fxjs';
import _ from 'fxjs/Strict';

// 1. 홀수 n개 더하기
function f1(limit, list) {
  let acc = 0;
  for (const a of list) {
    if (a % 2) {
      const b = a * a;
      acc += b;
      if (--limit == 0) break;
    }
  }
  console.log(acc);
}

f1(3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// 2. if를 filter로
function f2(limit, list) {
  let acc = 0;
  for (const a of L.filter(a => a % 2, list)) {
    const b = a * a;
    acc += b;
    if (--limit == 0) break;
  }
  console.log(acc);
}

f2(3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// 3. 값 변화 후 변수 할당을 map으로
function f3(limit, list) {
  let acc = 0;
  for (const a of L.map(a => a * a, L.filter(a => a % 2, list))) {
    acc += a;
    if (--limit == 0) break;
  }
  console.log(acc);
}

f3(3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// 4. break를 take로
function f4(limit, list) {
  let acc = 0;
  for (const a of L.take(limit, L.map(a => a * a, L.filter(a => a % 2, list)))) {
    acc += a;
  }
  console.log(acc);
}

f4(3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// 5. 축약 및 합산을 reduce로
function f5(limit, list) {
  const add = (a, b) => a + b;

  console.log(
    _.reduce(add,
      L.take(limit,
        L.map(a => a * a,
          L.filter(a => a % 2, list)))));
}

f5(3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// 5-1. go와 함께
function f5_1(limit, list) {
  const add = (a, b) => a + b;

  _.go(list,
    L.filter(a => a % 2),
    L.map(a => a * a),
    L.take(limit),
    _.reduce(add),
    console.log);
}

f5_1(3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// 6. while을 range로
function f6(end) {
  let i = 0;
  while (i < end) {
    console.log(i);
    ++i;
  }
}

// f6(10);

function f6L(end) {
  _.each(console.log, L.range(end));
}

// f6L(10);

// 6-1. 특정 간격의 range
function f6_1(end) {
  let i = 1;
  while (i < end) {
    console.log(i);
    i += 2;
  }
}

f6_1(10);

function f6_1L(end) {
  _.each(console.log, L.range(1, end, 2));
}

f6_1L(10);