/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  Linkedin, 
  ChevronRight, 
  ExternalLink, 
  Menu, 
  X, 
  Globe,
  ArrowRight,
  Github,
  FileText,
  ArrowLeft
} from 'lucide-react';
import { content, Language, Project } from './content';
import { cn } from './lib/utils';

export default function App() {
  const [lang, setLang] = useState<Language>('ko');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getEmbedUrl = (url: string) => {
    if (url.includes('drive.google.com')) {
      return url.replace('/view', '/preview').replace('?usp=sharing', '');
    }
    return url;
  };

  const toggleLang = () => setLang(prev => prev === 'en' ? 'ko' : 'en');

  const navItems = [
    { id: 'about', label: content.nav.about[lang] },
    { id: 'skills', label: content.nav.skills[lang] },
    { id: 'experience', label: content.nav.experience[lang] },
    { id: 'projects', label: content.nav.projects[lang] },
    { id: 'contact', label: content.nav.contact[lang] },
  ];

  return (
    <div className="min-h-screen selection:bg-accent selection:text-white">
      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "glass py-3" : "bg-transparent"
      )}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-display font-bold tracking-tighter"
          >
            SOHYOUN.
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`}
                className="text-sm font-medium text-secondary hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button 
              onClick={toggleLang}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/10 hover:bg-primary/5 transition-all text-xs font-bold uppercase tracking-wider"
            >
              <Globe size={14} />
              {lang === 'en' ? 'KO' : 'EN'}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleLang} className="p-2 text-secondary">
              <Globe size={20} />
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-primary">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <a 
                  key={item.id} 
                  href={`#${item.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-display font-semibold text-primary"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center section-padding pt-32 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest mb-6">
              {lang === 'en' ? 'Portfolio 2026' : '포트폴리오 2026'}
            </span>
            <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] mb-8">
              {content.hero.greeting[lang]}
            </h1>
            <p className="text-xl md:text-2xl text-secondary font-light max-w-xl mb-10 leading-relaxed">
              {content.hero.description[lang]}
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-all flex items-center gap-2 group"
              >
                {lang === 'en' ? 'View Projects' : '프로젝트 보기'}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 border border-primary/10 rounded-full font-medium hover:bg-primary/5 transition-all"
              >
                {lang === 'en' ? 'Contact Me' : '연락하기'}
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-square rounded-3xl overflow-hidden bg-gray-200 relative">
               <img 
                src="https://picsum.photos/seed/sohyoun/800/800" 
                alt="Sohyoun Lee" 
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-bold mb-6">{content.about.title[lang]}</h2>
              <div className="w-12 h-1 bg-accent mb-8" />
              <p className="text-lg text-secondary leading-relaxed">
                {content.about.text[lang]}
              </p>
            </div>
            <div className="lg:col-span-2 space-y-12">
              <h3 className="text-xl font-bold uppercase tracking-widest text-secondary/50">Education</h3>
              <div className="space-y-12">
                {content.education.map((edu, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative pl-8 border-l border-primary/10"
                  >
                    <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-accent" />
                    <span className="text-sm font-mono text-secondary mb-2 block">{edu.period}</span>
                    <h4 className="text-2xl font-bold mb-1">{edu.school[lang]}</h4>
                    <p className="text-lg font-medium text-accent mb-4">{edu.degree[lang]}</p>
                    <ul className="space-y-2">
                      {edu.details?.[lang].map((detail, i) => (
                        <li key={i} className="text-secondary flex items-start gap-2">
                          <ChevronRight size={16} className="mt-1 shrink-0 text-accent" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding bg-[#f0f0f0]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">{content.nav.skills[lang]}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.skills.map((skill, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-primary/5"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 text-accent">
                  <skill.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">{skill.category[lang]}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-secondary text-sm flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16">{content.nav.experience[lang]}</h2>
          <div className="space-y-16">
            {content.experience.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-4 gap-8"
              >
                <div className="md:col-span-1">
                  <span className="text-lg font-mono text-secondary">{exp.period}</span>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-2xl font-bold mb-2">{exp.title[lang]}</h3>
                  <p className="text-xl text-accent font-medium mb-6">{exp.company[lang]}</p>
                  <ul className="space-y-4">
                    {exp.details[lang].map((detail, i) => (
                      <li key={i} className="text-secondary leading-relaxed flex items-start gap-3">
                        <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary/20 shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-4">{content.nav.projects[lang]}</h2>
              <p className="text-white/60 max-w-md">
                {lang === 'en' ? 'Selected works in UX design and data analysis.' : 'UX 디자인 및 데이터 분석 분야의 주요 프로젝트입니다.'}
              </p>
            </div>
          </div>

          <div className="grid gap-12">
            {content.projects.map((project) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative grid lg:grid-cols-2 gap-8 items-center bg-white/5 rounded-[40px] overflow-hidden border border-white/10 p-8 md:p-12 hover:bg-white/10 transition-all duration-500"
              >
                <div className="order-2 lg:order-1">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-white/10 text-[10px] font-bold uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold mb-6">{project.title[lang]}</h3>
                  <p className="text-lg text-white/70 mb-8 leading-relaxed">
                    {project.description[lang]}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {(project.link || project.pdfs) && (
                      <button 
                        onClick={() => setSelectedProject(project)}
                        className="flex items-center gap-2 text-accent font-bold group/btn"
                      >
                        {lang === 'en' ? 'View Details' : '상세 보기'}
                        <ChevronRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    )}
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white/60 hover:text-white font-bold group/btn transition-colors"
                      >
                        <Github size={18} />
                        Github
                      </a>
                    )}
                    {!project.link && !project.pdfs && !project.github && (
                      <span className="text-white/40 italic text-sm">
                        {lang === 'en' ? 'Details coming soon' : '상세 내용 준비 중'}
                      </span>
                    )}
                  </div>
                </div>
                <div className="order-1 lg:order-2 aspect-video rounded-2xl overflow-hidden bg-white/5">
                  <img 
                    src={project.image} 
                    alt={project.title[lang]} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <a 
              href="https://www.notion.so/2ea1399caa8e824290bd011ae8218ab7?v=7fd1399caa8e830a80cc88f1a6ad4318"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
            >
              <span className="text-lg font-medium">
                {lang === 'en' ? 'View Full Portfolio on Notion' : '노션에서 전체 포트폴리오 보기'}
              </span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-12">{content.contact.title[lang]}</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            <a 
              href={`mailto:${content.contact.email}`}
              className="group flex flex-col items-center gap-4"
            >
              <div className="w-20 h-20 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
                <Mail size={32} />
              </div>
              <span className="text-xl font-medium">{content.contact.email}</span>
            </a>
            <a 
              href={`https://${content.contact.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4"
            >
              <div className="w-20 h-20 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
                <Linkedin size={32} />
              </div>
              <span className="text-xl font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-primary/5 text-center text-secondary text-sm">
        <p>© 2026 Sohyoun Lee. {lang === 'en' ? 'Built with passion.' : '열정으로 만들었습니다.'}</p>
      </footer>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-primary overflow-y-auto"
          >
            <div className="min-h-screen flex flex-col">
              {/* Modal Header */}
              <div className="sticky top-0 z-10 glass px-6 py-4 flex justify-between items-center border-b border-white/10">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                >
                  <ArrowLeft size={20} />
                  <span className="font-medium">{lang === 'en' ? 'Back' : '뒤로가기'}</span>
                </button>
                <div className="flex items-center gap-4">
                  {selectedProject.link && (
                    <a 
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-accent text-white font-bold text-sm flex items-center gap-2 hover:opacity-90 transition-opacity"
                    >
                      <ExternalLink size={16} />
                      {lang === 'en' ? 'Live Site' : '라이브 사이트'}
                    </a>
                  )}
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="flex-1 max-w-5xl mx-auto w-full px-6 py-20">
                <div className="mb-12">
                  <div className="flex gap-3 mb-6">
                    {selectedProject.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-white/10 text-[10px] font-bold uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-5xl md:text-7xl font-bold mb-8">{selectedProject.title[lang]}</h2>
                  <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-3xl">
                    {selectedProject.longDescription ? selectedProject.longDescription[lang] : selectedProject.description[lang]}
                  </p>
                </div>

                {/* Main Project Embed (if applicable) */}
                {selectedProject.embed && selectedProject.link && (
                  <div className="mb-20 space-y-6">
                    <div className="flex items-center gap-3 text-accent">
                      <Globe size={24} />
                      <h3 className="text-2xl font-bold">{lang === 'en' ? 'Interactive Preview' : '인터랙티브 미리보기'}</h3>
                    </div>
                    <div className="aspect-[16/10] w-full rounded-3xl overflow-hidden bg-white/5 border border-white/10 shadow-2xl">
                      <iframe 
                        src={selectedProject.link} 
                        className="w-full h-full border-none"
                        title={selectedProject.title[lang]}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                )}

                {/* PDF Section */}
                {selectedProject.pdfs && selectedProject.pdfs.length > 0 && (
                  <div className="space-y-20">
                    {selectedProject.pdfs.map((pdf, idx) => (
                      <div key={idx} className="space-y-6">
                        <div className="flex items-center gap-3 text-accent">
                          <FileText size={24} />
                          <h3 className="text-2xl font-bold">{pdf.title[lang]}</h3>
                        </div>
                        <div className="aspect-[3/4] md:aspect-[16/10] w-full rounded-3xl overflow-hidden bg-white/5 border border-white/10 shadow-xl">
                          {pdf.url.startsWith('http') ? (
                            <iframe 
                              src={getEmbedUrl(pdf.url)} 
                              className="w-full h-full border-none"
                              title={pdf.title[lang]}
                              allow="autoplay"
                            />
                          ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center p-12 text-center">
                              <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center mb-6">
                                <FileText size={40} className="text-white/20" />
                              </div>
                              <h4 className="text-xl font-bold mb-2">
                                {lang === 'en' ? 'Document Preview' : '문서 미리보기'}
                              </h4>
                              <p className="text-white/50 max-w-sm mb-8">
                                {lang === 'en' 
                                  ? 'Please provide a public Google Drive or direct PDF link to enable direct viewing here.' 
                                  : '직접 보기를 활성화하려면 공개된 구글 드라이브 링크나 직접 PDF 링크를 제공해 주세요.'}
                              </p>
                              <div className="flex flex-wrap gap-4 justify-center">
                                {selectedProject.link && (
                                  <a 
                                    href={selectedProject.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 rounded-full bg-white text-primary font-bold hover:bg-accent hover:text-white transition-all"
                                  >
                                    {lang === 'en' ? 'View on Notion' : '노션에서 보기'}
                                  </a>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Additional Links in Modal */}
                <div className="mt-20 pt-12 border-t border-white/10 flex flex-wrap gap-6">
                  {selectedProject.link && (
                    <a 
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white hover:text-accent transition-colors font-bold"
                    >
                      <ExternalLink size={20} />
                      {lang === 'en' ? 'Visit Project Link' : '프로젝트 링크 방문'}
                    </a>
                  )}
                  {selectedProject.github && (
                    <a 
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white hover:text-accent transition-colors font-bold"
                    >
                      <Github size={20} />
                      Github Repository
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
