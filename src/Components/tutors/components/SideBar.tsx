'use client';

import {
  Checkbox,
  Col,
  Row,
  GetProp,
  Rate,
  Slider,
  InputNumberProps,
  InputNumber,
  Select,
  Button,
  Radio,
  RadioChangeEvent,
} from 'antd';
import '../assets/SideBar.css';
import '@/../../assets/root.css';
import { useState } from 'react';

export default function SidebarSection() {
  const [inputValue, setInputValue] = useState(1);
  const [priceSort, setPriceSort] = useState(1);

  const onChangeRange: InputNumberProps['onChange'] = (newValue) => {
    setInputValue(newValue as number);
  };
  const onChangeCheck: GetProp<typeof Checkbox.Group, 'onChange'> = (
    checkedValues
  ) => {
    console.log('checked = ', checkedValues);
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onChangePriceSort = (e: RadioChangeEvent) => {
    setPriceSort(e.target.value);
  };

  return (
    <div className="sidebar-section ">
      <h3 className="search-header">Filter Search</h3>
      <div className="filter-area">
        <h5 className="filter-title">Subject</h5>
        <Checkbox.Group
          style={{ width: '100%' }}
          onChange={() => onChangeCheck}
          className="filter-list"
        >
          <Row>
            <Col span={24}>
              <Checkbox value="A">Mathmatics</Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox value="A">Chemistry</Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox value="A">Physics</Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox value="A">Biology</Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox value="A">Accounting</Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox value="A">Religion</Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox value="A">Bangla</Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox value="A">English</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
        <h5 className="filter-title">Rating</h5>
        <Rate allowHalf defaultValue={3.5} className="filter-list" />

        <h5 className="filter-title">Hourly Rate(BDT)</h5>
        <div className="range-slider filter-list">
          <Slider
            min={1}
            max={4000}
            onChange={onChangeRange}
            className="slider-component"
            value={typeof inputValue === 'number' ? inputValue : 0}
          />
          <InputNumber
            min={1}
            max={4000}
            style={{ margin: '0 16px' }}
            value={inputValue}
            onChange={onChangeRange}
          />
        </div>
        <h5 className="filter-title">Availability</h5>
        <Checkbox.Group className="filter-list">
          <Row>
            <Col span={24}>
              <Checkbox value="A">In Stock</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
        <h5 className="filter-title">Location</h5>
        <div className="options filter-list">
          <Select
            defaultValue="dhanmondi"
            style={{ width: '100%' }}
            onChange={handleChange}
            options={[
              { value: 'dhanmondi', label: 'Dhanmondi' },
              { value: 'gulshan', label: 'Gulshan' },
              { value: 'banani', label: 'Banani' },
              { value: 'bashundhara', label: 'Bashundhara' },
              { value: 'baridhara', label: 'Baridhara' },
              { value: 'uttara', label: 'Uttara' },
              { value: 'mirpur', label: 'Mirpur' },
              { value: 'pallabi', label: 'Pallabi' },
              { value: 'mohammadpur', label: 'Mohammadpur' },
              { value: 'tejgaon', label: 'Tejgaon' },
              { value: 'khilgaon', label: 'Khilgaon' },
              { value: 'badda', label: 'Badda' },
              { value: 'rampura', label: 'Rampura' },
              { value: 'shyamoli', label: 'Shyamoli' },
              { value: 'motijheel', label: 'Motijheel' },
              { value: 'paltan', label: 'Paltan' },
              { value: 'jatrabari', label: 'Jatrabari' },
              { value: 'sutrapur', label: 'Sutrapur' },
              { value: 'wary', label: 'Wari' },
              { value: 'lalbagh', label: 'Lalbagh' },
            ]}
          />
        </div>
      </div>
      <div className="filter-action-btn">
        <Button block>Apply Filter</Button>
      </div>
      <h3 className="search-header">Sort Tutors</h3>
      <div className="filter-area">
        <h5 className="filter-title">Rating</h5>
        <Rate allowHalf defaultValue={3.5} className="filter-list" />
        <h5 className="filter-title">Pricing</h5>
        <Radio.Group
          name="radiogroup"
          defaultValue={1}
          onChange={onChangePriceSort}
          options={[
            { value: 1, label: 'Low To High' },
            { value: 2, label: 'High To Low' },
          ]}
        />
        <h5 className="filter-title">New Profiles</h5>
        <Checkbox.Group className="filter-list">
          <Row>
            <Col span={24}>
              <Checkbox value="A">Find New Profile</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </div>
      <div className="filter-action-btn">
        <Button block>Apply Sorting</Button>
      </div>
    </div>
  );
}
