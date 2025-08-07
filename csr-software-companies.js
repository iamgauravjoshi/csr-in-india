// Smooth scrolling function
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({
    behavior: "smooth",
  });
}

// Animate Tech Statistics
function animateTechStats() {
  const stats = [
    { id: "techSpending", target: 5000, suffix: "+ crores" },
    { id: "studentsTrained", target: 500000, suffix: "+" },
    { id: "carbonSaved", target: 30, suffix: "% reduction" },
    { id: "companiesParticipating", target: 1200, suffix: "+" },
  ];

  stats.forEach((stat) => {
    animateNumber(stat.id, stat.target, stat.suffix);
  });
}

function animateNumber(elementId, target, suffix) {
  const element = document.getElementById(elementId);
  let current = 0;
  const increment = target / 50;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    if (elementId === "studentsTrained") {
      element.textContent = Math.floor(current).toLocaleString() + suffix;
    } else {
      element.textContent = Math.floor(current) + suffix;
    }
  }, 50);
}

// Tab System for Key Areas
function showTab(tabName) {
  // Hide all tab contents
  const contents = document.querySelectorAll(".tab-content");
  contents.forEach((content) => content.classList.add("hidden"));

  // Remove active class from all tabs
  const tabs = document.querySelectorAll('[id^="tab-"]');
  tabs.forEach((tab) => {
    tab.classList.remove("tab-active");
    tab.classList.add("tab-inactive");
  });

  // Show selected content and activate tab
  document.getElementById(`content-${tabName}`).classList.remove("hidden");
  document.getElementById(`tab-${tabName}`).classList.add("tab-active");
  document.getElementById(`tab-${tabName}`).classList.remove("tab-inactive");
}

// Privacy Score Calculator
function updatePrivacyScore() {
  const checkboxes = document.querySelectorAll(".privacy-check");
  let score = 0;

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      score += parseInt(checkbox.dataset.points);
    }
  });

  document.getElementById("privacyScore").textContent = `${score}/100`;
  document.getElementById("privacyBar").style.width = `${score}%`;

  let feedback = "";
  if (score >= 80) {
    feedback = "🎉 Excellent! Your privacy practices are outstanding!";
    document.getElementById("privacyBar").className =
      "bg-green-600 h-3 rounded-full transition-all duration-500";
  } else if (score >= 60) {
    feedback =
      "👍 Good! You're on the right track, but there's room for improvement.";
    document.getElementById("privacyBar").className =
      "bg-yellow-600 h-3 rounded-full transition-all duration-500";
  } else {
    feedback = "⚠️ Needs work! Focus on improving your data privacy practices.";
    document.getElementById("privacyBar").className =
      "bg-red-600 h-3 rounded-full transition-all duration-500";
  }

  document.getElementById("privacyFeedback").textContent = feedback;
}

// Ethics Score Calculator
function updateEthicsScore() {
  const checkboxes = document.querySelectorAll(".ethics-check");
  let score = 0;

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      score += parseInt(checkbox.dataset.points);
    }
  });

  document.getElementById("ethicsScore").textContent = `${score}/100`;
  document.getElementById("ethicsBar").style.width = `${score}%`;

  let feedback = "";
  if (score >= 80) {
    feedback = "🌟 Outstanding! Your development practices are highly ethical!";
    document.getElementById("ethicsBar").className =
      "bg-green-600 h-3 rounded-full transition-all duration-500";
  } else if (score >= 60) {
    feedback =
      "✅ Good progress! Keep working on ethical development practices.";
    document.getElementById("ethicsBar").className =
      "bg-yellow-600 h-3 rounded-full transition-all duration-500";
  } else {
    feedback =
      "🔧 Improvement needed! Focus on building more ethical software.";
    document.getElementById("ethicsBar").className =
      "bg-red-600 h-3 rounded-full transition-all duration-500";
  }

  document.getElementById("ethicsFeedback").textContent = feedback;
}

