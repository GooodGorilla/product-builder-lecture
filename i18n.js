// Internationalization (i18n) support
const translations = {
    ko: {
        // Navigation
        nav_home: "홈",
        nav_animal_test: "동물상 테스트",
        nav_about: "소개",
        nav_contact: "문의",

        // Hero
        hero_title: "AI로 알아보는 나의 모습",
        hero_description: "인공지능 기술을 활용한 다양한 테스트로 재미있게 자신을 알아보세요. 동물상 테스트, 메뉴 추천 등 다양한 콘텐츠를 무료로 제공합니다.",
        hero_cta: "지금 테스트하기",

        // Featured Section
        featured_title: "인기 테스트",
        animal_test_title: "동물상 테스트",
        animal_test_desc: "AI가 분석하는 나의 동물상! 강아지상일까, 고양이상일까? 웹캠이나 사진으로 간편하게 테스트해보세요.",
        animal_feature_1: "실시간 웹캠 분석",
        animal_feature_2: "사진 업로드 지원",
        animal_feature_3: "상세한 결과 설명",
        start_test: "테스트 시작",

        menu_test_title: "저녁 메뉴 추천",
        menu_test_desc: "오늘 저녁 뭐 먹지? 매일 고민되는 메뉴 선택을 도와드립니다. 랜덤 추천으로 새로운 메뉴를 발견해보세요.",
        menu_feature_1: "다양한 메뉴 데이터베이스",
        menu_feature_2: "랜덤 추천 기능",
        menu_feature_3: "한식, 양식, 중식 등 다양",
        get_recommendation: "추천 받기",

        // How it works
        how_it_works_title: "어떻게 작동하나요?",
        step1_title: "테스트 선택",
        step1_desc: "원하는 테스트를 선택하세요. 동물상 테스트, 메뉴 추천 등 다양한 옵션이 있습니다.",
        step2_title: "간편한 참여",
        step2_desc: "웹캠을 켜거나 사진을 업로드하세요. 별도의 앱 설치 없이 브라우저에서 바로 이용 가능합니다.",
        step3_title: "결과 확인",
        step3_desc: "AI가 분석한 결과를 확인하고 친구들과 공유해보세요. 재미있는 설명과 함께 제공됩니다.",

        // About Section
        about_title: "FunTest 소개",
        about_p1: "FunTest는 최신 AI 기술을 활용하여 재미있고 유익한 테스트를 제공하는 서비스입니다. Google의 Teachable Machine을 활용한 이미지 분류 기술로 동물상 테스트를 구현하였으며, 누구나 쉽고 재미있게 이용할 수 있도록 설계되었습니다.",
        about_p2: "저희는 사용자 경험을 최우선으로 생각하며, 지속적으로 새로운 테스트와 기능을 추가하고 있습니다. 모든 테스트는 무료로 제공되며, 개인정보는 안전하게 보호됩니다.",
        learn_more: "더 알아보기 →",

        // FAQ
        faq_title: "자주 묻는 질문",
        faq1_q: "동물상 테스트는 어떻게 작동하나요?",
        faq1_a: "동물상 테스트는 Google Teachable Machine으로 학습된 AI 모델을 사용합니다. 사용자의 얼굴 사진을 분석하여 강아지상과 고양이상 중 어느 쪽에 더 가까운지 확률로 보여드립니다. 재미로 즐기는 테스트이며, 과학적 근거가 있는 것은 아닙니다.",
        faq2_q: "제 사진이 저장되나요?",
        faq2_a: "아니요, 사용자의 사진은 서버에 저장되지 않습니다. 모든 분석은 사용자의 브라우저에서 직접 이루어지며, 분석이 완료되면 이미지 데이터는 자동으로 삭제됩니다. 개인정보 보호를 최우선으로 생각합니다.",
        faq3_q: "모바일에서도 이용할 수 있나요?",
        faq3_a: "네, FunTest는 모바일 기기에 최적화되어 있습니다. 스마트폰이나 태블릿의 브라우저에서 접속하여 모든 테스트를 이용하실 수 있습니다. 모바일 카메라를 활용한 실시간 테스트도 지원됩니다.",
        faq4_q: "테스트 결과가 정확한가요?",
        faq4_a: "동물상 테스트는 재미를 위한 엔터테인먼트 콘텐츠입니다. AI 모델이 학습한 패턴을 기반으로 분석하지만, 이는 과학적으로 검증된 방법이 아닙니다. 친구들과 함께 가볍게 즐기시면 됩니다.",

        // Footer
        footer_description: "AI 기반 재미있는 테스트 서비스",
        footer_links: "바로가기",
        footer_support: "고객지원",
        footer_contact: "문의하기",
        footer_privacy: "개인정보처리방침",
        footer_terms: "이용약관",
        footer_copyright: "© 2024 FunTest. All rights reserved.",

        // Animal Test Page
        animal_page_title: "동물상 테스트",
        animal_page_subtitle: "AI가 분석하는 나의 동물상! 강아지상일까, 고양이상일까?",
        webcam_mode: "웹캠",
        upload_mode: "사진 업로드",
        start_webcam: "웹캠 시작하기",
        loading: "로딩중...",
        analyzing: "분석중...",
        ai_analyzing: "AI가 분석중...",
        drop_image: "이미지를 드래그하거나 클릭하여 업로드",
        supported_formats: "JPG, PNG 파일 지원",
        analyze_btn: "분석하기",
        dog_type: "강아지상",
        cat_type: "고양이상",

        animal_info_title: "동물상 테스트란?",
        animal_info_desc: "동물상 테스트는 사람의 얼굴 특징을 분석하여 강아지상과 고양이상 중 어느 쪽에 더 가까운지 알아보는 재미있는 테스트입니다. AI 이미지 분류 기술을 활용하여 분석합니다.",
        animal_vs_title: "강아지상 vs 고양이상",
        dog_desc: "강아지상은 일반적으로 친근하고 부드러운 인상, 동글동글한 눈, 따뜻한 미소가 특징입니다. 사교적이고 활발한 이미지를 줍니다.",
        cat_desc: "고양이상은 샤프하고 세련된 인상, 날카로운 눈매, 도도한 분위기가 특징입니다. 신비롭고 독립적인 이미지를 줍니다.",
        how_to_use_title: "이용 방법",
        how_to_1: "웹캠 모드: 실시간으로 카메라를 통해 분석합니다.",
        how_to_2: "업로드 모드: 사진을 업로드하여 분석합니다.",
        how_to_3: "얼굴이 잘 보이는 정면 사진을 사용하면 더 정확합니다.",
        privacy_notice_title: "개인정보 안내",
        privacy_notice_desc: "모든 이미지 분석은 사용자의 브라우저에서 직접 이루어지며, 서버로 전송되거나 저장되지 않습니다. 안심하고 이용하세요!",

        // Result descriptions
        dog_result_1: "당신은 밝고 활발한 강아지상! 사람들에게 친근하게 다가가고, 항상 긍정적인 에너지를 뿜어내는 매력의 소유자입니다.",
        dog_result_2: "충성스럽고 따뜻한 마음을 가진 강아지상이시네요! 친구와 가족을 소중히 여기며, 함께 있으면 편안한 분위기를 만들어주는 타입입니다.",
        dog_result_3: "사교적이고 에너지 넘치는 강아지상! 새로운 사람과도 금방 친해지는 매력을 가지고 있어요.",
        cat_result_1: "당신은 우아하고 독립적인 고양이상! 자신만의 세계가 뚜렷하고, 신비로운 매력으로 사람들의 호기심을 자극합니다.",
        cat_result_2: "도도하지만 은근히 애교있는 고양이상이시네요! 쉽게 마음을 열지 않지만, 한번 친해지면 끈끈한 유대감을 보여주는 타입입니다.",
        cat_result_3: "세련되고 지적인 고양이상! 혼자만의 시간을 즐기면서도 묘한 카리스마로 주변을 사로잡는 매력이 있어요.",

        // Menu Page
        menu_page_title: "저녁 메뉴 추천",
        menu_page_desc: "매일 반복되는 \"오늘 저녁 뭐 먹지?\" 고민, FunTest가 해결해 드립니다! 버튼 한 번으로 다양한 메뉴 중에서 오늘의 저녁 메뉴를 추천받아보세요.",
        menu_placeholder: "버튼을 눌러 메뉴를 추천받으세요!",
        menu_recommend_btn: "메뉴 추천받기",
        menu_category_title: "추천 메뉴 카테고리",
        menu_category_desc: "FunTest의 메뉴 추천은 다양한 카테고리의 음식을 포함합니다:",
        menu_korean: "한식:",
        menu_korean_items: "김치찌개, 된장찌개, 불고기, 비빔밥, 삼겹살, 칼국수, 냉면 등",
        menu_chinese: "중식:",
        menu_chinese_items: "짜장면, 짬뽕, 탕수육, 마파두부, 볶음밥, 양장피 등",
        menu_japanese: "일식:",
        menu_japanese_items: "초밥, 라멘, 우동, 돈까스, 덮밥, 오코노미야키 등",
        menu_western: "양식:",
        menu_western_items: "파스타, 피자, 스테이크, 햄버거, 리조또, 샐러드 등",
        menu_snack: "분식:",
        menu_snack_items: "떡볶이, 순대, 김밥, 라면, 튀김, 오뎅 등",
        menu_other: "기타:",
        menu_other_items: "치킨, 족발, 보쌈, 샤브샤브, 쌀국수, 카레 등",
        menu_tip_title: "메뉴 추천 팁",
        menu_tip_desc: "추천받은 메뉴가 마음에 들지 않는다면 다시 버튼을 눌러보세요. 새로운 메뉴가 추천됩니다. 가족이나 친구와 함께 식사할 때는 여러 번 추천받아서 다수결로 결정하는 것도 좋은 방법입니다!",

        // About Page
        about_page_title: "FunTest 소개",
        mission_title: "우리의 미션",
        mission_desc: "FunTest는 최신 인공지능 기술을 누구나 쉽고 재미있게 경험할 수 있도록 하는 것을 목표로 합니다. 복잡한 기술을 친근하고 재미있는 방식으로 제공하여, 사용자들이 AI의 가능성을 직접 체험할 수 있도록 합니다.",
        what_we_do_title: "우리가 하는 일",
        what_we_do_desc: "FunTest는 다양한 AI 기반 테스트와 도구를 개발하고 제공합니다. 현재 제공하는 주요 서비스는 다음과 같습니다:",
        service_animal: "동물상 테스트: Google Teachable Machine을 활용한 이미지 분류 AI로 사용자의 동물상을 분석합니다. 강아지상과 고양이상 중 어느 쪽에 더 가까운지 재미있게 알아볼 수 있습니다.",
        service_menu: "저녁 메뉴 추천: 매일 고민되는 저녁 메뉴 선택을 도와드립니다. 다양한 음식 카테고리에서 랜덤으로 메뉴를 추천받아보세요.",
        tech_title: "사용된 기술",
        tech_desc: "FunTest는 다음과 같은 기술을 활용하여 서비스를 제공합니다:",
        tech_tf: "TensorFlow.js: 브라우저에서 직접 머신러닝 모델을 실행할 수 있게 해주는 JavaScript 라이브러리입니다.",
        tech_tm: "Google Teachable Machine: 누구나 쉽게 머신러닝 모델을 만들 수 있도록 Google에서 제공하는 웹 기반 도구입니다.",
        tech_responsive: "반응형 웹 디자인: 모든 기기에서 최적의 사용자 경험을 제공하기 위해 반응형 디자인을 적용했습니다.",
        privacy_title: "개인정보 보호",
        privacy_about_desc: "FunTest는 사용자의 개인정보 보호를 최우선으로 생각합니다. 동물상 테스트에서 사용되는 이미지는 서버에 저장되지 않으며, 모든 분석은 사용자의 브라우저에서 직접 이루어집니다. 분석이 완료되면 이미지 데이터는 자동으로 삭제됩니다.",
        privacy_link: "자세한 내용은 개인정보처리방침을 참고해주세요.",
        contact_title: "연락처",
        contact_about_desc: "FunTest에 대한 문의사항이나 제안이 있으시면 언제든지 연락해주세요. 사용자 여러분의 피드백은 저희 서비스를 개선하는 데 큰 도움이 됩니다.",
        contact_link: "문의하기 →",

        // Contact Page
        contact_page_title: "문의하기",
        contact_page_desc: "FunTest에 대한 문의사항, 제안, 또는 피드백이 있으시면 아래 양식을 통해 연락해주세요. 보내주신 내용은 소중하게 검토하여 빠른 시일 내에 답변드리겠습니다.",
        form_title: "문의 양식",
        form_name: "이름",
        form_name_placeholder: "이름을 입력해주세요",
        form_email: "이메일",
        form_email_placeholder: "이메일 주소를 입력해주세요",
        form_subject: "문의 유형",
        form_subject_placeholder: "예: 기능 제안, 버그 신고, 일반 문의",
        form_message: "메시지",
        form_message_placeholder: "문의 내용을 상세히 작성해주세요",
        form_submit: "메시지 보내기",
        faq_link: "문의하기 전에 자주 묻는 질문을 확인해보세요. 대부분의 궁금증을 해결하실 수 있습니다.",
        response_title: "응답 시간",
        response_desc: "일반적으로 영업일 기준 1-2일 내에 답변을 드리고 있습니다. 문의량에 따라 다소 지연될 수 있으니 양해 부탁드립니다."
    },
    en: {
        // Navigation
        nav_home: "Home",
        nav_animal_test: "Animal Type Test",
        nav_about: "About",
        nav_contact: "Contact",

        // Hero
        hero_title: "Discover Yourself with AI",
        hero_description: "Explore yourself with various AI-powered tests. We offer free content including Animal Type Test, Menu Recommendations, and more.",
        hero_cta: "Start Testing Now",

        // Featured Section
        featured_title: "Popular Tests",
        animal_test_title: "Animal Type Test",
        animal_test_desc: "Which animal do you resemble? Dog or Cat? Use your webcam or upload a photo to find out with AI analysis.",
        animal_feature_1: "Real-time webcam analysis",
        animal_feature_2: "Photo upload supported",
        animal_feature_3: "Detailed result descriptions",
        start_test: "Start Test",

        menu_test_title: "Dinner Menu Picker",
        menu_test_desc: "Can't decide what to eat? Let us help you choose your dinner menu. Discover new dishes with random recommendations.",
        menu_feature_1: "Diverse menu database",
        menu_feature_2: "Random recommendation",
        menu_feature_3: "Various cuisines available",
        get_recommendation: "Get Recommendation",

        // How it works
        how_it_works_title: "How Does It Work?",
        step1_title: "Choose a Test",
        step1_desc: "Select your desired test. We offer various options including Animal Type Test and Menu Recommendations.",
        step2_title: "Easy Participation",
        step2_desc: "Turn on your webcam or upload a photo. No app installation required - use directly in your browser.",
        step3_title: "View Results",
        step3_desc: "Check AI-analyzed results and share with friends. Fun descriptions included.",

        // About Section
        about_title: "About FunTest",
        about_p1: "FunTest provides fun and useful tests using the latest AI technology. We've implemented the Animal Type Test using Google's Teachable Machine image classification technology, designed for easy and enjoyable use by everyone.",
        about_p2: "We prioritize user experience and continuously add new tests and features. All tests are free, and your privacy is safely protected.",
        learn_more: "Learn More →",

        // FAQ
        faq_title: "Frequently Asked Questions",
        faq1_q: "How does the Animal Type Test work?",
        faq1_a: "The Animal Type Test uses an AI model trained with Google Teachable Machine. It analyzes your face photo and shows the probability of whether you're more like a dog or cat type. This is for entertainment purposes and not scientifically verified.",
        faq2_q: "Are my photos saved?",
        faq2_a: "No, your photos are not saved on any server. All analysis is performed directly in your browser, and image data is automatically deleted after analysis. We prioritize your privacy.",
        faq3_q: "Can I use it on mobile?",
        faq3_a: "Yes, FunTest is optimized for mobile devices. You can access all tests from your smartphone or tablet browser. Real-time testing using mobile cameras is also supported.",
        faq4_q: "Are the test results accurate?",
        faq4_a: "The Animal Type Test is entertainment content for fun. While it analyzes based on patterns learned by the AI model, it's not a scientifically verified method. Enjoy it casually with friends.",

        // Footer
        footer_description: "AI-powered Fun Test Service",
        footer_links: "Quick Links",
        footer_support: "Support",
        footer_contact: "Contact Us",
        footer_privacy: "Privacy Policy",
        footer_terms: "Terms of Service",
        footer_copyright: "© 2024 FunTest. All rights reserved.",

        // Animal Test Page
        animal_page_title: "Animal Type Test",
        animal_page_subtitle: "Which animal do you resemble according to AI? Dog or Cat?",
        webcam_mode: "Webcam",
        upload_mode: "Upload Photo",
        start_webcam: "Start Webcam",
        loading: "Loading...",
        analyzing: "Analyzing...",
        ai_analyzing: "AI is analyzing...",
        drop_image: "Drag & drop image or click to upload",
        supported_formats: "JPG, PNG files supported",
        analyze_btn: "Analyze",
        dog_type: "Dog Type",
        cat_type: "Cat Type",

        animal_info_title: "What is Animal Type Test?",
        animal_info_desc: "The Animal Type Test analyzes facial features to determine whether you resemble a dog or cat type. It uses AI image classification technology for analysis.",
        animal_vs_title: "Dog Type vs Cat Type",
        dog_desc: "Dog types generally have friendly, soft impressions, round eyes, and warm smiles. They give off sociable and energetic vibes.",
        cat_desc: "Cat types have sharp, sophisticated impressions, keen eyes, and an aloof atmosphere. They give off mysterious and independent vibes.",
        how_to_use_title: "How to Use",
        how_to_1: "Webcam mode: Analyze in real-time through camera.",
        how_to_2: "Upload mode: Upload a photo for analysis.",
        how_to_3: "A clear front-facing photo gives better results.",
        privacy_notice_title: "Privacy Notice",
        privacy_notice_desc: "All image analysis is performed directly in your browser and is never sent to or stored on any server. Feel safe to use!",

        // Result descriptions
        dog_result_1: "You're a bright and lively dog type! You approach people in a friendly manner and always radiate positive energy.",
        dog_result_2: "You're a loyal and warm-hearted dog type! You value friends and family, creating a comfortable atmosphere when together.",
        dog_result_3: "You're a sociable and energetic dog type! You have the charm to quickly become friends with new people.",
        cat_result_1: "You're an elegant and independent cat type! You have a clear sense of self and captivate people with mysterious charm.",
        cat_result_2: "You're a proud but secretly affectionate cat type! You don't open up easily, but once close, you show strong bonds.",
        cat_result_3: "You're a sophisticated and intellectual cat type! You enjoy alone time while captivating others with subtle charisma.",

        // Menu Page
        menu_page_title: "Dinner Menu Picker",
        menu_page_desc: "Can't decide what to eat for dinner? FunTest is here to help! Get a random dinner menu recommendation with just one click.",
        menu_placeholder: "Click the button to get a recommendation!",
        menu_recommend_btn: "Get Recommendation",
        menu_category_title: "Menu Categories",
        menu_category_desc: "FunTest's menu recommendations include various food categories:",
        menu_korean: "Korean:",
        menu_korean_items: "Kimchi Stew, Soybean Paste Stew, Bulgogi, Bibimbap, Samgyeopsal, Kalguksu, Naengmyeon, etc.",
        menu_chinese: "Chinese:",
        menu_chinese_items: "Jajangmyeon, Jjamppong, Sweet and Sour Pork, Mapo Tofu, Fried Rice, Yangjangpi, etc.",
        menu_japanese: "Japanese:",
        menu_japanese_items: "Sushi, Ramen, Udon, Tonkatsu, Rice Bowl, Okonomiyaki, etc.",
        menu_western: "Western:",
        menu_western_items: "Pasta, Pizza, Steak, Hamburger, Risotto, Salad, etc.",
        menu_snack: "Street Food:",
        menu_snack_items: "Tteokbokki, Sundae, Gimbap, Ramyeon, Fried Foods, Oden, etc.",
        menu_other: "Others:",
        menu_other_items: "Chicken, Jokbal, Bossam, Shabu-shabu, Pho, Curry, etc.",
        menu_tip_title: "Menu Recommendation Tips",
        menu_tip_desc: "If you don't like the recommended menu, just click the button again for a new suggestion. When dining with family or friends, try getting multiple recommendations and decide by vote!",

        // About Page
        about_page_title: "About FunTest",
        mission_title: "Our Mission",
        mission_desc: "FunTest aims to make the latest AI technology accessible and fun for everyone. By presenting complex technology in a friendly and enjoyable way, we enable users to directly experience the possibilities of AI.",
        what_we_do_title: "What We Do",
        what_we_do_desc: "FunTest develops and provides various AI-based tests and tools. Our main services include:",
        service_animal: "Animal Type Test: Analyzes your animal type using image classification AI with Google Teachable Machine. Find out if you're more like a dog or cat in a fun way.",
        service_menu: "Dinner Menu Picker: Helps you with daily dinner menu decisions. Get random menu recommendations from various food categories.",
        tech_title: "Technologies Used",
        tech_desc: "FunTest uses the following technologies:",
        tech_tf: "TensorFlow.js: A JavaScript library that enables running machine learning models directly in the browser.",
        tech_tm: "Google Teachable Machine: A web-based tool from Google that allows anyone to easily create machine learning models.",
        tech_responsive: "Responsive Web Design: Applied responsive design to provide optimal user experience on all devices.",
        privacy_title: "Privacy Protection",
        privacy_about_desc: "FunTest prioritizes user privacy. Images used in the Animal Type Test are not stored on servers, and all analysis is performed directly in the user's browser. Image data is automatically deleted after analysis.",
        privacy_link: "Please refer to our Privacy Policy for details.",
        contact_title: "Contact",
        contact_about_desc: "If you have any questions or suggestions about FunTest, please feel free to contact us. Your feedback greatly helps us improve our service.",
        contact_link: "Contact Us →",

        // Contact Page
        contact_page_title: "Contact Us",
        contact_page_desc: "If you have questions, suggestions, or feedback about FunTest, please reach out through the form below. We will review your message carefully and respond as soon as possible.",
        form_title: "Contact Form",
        form_name: "Name",
        form_name_placeholder: "Enter your name",
        form_email: "Email",
        form_email_placeholder: "Enter your email address",
        form_subject: "Subject",
        form_subject_placeholder: "e.g., Feature suggestion, Bug report, General inquiry",
        form_message: "Message",
        form_message_placeholder: "Please describe your inquiry in detail",
        form_submit: "Send Message",
        faq_link: "Before contacting us, check our FAQ. You may find answers to most questions there.",
        response_title: "Response Time",
        response_desc: "We typically respond within 1-2 business days. Response times may vary depending on inquiry volume. Thank you for your patience."
    }
};

// Get current language from localStorage or default to Korean
function getCurrentLanguage() {
    return localStorage.getItem('language') || 'ko';
}

// Set language
function setLanguage(lang) {
    localStorage.setItem('language', lang);
    applyTranslations();
    updateLanguageButtons();
}

// Apply translations to all elements with data-i18n attribute
function applyTranslations() {
    const lang = getCurrentLanguage();
    const t = translations[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.textContent = t[key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key]) {
            el.placeholder = t[key];
        }
    });

    // Update page title if exists
    const titleKey = document.querySelector('title')?.getAttribute('data-i18n');
    if (titleKey && t[titleKey]) {
        document.title = t[titleKey] + ' - FunTest';
    }
}

// Update language button states
function updateLanguageButtons() {
    const lang = getCurrentLanguage();
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    applyTranslations();
    updateLanguageButtons();

    // Add click handlers to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
});

// Export for use in other scripts
window.i18n = {
    t: (key) => {
        const lang = getCurrentLanguage();
        return translations[lang][key] || key;
    },
    getCurrentLanguage,
    setLanguage
};
