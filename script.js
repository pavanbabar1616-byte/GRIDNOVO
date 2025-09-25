
// ThingSpeak Configuration
const THINGSPEAK_CONFIG = {
    READ_API_KEY: '3HDWQQTF7799XGAX',
    CHANNEL_ID: '3074276',
    BASE_URL: 'https://api.thingspeak.com/channels',
    UPDATE_INTERVAL: 30000, // 30 seconds (keep this for dashboard updates)
    MAX_RESULTS: 200, // Get more data points for better graphs
    
    // NEW: Add parameters for 10-minute interval averaging
    AVERAGE_MINUTES: 10, // Average data over 10-minute intervals
    
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
    rawTimestamps: [],
    temperature: [],
    humidity: [],
    current: [],
    voltage: [],
    energyGenerated: [],
    energyConsumed: [],
    batteryPercent: [],
    lastUpdate: null,
    connectionStatus: false,
    channelInfo: null,
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
       initializeThingSpeakWith10MinInterval();
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
// Initialize ThingSpeak with enhanced error handling
async function initializeThingSpeakWith10MinInterval() {
    console.log('📡 Initializing ThingSpeak connection with 10-minute intervals...');
    
    // Check if API credentials are configured
    if (!THINGSPEAK_CONFIG.READ_API_KEY || THINGSPEAK_CONFIG.READ_API_KEY === 'YOUR_READ_API_KEY') {
        console.warn('⚠️ ThingSpeak API key not configured. Using demo data.');
        generateDemoData();
        startDemoDataUpdates();
        return;
    }
    
    try {
        // Fetch channel info first
        await fetchChannelInfo();
        
        // Fetch initial data with 10-minute intervals
        await fetchThingSpeakDataWith10MinInterval();
        
        // Start real-time updates (still every 30 seconds for dashboard)
        updateInterval = setInterval(fetchThingSpeakDataWith10MinInterval, THINGSPEAK_CONFIG.UPDATE_INTERVAL);
        
        console.log(`🔄 ThingSpeak updates started (${THINGSPEAK_CONFIG.UPDATE_INTERVAL/1000}s interval) with 10-minute data averaging`);
        
    } catch (error) {
        console.error('❌ ThingSpeak initialization failed:', error);
        generateDemoData();
        startDemoDataUpdates();
    }
}

async function fetchChannelInfo() {
    try {
        const url = `${THINGSPEAK_CONFIG.BASE_URL}/${THINGSPEAK_CONFIG.CHANNEL_ID}.json?api_key=${THINGSPEAK_CONFIG.READ_API_KEY}`;
        
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const data = await response.json();
        thingSpeakData.channelInfo = data;
        
        console.log('📋 Channel Info:', {
            name: data.name,
            description: data.description,
            fields: {
                field1: data.field1 || 'Temperature',
                field2: data.field2 || 'Humidity', 
                field3: data.field3 || 'Current',
                field4: data.field4 || 'Voltage'
            }
        });
        
    } catch (error) {
        console.warn('⚠️ Could not fetch channel info:', error.message);
    }
}
async function fetchThingSpeakDataWith10MinInterval() {
    try {
        console.log('📥 Fetching ThingSpeak data with 10-minute intervals...');
        
        // Method 1: Use ThingSpeak's built-in averaging (if available)
        // Add 'average=10' parameter to get 10-minute averages
        const url = `${THINGSPEAK_CONFIG.BASE_URL}/${THINGSPEAK_CONFIG.CHANNEL_ID}/feeds.json?api_key=${THINGSPEAK_CONFIG.READ_API_KEY}&results=${THINGSPEAK_CONFIG.MAX_RESULTS}&average=10`;
        
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const data = await response.json();
        processThingSpeakDataWith10MinInterval(data);
        
        console.log('✅ ThingSpeak data updated successfully with 10-minute intervals');
        
    } catch (error) {
        console.error('❌ ThingSpeak fetch failed:', error);
        
        // Fallback: Try without averaging parameter and do client-side averaging
        try {
            await fetchAndAverageClientSide();
        } catch (fallbackError) {
            console.error('❌ Fallback method also failed:', fallbackError);
            thingSpeakData.connectionStatus = false;
            updateConnectionStatus();
        }
    }
}
async function fetchAndAverageClientSide() {
    console.log('📊 Performing client-side 10-minute averaging...');
    
    // Get more data points for averaging (e.g., last 1000 entries)
    const url = `${THINGSPEAK_CONFIG.BASE_URL}/${THINGSPEAK_CONFIG.CHANNEL_ID}/feeds.json?api_key=${THINGSPEAK_CONFIG.READ_API_KEY}&results=1000`;
    
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();
    const averagedData = averageDataBy10Minutes(data);
    processThingSpeakDataWith10MinInterval(averagedData);
}
function averageDataBy10Minutes(data) {
    if (!data.feeds || data.feeds.length === 0) {
        return data;
    }
    
    const feeds = data.feeds;
    const averagedFeeds = [];
    const intervalMs = 10 * 60 * 1000; // 10 minutes in milliseconds
    
    // Group feeds by 10-minute intervals
    const groups = {};
    
    feeds.forEach(feed => {
        const timestamp = new Date(feed.created_at);
        // Round down to nearest 10-minute interval
        const intervalStart = new Date(Math.floor(timestamp.getTime() / intervalMs) * intervalMs);
        const intervalKey = intervalStart.getTime();
        
        if (!groups[intervalKey]) {
            groups[intervalKey] = [];
        }
        groups[intervalKey].push(feed);
    });
    
    // Calculate averages for each interval
    Object.keys(groups).forEach(intervalKey => {
        const groupFeeds = groups[intervalKey];
        const intervalStart = new Date(parseInt(intervalKey));
        
        // Calculate average values for each field
        const averagedFeed = {
            created_at: intervalStart.toISOString(),
            entry_id: groupFeeds[0].entry_id, // Use first entry_id in the group
        };
        
        // Average each field
        Object.values(THINGSPEAK_CONFIG.FIELD_MAPPING).forEach(fieldName => {
            const validValues = groupFeeds
                .map(feed => parseFloat(feed[fieldName]))
                .filter(val => !isNaN(val));
            
            if (validValues.length > 0) {
                const average = validValues.reduce((sum, val) => sum + val, 0) / validValues.length;
                averagedFeed[fieldName] = average.toFixed(2);
            } else {
                averagedFeed[fieldName] = null;
            }
        });
        
        averagedFeeds.push(averagedFeed);
    });
    // Sort by timestamp
    averagedFeeds.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
    
    console.log(`📈 Averaged ${feeds.length} data points into ${averagedFeeds.length} 10-minute intervals`);
    
    return {
        ...data,
        feeds: averagedFeeds
    };
}
function processThingSpeakDataWith10MinInterval(data) {
    if (!data.feeds || data.feeds.length === 0) {
        console.warn('⚠️ No ThingSpeak feeds found');
        generateDemoData();
        return;
    }
    
    try {
        const feeds = data.feeds;
        const mapping = THINGSPEAK_CONFIG.FIELD_MAPPING;
        
        console.log(`📊 Processing ${feeds.length} averaged data points (10-min intervals)`);
        
        // Store raw timestamps as Date objects for native x-axis
        thingSpeakData.rawTimestamps = feeds.map(feed => new Date(feed.created_at));
        
        // Process field data, preserving null values for gaps
        thingSpeakData.temperature = feeds.map(feed => {
            const val = parseFloat(feed[mapping.temperature]);
            return isNaN(val) ? null : val;
        });
        
        thingSpeakData.humidity = feeds.map(feed => {
            const val = parseFloat(feed[mapping.humidity]);
            return isNaN(val) ? null : val;
        });
        
        thingSpeakData.current = feeds.map(feed => {
            const val = parseFloat(feed[mapping.current]);
            return isNaN(val) ? null : val;
        });
        
        thingSpeakData.voltage = feeds.map(feed => {
            const val = parseFloat(feed[mapping.voltage]);
            return isNaN(val) ? null : val;
        });
        
        thingSpeakData.energyGenerated = feeds.map(feed => {
            const val = parseFloat(feed[mapping.energyGenerated]);
            return isNaN(val) ? null : val;
        });
        
        thingSpeakData.energyConsumed = feeds.map(feed => {
            const val = parseFloat(feed[mapping.energyConsumed]);
            return isNaN(val) ? null : val;
        });
        
        thingSpeakData.batteryPercent = feeds.map(feed => {
            const val = parseFloat(feed[mapping.batteryPercent]);
            return isNaN(val) ? null : val;
        });
        
        // Get latest non-null values for dashboard cards
        const latest = feeds[feeds.length - 1];
        thingSpeakData.lastUpdate = new Date(latest.created_at);
        thingSpeakData.connectionStatus = true;
        
        // Log the time interval between data points
        if (thingSpeakData.rawTimestamps.length > 1) {
            const timeDiff = thingSpeakData.rawTimestamps[1].getTime() - thingSpeakData.rawTimestamps[0].getTime();
            const intervalMinutes = Math.round(timeDiff / (1000 * 60));
            console.log(`⏱️ Data interval: ~${intervalMinutes} minutes between points`);
        }
        
        // Log data ranges for debugging
        console.log('📈 Data Ranges (10-min averages):', {
            timespan: {
                start: thingSpeakData.rawTimestamps[0]?.toISOString(),
                end: thingSpeakData.rawTimestamps[thingSpeakData.rawTimestamps.length - 1]?.toISOString()
            },
            temperature: getDataRange(thingSpeakData.temperature),
            humidity: getDataRange(thingSpeakData.humidity),
            current: getDataRange(thingSpeakData.current),
            voltage: getDataRange(thingSpeakData.voltage)
        });
        
        // Check for alerts based on thresholds
        checkAlerts();
        
        // Update dashboard and charts
        updateDashboard();
        updateConnectionStatus();
        
    } catch (error) {
        console.error('❌ Error processing ThingSpeak data:', error);
        generateDemoData();
    }
}


// Helper function to get data range (min/max) ignoring null values
function getDataRange(dataArray) {
    const validData = dataArray.filter(val => val !== null && !isNaN(val));
    if (validData.length === 0) return { min: null, max: null, count: 0 };
    
    return {
        min: Math.min(...validData),
        max: Math.max(...validData),
        count: validData.length,
        nullCount: dataArray.length - validData.length
    };
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

function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.body.classList.add('dark-theme');
        const themeToggle = document.querySelector('.theme-toggle i');
        if (themeToggle) {
            themeToggle.classList.remove('fa-moon');
            themeToggle.classList.add('fa-sun');
        }
    }
    
    console.log('🎨 Theme initialized:', document.body.classList.contains('dark-theme') ? 'Dark' : 'Light');
}
function updateDashboardWithNativeData() {
    // Get latest non-null values for each metric
    const getLatestValue = (dataArray) => {
        for (let i = dataArray.length - 1; i >= 0; i--) {
            if (dataArray[i] !== null && !isNaN(dataArray[i])) {
                return dataArray[i];
            }
        }
        return null;
    };
    
    const latestTemp = getLatestValue(thingSpeakData.temperature);
    const latestEnergy = getLatestValue(thingSpeakData.energyGenerated);
    const latestCurrent = getLatestValue(thingSpeakData.current);
    const latestVoltage = getLatestValue(thingSpeakData.voltage);
    const latestBattery = getLatestValue(thingSpeakData.batteryPercent);
    const latestConsumed = getLatestValue(thingSpeakData.energyConsumed);
    
    // Update DOM elements with latest values
    const updates = {};
    
    if (latestTemp !== null) updates.temperature = Math.round(latestTemp) + '°C';
    if (latestEnergy !== null) updates['energy-generated'] = latestEnergy.toFixed(1) + ' kWh';
    if (latestCurrent !== null) updates.current = latestCurrent.toFixed(1) + ' A';
    if (latestVoltage !== null) updates.voltage = Math.round(latestVoltage) + ' V';
    if (latestBattery !== null) updates['battery-percent'] = Math.round(latestBattery) + '%';
    if (latestConsumed !== null) updates['energy-consumed'] = latestConsumed.toFixed(1) + ' kWh';
    
    // Apply updates to DOM
    Object.entries(updates).forEach(([id, value]) => {
        const element = document.getElementById(id);
        if (element) element.textContent = value;
    });
    
    // Update timestamps
    updateTimestamps();
    updateNativeCharts();
}


