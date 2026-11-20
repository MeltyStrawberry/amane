window.addEventListener('DOMContentLoaded', () => {
    const curtain = document.getElementById('page-transition-curtain');
    if (!curtain) return;

    // 💡 過去のクラスを一度完全にリセット
    curtain.classList.remove('slide-in');

    // 💡【最終解決策】待ち時間を「0.2秒（200ミリ秒）」に伸ばしました！
    // ページが切り替わってから一瞬だけ深呼吸する時間を挟むことで、
    // ブラウザが右へハケるアニメーションを最初から100%確実に画面に映し出せるようになります。
    setTimeout(() => {
        curtain.classList.add('slide-out');
    }, 200);

    // メニュー（HOME、NEWS、PROFILEなど）のボタンをクリックしたときの処理
    document.querySelectorAll('.site-nav a, .slide-nav-list a').forEach(link => {
        link.addEventListener('click', function(e) {
            const targetUrl = this.getAttribute('href');
            
            // 空のリンクやページ内リンク、外部サイトは無視
            if (!targetUrl || targetUrl.startsWith('#') || targetUrl.includes('http')) return;
            
            // 通常のページ切り替えを一時ストップ
            e.preventDefault();
            
            // 右へ開く動き（slide-out）を完全に消して、左から閉じる動き（slide-in）をつける
            curtain.classList.remove('slide-out');
            curtain.classList.add('slide-in');
            
            // 幕が画面を完全に覆い隠したタイミング（0.8秒後）に、次のページへ進む
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 800); 
        });
    });
});