// Carbon Footprint Calculator
function calculateCarbon() {
  const employees = parseInt(document.getElementById("employees").value) || 0;
  const computers = parseInt(document.getElementById("computers").value) || 0;
  const officeSpace =
    parseInt(document.getElementById("officeSpace").value) || 0;

  if (employees > 0 && computers > 0 && officeSpace > 0) {
    // Rough calculations for demonstration
    const carbonEmissions = Math.round(
      employees * 2.3 + computers * 0.5 + officeSpace * 0.02
    );
    const treesNeeded = Math.round(carbonEmissions / 0.06);

    document.getElementById(
      "carbonEmissions"
    ).textContent = `${carbonEmissions} tons CO2`;
    document.getElementById("treesNeeded").textContent = `${treesNeeded} trees`;
    document.getElementById("carbonResult").classList.remove("hidden");
  } else {
    document.getElementById("carbonResult").classList.add("hidden");
  }
}

// Wellbeing Score Calculator
function updateWellbeingScore() {
  const workLife = parseInt(document.getElementById("workLife").value);
  const diversity = parseInt(document.getElementById("diversity").value);
  const learning = parseInt(document.getElementById("learning").value);
  const mentalHealth = parseInt(document.getElementById("mentalHealth").value);

  const averageScore = (workLife + diversity + learning + mentalHealth) / 4;
  const percentage = Math.round((averageScore / 10) * 100);

  document.getElementById("wellbeingScore").textContent = `${percentage}%`;

  // Update circular progress
  const circle = document.getElementById("wellbeingCircle");
  const circumference = 2 * Math.PI * 52;
  const offset = circumference - (percentage / 100) * circumference;
  circle.style.strokeDashoffset = offset;

  let feedback = "";
  if (percentage >= 80) {
    feedback = "🎉 Excellent! Your employees must love working here!";
  } else if (percentage >= 60) {
    feedback = "👍 Good! There's room for improvement in employee wellbeing.";
  } else {
    feedback = "⚠️ Focus needed! Employee wellbeing should be a priority.";
  }

  document.getElementById("wellbeingFeedback").textContent = feedback;
}

// Impact Calculator
function calculateImpact() {
  const studentsPerMonth =
    parseInt(document.getElementById("studentsPerMonth").value) || 0;
  const hoursPerStudent =
    parseInt(document.getElementById("hoursPerStudent").value) || 0;
  const volunteers = parseInt(document.getElementById("volunteers").value) || 0;

  if (studentsPerMonth > 0 && hoursPerStudent > 0 && volunteers > 0) {
    const annualStudents = studentsPerMonth * 12;
    const totalHours = annualStudents * hoursPerStudent;
    const volunteerHours = volunteers * 4 * 12; // 4 hours per month per volunteer
    const jobOpportunities = Math.round(annualStudents * 0.3); // 30% might get tech jobs

    document.getElementById("annualStudents").textContent =
      annualStudents.toLocaleString();
    document.getElementById("totalHours").textContent =
      totalHours.toLocaleString();
    document.getElementById("volunteerHours").textContent =
      volunteerHours.toLocaleString();
    document.getElementById("jobOpportunities").textContent =
      jobOpportunities.toLocaleString();
    document.getElementById("impactResult").classList.remove("hidden");
  } else {
    document.getElementById("impactResult").classList.add("hidden");
  }
}

