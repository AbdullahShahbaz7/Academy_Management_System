import './style.css'
import './login.css'
import { isSupabaseConfigured, supabase } from './supabase.js'

const app = document.querySelector('#app')

app.innerHTML = `
  <section class="login-screen" aria-label="Academy Management login">
    <div class="login-hero">
      <div class="login-brand-mark" aria-hidden="true">AM</div>
      <div class="login-hero-copy">
        <p class="login-eyebrow">EDUFLOW</p>
        <h1>Academy Management<br>System</h1>
        <p>Manage Attendance, Fees, Schedule &amp; Performance — All<br>in One Place</p>
      </div>
      <div class="login-illustration" aria-hidden="true">
        <div class="book-icon"><span></span><span></span><i></i></div>
        <strong>EDUFLOW</strong>
        <small>Education Management Platform</small>
      </div>
    </div>
    <div class="login-panel">
      <form class="login-card" id="login-form">
        <h2>Welcome Back</h2>
        <p class="login-hint">Please log in to your account</p>
        <p class="login-status" role="status" aria-live="polite"></p>
        <div class="role-tabs" role="tablist" aria-label="Account type">
          <button type="button" class="active" aria-selected="true">Admin</button>
          <button type="button" aria-selected="false">Staff</button>
          <button type="button" aria-selected="false">Student</button>
        </div>
        <label class="login-field">Email or Username<input name="username" type="text" value="admin@academy.edu" autocomplete="username" required></label>
        <label class="login-field password-field">Password<div><input name="password" type="password" value="password" autocomplete="current-password" required><button type="button" class="password-toggle" aria-label="Show password">&#128065;</button></div></label>
        <div class="login-actions"><a href="#" class="forgot-link">Forgot Password?</a><button type="submit" class="login-submit">Login <span aria-hidden="true">&#8594;</span></button></div>
      </form>
      <small class="login-footer">&copy; 2024 Academy Management System. All rights reserved.</small>
    </div>
  </section>
  <div class="dashboard-app">
    <aside class="sidebar">
      <div class="brand-block">
        <div class="brand-icon">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 10.5 12 5l9 5.5-9 5.5-9-5.5Zm4.5 1.9V16c1.9 1.3 5.1 1.9 7.5 1.9s5.6-.6 7.5-1.9v-3.6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="brand-copy">
          <span>Academy</span>
          <strong>Manager</strong>
          <small>Admin Portal</small>
        </div>
      </div>

      <button class="primary-action">+ New Registration</button>

      <nav class="sidebar-nav" aria-label="Main navigation">
        <button class="nav-item login-nav" type="button"><span class="icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 17l5-5-5-5M15 12H3M21 3v18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Login</button>
        <button class="nav-item" data-route="/dashboard"><span class="icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg></span>Dashboard</button>
        <button class="nav-item active" data-route="/admin/attendance"><span class="icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9" cy="7" r="4" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M22 21v-2a4 4 0 0 0-3-3.9" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Attendance</button>
        <button class="nav-item" data-route="/schedule"><span class="icon"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M16 3v4M8 3v4M3 10h18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg></span>Schedule</button>
        <button class="nav-item" data-route="/dashboard/diary"><span class="icon"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="4" width="14" height="17" rx="2" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M9 4v4M15 4v4M8 12h8M8 16h5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg></span>Daily Diary</button>
        <button class="nav-item" data-route="/admin/student"><span class="icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m2 10 10-5 10 5-10 5-10-5Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M6 12v5c3.5 2 8.5 2 12 0v-5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg></span>Students</button>
        <button class="nav-item" data-route="/admin/staff"><span class="icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9" cy="7" r="4" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M22 21v-2a4 4 0 0 0-3-3.9" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Staff</button>
        <button class="nav-item" data-route="/admin/studentperformance"><span class="icon"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="3" width="16" height="18" rx="2" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M8 7h8M8 11h8M8 15h5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg></span>Monthly Test Marks</button>
        <button class="nav-item" data-route="/admin/annocement"><span class="icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 11 16-7v16L3 13v-2Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 14 9 20M19 9h2M19 15h2" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg></span>Announcements<span class="badge-red"></span></button>
      </nav>

      <button class="settings-link"><span class="icon"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M19.4 15a1.8 1.8 0 0 0 .36 1.97l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.8 1.8 0 0 0 15 19.4a1.8 1.8 0 0 0-1.08 1.63V21a2 2 0 1 1-4 0v-.09A1.8 1.8 0 0 0 8.84 19.4a1.8 1.8 0 0 0-1.97.36l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.8 1.8 0 0 0 4.6 15a1.8 1.8 0 0 0-1.63-1.08H2.88a2 2 0 1 1 0-4h.09A1.8 1.8 0 0 0 4.6 8.84a1.8 1.8 0 0 0-.36-1.97l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.8 1.8 0 0 0 8.84 4.6a1.8 1.8 0 0 0 1.08-1.63V2.88a2 2 0 1 1 4 0v.09A1.8 1.8 0 0 0 15 4.6a1.8 1.8 0 0 0 1.97-.36l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.8 1.8 0 0 0 19.4 8.84a1.8 1.8 0 0 0 1.63 1.08h.09a2 2 0 1 1 0 4h-.09A1.8 1.8 0 0 0 19.4 15Z" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Settings</button>
        <button class="settings-link" data-route="/settings"><span class="icon"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M19.4 15a1.8 1.8 0 0 0 .36 1.97l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.8 1.8 0 0 0 15 19.4a1.8 1.8 0 0 0-1.08 1.63V21a2 2 0 1 1-4 0v-.09A1.8 1.8 0 0 0 8.84 19.4a1.8 1.8 0 0 0-1.97.36l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.8 1.8 0 0 0 4.6 15a1.8 1.8 0 0 0-1.63-1.08H2.88a2 2 0 1 1 0-4h.09A1.8 1.8 0 0 0 4.6 8.84a1.8 1.8 0 0 0-.36-1.97l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.8 1.8 0 0 0 8.84 4.6a1.8 1.8 0 0 0 1.08-1.63V2.88a2 2 0 1 1 4 0v.09A1.8 1.8 0 0 0 15 4.6a1.8 1.8 0 0 0 1.97-.36l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.8 1.8 0 0 0 19.4 8.84a1.8 1.8 0 0 0 1.63 1.08h.09a2 2 0 1 1 0 4h-.09A1.8 1.8 0 0 0 19.4 15Z" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Settings</button>
    </aside>

    <div class="main-panel">
      <header class="topbar">
        <div class="topbar-row-left">
          <button class="menu-button" aria-label="Open menu"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/></svg></button>
          <div device-widthclass="topbar-title">Academy Admin</div>
        </div>

        <div class="search-box"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="m20 20-4-4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg><span>Search...</span></div>

        <div class="topbar-actions">
          <button class="icon-button" aria-label="Notifications"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
          <button class="icon-button" aria-label="Profile"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9" cy="7" r="4" fill="none" stroke="currentColor" stroke-width="1.7"/></svg></button>
          <div class="avatar-mini" aria-label="User avatar"></div>
        </div>
      </header>

      <main class="page-content">
        <div class="page-header">
          <div>
            <h1>Student Attendance History</h1>
            <div class="breadcrumbs"><span>Attendance</span><span class="separator">&rsaquo;</span><span>Class 10-A</span><span class="separator">&rsaquo;</span><strong>Emma Watson</strong></div>
          </div>

          <button class="export-button"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v11" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="m7 19 5 5 5-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 19h16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>Export Report</button>
        </div>

        <section class="profile-card">
          <div class="profile-meta">
            <div class="student-avatar"></div>
            <div class="info-block">
              <h2>Emma Watson</h2>
              <div class="info-row">
                <span class="pill dark">Class: 10-A (Science)</span>
                <span class="pill">Roll No: 142</span>
                <span class="pill">ID: ST-2023-0142</span>
              </div>
            </div>
          </div>

          <div class="circular-progress" aria-label="Attendance percentage 92 percent">
            <svg viewBox="0 0 120 120" role="img" aria-hidden="true">
              <circle cx="60" cy="60" r="48" class="track"></circle>
              <circle cx="60" cy="60" r="48" class="progress" style="stroke-dasharray: 301.59; stroke-dashoffset: 24.13"></circle>
            </svg>
            <div class="progress-value">92%</div>
          </div>
        </section>

        <section class="stats-grid">
          <article class="stat-card"><div class="stat-icon success"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div><div class="stat-body"><span>Present Days</span><strong>142</strong></div></article>
          <article class="stat-card"><div class="stat-icon warning"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v9" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="17.5" r="1.25" fill="currentColor" stroke="none"/><path d="M12 20.5v.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></div><div class="stat-body"><span>Absent Days</span><strong>8</strong></div></article>
          <article class="stat-card"><div class="stat-icon neutral"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="8" width="16" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8 8V6a4 4 0 0 1 8 0v2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M9 12h6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></div><div class="stat-body"><span>Leave Days</span><strong>4</strong></div></article>
        </section>

        <section class="records-grid">
          <aside class="calendar-panel">
            <div class="calendar-header"><h3>October 2023</h3><div class="calendar-controls"><button type="button" aria-label="Previous month" disabled>&lsaquo;</button><button type="button" aria-label="Next month" disabled>&rsaquo;</button></div></div>
            <div class="calendar-weekdays"><span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span></div>
            <div class="calendar-days">
              <span class="muted">1</span><span class="muted">2</span><span class="muted">3</span><span class="muted">4</span><span class="muted">5</span><span class="muted">6</span><span class="muted">7</span><span class="muted">8</span><span class="muted">9</span><span class="muted">10</span><span class="muted">11</span><span class="muted">12</span><span class="muted">13</span><span class="muted">14</span><span class="muted">15</span><span class="muted">16</span><span class="muted">17</span><span class="muted">18</span><span class="muted">19</span><span>20</span><span>21</span><span>22</span><span>23</span><span>24</span><span>25</span><span>26</span><span>27</span><span>28</span><span>29</span><span>30</span><span>31</span>
            </div>
            <div class="legend"><div><span class="legend-dot present-dot"></span>Present</div><div><span class="legend-dot absent-dot"></span>Absent</div><div><span class="legend-dot leave-dot"></span>Holiday/Leave</div></div>
          </aside>

          <section class="history-panel">
            <div class="history-header"><h3>Detailed History</h3><span>Current Month</span></div>
            <div class="history-table">
              <div class="history-row header-row"><span>Date</span><span>Day</span><span>Status</span><span>Remarks</span></div>
              <div class="history-row"><span>23 Oct 2023</span><span>Monday</span><span class="status present">Present</span><span>-</span></div>
              <div class="history-row"><span>20 Oct 2023</span><span>Friday</span><span class="status present">Present</span><span>-</span></div>
              <div class="history-row"><span>19 Oct 2023</span><span>Thursday</span><span class="status present">Present</span><span>-</span></div>
              <div class="history-row warning-row"><span>12 Oct 2023</span><span>Thursday</span><span class="status absent">Absent</span><span>Medical reason (Unexcused)</span></div>
              <div class="history-row"><span>07 Oct 2023</span><span>Saturday</span><span class="status holiday">Holiday</span><span>Weekend</span></div>
              <div class="history-row"><span>08 Oct 2023</span><span>Sunday</span><span class="status holiday">Holiday</span><span>Weekend</span></div>
            </div>
          </section>
        </section>
      </main>
    </div>
  </div>
`;

