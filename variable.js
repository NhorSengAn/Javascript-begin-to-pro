let age = 25;
age = 26; // អាចផ្លាស់ប្តូរបាន

// ប្រើ const សម្រាប់ថេរដែលមិនអាចផ្លាស់ប្តូរតម្លៃ
const name = "Sokha";
name = "Vannak"; // នឹងបណ្តាលឱ្យមានកំហុស (Error)

// ប្រើ var (វិធីចាស់ មិនសូវប្រើទំនើប)
var score = 100;
score = 150; // អាចផ្លាស់ប្តូរបាន

console.log(age); // 26
console.log(name); // Sokha
console.log(score); // 150
