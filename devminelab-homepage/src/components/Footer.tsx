import React from 'react';
import Link from 'next/link';
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-blue-400">데브마인랩</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              AI 기술을 활용한 실전 비즈니스 자동화 솔루션을 제공합니다. 
              혁신적인 기술로 비즈니스 프로세스를 개선하고 효율성을 높입니다.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-sm text-gray-300">
                <Mail size={16} className="mr-2" />
                contact@hyoda.kr
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">서비스</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/automation" className="text-gray-300 hover:text-blue-400 transition-colors">
                  업무 자동화
                </Link>
              </li>
              <li>
                <Link href="/services/ai-consulting" className="text-gray-300 hover:text-blue-400 transition-colors">
                  AI 컨설팅
                </Link>
              </li>
              <li>
                <Link href="/services/digital-transformation" className="text-gray-300 hover:text-blue-400 transition-colors">
                  디지털 전환
                </Link>
              </li>
              <li>
                <Link href="/services/ai-workbook" className="text-gray-300 hover:text-blue-400 transition-colors">
                  AI 비즈니스 워크북
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">프로젝트</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://miracle.hyoda.kr" target="_blank" className="text-gray-300 hover:text-blue-400 transition-colors">
                  미라클
                </Link>
              </li>
              <li>
                <Link href="/projects/crawlcat" className="text-gray-300 hover:text-blue-400 transition-colors">
                  크롤캣
                </Link>
              </li>
              <li>
                <Link href="/projects/n-auto" className="text-gray-300 hover:text-blue-400 transition-colors">
                  네이버 자동화
                </Link>
              </li>
              <li>
                <Link href="/projects/youtube-downloader" className="text-gray-300 hover:text-blue-400 transition-colors">
                  유튜브 다운로더
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 데브마인랩. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                개인정보처리방침
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                서비스 이용약관
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;