const loginScreen = document.querySelector('.login-screen');
const dashboardApp = document.querySelector('.dashboard-app');
const loginForm = document.querySelector('#login-form');
const passwordToggle = document.querySelector('.password-toggle');
const loginStatus = document.querySelector('.login-status');
const roleButtons = [...loginForm.querySelectorAll('.role-tabs button')];
let selectedRole = 'Admin';

dashboardApp.hidden = true;
roleButtons.forEach((button) => {
  button.addEventListener('click', () => {
    selectedRole = button.textContent.trim();
    roleButtons.forEach((roleButton) => {
      const isSelected = roleButton === button;
      roleButton.classList.toggle('active', isSelected);
      roleButton.setAttribute('aria-selected', String(isSelected));
    });
  });
});
const destinationForRole = (role) => ({ admin: '/admin/attendance', teacher: '/admin/staff', staff: '/admin/staff' }[role] || '/admin/attendance');

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const submitButton = loginForm.querySelector('.login-submit');
  const email = loginForm.elements.username.value.trim();
  const password = loginForm.elements.password.value;

  if (!isSupabaseConfigured) {
    loginStatus.textContent = 'Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to .env.';
    loginStatus.className = 'login-status error';
    return;
  }

  submitButton.disabled = true;
  loginStatus.textContent = 'Signing in...';
  loginStatus.className = 'login-status';
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {
    loginStatus.textContent = error.message;
    loginStatus.className = 'login-status error';
    submitButton.disabled = false;
    return;
  }

  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', data.user.id)
    .single();
  if (profileError) {
    loginStatus.textContent = 'Signed in, but your profile could not be loaded.';
    loginStatus.className = 'login-status error';
    submitButton.disabled = false;
    return;
  }

  selectedRole = profile.role;
  loginScreen.hidden = true;
  dashboardApp.hidden = false;
  renderRoute(destinationForRole(profile.role));
  submitButton.disabled = false;
});
passwordToggle.addEventListener('click', () => {
  const password = loginForm.elements.password;
  const isVisible = password.type === 'text';
  password.type = isVisible ? 'password' : 'text';
  passwordToggle.setAttribute('aria-label', isVisible ? 'Show password' : 'Hide password');
});

const sidebar = document.querySelector('.sidebar');
const menuButton = document.querySelector('.menu-button');
const navItems = document.querySelectorAll('.nav-item');
const registrationButton = document.querySelector('.primary-action');
const settingsButton = document.querySelector('.settings-link[data-route="/settings"]');
const loginNavButton = document.querySelector('.login-nav');
const pageContent = document.querySelector('.page-content');
const attendanceMarkup = pageContent.innerHTML;
let staffProfile = {
  name: 'Dr. Robert Wilson', role: 'Senidevice-widthor Mathematics Teacher', id: 'EMP-2023-0042',
  birthDate: '15 May 1980', gender: 'Male', phone: '+1 (555) 123-4567',
  email: 'r.wilson@academypro.edu', address: '42 Education Lane, Academic City, AC 12345',
  emergencyContact: 'Sarah Wilson · Wife · +1 (555) 987-6543', subjects: ['Math', 'Calculus'],
  qualification: 'PhD in Applied Mathematics', experience: '12 years', joiningDate: '01 Sep 2011', employmentType: 'Full-time',
};

const escapeHtml = (value) => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

function staffMarkup() {
  const subjectChips = staffProfile.subjects.map((subject) => `<span>${escapeHtml(subject)}</span>`).join('');
  return `
    <div class="staff-profile-page">
      <div class="staff-profile-heading"><h1>Staff Profile</h1><div class="staff-heading-actions"><button class="add-staff-button" type="button">+ Add Staff Member</button><button class="edit-profile-button" type="button">&#9998; Edit Profile</button></div></div>
      <div class="staff-profile-grid">
        <div class="staff-left-column">
          <article class="staff-summary-card"><div class="staff-photo"></div><h2>${escapeHtml(staffProfile.name)}</h2><p>${escapeHtml(staffProfile.role)}</p><div class="staff-summary-meta"><span>ID: ${escapeHtml(staffProfile.id)}</span><b>● Active</b></div></article>
          <article class="staff-panel staff-personal-card"><h2>Personal Details</h2><dl><div><dt>Date of Birth</dt><dd>${escapeHtml(staffProfile.birthDate)}</dd></div><div><dt>Gender</dt><dd>${escapeHtml(staffProfile.gender)}</dd></div><div><dt>Contact Number</dt><dd>${escapeHtml(staffProfile.phone)}</dd></div><div><dt>Email</dt><dd>${escapeHtml(staffProfile.email)}</dd></div><div><dt>Address</dt><dd>${escapeHtml(staffProfile.address)}</dd></div><div><dt>Emergency Contact</dt><dd>${escapeHtml(staffProfile.emergencyContact)}</dd></div></dl></article>
        </div>
        <div class="staff-right-column">
          <article class="staff-panel professional-panel"><h2>Professional Details</h2><div class="professional-grid"><div><dt>Subject(s) Taught</dt><dd>${subjectChips}</dd></div><div><dt>Qualification</dt><dd>${escapeHtml(staffProfile.qualification)}</dd></div><div><dt>Experience</dt><dd>${escapeHtml(staffProfile.experience)}</dd></div><div><dt>Joining Date</dt><dd>${escapeHtml(staffProfile.joiningDate)}</dd></div><div><dt>Employment Type</dt><dd>${escapeHtml(staffProfile.employmentType)}</dd></div></div></article>
          <article class="staff-panel classes-panel"><div class="staff-panel-heading"><h2>Assigned Classes</h2><button type="button" class="add-assignment-button">+ Add Assignment</button></div><div class="class-table"><div class="class-table-row class-table-header"><span>CLASS</span><span>SUBJECT</span><span>SCHEDULE</span><span>ACTIONS</span></div><div class="class-table-row"><span>10-A</span><span>Math</span><span>Mon, Wed, Fri (09:00 AM)</span><button type="button" aria-label="Remove class">&#128465;</button></div><div class="class-table-row"><span>11-B</span><span>Calculus</span><span>Tue, Thu (11:00 AM)</span><button type="button" aria-label="Remove class">&#128465;</button></div></div></article>
          <article class="staff-panel staff-documents-panel"><div class="staff-panel-heading"><h2>Documents</h2><div class="document-upload-actions"><button type="button" class="upload-button">&#8593; Upload New Document</button><span class="upload-status" aria-live="polite"></span></div></div><input class="staff-document-input" type="file" accept=".pdf,.jpg,.jpeg,.png,.doc,.docx" hidden><div class="staff-document-grid"><button type="button"><b>&#128196;</b><strong>ID Proof</strong><small>PDF · 1.2 MB</small></button><button type="button"><b>&#128196;</b><strong>Resume</strong><small>PDF · 2.5 MB</small></button><button type="button"><b>&#127891;</b><strong>PhD Certificate</strong><small>JPEG · 4.1 MB</small></button></div></article>
        </div>
      </div>
      <div class="staff-modal" hidden><div class="staff-modal-card" role="dialog" aria-modal="true" aria-labelledby="add-staff-title"><div class="modal-heading"><div><span class="eyebrow">New team member</span><h2 id="add-staff-title">Add Staff Member</h2></div><button type="button" class="close-staff-modal" aria-label="Close">×</button></div><form class="staff-form"><div class="staff-form-grid"><label>Full Name<input name="name" required placeholder="e.g. Dr. Sarah Jenkins"></label><label>Job Title<input name="role" required placeholder="e.g. Science Teacher"></label><label>Email Address<input name="email" type="email" required placeholder="staff@academy.edu"></label><label>Contact Number<input name="phone" type="tel" required placeholder="+1 (555) 000-0000"></label><label>Subject(s) Taught<input name="subjects" required placeholder="e.g. Biology, Chemistry"></label><label>Qualification<input name="qualification" required placeholder="e.g. MSc in Biology"></label><label>Joining Date<input name="joiningDate" type="date" required></label><label>Employment Type<select name="employmentType"><option>Full-time</option><option>Part-time</option><option>Contract</option></select></label></div><div class="staff-form-actions"><button type="button" class="cancel-staff">Cancel</button><button type="submit" class="save-staff">Add Staff Member</button></div></form></div></div>
    </div>
  `;
}

