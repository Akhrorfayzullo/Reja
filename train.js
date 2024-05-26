//Task B
// function countDigits(str) {
//   let count = 0;
//   for (let char of str) {
//     if (!isNaN(char) && char !== " ") {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countDigits("ad2a54y79wet0sfgb9"));

//task C

class Shop {
  constructor(non, lagmon, cola) {
    this.products = {
      non: non,
      lagmon: lagmon,
      cola: cola,
    };
  }

  getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  qoldiq() {
    const time = this.getCurrentTime();
    console.log(
      `At ${time}, there are ${this.products.non} non, ${this.products.lagmon} lagmon, and ${this.products.cola} cola available!`
    );
  }

  sotish(product, quantity) {
    if (this.products[product] === undefined) {
      console.log(`Product ${product} does not exist.`);
      return;
    }
    if (this.products[product] < quantity) {
      console.log(`Not enough ${product} in stock to sell ${quantity}.`);
      return;
    }
    this.products[product] -= quantity;
    const time = this.getCurrentTime();
    console.log(`At ${time}, ${quantity} ${product} sold.`);
  }

  qabul(product, quantity) {
    if (this.products[product] === undefined) {
      console.log(`Product ${product} does not exist.`);
      return;
    }
    this.products[product] += quantity;
    const time = this.getCurrentTime();
    console.log(`At ${time}, ${quantity} ${product} received.`);
  }
}

const shop = new Shop(4, 5, 2);
shop.qoldiq();
shop.sotish("non", 3);
shop.qabul("cola", 4);
shop.qoldiq();
