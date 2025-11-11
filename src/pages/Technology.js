import React from 'react';

function Technology() {
  return (
    <div className="page technology-page">
      <section className="tech-section">
        <h1 className="page-title">기술혁신</h1>
        
        <div className="tech-grid">
          <div className="tech-card">
            <div className="tech-number">01</div>
            <h3>고흡수성 수지로 수분 공급</h3>
            <p className="tech-subtitle">Water supply using superabsorbent polymer (SAP)</p>
            <p className="tech-description">
              생분해성 SAP와 셀룰로스 기반 SAP를 선정
            </p>
          </div>

          <div className="tech-card">
            <div className="tech-number">02</div>
            <h3>커피박을 활용한 비료 제작</h3>
            <p className="tech-subtitle">Fertilizer production using coffee grounds</p>
            <p className="tech-description">
              버려지는 커피박 비료를 통해 식물에 양분 공급
            </p>
          </div>

          <div className="tech-card">
            <div className="tech-number">03</div>
            <h3>사막 최적화 종자 사용</h3>
            <p className="tech-subtitle">Use of desert-optimized seeds</p>
            <p className="tech-description">
              Artemisia sieversiana, Reaumuriasoongorica를 선정
            </p>
          </div>

          <div className="tech-card">
            <div className="tech-number">04</div>
            <h3>생분해성 플라스틱 파종장치</h3>
            <p className="tech-subtitle">Biodegradable plastic seeding device</p>
            <p className="tech-description">
              환경친화적 파종 장치
            </p>
          </div>

          <div className="tech-card">
            <div className="tech-number">05</div>
            <h3>씨앗 혼합물 이탈 방지<br />수용성 케이스 제작 몰드</h3>
            <p className="tech-subtitle">Water-soluble case mold to prevent seed mixture loss</p>
            <p className="tech-description">
              수분 공급 시 녹는 HPMC로 케이스를 제작
            </p>
          </div>

          <div className="tech-card">
            <div className="tech-number">06</div>
            <h3>드론을 활용한 공중 파종</h3>
            <p className="tech-subtitle">Aerial seeding using drones</p>
            <p className="tech-description">
              항공 파종 시스템
            </p>
          </div>
        </div>
      </section>

      <section className="drone-section">
        <h2 className="section-title">드론을 이용한 파종 및 제어</h2>
        <div className="drone-process">
          <div className="process-card">
            <div className="process-icon">📊</div>
            <h3>데이터 기반<br />파종 지역 탐색</h3>
            <p className="process-description-ko">
              위성 GIS 데이터를 활용해 최적의 파종 지역을 분석합니다.
            </p>
            <p className="process-description-en">
              Analyze optimal seeding areas using satellite and GIS data
            </p>
          </div>

          <div className="process-card">
            <div className="process-icon">🚁</div>
            <h3>Eco Drop으로<br />파종 실행</h3>
            <p className="process-description-ko">
              드론에 장착된 EcoDrop 장치를 통해 씨앗 캡슐을 투하합니다.
            </p>
            <p className="process-description-en">
              Deploy seed capsules via drones equipped with the ecoDrop system.
            </p>
          </div>

          <div className="process-card">
            <div className="process-icon">🌱</div>
            <h3>드론으로 투하<br />지역 재활영</h3>
            <p className="process-description-ko">
              드론 파종으로 광범위한 황폐지를 빠르게 녹지화합니다.
            </p>
            <p className="process-description-en">
              Rapidly restore degraded lands through large-scale drone seeding.
            </p>
          </div>

          <div className="process-card">
            <div className="process-icon">📈</div>
            <h3>파종 최적<br />환경 분석</h3>
            <p className="process-description-ko">
              수집된 데이터를 바탕으로 발아율과 생존율을 정밀 분석합니다.
            </p>
            <p className="process-description-en">
              Analyze germination and survival rates using real-time environmental data.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Technology;

