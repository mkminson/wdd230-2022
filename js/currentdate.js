const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options)

const lastModified = document.lastModified;
document.getElementById("modified").innerHTML = lastModified;