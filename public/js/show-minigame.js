/**
 * 延遲翻牌，翻太快會有潛在非同步問題
 * 先保持 1.5 秒
 */
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
async function delayedLoop() {
    const teamContainer = document.getElementById('team-container');
    // const team = teamContainer.options[teamContainer.selectedIndex].text;
    const team = '我要吃奶酪';
    
    pick(team)
    await delay(1500); // Wait for 1 second between iterations
    pick()
}