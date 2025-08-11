import { Organization, Person, Article, WebSite } from 'schema-dts';

type StructuredDataData = Partial<Organization> | Partial<Person> | Partial<Article> | Partial<WebSite>;

interface StructuredDataProps {
  type: 'organization' | 'person' | 'article' | 'website';
  data?: StructuredDataData;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  let structuredData: Organization | Person | Article | WebSite | null = null;

  switch (type) {
    case 'organization': {
      const base: Organization = {
        '@type': 'Organization',
        name: '서로학교',
        alternateName: 'Seoro School',
        url: 'https://seoro.school',
        logo: 'https://seoro.school/logo.png',
        description: '6년간 브레인스토밍과 난상토론을 통해 지역 혁신 모델을 탐구해온 학습 공동체',
        founder: {
          '@type': 'Person',
          name: '김강수',
          description: '서로학교 창립 멤버, 협력적 학습 개념 제안자'
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+82-10-0000-0000',
          contactType: 'customer service',
          email: 'contact@seoro.school'
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: '남해군',
          addressRegion: '경상남도',
          addressCountry: 'KR'
        },
        sameAs: [
          'https://blog.seoro.school',
          'https://linkedin.com/company/seoro-school'
        ]
      };
      structuredData = Object.assign({}, base, (data as Partial<Organization> | undefined) ?? {});
      break;
    }
    case 'person': {
      const base: Person = {
        '@type': 'Person',
        name: '김강수',
        givenName: '강수',
        familyName: '김',
        worksFor: {
          '@type': 'Organization',
          name: '서로학교'
        },
        description: '서로학교 창립 멤버로서 6년간 브레인스토밍과 난상토론 기반의 학습 공동체를 이끌어온 교육 혁신가',
        expertise: ['브레인스토밍', '난상토론', '협력적 학습', '지역 혁신', '공동체 교육'],
        knowsAbout: ['Brainstorming', 'Open Discussion', 'Collaborative Learning', 'Regional Innovation', 'Community Education'],
        address: {
          '@type': 'PostalAddress',
          addressLocality: '남해군',
          addressRegion: '경상남도',
          addressCountry: 'KR'
        }
      } as unknown as Person; // schema-dts allows flexible properties
      structuredData = Object.assign({}, base, (data as Partial<Person> | undefined) ?? {});
      break;
    }
    case 'article': {
      const base: Article = {
        '@type': 'Article',
        headline: '서로학교 6년 활동 분석: 브레인스토밍 기반 지역혁신 모델',
        description: '서로학교의 6년간 활동과 스위칭 허브 이론, 남해 워케이션 실험에 대한 제3자 관점에서의 연구 분석',
        author: {
          '@type': 'Person',
          name: '김강수'
        },
        publisher: {
          '@type': 'Organization',
          name: '서로학교',
          logo: {
            '@type': 'ImageObject',
            url: 'https://seoro.school/logo.png'
          }
        },
        datePublished: '2025-01-01',
        dateModified: '2025-01-01',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://seoro.school'
        },
        image: 'https://seoro.school/og-image.jpg',
        keywords: ['서로학교', '브레인스토밍', '난상토론', '지역혁신', '남해', '협력적 학습']
      } as unknown as Article;
      structuredData = Object.assign({}, base, (data as Partial<Article> | undefined) ?? {});
      break;
    }
    case 'website': {
      const base: WebSite = {
        '@type': 'WebSite',
        name: '서로학교',
        alternateName: 'Seoro School',
        url: 'https://seoro.school',
        description: '서로학교의 6년간 활동과 스위칭 허브 이론에 대한 연구 분석',
        inLanguage: 'ko-KR',
        publisher: {
          '@type': 'Organization',
          name: '서로학교'
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://seoro.school/search?q={search_term_string}'
          },
          'query-input': 'required name=search_term_string'
        }
      } as unknown as WebSite;
      structuredData = Object.assign({}, base, (data as Partial<WebSite> | undefined) ?? {});
      break;
    }
  }

  if (!structuredData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ '@context': 'https://schema.org', ...(structuredData as unknown as Record<string, unknown>) })
      }}
    />
  );
}

// Convenience components for common structured data types
export function OrganizationStructuredData(props: { data?: Partial<Organization> }) {
  return <StructuredData type="organization" data={props.data} />;
}

export function PersonStructuredData(props: { data?: Partial<Person> }) {
  return <StructuredData type="person" data={props.data} />;
}

export function ArticleStructuredData(props: { data?: Partial<Article> }) {
  return <StructuredData type="article" data={props.data} />;
}

export function WebSiteStructuredData(props: { data?: Partial<WebSite> }) {
  return <StructuredData type="website" data={props.data} />;
}