let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const slideCounter = document.getElementById("slideCounter");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function showSlide(n) {
  slides[currentSlide].classList.remove("active");
  currentSlide = (n + totalSlides) % totalSlides;
  slides[currentSlide].classList.add("active");
  slides[currentSlide].classList.add("fade-in");

  slideCounter.textContent = `${currentSlide + 1} / ${totalSlides}`;

  // Update button states
  prevBtn.disabled = currentSlide === 0;
  nextBtn.disabled = currentSlide === totalSlides - 1;

  if (prevBtn.disabled) {
    prevBtn.classList.add("opacity-50", "cursor-not-allowed");
  } else {
    prevBtn.classList.remove("opacity-50", "cursor-not-allowed");
  }

  if (nextBtn.disabled) {
    nextBtn.classList.add("opacity-50", "cursor-not-allowed");
  } else {
    nextBtn.classList.remove("opacity-50", "cursor-not-allowed");
  }

  // Remove fade-in class after animation
  setTimeout(() => {
    slides[currentSlide].classList.remove("fade-in");
  }, 500);
}

function nextSlide() {
  if (currentSlide < totalSlides - 1) {
    showSlide(currentSlide + 1);
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    showSlide(currentSlide - 1);
  }
}

// Event listeners
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight" || e.key === " ") {
    e.preventDefault();
    nextSlide();
  } else if (e.key === "ArrowLeft") {
    e.preventDefault();
    prevSlide();
  }
});

// Initialize
showSlide(0);