const routeMarkup = {
  '/registration': `
    <div class="registration-page">
      <div class="page-header registration-heading"><div><h1>New Registration</h1><p>Register a new student in the academy system.</p></div></div>
      <form class="registration-form">
        <section class="registration-panel"><h2>Student Information</h2><div class="registration-fields"><label>First Name<input name="firstName" type="text" placeholder="Enter first name" required></label><label>Last Name<input name="lastName" type="text" placeholder="Enter last name" required></label><label>Date of Birth<input name="birthDate" type="date" required></label><label>Gender<select name="gender"><option>Female</option><option>Male</option><option>Other</option></select></label><label>Class / Section<select name="class"><option>Grade 10 - Section A</option><option>Grade 10 - Section B</option><option>Grade 12 - Science</option></select></label><label>Admission Date<input name="admissionDate" type="date" required></label></div></section>
        <section class="registration-panel"><h2>Contact Information</h2><div class="registration-fields"><label>Email Address<input name="email" type="email" placeholder="student@example.com" required></label><label>Contact Number<input name="phone" type="tel" placeholder="+1 (555) 000-0000" required></label><label class="registration-wide">Residential Address<textarea name="address" placeholder="Enter residential address" required></textarea></label></div></section>
        <section class="registration-panel"><h2>Parent / Guardian</h2><div class="registration-fields"><label>Guardian Name<input name="guardian" type="text" placeholder="Enter guardian name" required></label><label>Guardian Contact<input name="guardianPhone" type="tel" placeholder="+1 (555) 000-0000" required></label><label>Relationship<select name="relationship"><option>Parent</option><option>Guardian</option><option>Other</option></select></label></div></section>
        <div class="registration-actions"><button type="button" class="cancel-registration" data-route="/dashboard">Cancel</button><button type="submit" class="save-registration">Create Registration</button></div>
      </form>
    </div>
  `,
  '/settings': `
    <div class="settings-page">
      <div class="page-header settings-heading"><div><h1>Settings</h1><p>Manage your academy preferences and account settings.</p></div></div>
      <section class="settings-grid">
        <article class="settings-panel"><h2>General Settings</h2><label>Academy Name<input type="text" value="Academy Management System"></label><label>Language<select><option>English</option><option>Spanish</option></select></label><label>Time Zone<select><option>UTC -05:00 Eastern Time</option><option>UTC +00:00 London</option></select></label><button type="button" class="save-settings">Save Changes</button></article>
        <article class="settings-panel"><h2>Notifications</h2><label class="setting-toggle"><span><strong>Email Notifications</strong><small>Receive updates by email</small></span><input type="checkbox" checked></label><label class="setting-toggle"><span><strong>Attendance Alerts</strong><small>Get notified about attendance changes</small></span><input type="checkbox" checked></label><label class="setting-toggle"><span><strong>Fee Reminders</strong><small>Receive payment reminders</small></span><input type="checkbox"></label></article>
        <article class="settings-panel"><h2>Account</h2><div class="account-details"><strong>Admin User</strong><span>admin@academy.edu</span></div><button type="button" class="change-password">Change Password</button></article>
      </section>
    </div>
  `,
  '/attendance': attendanceMarkup,
  '/admin/annocement': `
    <div class="announcements-page">
      <div class="page-header announcements-heading">
        <div><h1>Announcements</h1><p>Keep students, staff, and families up to date.</p></div>
        <button type="button" class="post-announcement-button"><span>+</span> Post Announcement</button>
      </div>
      <section class="announcement-list" aria-label="School announcements">
        <article class="announcement-card urgent"><div class="announcement-meta"><span class="announcement-icon">!</span><span>Oct 24, 2023</span><span class="audience-tag">All Students</span></div><h2>Annual Sports Day 2024</h2><p>Get ready for the most exciting event of the year! The Annual Sports Day is scheduled for next month. All students are encouraged to participate in various track and field events. Please register with your class teacher.</p><button type="button" class="read-more">Read Full Announcement <span>→</span></button></article>
        <article class="announcement-card highlighted"><div class="announcement-meta"><span class="announcement-icon">i</span><span>Oct 23, 2023</span><span class="audience-tag">Students</span></div><h2>Important: Mid-Term Exam Schedule</h2><p>The finalized mid-term examination schedule for all grades has been published. Please make sure to download and review your schedule carefully.</p><div class="announcement-attachment"><span>▤</span><strong>picture_as_pdf Exam_Schedule_Fall2023.pdf</strong><button type="button" aria-label="Download exam schedule">↓</button></div></article>
        <article class="announcement-card"><div class="announcement-meta"><span class="announcement-icon muted-icon">i</span><span>Oct 22, 2023</span></div><h2>Staff Meeting - Friday</h2><p>A reminder that we have our monthly staff meeting this Friday at 3:30 PM in the main conference room. The agenda includes discussions on the upcoming curriculum changes and faculty updates.</p></article>
      </section>
      <button type="button" class="load-announcements">Load More Announcements</button>
      <div class="announcement-modal" hidden><div class="announcement-modal-card" role="dialog" aria-modal="true" aria-labelledby="compose-title"><div class="modal-heading"><div><span class="eyebrow">New message</span><h2 id="compose-title">Post Announcement</h2></div><button type="button" class="close-modal" aria-label="Close">×</button></div><form class="announcement-form"><label>Title<input name="title" required placeholder="Announcement title"></label><label>Audience<select name="audience"><option>All Students</option><option>Students</option><option>Staff</option></select></label><label>Message<textarea name="message" required placeholder="Write your announcement..."></textarea></label><div class="announcement-form-actions"><button type="button" class="cancel-announcement">Cancel</button><button type="submit" class="post-announcement-button">Publish Announcement</button></div></form></div></div>
    </div>
  `,
  '/admin/studentperformance': `
    <div class="performance-page">
      <div class="performance-heading"><div><h1>Student Performance</h1><p>See how each subject is going.</p></div><div class="performance-filters"><label>Student<select aria-label="Select student"><option>Sarah Jenkins (ID: 1042)</option></select></label><label>Term<select aria-label="Select term"><option>Term 2 (2023-2024)</option></select></label><button type="button" class="edit-scores-button">Edit Scores</button></div></div>
      <section class="performance-summary" aria-label="Performance summary"><article class="performance-score-card"><span>Overall score</span><strong>85%</strong><small>Good progress</small></article><article class="performance-summary-card"><span>Overall grade</span><strong class="overall-grade">A+</strong><small>Excellent result</small></article><article class="performance-summary-card"><span>Class position</span><strong>2nd <small>/ 140</small></strong><small>Top of the class</small></article></section>
      <section class="performance-panel subject-chart simple-subject-panel"><div class="performance-panel-title"><div><h2>Subject Scores</h2><p>Higher bars mean higher marks.</p></div><span>Term 2</span></div><div class="simple-subject-list"><div class="simple-subject-row"><strong>Mathematics</strong><i style="width: 78%" data-label="Mathematics"></i><b>78%</b></div><div class="simple-subject-row"><strong>Physics</strong><i style="width: 66%" data-label="Physics"></i><b>66%</b></div><div class="simple-subject-row"><strong>Chemistry</strong><i style="width: 72%" data-label="Chemistry"></i><b>72%</b></div><div class="simple-subject-row"><strong>English</strong><i style="width: 59%" data-label="English"></i><b>59%</b></div><div class="simple-subject-row"><strong>History</strong><i style="width: 69%" data-label="History"></i><b>69%</b></div></div></section>
    </div>
  `,
  '/admin/staff': staffMarkup(), /* staff page is regenerated after a new member is added */
  /*
    <div class="staff-profile-page">
      <div class="staff-profile-heading"><h1>Staff Profile</h1><button class="edit-profile-button" type="button">&#9998; Edit Profile</button></div>
      <div class="staff-profile-grid">
        <div class="staff-left-column">
          <article class="staff-summary-card"><div class="staff-photo"></div><h2>Dr. Robert Wilson</h2><p>Senior Mathematics Teacher</p><div class="staff-summary-meta"><span>ID: EMP-2023-0042</span><b>● Active</b></div></article>
          <article class="staff-panel staff-personal-card"><h2>Personal Details</h2><dl><div><dt>Date of Birth</dt><dd>15 May 1980</dd></div><div><dt>Gender</dt><dd>Male</dd></div><div><dt>Contact Number</dt><dd>+1 (555) 123-4567</dd></div><div><dt>Email</dt><dd>r.wilson@academypro.edu</dd></div><div><dt>Address</dt><dd>42 Education Lane, Academic City,<br>AC 12345</dd></div><div><dt>Emergency Contact</dt><dd>Sarah Wilson · Wife · +1 (555) 987-6543</dd></div></dl></article>
        </div>
        <div class="staff-right-column">
          <article class="staff-panel professional-panel"><h2>Professional Details</h2><div class="professional-grid"><div><dt>Subject(s) Taught</dt><dd><span>Math</span><span>Calculus</span></dd></div><div><dt>Qualification</dt><dd>PhD in Applied Mathematics</dd></div><div><dt>Experience</dt><dd>12 years</dd></div><div><dt>Joining Date</dt><dd>01 Sep 2011</dd></div><div><dt>Employment Type</dt><dd>Full-time</dd></div></div></article>
          <article class="staff-panel classes-panel"><div class="staff-panel-heading"><h2>Assigned Classes</h2><button type="button">+ Add Assignment</button></div><div class="class-table"><div class="class-table-row class-table-header"><span>CLASS</span><span>SUBJECT</span><span>SCHEDULE</span><span>ACTIONS</span></div><div class="class-table-row"><span>10-A</span><span>Math</span><span>Mon, Wed, Fri (09:00 AM)</span><button type="button" aria-label="Remove class">&#128465;</button></div><div class="class-table-row"><span>11-B</span><span>Calculus</span><span>Tue, Thu (11:00 AM)</span><button type="button" aria-label="Remove class">&#128465;</button></div></div></article>
          <article class="staff-panel staff-documents-panel"><div class="staff-panel-heading"><h2>Documents</h2><button type="button" class="upload-button">&#8593; Upload New Document</button></div><div class="staff-document-grid"><button type="button"><b>&#128196;</b><strong>ID Proof</strong><small>PDF · 1.2 MB</small></button><button type="button"><b>&#128196;</b><strong>Resume</strong><small>PDF · 2.5 MB</small></button><button type="button"><b>&#127891;</b><strong>PhD Certificate</strong><small>JPEG · 4.1 MB</small></button></div></article>
        </div>
      </div>
    </div>
  `, */
  '/admin/student': `
    <div class="student-profile-page">
      <div class="student-profile-heading"><div><button class="back-button" type="button" aria-label="Back to students">&#8592;</button><h1>Student Profile</h1></div><button class="edit-profile-button" type="button">&#9998; Edit Profile</button></div>
      <section class="student-overview-grid"><article class="student-identity-card"><div class="profile-photo"></div><div><div class="student-name-row"><h2>Emma Watson</h2><span>Active</span></div><p>&#9632; Class 10 - Section A</p><p>&#9643; Roll: #1024</p></div></article></section>
      <section class="student-info-grid"><article class="student-detail-card"><div class="profile-card-heading"><h2>Personal Details</h2><button type="button" aria-label="Edit personal details">&#9998;</button></div><div class="details-list"><div><small>Date of Birth</small><span>15 Aug 2008</span></div><div><small>Gender</small><span>Female</span></div><div><small>Blood Group</small><span>O+</span></div><div><small>Contact Number</small><span>+1 (555) 123-4567</span></div><div><small>Email Address</small><span>emma.w@academypro.edu</span></div><div class="wide-detail"><small>Residential Address</small><span>123 Education Lane, Apt 4B, Knowledge City, NY 10001</span></div></div></article><article class="student-detail-card guardian-card"><div class="profile-card-heading"><h2>Parent / Guardian</h2><button type="button" aria-label="Edit parent details">&#9998;</button></div><div class="guardian-list"><div><b>&#128100;</b><p><strong>Robert Watson</strong><span>Father · +1 (555) 987-6543</span><span>robert.w@email.com</span></p><i>&#9993;</i></div><div><b>&#128100;</b><p><strong>Sarah Watson</strong><span>Mother · +1 (555) 987-6544</span><span>sarah.w@email.com</span></p><i>&#9993;</i></div></div></article></section>
      <section class="documents-card"><div class="profile-card-heading"><h2>Documents</h2><button class="upload-button upload-student-document" type="button">&#8593; Upload New Document</button></div><input class="student-document-input" type="file" accept=".pdf,.jpg,.jpeg,.png,.doc,.docx" hidden><div class="document-list"><article><b>&#128196;</b><p><strong>ID Proof (Passport)</strong><span>Added: 10 Sep 2023 · 2.4 MB</span></p><button type="button" aria-label="Download passport">&#8595;</button><button type="button" aria-label="View passport">&#9678;</button></article><article><b>&#128196;</b><p><strong>Previous Records</strong><span>Added: 10 Sep 2023 · 1.1 MB</span></p><button type="button" aria-label="Download records">&#8595;</button><button type="button" aria-label="View records">&#9678;</button></article><article class="add-document"><b>+</b><span>Add Document</span></article></div></section>
    </div>
  `,
  '/student/diary': `
    <div class="student-diary-page">
      <div class="student-diary-header">
        <h1>Daily Diary</h1>
        <div class="week-switcher"><button type="button" aria-label="Previous week">&#8249;</button><span>&#128197; This Week</span><button type="button" aria-label="Next week">&#8250;</button></div>
      </div>
      <div class="student-mobile-days" aria-label="Select diary day"><button type="button"><small>MON</small><strong>12</strong></button><button type="button"><small>TUE</small><strong>13</strong></button><button type="button" class="active"><small>WED</small><strong>14</strong></button><button type="button"><small>THU</small><strong>15</strong></button><button type="button"><small>FRI</small><strong>16</strong></button></div>
      <section class="student-diary-day"><h2>Monday, Oct 23</h2><article class="student-entry"><div class="student-entry-meta"><span class="student-subject math">Mathematics</span><span>Posted at 2:15 PM</span><i></i></div><p>Complete exercises 4.1 to 4.5 on page 112. Focus on the algebraic expressions covered in today&apos;s lesson. We will review the answers first thing tomorrow.</p><div class="student-attachment">&#128206; Algebra_Worksheet_Ch4.pdf <button type="button" aria-label="Download algebra worksheet">&#8595;</button></div></article><article class="student-entry"><div class="student-entry-meta"><span class="student-subject science">Science</span><span>Posted at 11:30 AM</span></div><p>Reminder: The plant biology project is due this Friday. Please ensure you bring your observation journals to class for the final check.</p></article><article class="student-entry"><div class="student-entry-meta"><span class="student-subject history">History</span><span>Posted at 9:00 AM</span></div><p>Read Chapter 5 regarding the Industrial Revolution. Take notes on the key technological advancements discussed in section 2.</p></article></section>
      <section class="student-diary-day"><h2>Friday, Oct 20</h2><article class="student-entry"><div class="student-entry-meta"><span class="student-subject english">English Lit.</span><span>Posted at 3:45 PM</span></div><p>Finish reading Act 2 of Macbeth over the weekend. Be prepared for a short quiz on Monday covering the main themes and character motivations.</p><div class="student-attachment">&#128206; Macbeth_Study-Guide.pdf <button type="button" aria-label="Download Macbeth study guide">&#8595;</button></div></article></section>
      <p class="student-week-note">You&apos;re caught up for the week.</p>
      <nav class="student-mobile-nav" aria-label="Student navigation"><button type="button"><span>&#9638;</span>Dashboard</button><button type="button" class="active"><span>&#128196;</span>Diary</button><button type="button" data-route="/student/schedule"><span>&#128197;</span>Schedule</button><button type="button"><span>&#9881;</span>Settings</button></nav>
    </div>
  `,
  '/student/schedule': `
    <div class="student-schedule-page">
      <div class="student-schedule-header"><div><span class="student-page-kicker">MY CLASS</span><h1>Weekly Schedule</h1><p>Grade 10 - Section A</p></div><span class="student-schedule-status">Published schedule</span></div>
      <section class="student-schedule-panel" aria-label="My weekly class schedule">
        <div class="simple-schedule-scroll"><div class="student-schedule-grid"><div class="schedule-label">Time</div><div>Monday</div><div>Tuesday</div><div>Wednesday</div><div>Thursday</div><div>Friday</div><div class="schedule-time">8:00 - 8:45</div><div class="student-lesson filled" data-day="Monday" data-time="8:00 - 8:45"><strong>Mathematics</strong><small>Mr. Smith</small></div><div class="student-lesson" data-day="Tuesday" data-time="8:00 - 8:45">No lesson</div><div class="student-lesson" data-day="Wednesday" data-time="8:00 - 8:45">No lesson</div><div class="student-lesson filled" data-day="Thursday" data-time="8:00 - 8:45"><strong>Physics</strong><small>Mr. Doe</small></div><div class="student-lesson" data-day="Friday" data-time="8:00 - 8:45">No lesson</div><div class="schedule-time">8:45 - 9:30</div><div class="student-lesson" data-day="Monday" data-time="8:45 - 9:30">No lesson</div><div class="student-lesson filled" data-day="Tuesday" data-time="8:45 - 9:30"><strong>English</strong><small>Ms. Green</small></div><div class="student-lesson" data-day="Wednesday" data-time="8:45 - 9:30">No lesson</div><div class="student-lesson" data-day="Thursday" data-time="8:45 - 9:30">No lesson</div><div class="student-lesson filled" data-day="Friday" data-time="8:45 - 9:30"><strong>History</strong><small>Ms. Lee</small></div></div></div>
        <p class="student-schedule-help">Your schedule is updated by the academy administrator.</p>
      </section>
    </div>
  `,
  '/dashboard/diary': `
    <div class="diary-page">
      <div class="diary-toolbar">
        <label class="diary-select-label">Class<select aria-label="Select class"><option>Grade 10A</option><option>Grade 10B</option><option>Grade 12 Science</option></select></label>
        <label class="diary-date-label"><input type="date" value="2023-10-24" aria-label="Diary date"></label>
      </div>
      <section class="diary-composer">
        <div class="diary-section-heading"><h1>Add Diary Entry</h1><span>Today</span></div>
        <form class="diary-form">
          <label>Subject<select name="subject"><option>Mathematics</option><option>Science</option><option>English Literature</option><option>History</option></select></label>
          <label>Homework / Notes<textarea name="notes" placeholder="Enter homework details or daily notes here..."></textarea></label>
          <div class="diary-form-actions"><button type="button" class="attachment-button">&#128206; Add Attachment</button><button type="submit" class="post-entry-button">Post Entry</button></div>
        </form>
      </section>
      <section class="diary-entries">
        <div class="diary-section-heading entries-heading"><h2>Entries for Today</h2><span>2 Entries</span></div>
        <article class="diary-entry mathematics-entry"><div class="entry-meta"><span class="subject-chip">Mathematics</span><span>Posted 9:45 AM</span></div><p>Complete exercises 1-15 on page 42 (Algebraic Fractions). Ensure all steps are shown clearly. Preparation for tomorrow&apos;s quiz.</p><div class="attachment-row"><span>&#128196; Algebra_Worksheet_Ch4.pdf <small>1.2 MB</small></span><button type="button" aria-label="Download Algebra worksheet">&#8595;</button></div></article>
        <article class="diary-entry physics-entry"><div class="entry-meta"><span class="subject-chip">Physics</span><span>Posted 11:20 AM</span></div><p>Read chapter 5 on Thermodynamics. We will be conducting the lab experiment on thermal expansion during tomorrow&apos;s block period. No written homework.</p></article>
      </section>
      <section class="diary-mobile-list" aria-label="Diary entries on mobile">
        <article class="mobile-diary-entry mathematics-entry"><div class="mobile-entry-top"><span class="subject-chip">MATHEMATICS</span><div><button type="button" aria-label="Edit mathematics entry">&#9998;</button><button type="button" aria-label="Delete mathematics entry">&#128465;</button></div></div><strong>Homework Details</strong><p>Complete exercises 1-15 on page 42. Focus on explaining equations and show all working steps. Review chapter summary before starting.</p></article>
        <article class="mobile-diary-entry science-entry"><div class="mobile-entry-top"><span class="subject-chip">SCIENCE</span><div><button type="button" aria-label="Edit science entry">&#9998;</button><button type="button" aria-label="Delete science entry">&#128465;</button></div></div><strong>Homework Details</strong><p>Read chapter on Cellular Respiration. Prepare for a short quiz tomorrow morning. Bring lab coats for the practical session.</p></article>
        <article class="mobile-diary-entry english-entry"><div class="mobile-entry-top"><span class="subject-chip">ENGLISH LITERATURE</span><div><button type="button" aria-label="Edit English entry">&#9998;</button><button type="button" aria-label="Delete English entry">&#128465;</button></div></div><strong>Homework Details</strong><p>Write a 500-word essay analyzing the main character&apos;s motivation in Act 1. Submit via student portal by 8:00 PM tonight.</p></article>
        <button type="button" class="diary-floating-add" aria-label="Add diary entry">+</button>
      </section>
    </div>
  `,
  '/dashboard': `
    <div class="dashboard-page">
      <div class="page-header dashboard-heading">
        <div><h1>Dashboard Overview</h1><p>Welcome back. Here&apos;s today&apos;s summary.</p></div>
      </div>
      <section class="dashboard-stats" aria-label="School summary">
        <article class="dashboard-stat"><span class="dashboard-stat-label">Total Students</span><strong>1,240</strong><small>↑ 2% this month</small><span class="dashboard-stat-icon">⌂</span></article>
        <article class="dashboard-stat"><span class="dashboard-stat-label">Total Staff</span><strong>86</strong><small>Active personnel</small><span class="dashboard-stat-icon">♙</span></article>
        <article class="dashboard-stat"><span class="dashboard-stat-label">Today&apos;s Attendance</span><strong>94%</strong><small class="stat-progress"><i></i></small><span class="dashboard-stat-icon">♧</span></article>
        <article class="dashboard-stat fees-stat"><span class="dashboard-stat-label">Fees Due</span><strong>$12,500</strong><small>△ 45 students pending</small><span class="dashboard-stat-icon">▣</span></article>
        <article class="dashboard-stat event-stat"><span class="dashboard-stat-label">Upcoming Events</span><strong>4</strong><small>Next: Science Fair</small><span class="dashboard-stat-icon">□</span></article>
      </section>
      <section class="dashboard-content-grid">
        <section class="quick-actions-panel dashboard-panel">
          <div class="dashboard-panel-header"><h2>Quick Actions</h2></div>
          <div class="quick-actions-grid">
            <button class="quick-action" data-route="/admin/attendance"><span>♙</span>Attendance</button>
            <button class="quick-action" data-route="/schedule"><span>□</span>Schedule</button>
            <button class="quick-action" data-route="/dashboard/diary"><span>▤</span>Daily Diary</button>
            <button class="quick-action" data-route="/admin/student"><span>⌂</span>Students</button>
            <button class="quick-action" data-route="/admin/staff"><span>♧</span>Staff</button>
            <button class="quick-action" data-route="/admin/studentperformance"><span>▤</span>Monthly Test Marks</button>
            <button class="quick-action announcement-action" data-route="/admin/annocement"><span>⚑</span>Announcements<i></i></button>
          </div>
        </section>
      </section>
      <section class="upcoming-event-card">
        <span class="event-calendar">□</span><div><small>UPCOMING EVENT</small><strong>Annual Science Fair Exhibition</strong></div><button type="button">View Details</button>
      </section>
    </div>
  `,
  '_fees-removed': `
    <div class="fees-page">
      <div class="page-header fees-heading">
        <div><h1>Fees Management</h1><p>Overview and administration of institutional finances.</p></div>
        <div class="fees-heading-actions"><select aria-label="Filter by class"><option>All Classes</option><option>Grade 10</option><option>Grade 12</option></select><button type="button" class="add-fee-button">+ Add Fee Structure</button></div>
      </div>
      <section class="fees-stats" aria-label="Fee summary">
        <article class="fee-summary-card"><small>Total Collected</small><strong>$124,500</strong><span>↑ 12% from last term</span><i>▣</i></article>
        <article class="fee-summary-card"><small>Total Due</small><strong>$45,200</strong><span>Across 142 students</span><i>▣</i></article>
        <article class="fee-summary-card"><small>Students Pending</small><strong>142</strong><span>Requires immediate follow-up</span><i>△</i></article>
      </section>
      <section class="fees-workspace">
        <section class="record-payment fees-panel">
          <div class="fees-panel-header"><h2>Record Payment</h2><button type="button">Batch Process</button></div>
          <div class="payment-form">
            <label>Student Search<input type="search" placeholder="Name or ID..." aria-label="Student search"></label>
            <label>Amount<input type="text" value="$ 0.00" aria-label="Payment amount"></label>
            <label>Date<input type="text" placeholder="dd/mm/yyyy" aria-label="Payment date"></label>
            <label>Mode<select aria-label="Payment mode"><option>Cash</option><option>Card</option><option>Online</option></select></label>
            <label>Ref ID (Optional)<input type="text" placeholder="TXN-..." aria-label="Reference ID"></label>
            <button type="button" class="receipt-button">Generate Receipt</button>
          </div>
        </section>
        <section class="recent-payments fees-panel">
          <div class="fees-panel-header"><h2>Recent Payments</h2></div>
          <div class="payment-list"><div><strong>Alex Mercer</strong><small>#ST-2021</small><span>$500<br>Card</span><b>Success</b></div><div><strong>Jamie Chen</strong><small>#ST-2098</small><span>$250<br>Online</span><b>Success</b></div><div><strong>Sam Rivera</strong><small>#ST-3012</small><span>$1,200<br>Cheque</span><b class="pending">Pending</b></div></div>
        </section>
        <section class="structures-panel fees-panel">
          <div class="fees-panel-header"><h2>Structures</h2><button type="button">≡</button></div>
          <div class="structure-list"><div><strong>Tuition</strong><small>Term 1 (Class 10)</small><span>$1,500</span><button type="button">✎</button></div><div><strong>Lab Fee</strong><small>Annual (Science)</small><span>$300</span><button type="button">✎</button></div><div><strong>Transport</strong><small>Monthly (Zone A)</small><span>$150</span><button type="button">✎</button></div></div>
          <button type="button" class="view-structures">View All Structures</button>
        </section>
      </section>
      <section class="student-fee-status fees-panel">
        <div class="fees-panel-header"><h2>Student Fee Status</h2><div><input id="fee-student-filter" type="search" placeholder="Filter table..." aria-label="Filter student fee table"><button type="button">⇩ Export</button></div></div>
        <div class="fee-table"><div class="fee-table-row fee-table-header"><span>Student Name</span><span>Class/Section</span><span>Total Fee</span><span>Paid Amount</span><span>Due Balance</span><span>Status</span></div><div class="fee-table-row"><span><b class="student-initial">EW</b>Emma Watson</span><span>10 - A</span><span>$2,500</span><span>$2,500</span><span>$0</span><span class="fee-status paid">● Paid</span></div><div class="fee-table-row"><span><b class="student-initial">LG</b>Lucas Gray</span><span>12 - Science</span><span>$3,200</span><span>$1,500</span><span class="balance-due">$1,700</span><span class="fee-status due">● Due</span></div></div>
      </section>
      <section class="mobile-fee-list" aria-label="Mobile student fee status">
        <label class="mobile-fee-search"><input type="search" placeholder="Search student or invoice..." aria-label="Search student or invoice"></label><button type="button" class="mobile-filter">≡ Filter</button>
        <article class="mobile-fee-card"><b class="student-initial">JD</b><div><strong>Jane Doe</strong><small>Grade 10A · INV-2023-001</small><em class="fee-status pending">Pending</em><span>Term 2 Tuition <strong>$1,200.00</strong></span><small>Due: Oct 15</small></div></article>
        <article class="mobile-fee-card"><b class="student-initial">MS</b><div><strong>Michael Smith</strong><small>Grade 8B · INV-2023-042</small><em class="fee-status paid">Collected</em><span>Annual Lab Fee <strong>$450.00</strong></span><small>Paid: Oct 02</small></div></article>
        <article class="mobile-fee-card overdue"><b class="student-initial">AL</b><div><strong>Alex Lee</strong><small>Grade 11 Tuition Balance</small><em class="fee-status due">Overdue</em><span>Term 1 Tuition Balance <strong>$800.00</strong></span><small class="balance-due">3 days overdue</small></div></article>
        <button type="button" class="mobile-add-payment" aria-label="Add payment">+</button>
      </section>
    </div>
  `,
  '/schedule': `
    <div class="schedule-page">
      <div class="page-header schedule-heading">
        <div><h1>Weekly Schedule</h1><p>Add lessons for each class and day.</p></div>
        <div class="simple-schedule-actions"><label>Class<select class="schedule-class" aria-label="Select class"><option>Grade 10 - Section A</option><option>Grade 12 - Science</option></select></label><button type="button" class="add-schedule-button">+ New Schedule</button><button type="button" class="save-schedule">Save Schedule</button></div>
      </div>
      <section class="simple-schedule-panel" aria-label="Weekly class schedule">
        <div class="simple-schedule-scroll"><div class="simple-schedule-grid"><div class="schedule-label">Time</div><div>Monday</div><div>Tuesday</div><div>Wednesday</div><div>Thursday</div><div>Friday</div><div class="schedule-time">8:00 - 8:45</div><button class="lesson-cell filled" type="button" data-day="Monday" data-time="8:00 - 8:45" data-lesson="Mathematics · Mr. Smith">Mathematics<small>Mr. Smith</small></button><button class="lesson-cell" type="button" data-day="Tuesday" data-time="8:00 - 8:45">+ Add lesson</button><button class="lesson-cell" type="button" data-day="Wednesday" data-time="8:00 - 8:45">+ Add lesson</button><button class="lesson-cell filled" type="button" data-day="Thursday" data-time="8:00 - 8:45" data-lesson="Physics · Mr. Doe">Physics<small>Mr. Doe</small></button><button class="lesson-cell" type="button" data-day="Friday" data-time="8:00 - 8:45">+ Add lesson</button><div class="schedule-time">8:45 - 9:30</div><button class="lesson-cell" type="button" data-day="Monday" data-time="8:45 - 9:30">+ Add lesson</button><button class="lesson-cell filled" type="button" data-day="Tuesday" data-time="8:45 - 9:30" data-lesson="English · Ms. Green">English<small>Ms. Green</small></button><button class="lesson-cell" type="button" data-day="Wednesday" data-time="8:45 - 9:30">+ Add lesson</button><button class="lesson-cell" type="button" data-day="Thursday" data-time="8:45 - 9:30">+ Add lesson</button><button class="lesson-cell filled" type="button" data-day="Friday" data-time="8:45 - 9:30" data-lesson="History · Ms. Lee">History<small>Ms. Lee</small></button></div></div>
        <p class="schedule-help">Select an empty box to add a lesson.</p>
      </section>
      <div class="schedule-modal" hidden>
        <form class="schedule-modal-card schedule-form">
          <div class="modal-heading"><div><span class="modal-kicker">ADMIN SCHEDULE</span><h2>Add New Schedule</h2><p>Create a lesson for the selected class.</p></div><button type="button" class="close-schedule-modal" aria-label="Close">&times;</button></div>
          <div class="schedule-form-grid">
            <label>Subject<input name="subject" type="text" placeholder="e.g. Mathematics" required></label>
            <label>Teacher<input name="teacher" type="text" placeholder="e.g. Mr. Smith" required></label>
            <label>Day<select name="day"><option>Monday</option><option>Tuesday</option><option>Wednesday</option><option>Thursday</option><option>Friday</option></select></label>
            <label>Time<select name="time"><option>8:00 - 8:45</option><option>8:45 - 9:30</option></select></label>
          </div>
          <div class="schedule-form-actions"><button type="button" class="cancel-schedule">Cancel</button><button type="submit" class="create-schedule">Add to Schedule</button></div>
        </form>
      </div>
    </div>
  `,
};

