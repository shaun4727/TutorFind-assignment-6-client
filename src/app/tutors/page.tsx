import '@/../../assets/root.css';
import SidebarSection from '@/Components/tutors/components/SideBar';
import TutorList from '@/Components/tutors/components/TutorList';
import { Col, Row } from 'antd';

export default function Tutors() {
  return (
    <div className="default-padding-body">
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={8} md={8} lg={8} xl={6} className="gutter-row">
          <SidebarSection />
        </Col>
        <Col xs={24} sm={16} md={16} lg={16} xl={18} className="gutter-row">
          <TutorList />
        </Col>
      </Row>
    </div>
  );
}
