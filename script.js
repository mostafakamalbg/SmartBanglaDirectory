// Translations object
const translations = {
    bn: {
        appName: "বাংলাদেশ তথ্যভান্ডার",
        home: "ডেটা ব্রাউজ করুন",
        addData: "তথ্য যোগ করুন",
        adminPanel: "অ্যাডমিন প্যানেল",
        analytics: "বিশ্লেষণ",
        toggleCategories: "ক্যাটাগরি টগল",
        selectCategory: "শ্রেণী নির্বাচন করুন",
        formTitle: "নতুন তথ্য যোগ করুন",
        submit: "জমা দিন",
        verificationPending: "যাচাইয়ের জন্য অপেক্ষা করছে",
        verified: "যাচাইকৃত",
        name: "নাম",
        mobileNumber: "মোবাইল নাম্বার", // New field
        type: "ধরন",
        village: "গ্রাম",
        union: "ইউনিয়ন",
        upazila: "উপজেলা",
        district: "জেলা",
        division: "বিভাগ",
        shopName: "দোকানের নাম",
        ownerName: "মালিকের নাম",
        marketName: "বাজারের নাম",
        productType: "পণ্যের ধরন",
        totalPopulation: "মোট লোকসংখ্যা",
        literacyRate: "শিক্ষার হার",
        occupationDistribution: "পেশা বিভাজন",
        institutionName: "প্রতিষ্ঠানের নাম",
        categoryEducation: "শিক্ষা প্রতিষ্ঠান",
        categoryHealthcare: "স্বাস্থ্যসেবা",
        categoryAgriculture: "কৃষি ও খামার",
        categoryReligious: "ধর্মীয় প্রতিষ্ঠান",
        categoryMarket: "বাজার ও দোকান",
        categoryBank: "ব্যাংক ও সার্ভিস সেন্টার",
        categoryNGO: "এনজিও, ক্ষুদ্র উদ্যোগ, কো-অপারেটিভ",
        categoryInfrastructure: "ইনফ্রাস্ট্রাকচার",
        categoryPopulation: "জনসংখ্যা ও পেশা",
        adminMode: "অ্যাডমিন মোড",
        pendingEntries: "যাচাইয়ের জন্য অপেক্ষমাণ এন্ট্রি",
        verify: "যাচাই করুন",
        delete: "মুছে ফেলুন",
        noPendingEntries: "যাচাইয়ের জন্য কোনো অপেক্ষমাণ এন্ট্রি নেই।",
        dataSummary: "ডেটা সারাংশ",
        totalEntries: "মোট এন্ট্রি",
        verifiedEntries: "যাচাইকৃত এন্ট্রি",
        pendingEntriesCount: "অপেক্ষমাণ এন্ট্রি",
        entriesByCategory: "শ্রেণী অনুযায়ী এন্ট্রি",
        entriesByLocation: "অবস্থান অনুযায়ী এন্ট্রি",
        selectLocationType: "অবস্থানের ধরন নির্বাচন করুন",
        all: "সকল",
        educationalInstitutionType: "শিক্ষা প্রতিষ্ঠানের ধরন",
        school: "স্কুল",
        college: "কলেজ",
        madrasa: "মাদ্রাসা",
        hospital: "হাসপাতাল",
        communityClinic: "কমিউনিটি ক্লিনিক",
        pharmacy: "ফার্মেসি",
        agricultureOffice: "কৃষি অফিস",
        farm: "খামার",
        irrigationProject: "সেচ প্রকল্প",
        mosque: "মসজিদ",
        temple: "মন্দির",
        church: "গির্জা",
        pagoda: "প্যাগোডা",
        groceryShop: "মুদি দোকান",
        clothShop: "কাপড়ের দোকান",
        electronics: "ইলেকট্রনিক্স",
        bank: "ব্যাংক",
        postOffice: "পোস্ট অফিস",
        mobileBankingAgent: "মোবাইল ব্যাংকিং এজেন্ট",
        ngo: "এনজিও",
        smallEnterprise: "ক্ষুদ্র উদ্যোগ",
        cooperative: "কো-অপারেটিভ",
        road: "রাস্তা",
        bridge: "ব্রিজ",
        ferryGhat: "ফেরিঘাট",
        general: "সাধারণ",
        divisionType: "বিভাগ",
        districtType: "জেলা",
        upazilaType: "উপজেলা",
        unionType: "ইউনিয়ন",
        villageType: "গ্রাম",
        dataSavedSuccess: "তথ্য সফলভাবে সংরক্ষণ করা হয়েছে!",
        dataVerifySuccess: "তথ্য সফলভাবে যাচাই করা হয়েছে!",
        dataDeleteSuccess: "তথ্য সফলভাবে মুছে ফেলা হয়েছে!",
        fillAllFields: "অনুগ্রহ করে সব প্রয়োজনীয় ক্ষেত্র পূরণ করুন।",
        noDataFound: "কোন তথ্য পাওয়া যায়নি।",
        errorSavingData: "তথ্য সংরক্ষণে ত্রুটি: ",
        errorFetchingData: "তথ্য আনতে ত্রুটি: ",
        errorVerifyingData: "তথ্য যাচাইয়ে ত্রুটি: ",
        errorDeletingData: "তথ্য মুছতে ত্রুটি: ",
        viewDetails: "বিস্তারিত দেখুন",
        copyright: "সর্বস্বত্ব সংরক্ষিত",
        close: "বন্ধ করুন",
        testimonials: "আমাদের পার্টনার ও টেস্টিমোনিয়াল",
        footerAbout: "আমাদের সম্পর্কে",
        footerAboutText: "বাংলাদেশ তথ্যভান্ডার একটি ডিজিটাল প্ল্যাটফর্ম যা দেশের বিভিন্ন প্রতিষ্ঠানের তথ্য একত্রিত করে। আমাদের লক্ষ্য হল স্থানীয় ডেটা অ্যাক্সেস সহজ করা এবং কমিউনিটিকে শক্তিশালী করা।",
        footerQuickLinks: "দ্রুত লিঙ্ক",
        privacyPolicy: "গোপনীয়তা নীতি",
        termsOfUse: "ব্যবহারের শর্তাবলী",
        contact: "যোগাযোগ",
        footerContact: "যোগাযোগ করুন",
        contactDetails: "ইমেইল: info@smartbangladirectory.com<br>ফোন: +880 1XXXXXXXXX<br>ঠিকানা: ঢাকা, বাংলাদেশ",
        selectDivision: "বিভাগ নির্বাচন করুন",
        selectDistrict: "জেলা নির্বাচন করুন",
        selectUpazila: "উপজেলা নির্বাচন করুন",
        selectUnion: "ইউনিয়ন নির্বাচন করুন",
        selectVillage: "গ্রাম নির্বাচন করুন",
    },
    en: {
        appName: "SmartBanglaDirectory",
        home: "Browse Data",
        addData: "Add Data",
        adminPanel: "Admin Panel",
        analytics: "Analytics",
        toggleCategories: "Toggle Categories",
        selectCategory: "Select a Category",
        formTitle: "Add New Entry",
        submit: "Submit",
        verificationPending: "Verification Pending",
        verified: "Verified",
        name: "Name",
        mobileNumber: "Mobile Number", // New field
        type: "Type",
        village: "Village",
        union: "Union",
        upazila: "Upazila",
        district: "District",
        division: "Division",
        shopName: "Shop Name",
        ownerName: "Owner Name",
        marketName: "Market Name",
        productType: "Product Type",
        totalPopulation: "Total Population",
        literacyRate: "Literacy Rate",
        occupationDistribution: "Occupation Distribution",
        institutionName: "Institution Name",
        categoryEducation: "Educational Institution",
        categoryHealthcare: "Healthcare",
        categoryAgriculture: "Agriculture & Farm",
        categoryReligious: "Religious Institution",
        categoryMarket: "Market & Shop",
        categoryBank: "Bank & Service Center",
        categoryNGO: "NGO, Small Enterprise, Co-operative",
        categoryInfrastructure: "Infrastructure",
        categoryPopulation: "Population & Occupation",
        adminMode: "Admin Mode",
        pendingEntries: "Pending Entries for Verification",
        verify: "Verify",
        delete: "Delete",
        noPendingEntries: "No pending entries for verification.",
        dataSummary: "Data Summary",
        totalEntries: "Total Entries",
        verifiedEntries: "Verified Entries",
        pendingEntriesCount: "Pending Entries",
        entriesByCategory: "Entries by Category",
        entriesByLocation: "Entries by Location",
        selectLocationType: "Select Location Type",
        all: "All",
        educationalInstitutionType: "Educational Institution Type",
        school: "School",
        college: "College",
        madrasa: "Madrasa",
        hospital: "Hospital",
        communityClinic: "Community Clinic",
        pharmacy: "Pharmacy",
        agricultureOffice: "Agriculture Office",
        farm: "Farm",
        irrigationProject: "Irrigation Project",
        mosque: "Mosque",
        temple: "Temple",
        church: "Church",
        pagoda: "Pagoda",
        groceryShop: "Grocery Shop",
        clothShop: "Cloth Shop",
        electronics: "Electronics",
        bank: "Bank",
        postOffice: "Post Office",
        mobileBankingAgent: "Mobile Banking Agent",
        ngo: "NGO",
        smallEnterprise: "Small Enterprise",
        cooperative: "Co-operative",
        road: "Road",
        bridge: "Bridge",
        ferryGhat: "Ferry Ghat",
        general: "General",
        divisionType: "Division",
        districtType: "District",
        upazilaType: "Upazila",
        unionType: "Union",
        villageType: "Village",
        dataSavedSuccess: "Data saved successfully!",
        dataVerifySuccess: "Data verified successfully!",
        dataDeleteSuccess: "Data deleted successfully!",
        fillAllFields: "Please fill in all required fields.",
        noDataFound: "No data found.",
        errorSavingData: "Error saving data: ",
        errorFetchingData: "Error fetching data: ",
        errorVerifyingData: "Error verifying data: ",
        errorDeletingData: "Error deleting data: ",
        viewDetails: "View Details",
        copyright: "All Rights Reserved",
        close: "Close",
        testimonials: "Our Partners & Testimonials",
        footerAbout: "About Us",
        footerAboutText: "SmartBanglaDirectory is a digital platform that consolidates information about various institutions across the country. Our goal is to simplify local data access and strengthen the community.",
        footerQuickLinks: "Quick Links",
        privacyPolicy: "Privacy Policy",
        termsOfUse: "Terms of Use",
        contact: "Contact",
        footerContact: "Contact Us",
        contactDetails: "Email: info@smartbangladirectory.com<br>Phone: +880 1XXXXXXXXX<br>Address: Dhaka, Bangladesh",
        selectDivision: "Select Division",
        selectDistrict: "Select District",
        selectUpazila: "Select Upazila",
        selectUnion: "Select Union",
        selectVillage: "Select Village",
    },
};

