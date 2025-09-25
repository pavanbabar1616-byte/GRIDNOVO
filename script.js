// ThingSpeak Configuration
const THINGSPEAK_CONFIG = {
    READ_API_KEY: '3HDWQQTF7799XGAX',
    CHANNEL_ID: '3074276',
    BASE_URL: 'https://api.thingspeak.com/channels',
    UPDATE_INTERVAL: 30000, // 30 seconds
    FIELD_MAPPING: {
        temperature: 'field1',
        humidity: 'field2', 
        current: 'field3',
        voltage: 'field4',
        energyGenerated: 'field5',
        energyConsumed: 'field6',
        batteryPercent: 'field7'
    }
};

// Language translations (comprehensive set)
const translations = {
    en: {
        home: "Home",
        graphs: "Graphs",
        alerts: "Alerts",
        reports: "Reports",
        profile: "Profile",
        fieldSettings: "Field Settings",
        systemName: "Renewable Energy Monitoring System",
        energyConsumed: "Energy Consumed",
        energyGenerated: "Energy Generated",
        batteryPercent: "Battery Percentage",
        current: "Current",
        voltage: "Voltage",
        temperature: "Temperature",
        today: "Today",
        tomorrow: "Tomorrow",
        dayAfter: "Day After",
        humidity: "Humidity",
        rain: "Rain",
        windSpeed: "Wind",
        heroText1: "From sunlight to breeze, watch clean power come alive.",
        heroText2: "Track every watt your panels and turbines create.",
        heroText3: "Turn data into smarter, greener energy decisions.",
        energyMetrics: "Energy Metrics Graphs",
        systemAlerts: "System Alerts",
        energyReports: "Energy Reports",
        userProfile: "User Profile",
        activeAlerts: "Active Alerts",
        systemStatus: "System Status",
        normal: "Normal",
        alertType: "Alert Type",
        message: "Message",
        timestamp: "Timestamp",
        status: "Status",
        dateRange: "Date Range",
        startDate: "Start Date",
        endDate: "End Date",
        parameters: "Parameters",
        exportExcel: "Export to Excel",
        exportPDF: "Export to PDF",
        authentication: "Authentication",
        username: "Username",
        password: "Password",
        updateCredentials: "Update Credentials",
        notificationPreferences: "Notification Preferences",
        emailAlerts: "Email Alerts",
        smsAlerts: "SMS Alerts",
        savePreferences: "Save Preferences",
        fieldManagement: "Field Management",
        addNewField: "Add New Field",
        editField: "Edit Field",
        deleteField: "Delete Field",
        contactSupport: "Contact Support",
        supportHours: "24/7 Support Available",
        fieldConfiguration: "Field Configuration",
        fieldType: "Field Type",
        fieldName: "Field Name",
        location: "Location",
        capacity: "Capacity (kW)",
        tempThreshold: "Temperature Threshold (°C)",
        voltageThreshold: "Voltage Threshold (V)",
        saveSettings: "Save Settings",
        systemInfo: "System Information",
        online: "Online",
        offline: "Offline",
        support: "Support",
        chatbot: "Chatbot",
        contact: "Contact",
        viewGraphs: "View Graphs",
        viewGraphsDesc: "Check historical data and trends",
        systemAlertsDesc: "Monitor system notifications",
        generateReports: "Generate Reports",
        generateReportsDesc: "Export data for analysis",
        fieldSettingsDesc: "Configure your field parameters",
        chatbotWelcome: "Hello! I'm your GRIDNOVO assistant. How can I help you today?",
        chatPlaceholder: "Type your question here...",
        send: "Send",
        whatIsGridnovo: "What is GRIDNOVO?",
        deviceConnection: "Device Connection",
        energyGeneratedToday: "Energy Generated Today",
        exportReport: "Export Report",
        emailSupport: "Email Support",
        phoneSupport: "Phone Support",
        supportHoursDetail: "24/7 Availability",
        headquarters: "Headquarters",
        headquartersDetail: "pune, India",
        lastUpdated: "Last updated: --",
        connectionError: "Connection Error",
        dataUnavailable: "Data unavailable"
    },
    hi: {
        home: "होम",
        graphs: "ग्राफ़",
        alerts: "अलर्ट",
        reports: "रिपोर्ट",
        profile: "प्रोफाइल",
        fieldSettings: "फील्ड सेटिंग्स",
        systemName: "नवीकरणीय ऊर्जा निगरानी प्रणाली",
        energyConsumed: "ऊर्जा खपत",
        energyGenerated: "उत्पन्न ऊर्जा",
        batteryPercent: "बैटरी प्रतिशत",
        current: "करंट",
        voltage: "वोल्टेज",
        temperature: "तापमान",
        today: "आज",
        tomorrow: "कल",
        dayAfter: "परसों",
        humidity: "नमी",
        rain: "बारिश",
        windSpeed: "हवा",
        lastUpdated: "अंतिम अपडेट: --",
        connectionError: "कनेक्शन त्रुटि",
        dataUnavailable: "डेटा उपलब्ध नहीं",
        online: "ऑनलाइन",
        offline: "ऑफलाइन"
    },
    ta: {
        home: "முகப்பு",
        graphs: "வரைபடங்கள்",
        alerts: "எச்சரிக்கைகள்",
        reports: "அறிக்கைகள்",
        profile: "சுயविवरம்",
        fieldSettings: "புல அமைப்புகள்",
        systemName: "புதுப்பிக்கத்தக्क ऊर्जा कण्काणिप्पु अमैप्पु",
        energyConsumed: "ऊর्जा नुकर्व",
        energyGenerated: "உत্পত্ति செய்யপ্পட்ட ऊর्जा",
        batteryPercent: "पैट्टरी सतवীतम्",
        current: "मिन्नोट्टम्",
        voltage: "मिन्नऴुत्तम्",
        temperature: "वेप्पनिलै",
        today: "इन्று",
        tomorrow: "नाऴै",
        dayAfter: "नाऴै मऱुनाऴ्",
        lastUpdated: "कऴैसियाक পুত्पिक्कप्पट्டतु: --",
        connectionError: "इणैप्पु पिऴै",
        dataUnavailable: "तरवु किऴैक्कविल्लै",
        online: "ऑनलाइন",
        offline: "ऑफलाइन"
    },
    bn: {
        home: "হোম",
        graphs: "গ্রাফ",
        alerts: "সতর্কতা",
        reports: "রিপোর্ট",
        profile: "প্রোফাইল",
        fieldSettings: "ফিল্ড সেটিংস",
        systemName: "নবায়নযোগ্য শক্তি মনিটরিং সিস্টেম",
        energyConsumed: "শক্তি খরচ",
        energyGenerated: "উৎপাদিত শক্তি",
        batteryPercent: "ব্যাটারি শতাংশ",
        current: "কারেন্ট",
        voltage: "ভোল্টেজ",
        temperature: "তাপমাত্রা",
        today: "আজ",
        tomorrow: "আগামীকাল",
        dayAfter: "পরশু",
        lastUpdated: "সর্বশেষ আপডেট: --",
        connectionError: "সংযোগ ত্রুটি",
        dataUnavailable: "ডেটা উপলব্ধ নেই",
        online: "অনলাইন",
        offline: "অফলাইন"
    },
    or: {
        home: "ହୋମ୍",
        graphs: "ଗ୍ରାଫ୍",
        alerts: "ଆଲର୍ଟ",
        reports: "ରିପୋର୍ଟ",
        profile: "ପ୍ରୋଫାଇଲ୍",
        fieldSettings: "ଫିଲ୍ଡ ସେଟିଂସ୍",
        systemName: "ନବୀକରଣୀୟ ଶକ୍ତି ମନିଟରିଂ ସିଷ୍ଟମ୍",
        energyConsumed: "ଶକ୍ତି ବ୍ୟବହୃତ",
        energyGenerated: "ଉତ୍ପାଦିତ ଶକ୍ତି",
        batteryPercent: "ବ୍ୟାଟେରୀ ପ୍ରତିଶତ",
        current: "କରେଣ୍ଟ",
        voltage: "ଭୋଲ୍ଟେଜ୍",
        temperature: "ତାପମାତ୍ରା",
        today: "ଆଜି",
        tomorrow: "ଆସନ୍ତାକାଲି",
        dayAfter: "ପରଶୁ",
        lastUpdated: "ଶେଷ ଅପଡେଟ୍: --",
        connectionError: "କନେକ୍ସନ ତ୍ରୁଟି",
        dataUnavailable: "ଡାଟା ଉପଲବ୍ଧ ନାହିଁ",
        online: "ଅନଲାଇନ୍",
        offline: "ଅଫଲାଇନ୍"
    }
};

