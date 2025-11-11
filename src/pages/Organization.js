import React from 'react';

function Organization() {
  const teams = [
    {
      department: '기술 개발팀',
      description: '드론 시스템 및 생분해성 캡슐 개발',
      members: '5명'
    },
    {
      department: '연구팀',
      description: 'SAP 및 커피박 비료 연구',
      members: '4명'
    },
    {
      department: 'GIS 분석팀',
      description: '위성 데이터 분석 및 최적 파종 지역 선정',
      members: '3명'
    },
    {
      department: '운영팀',
      description: '프로젝트 관리 및 현장 운영',
      members: '4명'
    }
  ];

  return (
    <div className="page organization-page">
      <h1 className="page-title">조직</h1>
      
      <section className="organization-intro">
        <p className="org-description">
          SeedWave는 다양한 분야의 전문가들이 모여 사막화 방지라는 공동의 목표를 위해 협력하고 있습니다.
        </p>
      </section>

      <section className="teams-section">
        <h2 className="section-title">팀 구성</h2>
        <div className="teams-grid">
          {teams.map((team, index) => (
            <div key={index} className="team-card">
              <div className="team-icon">👥</div>
              <h3 className="team-name">{team.department}</h3>
              <p className="team-description">{team.description}</p>
              <div className="team-members">
                <span className="members-badge">{team.members}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="values-section">
        <h2 className="section-title">우리의 가치</h2>
        <div className="values-list">
          <div className="value-item">
            <div className="value-bullet">•</div>
            <div>
              <h4>혁신</h4>
              <p>지속 가능한 환경을 위한 기술 혁신</p>
            </div>
          </div>
          <div className="value-item">
            <div className="value-bullet">•</div>
            <div>
              <h4>협력</h4>
              <p>다양한 분야의 전문가들과의 협업</p>
            </div>
          </div>
          <div className="value-item">
            <div className="value-bullet">•</div>
            <div>
              <h4>책임</h4>
              <p>환경에 대한 책임감 있는 접근</p>
            </div>
          </div>
          <div className="value-item">
            <div className="value-bullet">•</div>
            <div>
              <h4>지속가능성</h4>
              <p>장기적인 생태계 복원을 목표</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Organization;

