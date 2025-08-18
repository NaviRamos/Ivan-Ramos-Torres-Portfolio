// JavaScript to handle tab switching
function showTab(tabId) {
  // Hide all tabs
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  // Show the selected tab
  document.getElementById(tabId).classList.add('active');
}
