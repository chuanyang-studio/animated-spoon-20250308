// Part1: "data"
// How to ask ChatGPT for help:
/*
請依下列需求幫忙出題，
1. ABCD四選一單選題
2. ABCD選項之間避免爭議
3. 告訴我題目是什麼？
4. 分別告訴我ABCD四個選項是什麼？
5. 告訴我答案是什麼？
6. 簡單解釋答案為什麼是這樣？
7. 出題的方向鎖定在"寄生植物"
*/

// Part2: "template"
firebase.firestore().collection("question").add({
    answer: "<column7>",
    author: "ChatGPT",
    category: "<column1>",
    desc: "<column2>",
    explain: "<column8>",
    option1: "<column3>",
    option2: "<column4>",
    option3: "<column5>",
    option4: "<column6>",
})
.then((docRef) => {
    console.log("新增題目成功: ", docRef.id);
})
.catch((error) => {
    console.error("新增題目失敗: ", error);
});

// Part3: How to use
// 1. Copy this as template
// 2. Copy this as data
// 3. Ask ChatGPT to replace <column1> to <column8> with the corresponding data
// 4. Run the code in the console
// 5. Check the console for the result
// 6. Check the Firestore database for the new document
// 7. Repeat for each document