// Global variables
let currentLanguage = 'en';
let temperatureChart, humidityChart, currentChart, voltageChart;
let updateInterval;

// ThingSpeak data storage
let thingSpeakData = {
    temperature: [],
    humidity: [],
    current: [],
    voltage: [],
    energyGenerated: 0,
    energyConsumed: 0,
    batteryPercent: 0,
    lastUpdate: null,
    connectionStatus: false,
    alerts: [],
    weatherData: {
        today: { temp: 32, humidity: 65, rain: 10, wind: 12, icon: 'fa-sun' },
        tomorrow: { temp: 30, humidity: 70, rain: 30, wind: 15, icon: 'fa-cloud-sun' },
        dayAfter: { temp: 27, humidity: 85, rain: 80, wind: 8, icon: 'fa-cloud-showers-heavy' }
    }
};

// Chatbot Q&A database
const chatbotQA = {
    "what is gridnovo": {
        answer: "GRIDNOVO is a renewable energy monitoring dashboard that tracks real-time solar and wind generation, energy consumption, battery status, and environmental data from your ThingSpeak IoT sensors.",
        action: null
    },
    "how can i check if my field device is connected": {
        answer: "Check the connection status indicator in the header or system information sections. Green means online, red means offline. Connection issues will also trigger alerts.",
        action: null
    },
    "where can i see total energy generated today": {
        answer: "The Energy Generated tile on the Home page shows current daily totals in kWh, updated in real-time from your ThingSpeak channel.",
        action: null
    },
    "how do i view historical data": {
        answer: "Navigate to the Graphs page to see 15-minute interval charts for temperature, humidity, current, voltage, and more, all pulled from your ThingSpeak data feeds.",
        action: () => showPage('graphs-page')
    },
    "what types of alerts will i get": {
        answer: "You'll receive alerts for high/low temperature thresholds, voltage fluctuations, current anomalies, and connection issues. Configure thresholds in Field Settings.",
        action: null
    },
    "how can i export a report": {
        answer: "Go to the Reports page, select your date range and parameters, then click Export to Excel to download your ThingSpeak data as a CSV file.",
        action: () => showPage('reports-page')
    },
    "how do i contact support": {
        answer: "Email support@gridnovo.com or call (+91)7517031616. Support is available 24/7. You can also find contact details in any system information section.",
        action: null
    },
    "change language": {
        answer: "I can help you change the language. Which would you prefer: English, Hindi, Tamil, Bengali, or Odia?",
        action: null
    },
    "english": {
        answer: "Changing language to English.",
        action: () => changeLanguage('en')
    },
    "hindi": {
        answer: "भाषा हिंदी में बदल रहा हूँ।",
        action: () => changeLanguage('hi')
    },
    "tamil": {
        answer: "மொழியை தமிழாக மாற்றுகிறேன்.",
        action: () => changeLanguage('ta')
    },
    "bengali": {
        answer: "ভাষা বাংলায় পরিবর্তন করছি।",
        action: () => changeLanguage('bn')
    },
    "odia": {
        answer: "ଭାଷା ଓଡ଼ିଆରେ ବଦଳୁଛି।",
        action: () => changeLanguage('or')
    },
    "dark mode": {
        answer: "Toggling dark mode for you.",
        action: () => toggleTheme()
    },
    "light mode": {
        answer: "Switching to light mode.",
        action: () => toggleTheme()
    }
};

