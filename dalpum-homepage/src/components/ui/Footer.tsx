'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ExternalLink, ArrowUp } from 'lucide-react';
import Button from './Button';

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

const quickLinks: FooterLink[] = [
  { label: '활동 분석', href: '#about' },
  { label: '제안 모델', href: '#model' },
  { label: '실험 사례', href: '#cases' },
  { label: '연구 성과', href: '#archive' }
];

const resourceLinks: FooterLink[] = [
  { label: '외부 평가', href: '#media' },
  { label: '연구 협력', href: '#contact' },
  { label: '개인정보처리방침', href: '/privacy', external: true },
  { label: '이용약관', href: '/terms', external: true }
];

const socialLinks = [
  { label: 'LinkedIn', href: '#', icon: '💼' },
  { label: 'Blog', href: '#', icon: '📝' },
  { label: 'YouTube', href: '#', icon: '📺' }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="pt-8 relative bg-gradient-to-b from-slate-50 to-slate-100 border-t border-gray-200">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(15,79,140) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }} />
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="container-dalpum py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                className="flex items-center space-x-3 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-ocean-primary to-emerald rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">서</span>
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-foreground">
                    서로학교
                  </h3>
                  <p className="text-muted">
                    Seoro School
                  </p>
                </div>
              </motion.div>

              <motion.p
                className="text-muted mb-6 leading-relaxed max-w-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                6년간 브레인스토밍과 난상토론을 통해
                <br />
                지역 혁신 모델을 탐구해온 학습 공동체입니다.
              </motion.p>

              {/* Contact Info */}
              <motion.div
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center space-x-3 text-muted">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>contact@seoro.school</span>
                </div>
                <div className="flex items-center space-x-3 text-muted">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+82-10-0000-0000</span>
                </div>
                <div className="flex items-center space-x-3 text-muted">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>경상남도 남해군</span>
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold text-foreground mb-6">
                바로가기
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted hover:text-primary transition-colors flex items-center group"
                    >
                      <span>{link.label}</span>
                      {link.external && (
                        <ExternalLink className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h4 className="text-lg font-semibold text-foreground mb-6">
                자료실
              </h4>
              <ul className="space-y-3">
                {resourceLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted hover:text-primary transition-colors flex items-center group"
                    >
                      <span>{link.label}</span>
                      {link.external && (
                        <ExternalLink className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Social Links */}
              <div className="mt-8">
                <h5 className="text-sm font-medium text-foreground mb-4">
                  소셜 미디어
                </h5>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-10 h-10 bg-surface hover:bg-primary hover:text-white rounded-lg flex items-center justify-center transition-all duration-200 text-lg"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 bg-white/50 backdrop-blur-sm">
          <div className="container-dalpum py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <motion.p
                className="text-sm text-muted text-center sm:text-left"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                © {currentYear} 서로학교. All rights reserved. 
                <span className="block sm:inline sm:ml-1">
                  Made with ❤️ for regional innovation.
                </span>
              </motion.p>

              <motion.div
                className="flex items-center space-x-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="text-sm text-muted">스크롤하여 위로</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={scrollToTop}
                  className="text-primary hover:bg-primary/10"
                >
                  <ArrowUp className="w-4 h-4" />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}