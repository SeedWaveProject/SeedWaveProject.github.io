import React from 'react';

function History() {
  const timeline = [
    {
      year: '2024',
      title: '프로젝트 시작',
      description: 'SeedWave 프로젝트 공식 출범'
    },
    {
      year: '2024',
      title: '기술 개발',
      description: '드론 파종 시스템 및 생분해성 캡슐 개발'
    },
    {
      year: '2024',
      title: '현장 테스트',
      description: '파일럿 프로젝트 진행'
    },
    {
      year: '2025',
      title: '확장 계획',
      description: '상용화 및 글로벌 확장 준비'
    }
  ];

  return (
    <div className="page history-page">
      <h1 className="page-title">히스토리</h1>
      
      <div className="timeline">
        {timeline.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-year">{item.year}</div>
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <section className="milestones-section">
        <h2 className="section-title">주요 성과</h2>
        <div className="milestones-grid">
          <div className="milestone-card">
            <div className="milestone-number">100+</div>
            <p className="milestone-label">파종 완료 지역 (헥타르)</p>
          </div>
          <div className="milestone-card">
            <div className="milestone-number">85%</div>
            <p className="milestone-label">평균 발아율</p>
          </div>
          <div className="milestone-card">
            <div className="milestone-number">6</div>
            <p className="milestone-label">핵심 기술 특허</p>
          </div>
          <div className="milestone-card">
            <div className="milestone-number">50+</div>
            <p className="milestone-label">협력 기관</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default History;