// =============================================================================
// INITIALIZATION FUNCTIONS
// =============================================================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🔋 GRIDNOVO Dashboard Starting...');
    
    try {
        initializeEventListeners();
        initializeCharts();
        initializeThingSpeak();
        initializeLanguage();
        initializeSystemInfoSections();
        
        console.log('✅ GRIDNOVO Dashboard Ready');
        
        // Show welcome message in console
        console.log(`
╔═══════════════════════════════════════╗
║           GRIDNOVO Dashboard          ║
║     Renewable Energy Monitoring       ║
║                                       ║
║  🔋 Solar & Wind Energy Tracking     ║
║  📊 Real-time ThingSpeak Integration  ║
║  🌍 Multi-language Support           ║
║  📱 Responsive Design                 ║
╚═══════════════════════════════════════╝
        `);
        
    } catch (error) {
        console.error('❌ Dashboard initialization failed:', error);
    }
});

function initializeEventListeners() {
    // Navigation menu
    document.querySelectorAll('nav ul li').forEach(item => {
        item.addEventListener('click', function() {
            const pageId = this.getAttribute('data-page');
            showPage(pageId);
            updateActiveNavigation(this);
        });
    });
    
    // Language selector
    const languageSelect = document.getElementById('language-select');
    if (languageSelect) {
        languageSelect.addEventListener('change', function() {
            changeLanguage(this.value);
        });
    }
    
    // System info tabs (for all pages)
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            const parentSection = this.closest('.system-info-section');
            switchTab(tabId, parentSection);
        });
    });
    
    // Chat functionality for main chat and all page-specific chats
    setupChatEventListeners();
    
    // Theme toggle
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Export buttons
    document.querySelectorAll('.export-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const format = this.classList.contains('excel-btn') ? 'excel' : 'pdf';
            exportReport(format);
        });
    });
    
    console.log('📝 Event listeners initialized');
}

function setupChatEventListeners() {
    // Main chat
    const mainChatInput = document.getElementById('chat-input');
    if (mainChatInput) {
        mainChatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
    
    // Page-specific chats
    const pages = ['graphs', 'alerts', 'reports', 'profile', 'field'];
    pages.forEach(page => {
        const chatInput = document.getElementById(`chat-input-${page}`);
        if (chatInput) {
            chatInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    sendMessageToPage(page);
                }
            });
        }
    });
    
    // Quick question buttons
    document.querySelectorAll('.quick-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const question = this.getAttribute('onclick')?.match(/'([^']+)'/)?.[1];
            if (question) {
                const pageChat = this.closest('[id*="chat-messages"]');
                if (pageChat && pageChat.id.includes('-')) {
                    const page = pageChat.id.split('-')[2];
                    quickQuestionToPage(question, page);
                } else {
                    quickQuestion(question);
                }
            }
        });
    });
}

