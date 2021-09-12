const list = document.querySelector('#categories');
console.log(list);
const listById = document.getElementById('categories');
console.dir(listById);
console.log(`В списке ${[...listById.children].length} категории.`);

let items = [...listById.children].map((li) => {
    return [...li.children];
});

console.dir(items);
let titles = items.map(child => child.find(obj => obj.nodeName === "H2" ).textContent);
console.log(...titles);
let innerList = items.map(child => child.find(obj => obj.nodeName === "UL" ).children.length);
console.log(...innerList);