import { notFound } from 'next/navigation';
import Link from 'next/link';
import SectionTitle from '@/components/ui/SectionTitle';

type InfographicConfig = {
  title: string;
  subtitle?: string;
  description?: string;
  heroNote?: string;
  highlights?: { label: string; value: string }[];
  sections: Array<{
    id: string;
    title: string;
    description?: string;
    bullets?: string[];
    grid?: { title: string; items: string[] }[];
  }>;
};

const PAGES: Record<string, InfographicConfig> = {
  'nextwing-namhae': {
    title: '남해 스위칭 허브 최종 실행 전략 (넥스트윙)',
    subtitle: '기술 민주화를 통한 지역 상생 운영체제',
    description:
      '선순환 설계자의 전문성을 패키징하여 기술 비전문가도 쉽게 쓰는 앱으로 보급하는 실행 전략.',
    highlights: [
      { label: '파일럿', value: '경남 남해군' },
      { label: '핵심 전략', value: '전문성 패키징' },
      { label: '수익화', value: '3년차 BEP' },
      { label: '핵심 주체', value: '선순환 설계자' },
    ],
    sections: [
      {
        id: 'problem',
        title: '문제 정의',
        bullets: [
          '초고령화(65+ 42.5%)·상가 공실률 20%+',
          '관광 체류 2~3시간: 소비 전환 실패',
          '외부 의존형 모델의 지속가능성 한계',
        ],
      },
      {
        id: 'strategy',
        title: '핵심 전략: 전문성의 패키징',
        bullets: [
          'SOP → 자동화 워크플로우(n8n) → 사용자 친화 앱(PWA/Electron)',
          '노코드/로우코드로 구축 비용·기간 단축',
          '리더 개인 의존 ↓, 시스템 확산 ↑',
        ],
      },
      {
        id: 'architecture',
        title: '4계층 아키텍처',
        grid: [
          { title: '물리적 허브', items: ['워케이션/메이커스', '커뮤니티 라운지'] },
          { title: '디지털 허브', items: ['BPM-as-a-Service', '툴킷 라이브러리', '마켓플레이스'] },
          { title: '사회적 허브', items: ['이너서클', '멘토링', '지원사업 연계'] },
          { title: '재무적 허브', items: ['이익공유 연금', '기버 벤처 펀드'] },
        ],
      },
      {
        id: 'finance',
        title: '5개년 재무 요약',
        bullets: ['1~2년차 적자 소폭, 3년차 BEP 돌파', '수익 다각화: 멤버십·수수료·교육·펀드'],
      },
    ],
  },
  'switching-hub-final': {
    title: '스위칭 허브 최종 보고서',
    subtitle: '회복력 있는 생태계를 위한 통합 프레임워크',
    description:
      '기버-기업가, 시스템화(E-Myth), 기술 민주화의 황금 삼각형으로 지역 경제의 회복력을 설계.',
    highlights: [
      { label: '핵심 인물', value: '기버-기업가' },
      { label: '실행 원리', value: '시스템화' },
      { label: '접근성', value: '기술 민주화' },
      { label: '확장성', value: '린 파일럿 → 스케일' },
    ],
    sections: [
      {
        id: 'pillars',
        title: '이론적 기둥',
        bullets: ['신뢰로 거래비용 ↓, 혁신 촉진', '시스템 종속적 운영으로 확장성 ↑', 'PWA/Electron으로 접근성 ↑'],
      },
      {
        id: 'benchmarks',
        title: '벤치마킹 인사이트',
        bullets: ['Onomichi U2: 니치 집중', '로컬스티치: 커뮤니티 우선', '더웨이브컴퍼니: 액셀러레이팅'],
      },
      {
        id: 'risks',
        title: '리스크 회피 설계',
        bullets: ['대형 임대 고정비 회피', '다각화 수익 구조', '상향식·리더 중심 커뮤니티'],
      },
    ],
  },
  'switching-hub': {
    title: '스위칭 허브 개요',
    subtitle: '잠재력을 성과로 전환하는 플랫폼',
    description:
      '워케이션·디지털 노마드의 잠재 가치를 지역 성과로 전환하는 하이브리드 허브 모델.',
    highlights: [
      { label: '전환 메커니즘', value: 'Switching' },
      { label: '핵심 대상', value: '라이프스타일 이주민' },
      { label: '도구', value: '노코드 자동화' },
      { label: '확산', value: '시스템 복제' },
    ],
    sections: [
      {
        id: 'how',
        title: '작동 방식',
        bullets: ['성공 노하우 추출 → 자동화 → 앱 패키징', '테스트베드: 이너서클 커뮤니티'],
      },
      {
        id: 'people',
        title: '선순환 설계자',
        bullets: ['기버형 리더십', '개인 의존성 ↓ 시스템화 ↑'],
      },
    ],
  },
  'regional-switching-hub': {
    title: '지역 상생형 스위칭 허브 제안서',
    subtitle: '하이퍼 로컬 전략과 커뮤니티 기반 확산',
    description:
      '남해 고유 자산을 기반으로 니치 타겟에 집중하고 커뮤니티로 확산하는 실행 제안.',
    highlights: [
      { label: '전략', value: '하이퍼-로컬' },
      { label: '커뮤니티', value: '이너서클' },
      { label: '교육', value: '디지털 리터러시' },
      { label: '환원', value: '커뮤니티 기금' },
    ],
    sections: [
      {
        id: 'programs',
        title: '핵심 프로그램',
        bullets: ['오픈 워크숍', '우선 조달 원칙', '젠트리피케이션 모니터링'],
      },
      {
        id: 'kpi',
        title: 'KPI 프레임워크',
        bullets: ['MRR 2,000만원+', '활성 멤버 50팀+', '상가 공실률 10% 이하'],
      },
    ],
  },
};

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const config = PAGES[slug];
  if (!config) return notFound();

  return (
    <div className="section-padding">
      <div className="container-dalpum">
        <div className="text-center mb-10">
          <p className="inline-flex items-center px-4 py-2 mb-4 text-sm font-medium bg-surface text-primary rounded-full border border-primary/10">
            인포그래픽 요약
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-balance">{config.title}</h1>
          {config.subtitle && (
            <p className="text-lg text-muted mb-2">{config.subtitle}</p>
          )}
          {config.description && (
            <p className="text-muted max-w-3xl mx-auto">{config.description}</p>
          )}
        </div>

        {config.highlights && config.highlights.length > 0 && (
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            {config.highlights.map((h, idx) => (
              <div key={idx} className="text-center p-6 bg-white rounded-xl border border-gray-100">
                <div className="text-2xl font-bold text-primary mb-1">{h.value}</div>
                <div className="text-sm text-muted">{h.label}</div>
              </div>
            ))}
          </div>
        )}

        {config.sections.map((section) => (
          <section key={section.id} className="mb-12">
            <SectionTitle subtitle="섹션" title={section.title} description={section.description} />

            {section.bullets && (
              <ul className="grid md:grid-cols-2 gap-3 bg-white rounded-xl p-6 border border-gray-100">
                {section.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}

            {section.grid && (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {section.grid.map((g, gi) => (
                  <div key={gi} className="p-6 bg-surface rounded-xl border border-gray-100">
                    <h3 className="text-lg font-semibold mb-3 text-foreground">{g.title}</h3>
                    <ul className="space-y-2 text-muted">
                      {g.items.map((it, ii) => (
                        <li key={ii} className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}

        <div className="mt-14 text-center">
          <Link href="/" className="inline-flex items-center px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition-colors">
            메인으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
}