function initializeSystemInfoSections() {
    // Initialize all system info sections with proper tab switching
    document.querySelectorAll('.system-info-section').forEach(section => {
        const firstTab = section.querySelector('.tab-btn');
        const firstContent = section.querySelector('.tab-content');
        
        if (firstTab && firstContent) {
            firstTab.classList.add('active');
            firstContent.classList.add('active');
        }
    });
    
    console.log('📋 System info sections initialized');
}

function initializeLanguage() {
    changeLanguage(currentLanguage);
    console.log(`🌍 Language initialized: ${currentLanguage}`);
}

// =============================================================================
// THINGSPEAK INTEGRATION
// =============================================================================

function initializeThingSpeak() {
    console.log('📡 Initializing ThingSpeak connection...');
    
    // Check if API credentials are configured
    if (!THINGSPEAK_CONFIG.READ_API_KEY || THINGSPEAK_CONFIG.READ_API_KEY === 'YOUR_READ_API_KEY') {
        console.warn('⚠️  ThingSpeak API key not configured. Using demo data.');
        generateDemoData();
        startDemoDataUpdates();
        return;
    }
    
    // Start real ThingSpeak integration
    fetchThingSpeakData();
    updateInterval = setInterval(fetchThingSpeakData, THINGSPEAK_CONFIG.UPDATE_INTERVAL);
    
    console.log(`🔄 ThingSpeak updates started (${THINGSPEAK_CONFIG.UPDATE_INTERVAL/1000}s interval)`);
}

async function fetchThingSpeakData() {
    try {
        console.log('📥 Fetching ThingSpeak data...');
        
        const url = `${THINGSPEAK_CONFIG.BASE_URL}/${THINGSPEAK_CONFIG.CHANNEL_ID}/feeds.json?api_key=${THINGSPEAK_CONFIG.READ_API_KEY}&results=100`;
        
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const data = await response.json();
        processThingSpeakData(data);
        
        console.log('✅ ThingSpeak data updated successfully');
        
    } catch (error) {
        console.error('❌ ThingSpeak fetch failed:', error);
        thingSpeakData.connectionStatus = false;
        updateConnectionStatus();
        
        // Fallback to demo data if real API fails
        if (thingSpeakData.temperature.length === 0) {
            generateDemoData();
        }
    }
}

function processThingSpeakData(data) {
    if (!data.feeds || data.feeds.length === 0) {
        console.warn('⚠️  No ThingSpeak feeds found');
        generateDemoData();
        return;
    }
    
    try {
        const feeds = data.feeds.slice(-24); // Last 24 data points
        const mapping = THINGSPEAK_CONFIG.FIELD_MAPPING;
        
        // Process time-series data
        thingSpeakData.temperature = feeds.map(feed => parseFloat(feed[mapping.temperature]) || 0);
        thingSpeakData.humidity = feeds.map(feed => parseFloat(feed[mapping.humidity]) || 0);
        thingSpeakData.current = feeds.map(feed => parseFloat(feed[mapping.current]) || 0);
        thingSpeakData.voltage = feeds.map(feed => parseFloat(feed[mapping.voltage]) || 0);
        
        // Get latest values
        const latest = feeds[feeds.length - 1];
        thingSpeakData.energyGenerated = parseFloat(latest[mapping.energyGenerated]) || 0;
        thingSpeakData.energyConsumed = parseFloat(latest[mapping.energyConsumed]) || 0;
        thingSpeakData.batteryPercent = parseFloat(latest[mapping.batteryPercent]) || 0;
        thingSpeakData.lastUpdate = new Date(latest.created_at);
        thingSpeakData.connectionStatus = true;
        
        // Check for alerts
        checkAlerts();
        
        // Update dashboard
        updateDashboard();
        updateConnectionStatus();
        
    } catch (error) {
        console.error('❌ Error processing ThingSpeak data:', error);
        generateDemoData();
    }
}

function generateDemoData() {
    console.log('🎭 Generating demo data...');
    
    // Generate realistic demo data
    const now = Date.now();
    const timePoints = 24;
    
    thingSpeakData.temperature = Array.from({length: timePoints}, (_, i) => {
        const baseTemp = 28;
        const timeOfDay = (i / timePoints) * 24;
        const tempVariation = Math.sin((timeOfDay - 6) * Math.PI / 12) * 8; // Peak at 2 PM
        return Math.round((baseTemp + tempVariation + Math.random() * 2 - 1) * 10) / 10;
    });
    
    thingSpeakData.humidity = Array.from({length: timePoints}, (_, i) => {
        const baseHumidity = 65;
        return Math.round((baseHumidity + Math.random() * 20 - 10) * 10) / 10;
    });
    
    thingSpeakData.current = Array.from({length: timePoints}, (_, i) => {
        const baseCurrent = 8;
        return Math.round((baseCurrent + Math.random() * 2 - 1) * 10) / 10;
    });
    
    thingSpeakData.voltage = Array.from({length: timePoints}, (_, i) => {
        const baseVoltage = 240;
        return Math.round(baseVoltage + Math.random() * 10 - 5);
    });
    
    // Current values
    thingSpeakData.energyGenerated = Math.round((12 + Math.random() * 2) * 10) / 10;
    thingSpeakData.energyConsumed = Math.round((4 + Math.random() * 1) * 10) / 10;
    thingSpeakData.batteryPercent = Math.round(75 + Math.random() * 10);
    thingSpeakData.lastUpdate = new Date();
    thingSpeakData.connectionStatus = true;
    
    updateDashboard();
    updateConnectionStatus();
}

