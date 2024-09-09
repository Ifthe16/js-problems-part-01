const today = new Date();
console.log(today);

const date = new Date('2062-10-19');
console.log(date);
console.log(date.getMonth());
console.log(date.getDay());

const specificDate = new Date(2091, 0, 26);
console.log(specificDate);

const specificDate2 = new Date(2024, 8, 9);
console.log(specificDate2);

specificDate.setMonth(10);
console.log(specificDate);
console.log(specificDate.toLocaleDateString());
console.log(specificDate.toLocaleDateString('en-GB'));

// unix epoc