(function () {
  function c() {
    var b = a.contentDocument || a.contentWindow.document;
    if (b) {
      var d = b.createElement("script");
      d.innerHTML =
        "window.__CF$cv$params={r:'96adf705107f918a',t:'MTc1NDQ3NzMzOC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
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

// Smooth scrolling function
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({
    behavior: "smooth",
  });
}

// CSR Calculator
function calculateCSR() {
  const profit = document.getElementById("profitInput").value;
  const resultDiv = document.getElementById("csrResult");
  const amountSpan = document.getElementById("csrAmount");

  if (profit && profit > 0) {
    const csrAmount = ((profit * 2) / 100).toFixed(2);
    amountSpan.textContent = `₹${csrAmount} crores`;
    resultDiv.classList.remove("hidden");
    resultDiv.classList.add("fade-in");
  } else {
    resultDiv.classList.add("hidden");
  }
}

// Details Modal Functions
const detailsData = {
  education: {
    title: "📚 Education & Skill Development",
    content: `
                    <h4 class="text-xl font-semibold mb-4">What companies do in Education:</h4>
                    <ul class="space-y-3 text-gray-700 mb-6">
                        <li>• Build schools and colleges in rural areas</li>
                        <li>• Provide scholarships to poor students</li>
                        <li>• Train teachers to improve education quality</li>
                        <li>• Create digital learning programs</li>
                        <li>• Set up computer labs and libraries</li>
                        <li>• Vocational training for job skills</li>
                    </ul>
                    <div class="bg-blue-50 p-4 rounded-lg">
                        <h5 class="font-semibold">Real Impact:</h5>
                        <p class="text-sm text-gray-600">Over 10 million children get better education through CSR programs every year!</p>
                    </div>
                `,
  },
  health: {
    title: "🏥 Healthcare",
    content: `
                    <h4 class="text-xl font-semibold mb-4">What companies do in Healthcare:</h4>
                    <ul class="space-y-3 text-gray-700 mb-6">
                        <li>• Build hospitals and health centers</li>
                        <li>• Organize free medical camps</li>
                        <li>• Provide medicines at low cost</li>
                        <li>• Health awareness programs</li>
                        <li>• Mobile health units for remote areas</li>
                        <li>• Mother and child care programs</li>
                    </ul>
                    <div class="bg-red-50 p-4 rounded-lg">
                        <h5 class="font-semibold">Real Impact:</h5>
                        <p class="text-sm text-gray-600">CSR healthcare programs reach over 50 million people annually!</p>
                    </div>
                `,
  },
  rural: {
    title: "🏘️ Rural Development",
    content: `
                    <h4 class="text-xl font-semibold mb-4">What companies do for Rural Development:</h4>
                    <ul class="space-y-3 text-gray-700 mb-6">
                        <li>• Build roads connecting villages to cities</li>
                        <li>• Provide clean drinking water</li>
                        <li>• Install electricity in remote areas</li>
                        <li>• Create employment opportunities</li>
                        <li>• Support farmers with better techniques</li>
                        <li>• Build community centers</li>
                    </ul>
                    <div class="bg-green-50 p-4 rounded-lg">
                        <h5 class="font-semibold">Real Impact:</h5>
                        <p class="text-sm text-gray-600">Over 100,000 villages have been developed through CSR initiatives!</p>
                    </div>
                `,
  },
  environment: {
    title: "🌱 Environmental Protection",
    content: `
                    <h4 class="text-xl font-semibold mb-4">What companies do for Environment:</h4>
                    <ul class="space-y-3 text-gray-700 mb-6">
                        <li>• Plant millions of trees every year</li>
                        <li>• Clean rivers and water bodies</li>
                        <li>• Promote renewable energy</li>
                        <li>• Waste management programs</li>
                        <li>• Wildlife conservation projects</li>
                        <li>• Awareness about climate change</li>
                    </ul>
                    <div class="bg-green-50 p-4 rounded-lg">
                        <h5 class="font-semibold">Real Impact:</h5>
                        <p class="text-sm text-gray-600">Over 100 million trees planted through CSR programs!</p>
                    </div>
                `,
  },
  sports: {
    title: "⚽ Sports Development",
    content: `
                    <h4 class="text-xl font-semibold mb-4">What companies do for Sports:</h4>
                    <ul class="space-y-3 text-gray-700 mb-6">
                        <li>• Train athletes for Olympics and international games</li>
                        <li>• Build sports facilities and stadiums</li>
                        <li>• Provide sports equipment to schools</li>
                        <li>• Support grassroots sports programs</li>
                        <li>• Organize sports competitions</li>
                        <li>• Create sports academies</li>
                    </ul>
                    <div class="bg-purple-50 p-4 rounded-lg">
                        <h5 class="font-semibold">Real Impact:</h5>
                        <p class="text-sm text-gray-600">Many Olympic medalists have been supported by CSR programs!</p>
                    </div>
                `,
  },
  others: {
    title: "🎭 Arts, Culture & Others",
    content: `
                    <h4 class="text-xl font-semibold mb-4">Other CSR Activities:</h4>
                    <ul class="space-y-3 text-gray-700 mb-6">
                        <li>• Preserve Indian art and culture</li>
                        <li>• Support traditional craftsmen</li>
                        <li>• Help armed forces veterans</li>
                        <li>• Disaster relief during floods, earthquakes</li>
                        <li>• Support for differently-abled people</li>
                        <li>• Women empowerment programs</li>
                    </ul>
                    <div class="bg-gray-50 p-4 rounded-lg">
                        <h5 class="font-semibold">Real Impact:</h5>
                        <p class="text-sm text-gray-600">Thousands of traditional artists and veterans get support through CSR!</p>
                    </div>
                `,
  },
};

function showDetails(category) {
  const modal = document.getElementById("detailsModal");
  const content = document.getElementById("modalContent");
  const data = detailsData[category];

  content.innerHTML = `
                <h3 class="text-2xl font-bold text-gray-800 mb-6">${data.title}</h3>
                ${data.content}
            `;

  modal.classList.remove("hidden");
}

function closeDetails() {
  document.getElementById("detailsModal").classList.add("hidden");
}

// Company Details
function showCompanyDetails(company) {
  const details = {
    tata: {
      title: "Tata Group CSR Story",
      content: `
                        <div class="text-center mb-6">
                            <div class="text-6xl mb-4">🏭</div>
                            <h3 class="text-2xl font-bold text-blue-600">Tata Group - The CSR Pioneer</h3>
                        </div>
                        <div class="space-y-4 text-gray-700">
                            <p><strong>Fun Fact:</strong> Tata Group has been doing charity for over 100 years - even before CSR became mandatory!</p>
                            
                            <h4 class="font-semibold text-lg">Amazing Projects:</h4>
                            <ul class="space-y-2">
                                <li>• <strong>Tata Memorial Hospital:</strong> Treats cancer patients for free</li>
                                <li>• <strong>Water Projects:</strong> Brought clean water to 5,000+ villages</li>
                                <li>• <strong>Education:</strong> Supports top institutes like TISS, IISc</li>
                                <li>• <strong>Rural Development:</strong> Transformed entire districts</li>
                            </ul>
                            
                            <div class="bg-blue-50 p-4 rounded-lg mt-4">
                                <h5 class="font-semibold">Impact Numbers:</h5>
                                <div class="grid grid-cols-2 gap-4 mt-2 text-sm">
                                    <div>Villages Helped: <strong>5,000+</strong></div>
                                    <div>People Benefited: <strong>50+ million</strong></div>
                                    <div>Annual Spending: <strong>₹900+ crores</strong></div>
                                    <div>Years of Service: <strong>100+ years</strong></div>
                                </div>
                            </div>
                        </div>
                    `,
    },
    reliance: {
      title: "Reliance Industries CSR Story",
      content: `
                        <div class="text-center mb-6">
                            <div class="text-6xl mb-4">⚡</div>
                            <h3 class="text-2xl font-bold text-orange-600">Reliance Industries - Healthcare Champion</h3>
                        </div>
                        <div class="space-y-4 text-gray-700">
                            <p><strong>Special Focus:</strong> Reliance focuses heavily on healthcare and education!</p>
                            
                            <h4 class="font-semibold text-lg">Major Projects:</h4>
                            <ul class="space-y-2">
                                <li>• <strong>Sir H.N. Reliance Foundation Hospital:</strong> World-class healthcare</li>
                                <li>• <strong>Mobile Health Units:</strong> Reach remote villages</li>
                                <li>• <strong>Digital Education:</strong> Online learning for students</li>
                                <li>• <strong>Sports:</strong> Supports Indian athletes</li>
                            </ul>
                            
                            <div class="bg-orange-50 p-4 rounded-lg mt-4">
                                <h5 class="font-semibold">Impact Numbers:</h5>
                                <div class="grid grid-cols-2 gap-4 mt-2 text-sm">
                                    <div>Patients Treated: <strong>10+ lakh</strong></div>
                                    <div>Students Helped: <strong>5+ lakh</strong></div>
                                    <div>Annual Spending: <strong>₹700+ crores</strong></div>
                                    <div>States Covered: <strong>25+ states</strong></div>
                                </div>
                            </div>
                        </div>
                    `,
    },
  };

  const modal = document.getElementById("detailsModal");
  const content = document.getElementById("exampleModalContent");

  content.innerHTML = details[company].content;
  modal.classList.remove("hidden");
}

function closeExampleDetails() {
  document.getElementById("exampleDetailsModal").classList.add("hidden");
}

// Animate Statistics
function animateStats() {
  const stats = [
    { id: "totalSpending", target: 22000, suffix: "+ crores" },
    { id: "companiesCount", target: 2500, suffix: "+" },
    { id: "beneficiaries", target: 100, suffix: "+ million" },
    { id: "villages", target: 50000, suffix: "+" },
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
    element.textContent = Math.floor(current).toLocaleString() + suffix;
  }, 50);
}
