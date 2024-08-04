
        const canvas = document.getElementById('matrixCanvas');
        const ctx = canvas.getContext('2d');

        const colVal = Array.from({ length: canvas.width / 10 }, () => 0);

        function drawMatrix() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'green';

            colVal.map((posY, index) => {
                const character = Math.random() < 0.5 ? '0' : '1';
                const posX = index * 10;

                ctx.fillText(character, posX, posY);

                if (posY > 100 + Math.floor(Math.random() * 300)) {
                    colVal[index] = 0;
                } else {
                    colVal[index] = posY + 10;
                }
            });

            requestAnimationFrame(drawMatrix);
        }

        drawMatrix();