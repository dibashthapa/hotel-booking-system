import moment, { Moment } from "moment";
import { DatePicker as AntDatePicker, Space } from "antd";
const { RangePicker } = AntDatePicker;

interface DatePickerProps {
  defaultValues?: [Moment, Moment];
  onChange?: (
    _: [Moment | null, Moment | null] | null,
    dateStr: [string, string]
  ) => void;
}
export const DatePicker: React.FC<DatePickerProps> = ({
  defaultValues,
  onChange,
}) => {
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
        format="YYYY-MM-DD"
        onChange={onChange}
        defaultValue={defaultValues}
      />
    </Space>
  );
};
