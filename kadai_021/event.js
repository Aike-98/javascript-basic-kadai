const btn = document.getElementById('btn');
const msg = document.getElementById('text');

btn.addEventListener('click', () => {
    setTimeout(() => {
        msg.textContent = 'ボタンをクリックしました';
    }, 2000);
})