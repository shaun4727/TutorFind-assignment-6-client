'use client';

import Image from 'next/image';
import '../asset/PopularTutor.css';
import '@/../../assets/root.css';
import { Carousel, ConfigProvider, Rate } from 'antd';

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export default function PopularTutors() {
  return (
    <div className="popular-tutors ">
      <div className="slider-background"></div>
      <div className="tutor-slider default-padding-body">
        <div className="header-description ">
          <h2 className="heading">Our Popular Tutors</h2>
          <p className="sub-heading">Few of the verified Tutors</p>
        </div>
        <ConfigProvider
          theme={{
            components: {
              Carousel: {
                /* here is your component tokens */
                arrowSize: 24,
              },
            },
          }}
        >
          <Carousel arrows infinite={false} className="for-smaller-devices">
            <div>
              <div className="columns">
                <div className="column">
                  <Image
                    src="/images/static/popular-tutor.png"
                    width={300}
                    height={200}
                    className="tutor-image"
                    alt="email-logo"
                  />
                  <Rate allowHalf disabled defaultValue={3.5} />
                  <h3 className="tutor-name">Andy Robert Toby</h3>
                  <p className="tutor-skill">
                    Expert In <span className="skill-subject">Math</span>
                  </p>
                </div>
                <div className="column">
                  <Image
                    src="/images/static/popular-tutor.png"
                    width={300}
                    height={200}
                    className="tutor-image"
                    alt="email-logo"
                  />
                  <Rate allowHalf disabled defaultValue={3.5} />
                  <h3 className="tutor-name">Andy Robert Toby</h3>
                  <p className="tutor-skill">
                    Expert In <span className="skill-subject">Math</span>
                  </p>
                </div>
              </div>
            </div>
          </Carousel>
          <Carousel arrows infinite={false} className="for-medium-devices">
            <div>
              <div className="columns">
                <div className="column">
                  <Image
                    src="/images/static/popular-tutor.png"
                    width={300}
                    height={200}
                    className="tutor-image"
                    alt="email-logo"
                  />
                  <Rate allowHalf disabled defaultValue={3.5} />
                  <h3 className="tutor-name">Andy Robert Toby</h3>
                  <p className="tutor-skill">
                    Expert In <span className="skill-subject">Math</span>
                  </p>
                </div>
                <div className="column">
                  <Image
                    src="/images/static/popular-tutor.png"
                    width={300}
                    height={200}
                    className="tutor-image"
                    alt="email-logo"
                  />
                  <Rate allowHalf disabled defaultValue={3.5} />
                  <h3 className="tutor-name">Andy Robert Toby</h3>
                  <p className="tutor-skill">
                    Expert In <span className="skill-subject">Math</span>
                  </p>
                </div>
                <div className="column">
                  <Image
                    src="/images/static/popular-tutor.png"
                    width={300}
                    height={200}
                    className="tutor-image"
                    alt="email-logo"
                  />
                  <Rate allowHalf disabled defaultValue={3.5} />
                  <h3 className="tutor-name">Andy Robert Toby</h3>
                  <p className="tutor-skill">
                    Expert In <span className="skill-subject">Math</span>
                  </p>
                </div>
              </div>
            </div>
          </Carousel>
          <Carousel arrows infinite={false} className="for-larger-devices">
            <div>
              <div className="columns">
                <div className="column">
                  <Image
                    src="/images/static/popular-tutor.png"
                    width={300}
                    height={200}
                    className="tutor-image"
                    alt="email-logo"
                  />
                  <Rate allowHalf disabled defaultValue={3.5} />
                  <h3 className="tutor-name">Andy Robert Toby</h3>
                  <p className="tutor-skill">
                    Expert In <span className="skill-subject">Math</span>
                  </p>
                </div>
                <div className="column">
                  <Image
                    src="/images/static/popular-tutor.png"
                    width={300}
                    height={200}
                    className="tutor-image"
                    alt="email-logo"
                  />
                  <Rate allowHalf disabled defaultValue={3.5} />
                  <h3 className="tutor-name">Andy Robert Toby</h3>
                  <p className="tutor-skill">
                    Expert In <span className="skill-subject">Math</span>
                  </p>
                </div>
                <div className="column">
                  <Image
                    src="/images/static/popular-tutor.png"
                    width={300}
                    height={200}
                    className="tutor-image"
                    alt="email-logo"
                  />
                  <Rate allowHalf disabled defaultValue={3.5} />
                  <h3 className="tutor-name">Andy Robert Toby</h3>
                  <p className="tutor-skill">
                    Expert In <span className="skill-subject">Math</span>
                  </p>
                </div>
                <div className="column">
                  <Image
                    src="/images/static/popular-tutor.png"
                    width={300}
                    height={200}
                    className="tutor-image"
                    alt="email-logo"
                  />
                  <Rate allowHalf disabled defaultValue={3.5} />
                  <h3 className="tutor-name">Andy Robert Toby</h3>
                  <p className="tutor-skill">
                    Expert In <span className="skill-subject">Math</span>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="columns">
                <div className="column">2</div>
                <div className="column">6</div>
                <div className="column">10</div>
                <div className="column">14</div>
              </div>
            </div>
            <div>
              <div className="columns">
                <div className="column">3</div>
                <div className="column">7</div>
                <div className="column">11</div>
                <div className="column">15</div>
              </div>
            </div>
            <div>
              <div className="columns">
                <div className="column">4</div>
                <div className="column">8</div>
                <div className="column">12</div>
                <div className="column">16</div>
              </div>
            </div>
          </Carousel>
        </ConfigProvider>
      </div>
    </div>
  );
}