// Helper to get translations
let currentLang = 'bn'; // Default language
const t = (key) => translations[currentLang][key] || key;

// Defined categories with icons and specific colors
const categories = [
    { id: 'education', bn: 'শিক্ষা প্রতিষ্ঠান', en: 'Educational Institution', icon: '<svg class="w-5 h-5 inline-block mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3L1 9v12h22V9L12 3zm0 2.31L20.21 9H3.79L12 5.31zM3 10.31L12 5.31l9 5v9H3v-9zm2 1.69v6h2v-6H5zm4 0v6h2v-6H9zm4 0v6h2v-6h-2zm4 0v6h2v-6h-2z"/></svg>', colorClass: 'category-education' },
    { id: 'healthcare', bn: 'স্বাস্থ্যসেবা', en: 'Healthcare', icon: '<svg class="w-5 h-5 inline-block mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>', colorClass: 'category-healthcare' },
    { id: 'agriculture', bn: 'কৃষি ও খামার', en: 'Agriculture & Farm', icon: '<svg class="w-5 h-5 inline-block mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 11v6h2v-6h-2zm-6 0h2v6h-2v-6zm-4 0h2v6h-2v-6zm-3 0h2v6H6v-6zm14 8v1h-20v-1h20zm0-10c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1s-1 .45-1 1v2c0 .55.45 1 1 1zM2 9v12h19V9H2zm17 0H4V7.5L12.5 4 19 7.5V9z"/></svg>', colorClass: 'category-agriculture' },
    { id: 'religious', bn: 'ধর্মীয় প্রতিষ্ঠান', en: 'Religious Institution', icon: '<svg class="w-5 h-5 inline-block mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l-5 5v12h10V7l-5-5zm0 14c-1.38 0-2.5-1.12-2.5-2.5S10.62 11 12 11s2.5 1.12 2.5 2.5S13.38 16 12 16z"/></svg>', colorClass: 'category-religious' },
    { id: 'market', bn: 'বাজার ও দোকান', en: 'Market & Shop', icon: '<svg class="w-5 h-5 inline-block mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.3 5.71a.996.996 0 00-1.41 0L12 10.59 7.11 5.7a.996.996 0 10-1.41 1.41L10.59 12l-4.89 4.89a.996.996 0 101.41 1.41L12 13.41l4.89 4.89a.996.996 0 101.41-1.41L13.41 12l4.89-4.89c.39-.39.39-1.02 0-1.4zM22 2H2v20h20V2zm-2 18H4V4h16v16z"/></svg>', colorClass: 'category-market' },
    { id: 'bank', bn: 'ব্যাংক ও সার্ভিস সেন্টার', en: 'Bank & Service Center', icon: '<svg class="w-5 h-5 inline-block mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.66 0-3 1.34-3 3v2h6v-2c0-1.66-1.34-3-3-3zM1 21h22v2H1v-2zm1-2h20V4H2v15zm2-3h16V6H4v10z"/></svg>', colorClass: 'category-bank' },
    { id: 'ngo', bn: 'এনজিও, ক্ষুদ্র উদ্যোগ, কো-অপারেটিভ', en: 'NGO, Small Enterprise, Co-operative', icon: '<svg class="w-5 h-5 inline-block mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6zm0 10c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-7 8c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-1H5v1zm2-1h10v-1c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v1z"/></svg>', colorClass: 'category-ngo' },
    { id: 'infrastructure', bn: 'ইনফ্রাস্ট্রাকচার', en: 'Infrastructure', icon: '<svg class="w-5 h-5 inline-block mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 9V7h-2V2H4v5H2v2h2V22h16V9h2zm-4 11H6v-9h12v9zM6 7V4h12v3H6zm6 3c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg>', colorClass: 'category-infrastructure' },
    { id: 'population', bn: 'জনসংখ্যা ও পেশা', en: 'Population & Occupation', icon: '<svg class="w-5 h-5 inline-block mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>', colorClass: 'category-population' },
];