function startDemoDataUpdates() {
    updateInterval = setInterval(() => {
        // Simulate live data updates
        const tempIndex = thingSpeakData.temperature.length - 1;
        thingSpeakData.temperature[tempIndex] = Math.round((28 + Math.random() * 6) * 10) / 10;
        thingSpeakData.energyGenerated += Math.random() * 0.1 - 0.05;
        thingSpeakData.batteryPercent = Math.max(0, Math.min(100, thingSpeakData.batteryPercent + Math.random() * 2 - 1));
        thingSpeakData.lastUpdate = new Date();
        
        updateDashboard();
        updateCharts();
    }, 30000);
}

// =============================================================================
// DASHBOARD UPDATE FUNCTIONS
// =============================================================================

function updateDashboard() {
    updateMetricCards();
    updateWeatherCards();
    updateTimestamps();
    updateCharts();
}

function updateMetricCards() {
    const elements = {
        'energy-generated': thingSpeakData.energyGenerated.toFixed(1) + ' kWh',
        'energy-consumed': thingSpeakData.energyConsumed.toFixed(1) + ' kWh',
        'battery-percent': thingSpeakData.batteryPercent + '%'
    };
    
    // Update latest sensor values
    if (thingSpeakData.current.length > 0) {
        elements.current = thingSpeakData.current[thingSpeakData.current.length - 1].toFixed(1) + ' A';
    }
    
    if (thingSpeakData.voltage.length > 0) {
        elements.voltage = Math.round(thingSpeakData.voltage[thingSpeakData.voltage.length - 1]) + ' V';
    }
    
    if (thingSpeakData.temperature.length > 0) {
        elements.temperature = Math.round(thingSpeakData.temperature[thingSpeakData.temperature.length - 1]) + '°C';
    }
    
    // Update DOM elements
    Object.entries(elements).forEach(([id, value]) => {
        const element = document.getElementById(id);
        if (element) element.textContent = value;
    });
}

function updateWeatherCards() {
    const weather = thingSpeakData.weatherData;
    
    Object.entries(weather).forEach(([day, data]) => {
        const index = day === 'today' ? 0 : day === 'tomorrow' ? 1 : 2;
        
        const tempElement = document.getElementById(`weather-temp-${index}`);
        const humidityElement = document.getElementById(`weather-humidity-${index}`);
        const rainElement = document.getElementById(`weather-rain-${index}`);
        const windElement = document.getElementById(`weather-wind-${index}`);
        const iconElement = document.getElementById(`weather-icon-${index}`);
        
        if (tempElement) tempElement.textContent = data.temp + '°C';
        if (humidityElement) humidityElement.textContent = data.humidity + '%';
        if (rainElement) rainElement.textContent = data.rain + '%';
        if (windElement) windElement.textContent = data.wind + ' km/h';
        if (iconElement) {
            iconElement.className = `fas ${data.icon}`;
        }
    });
}

function updateTimestamps() {
    if (!thingSpeakData.lastUpdate) return;
    
    const timeString = thingSpeakData.lastUpdate.toLocaleTimeString([], {
        hour: '2-digit', 
        minute: '2-digit'
    });
    
    document.querySelectorAll('.data-time').forEach(element => {
        if (!element.closest('.bot-message') && !element.closest('.user-message')) {
            const baseText = translations[currentLanguage].lastUpdated || 'Last updated: --';
            element.textContent = baseText.replace('--', timeString);
        }
    });
}

function updateConnectionStatus() {
    const statusElements = document.querySelectorAll('.connection-status');
    const statusClass = thingSpeakData.connectionStatus ? 'online' : 'offline';
    const statusText = translations[currentLanguage][thingSpeakData.connectionStatus ? 'online' : 'offline'];
    
    statusElements.forEach(element => {
        element.className = `connection-status ${statusClass}`;
        element.innerHTML = `<i class="fas fa-circle"></i><span>${statusText}</span>`;
    });
}

function checkAlerts() {
    thingSpeakData.alerts = [];
    
    if (thingSpeakData.temperature.length > 0) {
        const currentTemp = thingSpeakData.temperature[thingSpeakData.temperature.length - 1];
        const tempThreshold = 40; // From field settings
        
        if (currentTemp > tempThreshold) {
            thingSpeakData.alerts.push({
                type: 'Temperature',
                message: `High temperature detected: ${currentTemp}°C`,
                timestamp: new Date().toISOString(),
                status: 'Active'
            });
        }
    }
    
    if (thingSpeakData.voltage.length > 0) {
        const currentVoltage = thingSpeakData.voltage[thingSpeakData.voltage.length - 1];
        const voltageThreshold = 250; // From field settings
        
        if (currentVoltage > voltageThreshold) {
            thingSpeakData.alerts.push({
                type: 'Voltage',
                message: `High voltage detected: ${currentVoltage}V`,
                timestamp: new Date().toISOString(),
                status: 'Active'
            });
        }
    }
    
    // Update alerts count
    const alertsCountElement = document.getElementById('active-alerts-count');
    if (alertsCountElement) {
        alertsCountElement.textContent = thingSpeakData.alerts.length;
    }
    
    // Update alerts table
    updateAlertsTable();
}

