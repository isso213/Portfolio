import { LucideIcon, Code2, Database, Palette, Search, Languages, Mail, Linkedin } from 'lucide-react';

export type Language = 'en' | 'ko';

export interface Project {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  longDescription?: Record<Language, string>;
  tags: string[];
  image: string;
  link?: string;
  github?: string;
  pdfs?: { title: Record<Language, string>; url: string }[];
  embed?: boolean;
}

export interface Experience {
  period: string;
  title: Record<Language, string>;
  company: Record<Language, string>;
  details: Record<Language, string[]>;
}

export interface Education {
  period: string;
  school: Record<Language, string>;
  degree: Record<Language, string>;
  details?: Record<Language, string[]>;
}

export const content = {
  nav: {
    about: { en: 'About', ko: '소개' },
    skills: { en: 'Skills', ko: '기술' },
    experience: { en: 'Experience', ko: '경력' },
    projects: { en: 'Projects', ko: '프로젝트' },
    contact: { en: 'Contact', ko: '연락처' },
  },
  hero: {
    greeting: { en: "Hi, I'm Sohyoun Lee", ko: "안녕하세요, 이소현입니다" },
    role: { 
      en: "Bioinformatics Researcher & UX Designer", 
      ko: "바이오인포매틱스 연구원 & UX 디자이너" 
    },
    description: {
      en: "Bridging the gap between biological data and human-centered design. Specialized in genomic data analysis and user experience research.",
      ko: "생물학적 데이터와 사용자 중심 디자인의 가교 역할을 합니다. 유전체 데이터 분석과 사용자 경험 연구를 전문으로 합니다."
    }
  },
  about: {
    title: { en: 'About Me', ko: '자기소개' },
    text: {
      en: "I am a multidisciplinary researcher and designer with a background in Horticultural Science and Information Science. My work focuses on making complex biological data accessible and meaningful through computational design and UX research.",
      ko: "원예생명공학 및 정보문화학을 전공한 다학제적 연구자이자 디자이너입니다. 컴퓨테이셔널 디자인과 UX 리서치를 통해 복잡한 생물학적 데이터를 접근 가능하고 의미 있게 만드는 데 집중하고 있습니다."
    }
  },
  education: [
    {
      period: '2019.03 - 2025.08',
      school: { en: 'Seoul National University', ko: '서울대학교' },
      degree: { en: 'B.S. Horticultural Science & Biotechnology', ko: '원예생명공학 학사' },
      details: {
        en: [
          'Interdisciplinary Major in Information Science and Culture',
          'Micro Degree in COSS Big Data (Computational Design)',
          'National Science & Technology Scholarship recipient'
        ],
        ko: [
          '연합전공: 정보문화학',
          '세부과정: COSS 빅데이터 마이크로 디그리 (컴퓨테이셔널 디자인)',
          '이공계 국가 우수 장학생 선정'
        ]
      }
    },
    {
      period: '2024.02 - 2024.07',
      school: { en: 'University of Twente', ko: '트벤테 대학교 (네덜란드)' },
      degree: { en: 'Exchange Semester', ko: '교환학생' },
      details: {
        en: ['Communication Science', 'UX Design & User Research Theory'],
        ko: ['커뮤니케이션 과학 수강', 'UX 디자인 및 사용자 리서치 이론/프로젝트 수행']
      }
    }
  ],
  skills: [
    {
      category: { en: 'Programming', ko: '프로그래밍' },
      icon: Code2,
      items: ['Python', 'R', 'JavaScript (P5.js)', 'C (Basic)']
    },
    {
      category: { en: 'Research', ko: '리서치' },
      icon: Search,
      items: ['Qualitative/Quantitative', 'Usability Testing', 'Surveys', 'Interviews']
    },
    {
      category: { en: 'Design', ko: '디자인' },
      icon: Palette,
      items: ['Figma', 'Axure', 'Photoshop', 'Lightroom', 'Final Cut Pro']
    },
    {
      category: { en: 'Languages', ko: '어학' },
      icon: Languages,
      items: ['Korean (Native)', 'English (C1 - TOEFL 106)', 'German (A1)', 'Chinese (A1)']
    }
  ],
  experience: [
    {
      period: '2024.10 - 2025.05',
      company: { en: 'Horticultural Crop Genomics Lab (SNU)', ko: '서울대학교 원예작물 유전체학 연구실' },
      title: { en: 'Researcher in Bioinformatics', ko: '학부 연구생' },
      details: {
        en: [
          'Conducted DGE analysis using RNA-Seq data',
          'Applied statistical tools (DESeq2) and scripting (R, Python)',
          'Data preprocessing, normalization, and visualization (PCA, Heatmaps)'
        ],
        ko: [
          'RNA-Seq 기반 유전자 발현 차이(DGE) 분석 수행',
          'R과 Python 스크립트를 활용한 분석 워크플로우 효율화',
          '데이터 전처리, 정규화 및 시각화 (PCA, Heatmap 등)'
        ]
      }
    },
    {
      period: '2022 - 2023',
      company: { en: 'Open Sky', ko: '오픈 스카이' },
      title: { en: 'Academic & Career Mentor', ko: '학업 및 진로 멘토링 강사' },
      details: {
        en: [
          'Designed classes on academic strategies and career exploration',
          'Delivered interactive career guidance sessions',
          'Conducted biotechnology workshops with critical thinking exercises'
        ],
        ko: [
          '중·고등학생 대상 학업 전략 및 진로 탐색 클래스 설계',
          '인터랙티브 진로 지도 세션 운영',
          '바이오 테크놀로지 특강 및 비판적 사고 훈련 워크샵 진행'
        ]
      }
    },
    {
      period: '2019 - 2023',
      company: { en: 'Private & Cram Schools', ko: '개인 및 학원' },
      title: { en: 'Math and Science Tutor', ko: '수학 및 과학 강사' },
      details: {
        en: [
          'Conducted one-on-one private tutoring tailored to individual needs',
          'Led group classes in academic institutions',
          'Fostered interactive and engaging learning environments'
        ],
        ko: [
          '학생 개별 학습 스타일과 니즈에 맞춘 1:1 수학/과학 과외 진행',
          '학원 내 그룹 수업 진행 및 상호작용 중심의 학습 환경 조성',
          '맞춤형 학습 지도 및 성적 향상 관리'
        ]
      }
    },
    {
      period: '2025.01 - 2026.06',
      company: { en: 'SNU Buddy (OIA)', ko: '서울대학교 SNU Buddy' },
      title: { en: 'Volunteer / Coordinator', ko: '교환학생 도우미' },
      details: {
        en: [
          'Assisted exchange students with settlement and cultural exchange',
          'Planned and executed various networking events',
          'Facilitated communication in English and Korean'
        ],
        ko: [
          '교환학생들의 정착 도움 및 문화 교류, 네트워킹 지원',
          '다양한 활동 기획 및 진행, 인솔',
          '영어 및 한국어를 활용한 원활한 소통 지원'
        ]
      }
    }
  ],
  projects: [
    {
      id: 'mediq',
      title: { en: 'MediQ', ko: 'MediQ' },
      description: {
        en: 'AI-embedded medical record assistant that transcribes consultations and provides personalized health insights. Developed as a graduation project.',
        ko: '진료 내용을 전사하고 개인화된 건강 인사이트를 제공하는 AI 기반 진료 기록 도우미 서비스. 정보문화학 졸업 프로젝트.'
      },
      longDescription: {
        en: 'MediQ is an AI-powered medical assistant designed to bridge the communication gap between doctors and patients. It transcribes medical consultations in real-time and uses LLMs to provide patients with easy-to-understand summaries and personalized health insights. This project was developed as a graduation requirement for Information Science and Culture.',
        ko: 'MediQ는 의사와 환자 사이의 의사소통 간극을 메우기 위해 설계된 AI 기반 의료 어시스턴트입니다. 진료 내용을 실시간으로 전사하고, LLM을 활용하여 환자에게 이해하기 쉬운 요약과 개인화된 건강 인사이트를 제공합니다. 정보문화학 졸업 프로젝트로 수행되었습니다.'
      },
      tags: ['HCI', 'UX Design', 'LLM'],
      image: 'https://picsum.photos/seed/mediq/800/600',
      link: 'https://tldms9.wixsite.com/mediq',
      embed: false, // Wix usually blocks iframes
      pdfs: [
        { title: { en: 'Presentation Material', ko: '발표 자료' }, url: 'https://drive.google.com/file/d/1LTzWZKQaM8H3cXuJmidebGicrNnlg0Zx/view?usp=sharing' }
      ]
    },
    {
      id: 'short-form-study',
      title: { en: 'Short-form Video Mental Model Study', ko: '숏폼 시청자의 멘탈 모델 연구' },
      description: {
        en: 'Research on viewers\' mental models regarding YouTube Shorts recommendation algorithms.',
        ko: '유튜브 쇼츠 추천 알고리즘에 대한 시청자의 멘탈 모델 분석 및 UI/UX 개선 방향 제언 연구.'
      },
      longDescription: {
        en: 'This study explores how Z-generation viewers perceive and respond to YouTube Shorts recommendations. Through interviews and interaction log analysis, we identified mental models and proposed interface improvements like timeline bars and enhanced negative feedback mechanisms.',
        ko: 'Z세대 시청자들이 유튜브 쇼츠 추천을 어떻게 인식하고 반응하는지 탐구한 연구입니다. 인터뷰와 상호작용 로그 분석을 통해 멘탈 모델을 식별하고, 타임라인 이동바 및 강화된 부정적 피드백 메커니즘과 같은 인터페이스 개선안을 제안했습니다.'
      },
      tags: ['HCI', 'UX Research', 'Data Analysis'],
      image: 'https://picsum.photos/seed/shorts/800/600',
      pdfs: [
        { title: { en: 'Final Paper', ko: '최종 페이퍼' }, url: 'https://drive.google.com/file/d/17YIavF_imKqe8dJCxPky_J2N4PR-HLrI/view?usp=sharing' },
        { title: { en: 'Presentation Material', ko: '발표 자료' }, url: 'https://drive.google.com/file/d/1Lj-O4YASOGn7cvQ0FCxdzt9suyvo5L9t/view?usp=sharing' }
      ]
    },
    {
      id: 'deg-analysis',
      title: { en: 'DEG Analysis / RNA-Seq', ko: 'DEG 분석 / RNA-Seq' },
      description: {
        en: 'Transcriptome analysis reveal limited role of Phytophthora capsici effector Pc108.',
        ko: 'RNA-Seq 데이터를 활용한 Phytophthora capsici 이펙터 Pc108의 유전자 발현 차이(DEG) 분석 및 기능 연구.'
      },
      longDescription: {
        en: 'Conducted differential gene expression (DEG) analysis using RNA-Seq data to identify genes active during infection. The study focused on the functional validation of candidate effector Pc108 in Nicotiana benthamiana.',
        ko: 'RNA-Seq 데이터를 활용하여 감염 중 활성화되는 유전자를 식별하기 위한 유전자 발현 차이(DEG) 분석을 수행했습니다. Nicotiana benthamiana에서 후보 이펙터 Pc108의 기능적 검증에 초점을 맞춘 연구입니다.'
      },
      tags: ['Bioinformatics', 'RNA-Seq', 'Data Analysis'],
      image: 'https://picsum.photos/seed/dna/800/600',
      link: 'https://www.notion.so/1371399caa8e8018922df2fe2564b5eb?v=6ea33b7a7a9e47a7b3652b4e7d80f4f3',
      pdfs: [
        { title: { en: 'Research Poster', ko: '연구 포스터' }, url: 'https://drive.google.com/file/d/1L7he6R3-ggTFsJ3O0n1b2_vbuSRE8yBz/view?usp=drive_link' },
        { title: { en: 'Final Paper', ko: '최종 페이퍼' }, url: 'https://drive.google.com/file/d/1-7xqy42BK5ub4qwlVHIu4ypYCEdlxDF-/view?usp=drive_link' }
      ]
    },
    {
      id: 'health-agent-proposal',
      title: { en: 'Health Agent Proposal', ko: '헬스 에이전트 설계 연구' },
      description: {
        en: 'Research proposal for an in-context LLM health agent providing credibility assessment.',
        ko: '건강 콘텐츠 소비 시 신뢰도 평가 및 개인화된 주의 메시지를 제공하는 인컨텍스트 LLM 에이전트 설계 연구 제안.'
      },
      longDescription: {
        en: 'A research proposal for designing an in-context LLM-based health agent. The agent aims to provide real-time credibility assessments and personalized health advice while users consume online health content, bridging the gap between information consumption and verification.',
        ko: '인컨텍스트 LLM 기반 헬스 에이전트 설계를 위한 연구 제안서입니다. 사용자가 온라인 건강 콘텐츠를 소비하는 동안 실시간 신뢰도 평가와 개인화된 건강 조언을 제공하여 정보 소비와 검증 사이의 간극을 메우는 것을 목표로 합니다.'
      },
      tags: ['HCI', 'LLM', 'Healthcare'],
      image: 'https://picsum.photos/seed/health/800/600',
      pdfs: [
        { title: { en: 'Research Proposal', ko: '연구 제안서' }, url: 'https://drive.google.com/file/d/1j6Y1mRQOsfcFzUr1JrfoV74LycGIz6B8/view?usp=drive_link' },
        { title: { en: 'Proposal Presentation', ko: '프로포절 발표 자료' }, url: 'https://drive.google.com/file/d/1nl1mFPuUDfKY8e8iUPil7Ys8bnQM-e9U/view?usp=drive_link' }
      ]
    },
    {
      id: 'self-doc-analysis',
      title: { en: 'Smartphone Use Self-doc Analysis', ko: '스마트폰 사용 self-doc 분석' },
      description: {
        en: 'Qualitative analysis of smartphone usage patterns through self-documentation.',
        ko: '스마트폰 사용 로그 기록 관찰 및 인터뷰 내용 전사를 통한 키워드 인덱싱 및 정성적 분석 프로젝트.'
      },
      longDescription: {
        en: 'This project analyzes smartphone usage patterns using a self-documentation (self-doc) method. By indexing interview transcripts and observing usage logs, we explored user behaviors, motivations, and emotional responses to smartphone interactions.',
        ko: 'self-doc 방법론을 사용하여 스마트폰 사용 패턴을 분석한 프로젝트입니다. 인터뷰 전사본 인덱싱과 사용 로그 관찰을 통해 스마트폰 상호작용에 대한 사용자의 행동, 동기 및 감정적 반응을 탐구했습니다.'
      },
      tags: ['Digital Ethnography', 'Qualitative Research', 'Data Analysis'],
      image: 'https://picsum.photos/seed/smartphone/800/600',
      pdfs: [
        { title: { en: 'Coding Result Presentation', ko: '코딩 결과 발표 자료' }, url: 'https://drive.google.com/file/d/1AZgM7LGM5do134Z-y4O2nthucmxUdDc0/view?usp=sharing' }
      ]
    },
    {
      id: 'infome',
      title: { en: 'INFOME', ko: 'INFOME' },
      description: {
        en: 'AI news recommendation service providing summaries, translations, and illustration generation.',
        ko: '크롤링한 뉴스 데이터를 기반으로 요약, 번역 및 일러스트 생성을 제공하는 AI 뉴스 추천 서비스.'
      },
      longDescription: {
        en: 'INFOME is a news recommendation system that uses LLMs to summarize complex news articles and generate illustrative images to aid understanding. It features keyword-based search and related article recommendations using NLP techniques.',
        ko: 'LLM을 사용하여 복잡한 뉴스 기사를 요약하고 이해를 돕기 위한 일러스트 이미지를 생성하는 뉴스 추천 시스템입니다. NLP 기술을 활용한 키워드 기반 검색 및 연관 기사 추천 기능을 제공합니다.'
      },
      tags: ['LLM', 'Python', 'NLP'],
      image: 'https://picsum.photos/seed/news/800/600',
      pdfs: [
        { title: { en: 'Final Presentation', ko: '기말 발표 자료' }, url: 'https://drive.google.com/file/d/1o88rQY_i3FANGQn2oN4HUS4ypV8k-BZI/view?usp=sharing' }
      ]
    },
    {
      id: 'data-driven-ux',
      title: { en: 'Data-driven UX Design', ko: '데이터 활용 UX 디자인' },
      description: {
        en: 'Improving the public bicycle experience and lifestyle habits through data analysis.',
        ko: '공공자전거 사용 데이터 및 생활 습관 데이터를 분석하여 페인 포인트를 도출하고 사용 경험을 개선하는 UX 디자인.'
      },
      longDescription: {
        en: 'This project involves two major components: 1) Improving the Seoul public bicycle (Ttareungyi) experience by analyzing usage patterns and 2) Designing a data-driven app service for lifestyle improvement (e.g., reducing late-night snacking).',
        ko: '이 프로젝트는 두 가지 주요 구성 요소로 이루어져 있습니다: 1) 서울시 공공자전거(따릉이) 사용 패턴 분석을 통한 경험 개선 및 2) 생활 습관 개선(예: 야식 줄이기)을 위한 데이터 기반 앱 서비스 기획.'
      },
      tags: ['UX Design', 'Data Analysis', 'Service Design'],
      image: 'https://picsum.photos/seed/bike/800/600',
      pdfs: [
        { title: { en: 'Public Bicycle Data Analysis', ko: '공공자전거 따릉이 데이터 분석' }, url: 'https://drive.google.com/file/d/1GBQaKpNWSq0F-k93zElFl6GKpaar3ef1/view?usp=sharing' },
        { title: { en: 'Lifestyle Improvement App Proposal', ko: '생활습관 개선 앱 기획' }, url: 'https://drive.google.com/file/d/1p07y5SAC5n2hi62jIcO-zphaCXdkkPXb/view?usp=sharing' }
      ]
    },
    {
      id: 'knew-money',
      title: { en: 'Knew Money', ko: 'Knew Money' },
      description: {
        en: 'Financial planning and tracking app design for university students, focusing on user education and revenue models.',
        ko: '대학생을 위한 금융 계획 및 관리 앱 디자인. 사용자 교육 가능성 및 수익 모델 프레임워크 구축에 집중.'
      },
      longDescription: {
        en: 'A project for the Design for User Experience course at the University of Twente. Conducted in English, this project involved designing a financial planning and tracking app tailored for university students, with a focus on educational value and sustainable revenue models.',
        ko: '네덜란드 트벤테 대학교(University of Twente)의 Design for User Experience 과정 중 수행한 프로젝트입니다. 모든 과정이 영어로 진행되었으며, 대학생을 위한 금융 계획 및 관리 앱을 디자인하고 사용자 교육 가능성 및 수익 모델 프레임워크 구축에 집중했습니다.'
      },
      tags: ['UX Design', 'HCI', 'Fintech'],
      image: 'https://picsum.photos/seed/money/800/600',
      link: 'https://zei6c3.axshare.com/?g=4',
      embed: true
    },
    {
      id: 'narak-quiz',
      title: { en: 'SNU Narak Quiz Show', ko: '서울대 나락퀴즈쇼' },
      description: {
        en: 'An interactive quiz game developed using p5.js. Full-stack development including planning, design, and implementation.',
        ko: 'p5.js를 활용하여 기획, 디자인, 프론트/백엔드 풀스택으로 개발한 인터랙티브 퀴즈 게임.'
      },
      tags: ['Game Dev', 'p5.js', 'Javascript'],
      image: 'https://picsum.photos/seed/narak/800/600',
      link: 'https://wp0077.github.io/SNUNarak_quiz/',
      github: 'https://github.com/wp0077/SNUNarak_quiz',
      embed: true,
      pdfs: [
        { title: { en: 'Presentation Material', ko: '발표 자료' }, url: 'https://drive.google.com/file/d/18k1w13zNNJVVGbn6jYByMMtPNXicmn0A/view?usp=sharing' }
      ]
    },
    {
      id: 'album-art-gai',
      title: { en: 'Album Art Design Experiment', ko: '앨범아트 디자인 실험' },
      description: {
        en: 'Experimenting with Stable Diffusion and LoRA training to generate collage-style album art reflecting musical moods.',
        ko: 'Stable Diffusion과 LoRA 학습을 활용하여 음악의 분위기를 반영하는 콜라주 형식의 앨범 아트 생성 실험.'
      },
      tags: ['ML', 'Generative AI', 'Design'],
      image: 'https://picsum.photos/seed/album/800/600',
      pdfs: [
        { title: { en: 'Presentation Material', ko: '발표 자료' }, url: 'https://drive.google.com/file/d/130W57yoi3_I410s-D6Qb5ZfuHzx9GRg4/view?usp=sharing' }
      ]
    }
  ],
  contact: {
    title: { en: 'Get In Touch', ko: '연락하기' },
    email: 'isso213@snu.ac.kr',
    linkedin: 'linkedin.com/in/isobel0lee'
  }
};
