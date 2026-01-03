let currentUser = null;

function login() {
  const email = document.getElementById("email").value;

  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email })
  })
  .then(res => res.json())
  .then(user => {
    currentUser = user;
    renderDashboard();
  })
  .catch(() => alert("Login failed"));
}

function renderDashboard() {
  document.getElementById("login").style.display = "none";

  if (currentUser.role === "employee") {
    employeeUI();
  } else {
    adminUI();
  }
}

function employeeUI() {
  dashboard.innerHTML = `
    <h2>Employee Dashboard</h2>
    <div class="dashboard">
      <div class="tile">
        <h3>Attendance</h3>
        <button onclick="checkIn()">Check In</button>
      </div>

      <div class="tile">
        <h3>Leave</h3>
        <button onclick="applyLeave()">Apply Leave</button>
      </div>

      <div class="tile">
        <h3>Payroll</h3>
        <button onclick="viewPayroll()">View Salary</button>
      </div>
    </div>
  `;
}

function adminUI() {
  dashboard.innerHTML = `
    <h2>Admin Dashboard</h2>
    <div class="dashboard">
      <div class="tile">
        <h3>Leave Requests</h3>
        <button onclick="viewLeaves()">View Requests</button>
      </div>
    </div>
  `;
}

function checkIn() {
  fetch("http://localhost:3000/attendance", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      user: currentUser.name,
      time: new Date().toISOString()
    })
  });
  alert("Checked in");
}

function applyLeave() {
  fetch("http://localhost:3000/leave", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      user: currentUser.name,
      reason: "Personal"
    })
  });
  alert("Leave applied");
}

function viewLeaves() {
  fetch("http://localhost:3000/leaves")
    .then(res => res.json())
    .then(data => alert(JSON.stringify(data, null, 2)));
}

function viewPayroll() {
  fetch(`http://localhost:3000/payroll/${currentUser.id}`)
    .then(res => res.json())
    .then(data => alert(JSON.stringify(data, null, 2)));
}