function updateDashboardWithNativeData() {
    // Get latest non-null values for each metric
    const getLatestValue = (dataArray) => {
        for (let i = dataArray.length - 1; i >= 0; i--) {
            if (dataArray[i] !== null && !isNaN(dataArray[i])) {
                return dataArray[i];
            }
        }
        return null;
    };
    
    const latestTemp = getLatestValue(thingSpeakData.temperature);
    const latestEnergy = getLatestValue(thingSpeakData.energyGenerated);
    const latestCurrent = getLatestValue(thingSpeakData.current);
    const latestVoltage = getLatestValue(thingSpeakData.voltage);
    const latestBattery = getLatestValue(thingSpeakData.batteryPercent);
    const latestConsumed = getLatestValue(thingSpeakData.energyConsumed);
    
    // Update DOM elements with latest values
    const updates = {};
    
    if (latestTemp !== null) updates.temperature = Math.round(latestTemp) + '°C';
    if (latestEnergy !== null) updates['energy-generated'] = latestEnergy.toFixed(1) + ' kWh';
    if (latestCurrent !== null) updates.current = latestCurrent.toFixed(1) + ' A';
    if (latestVoltage !== null) updates.voltage = Math.round(latestVoltage) + ' V';
    if (latestBattery !== null) updates['battery-percent'] = Math.round(latestBattery) + '%';
    if (latestConsumed !== null) updates['energy-consumed'] = latestConsumed.toFixed(1) + ' kWh';
    
    // Apply updates to DOM
    Object.entries(updates).forEach(([id, value]) => {
        const element = document.getElementById(id);
        if (element) element.textContent = value;
    });
    
    // Update timestamps
    updateTimestamps();
    updateNativeCharts();
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

function initializeChartsWithNativeAxes() {
    console.log('📊 Initializing charts with native ThingSpeak axes...');
    
    try {
        if (document.getElementById('temp-chart')) {
            initializeNativeTemperatureChart();
        }
        if (document.getElementById('humidity-chart')) {
            initializeNativeHumidityChart();
        }
        if (document.getElementById('current-chart')) {
            initializeNativeCurrentChart();
        }
        if (document.getElementById('voltage-chart')) {
            initializeNativeVoltageChart();
        }
        
        console.log('✅ Native charts initialized successfully');
    } catch (error) {
        console.error('❌ Native chart initialization failed:', error);
    }
}

function initializeNativeTemperatureChart() {
    const ctx = document.getElementById('temp-chart');
    if (!ctx) return;
    
    const fieldName = thingSpeakData.channelInfo?.field1 || 'Temperature';
    
    temperatureChart = new Chart(ctx.getContext('2d'), {
        type: 'line',
        data: {
            datasets: [{
                label: `${fieldName} (°C)`,
                data: thingSpeakData.rawTimestamps.map((time, index) => ({
                    x: time,
                    y: thingSpeakData.temperature[index]
                })),
                borderColor: '#e74c3c',
                backgroundColor: 'rgba(231, 76, 60, 0.1)',
                tension: 0.2,
                fill: false,
                pointBackgroundColor: '#e74c3c',
                pointBorderColor: '#c0392b',
                pointRadius: 2,
                pointHoverRadius: 6,
                spanGaps: false // Don't connect across null values
            }]
        },
        options: getNativeChartOptions('Temperature (°C)', '°C')
    });
}

function initializeNativeHumidityChart() {
    const ctx = document.getElementById('humidity-chart');
    if (!ctx) return;
    
    const fieldName = thingSpeakData.channelInfo?.field2 || 'Humidity';
    
    humidityChart = new Chart(ctx.getContext('2d'), {
        type: 'line',
        data: {
            datasets: [{
                label: `${fieldName} (%)`,
                data: thingSpeakData.rawTimestamps.map((time, index) => ({
                    x: time,
                    y: thingSpeakData.humidity[index]
                })),
                borderColor: '#3498db',
                backgroundColor: 'rgba(52, 152, 219, 0.1)',
                tension: 0.2,
                fill: false,
                pointBackgroundColor: '#3498db',
                pointBorderColor: '#2980b9',
                pointRadius: 2,
                pointHoverRadius: 6,
                spanGaps: false
            }]
        },
        options: getNativeChartOptions('Humidity (%)', '%')
    });
}

function initializeNativeCurrentChart() {
    const ctx = document.getElementById('current-chart');
    if (!ctx) return;
    
    const fieldName = thingSpeakData.channelInfo?.field3 || 'Current';
    
    currentChart = new Chart(ctx.getContext('2d'), {
        type: 'line',
        data: {
            datasets: [{
                label: `${fieldName} (A)`,
                data: thingSpeakData.rawTimestamps.map((time, index) => ({
                    x: time,
                    y: thingSpeakData.current[index]
                })),
                borderColor: '#f39c12',
                backgroundColor: 'rgba(243, 156, 18, 0.1)',
                tension: 0.2,
                fill: false,
                pointBackgroundColor: '#f39c12',
                pointBorderColor: '#e67e22',
                pointRadius: 2,
                pointHoverRadius: 6,
                spanGaps: false
            }]
        },
        options: getNativeChartOptions('Current (A)', 'A')
    });
}

// Native voltage chart with ThingSpeak timestamps
function initializeNativeVoltageChart() {
    const ctx = document.getElementById('voltage-chart');
    if (!ctx) return;
    
    const fieldName = thingSpeakData.channelInfo?.field4 || 'Voltage';
    
    voltageChart = new Chart(ctx.getContext('2d'), {
        type: 'line',
        data: {
            datasets: [{
                label: `${fieldName} (V)`,
                data: thingSpeakData.rawTimestamps.map((time, index) => ({
                    x: time,
                    y: thingSpeakData.voltage[index]
                })),
                borderColor: '#9b59b6',
                backgroundColor: 'rgba(155, 89, 182, 0.1)',
                tension: 0.2,
                fill: false,
                pointBackgroundColor: '#9b59b6',
                pointBorderColor: '#8e44ad',
                pointRadius: 2,
                pointHoverRadius: 6,
                spanGaps: false
            }]
        },
        options: getNativeChartOptions('Voltage (V)', 'V')
    });
}


function generateTimeLabels() {
    return Array.from({length: 24}, (_, i) => {
        const hour = i < 10 ? `0${i}` : i;
        return `${hour}:00`;
    });
}

function getNativeChartOptions(yAxisLabel, unit) {
    return {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'top'
            },
            tooltip: {
                mode: 'nearest',
                intersect: false,
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleColor: '#fff',
                bodyColor: '#fff',
                callbacks: {
                    title: function(context) {
                        return new Date(context[0].parsed.x).toLocaleString();
                    },
                    label: function(context) {
                        const value = context.parsed.y;
                        return value !== null ? `${context.dataset.label}: ${value} ${unit}` : 'No data';
                    }
                }
            },
            zoom: {
                pan: {
                    enabled: true,
                    mode: 'x'
                },
                zoom: {
                    wheel: {
                        enabled: true
                    },
                    pinch: {
                        enabled: true
                    },
                    mode: 'x'
                }
            }
        },
        scales: {
            x: {
                type: 'time',
                time: {
                    displayFormats: {
                        minute: 'MMM dd HH:mm',
                        hour: 'MMM dd HH:mm',
                        day: 'MMM dd'
                    }
                },
                title: {
                    display: true,
                    text: 'Timestamp (ThingSpeak UTC)'
                },
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)'
                }
            },
            y: {
                title: {
                    display: true,
                    text: yAxisLabel
                },
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)'
                },
                beginAtZero: false // Let ThingSpeak data determine the range
            }
        },
        interaction: {
            mode: 'nearest',
            axis: 'x',
            intersect: false
        }
    };
}


