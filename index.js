<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>서버 안내문</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fastly.jsdelivr.net/npm/galmuri@latest/dist/galmuri.css');

        /* Custom styles for the body and button animations */
        body {
            font-family: 'Galmuri', sans-serif; /* 폰트를 Galmuri로 변경 */
            background: linear-gradient(to bottom right, #e0f7fa, #f3e5f5); /* Very light cyan to very light lavender */
            color: #333; /* Dark gray text */
            line-height: 1.6;
        }

        /* Custom styles for the + button gradient animation */
        .plus-button-gradient {
            background-size: 200% 200%;
            transition: background-position 0.5s ease-in-out, transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        }
        .plus-button-gradient:hover {
            background-position: 100%;
        }

        /* Modal overlay for background dimming */
        .modal-overlay {
            background-color: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(5px); /* Add a blur effect to the background */
        }
    </style>
</head>
<body class="p-4 sm:p-6 md:p-8">
    <div id="root"></div>

    <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <script type="text/babel">
        // React Hooks (useState)를 사용하기 위해 React에서 구조 분해 할당
        const { useState } = React;

        // FAQ 모달 컴포넌트
        const FaqModal = ({ onClose }) => (
            <div className="fixed inset-0 flex items-center justify-center z-50 modal-overlay">
                <div className="bg-white rounded-lg shadow-xl p-8 max-w-lg w-full mx-4 relative transform transition-all duration-300 scale-100 opacity-100">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-3xl font-bold focus:outline-none"
                    >
                        &times;
                    </button>
                    <h3 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">자주 묻는 질문 (FAQ)</h3>
                    <div className="mb-6">
                        <h4 className="text-xl font-semibold text-gray-700 mb-2">서버 오픈 일정</h4>
                        <p className="text-gray-600">서버 오픈 일정은 대략 <span className="font-bold text-purple-600">1년 정도</span> 소요될 것으로 예상됩니다. 더 정확한 일정은 추후 공지될 예정입니다.</p>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-gray-700 mb-2">서버 베타 테스터</h4>
                        <p className="text-gray-600">서버 베타 테스터는 보트라이더와 달리 오픈 베타가 아니며, 관리자 승인 후 개별적으로 임명됩니다. 관심 있으신 분은 문의하기를 통해 신청해주세요.</p>
                    </div>
                </div>
            </div>
        );

        // 문의하기 모달 컴포넌트
        const ContactModal = ({ onClose }) => (
            <div className="fixed inset-0 flex items-center justify-center z-50 modal-overlay">
                <div className="bg-white rounded-lg shadow-xl p-8 max-w-lg w-full mx-4 relative transform transition-all duration-300 scale-100 opacity-100">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-3xl font-bold focus:outline-none"
                    >
                        &times;
                    </button>
                    <h3 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">문의하기</h3>
                    <p className="text-gray-700 text-lg mb-4">궁금한 점이 있으시면 아래 디스코드 링크를 통해 문의해주세요!</p>
                    <a
                        href="https://discord.gg/rT5RGZ6UjQ" /* 디스코드 링크 업데이트 */
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-500 text-white font-bold py-3 px-6 rounded-full shadow-md hover:bg-blue-600 transition-colors duration-200"
                    >
                        디스코드 채널로 이동
                    </a>
                    <p className="text-sm text-gray-500 mt-4">
                        (관리자 답변이 느릴 수 있습니다.)
                    </p>
                </div>
            </div>
        );

        // 메인 App 컴포넌트
        function App() {
            // 플로팅 메뉴의 열림/닫힘 상태 관리
            const [isMenuOpen, setIsMenuOpen] = useState(false);
            // FAQ 모달의 열림/닫힘 상태 관리
            const [showFaqModal, setShowFaqModal] = useState(false);
            // 문의하기 모달의 열림/닫힘 상태 관리
            const [showContactModal, setShowContactModal] = useState(false);


            // 메뉴 토글 함수
            const toggleMenu = () => {
                setIsMenuOpen(!isMenuOpen);
            };

            // 월드 정보 섹션 컴포넌트
            const WorldInfo = () => (
                <div className="bg-white/85 rounded-xl p-6 mb-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.005]">
                    <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-purple-400 pl-4 mb-4">월드 정보</h2>
                    <ul className="list-disc pl-5 text-gray-700">
                        <li className="mb-2"><strong>서버 주소:</strong> Soboro6866.kro.kr:25565</li>
                        <li className="mb-2"><strong>월드보더 크기:</strong> 2000 x 2000</li>
                        <li className="mb-2"><strong>스폰 위치:</strong> 랜덤 스폰</li>
                        <li className="mb-2"><strong>좌표 확인:</strong> 불가능</li>
                        <li className="mb-2">
                            <strong>부활 규칙:</strong>
                            <ul className="list-disc pl-6 mt-1 text-gray-600">
                                <li>사망 시 6시간 후 부활 (부활권을 사용하면 상대방이 부활할 수 있음)</li>
                                <li>부활 후 15분간 PVP 불가</li>
                            </ul>
                        </li>
                    </ul>
                    <div className="bg-blue-100/70 border-l-4 border-blue-400 text-blue-800 p-4 rounded-md mt-6 font-semibold">
                        <p>※ 부활 규칙은 게임의 균형 유지를 위해 설정되었습니다.</p>
                    </div>
                </div>
            );

            // 명령어 섹션 컴포넌트
            const Commands = () => (
                <div className="bg-white/85 rounded-xl p-6 mb-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.005]">
                    <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-purple-400 pl-4 mb-4">명령어</h2>
                    <p className="mb-4 text-gray-700">서버에서 사용할 수 있는 주요 명령어는 다음과 같습니다:</p>
                    <ul className="list-disc pl-5 text-gray-700">
                        <li className="mb-3">
                            <strong>/스폰이동</strong>
                            <p className="text-gray-600 ml-4">스폰 위치로 이동 (쿨타임: 2분)</p>
                        </li>
                        <li className="mb-3">
                            <strong>/집설정</strong>
                            <p className="text-gray-600 ml-4">현재 위치를 집으로 설정합니다. (단, 다른 집 반경 300칸 이내에서는 설정할 수 없음)</p>
                        </li>
                        <li className="mb-3">
                            <strong>/집</strong>
                            <p className="text-gray-600 ml-4">설정한 집으로 이동합니다.</p>
                        </li>
                        <li className="mb-3">
                            <strong>/출석체크</strong>
                            <p className="text-gray-600 ml-4">출석 체크 후 보상을 지급받습니다.</p>
                        </li>
                    </ul>
                    <div className="bg-blue-100/70 border-l-4 border-blue-400 text-blue-800 p-4 rounded-md mt-6 font-semibold">
                        <p>※ 현재 서버는 제작 중이며, 추후 추가 명령어 및 기능이 업데이트될 예정입니다.</p>
                    </div>
                </div>
            );

            // 트레이드 절차 섹션 컴포넌트
            const TradeProcedure = () => (
                <div className="bg-white/85 rounded-xl p-6 mb-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.005]">
                    <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-purple-400 pl-4 mb-4">트레이드 절차</h2>
                    <p className="mb-4 text-gray-700">서버 내 거래는 아래의 절차로 진행됩니다:</p>
                    <ol className="list-decimal pl-5 text-gray-700">
                        <li className="mb-2"><strong>상호 합의:</strong> 거래 조건에 대해 서로 동의합니다.</li>
                        <li className="mb-2"><strong>Trade Room 입장 (디스코드):</strong> 일정 조율 후 거래 전용 채널에 입장합니다.</li>
                        <li className="mb-2"><strong>거래소 이동 (마인크래프트):</strong> 게임 내 거래소로 이동합니다.</li>
                        <li className="mb-2"><strong>개별 거래소 칸 이동:</strong> 각 플레이어가 다른 칸으로 이동하여 거래를 준비합니다.</li>
                        <li className="mb-2"><strong>거래 진행:</strong> 합의된 조건에 따라 거래가 실행됩니다. (추후 자세한 설명 영상 제공 예정)</li>
                        <li className="mb-2"><strong>거래 종료:</strong> 거래를 마무리합니다.</li>
                    </ol>
                    <div className="bg-blue-100/70 border-l-4 border-blue-400 text-blue-800 p-4 rounded-md mt-6 font-semibold">
                        <p>※ 겉날개, 팬텀막 등 일부 품목은 거래가 제한됩니다. 추가 제한 사항은 추후 공지됩니다.</p>
                    </div>
                </div>
            );

            // 플로팅 메뉴 컴포넌트
            const FloatingMenu = ({ isOpen, toggleMenu, setShowFaqModal, setShowContactModal }) => (
                <div className="fixed bottom-8 right-8 z-50">
                    {/* 메뉴 아이템들 */}
                    <div className={`flex flex-col items-end space-y-3 mb-4 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                        <button
                            onClick={() => { setShowFaqModal(true); toggleMenu(); }}
                            className="bg-purple-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-purple-600 transition-all duration-200 transform hover:scale-105"
                        >
                            FAQ
                        </button>
                        <button
                            onClick={() => { setShowContactModal(true); toggleMenu(); }}
                            className="bg-purple-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-purple-600 transition-all duration-200 transform hover:scale-105"
                        >
                            문의하기
                        </button>
                        <button className="bg-purple-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-purple-600 transition-all duration-200 transform hover:scale-105">
                            공지사항
                        </button>
                    </div>
                    <button
                        onClick={toggleMenu}
                        className="
                            relative overflow-hidden
                            w-16 h-16 rounded-full shadow-xl flex items-center justify-center text-3xl font-bold
                            text-white
                            bg-blue-500 /* 기본 배경색 */
                            transition-all duration-500 ease-in-out
                            transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300
                            /* 그라데이션 효과 */
                            bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 /* 초기 그라데이션 (숨겨진) */
                            plus-button-gradient /* 커스텀 CSS 클래스 적용 */
                        "
                    >
                        {isOpen ? '−' : '+'}
                    </button>
                </div>
            );

            return (
                <div className="min-h-screen" style={{
                    fontFamily: "'Galmuri', sans-serif", /* 폰트를 Galmuri로 변경 */
                    color: '#333',
                    lineHeight: 1.6
                }}>
                    <div className="max-w-4xl mx-auto py-8 px-6 bg-white/90 rounded-2xl shadow-2xl">
                        <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900 border-b-4 border-blue-300 pb-4">서버 안내문</h1>
                        <p className="text-center text-xl mb-10 text-gray-700">이 문서는 서버의 기본 정보와 기능에 대해 안내합니다.</p>

                        <WorldInfo />
                        <Commands />
                        <TradeProcedure />

                        <p className="text-center text-lg mt-10 text-gray-600">
                            이 안내문이 서버 이용에 도움이 되길 바라며, 앞으로도 새로운 업데이트와 기능이 추가될 예정이니 참고하시기 바랍니다.
                        </p>
                    </div>

                    {/* 플로팅 메뉴 컴포넌트 렌더링 */}
                    <FloatingMenu
                        isOpen={isMenuOpen}
                        toggleMenu={toggleMenu}
                        setShowFaqModal={setShowFaqModal}
                        setShowContactModal={setShowContactModal}
                    />

                    {/* FAQ 모달 조건부 렌더링 */}
                    {showFaqModal && <FaqModal onClose={() => setShowFaqModal(false)} />}

                    {/* 문의하기 모달 조건부 렌더링 */}
                    {showContactModal && <ContactModal onClose={() => setShowContactModal(false)} />}
                </div>
            );
        }

        // React 앱을 'root' 요소에 렌더링
        ReactDOM.createRoot(document.getElementById('root')).render(<App />);
    </script>
</body>
</html>
