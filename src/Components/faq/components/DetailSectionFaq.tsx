'use client';

import '../assets/DetailSection.css';
import '@/../../assets/root.css';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Collapse, theme, CollapseProps } from 'antd';
import type { CSSProperties } from 'react';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const getItems: (panelStyle: CSSProperties) => CollapseProps['items'] = (
  panelStyle
) => [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>{text}</p>,
    style: panelStyle,
  },
];

export default function DetailSectionFaq() {
  const { token } = theme.useToken();
  const panelStyle: React.CSSProperties = {
    marginBottom: 8,
    background: 'rgba(151, 157, 172, 0.15)',
    borderRadius: token.borderRadiusLG,
    border: 'none',
  };
  return (
    <div className="faq-detail-section ">
      <h4 className="faq-title">Tutoring</h4>
      <Collapse
        bordered={false}
        expandIconPosition="end"
        defaultActiveKey={['1']}
        expandIcon={({ isActive }) =>
          isActive ? <MinusOutlined /> : <PlusOutlined />
        }
        style={{ background: token.colorBgContainer }}
        items={getItems(panelStyle)}
      />
      <h4 className="faq-title">Payments</h4>
      <Collapse
        bordered={false}
        expandIconPosition="end"
        expandIcon={({ isActive }) =>
          isActive ? <MinusOutlined /> : <PlusOutlined />
        }
        style={{ background: token.colorBgContainer }}
        items={getItems(panelStyle)}
      />
      <h4 className="faq-title">Account Management</h4>
      <Collapse
        bordered={false}
        expandIconPosition="end"
        expandIcon={({ isActive }) =>
          isActive ? <MinusOutlined /> : <PlusOutlined />
        }
        style={{ background: token.colorBgContainer }}
        items={getItems(panelStyle)}
      />
    </div>
  );
}
