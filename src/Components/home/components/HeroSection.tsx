'use client';

import Image from 'next/image';
import '../asset/HeroSection.css';
import '@/../../assets/root.css';
import { Col, Row, Input, Button } from 'antd';

const { Search } = Input;

export default function HeroSection() {
  return (
    <div className="hero-section">
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} className="gutter-row">
          <div className="default-left-padding left-section-padding">
            <h3 className="header">
              Best Platform to find Home and Online Tutors
            </h3>
            <p className="hero-description">
              Students looking for tuition help or Tutors waiting to share his
              knowledge, you have come to the right place.
            </p>
            <Search
              placeholder="Find Tutor by subject, grade, or tutor name"
              onSearch={() => console.log('hello')}
              className="hero-search"
            />
            <div className="hero-action-btn">
              <Button block>Student Signup</Button>
              <Button block>Tutor Signup</Button>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} className="gutter-row">
          <div className="default-right-padding right-section-padding">
            <Image
              src="/images/static/hero-illustration.png"
              width={400}
              height={200}
              alt="email-logo"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}