function updateNativeCharts() {
    const charts = [
        { 
            chart: temperatureChart, 
            data: thingSpeakData.temperature,
            timestamps: thingSpeakData.rawTimestamps 
        },
        { 
            chart: humidityChart, 
            data: thingSpeakData.humidity,
            timestamps: thingSpeakData.rawTimestamps 
        },
        { 
            chart: currentChart, 
            data: thingSpeakData.current,
            timestamps: thingSpeakData.rawTimestamps 
        },
        { 
            chart: voltageChart, 
            data: thingSpeakData.voltage,
            timestamps: thingSpeakData.rawTimestamps 
        }
    ];
    
    charts.forEach(({ chart, data, timestamps }) => {
        if (chart && data.length > 0 && timestamps.length > 0) {
            // Update data with native timestamp-value pairs
            chart.data.datasets[0].data = timestamps.map((time, index) => ({
                x: time,
                y: data[index]
            }));
            
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
    
    // Initialize native charts when graphs page is loaded
    if (pageId === 'graphs-page') {
        setTimeout(() => {
            initializeChartsWithNativeAxes();
        }, 100); // Small delay to ensure DOM is ready
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

function exportThingSpeakNativeCSV() {
    if (thingSpeakData.rawTimestamps.length === 0) {
        alert('No ThingSpeak data available to export.');
        return;
    }
    
    const headers = [
        'created_at',
        'entry_id',
        thingSpeakData.channelInfo?.field1 || 'field1',
        thingSpeakData.channelInfo?.field2 || 'field2',
        thingSpeakData.channelInfo?.field3 || 'field3',
        thingSpeakData.channelInfo?.field4 || 'field4',
        thingSpeakData.channelInfo?.field5 || 'field5',
        thingSpeakData.channelInfo?.field6 || 'field6',
        thingSpeakData.channelInfo?.field7 || 'field7'
    ];
    
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += headers.join(',') + '\n';
    
    // Export data in ThingSpeak format
    for (let i = 0; i < thingSpeakData.rawTimestamps.length; i++) {
        const row = [
            thingSpeakData.rawTimestamps[i].toISOString(),
            i + 1,
            thingSpeakData.temperature[i] || '',
            thingSpeakData.humidity[i] || '',
            thingSpeakData.current[i] || '',
            thingSpeakData.voltage[i] || '',
            thingSpeakData.energyGenerated[i] || '',
            thingSpeakData.energyConsumed[i] || '',
            thingSpeakData.batteryPercent[i] || ''
        ];
        csvContent += row.join(',') + '\n';
    }
    
    // Download file
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `thingspeak_native_export_${thingSpeakData.channelInfo?.name || 'channel'}_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    console.log('✅ ThingSpeak native format CSV export completed');
}
document.addEventListener('DOMContentLoaded', function() {
    console.log('🔋 GRIDNOVO Dashboard Starting with Native ThingSpeak Integration...');
    
    try {
        // Replace the existing initializeThingSpeak call with the native version
        initializeThingSpeakWith10MinInterval();
        initializeTheme();
        // Override the updateDashboard function
        window.updateDashboard = updateDashboardWithNativeData;
        
        // Override the exportReport function for native format
        window.exportToCSV = exportThingSpeakNativeCSV;
        
        console.log('✅ Native ThingSpeak integration ready');
        
    } 
    
    catch (error) {
        console.error('❌ Native integration initialization failed:', error);
    }
});

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
window.ThingSpeakNative = {
    config: THINGSPEAK_CONFIG,
    data: thingSpeakData,
    fetchData: fetchThingSpeakData,
    exportNativeCSV: exportThingSpeakNativeCSV,
    getDataRange: getDataRange,
    updateCharts: updateNativeCharts
};

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