routeMarkup['/admin/schedule'] = routeMarkup['/schedule'];
routeMarkup['/student'] = `
  <div class="student-home-page">
    <section class="student-welcome-panel">
      <div><span class="student-page-kicker">STUDENT PORTAL</span><h1>Welcome back, Emma!</h1><p>Here is your academy overview for today.</p></div>
      <div class="student-home-avatar" aria-hidden="true">EW</div>
    </section>
    <section class="student-home-grid" aria-label="Student quick links">
      <article class="student-home-card"><span class="student-home-icon">&#128197;</span><div><h2>Weekly Schedule</h2><p>View your lessons and class times.</p><button type="button" data-route="/student/schedule">View Schedule <span aria-hidden="true">&#8594;</span></button></div></article>
      <article class="student-home-card"><span class="student-home-icon">&#128196;</span><div><h2>Daily Diary</h2><p>Check your homework and class notes.</p><button type="button" data-route="/student/diary">Open Diary <span aria-hidden="true">&#8594;</span></button></div></article>
    </section>
  </div>
`;

routeMarkup['/admin/student'] = routeMarkup['/student'];

routeMarkup['/admin/view'] = routeMarkup['/admin/staff'];
routeMarkup['/staff/view'] = routeMarkup['/admin/staff'];
routeMarkup['/admin/attendance'] = attendanceMarkup;

