import { L } from 'fxjs';

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