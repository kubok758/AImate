document.getElementById('downloadButton').addEventListener('click', function() {
    // Путь к архиву с файлом на GitHub
    const fileUrl = 'https://github.com/kubok758/AImate/raw/main/AImate.zip';  // Путь к файлу на GitHub
    
    // Создаём временную ссылку для скачивания
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'asmortfoncheg.zip';  // Имя файла при скачивании
    
    // Инициируем скачивание
    link.click();
});