function setActiveRoute(route) {
  navItems.forEach((item) => {
    const isActive = item.dataset.route === route || (item.dataset.route === '/admin/attendance' && route === '/attendance') || (item.dataset.route === '/admin/staff' && (route === '/admin/view' || route === '/staff/view'));
    item.classList.toggle('active', isActive);
    if (isActive) item.setAttribute('aria-current', 'page');
    else item.removeAttribute('aria-current');
  });
}

function initializeAttendancePage() {
  const exportButton = document.querySelector('.export-button');
  const calendarDays = document.querySelectorAll('.calendar-days span');
  const searchContainer = document.querySelector('.search-box');
  const searchForm = document.createElement('form');
  searchForm.className = 'search-box';
  searchForm.setAttribute('role', 'search');
  searchForm.innerHTML = `${searchContainer.querySelector('svg').outerHTML}<label class="sr-only" for="site-search">Search attendance history</label><input id="site-search" type="search" placeholder="Search..." autocomplete="off">`;
  searchContainer.replaceWith(searchForm);
  const searchInput = searchForm.querySelector('input');
  searchForm.addEventListener('submit', (event) => event.preventDefault());
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();
    document.querySelectorAll('.history-row:not(.header-row)').forEach((row) => {
      row.hidden = query !== '' && !row.textContent.toLowerCase().includes(query);
    });
  });

  const attendanceClasses = { 7: 'holiday-day', 8: 'holiday-day', 12: 'absent-day', 19: 'present-day', 20: 'present-day', 21: 'holiday-day', 22: 'holiday-day', 23: 'present-day', 28: 'holiday-day', 29: 'holiday-day' };
  calendarDays.forEach((day) => {
    const className = attendanceClasses[Number(day.textContent)];
    if (className) day.classList.add(className);
  });

  const dataRows = [...document.querySelectorAll('.history-row:not(.header-row)')];
  dataRows.sort((first, second) => new Date(second.firstElementChild.textContent) - new Date(first.firstElementChild.textContent));
  dataRows.forEach((row) => row.parentElement.append(row));

  exportButton.addEventListener('click', () => {
    const csv = [...document.querySelectorAll('.history-row')].map((row) =>
      [...row.querySelectorAll('span')].map((cell) => `"${cell.textContent.trim().replaceAll('"', '""')}"`).join(','),
    ).join('\n');
    const file = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    const link = Object.assign(document.createElement('a'), { href: URL.createObjectURL(file), download: 'emma-watson-attendance-october-2023.csv' });
    link.click();
    URL.revokeObjectURL(link.href);
  });
}

