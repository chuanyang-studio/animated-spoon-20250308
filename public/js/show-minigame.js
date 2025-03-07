/**
 * 讀取隊伍資料
 */
function getAllTeams() {
    firebase.firestore().collection('scoreboard')
    .get()
    .then((querySnapshot) => {
        const teamContainer = document.getElementById('team-container')
        querySnapshot.forEach((doc) => {

            // bind html
            const name = doc.data()['name']
            teamContainer.innerHTML += `<option value="${name}">${name}</option>`
        })
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    })
}

/**
 * 延遲翻牌，翻太快會有潛在非同步問題
 * 先保持 1.5 秒
 */
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
async function delayedLoop() {
    const teamContainer = document.getElementById('team-container');
    const team = teamContainer.options[teamContainer.selectedIndex].text;
    
    pick(team)
    await delay(1500); // Wait for 1 second between iterations
    pick(team)
}