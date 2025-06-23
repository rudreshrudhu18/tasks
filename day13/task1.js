a=["apple", "banana", "cherry","date", "elderberry"];
console.log(a[2]);
a.push("fig");
console.log(a);
a.shift(0);
console.log(a);
console.log(a.length);
for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
}
for (let i = a.length; i >0; i--) {
    console.log(a[i]);
    }
sum=0
for (let i = 0; i < a.length; i++) {
    sum=sum+i;
    }
console.log(sum);