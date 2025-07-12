// Data for the application
const selData = [
    { id: 'awareness', title: '자기 인식', icon: '🧐', description: '나의 감정, 생각, 가치관, 강점과 약점을 정확하게 아는 능력이에요. "나는 지금 조금 속상하구나" 라고 알아차리는 것처럼요.', value: 50 },
    { id: 'management', title: '자기 관리', icon: '🧘', description: '감정과 행동을 조절하고 목표를 향해 노력하는 힘이에요. 화가 나도 소리 지르지 않고 잠시 참거나, 숙제를 미루지 않고 해내는 것이죠.', value: 50 },
    { id: 'social', title: '사회적 인식', icon: '🤝', description: '다른 사람의 감정, 생각, 문화를 이해하고 공감하는 능력이에요. 친구의 슬픈 표정을 보고 "무슨 일 있니?"라고 물어봐 주는 마음이죠.', value: 50 },
    { id: 'relationship', title: '관계 기술', icon: '💬', description: '친구와 좋은 관계를 만들고, 갈등이 생겼을 때 잘 해결하는 기술이에요. 내 의견을 잘 말하고, 친구의 이야기도 잘 들어주는 거예요.', value: 50 },
    { id: 'decision', title: '책임감 있는 의사결정', icon: '🤔', description: '나와 다른 사람에게 미칠 영향을 생각하며 올바른 선택을 하는 능력이에요. "이 장난을 치면 친구 기분이 어떨까?" 하고 먼저 생각해보는 거죠.', value: 50 }
];

const aggressionData = {
    offline: [
        { title: '따돌림 (사회적 배제)', icon: '🚫', description: '그룹 활동이나 대화에서 일부러 빼거나, 파티에 초대하지 않는 등 무리에서 소외시키는 행동이에요.' },
        { title: '소문 유포 및 뒷담화', icon: '🤫', description: '사실이 아니거나 부풀려진 나쁜 소문을 퍼뜨려 친구의 평판에 상처를 주는 행동이에요.' },
        { title: '이간질 (관계 파괴)', icon: '👥', description: '친구들 사이를 일부러 멀어지게 만들거나, 특정 친구와 놀지 말라고 압력을 주는 행동이에요.' }
    ],
    cyber: [
        { title: '사이버 따돌림 (단톡방)', icon: '💬', description: '단체 채팅방에서 특정 친구만 빼고 대화하거나, 그 친구만 있는 방에서 모두 나가버리는 행동(단톡방 감옥, 방폭)을 말해요.' },
        { title: '악성 댓글 및 메시지', icon: '👿', description: 'SNS나 온라인 게시판에 상처를 주는 댓글을 달거나, 익명으로 욕설 메시지를 반복해서 보내는 행동이에요.' },
        { title: '개인정보 유포 및 사칭', icon: '📸', description: '동의 없이 친구의 사진이나 개인정보를 인터넷에 올리거나, 친구인 척하며 다른 사람에게 나쁜 말을 하는 행동이에요.' }
    ]
};

