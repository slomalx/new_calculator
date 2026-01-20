const draggable = document.querySelector('.container');
let isDragging = false;
let offsetX, offsetY;

// Начало перетаскивания
draggable.addEventListener('mousedown', (e) => {
  isDragging = true;
  
  // Вычисляем смещение курсора внутри элемента
  const rect = draggable.getBoundingClientRect();
  offsetX = e.clientX - rect.left;
  offsetY = e.clientY - rect.top;
  
  // Добавляем стили для лучшего UX
  draggable.style.cursor = 'grabbing';
  draggable.style.userSelect = 'none';
  
  e.preventDefault();
});

// Перемещение
document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  
  // Устанавливаем новую позицию элемента
  draggable.style.left = (e.clientX - offsetX) + 'px';
  draggable.style.top = (e.clientY - offsetY) + 'px';
});

// Завершение перетаскивания
document.addEventListener('mouseup', () => {
  isDragging = false;
  draggable.style.cursor = 'grab';
});
