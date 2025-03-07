// Add a new document with a generated id.
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

// How to use:
// 1. Copy this as template
// 2. Copy this as data
// 3. Ask ChatGPT to replace <column1> to <column8> with the corresponding data
// 4. Run the code in the console
// 5. Check the console for the result
// 6. Check the Firestore database for the new document
// 7. Repeat for each document
