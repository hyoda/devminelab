'use client';

import HeroSection from '@/components/ui/HeroSection';
import Link from 'next/link';
import SectionTitle from '@/components/ui/SectionTitle';
import Tabs, { TabPanel } from '@/components/ui/Tabs';
import Timeline from '@/components/ui/Timeline';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Target, Users, Lightbulb, Building2, FileText, Newspaper, Mail, Phone } from 'lucide-react';

export default function Home() {
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
      image: '/images/namhae-2020.jpg'
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
      image: '/images/namhae-2021.jpg'
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
      image: '/images/namhae-2022.jpg'
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
      title: '평일엔 원격으로 일하고, 주말엔 송정해변에서 서핑 즐겨요',
      description: '남해 워케이션 참가자의 새로운 라이프스타일을 조명한 특집 기사',
      date: '2022.11.05',
      category: '라이프스타일',
      href: '#',
      isExternal: true,
      image: '/images/media-1.jpg'
    },
    {
      title: '경남도, 18개 시군 체험마을과 코워킹 플랫폼 연계 추진',
      description: '남해 모델의 경남도 전체 확산을 위한 정책 간담회 소식',
      date: '2022.10.28',
      category: '정책',
      href: '#',
      isExternal: true,
      image: '/images/media-2.jpg'
    },
    {
      title: 'IT 청년들이 선택한 새로운 일터, 남해',
      description: '남해 워케이션이 청년들에게 미친 긍정적 영향을 분석한 심층 보도',
      date: '2021.09.15',
      category: '청년 정책',
      href: '#',
      isExternal: true,
      image: '/images/media-3.jpg'
    }
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

      {/* 정책 제안서 아카이브 */}
      <section id="archive" className="section-padding bg-surface">
        <div className="container-dalpum">
          <SectionTitle
            subtitle="연구 성과물"
            title="서로학교 제안서 및 보고서"
            description="서로학교 학습 공동체에서 6년간의 브레인스토밍과 토론을 통해 도출한 정책 제안서와 실험 보고서들을 객관적으로 검토해볼 수 있습니다."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {policyDocuments.map((doc, index) => (
              <Card
                key={index}
                title={doc.title}
                description={doc.description}
                date={doc.date}
                category={doc.category}
                href={doc.href}
                variant="elevated"
              />
            ))}
          </div>

          <div className="text-center">
            <Link href="/infographics" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white hover:opacity-90 transition-colors" aria-label="인포그래픽 자료실로 이동">
              <FileText className="w-5 h-5 mr-2" />
              전체 자료실 보기
            </Link>
          </div>
        </div>
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
            <Button variant="outline" size="lg">
              <Newspaper className="w-5 h-5 mr-2" />
              더 많은 기사 보기
            </Button>
          </div>
        </div>
      </section>

      {/* 참여 및 문의 */}
      <section id="contact" className="section-padding bg-gradient-to-br from-ocean-deep via-ocean-primary to-emerald text-white">
        <div className="container-dalpum">
          <SectionTitle
            subtitle="연구 참여"
            title="서로학교 활동 관찰 및 연구 협력"
            description="서로학교의 6년간 활동과 남해 비전 로드맵에 대한 연구나 협력에 관심 있는 지자체, 연구 기관, 개인 연구자들을 위한 연락처입니다."
            className="text-white"
            titleClassName="text-white"
            subtitleClassName="bg-white/10 text-white border-white/20"
          />

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-serif font-semibold mb-6">연구 협력 문의</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">이메일</p>
                    <p className="text-white/80">contact@seoro.school</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">전화</p>
                    <p className="text-white/80">+82-10-0000-0000</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl">
                <h4 className="text-lg font-semibold mb-3">연구 협력 분야</h4>
                <ul className="space-y-2 text-white/90">
                  <li>• 서로학교 활동 모델 연구</li>
                  <li>• 스위칭 허브 이론 검증</li>
                  <li>• 지역 혁신 사례 분석</li>
                  <li>• 브레인스토밍 방법론 연구</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-6">연구 제안하기</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">이름</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="성함을 입력해주세요"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">소속</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="소속 기관을 입력해주세요"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">이메일</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="이메일을 입력해주세요"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">문의 내용</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                    placeholder="연구하고 싶은 내용이나 협력 제안을 자세히 적어주세요"
                  ></textarea>
                </div>
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="w-full bg-white text-ocean-primary hover:bg-gray-100"
                >
                  제안서 보내기
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
