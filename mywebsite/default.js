//live alert
const alertPlaceholder = document.getElementById('liveAlertPlaceholder');

// 用于显示进度条和警报的函数
const appendAlertWithProgress = (message, type) => {
  // 创建警报元素
  const alertWrapper = document.createElement('div');
  alertWrapper.classList.add('alert', `alert-${type}`, 'alert-dismissible');
  alertWrapper.setAttribute('role', 'alert');

  // 创建进度条元素
  const progressBar = document.createElement('div');
  progressBar.classList.add('progress');

  const progress = document.createElement('div');
  progress.classList.add('progress-bar', 'progress-bar-striped', 'progress-bar-animated');
  progress.setAttribute('role', 'progressbar');
  progress.setAttribute('aria-valuenow', '0');
  progress.setAttribute('aria-valuemin', '0');
  progress.setAttribute('aria-valuemax', '100');
  progress.style.width = '0%';

  progressBar.appendChild(progress);

  // 添加消息到警报元素
  const messageDiv = document.createElement('div');
  messageDiv.textContent = message;

  // 创建关闭按钮
  const closeButton = document.createElement('button');
  closeButton.classList.add('btn-close');
  closeButton.setAttribute('type', 'button');
  closeButton.setAttribute('data-bs-dismiss', 'alert');
  closeButton.setAttribute('aria-label', 'Close');

  // 将消息、进度条和关闭按钮添加到警报元素中
  alertWrapper.appendChild(messageDiv);
  alertWrapper.appendChild(progressBar);
  alertWrapper.appendChild(closeButton);

  // 将警报元素添加到警报容器中
  alertPlaceholder.appendChild(alertWrapper);

  // 模拟进度更新的过程
  let value = 0;
  const interval = setInterval(() => {
    value += 10;
    if (value > 100) {
      clearInterval(interval);
      alertPlaceholder.removeChild(alertWrapper); // 进度完成后移除警报和进度条
    } else {
      progress.style.width = value + '%';
    }
  }, 1000); // 每隔1秒更新一次进度
};

// 绑定按钮点击事件
const alertTrigger = document.getElementById('liveAlertBtn');
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlertWithProgress('Not working but u can still wait if u want lol', 'success');
  });
}



//tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
//popover
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
//modal
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})