// Scroll Function
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
    // Card Toggle Logic
    const setupCardToggles = (containerId) => {
        const container = document.getElementById(containerId);
        container.addEventListener('click', (e) => {
            const card = e.target.closest('.content-card');
            if (card) {
                card.classList.toggle('open');
            }
        });
    };

    // Populate SEL Cards
    const selContainer = document.getElementById('sel-cards');
    selContainer.innerHTML = selData.map((item, index) => `
        <div class="bg-white p-4 rounded-xl shadow-md">
            <div class="space-y-2">
                <label for="${item.id}-slider" class="text-lg font-bold flex items-center justify-between">
                    <span>${item.icon} ${item.title}</span>
                </label>
                <p class="text-sm text-stone-600">${item.description}</p>
                <input type="range" id="${item.id}-slider" min="0" max="100" value="${item.value}" class="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer" data-index="${index}">
            </div>
        </div>
    `).join('');
    
    // Populate Aggression Cards
    const offlineContainer = document.getElementById('offline-content');
    offlineContainer.innerHTML = aggressionData.offline.map(item => `
        <div class="content-card bg-white p-4 rounded-xl shadow-md">
            <div class="flex justify-between items-center">
                <h4 class="text-lg font-bold">${item.icon} ${item.title}</h4>
                <span class="arrow text-2xl text-sky-500 transition-transform">↓</span>
            </div>
            <div class="details text-stone-600 border-t mt-2 border-stone-200">
               ${item.description}
            </div>
        </div>
    `).join('');

    const cyberContainer = document.getElementById('cyber-content');
    cyberContainer.innerHTML = aggressionData.cyber.map(item => `
        <div class="content-card bg-white p-4 rounded-xl shadow-md">
            <div class="flex justify-between items-center">
                <h4 class="text-lg font-bold">${item.icon} ${item.title}</h4>
                <span class="arrow text-2xl text-sky-500 transition-transform">↓</span>
            </div>
            <div class="details text-stone-600 border-t mt-2 border-stone-200">
               ${item.description}
            </div>
        </div>
    `).join('');

    setupCardToggles('offline-content');
    setupCardToggles('cyber-content');
    
    // Aggression Tab Logic
    const btnOffline = document.getElementById('btn-offline');
    const btnCyber = document.getElementById('btn-cyber');

    btnOffline.addEventListener('click', () => {
        offlineContainer.classList.remove('hidden');
        cyberContainer.classList.add('hidden');
        btnOffline.classList.add('bg-sky-500', 'text-white');
        btnOffline.classList.remove('bg-white', 'text-stone-700');
        btnCyber.classList.add('bg-white', 'text-stone-700');
        btnCyber.classList.remove('bg-sky-500', 'text-white');
    });

    btnCyber.addEventListener('click', () => {
        cyberContainer.classList.remove('hidden');
        offlineContainer.classList.add('hidden');
        btnCyber.classList.add('bg-sky-500', 'text-white');
        btnCyber.classList.remove('bg-white', 'text-stone-700');
        btnOffline.classList.add('bg-white', 'text-stone-700');
        btnOffline.classList.remove('bg-sky-500', 'text-white');
    });

    // Chart.js - SEL Chart
    const selCtx = document.getElementById('selChart').getContext('2d');
    const selChart = new Chart(selCtx, {
        type: 'bar',
        data: {
            labels: selData.map(d => d.title),
            datasets: [{
                label: '나의 마음 근육 점수',
                data: selData.map(d => d.value),
                backgroundColor: 'rgba(56, 189, 248, 0.6)',
                borderColor: 'rgba(56, 189, 248, 1)',
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    beginAtZero: true,
                    max: 100
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: false
                }
            }
        }
    });

    document.getElementById('sel-cards').addEventListener('input', e => {
        if(e.target.type === 'range') {
            const index = e.target.dataset.index;
            const newValue = e.target.value;
            selChart.data.datasets[0].data[index] = newValue;
            selChart.update();
        }
    });

    // Chart.js - Mood Chart
    const moodCtx = document.getElementById('moodChart').getContext('2d');
    const moodChart = new Chart(moodCtx, {
        type: 'bar',
        data: {
            labels: ['내 마음'],
            datasets: [{
                label: '마음 온도',
                data: [50],
                backgroundColor: (context) => {
                    const value = context.dataset.data[0];
                    const alpha = 0.7;
                    if (value < 25) return `rgba(100, 116, 139, ${alpha})`; // Slate
                    if (value < 50) return `rgba(59, 130, 246, ${alpha})`; // Blue
                    if (value < 75) return `rgba(250, 204, 21, ${alpha})`; // Yellow
                    return `rgba(249, 115, 22, ${alpha})`; // Orange
                },
                borderColor: (context) => {
                    const value = context.dataset.data[0];
                    const alpha = 1;
                    if (value < 25) return `rgba(100, 116, 139, ${alpha})`;
                    if (value < 50) return `rgba(59, 130, 246, ${alpha})`;
                    if (value < 75) return `rgba(250, 204, 21, ${alpha})`;
                    return `rgba(249, 115, 22, ${alpha})`;
                },
                borderWidth: 2,
                borderRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value, index, values) {
                            if(value === 0) return '😢';
                            if(value === 50) return '😐';
                            if(value === 100) return '😄';
                            return '';
                        }
                    }
                },
                x: {
                    display: false,
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: false
                }
            }
        }
    });

    const moodSlider = document.getElementById('moodSlider');
    moodSlider.addEventListener('input', (e) => {
        moodChart.data.datasets[0].data[0] = e.target.value;
        moodChart.update();
    });

    // Keyword Activity
    const keywordInput = document.getElementById('keyword-input');
    const addKeywordBtn = document.getElementById('add-keyword-btn');
    const keywordList = document.getElementById('keyword-list');
    let firstKeyword = true;

    addKeywordBtn.addEventListener('click', () => {
        const keyword = keywordInput.value.trim();
        if (keyword) {
            if(firstKeyword) {
                keywordList.innerHTML = '';
                firstKeyword = false;
            }
            const keywordEl = document.createElement('span');
            keywordEl.className = 'inline-block bg-sky-200 text-sky-800 text-sm font-semibold mr-2 px-2.5 py-1 rounded-full';
            keywordEl.textContent = keyword;
            keywordList.appendChild(keywordEl);
            keywordInput.value = '';
            keywordInput.focus();
        }
    });

    keywordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addKeywordBtn.click();
        }
    });
});