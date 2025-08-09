'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, Send, MessageSquare, User, Building } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // 여기에 실제 폼 제출 로직 구현
      console.log('Form submitted:', formData);
      alert('문의가 성공적으로 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch {
      alert('문의 접수 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "이메일",
      content: "contact@hyoda.kr",
      description: "언제든지 문의해주세요"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "상담 문의",
      content: "온라인 문의 폼",
      description: "24시간 접수 가능"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "전화 상담",
      content: "평일 09:00 - 18:00",
      description: "빠른 상담을 원하시면 연락주세요"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            문의하기
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI 기반 비즈니스 자동화에 대한 궁금한 점이나 프로젝트 상담이 필요하시면 
            언제든지 연락해주세요. 전문가가 친절하게 상담해드립니다.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg mb-4">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-lg text-blue-600 font-medium mb-1">{info.content}</p>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              프로젝트 상담 신청
            </h2>
            <p className="text-xl text-gray-600">
              아래 양식을 작성해주시면 담당자가 빠르게 연락드리겠습니다.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    성함 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="이름을 입력해주세요"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    이메일 *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="이메일을 입력해주세요"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    <Building className="w-4 h-4 inline mr-2" />
                    회사명
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="회사명을 입력해주세요"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    연락처
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="연락처를 입력해주세요"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  관심 서비스 *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">서비스를 선택해주세요</option>
                  <option value="ai-workbook">AI 비즈니스 워크북</option>
                  <option value="automation">업무 자동화 솔루션</option>
                  <option value="ai-consulting">AI 기반 비즈니스 컨설팅</option>
                  <option value="digital-transformation">디지털 전환(DX) 지원</option>
                  <option value="custom-development">맞춤형 개발</option>
                  <option value="other">기타</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  문의 내용 *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="프로젝트에 대한 상세한 내용이나 문의사항을 작성해주세요"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors inline-flex items-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      전송 중...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 w-4 h-4" />
                      문의 보내기
                    </>
                  )}
                </button>
              </div>

              <div className="text-center text-sm text-gray-500 mt-4">
                * 필수 항목입니다. 개인정보는 문의 응답 목적으로만 사용되며, 
                <br />별도 동의 없이 제3자에게 제공되지 않습니다.
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              자주 묻는 질문
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Q. 프로젝트 상담은 무료인가요?
              </h3>
              <p className="text-gray-600">
                A. 네, 초기 상담 및 프로젝트 컨설팅은 무료로 제공됩니다. 
                고객의 요구사항을 정확히 파악한 후 맞춤형 솔루션을 제안해드립니다.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Q. 개발 기간은 얼마나 걸리나요?
              </h3>
              <p className="text-gray-600">
                A. 프로젝트의 복잡도와 요구사항에 따라 달라지지만, 
                일반적으로 2-8주 정도 소요됩니다. 정확한 일정은 상담 후 안내드립니다.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Q. 사후 지원도 제공되나요?
              </h3>
              <p className="text-gray-600">
                A. 네, 프로젝트 완료 후에도 지속적인 기술 지원과 유지보수 서비스를 제공합니다. 
                고객의 성공적인 서비스 운영을 위해 최선을 다합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}