const typeOptions = {
    education: [{ bn: 'স্কুল', en: 'School' }, { bn: 'কলেজ', en: 'College' }, { bn: 'মাদ্রাসা', en: 'Madrasa' }],
    healthcare: [{ bn: 'হাসপাতাল', en: 'Hospital' }, { bn: 'কমিউনিটি ক্লিনিক', en: 'Community Clinic' }, { bn: 'ফার্মেসি', en: 'Pharmacy' }],
    agriculture: [{ bn: 'কৃষি অফিস', en: 'Agriculture Office' }, { bn: 'খামার', en: 'Farm' }, { bn: 'সেচ প্রকল্প', en: 'Irrigation Project' }],
    religious: [{ bn: 'মসজিদ', en: 'Mosque' }, { bn: 'মন্দির', en: 'Temple' }, { bn: 'গির্জা', en: 'Church' }, { bn: 'প্যাগোডা', en: 'Pagoda' }],
    market: [{ bn: 'মুদি দোকান', en: 'Grocery Shop' }, { bn: 'কাপড়ের দোকান', en: 'Cloth Shop' }, { bn: 'ইলেকট্রনিক্স', en: 'Electronics' }],
    bank: [{ bn: 'ব্যাংক', en: 'Bank' }, { bn: 'পোস্ট অফিস', en: 'Post Office' }, { bn: 'মোবাইল ব্যাংকিং এজেন্ট', en: 'Mobile Banking Agent' }],
    ngo: [{ bn: 'এনজিও', en: 'NGO' }, { bn: 'ক্ষুদ্র উদ্যোগ', en: 'Small Enterprise' }, { bn: 'কো-অপারেটিভ', en: 'Co-operative' }],
    infrastructure: [{ bn: 'রাস্তা', en: 'Road' }, { bn: 'ব্রিজ', en: 'Bridge' }, { bn: 'বাজার', en: 'Market' }, { bn: 'ফেরিঘাট', en: 'Ferry Ghat' }],
    population: []
};

// Demo data for location suggestions
const demoLocations = {
    "ঢাকা": {
        "ঢাকা জেলা": ["সাভার", "দোহার"],
        "গাজীপুর": ["গাজীপুর সদর", "কালীগঞ্জ"]
    },
    "চট্টগ্রাম": {
        "চট্টগ্রাম জেলা": ["পটিয়া", "রাঙ্গুনিয়া"],
        "কক্সবাজার": ["কক্সবাজার সদর", "উখিয়া"]
    }
};

// Global Firebase variables
let db;
let auth;
let currentUserId = null;
let directoryData = []; // To store all fetched data
let currentPage = 'home'; // Global current page state, initialized to 'home'
let currentActiveViewCategory = 'all'; // For home page data filtering
let showCategoriesSidebar = false; // State for category sidebar visibility, initially hidden
let isAdminMode = false; // Admin mode state
let analyticsLocationType = 'all'; // Default for analytics location filter

// DOM Element references - selected once DOM is ready
let userIdDisplay;
let currentUserIdSpan;
let messageAlert;
let dynamicContent;
let toggleCategoriesBtn;
let addDataBtn;
let adminPanelBtn;
let analyticsBtn;
let languageToggleBtn;
let categoryFilterContainer;
let categoryButtonsContainer;
let overlay;
let detailsModal;
let modalTitle;
let modalContent;
let closeModalBtn;

// Carousel variables
let slideIndex = 1;
let carouselInterval;

// --- Helper Functions ---

/**
 * Initializes DOM element references once the DOM is loaded.
 */
function initializeDOMElements() {
    userIdDisplay = document.getElementById('userIdDisplay');
    currentUserIdSpan = document.getElementById('currentUserId');
    messageAlert = document.getElementById('messageAlert');
    dynamicContent = document.getElementById('dynamicContent');
    toggleCategoriesBtn = document.getElementById('toggleCategoriesBtn');
    addDataBtn = document.getElementById('addDataBtn');
    adminPanelBtn = document.getElementById('adminPanelBtn');
    analyticsBtn = document.getElementById('analyticsBtn');
    languageToggleBtn = document.getElementById('languageToggleBtn');
    categoryFilterContainer = document.getElementById('categoryFilterContainer');
    categoryButtonsContainer = document.getElementById('categoryButtons');
    overlay = document.getElementById('overlay');
    detailsModal = document.getElementById('detailsModal');
    modalTitle = document.getElementById('modalTitle');
    modalContent = document.getElementById('modalContent');
    closeModalBtn = document.getElementById('closeModalBtn');
}


/**
 * Displays a temporary message to the user.
 * @param {string} msg - The message to display.
 * @param {string} type - 'success' or 'error' for styling.
 */
function showMessage(msg, type) {
    if (!messageAlert) return; // Ensure element exists
    messageAlert.textContent = msg;
    messageAlert.className = `fixed top-20 right-4 px-6 py-3 rounded-lg shadow-xl text-white z-50 transition-transform transform animate-bounce-custom ${type === 'success' ? 'bg-green-500' : 'bg-red-500'}`;
    messageAlert.classList.remove('hidden');
    setTimeout(() => {
        messageAlert.classList.add('hidden');
    }, 5000);
}

/**
 * Updates the text content of elements based on the current language.
 */
function updateLanguage() {
    // Update main navigation buttons
    document.querySelector('[data-lang-key="appName"]').textContent = t('appName');
    toggleCategoriesBtn.querySelector('span').textContent = t('toggleCategories');
    addDataBtn.textContent = t('addData');
    adminPanelBtn.textContent = t('adminPanel');
    analyticsBtn.textContent = t('analytics');
    languageToggleBtn.textContent = currentLang === 'bn' ? 'English' : 'বাংলা';
    document.getElementById('currentYear').textContent = new Date().getFullYear(); // Update copyright year

    // Update footer texts based on data-lang-key attributes
    document.querySelector('[data-lang-key="footerAbout"]').textContent = t('footerAbout');
    document.querySelector('[data-lang-key="footerAboutText"]').textContent = t('footerAboutText');
    document.querySelector('[data-lang-key="footerQuickLinks"]').textContent = t('footerQuickLinks');
    document.querySelector('[data-lang-key="privacyPolicy"]').textContent = t('privacyPolicy');
    document.querySelector('[data-lang-key="termsOfUse"]').textContent = t('termsOfUse');
    document.querySelector('[data-lang-key="contact"]').textContent = t('contact');
    document.querySelector('[data-lang-key="footerContact"]').textContent = t('footerContact');
    document.querySelector('[data-lang-key="contactDetails"]').innerHTML = t('contactDetails');
    document.querySelector('[data-lang-key="copyright"]').textContent = t('copyright');
    document.querySelector('[data-lang-key="selectCategory"]').textContent = t('selectCategory');
    // Update modal title and close button
    if (document.getElementById('modalTitle')) document.getElementById('modalTitle').textContent = t('viewDetails');
    if (document.getElementById('closeModalBtn')) document.getElementById('closeModalBtn').textContent = t('close');


    // Update category button text and icons in sidebar
    // Clear existing buttons first
    categoryButtonsContainer.innerHTML = `
        <button data-category="all" class="category-btn px-4 py-3 rounded-lg font-medium transition duration-300 shadow-md category-all">
            <svg class="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            <span data-lang-key="all">${t('all')}</span>
        </button>
    `;
    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.dataset.category = cat.id;
        btn.className = `category-btn px-4 py-3 rounded-lg font-medium transition duration-300 shadow-md ${cat.colorClass}`;
        btn.innerHTML = `${cat.icon || ''} <span data-lang-key="category${cat.id.charAt(0).toUpperCase() + cat.id.slice(1)}">${cat[currentLang]}</span>`; // Include icon and span for translation
        categoryButtonsContainer.appendChild(btn);
    });

    // Re-attach event listener for new category buttons
    categoryButtonsContainer.removeEventListener('click', handleCategoryButtonDelegation); // Remove old listener
    categoryButtonsContainer.addEventListener('click', handleCategoryButtonDelegation); // Add new listener

    // Re-render current page to update content
    switch (currentPage) {
        case 'home': renderHomePage(); break;
        case 'addData': renderAddDataPage(); break;
        case 'adminPanel': renderAdminPanel(); break;
        case 'analytics': renderAnalyticsPage(); break;
    }
}

/**
 * Toggles the visibility of the category sidebar.
 */
function toggleCategorySidebar() {
    showCategoriesSidebar = !showCategoriesSidebar;
    if (showCategoriesSidebar) {
        categoryFilterContainer.classList.add('open');
        overlay.classList.remove('hidden');
        document.body.classList.add('category-open'); // Add class to body for potential main content shift
    } else {
        categoryFilterContainer.classList.remove('open');
        overlay.classList.add('hidden');
        document.body.classList.remove('category-open');
    }
}

