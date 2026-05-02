// main.js
document.addEventListener("DOMContentLoaded", () => {
    // タイピングエフェクト
    new Typed('#typed', {
        strings: ['Mirai.'],
        typeSpeed: 100,
        startDelay: 500,
        showCursor: true,
        cursorChar: '|',
        loop: false,
    });









    // Hamburger
    const hamburger = document.getElementById("hamburger");
    const menu = document.querySelector(".nav__primary ul");

    hamburger.addEventListener("click", () => {
        menu.classList.toggle("active");
        hamburger.classList.toggle("active");
    });









    // Slick START
    $(function () {
        $(".projects__slide").slick({
            autoplay: true,
            autoplaySpeed: 4000,
            dots: true,
        });
    });
    // Slick END

    // // パーティクルエフェクトSTART
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    // devicePixelRatio対応開始
    // これがあるとカーソルと動く粒の位置がぴったりになる 親要素基準
    const parent = canvas.parentElement;
    const dpr = window.devicePixelRatio || 1;

    canvas.width = parent.clientWidth * dpr;
    canvas.height = parent.clientHeight * dpr;

    canvas.style.width = parent.clientWidth + "px";
    canvas.style.height = parent.clientHeight + "px";

    ctx.setTransform(1, 0, 0, 1, 0, 0); // ctx.scale()は毎回呼ぶと積み重なるのでリセット
    ctx.scale(dpr, dpr);
    // devicePixelRatio対応終了

    const mouse = {
        x: null,
        y: null,
        // カーソルの大きさ 大きい数ほどカーソルの当たる粒が多くなる
        radius: 20
    };

    window.addEventListener("mousemove", (e) => {
        const rect = canvas.getBoundingClientRect();

        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });

    class Particle {
        constructor(x, y) {
            this.baseX = x;
            this.baseY = y;
            this.x = x;
            this.y = y;
            this.size = 1.5;
            // カーソルが動くと粒にどれくらいの影響があるか 大きい数-->めっちゃ飛び散る
            this.density = Math.random() * 300;
            this.vx = 0;
            this.vy = 0;
        }

        draw() {
            ctx.fillStyle = "#33e0d0"; // main color = #64ffda
            ctx.fillRect(this.x, this.y, this.size, this.size);
        }

        // 波のように揺れる
        update() {
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < mouse.radius) {
                let force = (mouse.radius - distance) / mouse.radius;

                // 少しだけ押す（弱く）
                this.vx -= dx * force * 1;
                this.vy -= dy * force * 1;
            }

            // 元の位置に戻るバネ
            let springX = (this.baseX - this.x) * 0.05;
            let springY = (this.baseY - this.y) * 0.05;

            this.vx += springX;
            this.vy += springY;

            // 減衰（揺れを作る）
            this.vx *= 0.9;
            this.vy *= 0.9;

            this.x += this.vx;
            this.y += this.vy;
        }
    }

    let particles = [];

    function init() {
        const img = new Image();
        img.src = "images/capyzou.png";

        img.onload = () => {

            // 解析専用canvas（画面には出ない）
            const offCanvas = document.createElement("canvas");
            const offCtx = offCanvas.getContext("2d");

            const size = 300;
            offCanvas.width = size;
            offCanvas.height = size;

            // ここではscaleしない！
            offCtx.drawImage(img, 0, 0, size, size);

            const imageData = offCtx.getImageData(0, 0, size, size);
            const data = imageData.data;

            particles = [];

            // 粒を描く y +=の数が大きいほど粒の間隔が広くなるので荒くなり、粒の数も少なくなる
            for (let y = 0; y < size; y += 5) {
                for (let x = 0; x < size; x += 5) {

                    const index = (y * size + x) * 4;

                    const r = data[index];
                    const g = data[index + 1];
                    const b = data[index + 2];

                    const brightness = (r + g + b) / 5;

                    if (brightness > 100) {
                        particles.push(new Particle(x, y));
                    }
                }
            }
            animate();
        };
    }

    function animate() {
        // 
        ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);

        particles.forEach((p) => {
            p.update();
            p.draw();
        });

        requestAnimationFrame(animate);
    }

    init();
});
// パーティクルエフェクトEND





/* =========================
    波紋クリックアニメーション
  ========================= */
$(function () {
    $('.ripple').on('mousedown', function (e) {

        const $el = $(this);
        const $effect = $el.find('.ripple__effect');

        const rect = this.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        $effect.css({
            left: x - 60 + 'px',
            top: y - 60 + 'px'
        });

        $effect.removeClass('is-show'); // 再発火用
        void $effect[0].offsetWidth; // reflow hack

        $effect.addClass('is-show');
    });
})

// experience__nav用の押されたらボーダーが光る
$('.experience__nav li').on('click', function () {
    $('.experience__nav li').removeClass('active');
    $(this).addClass('active');
});

// experinece__content 会社名押したら経験が切り替わる
$('.tab').on('click', function () {

    console.log("tab js loaded");
    console.log($('.tab').length);

    // 1 タブのactive切り替え
    $('.tab').removeClass('active');
    $(this).addClass('active');

    // 2 対応するcontent取得
    const target = $(this).data('target');

    // 3 コンテンツ切り替え
    $('.panel').removeClass('active');
    $('#' + target).addClass('active');
});








// ふわっとでるアニメーション
document.addEventListener("DOMContentLoaded", function () {

    // 1 main内の全要素に fadeanimation をつける
    // ▼ heroと波紋アニメーションとスライドの上の文字を除外
    document.querySelectorAll("main *:not(.hero):not(.hero *):not(.ripple):not(.ripple *):not(.project-slide__content *)")
        .forEach(el => {
            el.classList.add("fadeanimation");
        });

    // 2 スクロール検知
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: "0px 0px -100px 0px",
        threshold: 0
    });

    // 3 監視開始
    document.querySelectorAll(".fadeanimation")
        .forEach(el => observer.observe(el));
});