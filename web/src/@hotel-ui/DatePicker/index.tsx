import moment, { Moment } from "moment";
import { DatePicker as AntDatePicker, Space } from "antd";

const { RangePicker } = AntDatePicker;
export const DatePicker = () => {
  const disabledDate = (current: Moment) => {
    return (
      (current && current < moment().endOf("day")) ||
      current >= moment().add(1, "month")
    );
  };
  return (
    <Space direction="vertical" size={12}>
      <RangePicker
        separator="-"
        placeholder={["Start Date", "End Date"]}
        disabledDate={disabledDate}
        suffixIcon={null}
      />
    </Space>
  );
};