/**
 * Closes the category sidebar.
 */
function closeCategorySidebar() {
    if (showCategoriesSidebar) {
        toggleCategorySidebar(); // Use the toggle function to close it
    }
}

/**
 * Handles clicks on category buttons in the sidebar using event delegation.
 * @param {Event} e - The click event object.
 */
function handleCategoryButtonDelegation(e) {
    const btn = e.target.closest('.category-btn');
    if (btn && btn.dataset.category) {
        handleCategoryButtonClick(btn.dataset.category);
    }
}

/**
 * Handles clicks on category buttons in the sidebar.
 * @param {string} categoryId - The ID of the clicked category.
 */
function handleCategoryButtonClick(categoryId) {
    currentActiveViewCategory = categoryId;
    renderHomePage(); // Re-render home page with filtered data
    closeCategorySidebar(); // Close sidebar after selection
}

// --- Page Rendering Functions ---

/**
 * Renders the Home page displaying verified data and the carousel.
 */
function renderHomePage() {
    currentPage = 'home';
    const analyticsData = getAnalyticsData();
    const filteredHomeData = currentActiveViewCategory === 'all'
        ? analyticsData.verifiedList
        : analyticsData.verifiedList.filter(item => item.category === currentActiveViewCategory);

    let html = `
        <h2 class="text-2xl font-bold text-center text-blue-700 mb-6" data-lang-key="testimonials">
            ${t('testimonials')}
        </h2>
        <!-- Carousel Section -->
        <div class="carousel-container mb-10">
            <div class="carousel-slide fade">
                <img src="https://placehold.co/600x400/87CEEB/ffffff?text=School+Building" alt="${t('categoryEducation')}">
                <p>${t('categoryEducation')} - ${currentLang === 'bn' ? 'আমাদের শিক্ষাপ্রতিষ্ঠানগুলো ভবিষ্যতে উজ্জ্বল আলো ছড়াচ্ছে।' : 'Our educational institutions are shining a bright light on the future.'}</p>
            </div>
            <div class="carousel-slide fade">
                <img src="https://placehold.co/600x400/FFD700/000000?text=Bank+Building" alt="${t('categoryBank')}">
                <p>${t('categoryBank')} - ${currentLang === 'bn' ? 'ব্যাংকিং খাতে স্বচ্ছতা ও আধুনিকতা নিয়ে কাজ করছি।' : 'Working towards transparency and modernity in the banking sector.'}</p>
            </div>
            <div class="carousel-slide fade">
                <img src="https://placehold.co/600x400/FF6347/ffffff?text=Hospital+Sign" alt="${t('categoryHealthcare')}">
                <p>${currentLang === 'bn' ? 'স্বাস্থ্যসেবা সকলের জন্য নিশ্চিত করতে আমরা বদ্ধপরিকর।' : 'We are committed to ensuring healthcare for all.'}</p>
            </div>
            <div class="carousel-slide fade">
                <img src="https://placehold.co/600x400/228B22/ffffff?text=Farm+Land" alt="${t('categoryAgriculture')}">
                <p>${currentLang === 'bn' ? 'কৃষি ও খামার উন্নয়নে আমাদের অবদান অপরিহার্য।' : 'Our contribution to agriculture and farm development is essential.'}</p>
            </div>

            <a class="carousel-prev" onclick="window.plusSlides(-1)">&#10094;</a>
            <a class="carousel-next" onclick="window.plusSlides(1)">&#10095;</a>

            <div class="carousel-dots">
                <span class="dot" onclick="window.currentSlide(1)"></span>
                <span class="dot" onclick="window.currentSlide(2)"></span>
                <span class="dot" onclick="window.currentSlide(3)"></span>
                <span class="dot" onclick="window.currentSlide(4)"></span>
            </div>
        </div>

        <h2 class="text-2xl font-bold text-center text-blue-700 mb-6" data-lang-key="verifiedEntries">
            ${t('verifiedEntries')}
        </h2>
    `;

    if (filteredHomeData.length === 0) {
        html += `<p class="text-center text-gray-600 text-lg py-10" data-lang-key="noDataFound">${t('noDataFound')}</p>`;
    } else {
        html += `
            <div class="overflow-x-auto rounded-lg shadow-md border border-gray-200">
                <table class="min-w-full bg-white">
                    <thead class="bg-blue-50">
                        <tr>
                            <th class="py-3 px-4 border-b border-blue-200 text-left text-sm font-semibold text-blue-700" data-lang-key="category">
                                ${t('category')}
                            </th>
                            <th class="py-3 px-4 border-b border-blue-200 text-left text-sm font-semibold text-blue-700" data-lang-key="name">
                                ${t('name')} / ${t('shopName')}
                            </th>
                            <th class="py-3 px-4 border-b border-blue-200 text-left text-sm font-semibold text-blue-700" data-lang-key="location">
                                ${t('location')}
                            </th>
                            <th class="py-3 px-4 border-b border-blue-200 text-left text-sm font-semibold text-blue-700" data-lang-key="viewDetails">
                                ${t('viewDetails')}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
        `;
        filteredHomeData.forEach(item => {
            const location = `${item.village ? item.village + ', ' : ''}${item.union ? item.union + ', ' : ''}${item.upazila ? item.upazila + ', ' : ''}${item.district ? item.district + ', ' : ''}${item.division ? item.division : ''}`;
            html += `
                <tr class="hover:bg-blue-50 border-b border-gray-100 last:border-b-0">
                    <td class="py-3 px-4 text-sm text-gray-800 capitalize">
                        <span data-lang-key="category${item.category.charAt(0).toUpperCase() + item.category.slice(1)}">${t(`category${item.category.charAt(0).toUpperCase() + item.category.slice(1)}`)}</span>
                    </td>
                    <td class="py-3 px-4 text-sm text-gray-800">
                        ${item.name || item.shopName || item.village}
                    </td>
                    <td class="py-3 px-4 text-sm text-gray-800">
                        ${location}
                    </td>
                    <td class="py-3 px-4 text-sm text-gray-800">
                        <button data-id="${item.id}" class="view-details-btn bg-blue-500 hover:bg-blue-600 text-white text-xs font-bold py-1 px-3 rounded-full transition duration-300 shadow">
                            <span data-lang-key="viewDetails">${t('viewDetails')}</span>
                        </button>
                    </td>
                </tr>
            `;
        });
        html += `
                    </tbody>
                </table>
            </div>
        `;
    }
    dynamicContent.innerHTML = html;

    // Attach event listeners for view details buttons
    document.querySelectorAll('.view-details-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const itemId = e.target.dataset.id || e.target.closest('button').dataset.id;
            const selectedEntry = directoryData.find(d => d.id === itemId);
            if (selectedEntry) {
                showDetailsModalFn(selectedEntry);
            }
        });
    });

    // Start carousel
    startCarousel();
}

/**
 * Renders the Add Data page with category selection and form.
 */
function renderAddDataPage() {
    currentPage = 'addData';
    stopCarousel(); // Stop carousel when navigating away from home
    let html = `
        <h2 class="text-2xl font-bold text-center text-blue-700 mb-6" data-lang-key="addData">
            ${t('addData')}
        </h2>
        <div class="mb-6 flex flex-wrap justify-center gap-3" id="categorySelectionButtons">
            ${categories.map(cat => `
                <button data-category-id="${cat.id}" class="add-data-category-btn px-4 py-2 rounded-lg font-medium transition duration-300 shadow-md ${cat.colorClass}">
                    ${cat.icon || ''} <span data-lang-key="category${cat.id.charAt(0).toUpperCase() + cat.id.slice(1)}">${cat[currentLang]}</span>
                </button>
            `).join('')}
        </div>
        <div id="addDataFormContainer">
            <!-- Form will be dynamically loaded here -->
        </div>
    `;
    dynamicContent.innerHTML = html;

    // Attach event listeners for category selection buttons
    document.querySelectorAll('.add-data-category-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const categoryId = e.target.dataset.categoryId || e.target.closest('button').dataset.categoryId; // Use closest for clicks on icon/text inside button
            renderAddDataForm(categoryId);
            // Update button active state
            document.querySelectorAll('.add-data-category-btn').forEach(btn => {
                if (btn.dataset.categoryId === categoryId) {
                    btn.classList.add('bg-blue-600', 'text-white');
                    btn.classList.remove('bg-gray-100', 'text-gray-700', 'hover:bg-blue-500', 'hover:text-white');
                } else {
                    btn.classList.remove('bg-blue-600', 'text-white');
                    btn.classList.add('bg-gray-100', 'text-gray-700', 'hover:bg-blue-500', 'hover:text-white');
                }
            });
        });
    });
    // Ensure the default state (no category selected) is handled
    document.getElementById('addDataFormContainer').innerHTML = '';
}

