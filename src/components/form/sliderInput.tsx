import { Col, InputNumber, Row, Slider } from 'antd';
import type { InputNumberProps } from 'antd';
import { LimitType } from '../../types/types';

type SliderInputType = {
  limitInfo: LimitType;
  value: number;
  setValue: (value: number) => void;
};

export default function SliderInput({ limitInfo, value, setValue }: SliderInputType) {
  const onChange: InputNumberProps['onChange'] = vl => {
    setValue(Number(vl));
  };

  return (
    <Row>
      <Col span={24}>
        <span>Minimum: {limitInfo.min}</span>
        <span>Maximum: {limitInfo.max}</span>
      </Col>
      <Col span={12}>
        <Slider min={limitInfo.min} max={limitInfo.max} onChange={onChange} value={typeof value === 'number' ? value : 0} />
      </Col>
      <Col span={4}>
        <InputNumber min={limitInfo.min} max={limitInfo.max} style={{ margin: '0 16px' }} value={value} onChange={onChange} />
      </Col>
    </Row>
  );
}
