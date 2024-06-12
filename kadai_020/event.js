const btn = document.getElementById('btn');
const msg = document.getElementById('text');

btn.addEventListener('click', () => {
    msg.textContent = 'ボタンをクリックしました';
})