/**
 * Renders the dynamic form based on the selected category.
 * @param {string} selectedCatId - The ID of the selected category.
 */
function renderAddDataForm(selectedCatId) {
    let html = `
        <form id="addDataForm" class="bg-blue-50 p-6 rounded-xl shadow-inner border border-blue-200">
            <h3 class="text-xl font-semibold text-blue-800 mb-5 text-center" data-lang-key="formTitle">
                ${t('formTitle')}
            </h3>
    `;

    // New: Type, Name, Mobile Number fields first
    html += `
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="type_add" data-lang-key="type">
                ${t('type')}*
            </label>
            <select class="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white" id="type_add" name="type" required>
                <option value="" data-lang-key="selectCategory">${t('selectCategory')}</option>
                ${typeOptions[selectedCatId] && typeOptions[selectedCatId].map(option => `
                    <option value="${option[currentLang]}">${option[currentLang]}</option>
                `).join('')}
            </select>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="name_add" data-lang-key="name">
                ${t('name')}*
            </label>
            <input class="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400" id="name_add" type="text" name="name" placeholder="${t('name')}" required>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="mobileNumber" data-lang-key="mobileNumber">
                ${t('mobileNumber')}
            </label>
            <input class="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400" id="mobileNumber" type="tel" name="mobileNumber" placeholder="+880 1XXXXXXXXX">
        </div>
    `;

    // Location fields with dynamic suggestions
    html += `
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="division_add" data-lang-key="division">
                ${t('division')}*
            </label>
            <input list="divisions" class="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400" id="division_add" type="text" name="division" placeholder="${t('selectDivision')}" required>
            <datalist id="divisions">
                ${Object.keys(demoLocations).map(div => `<option value="${div}">`).join('')}
            </datalist>
        </div>
        <div class="mb-4 hidden" id="district_container">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="district_add" data-lang-key="district">
                ${t('district')}*
            </label>
            <input list="districts" class="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400" id="district_add" type="text" name="district" placeholder="${t('selectDistrict')}" required>
            <datalist id="districts"></datalist>
        </div>
        <div class="mb-4 hidden" id="upazila_container">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="upazila_add" data-lang-key="upazila">
                ${t('upazila')}*
            </label>
            <input list="upazilas" class="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400" id="upazila_add" type="text" name="upazila" placeholder="${t('selectUpazila')}" required>
            <datalist id="upazilas"></datalist>
        </div>
        <div class="mb-4 hidden" id="union_container">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="union_add" data-lang-key="union">
                ${t('union')}*
            </label>
            <input list="unions" class="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400" id="union_add" type="text" name="union" placeholder="${t('selectUnion')}" required>
            <datalist id="unions"></datalist>
        </div>
        <div class="mb-4 hidden" id="village_container">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="village_add" data-lang-key="village">
                ${t('village')}*
            </label>
            <input list="villages" class="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400" id="village_add" type="text" name="village" placeholder="${t('selectVillage')}" required>
            <datalist id="villages"></datalist>
        </div>
    `;

    // Category specific fields after common fields
    if (selectedCatId === 'market') {
        html += `
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="shopName" data-lang-key="shopName">
                    ${t('shopName')}*
                </label>
                <input class="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400" id="shopName" type="text" name="shopName" placeholder="${t('shopName')}" required>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="ownerName" data-lang-key="ownerName">
                    ${t('ownerName')}*
                </label>
                <input class="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400" id="ownerName" type="text" name="ownerName" placeholder="${t('ownerName')}" required>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="marketName" data-lang-key="marketName">
                    ${t('marketName')}*
                </label>
                <input class="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400" id="marketName" type="text" name="marketName" placeholder="${t('marketName')}" required>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="productType" data-lang-key="productType">
                    ${t('productType')}*
                </label>
                <select class="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white" id="productType" name="productType" required>
                    <option value="" data-lang-key="selectCategory">${t('selectCategory')}</option>
                    ${typeOptions[selectedCatId].map(option => `
                        <option value="${option[currentLang]}">${option[currentLang]}</option>
                    `).join('')}
                </select>
            </div>
        `;
    } else if (selectedCatId === 'population') {
        html += `
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="totalPopulation" data-lang-key="totalPopulation">
                    ${t('totalPopulation')}*
                </label>
                <input class="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400" id="totalPopulation" type="number" name="totalPopulation" placeholder="${t('totalPopulation')}" required>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="literacyRate" data-lang-key="literacyRate">
                    ${t('literacyRate')}*
                </label>
                <input class="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400" id="literacyRate" type="number" step="0.01" name="literacyRate" placeholder="${t('literacyRate')}" required>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="occupationDistribution" data-lang-key="occupationDistribution">
                    ${t('occupationDistribution')}*
                </label>
                <textarea class="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400" id="occupationDistribution" name="occupationDistribution" placeholder="${t('occupationDistribution')}" rows="4" required></textarea>
            </div>
        `;
    }

    html += `
            <div class="flex justify-center mt-6">
                <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 transform hover:scale-105 shadow-lg" data-lang-key="submit">
                    ${t('submit')}
                </button>
            </div>
        </form>
    `;
    const addDataFormContainer = document.getElementById('addDataFormContainer');
    addDataFormContainer.innerHTML = html;

    // Attach event listeners for dynamic location fields
    const divisionInput = document.getElementById('division_add');
    const districtContainer = document.getElementById('district_container');
    const districtInput = document.getElementById('district_add');
    const upazilaContainer = document.getElementById('upazila_container');
    const upazilaInput = document.getElementById('upazila_add');
    const unionContainer = document.getElementById('union_container');
    const unionInput = document.getElementById('union_add');
    const villageContainer = document.getElementById('village_container');
    const villageInput = document.getElementById('village_add');

    // Function to populate datalist
    const populateDatalist = (datalistId, items) => {
        const datalist = document.getElementById(datalistId);
        datalist.innerHTML = '';
        items.forEach(item => {
            const option = document.createElement('option');
            option.value = item;
            datalist.appendChild(option);
        });
    };

    if (divisionInput) {
        divisionInput.addEventListener('input', () => {
            const selectedDivision = divisionInput.value;
            if (demoLocations[selectedDivision]) {
                populateDatalist('districts', Object.keys(demoLocations[selectedDivision]));
                districtContainer.classList.remove('hidden');
                districtInput.value = ''; // Clear previous selection
                upazilaContainer.classList.add('hidden'); // Hide subsequent fields
                unionContainer.classList.add('hidden');
                villageContainer.classList.add('hidden');
            } else {
                districtContainer.classList.add('hidden');
            }
        });
    }

    if (districtInput) {
        districtInput.addEventListener('input', () => {
            const selectedDivision = divisionInput.value;
            const selectedDistrict = districtInput.value;
            if (demoLocations[selectedDivision] && demoLocations[selectedDivision][selectedDistrict]) {
                populateDatalist('upazilas', demoLocations[selectedDivision][selectedDistrict]);
                upazilaContainer.classList.remove('hidden');
                upazilaInput.value = ''; // Clear previous selection
                unionContainer.classList.add('hidden');
                villageContainer.classList.add('hidden');
            } else {
                upazilaContainer.classList.add('hidden');
            }
        });
    }
    
    // Add event listeners for upazila and union to show next fields
    if (upazilaInput) {
        upazilaInput.addEventListener('input', () => {
            // In a real app, you'd fetch unions based on selected upazila
            // For demo, just show union/village fields after upazila is typed
            unionContainer.classList.remove('hidden');
            populateDatalist('unions', ['ডেমো ইউনিয়ন ১', 'ডেমো ইউনিয়ন ২']); // Demo unions
            unionInput.value = '';
            villageContainer.classList.add('hidden');
        });
    }

    if (unionInput) {
        unionInput.addEventListener('input', () => {
            // In a real app, you'd fetch villages based on selected union
            // For demo, just show village field after union is typed
            villageContainer.classList.remove('hidden');
            populateDatalist('villages', ['ডেমো গ্রাম ১', 'ডেমো গ্রাম ২']); // Demo villages
            villageInput.value = '';
        });
    }


    // Attach form submit event listener
    const form = document.getElementById('addDataForm');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const data = {};
            const formElements = form.elements;
            for (let i = 0; i < formElements.length; i++) {
                const element = formElements[i];
                if (element.name && element.value) { // Ensure element has a name and value
                    data[element.name] = element.value;
                }
            }
            await handleSubmit(data, selectedCatId);
        });
    }
}

