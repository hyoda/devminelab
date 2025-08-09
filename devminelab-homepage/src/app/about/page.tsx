'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Target, Eye, Heart, Users, Award, TrendingUp } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-blue-500" />,
      title: "실용적 혁신",
      description: "기술을 위한 기술이 아닌, 실제 비즈니스 문제를 해결하는 혁신적 솔루션을 추구합니다."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "고객 중심",
      description: "고객의 성공이 우리의 성공입니다. 고객의 관점에서 생각하고 행동합니다."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
      title: "지속적 성장",
      description: "끊임없는 학습과 개선을 통해 고객과 함께 성장해 나갑니다."
    },
    {
      icon: <Award className="w-8 h-8 text-blue-500" />,
      title: "품질 우선",
      description: "높은 품질의 서비스와 솔루션을 통해 고객의 신뢰를 얻습니다."
    }
  ];

  const milestones = [
    {
      year: "2024",
      title: "데브마인랩 설립",
      description: "AI 기반 비즈니스 자동화 솔루션 전문 기업으로 출발"
    },
    {
      year: "2024",
      title: "미라클 플랫폼 런칭",
      description: "AI 기반 비즈니스 자동화 플랫폼 서비스 시작"
    },
    {
      year: "2024",
      title: "다양한 자동화 솔루션 개발",
      description: "크롤캣, 네이버 자동화, 유튜브 다운로더 등 특화 솔루션 개발 착수"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            데브마인랩을 소개합니다
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI 기술을 활용한 실전 비즈니스 자동화 솔루션을 제공하는 데브마인랩은 
            혁신적인 기술로 비즈니스 프로세스를 개선하고 효율성을 높입니다.
          </p>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Eye className="w-10 h-10 text-blue-500 mr-4" />
                <h2 className="text-3xl font-bold text-gray-900">비전</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                <strong>중소기업과 스타트업의 디지털 역량 강화를 통해 기술이 만드는 더 나은 비즈니스 환경을 구현합니다.</strong>
              </p>
              <p className="text-gray-600">
                우리는 AI 기술이 대기업뿐만 아니라 모든 규모의 기업에서 활용될 수 있도록 
                접근 가능하고 실용적인 솔루션을 만들어 갑니다.
              </p>
            </div>
            
            <div>
              <div className="flex items-center mb-6">
                <Target className="w-10 h-10 text-blue-500 mr-4" />
                <h2 className="text-3xl font-bold text-gray-900">미션</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                <strong>AI 기술을 실제 비즈니스 성과 개선에 연결하여 혁신적이고 실용적인 솔루션을 제공합니다.</strong>
              </p>
              <p className="text-gray-600">
                단순한 기술 도입을 넘어서, 고객의 비즈니스 목표 달성과 성장을 지원하는 
                맞춤형 AI 솔루션을 개발하고 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              핵심 가치
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              데브마인랩이 추구하는 가치와 원칙을 소개합니다.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              우리가 하는 일
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">AI 기반 비즈니스 혁신</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">업무 자동화 솔루션</h4>
                    <p className="text-gray-600">반복적이고 시간 소모적인 업무를 AI로 자동화하여 생산성을 극대화합니다.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">AI 컨설팅</h4>
                    <p className="text-gray-600">기업의 특성에 맞는 AI 도입 전략을 수립하고 실행을 지원합니다.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">디지털 전환(DX)</h4>
                    <p className="text-gray-600">체계적인 디지털 전환을 통해 비즈니스 역량을 강화합니다.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">교육 및 워크북</h4>
                    <p className="text-gray-600">AI 비즈니스 워크북을 통해 실전 AI 활용법을 체계적으로 학습할 수 있습니다.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">왜 데브마인랩인가?</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Heart className="w-5 h-5 text-red-500 mr-3" />
                  <span className="text-gray-700">고객의 성공을 최우선으로 생각합니다</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">검증된 기술과 실전 경험을 바탕으로 합니다</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-blue-500 mr-3" />
                  <span className="text-gray-700">고객과 함께 성장하는 파트너십을 추구합니다</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-purple-500 mr-3" />
                  <span className="text-gray-700">지속적인 혁신과 품질 개선에 전념합니다</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              우리의 여정
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              데브마인랩의 성장과 발전 과정을 소개합니다.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start mb-8">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {milestone.year.slice(-2)}
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}