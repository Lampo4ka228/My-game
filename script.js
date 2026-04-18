 <script>
    const STORAGE_KEY = 'clickerScore';

    function loadScore() {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? parseInt(saved, 10) : 0;
    }

    function saveScore(value) {
      localStorage.setItem(STORAGE_KEY, value);
    }

    let score = loadScore();

    const clickBtn = document.getElementById('clickBtn');
    const saveBtn = document.getElementById('saveBtn');
    const resetBtn = document.getElementById('resetBtn');
    const scoreDisplay = document.getElementById('score');
    const savedScoreDisplay = document.getElementById('savedScore');

    function updateDisplay() {
      scoreDisplay.textContent = score;
      savedScoreDisplay.textContent = loadScore();
    }

    clickBtn.addEventListener('click', (event) => {
      event.preventDefault(); // Отменяем отправку формы
      score += 1;
      updateDisplay();
    });

    saveBtn.addEventListener('click', () => {
      saveScore(score);
      updateDisplay();
    });

    resetBtn.addEventListener('click', () => {
      score = 0;
      saveScore(score); // Чтобы сбросить и в сохранении
      updateDisplay();
    });

    updateDisplay();
  </script>