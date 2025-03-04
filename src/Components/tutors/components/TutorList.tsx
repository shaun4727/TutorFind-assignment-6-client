import '../assets/TutorList.css';
import '@/../../assets/root.css';
import { Col, Row } from 'antd';
import Image from 'next/image';

export default function TutorList() {
  return (
    <div className="tutor-section">
      <div className="heading-info">
        <h3 className="header">Meet Our Tutors</h3>
        <p className="sub-header">
          Dedicated to Unlocking Every Student’s Potential
        </p>
      </div>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8} lg={8} xl={6} className="gutter-row">
          <div className="personal-detail">
            <Image
              src="/images/static/popular-tutor.png"
              width={90}
              height={90}
              className="team-image"
              alt="team-image"
            />
            <h4 className="member-name">Alex Ross</h4>
            <p className="designation">Founder & CEO</p>
            <p className="bio-summary">
              Former co-founder of Opendoor. Early staff at Spotify and Clearbit
            </p>
          </div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={8} xl={6} className="gutter-row">
          <div className="personal-detail">
            <Image
              src="/images/static/popular-tutor.png"
              width={90}
              height={90}
              className="team-image"
              alt="team-image"
            />
            <h4 className="member-name">Alex Ross</h4>
            <p className="designation">Founder & CEO</p>
            <p className="bio-summary">
              Former co-founder of Opendoor. Early staff at Spotify and Clearbit
            </p>
          </div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={8} xl={6} className="gutter-row">
          <div className="personal-detail">
            <Image
              src="/images/static/popular-tutor.png"
              width={90}
              height={90}
              className="team-image"
              alt="team-image"
            />
            <h4 className="member-name">Alex Ross</h4>
            <p className="designation">Founder & CEO</p>
            <p className="bio-summary">
              Former co-founder of Opendoor. Early staff at Spotify and Clearbit
            </p>
          </div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={8} xl={6} className="gutter-row">
          <div className="personal-detail">
            <Image
              src="/images/static/popular-tutor.png"
              width={90}
              height={90}
              className="team-image"
              alt="team-image"
            />
            <h4 className="member-name">Alex Ross</h4>
            <p className="designation">Founder & CEO</p>
            <p className="bio-summary">
              Former co-founder of Opendoor. Early staff at Spotify and Clearbit
            </p>
          </div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={8} xl={6} className="gutter-row">
          <div className="personal-detail">
            <Image
              src="/images/static/popular-tutor.png"
              width={90}
              height={90}
              className="team-image"
              alt="team-image"
            />
            <h4 className="member-name">Alex Ross</h4>
            <p className="designation">Founder & CEO</p>
            <p className="bio-summary">
              Former co-founder of Opendoor. Early staff at Spotify and Clearbit
            </p>
          </div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={8} xl={6} className="gutter-row">
          <div className="personal-detail">
            <Image
              src="/images/static/popular-tutor.png"
              width={90}
              height={90}
              className="team-image"
              alt="team-image"
            />
            <h4 className="member-name">Alex Ross</h4>
            <p className="designation">Founder & CEO</p>
            <p className="bio-summary">
              Former co-founder of Opendoor. Early staff at Spotify and Clearbit
            </p>
          </div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={8} xl={6} className="gutter-row">
          <div className="personal-detail">
            <Image
              src="/images/static/popular-tutor.png"
              width={90}
              height={90}
              className="team-image"
              alt="team-image"
            />
            <h4 className="member-name">Alex Ross</h4>
            <p className="designation">Founder & CEO</p>
            <p className="bio-summary">
              Former co-founder of Opendoor. Early staff at Spotify and Clearbit
            </p>
          </div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={8} xl={6} className="gutter-row">
          <div className="personal-detail">
            <Image
              src="/images/static/popular-tutor.png"
              width={90}
              height={90}
              className="team-image"
              alt="team-image"
            />
            <h4 className="member-name">Alex Ross</h4>
            <p className="designation">Founder & CEO</p>
            <p className="bio-summary">
              Former co-founder of Opendoor. Early staff at Spotify and Clearbit
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}