function initializeFeesPage() {
  const filter = document.querySelector('#fee-student-filter');
  if (!filter) return;
  filter.addEventListener('input', () => {
    const query = filter.value.trim().toLowerCase();
    document.querySelectorAll('.fee-table-row:not(.fee-table-header)').forEach((row) => {
      row.hidden = query !== '' && !row.textContent.toLowerCase().includes(query);
    });
  });
}

function initializeDiaryPage() {
  const form = document.querySelector('.diary-form');
  const entries = document.querySelector('.diary-entries');
  if (!form || !entries) return;
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const notes = form.elements.notes.value.trim();
    if (!notes) {
      form.elements.notes.focus();
      return;
    }
    const subject = form.elements.subject.value;
    const entry = document.createElement('article');
    entry.className = 'diary-entry new-entry';
    entry.innerHTML = `<div class="entry-meta"><span class="subject-chip">${subject}</span><span>Posted just now</span></div><p>${notes.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')}</p>`;
    entries.append(entry);
    entries.querySelector('.entries-heading span').textContent = `${entries.querySelectorAll('.diary-entry').length} Entries`;
    form.reset();
    form.elements.notes.focus();
  });
}

function initializeAnnouncementsPage() {
  const page = document.querySelector('.announcements-page');
  const modal = page?.querySelector('.announcement-modal');
  const openModal = page?.querySelector('.post-announcement-button');
  const closeModal = () => { modal.hidden = true; };
  if (!page || !modal || !openModal) return;
  openModal.addEventListener('click', () => { modal.hidden = false; modal.querySelector('input').focus(); });
  page.querySelector('.close-modal').addEventListener('click', closeModal);
  page.querySelector('.cancel-announcement').addEventListener('click', closeModal);
  page.querySelector('.announcement-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const card = document.createElement('article');
    card.className = 'announcement-card new-announcement';
    card.innerHTML = `<div class="announcement-meta"><span class="announcement-icon">i</span><span>Just now</span><span class="audience-tag">${form.elements.audience.value}</span></div><h2>${form.elements.title.value.replaceAll('<', '&lt;')}</h2><p>${form.elements.message.value.replaceAll('<', '&lt;')}</p>`;
    page.querySelector('.announcement-list').prepend(card);
    form.reset();
    closeModal();
  });
}

