import '@/../../assets/root.css';
import VerifyOrder from '@/Components/make-payment/payment-description';
import { Col, Row } from 'antd';

export default function Faq() {
  return (
    <div className="default-padding-body">
      <Row gutter={[16, 16]}>
        <Col span={24} className="gutter-row">
          <VerifyOrder />
        </Col>
      </Row>
    </div>
  );
}
