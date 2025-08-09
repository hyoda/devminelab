'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Brain, Zap, Target, Lightbulb, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const services = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: "AI 비즈니스 워크북",
      description: "실전 AI 도구 활용법을 체계적으로 학습할 수 있는 워크북을 제공합니다."
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: "업무 자동화 솔루션",
      description: "반복적인 업무를 자동화하여 생산성을 극대화하는 맞춤형 솔루션을 제공합니다."
    },
    {
      icon: <Target className="w-8 h-8 text-blue-500" />,
      title: "AI 기반 비즈니스 컨설팅",
      description: "AI 기술을 활용한 비즈니스 전략 수립과 프로세스 최적화를 지원합니다."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
      title: "디지털 전환(DX) 지원",
      description: "기업의 디지털 역량 강화와 체계적인 디지털 전환을 도와드립니다."
    }
  ];

  const projects = [
    {
      name: "미라클",
      description: "AI 기반 비즈니스 자동화 플랫폼",
      link: "https://miracle.hyoda.kr",
      status: "운영중"
    },
    {
      name: "크롤캣",
      description: "웹 크롤링 및 데이터 수집 솔루션",
      link: "/projects/crawlcat",
      status: "개발중"
    },
    {
      name: "네이버 자동화",
      description: "네이버 플랫폼 업무 자동화 도구",
      link: "/projects/n-auto",
      status: "개발중"
    },
    {
      name: "유튜브 다운로더",
      description: "유튜브 콘텐츠 다운로드 서비스",
      link: "/projects/youtube-downloader",
      status: "개발중"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI 기술을 활용한 <br />
              <span className="text-blue-600">비즈니스 자동화 솔루션</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              데브마인랩은 혁신적인 AI 기술을 통해 비즈니스 프로세스를 개선하고 
              효율성을 높이는 실전 솔루션을 제공합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/services" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
              >
                서비스 살펴보기 <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/contact" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                문의하기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              우리의 서비스
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              AI 기술을 실용적이고 접근 가능한 방식으로 비즈니스에 적용합니다.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Lightbulb className="w-16 h-16 mx-auto mb-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              우리의 비전
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              중소기업과 스타트업의 디지털 역량 강화를 통해 
              기술이 만드는 더 나은 비즈니스 환경을 구현합니다. <br />
              AI 기술을 실제 비즈니스 성과 개선에 연결하여 
              혁신적이고 실용적인 솔루션을 제공합니다.
            </p>
            <Link 
              href="/about" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              더 자세히 알아보기 <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              진행중인 프로젝트
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              데브마인랩에서 현재 개발하고 운영중인 다양한 프로젝트들을 소개합니다.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{project.name}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    project.status === '운영중' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Link 
                  href={project.link}
                  className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                  target={project.link.startsWith('http') ? '_blank' : '_self'}
                >
                  자세히 보기 <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              AI로 비즈니스를 혁신하세요
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              데브마인랩과 함께 AI 기술을 활용한 비즈니스 자동화를 시작해보세요. 
              전문가 상담부터 맞춤형 솔루션 개발까지 모든 과정을 지원합니다.
            </p>
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              프로젝트 상담받기 <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}