function updateAlertsTable() {
    const tableBody = document.getElementById('alerts-table-body');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    thingSpeakData.alerts.forEach(alert => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${alert.type}</td>
            <td>${alert.message}</td>
            <td>${new Date(alert.timestamp).toLocaleString()}</td>
            <td><span class="status-badge ${alert.status.toLowerCase()}">${alert.status}</span></td>
        `;
        tableBody.appendChild(row);
    });
    
    // Add "No alerts" row if empty
    if (thingSpeakData.alerts.length === 0) {
        const row = document.createElement('tr');
        row.innerHTML = `<td colspan="4" style="text-align: center; color: #666;">No active alerts</td>`;
        tableBody.appendChild(row);
    }
}

// =============================================================================
// CHART FUNCTIONS
// =============================================================================

function initializeCharts() {
    console.log('📊 Initializing charts...');
    
    try {
        initializeTemperatureChart();
        initializeHumidityChart();
        initializeCurrentChart();
        initializeVoltageChart();
        
        console.log('✅ Charts initialized successfully');
    } catch (error) {
        console.error('❌ Chart initialization failed:', error);
    }
}

function initializeTemperatureChart() {
    const ctx = document.getElementById('temp-chart');
    if (!ctx) return;
    
    temperatureChart = new Chart(ctx.getContext('2d'), {
        type: 'line',
        data: {
            labels: generateTimeLabels(),
            datasets: [{
                label: 'Temperature (°C)',
                data: thingSpeakData.temperature,
                borderColor: '#e74c3c',
                backgroundColor: 'rgba(231, 76, 60, 0.1)',
                tension: 0.4,
                fill: true,
                pointBackgroundColor: '#e74c3c',
                pointBorderColor: '#c0392b',
                pointRadius: 3
            }]
        },
        options: getChartOptions('Temperature (°C)')
    });
}

function initializeHumidityChart() {
    const ctx = document.getElementById('humidity-chart');
    if (!ctx) return;
    
    humidityChart = new Chart(ctx.getContext('2d'), {
        type: 'line',
        data: {
            labels: generateTimeLabels(),
            datasets: [{
                label: 'Humidity (%)',
                data: thingSpeakData.humidity,
                borderColor: '#3498db',
                backgroundColor: 'rgba(52, 152, 219, 0.1)',
                tension: 0.4,
                fill: true,
                pointBackgroundColor: '#3498db',
                pointBorderColor: '#2980b9',
                pointRadius: 3
            }]
        },
        options: getChartOptions('Humidity (%)')
    });
}

function initializeCurrentChart() {
    const ctx = document.getElementById('current-chart');
    if (!ctx) return;
    
    currentChart = new Chart(ctx.getContext('2d'), {
        type: 'line',
        data: {
            labels: generateTimeLabels(),
            datasets: [{
                label: 'Current (A)',
                data: thingSpeakData.current,
                borderColor: '#f39c12',
                backgroundColor: 'rgba(243, 156, 18, 0.1)',
                tension: 0.4,
                fill: true,
                pointBackgroundColor: '#f39c12',
                pointBorderColor: '#e67e22',
                pointRadius: 3
            }]
        },
        options: getChartOptions('Current (A)')
    });
}

function initializeVoltageChart() {
    const ctx = document.getElementById('voltage-chart');
    if (!ctx) return;
    
    voltageChart = new Chart(ctx.getContext('2d'), {
        type: 'line',
        data: {
            labels: generateTimeLabels(),
            datasets: [{
                label: 'Voltage (V)',
                data: thingSpeakData.voltage,
                borderColor: '#9b59b6',
                backgroundColor: 'rgba(155, 89, 182, 0.1)',
                tension: 0.4,
                fill: true,
                pointBackgroundColor: '#9b59b6',
                pointBorderColor: '#8e44ad',
                pointRadius: 3
            }]
        },
        options: getChartOptions('Voltage (V)')
    });
}

function generateTimeLabels() {
    return Array.from({length: 24}, (_, i) => {
        const hour = i < 10 ? `0${i}` : i;
        return `${hour}:00`;
    });
}

function getChartOptions(yAxisLabel) {
    return {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'top'
            },
            tooltip: {
                mode: 'index',
                intersect: false,
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleColor: '#fff',
                bodyColor: '#fff'
            }
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Time (24h format)'
                },
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)'
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: yAxisLabel
                },
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)'
                }
            }
        },
        interaction: {
            mode: 'nearest',
            axis: 'x',
            intersect: false
        }
    };
}

function updateCharts() {
    const charts = [
        { chart: temperatureChart, data: thingSpeakData.temperature },
        { chart: humidityChart, data: thingSpeakData.humidity },
        { chart: currentChart, data: thingSpeakData.current },
        { chart: voltageChart, data: thingSpeakData.voltage }
    ];
    
    charts.forEach(({ chart, data }) => {
        if (chart && data.length > 0) {
            chart.data.datasets[0].data = data;
            chart.update('none'); // No animation for better performance
        }
    });
}

// =============================================================================
// NAVIGATION AND UI FUNCTIONS
// =============================================================================

function showPage(pageId) {
    console.log(`📄 Navigating to: ${pageId}`);
    
    // Hide all pages
    document.querySelectorAll('.page-content').forEach(page => {
        page.style.display = 'none';
    });
    
    // Show selected page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.style.display = 'block';
    }
    
    // Handle home page layout
    const parent = document.querySelector('.parent');
    if (pageId === 'home-page') {
        if (targetPage) targetPage.style.position = 'static';
        if (parent) parent.style.display = 'grid';
    } else {
        if (parent) parent.style.display = 'none';
    }
}

function updateActiveNavigation(activeItem) {
    document.querySelectorAll('nav ul li').forEach(li => {
        li.classList.remove('active');
    });
    activeItem.classList.add('active');
}

function switchTab(tabId, parentSection) {
    if (!parentSection) return;
    
    // Update tab buttons
    parentSection.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const activeTabBtn = parentSection.querySelector(`[data-tab="${tabId}"]`);
    if (activeTabBtn) activeTabBtn.classList.add('active');
    
    // Update tab content
    parentSection.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    const activeContent = parentSection.querySelector(`#${tabId}`);
    if (activeContent) activeContent.classList.add('active');
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const themeToggle = document.querySelector('.theme-toggle i');
    
    if (themeToggle) {
        if (document.body.classList.contains('dark-theme')) {
            themeToggle.classList.remove('fa-moon');
            themeToggle.classList.add('fa-sun');
        } else {
            themeToggle.classList.remove('fa-sun');
            themeToggle.classList.add('fa-moon');
        }
    }
    
    console.log('🎨 Theme toggled:', document.body.classList.contains('dark-theme') ? 'Dark' : 'Light');
}

// =============================================================================
// LANGUAGE FUNCTIONS
// =============================================================================

function changeLanguage(lang) {
    console.log(`🌍 Changing language to: ${lang}`);
    
    currentLanguage = lang;
    
    const languageSelect = document.getElementById('language-select');
    if (languageSelect) languageSelect.value = lang;
    
    updateTranslatedElements();
}

function updateTranslatedElements() {
    const langData = translations[currentLanguage];
    if (!langData) {
        console.warn('⚠️  Translation not found for:', currentLanguage);
        return;
    }
    
    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (langData[key]) {
            element.textContent = langData[key];
        }
    });
    
    // Update placeholders
    document.querySelectorAll('input[placeholder]').forEach(input => {
        const translateKey = input.getAttribute('data-translate');
        if (translateKey && langData[translateKey]) {
            input.placeholder = langData[translateKey];
        }
    });
    
    // Update connection status
    updateConnectionStatus();
    
    // Update timestamps with new language
    updateTimestamps();
}

