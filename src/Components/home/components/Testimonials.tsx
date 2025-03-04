'use client';

import Image from 'next/image';
import '../asset/Testimonial.css';
import '@/../../assets/root.css';
import { Col, Row, Rate, Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export default function Testimonials() {
  return (
    <div className="testimonial-section">
      <Row gutter={[16, 16]} className="tutor-row">
        <Col xs={24} sm={24} md={12} lg={12} xl={12} className="gutter-row">
          <div className="testimonial-student left-section-padding">
            <h4 className="sub-heading">TESTIMONIALS</h4>
            <h2 className="heading">What Our Students Say About Us</h2>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} className="gutter-row">
          <div className="student-review right-section-padding">
            <Carousel arrows infinite={false}>
              <div>
                <div className="review-section">
                  <Rate
                    allowHalf
                    disabled
                    defaultValue={3.5}
                    className="rating"
                  />
                  <p className="review-description">
                    psum as their default model text, and a search for 'lorem
                    ipsum' will uncover many web sites still in their infancy.
                    Various versions have evolved over the years, sometimes by
                    accident, sometimes on purpose (injected humour and the
                    like).
                  </p>
                  <div className="user">
                    <Image
                      src="/images/static/popular-tutor.png"
                      width={50}
                      height={50}
                      className="user-image"
                      alt="user-image"
                    />
                    <div className="name-grade">
                      <h4 className="user-name">John Smith</h4>
                      <div className="user-grade">Grade 9</div>
                    </div>
                  </div>
                  <div className="for-smaller-devices-testimonial user-info-rating">
                    <div className="user">
                      <Image
                        src="/images/static/popular-tutor.png"
                        width={50}
                        height={50}
                        className="user-image"
                        alt="user-image"
                      />
                      <div className="name-grade">
                        <h4 className="user-name">John Smith</h4>
                        <div className="user-grade">Grade 9</div>
                      </div>
                    </div>
                    <Rate
                      allowHalf
                      disabled
                      defaultValue={3.5}
                      className="rating"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h3 style={contentStyle}>2</h3>
              </div>
              <div>
                <h3 style={contentStyle}>3</h3>
              </div>
              <div>
                <h3 style={contentStyle}>4</h3>
              </div>
            </Carousel>
          </div>
        </Col>
      </Row>
    </div>
  );
}