function initializePerformancePage() {
  const editButton = document.querySelector('.edit-scores-button');
  const bars = [...document.querySelectorAll('.subject-chart .simple-subject-row i')];
  const scoreCard = document.querySelector('.performance-score-card strong');
  const gradeCard = document.querySelector('.overall-grade');
  if (!editButton || !bars.length || !scoreCard || !gradeCard) return;

  editButton.addEventListener('click', () => {
    bars.forEach((bar) => {
      const currentMark = Number.parseInt(bar.style.width, 10);
      const enteredMark = window.prompt(`Enter marks for ${bar.dataset.label} (0-100):`, String(currentMark));
      if (enteredMark === null) return;
      const mark = Math.max(0, Math.min(100, Number(enteredMark)));
      if (Number.isFinite(mark)) bar.style.width = `${mark}%`;
      bar.closest('.simple-subject-row').querySelector('b').textContent = `${mark}%`;
    });

    const average = Math.round(bars.reduce((sum, bar) => sum + Number.parseInt(bar.style.width, 10), 0) / bars.length);
    scoreCard.textContent = `${average}%`;
    gradeCard.textContent = average >= 90 ? 'A+' : average >= 80 ? 'A' : average >= 70 ? 'B' : average >= 60 ? 'C' : 'D';
  });
}

function initializeSchedulePage() {
  const page = document.querySelector('.schedule-page');
  if (!page) return;
  const classSelect = page.querySelector('.schedule-class');
  const modal = page.querySelector('.schedule-modal');
  const form = page.querySelector('.schedule-form');
  const storageKey = 'academy-schedules';
  const readSchedules = () => JSON.parse(window.localStorage.getItem(storageKey) || '{}');
  const saveSchedules = (schedules) => window.localStorage.setItem(storageKey, JSON.stringify(schedules));
  const getSchedule = () => readSchedules()[classSelect.value] || {};
  const renderSavedLessons = () => {
    const saved = getSchedule();
    page.querySelectorAll('.lesson-cell').forEach((cell) => {
      const lesson = saved[`${cell.dataset.day}|${cell.dataset.time}`];
      if (!lesson) return;
      cell.replaceChildren();
      const subject = document.createElement('strong');
      subject.textContent = lesson.subject;
      const teacher = document.createElement('small');
      teacher.textContent = lesson.teacher;
      cell.append(subject, teacher);
      cell.classList.add('filled');
    });
  };
  const closeModal = () => { modal.hidden = true; form.reset(); };
  page.querySelector('.add-schedule-button').addEventListener('click', () => {
    modal.hidden = false;
    form.elements.subject.focus();
  });
  page.querySelector('.close-schedule-modal').addEventListener('click', closeModal);
  page.querySelector('.cancel-schedule').addEventListener('click', closeModal);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const values = new FormData(form);
    const key = `${values.get('day')}|${values.get('time')}`;
    const target = [...page.querySelectorAll('.lesson-cell')].find((cell) => `${cell.dataset.day}|${cell.dataset.time}` === key);
    if (!target || target.classList.contains('filled')) {
      window.alert('That time already has a lesson. Choose an empty slot.');
      return;
    }
    const schedules = readSchedules();
    schedules[classSelect.value] = { ...(schedules[classSelect.value] || {}), [key]: { subject: values.get('subject').trim(), teacher: values.get('teacher').trim() } };
    saveSchedules(schedules);
    renderSavedLessons();
    closeModal();
  });
  classSelect.addEventListener('change', () => {
    page.querySelectorAll('.lesson-cell').forEach((cell) => {
      if (cell.dataset.lesson) return;
      cell.classList.remove('filled');
      cell.replaceChildren('+ Add lesson');
    });
    renderSavedLessons();
  });
  page.querySelectorAll('.lesson-cell:not(.filled)').forEach((cell) => {
    cell.addEventListener('click', () => {
      const lesson = window.prompt('What lesson should be added?');
      if (!lesson?.trim()) return;
      const teacher = window.prompt('Who teaches this lesson?') || '';
      cell.replaceChildren();
      const lessonName = document.createElement('strong');
      lessonName.textContent = lesson.trim();
      cell.append(lessonName);
      if (teacher.trim()) {
        const teacherName = document.createElement('small');
        teacherName.textContent = teacher.trim();
        cell.append(teacherName);
      }
      cell.classList.add('filled');
      const schedules = readSchedules();
      schedules[classSelect.value] = { ...(schedules[classSelect.value] || {}), [`${cell.dataset.day}|${cell.dataset.time}`]: { subject: lesson.trim(), teacher: teacher.trim() } };
      saveSchedules(schedules);
    });
  });
  page.querySelector('.save-schedule').addEventListener('click', (event) => {
    const schedules = readSchedules();
    schedules[classSelect.value] = schedules[classSelect.value] || {};
    saveSchedules(schedules);
    event.currentTarget.textContent = 'Schedule Saved';
    window.setTimeout(() => { event.currentTarget.textContent = 'Save Schedule'; }, 1800);
  });
  renderSavedLessons();
}

