'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Brain, Zap, Target, BarChart3, ArrowRight, Check, Star } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      id: 'ai-workbook',
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      title: "AI 비즈니스 워크북",
      description: "실전 AI 도구 활용법을 체계적으로 학습할 수 있는 워크북",
      price: "79,000원",
      duration: "4주 과정",
      features: [
        "ChatGPT, Claude 등 AI 도구 활용법",
        "비즈니스 프로세스 자동화 방법",
        "실무 적용 사례 및 템플릿",
        "1:1 멘토링 세션 2회 포함",
        "커뮤니티 액세스"
      ],
      popular: false
    },
    {
      id: 'automation',
      icon: <Zap className="w-12 h-12 text-blue-500" />,
      title: "업무 자동화 솔루션",
      description: "반복적인 업무를 자동화하여 생산성을 극대화하는 맞춤형 솔루션",
      price: "상담 후 견적",
      duration: "프로젝트별",
      features: [
        "업무 프로세스 분석 및 설계",
        "맞춤형 자동화 도구 개발",
        "기존 시스템과의 연동",
        "교육 및 운영 지원",
        "6개월 무상 유지보수"
      ],
      popular: true
    },
    {
      id: 'ai-consulting',
      icon: <Target className="w-12 h-12 text-blue-500" />,
      title: "AI 기반 비즈니스 컨설팅",
      description: "AI 기술을 활용한 비즈니스 전략 수립과 프로세스 최적화",
      price: "월 200만원부터",
      duration: "3개월 이상",
      features: [
        "AI 도입 전략 수립",
        "ROI 분석 및 효과 측정",
        "조직 변화 관리",
        "기술 교육 및 역량 강화",
        "지속적인 성과 모니터링"
      ],
      popular: false
    },
    {
      id: 'digital-transformation',
      icon: <BarChart3 className="w-12 h-12 text-blue-500" />,
      title: "디지털 전환(DX) 지원",
      description: "체계적인 디지털 전환을 통해 비즈니스 역량 강화",
      price: "상담 후 견적",
      duration: "6개월 이상",
      features: [
        "현 상황 진단 및 로드맵 수립",
        "디지털 플랫폼 구축",
        "데이터 분석 시스템 도입",
        "직원 교육 및 문화 개선",
        "성과 측정 및 지속 개선"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            서비스 안내
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            데브마인랩은 AI 기술을 활용한 다양한 비즈니스 솔루션을 제공합니다. 
            고객의 필요에 맞는 최적의 서비스를 선택해보세요.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div 
                key={service.id} 
                className={`relative bg-white border-2 rounded-xl p-8 hover:shadow-lg transition-shadow ${
                  service.popular ? 'border-blue-500' : 'border-gray-200'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      인기 서비스
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="mb-4 flex justify-center">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="flex justify-center items-baseline gap-4 mb-4">
                    <span className="text-3xl font-bold text-blue-600">{service.price}</span>
                    <span className="text-gray-500">/ {service.duration}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <Link 
                    href={`/contact?service=${service.id}`}
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-colors ${
                      service.popular 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'border border-blue-600 text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    {service.price === "상담 후 견적" ? "무료 상담 신청" : "서비스 신청"}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              서비스 진행 과정
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              체계적이고 투명한 프로세스로 고객의 성공을 보장합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "상담 및 분석",
                description: "고객의 현재 상황과 요구사항을 정확히 파악합니다."
              },
              {
                step: "02", 
                title: "제안서 작성",
                description: "맞춤형 솔루션과 상세한 실행 계획을 제시합니다."
              },
              {
                step: "03",
                title: "개발 및 구현",
                description: "전문팀이 최신 기술로 솔루션을 개발합니다."
              },
              {
                step: "04",
                title: "교육 및 지원",
                description: "성공적인 운영을 위한 교육과 지속적 지원을 제공합니다."
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              지금 시작해보세요
            </h2>
            <p className="text-xl mb-8">
              무료 상담을 통해 귀하의 비즈니스에 최적화된 AI 솔루션을 제안해드립니다. 
              전문가와 함께 디지털 혁신의 첫걸음을 내딛어보세요.
            </p>
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              무료 상담 신청하기 <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}