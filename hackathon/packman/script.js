const gameBoard = document.getElementById("game-board");
        const pacman = document.getElementById("pacman");
        const ghost = document.getElementById("ghost");
        const food = document.getElementById("food");
        let score = 0;

        // Initial position of Pacman and Ghost
        let pacmanPosition = { x: 0, y: 0 };
        let ghostPosition = { x: 10, y: 10 };

        // Initial position of food
        let foodPosition = { x: 150, y: 150 };

        // Function to update position of Pacman
        function movePacman(direction) {
            switch (direction) {
                case "ArrowUp":
                    pacmanPosition.y -= 10;
                    break;
                case "ArrowDown":
                    pacmanPosition.y += 10;
                    break;
                case "ArrowLeft":
                    pacmanPosition.x -= 10;
                    break;
                case "ArrowRight":
                    pacmanPosition.x += 10;
                    break;
            }
            pacman.style.top = pacmanPosition.y + "px";
            pacman.style.left = pacmanPosition.x + "px";
            checkCollision();
        }

        // Function to update position of Ghost
        function moveGhost() {
            ghostPosition.x += Math.random() < 0.5 ? 10 : -10;
            ghostPosition.y += Math.random() < 0.5 ? 10 : -10;
            ghost.style.top = ghostPosition.y + "px";
            ghost.style.left = ghostPosition.x + "px";
            checkCollision();
        }

        // Function to check collision between Pacman and Ghost
        function checkCollision() {
            if (
                pacmanPosition.x === ghostPosition.x &&
                pacmanPosition.y === ghostPosition.y
            ) {
                alert("Game Over! Your score is: " + score);
                location.reload();
            }
        }

        // Function to check collision between Pacman and food
        function checkFoodCollision() {
            if (
                pacmanPosition.x === foodPosition.x &&
                pacmanPosition.y === foodPosition.y
            ) {
                score++;
                document.getElementById("score").innerText = score;
                foodPosition.x = Math.floor(
                    Math.random() * (gameBoard.offsetWidth / 10)
                ) * 10;
                foodPosition.y = Math.floor(
                    Math.random() * (gameBoard.offsetHeight / 10)
                ) * 10;
                food.style.left = foodPosition.x + "px";
                food.style.top = foodPosition.y + "px";
            }
        }

        // Event listener for arrow keys to move Pacman
        document.addEventListener("keydown", function (e) {
            movePacman(e.key);
        });

        // Game loop
        setInterval(function () {
            moveGhost();
            checkFoodCollision();
        }, 100);