function initializeStudentSchedulePage() {
  const page = document.querySelector('.student-schedule-page');
  if (!page) return;
  const saved = JSON.parse(window.localStorage.getItem('academy-schedules') || '{}')['Grade 10 - Section A'] || {};
  page.querySelectorAll('.student-lesson').forEach((cell) => {
    const lesson = saved[`${cell.dataset.day}|${cell.dataset.time}`];
    if (!lesson) return;
    cell.replaceChildren();
    const subject = document.createElement('strong');
    subject.textContent = lesson.subject;
    const teacher = document.createElement('small');
    teacher.textContent = lesson.teacher;
    cell.append(subject, teacher);
    cell.classList.add('filled');
  });
}

function initializeRegistrationPage() {
  const form = document.querySelector('.registration-form');
  if (!form) return;
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const submitButton = form.querySelector('.save-registration');
    submitButton.textContent = 'Registration Created';
    submitButton.disabled = true;
  });
}

function initializeStaffPage() {
  const page = document.querySelector('.staff-profile-page');
  const modal = page?.querySelector('.staff-modal');
  const form = page?.querySelector('.staff-form');
  if (!page || !modal || !form) return;

  const closeModal = () => { modal.hidden = true; };
  page.querySelector('.add-staff-button').addEventListener('click', () => {
    modal.hidden = false;
    form.elements.name.focus();
  });
  page.querySelector('.close-staff-modal').addEventListener('click', closeModal);
  page.querySelector('.cancel-staff').addEventListener('click', closeModal);
  page.querySelector('.edit-profile-button').addEventListener('click', () => {
    const name = window.prompt('Staff member name:', staffProfile.name);
    if (name === null || !name.trim()) return;
    const role = window.prompt('Job title:', staffProfile.role);
    if (role === null || !role.trim()) return;
    const email = window.prompt('Email address:', staffProfile.email);
    if (email === null || !email.trim()) return;
    const phone = window.prompt('Contact number:', staffProfile.phone);
    if (phone === null || !phone.trim()) return;
    staffProfile = { ...staffProfile, name: name.trim(), role: role.trim(), email: email.trim(), phone: phone.trim() };
    page.querySelector('.staff-summary-card h2').textContent = staffProfile.name;
    page.querySelector('.staff-summary-card p').textContent = staffProfile.role;
    page.querySelector('.staff-personal-card dl div:nth-child(3) dd').textContent = staffProfile.phone;
    page.querySelector('.staff-personal-card dl div:nth-child(4) dd').textContent = staffProfile.email;
  });

  const documentInput = page.querySelector('.staff-document-input');
  const documentGrid = page.querySelector('.staff-document-grid');
  const uploadStatus = page.querySelector('.upload-status');
  page.querySelector('.upload-button').addEventListener('click', () => documentInput.click());
  documentInput.addEventListener('change', () => {
    const file = documentInput.files[0];
    if (!file) return;
    const card = document.createElement('button');
    card.type = 'button';
    const icon = document.createElement('b');
    icon.textContent = 'DOC';
    const name = document.createElement('strong');
    name.textContent = file.name;
    const size = document.createElement('small');
    size.textContent = `Added just now · ${(file.size / 1024 / 1024).toFixed(1)} MB`;
    card.append(icon, name, size);
    documentGrid.append(card);
    uploadStatus.textContent = `${file.name} uploaded`;
    documentInput.value = '';
  });

  page.querySelector('.add-assignment-button').addEventListener('click', () => {
    const className = window.prompt('Class name:', '12-A');
    if (className === null || !className.trim()) return;
    const subject = window.prompt('Subject:', 'Science');
    if (subject === null || !subject.trim()) return;
    const schedule = window.prompt('Schedule:', 'Mon, Wed (10:00 AM)');
    if (schedule === null || !schedule.trim()) return;
    const row = document.createElement('div');
    row.className = 'class-table-row';
    [className, subject, schedule].forEach((value) => {
      const cell = document.createElement('span');
      cell.textContent = value.trim();
      row.append(cell);
    });
    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.setAttribute('aria-label', 'Remove class');
    removeButton.textContent = 'x';
    removeButton.addEventListener('click', () => row.remove());
    row.append(removeButton);
    page.querySelector('.class-table').append(row);
  });

  page.querySelectorAll('.class-table-row:not(.class-table-header) button').forEach((button) => {
    button.addEventListener('click', () => button.closest('.class-table-row').remove());
  });
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const values = new FormData(form);
    const joiningDate = new Date(`${values.get('joiningDate')}T00:00:00`);
    staffProfile = {
      ...staffProfile,
      name: values.get('name'),
      role: values.get('role'),
      id: `EMP-${new Date().getFullYear()}-${String(Date.now()).slice(-4)}`,
      phone: values.get('phone'),
      email: values.get('email'),
      subjects: values.get('subjects').split(',').map((subject) => subject.trim()).filter(Boolean),
      qualification: values.get('qualification'),
      joiningDate: joiningDate.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      employmentType: values.get('employmentType'),
    };
    pageContent.innerHTML = staffMarkup();
    initializeStaffPage();
  });
}

function initializeStudentProfilePage() {
  const page = document.querySelector('.student-profile-page');
  const fileInput = page?.querySelector('.student-document-input');
  const documentList = page?.querySelector('.document-list');
  if (!page || !fileInput || !documentList) return;

  const openFilePicker = () => fileInput.click();
  page.querySelector('.upload-student-document').addEventListener('click', openFilePicker);
  page.querySelector('.add-document').addEventListener('click', openFilePicker);
  fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if (!file) return;
    const card = document.createElement('article');
    const icon = document.createElement('b');
    icon.textContent = 'DOC';
    const details = document.createElement('p');
    const name = document.createElement('strong');
    name.textContent = file.name;
    const metadata = document.createElement('span');
    metadata.textContent = `Added just now · ${(file.size / 1024 / 1024).toFixed(1)} MB`;
    details.append(name, metadata);
    card.append(icon, details);
    documentList.insertBefore(card, documentList.querySelector('.add-document'));
    fileInput.value = '';
  });
}

function renderRoute(route, shouldPush = true) {
  const nextRoute = routeMarkup[route] ? route : '/dashboard';
  if (shouldPush && window.location.pathname !== nextRoute) {
    window.history.pushState({}, '', nextRoute);
  }
  pageContent.innerHTML = routeMarkup[nextRoute] || attendanceMarkup;
  document.querySelector('.dashboard-app').classList.toggle('staff-route', nextRoute === '/admin/staff' || nextRoute === '/admin/view' || nextRoute === '/staff/view');
  document.querySelector('.dashboard-app').classList.toggle('attendance-route', nextRoute === '/attendance' || nextRoute === '/admin/attendance');
  setActiveRoute(nextRoute);
  settingsButton.classList.toggle('active', nextRoute === '/settings');
  if (nextRoute === '/attendance' || nextRoute === '/admin/attendance') initializeAttendancePage();
  if (nextRoute === '/fees') initializeFeesPage();
  if (nextRoute === '/dashboard/diary') initializeDiaryPage();
  if (nextRoute === '/admin/annocement') initializeAnnouncementsPage();
  if (nextRoute === '/admin/studentperformance') initializePerformancePage();
  if (nextRoute === '/schedule' || nextRoute === '/admin/schedule') initializeSchedulePage();
  if (nextRoute === '/student/schedule') initializeStudentSchedulePage();
  if (nextRoute === '/registration') initializeRegistrationPage();
  if (nextRoute === '/admin/student') initializeStudentProfilePage();
  if (nextRoute === '/admin/staff') initializeStaffPage();
  document.querySelector('.topbar-title').textContent = 'Academy Admin';
  sidebar.classList.remove('is-open');
  window.scrollTo(0, 0);
}

menuButton.setAttribute('aria-expanded', 'false');
menuButton.addEventListener('click', () => {
  const isOpen = sidebar.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

navItems.forEach((item) => {
  item.addEventListener('click', () => {
    if (item.classList.contains('login-nav')) return;
    const isStudentSession = selectedRole === 'Student' || window.location.pathname.startsWith('/student');
    const route = isStudentSession && item.dataset.route === '/schedule' ? '/student/schedule' : item.dataset.route;
    renderRoute(route);
  });
});

loginNavButton.addEventListener('click', () => {
  supabase?.auth.signOut();
  dashboardApp.hidden = true;
  loginScreen.hidden = false;
  loginForm.reset();
  window.history.pushState({}, '', '/');
});

pageContent.addEventListener('click', (event) => {
  const action = event.target.closest('[data-route]');
  if (action) renderRoute(action.dataset.route);
});

registrationButton.addEventListener('click', () => {
  renderRoute('/registration');
});

settingsButton.addEventListener('click', () => renderRoute('/settings'));

window.addEventListener('popstate', () => renderRoute(window.location.pathname, false));
renderRoute(window.location.pathname, false);

if (routeMarkup[window.location.pathname]) {
  loginScreen.hidden = true;
  dashboardApp.hidden = false;
}
