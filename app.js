let items = [
  { id: "a", val: 10, w: 3 },
  { id: "b", val: 6, w: 8 },
  { id: "c", val: 3, w: 3 },
  { id: "d", val: 4, w: 5 },
  { id: "e", val: 4, w: 2 },
];

maxWeight = 8;

function theBag(items, weight) {
  let array = items;
  let length = items.length;
  for (let i = 0; i < array.length; i++) {
    for (let l = 0; l < array.length; l++) {
      if (i != l && array[i].w + array[l].w <= weight) {
        array.push({
          id: [...array[i].id, ...array[l].id].sort(),
          val: array[i].val + array[l].val,
          w: array[i].w + array[l].w,
        });
      }
    }
  }

  array = Array.from(new Set(array.map(JSON.stringify)), JSON.parse);
  array.slice(length).map((e) => {
    let unique = [];
    for (let i = 0; i < e.id.length; i++) {
      if (!unique.includes(e.id[i])) {
        unique.push(e.id[i]);
      }
    }
    if (unique.length != e.id.length) {
      array.splice(array.indexOf(e), 1);
    }
  });

  return array.filter((e) => e.val == Math.max(...array.map((e) => e.val)))[0]
    .id;
}

console.log(theBag(items, maxWeight));
