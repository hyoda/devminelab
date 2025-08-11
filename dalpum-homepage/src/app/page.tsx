'use client';

import { useState } from 'react';
import HeroSection from '@/components/ui/HeroSection';
import Link from 'next/link';
import SectionTitle from '@/components/ui/SectionTitle';
import Tabs, { TabPanel } from '@/components/ui/Tabs';
import Timeline from '@/components/ui/Timeline';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import ArticleModal from '@/components/ui/ArticleModal';
import { Target, Users, Lightbulb, Building2, FileText, Newspaper, Mail, Phone } from 'lucide-react';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // 스위칭 허브 모델 탭 데이터
  const switchingHubTabs = [
    {
      id: 'packaging',
      label: '전문성 패키징',
      icon: <Target className="w-5 h-5" />,
      content: (
        <TabPanel
          title="전문성 패키징 (Packaging Expertise)"
          description="지역의 선순환 설계자들이 보유한 성공적인 비즈니스 모델과 노하우를 디지털 시스템으로 구축하고, 누구나 활용할 수 있는 애플리케이션으로 패키징하는 전략입니다."
       >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-r from-emerald/5 to-ocean-primary/5 rounded-xl border border-emerald/10">
              <h4 className="text-xl font-semibold mb-4 text-foreground">핵심 원리</h4>
              <ul className="space-y-3 text-muted">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald rounded-full mt-3 flex-shrink-0" />
                  <span>지역 전문가의 성공 경험을 체계적으로 분석</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald rounded-full mt-3 flex-shrink-0" />
                  <span>노코드/로우코드 기술을 활용한 앱 개발</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald rounded-full mt-3 flex-shrink-0" />
                  <span>복제 가능한 비즈니스 모델로 확산</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-gradient-to-r from-coral/5 to-lime/5 rounded-xl border border-coral/10">
              <h4 className="text-xl font-semibold mb-4 text-foreground">기대 효과</h4>
              <ul className="space-y-3 text-muted">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-coral rounded-full mt-3 flex-shrink-0" />
                  <span>지역 특화 전문성의 표준화 및 확산</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-coral rounded-full mt-3 flex-shrink-0" />
                  <span>창업 진입 장벽 대폭 낮춤</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-coral rounded-full mt-3 flex-shrink-0" />
                  <span>지역 경제의 다각화 및 안정성 증대</span>
                </li>
              </ul>
            </div>
          </div>
        </TabPanel>
      )
    },
    {
      id: 'democracy',
      label: '기술 민주화',
      icon: <Users className="w-5 h-5" />,
      content: (
        <TabPanel
          title="기술 민주화 (Technology Democracy)"
          description="전문성 패키징의 결과로 탄생한 도구들을 통해 비기술자도 쉽게 활용할 수 있는 환경을 만들어, 지역 주민 모두를 경제 주체로 포용합니다."
       >
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-ocean-light/10 to-emerald/10 p-6 rounded-xl">
              <h4 className="text-xl font-semibold mb-4 text-foreground">디지털 격차 해소 방안</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-ocean-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">📱</span>
                  </div>
                  <h5 className="font-semibold mb-2">직관적 앱 인터페이스</h5>
                  <p className="text-sm text-muted">복잡한 기술 지식 없이도 사용 가능</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-emerald/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">👥</span>
                  </div>
                  <h5 className="font-semibold mb-2">맞춤형 교육</h5>
                  <p className="text-sm text-muted">연령대별, 수준별 교육 프로그램</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h5 className="font-semibold mb-2">커뮤니티 지원</h5>
                  <p className="text-sm text-muted">상호 도움과 협력 네트워크</p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-surface rounded-xl border border-gray-100">
              <h4 className="text-lg font-semibold mb-3">실제 적용 사례</h4>
              <p className="text-muted leading-relaxed">
                남해 지역에서 고령층 주민들이 직관적인 농산물 판매 앱을 통해 온라인 마케팅에 성공적으로 참여하였으며, 
                이를 통해 월 평균 30% 이상의 수익 증대 효과를 확인했습니다.
              </p>
            </div>
          </div>
        </TabPanel>
      )
    },
    {
      id: 'framework',
      label: '조력자 프레임워크',
      icon: <Lightbulb className="w-5 h-5" />,
      content: (
        <TabPanel
          title="조력자 프레임워크 (Facilitator Framework)"
          description="스위칭 허브를 지속 가능하게 운영하는 지원 시스템으로, 연결과 협력을 통해 개별 참여자들이 반복 업무에서 해방되어 창의적 가치 창출에 집중할 수 있도록 돕는다고 분석됩니다."
       >
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-lime/5 to-emerald/5 rounded-xl border border-lime/20">
                <h4 className="text-lg font-semibold mb-4 text-foreground flex items-center">
                  <Building2 className="w-5 h-5 mr-2 text-lime" />
                  Freedom Stack 도구
                </h4>
                <ul className="space-y-2 text-muted">
                  <li>• 업무 자동화 시스템</li>
                  <li>• 고객 관리 CRM</li>
                  <li>• 마케팅 자동화</li>
                  <li>• 재무 관리 도구</li>
                  <li>• 협업 플랫폼</li>
                </ul>
              </div>
              <div className="p-6 bg-gradient-to-br from-coral/5 to-ocean-primary/5 rounded-xl border border-coral/20">
                <h4 className="text-lg font-semibold mb-4 text-foreground flex items-center">
                  <Users className="w-5 h-5 mr-2 text-coral" />
                  Inner Circle 커뮤니티
                </h4>
                <ul className="space-y-2 text-muted">
                  <li>• 신뢰 기반 네트워킹</li>
                  <li>• 지식 공유 세션</li>
                  <li>• 멘토링 프로그램</li>
                  <li>• 협업 프로젝트</li>
                  <li>• 지속적 성장 지원</li>
                </ul>
              </div>
            </div>
            <div className="p-6 bg-gradient-to-r from-ocean-deep/5 to-ocean-primary/5 rounded-xl">
              <h4 className="text-lg font-semibold mb-3 text-foreground">운영 원칙</h4>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="p-4">
                  <div className="text-2xl mb-2">🎯</div>
                  <h5 className="font-medium">목적 중심</h5>
                  <p className="text-sm text-muted">명확한 가치 창출 목표</p>
                </div>
                <div className="p-4">
                  <div className="text-2xl mb-2">🔄</div>
                  <h5 className="font-medium">지속 가능성</h5>
                  <p className="text-sm text-muted">장기적 성장 관점</p>
                </div>
                <div className="p-4">
                  <div className="text-2xl mb-2">🤝</div>
                  <h5 className="font-medium">상호 신뢰</h5>
                  <p className="text-sm text-muted">투명한 소통과 협력</p>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
      )
    }
  ];

  // 남해 워케이션 타임라인 데이터
  const namhaeTimeline = [
    {
      id: '2020',
      year: '2020',
      title: '남해바다 디지털 홀리데이',
      description: '최초 워케이션 실험으로 IT 청년 20명이 남해에서 새로운 라이프스타일을 체험했습니다.',
      category: '파일럿 프로그램',
      details: [
        'IT 업계 청년 20명 초청',
        '평일 원격근무 + 주말 지역 탐방 모델 실험',
        '남해바다를 보며 일하는 새로운 업무 환경 제공',
        '송정해변 서핑 등 액티비티 프로그램 운영'
      ],
      achievements: [
        '참가자 만족도 95% 달성',
        '지역 언론 주목으로 전국적 관심 확산',
        '워케이션 모델의 실현 가능성 입증'
      ],
      image: 'https://placehold.co/1200x800/e2e8f0/475569?text=Namhae+2020'
    },
    {
      id: '2021',
      year: '2021',
      title: 'IT청년 촌라이프 프로젝트',
      description: '남해군의 공식 지원을 받아 워케이션 프로그램을 정식 사업으로 확대했습니다.',
      category: '정식 사업',
      details: [
        '남해군 공식 지원사업으로 선정',
        '2주~4주간 체류하며 지역 프로젝트 수행',
        '현지 코디네이터 및 커뮤니티 프로그램 지원',
        '현지 코디네이터와 함께 체계적 운영'
      ],
      achievements: [
        '전국 최초 지자체 워케이션 모델 구축',
        '참가 청년들의 지역 정착률 25% 달성',
        '지역 상권 활성화 기여'
      ],
      image: 'https://placehold.co/1200x800/e2e8f0/475569?text=Namhae+2021'
    },
    {
      id: '2022',
      year: '2022',
      title: '워케이션 밋업 개최',
      description: '2년간의 성과를 바탕으로 워케이션의 미래 비전을 공유하는 대규모 행사를 개최했습니다.',
      category: '성과 공유',
      details: [
        '전국 워케이션 운영 기업 및 지자체 관계자 참석',
        '요트에서의 원격근무 시연 등 혁신적 프로그램',
        '"워케이션을 허(許)하라!" 슬로건으로 새 패러다임 제시',
        '참가자 발표 및 네트워킹 세션 운영'
      ],
      achievements: [
        '워케이션 모델의 전국 확산 기반 마련',
        '경남도 차원의 정책 관심 유도',
        '지역 혁신 모델로 인정받음'
      ],
      image: 'https://placehold.co/1200x800/e2e8f0/475569?text=Namhae+2022'
    }
  ];

  // 정책 제안서 데이터
  const policyDocuments = [
    {
      title: '남해 스위칭 허브: 최종 실행 전략 보고서 (넥스트윙)',
      description: '기술 민주화와 전문성 패키징 기반의 실행 전략 요약 인포그래픽.',
      date: '2025.08.08',
      category: '전략 보고서',
      href: '/infographics/nextwing-namhae'
    },
    {
      title: '스위칭 허브 최종 보고서_for_남해',
      description: '이론적 토대와 벤치마킹, 리스크 회피 설계 요약 인포그래픽.',
      date: '2025.08.08',
      category: '최종 보고서',
      href: '/infographics/switching-hub-final'
    },
    {
      title: '스위칭허브_for_남해',
      description: '스위칭 허브 개요와 작동원리, 전환 메커니즘 요약.',
      date: '2025.08.08',
      category: '개념 정리',
      href: '/infographics/switching-hub'
    },
    {
      title: '지역 상생형 스위칭 허브_for_남해',
      description: '하이퍼 로컬 전략과 커뮤니티 기반 확산, KPI 프레임워크 요약.',
      date: '2025.08.08',
      category: '제안서',
      href: '/infographics/regional-switching-hub'
    }
  ];

  // 언론 보도 데이터
  const mediaArticles = [
    {
      title: "평일엔 원격으로 일하고, 주말엔 송정해변에서 서핑 즐겨요",
      description:
        "남해 워케이션 참가자의 새로운 라이프스타일을 조명한 특집 기사",
      date: "2022.11.05",
      category: "라이프스타일",
      href: "http://www.nhtimes.co.kr/news/articleView.html?idxno=56171",
      isExternal: true,
      image: "http://www.nhtimes.co.kr/news/photo/202110/56171_57091_5210.gif",
    },
    {
      title: "경남도, 18개 시군 체험마을과 코워킹 플랫폼 연계 추진",
      description: "남해 모델의 경남도 전체 확산을 위한 정책 간담회 소식",
      date: "2022.10.28",
      category: "정책",
      href: "https://youth.gyeongnam.go.kr/youth/board.es?mid=a10502000000&bid=0006&act=view&list_no=1430&tag=&nPage=46&cg_code=",
      isExternal: true,
      image:
        "https://www.gyeongnam.go.kr/upload_data/board_data/BBS_0000060/162139828756493.jpg",
    },
    {
      title: "IT 청년들이 선택한 새로운 일터, 남해",
      description:
        "남해 워케이션이 청년들에게 미친 긍정적 영향을 분석한 심층 보도",
      date: "2021.09.15",
      category: "청년 정책",
      href: "http://www.nhtimes.co.kr/news/articleView.html?idxno=55080",
      isExternal: true,
      image: "http://www.nhtimes.co.kr/news/photo/202106/55080_55827_947.gif",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={
          <>
            6년간 성장한<br />
            <span className="text-white drop-shadow-lg">서로학교 활동 분석</span>
          </>
        }
        subtitle="Seoro School Activity Analysis"
        description={
          <>
            브레인스토밍과 난상토론을 중심으로 한 학습 공동체가<br />
            지역 혁신과 남해 비전에 대해 제안하는 내용을 객관적으로 살펴봅니다.
          </>
        }
        backgroundImage=""
        overlay={true}
        overlayOpacity={0.7}
        primaryAction={{
          label: '활동 분석 보기',
          onClick: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
        }}
        secondaryAction={{
          label: '연구 성과물 보기',
          onClick: () => document.getElementById('archive')?.scrollIntoView({ behavior: 'smooth' })
        }}
      />

      {/* 서로학교 활동 분석 */}
      <section id="about" className="section-padding bg-white">
        <div className="container-dalpum">
          <SectionTitle
            subtitle="서로학교 창립 멤버"
            title="김강수"
            description="6년간 브레인스토밍과 난상토론을 핵심으로 하는 학습 공동체를 이끌어온 서로학교의 주요 인물로, 지역 혁신과 협력적 학습에 대한 독특한 접근법을 개발해왔습니다."
          />

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-r from-emerald/5 to-ocean-primary/5 rounded-xl">
                <h3 className="text-2xl font-serif font-semibold mb-4">서로학교 6년 활동 분석</h3>
                <p className="text-muted leading-relaxed mb-4">
                  외부 관찰자의 시각에서 볼 때, 서로학교는 전통적인 교육 기관과는 다른 독특한 학습 생태계를 구축해왔습니다. 이들의 활동은 브레인스토밍과 난상토론을 중심으로 한 비공식적 학습 네트워크의 특성을 보여줍니다.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald rounded-full mt-3 flex-shrink-0" />
                    <span className="text-muted">계층 없는 수평적 토론 구조</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald rounded-full mt-3 flex-shrink-0" />
                    <span className="text-muted">실험과 실패를 통한 학습 문화</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald rounded-full mt-3 flex-shrink-0" />
                    <span className="text-muted">지역 사회와의 실질적 연결</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-r from-coral/5 to-lime/5 rounded-xl">
                <h4 className="text-xl font-semibold mb-3">6년간의 학습 여정 관찰</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-coral/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-coral text-sm font-bold">🗣️</span>
                    </div>
                    <div>
                      <p className="font-medium">브레인스토밍 세션</p>
                      <p className="text-sm text-muted">정기적인 집단 사고 실험과 아이디어 발굴</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-lime/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-lime text-sm font-bold">💬</span>
                    </div>
                    <div>
                      <p className="font-medium">난상토론 워크숍</p>
                      <p className="text-sm text-muted">자유로운 형태의 토론을 통한 집단지성 발현</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-ocean-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-ocean-primary text-sm font-bold">🌊</span>
                    </div>
                    <div>
                      <p className="font-medium">남해 워케이션 실험</p>
                      <p className="text-sm text-muted">지역과 연계한 실질적 프로젝트 경험</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-emerald/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-emerald text-sm font-bold">🔄</span>
                    </div>
                    <div>
                      <p className="font-medium">스위칭 허브 구상</p>
                      <p className="text-sm text-muted">지역 혁신을 위한 새로운 모델 개발</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-ocean-deep via-ocean-primary to-emerald rounded-2xl p-8 flex items-end">
                <div className="text-white">
                  <blockquote className="text-xl font-serif italic mb-4">
                    &quot;우리는 서로에게서 배운다. 가장 좋은 아이디어는 
                    혼자가 아니라 함께 있을 때 나온다.&quot;
                  </blockquote>
                  <p className="font-medium">김강수</p>
                  <p className="text-sm opacity-90">서로학교 창립 멤버</p>
                </div>
              </div>
              {/* 배경 장식 요소 */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-coral/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-lime/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 스위칭 허브 모델 */}
      <section id="model" className="section-padding bg-surface">
        <div className="container-dalpum">
          <SectionTitle
            subtitle="서로학교 제안 모델"
            title="스위칭 허브 개념 분석"
            description="서로학교에서 제안하는 스위칭 허브는 지역을 방문하는 유동 인재와 지역 자원을 연결하는 새로운 방식의 지역 혁신 모델입니다. 이는 6년간의 브레인스토밍 세션에서 나온 집단지성의 결과물로 평가됩니다."
          />

          <Tabs
            items={switchingHubTabs}
            variant="cards"
            size="lg"
            className="mb-16"
          />

          {/* 기존 모델과의 비교 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-serif font-semibold text-center mb-8">기존 모델과의 차이점</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 px-4 font-semibold">구분</th>
                    <th className="text-left py-4 px-4 font-semibold text-muted">기존 모델</th>
                    <th className="text-left py-4 px-4 font-semibold text-primary">스위칭 허브 모델</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 font-medium">접근 방식</td>
                    <td className="py-4 px-4 text-muted">관광 유치 중심</td>
                    <td className="py-4 px-4 text-primary">가치 창출 중심</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 font-medium">지속성</td>
                    <td className="py-4 px-4 text-muted">보조금 의존</td>
                    <td className="py-4 px-4 text-primary">자체 수익 모델</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 font-medium">참여자</td>
                    <td className="py-4 px-4 text-muted">일회성 방문객</td>
                    <td className="py-4 px-4 text-primary">장기 협력 파트너</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium">결과</td>
                    <td className="py-4 px-4 text-muted">일시적 활성화</td>
                    <td className="py-4 px-4 text-primary">지속적 성장 동력</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 남해 워케이션 사례 */}
      <section id="cases" className="section-padding bg-white">
        <div className="container-dalpum">
          <SectionTitle
            subtitle="실험적 사례 연구"
            title="남해 워케이션 프로젝트 분석"
            description="서로학교 멤버들이 2020년부터 3년간 진행한 남해 워케이션 프로젝트는 그들의 스위칭 허브 이론을 실제로 검증해본 흥미로운 실험 사례로 기록되고 있습니다."
          />

          <Timeline items={namhaeTimeline} className="mb-16" />
          
          {/* 성과 통계 */}
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-r from-emerald/5 to-ocean-primary/5 rounded-xl">
              <div className="text-3xl font-bold text-emerald mb-2">50+</div>
              <p className="text-muted">누적 참가자</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-r from-coral/5 to-lime/5 rounded-xl">
              <div className="text-3xl font-bold text-coral mb-2">95%</div>
              <p className="text-muted">참가자 만족도</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-r from-ocean-primary/5 to-emerald/5 rounded-xl">
              <div className="text-3xl font-bold text-ocean-primary mb-2">25%</div>
              <p className="text-muted">지역 정착률</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-r from-lime/5 to-coral/5 rounded-xl">
              <div className="text-3xl font-bold text-lime mb-2">30%</div>
              <p className="text-muted">상권 매출 증가</p>
            </div>
          </div>
        </div>
      </section>

      {/* 스위칭 허브: 지역 상생과 재생 고용을 위한 비즈니스 모델 */}
      <section id="archive" className="bg-slate-50 text-slate-800">
        <style jsx>{`
          .bg-hero-pattern {
            background-color: #f8fafc;
            background-image: radial-gradient(#cbd5e1 1px, transparent 1px);
            background-size: 20px 20px;
          }
        `}</style>

        {/* Header */}
        <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl md:text-2xl font-bold text-slate-900">
              <span className="text-indigo-600">스위칭 허브</span> 남해
            </h1>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 hover:text-indigo-600 transition">서로학교 분석</a>
              <a href="#model" className="text-slate-600 hover:text-indigo-600 transition">스위칭 허브</a>
              <a href="#cases" className="text-slate-600 hover:text-indigo-600 transition">남해 워케이션</a>
              <a href="#archive" className="text-slate-600 hover:text-indigo-600 transition">연구 성과물</a>
              <a href="#media" className="text-slate-600 hover:text-indigo-600 transition">언론 보도</a>
            </nav>
          </div>
        </header>

        <main>
          {/* Hero Section */}
          <section className="bg-hero-pattern py-20 md:py-32">
            <div className="container mx-auto px-6 text-center">
              <div className="">
                <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
                  지역의 잠재력을 <span className="text-indigo-600">성장의 에너지</span>로
                </h2>
                <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                  '스위칭 허브'는 유동 인재와 지역 사회를 연결하여 지속 가능한 일자리와 새로운 가치를 창출하는 지역 상생형 비즈니스 모델입니다.
                </p>
                <div className="mt-10 flex justify-center gap-4">
                  <a href="#model" className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition">
                    모델 알아보기
                  </a>
                  <a href="#case-study" className="bg-white text-slate-700 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-slate-100 transition border border-slate-200">
                    성공 사례
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* The Problem Section */}
          <section id="problem" className="py-20 bg-white">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12 ">
                <h3 className="text-sm font-bold text-indigo-600 uppercase">THE PROBLEM</h3>
                <h4 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">기존 지역 활성화 모델의 한계</h4>
                <p className="mt-4 text-slate-600 max-w-2xl mx-auto">일시적, 외부 의존적 방식은 지속 가능한 생태계를 만드는 데 명백한 한계를 보였습니다.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-100 text-red-600 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                  </div>
                  <h5 className="text-xl font-bold text-slate-900">전통적 관광 모델</h5>
                  <p className="mt-2 text-slate-600">일시적 소비에 그치고, 지역 내 가치사슬 연계가 미흡합니다.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 text-yellow-600 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                  </div>
                  <h5 className="text-xl font-bold text-slate-900">기업 인큐베이터</h5>
                  <p className="mt-2 text-slate-600">지역 특성과 무관한 사업 모델, 수도권으로 인재가 유출될 수 있습니다.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-600 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <h5 className="text-xl font-bold text-slate-900">공유 오피스</h5>
                  <p className="mt-2 text-slate-600">단순 공간 제공에 그쳐, 지역 경제와의 연계성이 낮습니다.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  </div>
                  <h5 className="text-xl font-bold text-slate-900">정부 보조금 사업</h5>
                  <p className="mt-2 text-slate-600">보조금에 의존하며, 자생적 생태계 구축에 실패할 가능성이 높습니다.</p>
                </div>
              </div>
            </div>
          </section>

          {/* The Solution: Switching Hub */}
          <section id="vision" className="py-20 bg-slate-100">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12 ">
                <h3 className="text-sm font-bold text-indigo-600 uppercase">THE SOLUTION</h3>
                <h4 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">새로운 패러다임: 스위칭 허브</h4>
                <p className="mt-4 text-slate-600 max-w-2xl mx-auto">유동인구의 잠재력을 지역의 기회로 '전환(Switching)'하여 자생적 성장 생태계를 구축합니다.</p>
              </div>
              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg ">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                  <div>
                    <h5 className="text-2xl font-bold text-slate-900">무엇이 다른가?</h5>
                    <p className="mt-4 text-slate-600">스위칭 허브는 단순한 공간이 아닌, '계획된 우연(Engineered Serendipity)'을 통해 방문객과 지역 주민, 리더 간의 의미있는 상호작용을 촉진하는 역동적인 플랫폼입니다.</p>
                    <ul className="mt-6 space-y-4">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-4 mt-1">✓</div>
                        <span className="text-slate-700"><b>기회 전환:</b> 유동 인재의 기술, 아이디어, 네트워크를 지역 내 사업 기회와 일자리로 연결</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-4 mt-1">✓</div>
                        <span className="text-slate-700"><b>생태계 구축:</b> 일회성 유치가 아닌, 시장 기반의 자생적 성장 선순환 구조 창출</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-4 mt-1">✓</div>
                        <span className="text-slate-700"><b>시장 형성:</b> 지역의 필요와 외부 인재 사이의 정보 비대칭성을 해소하는 '시장 형성자' 역할 수행</span>
                      </li>
                    </ul>
                  </div>
                  <div className="relative h-64 md:h-full flex items-center justify-center">
                    <div className="absolute text-center">
                      <div className="w-24 h-24 md:w-32 md:h-32 bg-indigo-500 text-white rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                        <span className="font-bold text-lg md:text-xl">스위칭 허브</span>
                      </div>
                    </div>
                    <div className="absolute" style={{transform: 'rotate(0deg) translateX(120px) rotate(0deg)'}}>
                      <div className="w-20 h-20 bg-white rounded-full flex flex-col items-center justify-center shadow-lg text-center p-1">
                        <span className="text-2xl">💼</span>
                        <span className="text-xs font-bold">유동 인재</span>
                      </div>
                    </div>
                    <div className="absolute" style={{transform: 'rotate(120deg) translateX(120px) rotate(-120deg)'}}>
                      <div className="w-20 h-20 bg-white rounded-full flex flex-col items-center justify-center shadow-lg text-center p-1">
                        <span className="text-2xl">🏘️</span>
                        <span className="text-xs font-bold">지역 사회</span>
                      </div>
                    </div>
                    <div className="absolute" style={{transform: 'rotate(240deg) translateX(120px) rotate(-240deg)'}}>
                      <div className="w-20 h-20 bg-white rounded-full flex flex-col items-center justify-center shadow-lg text-center p-1">
                        <span className="text-2xl">💡</span>
                        <span className="text-xs font-bold">새로운 기회</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* The Model Section */}
          <section id="model" className="py-20 bg-white">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12 ">
                <h3 className="text-sm font-bold text-indigo-600 uppercase">THE MODEL</h3>
                <h4 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">기회의 엔진: 어떻게 작동하는가?</h4>
                <p className="mt-4 text-slate-600 max-w-2xl mx-auto">스위칭 허브는 '선순환 설계자'의 리더십과 체계적인 사용자 유입 경로를 통해 지속 가능한 가치를 창출합니다.</p>
              </div>

              {/* Virtuous Cycle Architect */}
              <div className="bg-slate-50 rounded-2xl p-8 md:p-12 mb-12 ">
                <div className="grid md:grid-cols-5 gap-8 items-center">
                  <div className="md:col-span-2 text-center">
                    <div className="inline-block bg-white p-4 rounded-full shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-indigo-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" /></svg>
                    </div>
                    <h5 className="text-2xl font-bold mt-4">선순환 설계자</h5>
                    <p className="text-slate-600 mt-2">The Virtuous Cycle Architect</p>
                  </div>
                  <div className="md:col-span-3">
                    <p className="text-lg text-slate-700 mb-4">생태계의 핵심 동력인 '선순환 설계자'는 단순히 베푸는 사람이 아닌, 지성과 전략으로 지속 가능한 상생의 '시스템'을 설계하는 리더입니다.</p>
                    <ul className="space-y-3">
                      <li className="flex items-center"><span className="font-bold text-indigo-600 mr-2">✓</span> 검증된 사업 성공 경험과 높은 신뢰</li>
                      <li className="flex items-center"><span className="font-bold text-indigo-600 mr-2">✓</span> 비즈니스 모델 공유, 인재 멘토링, 네트워크 재투자</li>
                      <li className="flex items-center"><span className="font-bold text-indigo-600 mr-2">✓</span> '타인 지향적 이기주의'로 Win-Win 시나리오 설계</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* User Funnel Infographic */}
              <div className="">
                <h5 className="text-2xl font-bold text-center mb-8">사용자 여정: 방문객에서 기여자로</h5>
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-0">
                  <div className="text-center p-4 w-full md:w-1/3">
                    <div className="bg-indigo-100 text-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">1</div>
                    <h6 className="text-xl font-bold mt-4">인지 & 유인</h6>
                    <p className="text-slate-600 mt-2">워케이션, 디지털 노마드 커뮤니티 등을 통해 허브 방문</p>
                  </div>
                  <div className="text-indigo-300 hidden md:block">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  </div>
                  <div className="text-center p-4 w-full md:w-1/3">
                    <div className="bg-indigo-200 text-indigo-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">2</div>
                    <h6 className="text-xl font-bold mt-4">참여 & 통합</h6>
                    <p className="text-slate-600 mt-2">커뮤니티 이벤트, 업무 공간 이용을 통해 소속감 형성</p>
                  </div>
                  <div className="text-indigo-300 hidden md:block">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  </div>
                  <div className="text-center p-4 w-full md:w-1/3">
                    <div className="bg-indigo-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">3</div>
                    <h6 className="text-xl font-bold mt-4">전환 & 기여</h6>
                    <p className="text-slate-600 mt-2">창업, 협업 프로젝트, 직접 고용 등 실질적 기여로 '전환'</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Case Study Section */}
          <section id="case-study" className="py-20 bg-slate-100">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12 ">
                <h3 className="text-sm font-bold text-indigo-600 uppercase">CASE STUDY</h3>
                <h4 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">남해의 선례: '달품' 효과</h4>
                <p className="mt-4 text-slate-600 max-w-2xl mx-auto">공식적인 지원 없이도 자생적으로 커뮤니티 허브 역할을 수행한 게스트하우스 '달품'의 사례는 스위칭 허브 모델의 가능성을 증명합니다.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="">
                  <div className="bg-gradient-to-br from-indigo-50 to-slate-100 rounded-2xl shadow-lg p-8 h-auto">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
                        <span className="text-3xl">🏠</span>
                      </div>
                      <h6 className="text-xl font-bold text-slate-900">달품 게스트하우스</h6>
                      <p className="text-sm text-slate-600">남해 스위칭 허브의 선례</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-3 bg-white/70 rounded-lg">
                        <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-emerald-600 text-sm">💼</span>
                        </div>
                        <div>
                          <p className="font-medium text-slate-900">워케이션 허브</p>
                          <p className="text-xs text-slate-600">개발자 커뮤니티 성지</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 p-3 bg-white/70 rounded-lg">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-blue-600 text-sm">🤝</span>
                        </div>
                        <div>
                          <p className="font-medium text-slate-900">멘토십 제공</p>
                          <p className="text-xs text-slate-600">선순환 설계자 역할</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 p-3 bg-white/70 rounded-lg">
                        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-orange-600 text-sm">🍽️</span>
                        </div>
                        <div>
                          <p className="font-medium text-slate-900">김식당 탄생</p>
                          <p className="text-xs text-slate-600">방문객 → 창업자 전환</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 p-3 bg-white/70 rounded-lg">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-purple-600 text-sm">🌊</span>
                        </div>
                        <div>
                          <p className="font-medium text-slate-900">자석 효과</p>
                          <p className="text-xs text-slate-600">전문가 집단 자연 유치</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-slate-200">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-indigo-600">자생적 허브 운영</div>
                        <p className="text-xs text-slate-600 mt-1">공식 지원 없이 커뮤니티 중심지 역할 수행</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <h5 className="text-2xl font-bold text-slate-900">사례: '김식당'의 탄생</h5>
                    <p className="mt-4 text-slate-600">
                      '김식당' 창업자는 가게 오픈 전 '달품'에 머물며 호스트('선순환 설계자')로부터 실질적인 자문과 격려를 받았습니다. 이는 방문객의 아이디어가 지역 리더의 멘토십과 만나 실제 사업체로 '전환'된 전형적인 사례입니다.
                    </p>
                    <blockquote className="mt-6 border-l-4 border-indigo-500 pl-4 italic text-slate-700">
                      "방문객의 잠재력(아이디어) + 지역 리더의 경험(멘토십) = 새로운 가치(창업)"
                    </blockquote>
                  </div>
                  <div className="bg-white p-8 rounded-2xl shadow-lg mt-6">
                    <h5 className="text-2xl font-bold text-slate-900">워케이션의 '자석 효과'</h5>
                    <p className="mt-4 text-slate-600">
                      '달품'은 개발자 커뮤니티의 워케이션 성지로 알려지며 특정 전문가 집단을 유치했습니다. 이는 허브가 고도의 전문성을 기반으로 한 협업, 혁신, 고급 일자리 창출의 거점이 될 수 있음을 보여줍니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Roadmap Section */}
          <section id="roadmap" className="py-20 bg-white">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12 ">
                <h3 className="text-sm font-bold text-indigo-600 uppercase">ROADMAP</h3>
                <h4 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">실행을 위한 청사진</h4>
                <p className="mt-4 text-slate-600 max-w-2xl mx-auto">체계적인 단계별 접근을 통해 스위칭 허브를 성공적으로 구축하고 전국적으로 확산합니다.</p>
              </div>
              <div className="relative border-l-2 border-indigo-200 ml-6 md:ml-0 md:border-l-0 md:border-t-2 md:pt-6">
                <div className="flex flex-col md:flex-row justify-between">
                  <div className="mb-10 md:mb-0 md:w-1/3 ">
                    <div className="flex md:flex-col md:items-center">
                      <div className="flex-shrink-0 bg-white border-2 border-indigo-500 rounded-full w-12 h-12 flex items-center justify-center z-10 -ml-6 md:ml-0 md:-mt-6">
                        <span className="text-indigo-500 font-bold text-xl">1</span>
                      </div>
                      <div className="ml-4 md:ml-0 md:mt-4 md:text-center">
                        <h5 className="text-xl font-bold">1단계: 기반 구축 (1년차)</h5>
                        <p className="mt-2 text-slate-600">부지 선정 및 허브 조성, '선순환 설계자' 모집, 파일럿 프로그램 론칭</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-10 md:mb-0 md:w-1/3">
                    <div className="flex md:flex-col md:items-center">
                      <div className="flex-shrink-0 bg-white border-2 border-indigo-500 rounded-full w-12 h-12 flex items-center justify-center z-10 -ml-6 md:ml-0 md:-mt-6">
                        <span className="text-indigo-500 font-bold text-xl">2</span>
                      </div>
                      <div className="ml-4 md:ml-0 md:mt-4 md:text-center">
                        <h5 className="text-xl font-bold">2단계: 생태계 성장 (2년차)</h5>
                        <p className="mt-2 text-slate-600">디지털 플랫폼 구축, 멘토십 프로그램 공식화, 첫 스핀오프 지원</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/3">
                     <div className="flex md:flex-col md:items-center">
                      <div className="flex-shrink-0 bg-white border-2 border-indigo-500 rounded-full w-12 h-12 flex items-center justify-center z-10 -ml-6 md:ml-0 md:-mt-6">
                        <span className="text-indigo-500 font-bold text-xl">3</span>
                      </div>
                      <div className="ml-4 md:ml-0 md:mt-4 md:text-center">
                        <h5 className="text-xl font-bold">3단계: 확장 및 자립 (3년차)</h5>
                        <p className="mt-2 text-slate-600">수익 모델 다각화, 운영 모델 표준화, 전국 확산 준비</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </main>


      </section>

      {/* 언론 보도 */}
      <section id="media" className="section-padding bg-white">
        <div className="container-dalpum">
          <SectionTitle
            subtitle="외부 평가"
            title="언론 보도 및 반응"
            description="서로학교의 스위칭 허브 모델과 남해 워케이션 실험에 대한 언론과 외부 기관들의 관심과 평가를 객관적으로 살펴봅니다."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {mediaArticles.map((article, index) => (
              <Card
                key={index}
                title={article.title}
                description={article.description}
                date={article.date}
                category={article.category}
                href={article.href}
                isExternal={article.isExternal}
                image={article.image}
                variant="default"
              />
            ))}
          </div>

          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => setIsModalOpen(true)}
           >
              <Newspaper className="w-5 h-5 mr-2" />
              더 많은 기사 보기
            </Button>
          </div>
        </div>
      </section>

      {/* Article Modal */}
      <ArticleModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