// Budget Calculator
function calculateBudget() {
  const revenue = parseFloat(document.getElementById("revenue").value) || 0;
  const employeeCount =
    parseInt(document.getElementById("employeeCount").value) || 0;
  const percentage = parseFloat(document.getElementById("csrPercentage").value);

  document.getElementById("currentPercentage").textContent = `${percentage}%`;

  if (revenue > 0) {
    const totalBudget = Math.round((revenue * percentage) / 100);
    const educationBudget = Math.round(totalBudget * 0.4);
    const wellbeingBudget = Math.round(totalBudget * 0.3);
    const environmentBudget = Math.round(totalBudget * 0.2);
    const communityBudget = Math.round(totalBudget * 0.1);

    document.getElementById(
      "totalBudget"
    ).textContent = `₹${totalBudget} lakhs`;
    document.getElementById(
      "educationBudget"
    ).textContent = `₹${educationBudget} lakhs`;
    document.getElementById(
      "wellbeingBudget"
    ).textContent = `₹${wellbeingBudget} lakhs`;
    document.getElementById(
      "environmentBudget"
    ).textContent = `₹${environmentBudget} lakhs`;
    document.getElementById(
      "communityBudget"
    ).textContent = `₹${communityBudget} lakhs`;

    // Update impact suggestions
    const impactList = document.getElementById("budgetImpact");
    let impacts = [];

    if (totalBudget >= 10) {
      impacts.push(
        `• Train ${Math.round(totalBudget * 10)} students in coding annually`
      );
      impacts.push(
        `• Build ${Math.round(totalBudget / 2)} free websites for NGOs`
      );
      impacts.push(
        `• Support ${employeeCount} employees with wellness programs`
      );
      impacts.push(`• Reduce carbon footprint by ${Math.round(totalBudget)}%`);
    } else {
      impacts.push("• Start with small volunteer programs");
      impacts.push("• Focus on skill-based volunteering");
      impacts.push("• Partner with local schools");
    }

    impactList.innerHTML = impacts.join("<br>");
  }
}

// Case Study Tab System
function showCaseTab(tabName) {
  // Hide all case tab contents
  const contents = document.querySelectorAll(".case-tab-content");
  contents.forEach((content) => content.classList.add("hidden"));

  // Remove active class from all case tabs
  const tabs = document.querySelectorAll('[id^="case-tab-"]');
  tabs.forEach((tab) => {
    tab.classList.remove("tab-active");
    tab.classList.add("tab-inactive");
  });

  // Show selected content and activate tab
  document.getElementById(`case-content-${tabName}`).classList.remove("hidden");
  document.getElementById(`case-tab-${tabName}`).classList.add("tab-active");
  document
    .getElementById(`case-tab-${tabName}`)
    .classList.remove("tab-inactive");
}

function toggleCheck(item) {
  const checkbox = item.querySelector('input[type="checkbox"]');
  checkbox.checked = !checkbox.checked;
  updateProgress();
}

function updateProgress() {
  const checkboxes = document.querySelectorAll('.checklist-item input[type="checkbox"]');
  const checkedBoxes = document.querySelectorAll('.checklist-item input[type="checkbox"]:checked');
  const progress = (checkedBoxes.length / checkboxes.length) * 100;

  document.getElementById('progressFill').style.width = progress + '%';
  document.getElementById('progressText').textContent = Math.round(progress) + '%';
}

// Initialize progress
updateProgress();

// Event Listeners
document.addEventListener("DOMContentLoaded", function () {
  // Privacy checkboxes
  document.querySelectorAll(".privacy-check").forEach((checkbox) => {
    checkbox.addEventListener("change", updatePrivacyScore);
  });

  // Ethics checkboxes
  document.querySelectorAll(".ethics-check").forEach((checkbox) => {
    checkbox.addEventListener("change", updateEthicsScore);
  });

  // Initialize wellbeing score
  updateWellbeingScore();
});

// Add some entrance animations
window.addEventListener("scroll", function () {
  const elements = document.querySelectorAll(".card-hover");
  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add("fade-in");
    }
  });
});

(function () {
  function c() {
    var b = a.contentDocument || a.contentWindow.document;
    if (b) {
      var d = b.createElement("script");
      d.innerHTML =
        "window.__CF$cv$params={r:'96b477f6720191a9',t:'MTc1NDU0NTUzNC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
      b.getElementsByTagName("head")[0].appendChild(d);
    }
  }
  if (document.body) {
    var a = document.createElement("iframe");
    a.height = 1;
    a.width = 1;
    a.style.position = "absolute";
    a.style.top = 0;
    a.style.left = 0;
    a.style.border = "none";
    a.style.visibility = "hidden";
    document.body.appendChild(a);
    if ("loading" !== document.readyState) c();
    else if (window.addEventListener)
      document.addEventListener("DOMContentLoaded", c);
    else {
      var e = document.onreadystatechange || function () {};
      document.onreadystatechange = function (b) {
        e(b);
        "loading" !== document.readyState &&
          ((document.onreadystatechange = e), c());
      };
    }
  }
})();