/**
 * Handles the submission of new data to Firestore.
 * @param {object} formData - The data from the form.
 * @param {string} selectedCategory - The category ID of the submitted data.
 */
async function handleSubmit(formData, selectedCategory) {
    if (!db || !currentUserId) {
        showMessage(t('Firebase not initialized or user not authenticated.'), 'error');
        return;
    }

    // Basic validation for common fields
    const requiredFields = ['type', 'name', 'division', 'district', 'upazila', 'union', 'village'];
    let isValid = true;
    for (let field of requiredFields) {
        if (!formData[field]) {
            isValid = false;
            break;
        }
    }

    let specificFieldsValid = true;
    if (selectedCategory === 'market') {
        if (!formData.shopName || !formData.ownerName || !formData.marketName || !formData.productType) specificFieldsValid = false;
    } else if (selectedCategory === 'population') {
        if (!formData.totalPopulation || !formData.literacyRate || !formData.occupationDistribution) specificFieldsValid = false;
    }

    if (!isValid || !specificFieldsValid) {
        showMessage(t('fillAllFields'), 'error');
        return;
    }

    try {
        const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
        const collectionRef = firebase.collection(db, `artifacts/${appId}/public/data/smartBanglaDirectory`);

        const dataToSave = {
            ...formData,
            category: selectedCategory,
            status: 'pending', // All new submissions are pending verification
            timestamp: new Date().toISOString(),
            submittedBy: currentUserId,
        };

        await firebase.addDoc(collectionRef, dataToSave);
        showMessage(t('dataSavedSuccess'), 'success');
        // Clear form by re-rendering the category selection part without pre-selecting a category
        const categorySelectionButtons = document.getElementById('categorySelectionButtons');
        if (categorySelectionButtons) {
             categorySelectionButtons.innerHTML = categories.map(cat => `
                <button data-category-id="${cat.id}" class="add-data-category-btn px-4 py-2 rounded-lg font-medium transition duration-300 shadow-md ${cat.colorClass}">
                    ${cat.icon || ''} <span data-lang-key="category${cat.id.charAt(0).toUpperCase() + cat.id.slice(1)}">${cat[currentLang]}</span>
                </button>
            `).join('');
            // Re-attach event listeners for these buttons
            document.querySelectorAll('.add-data-category-btn').forEach(button => {
                button.addEventListener('click', (e) => {
                    const categoryId = e.target.dataset.categoryId || e.target.closest('button').dataset.categoryId;
                    renderAddDataForm(categoryId);
                    document.querySelectorAll('.add-data-category-btn').forEach(btn => {
                        if (btn.dataset.categoryId === categoryId) {
                            btn.classList.add('bg-blue-600', 'text-white'); // Example active style
                            // btn.classList.remove('bg-gray-100', 'text-gray-700', 'hover:bg-blue-500', 'hover:text-white');
                        } else {
                            // btn.classList.remove('bg-blue-600', 'text-white');
                            // btn.classList.add('bg-gray-100', 'text-gray-700', 'hover:bg-blue-500', 'hover:text-white');
                        }
                    });
                });
            });
        }
        document.getElementById('addDataFormContainer').innerHTML = ''; // Clear the form itself
        renderHomePage(); // Show updated data on home page
    } catch (e) {
        console.error(t('errorSavingData'), e);
        showMessage(t('errorSavingData') + e.message, 'error');
    }
}

/**
 * Renders the Admin Panel page.
 */
function renderAdminPanel() {
    currentPage = 'adminPanel';
    stopCarousel(); // Stop carousel when navigating away from home
    const analyticsData = getAnalyticsData();
    let html = `
        <h2 class="text-2xl font-bold text-center text-blue-700 mb-6" data-lang-key="adminPanel">
            ${t('adminPanel')}
        </h2>
        <div class="flex items-center justify-center mb-6">
            <label for="admin-mode-toggle" class="flex items-center cursor-pointer">
                <div class="relative">
                    <input type="checkbox" id="admin-mode-toggle" class="sr-only peer" ${isAdminMode ? 'checked' : ''}>
                    <div class="block bg-gray-300 w-14 h-8 rounded-full"></div>
                    <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition transform peer-checked:translate-x-full peer-checked:bg-blue-600 shadow"></div>
                </div>
                <span class="ml-3 text-lg font-medium text-gray-900" data-lang-key="adminMode">
                    ${t('adminMode')}
                </span>
            </label>
        </div>
        <div id="adminContent">
            ${isAdminMode ? `
                <h3 class="text-xl font-bold text-blue-700 mb-4 border-b pb-2" data-lang-key="pendingEntries">
                    ${t('pendingEntries')}
                </h3>
                ${analyticsData.pending === 0 ? `
                    <p class="text-center text-gray-600 text-lg py-10" data-lang-key="noPendingEntries">${t('noPendingEntries')}</p>
                ` : `
                    <div class="overflow-x-auto rounded-lg shadow-md border border-gray-200">
                        <table class="min-w-full bg-white">
                            <thead class="bg-yellow-50">
                                <tr>
                                    <th class="py-3 px-4 border-b border-yellow-200 text-left text-sm font-semibold text-yellow-800" data-lang-key="category">
                                        ${t('category')}
                                    </th>
                                    <th class="py-3 px-4 border-b border-yellow-200 text-left text-sm font-semibold text-yellow-800" data-lang-key="name">
                                        ${t('name')} / ${t('shopName')}
                                    </th>
                                    <th class="py-3 px-4 border-b border-yellow-200 text-left text-sm font-semibold text-yellow-800" data-lang-key="location">
                                        ${t('location')}
                                    </th>
                                    <th class="py-3 px-4 border-b border-yellow-200 text-left text-sm font-semibold text-yellow-800" data-lang-key="action">
                                        ${t('action')}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                ${directoryData.filter(item => item.status === 'pending').map(item => {
                                    const location = `${item.village ? item.village + ', ' : ''}${item.union ? item.union + ', ' : ''}${item.upazila ? item.upazila + ', ' : ''}${item.district ? item.district + ', ' : ''}${item.division ? item.division : ''}`;
                                    return `
                                        <tr class="hover:bg-yellow-50 border-b border-gray-100 last:border-b-0">
                                            <td class="py-3 px-4 text-sm text-gray-800 capitalize">
                                                <span data-lang-key="category${item.category.charAt(0).toUpperCase() + item.category.slice(1)}">${t(`category${item.category.charAt(0).toUpperCase() + item.category.slice(1)}`)}</span>
                                            </td>
                                            <td class="py-3 px-4 text-sm text-gray-800">
                                                ${item.name || item.shopName || item.village}
                                            </td>
                                            <td class="py-3 px-4 text-sm text-gray-800">
                                                ${location}
                                            </td>
                                            <td class="py-3 px-4 text-sm text-gray-800 flex flex-wrap gap-2">
                                                <button data-id="${item.id}" class="verify-btn bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded-lg text-xs shadow-md transition duration-300" data-lang-key="verify">
                                                    ${t('verify')}
                                                </button>
                                                <button data-id="${item.id}" class="delete-btn bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded-lg text-xs shadow-md transition duration-300" data-lang-key="delete">
                                                    ${t('delete')}
                                                </button>
                                                <button data-id="${item.id}" class="view-details-btn bg-blue-500 hover:bg-blue-600 text-white text-xs font-bold py-1 px-3 rounded-lg shadow-md transition duration-300" data-lang-key="viewDetails">
                                                    ${t('viewDetails')}
                                                </button>
                                            </td>
                                        </tr>
                                    `;
                                }).join('')}
                            </tbody>
                        </table>
                    </div>
                `}
            ` : ''}
        </div>
    `;
    dynamicContent.innerHTML = html;

    // Attach event listener for admin mode toggle
    const adminModeToggle = document.getElementById('admin-mode-toggle');
    if (adminModeToggle) {
        adminModeToggle.addEventListener('change', (e) => {
            isAdminMode = e.target.checked;
            renderAdminPanel(); // Re-render to show/hide admin content
        });
    }

    // Attach event listeners for verify and delete buttons
    document.querySelectorAll('.verify-btn').forEach(button => {
        button.addEventListener('click', (e) => handleVerify(e.target.dataset.id));
    });
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', (e) => handleDelete(e.target.dataset.id));
    });
    document.querySelectorAll('.view-details-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const itemId = e.target.dataset.id || e.target.closest('button').dataset.id;
            const selectedEntry = directoryData.find(d => d.id === itemId);
            if (selectedEntry) {
                showDetailsModalFn(selectedEntry);
            }
        });
    });
}