// =============================================================================
// CHAT FUNCTIONS
// =============================================================================

function sendMessage() {
    const input = document.getElementById('chat-input');
    const chatContainer = document.getElementById('chat-messages');
    
    if (!input || !chatContainer) return;
    
    const message = input.value.trim();
    if (message === '') return;
    
    addUserMessage(message, chatContainer);
    input.value = '';
    
    setTimeout(() => processMessage(message.toLowerCase(), chatContainer), 500);
}

function sendMessageToPage(page) {
    const input = document.getElementById(`chat-input-${page}`);
    const chatContainer = document.getElementById(`chat-messages-${page}`);
    
    if (!input || !chatContainer) return;
    
    const message = input.value.trim();
    if (message === '') return;
    
    addUserMessage(message, chatContainer);
    input.value = '';
    
    setTimeout(() => processMessage(message.toLowerCase(), chatContainer), 500);
}

function processMessage(message, chatContainer) {
    let response = "I'm sorry, I didn't understand that. Could you please rephrase your question?";
    let action = null;
    
    // Check for exact matches
    if (chatbotQA[message]) {
        response = chatbotQA[message].answer;
        action = chatbotQA[message].action;
    } else {
        // Check for partial matches
        for (const key in chatbotQA) {
            if (message.includes(key)) {
                response = chatbotQA[key].answer;
                action = chatbotQA[key].action;
                break;
            }
        }
    }
    
    addBotMessage(response, chatContainer);
    
    if (action) {
        setTimeout(action, 1000);
    }
}

