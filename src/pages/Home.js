import React from 'react';

function Home() {
  return (
    <div className="page home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">사막화 확산의<br />효과적 방지</h1>
          <p className="hero-subtitle">
            지속가능한 녹지화를 위한 혁신적인 드론 파종 솔루션
          </p>
        </div>
      </section>

      <section className="value-section">
        <h2 className="section-title">핵심 가치</h2>
        <div className="value-cards">
          <div className="value-card">
            <div className="value-icon">🌱</div>
            <h3>고효율, 저비용 녹지화 솔루션</h3>
            <p className="value-description-ko">
              지비용으로도 광범위한 지역에 효율적인 녹지화를 실현하는 친환경 파종 솔루션
            </p>
            <p className="value-description-en">
              An eco-friendly seeding solution that enables cost-effective and large-scale greening.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">🌍</div>
            <h3>사막화 면적 감소</h3>
            <p className="value-description-ko">
              식생 복원을 통해 황폐화 면적을 줄이고 지속 가능한 생태 환경을 조성
            </p>
            <p className="value-description-en">
              Reducing desertified areas by restoring vegetation and creating a sustainable ecosystem.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">🚁</div>
            <h3>혁신적 기술 융합</h3>
            <p className="value-description-ko">
              SAP, 커피박 비료, 생분해성 캡슐, 드론-GIS 정밀 제어를 결합한 복합 기술
            </p>
            <p className="value-description-en">
              Innovative restoration technology combining SAP, coffee ground fertilizer, biodegradable capsules, and drone-GIS precision.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