/**
 * Handles verifying an entry.
 * @param {string} id - The ID of the entry to verify.
 */
async function handleVerify(id) {
    if (!db) return;
    try {
        const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
        const docRef = firebase.doc(db, `artifacts/${appId}/public/data/smartBanglaDirectory`, id);
        await firebase.updateDoc(docRef, { status: 'verified' });
        showMessage(t('dataVerifySuccess'), 'success');
    } catch (e) {
        console.error(t('errorVerifyingData'), e);
        showMessage(t('errorVerifyingData') + e.message, 'error');
    }
}

/**
 * Handles deleting an entry.
 * @param {string} id - The ID of the entry to delete.
 */
async function handleDelete(id) {
    if (!db) return;
    try {
        const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
        const docRef = firebase.doc(db, `artifacts/${appId}/public/data/smartBanglaDirectory`, id);
        await firebase.deleteDoc(docRef);
        showMessage(t('dataDeleteSuccess'), 'success');
    } catch (e) {
        console.error(t('errorDeletingData'), e);
        showMessage(t('errorDeletingData') + e.message, 'error');
    }
}

/**
 * Renders the Analytics page.
 */
function renderAnalyticsPage() {
    currentPage = 'analytics';
    stopCarousel(); // Stop carousel when navigating away from home
    const analyticsData = getAnalyticsData();

    let html = `
        <h2 class="text-2xl font-bold text-center text-blue-700 mb-6" data-lang-key="analytics">
            ${t('analytics')}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div class="bg-blue-50 p-6 rounded-xl shadow-md text-center transform hover:scale-105 transition-transform duration-300 border border-blue-200">
                <h3 class="text-xl font-semibold text-blue-800 mb-2" data-lang-key="totalEntries">${t('totalEntries')}</h3>
                <p class="text-5xl font-extrabold text-blue-600">${analyticsData.total}</p>
            </div>
            <div class="bg-green-50 p-6 rounded-xl shadow-md text-center transform hover:scale-105 transition-transform duration-300 border border-green-200">
                <h3 class="text-xl font-semibold text-green-800 mb-2" data-lang-key="verifiedEntries">${t('verifiedEntries')}</h3>
                <p class="text-5xl font-extrabold text-green-600">${analyticsData.verified}</p>
            </div>
            <div class="bg-yellow-50 p-6 rounded-xl shadow-md text-center transform hover:scale-105 transition-transform duration-300 border border-yellow-200">
                <h3 class="text-xl font-semibold text-yellow-800 mb-2" data-lang-key="pendingEntriesCount">${t('pendingEntriesCount')}</h3>
                <p class="text-5xl font-extrabold text-yellow-600">${analyticsData.pending}</p>
            </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div class="bg-gray-50 p-6 rounded-xl shadow-md border border-gray-200">
                <h3 class="text-xl font-semibold text-gray-800 mb-4 border-b pb-2" data-lang-key="entriesByCategory">${t('entriesByCategory')}</h3>
                ${Object.keys(analyticsData.entriesByCategory).length === 0 ? `
                    <p class="text-gray-600 text-center py-5" data-lang-key="noDataFound">${t('noDataFound')}</p>
                ` : `
                    <ul class="space-y-3">
                        ${Object.entries(analyticsData.entriesByCategory).map(([category, count]) => `
                            <li class="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                                <span class="font-medium text-gray-700 text-lg capitalize" data-lang-key="category${category.charAt(0).toUpperCase() + category.slice(1)}">
                                    ${t(`category${category.charAt(0).toUpperCase() + category.slice(1)}`)}
                                </span>
                                <span class="font-bold text-blue-600 text-xl">${count}</span>
                            </li>
                        `).join('')}
                    </ul>
                `}
            </div>

            <div class="bg-gray-50 p-6 rounded-xl shadow-md border border-gray-200">
                <h3 class="text-xl font-semibold text-gray-800 mb-4 border-b pb-2" data-lang-key="entriesByLocation">${t('entriesByLocation')}</h3>
                <select id="analyticsLocationTypeSelect" class="mb-4 p-3 border border-gray-300 rounded-lg w-full bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm">
                    <option value="all" data-lang-key="all">${t('all')}</option>
                    <option value="division" data-lang-key="divisionType">${t('divisionType')}</option>
                    <option value="district" data-lang-key="districtType">${t('districtType')}</option>
                    <option value="upazila" data-lang-key="upazilaType">${t('upazilaType')}</option>
                    <option value="union" data-lang-key="unionType">${t('unionType')}</option>
                    <option value="village" data-lang-key="villageType">${t('villageType')}</option>
                </select>
                <div id="locationAnalyticsList">
                    <!-- Location list will be updated by JS -->
                </div>
            </div>
        </div>
    `;
    dynamicContent.innerHTML = html;

    // Attach event listener for location type select
    const analyticsLocationTypeSelect = document.getElementById('analyticsLocationTypeSelect');
    if (analyticsLocationTypeSelect) {
        analyticsLocationTypeSelect.value = analyticsLocationType || 'all'; // Set initial value
        analyticsLocationTypeSelect.addEventListener('change', (e) => {
            analyticsLocationType = e.target.value;
            renderLocationAnalyticsList();
        });
        renderLocationAnalyticsList(); // Initial render
    }
}


/**
 * Filters and counts data for analytics dashboard.
 */
