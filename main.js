document.addEventListener('DOMContentLoaded', () => {
    const aBcDe = document.querySelectorAll('.game-guide-card');
    aBcDe.forEach(xYz => {
        xYz.addEventListener('click', () => {
            xYz.classList.toggle('flipped');
        });
    });

    const rStUv = document.getElementById('quiz-container');
    const wXyZ1 = document.getElementById('quiz-result');
    const pQrSt = [
        { question: "Do you find yourself wagering more than your budget allows?", risk: "yes" },
        { question: "Have you attempted to recover losses by gambling more?", risk: "yes" },
        { question: "Have you borrowed funds or sold belongings to continue gambling?", risk: "yes" }
    ];

    let lMnOp = 0;
    let qRsTu = 0;

    function vWxYz() {
        if (lMnOp < pQrSt.length) {
            rStUv.innerHTML = `
                <div class="quiz-question">
                    <p>${pQrSt[lMnOp].question}</p>
                    <button class="btn btn-outline-light btn-sm quiz-btn" data-answer="yes">Yes</button>
                    <button class="btn btn-outline-light btn-sm quiz-btn" data-answer="no">No</button>
                </div>
            `;
            uVwXy();
        } else {
            xYzAb();
        }
    }

    function uVwXy() {
        const oPqRs = rStUv.querySelectorAll('.quiz-btn');
        oPqRs.forEach(mNoPq => {
            mNoPq.addEventListener('click', zAbCd);
        });
    }

    function zAbCd(eFgHi) {
        const iJkLm = eFgHi.target.dataset.answer;
        if (iJkLm === pQrSt[lMnOp].risk) {
            qRsTu++;
        }
        lMnOp++;
        vWxYz();
    }

    function xYzAb() {
        let yZaBc = "";
        if (qRsTu === 0) {
            yZaBc = "Your gambling behavior seems well-managed. Keep playing responsibly!";
        } else if (qRsTu === 1) {
            yZaBc = "There may be a slight risk. Stay cautious and consider setting limits.";
        } else if (qRsTu === 2) {
            yZaBc = "Your habits indicate a moderate risk. It might be beneficial to seek guidance.";
        } else {
            yZaBc = "You could be at a high risk of gambling issues. Please consider seeking professional support.";
        }
        wXyZ1.innerHTML = `<p>${yZaBc}</p>`;
        wXyZ1.style.display = 'block';
    }

    vWxYz();

    const eFgHi = document.getElementById('calculate-limit');
    const jKlMn = document.getElementById('limit-result');

    eFgHi.addEventListener('click', () => {
        const tUvWx = parseFloat(document.getElementById('monthly-income').value);
        if (isNaN(tUvWx) || tUvWx <= 0) {
            jKlMn.innerHTML = '<p class="text-danger">Enter a valid monthly income to calculate your limit.</p>';
            return;
        }

        const kLmNo = (tUvWx * 0.05) / 30;
        jKlMn.innerHTML = `<p>Your recommended daily gambling limit is: <strong>£${kLmNo.toFixed(2)}</strong></p>
                             <p>This is an estimate. Always prioritize responsible gambling and stay within your budget.</p>`;
    });
});
