import Link from 'next/link';
import SectionTitle from '@/components/ui/SectionTitle';

const ITEMS = [
  {
    slug: 'nextwing-namhae',
    title: '넥스트윙_for_남해',
    description: '남해 스위칭 허브 최종 실행 전략 요약 인포그래픽',
  },
  {
    slug: 'switching-hub-final',
    title: '스위칭 허브 최종 보고서_for_남해',
    description: '이론적 토대와 벤치마킹 요약 인포그래픽',
  },
  {
    slug: 'switching-hub',
    title: '스위칭허브_for_남해',
    description: '스위칭 허브 개요와 작동원리 요약',
  },
  {
    slug: 'regional-switching-hub',
    title: '지역 상생형 스위칭 허브_for_남해',
    description: '하이퍼 로컬 실행 제안 요약',
  },
];

export default function InfographicsIndex() {
  return (
    <div className="section-padding">
      <div className="container-dalpum">
        <SectionTitle
          subtitle="아카이브"
          title="인포그래픽 라이브러리"
          description="제안서와 보고서의 핵심 내용을 카드 기반 인포그래픽으로 빠르게 훑어볼 수 있습니다."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ITEMS.map((it) => (
            <Link key={it.slug} href={`/infographics/${it.slug}`} className="block">
              <div className="p-6 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-2">{it.title}</h3>
                <p className="text-muted">{it.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}