function getAnalyticsData() {
    const verifiedData = directoryData.filter(item => item.status === 'verified');
    const pendingData = directoryData.filter(item => item.status === 'pending');

    const entriesByCategory = {};
    verifiedData.forEach(item => {
        entriesByCategory[item.category] = (entriesByCategory[item.category] || 0) + 1;
    });

    const entriesByLocation = {};
    ['division', 'district', 'upazila', 'union', 'village'].forEach(locType => {
        entriesByLocation[locType] = {};
        verifiedData.forEach(item => {
            if (item[locType]) {
                entriesByLocation[locType][item[locType]] = (entriesByLocation[locType][item[locType]] || 0) + 1;
            }
        });
    });

    return {
        total: directoryData.length,
        verified: verifiedData.length,
        pending: pendingData.length,
        entriesByCategory,
        entriesByLocation,
        verifiedList: verifiedData
    };
}

/**
 * Shows the details modal with selected entry data.
 * @param {object} entry - The data object for the selected entry.
 */
function showDetailsModalFn(entry) {
    modalTitle.textContent = t('viewDetails');
    let detailsHtml = `
        <p><strong>${t('category')}:</strong> <span data-lang-key="category${entry.category.charAt(0).toUpperCase() + entry.category.slice(1)}">${t(`category${entry.category.charAt(0).toUpperCase() + entry.category.slice(1)}`)}</span></p>
        ${entry.name ? `<p><strong>${t('name')}:</strong> ${entry.name}</p>` : ''}
        ${entry.mobileNumber ? `<p><strong>${t('mobileNumber')}:</strong> ${entry.mobileNumber}</p>` : ''}
        ${entry.shopName ? `<p><strong>${t('shopName')}:</strong> ${entry.shopName}</p>` : ''}
        ${entry.ownerName ? `<p><strong>${t('ownerName')}:</strong> ${entry.ownerName}</p>` : ''}
        ${entry.type ? `<p><strong>${t('type')}:</strong> ${entry.type}</p>` : ''}
        ${entry.productType ? `<p><strong>${t('productType')}:</strong> ${entry.productType}</p>` : ''}
        ${entry.marketName ? `<p><strong>${t('marketName')}:</strong> ${entry.marketName}</p>` : ''}
        ${entry.totalPopulation ? `<p><strong>${t('totalPopulation')}:</strong> ${entry.totalPopulation}</p>` : ''}
        ${entry.literacyRate ? `<p><strong>${t('literacyRate')}:</strong> ${entry.literacyRate}%</p>` : ''}
        ${entry.occupationDistribution ? `<p><strong>${t('occupationDistribution')}:</strong> ${entry.occupationDistribution}</p>` : ''}
        <p><strong>${t('village')}:</strong> ${entry.village}</p>
        <p><strong>${t('union')}:</strong> ${entry.union}</p>
        <p><strong>${t('upazila')}:</strong> ${entry.upazila}</p>
        <p><strong>${t('district')}:</strong> ${entry.district}</p>
        <p><strong>${t('division')}:</strong> ${entry.division}</p>
        <p><strong>${t('status')}:</strong> <span class="px-2 py-1 rounded-full text-xs font-semibold ${entry.status === 'verified' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}">${t(entry.status === 'verified' ? 'verified' : 'verificationPending')}</span></p>
        <p class="text-xs text-gray-500">Submitted: ${new Date(entry.timestamp).toLocaleString(currentLang === 'bn' ? 'bn-BD' : 'en-US')}</p>
        <p class="text-xs text-gray-500">Submitted By: ${entry.submittedBy}</p>
    `;
    modalContent.innerHTML = detailsHtml;
    detailsModal.classList.add('active'); // Use 'active' class for styling transition
    detailsModal.classList.remove('hidden');
}

/**
 * Hides the details modal.
 */
function hideDetailsModalFn() {
    detailsModal.classList.remove('active');
    // Hide fully after transition
    setTimeout(() => {
        detailsModal.classList.add('hidden');
    }, 300);
}

// --- Carousel Functions ---
function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("carousel-slide");
    const dots = document.getElementsByClassName("dot");
    if (slides.length === 0) return; // Exit if elements not found

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
    resetCarouselTimer(); // Reset timer on manual navigation
}

function currentSlide(n) {
    showSlides(slideIndex = n);
    resetCarouselTimer(); // Reset timer on manual navigation
}

function startCarousel() {
    stopCarousel(); // Clear any existing interval
    carouselInterval = setInterval(() => {
        plusSlides(1);
    }, 5000); // Change image every 5 seconds
    showSlides(slideIndex); // Show initial slide
}

function stopCarousel() {
    clearInterval(carouselInterval);
}

function resetCarouselTimer() {
    stopCarousel();
    startCarousel();
}


// --- Event Listeners and Initial Setup ---

window.onload = function () {
    initializeDOMElements(); // Get DOM element references

    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Initialize Firebase
    async function initFirebase() {
        try {
            const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : null;
            if (!firebaseConfig) {
                console.error("Firebase config not found.");
                showMessage("Firebase configuration missing.", 'error');
                return;
            }
            const app = firebase.initializeApp(firebaseConfig);
            db = firebase.getFirestore(app);
            auth = firebase.getAuth(app);

            const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;

            firebase.onAuthStateChanged(auth, async (user) => {
                if (user) {
                    currentUserId = user.uid;
                    currentUserIdSpan.textContent = currentUserId;
                    userIdDisplay.classList.remove('hidden');
                } else {
                    if (initialAuthToken) {
                        try {
                            await firebase.signInWithCustomToken(auth, initialAuthToken);
                        } catch (error) {
                            console.error("Error signing in with custom token:", error);
                            await firebase.signInAnonymously(auth); // Fallback to anonymous
                        }
                    } else {
                        await firebase.signInAnonymously(auth);
                    }
                }
                // Once authenticated, start fetching data
                fetchDataFromFirestore();
            });
        } catch (error) {
            console.error("Error initializing Firebase:", error);
            showMessage("Error initializing Firebase: " + error.message, 'error');
        }
    }

    /**
     * Fetches data from Firestore in real-time.
     */
    function fetchDataFromFirestore() {
        if (!db || !currentUserId) {
            // If Firebase is not ready, re-try after a short delay
            setTimeout(fetchDataFromFirestore, 1000); // Retry after 1 second
            return;
        }

        const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
        const q = firebase.collection(db, `artifacts/${appId}/public/data/smartBanglaDirectory`);

        firebase.onSnapshot(q, (snapshot) => {
            const data = [];
            snapshot.forEach((doc) => {
                data.push({ id: doc.id, ...doc.data() });
            });
            directoryData = data; // Update global data array
            // Re-render current page to reflect changes
            switch (currentPage) {
                case 'home': renderHomePage(); break;
                case 'adminPanel': renderAdminPanel(); break;
                case 'analytics': renderAnalyticsPage(); break;
            }
        }, (error) => {
            console.error(t('errorFetchingData'), error);
            showMessage(t('errorFetchingData') + error.message, 'error');
        });
    }

    // Initialize Firebase and render home page
    initFirebase();
    renderHomePage(); // Initial page render

    // --- Navigation Button Event Listeners ---
    toggleCategoriesBtn.addEventListener('click', toggleCategorySidebar);
    addDataBtn.addEventListener('click', () => { renderAddDataPage(); closeCategorySidebar(); });
    adminPanelBtn.addEventListener('click', () => { renderAdminPanel(); closeCategorySidebar(); });
    analyticsBtn.addEventListener('click', () => { renderAnalyticsPage(); closeCategorySidebar(); });

    languageToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'bn' ? 'en' : 'bn';
        updateLanguage();
    });

    // --- Category Sidebar Button Event Listeners ---
    // Delegated event listener for dynamically added category buttons
    categoryButtonsContainer.addEventListener('click', handleCategoryButtonDelegation);

    // --- Modal Event Listeners ---
    closeModalBtn.addEventListener('click', hideDetailsModalFn);
    overlay.addEventListener('click', closeCategorySidebar); // Close sidebar when clicking outside

    // Expose carousel functions to global scope for HTML inline onclick
    window.plusSlides = plusSlides;
    window.currentSlide = currentSlide;

    // Initial language update to set all texts (after DOM elements are initialized)
    updateLanguage();
};