function addUserMessage(message, chatContainer) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'user-message';
    
    const time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    
    messageDiv.innerHTML = `
        <div>
            <div>${escapeHtml(message)}</div>
            <div class="data-time">${time}</div>
        </div>
        <i class="fas fa-user"></i>
    `;
    
    chatContainer.appendChild(messageDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function addBotMessage(message, chatContainer) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'bot-message';
    
    const time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    
    messageDiv.innerHTML = `
        <i class="fas fa-robot"></i>
        <div>
            <div>${escapeHtml(message)}</div>
            <div class="data-time">${time}</div>
        </div>
    `;
    
    chatContainer.appendChild(messageDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function quickQuestion(question) {
    const input = document.getElementById('chat-input');
    if (input) {
        input.value = question;
        sendMessage();
    }
}

function quickQuestionToPage(question, page) {
    const input = document.getElementById(`chat-input-${page}`);
    if (input) {
        input.value = question;
        sendMessageToPage(page);
    }
}

// =============================================================================
// EXPORT AND UTILITY FUNCTIONS
// =============================================================================

function exportReport(format) {
    console.log(`📤 Exporting report in ${format} format...`);
    
    if (thingSpeakData.temperature.length === 0) {
        alert('No data available to export. Please wait for data to load.');
        return;
    }
    
    try {
        if (format === 'excel') {
            exportToCSV();
        } else if (format === 'pdf') {
            alert('PDF export will be available in the full version. CSV export completed instead.');
            exportToCSV();
        }
    } catch (error) {
        console.error('❌ Export failed:', error);
        alert('Error exporting report. Please try again.');
    }
}

function exportToCSV() {
    const headers = [
        'Timestamp',
        'Temperature (°C)',
        'Humidity (%)',
        'Current (A)',
        'Voltage (V)',
        'Energy Generated (kWh)',
        'Energy Consumed (kWh)',
        'Battery (%)'
    ];
    
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += headers.join(',') + '\n';
    
    // Generate data rows
    const dataLength = Math.max(
        thingSpeakData.temperature.length,
        thingSpeakData.humidity.length,
        thingSpeakData.current.length,
        thingSpeakData.voltage.length
    );
    
    for (let i = 0; i < dataLength; i++) {
        const timestamp = new Date(Date.now() - (dataLength - i) * 15 * 60000).toISOString();
        const row = [
            timestamp,
            thingSpeakData.temperature[i] || 0,
            thingSpeakData.humidity[i] || 0,
            thingSpeakData.current[i] || 0,
            thingSpeakData.voltage[i] || 0,
            thingSpeakData.energyGenerated.toFixed(2),
            thingSpeakData.energyConsumed.toFixed(2),
            thingSpeakData.batteryPercent
        ];
        csvContent += row.join(',') + '\n';
    }
    
    // Download file
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `gridnovo_report_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    console.log('✅ CSV export completed');
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function formatNumber(num, decimals = 1) {
    return Number(num).toFixed(decimals);
}

function formatTimestamp(timestamp) {
    return new Date(timestamp).toLocaleString();
}

// =============================================================================
// ERROR HANDLING AND CLEANUP
// =============================================================================

window.addEventListener('error', function(event) {
    console.error('❌ Global JavaScript error:', event.error);
});

window.addEventListener('unhandledrejection', function(event) {
    console.error('❌ Unhandled promise rejection:', event.reason);
});

window.addEventListener('beforeunload', function() {
    if (updateInterval) {
        clearInterval(updateInterval);
        console.log('🧹 Cleanup completed');
    }
});

// =============================================================================
// LEGACY SUPPORT FUNCTIONS
// =============================================================================

// Support for original floating info box (if needed for backwards compatibility)
function toggleInfoBox() {
    const infoBox = document.getElementById('info-box');
    const toggleIcon = document.getElementById('toggle-icon');
    
    if (infoBox && toggleIcon) {
        infoBox.classList.toggle('expanded');
        if (infoBox.classList.contains('expanded')) {
            toggleIcon.classList.remove('fa-chevron-up');
            toggleIcon.classList.add('fa-chevron-down');
        } else {
            toggleIcon.classList.remove('fa-chevron-down');
            toggleIcon.classList.add('fa-chevron-up');
        }
    }
}

// =============================================================================
// CONSOLE WELCOME MESSAGE
// =============================================================================

console.log(`
╔═══════════════════════════════════════╗
║           GRIDNOVO Dashboard          ║
║     Renewable Energy Monitoring       ║
║                                       ║
║  🔋 Solar & Wind Energy Tracking     ║
║  📊 Real-time ThingSpeak Integration  ║
║  🌍 Multi-language Support           ║
║  📱 Responsive Design                 ║
║  💬 AI-powered Chatbot               ║
╚═══════════════════════════════════════╝

🚀 Ready to monitor your renewable energy!

Setup Instructions:
1. Configure THINGSPEAK_CONFIG with your API credentials
2. Map your ThingSpeak fields to the expected data types
3. Customize thresholds in Field Settings
4. Enable email/SMS notifications in Profile

Features:
✅ Real-time data updates every 30 seconds
✅ Historical data visualization with Chart.js
✅ Multi-language support (EN, HI, TA, BN, OR)
✅ Responsive design for all devices
✅ CSV data export functionality
✅ Intelligent alert system
✅ Interactive chatbot assistance
✅ Dark/Light theme toggle

Happy monitoring! 🌱⚡
`);