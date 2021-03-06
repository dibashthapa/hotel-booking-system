import React, { useState } from "react";
import { DatePicker, Button, Text } from "@hotel-ui";
import {
  Quantity,
  PopoverContainer,
  PopoverWrapper,
} from "components/Search/index.style";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import {
  Heading,
  TextLink,
  FormHeader,
  FormWrapper,
  CheckoutContainer,
  DateWrapper,
  GuestWrapper,
} from "./ReservationForm.style";
import { Popover, notification } from "antd";
import { IconType } from "antd/lib/notification";
import Api from "services/api";
import moment, { Moment } from "moment";

interface ReservationFormProps {
  price: string;
  location: string;
  roomId: string;
}
const api = new Api(true);

export const ReservationForm: React.FC<ReservationFormProps> = ({
  price,
  location,
  roomId,
}) => {
  const [children, setChildren] = useState(4);
  const [adults, setAdults] = useState(2);
  const [totalCost, setTotalCost] = useState(0);
  const [dateState, setDate] = useState({
    checkinDate: moment().format("YYYY-MM-DD"),
    checkoutDate: "2021-08-21",
  });

  const sendMessage = (notificationType: IconType, message: string) => {
    notification[notificationType]({
      message: "Hotel Booking",
      description: message,
    });
  };

  const bookNow = async () => {
    const body = {
      checkinDate: dateState["checkinDate"],
      checkoutDate: dateState["checkoutDate"],
      location: location,
      adultCount: adults,
      childrenCount: children,
      roomId: roomId,
    };

    try {
      const res = await api.post("booking/create", body);
      sendMessage("success", res?.message);
      setTotalCost(res?.data?.booking?.totalCharge);
    } catch (err) {
      sendMessage("error", err.response.data.message);
    }
  };

  const Content = () => {
    const increaseChildrenCount = () => {
      setChildren(children + 1);
    };

    const decreaseChildrenCount = () => {
      if (children === 0) return;
      setChildren(children - 1);
    };

    const increaseAdultCount = () => {
      setAdults(adults + 1);
    };

    const decreaseAdultCount = () => {
      if (adults === 0) return;
      setAdults(adults - 1);
    };
    return (
      <PopoverWrapper>
        <PopoverContainer>
          <strong>Children</strong>
          <Quantity>
            <button className="decBtn" onClick={decreaseChildrenCount}>
              <AiOutlineMinus />
            </button>
            <Text>{children}</Text>
            <button className="incBtn" onClick={increaseChildrenCount}>
              <AiOutlinePlus />
            </button>
          </Quantity>
        </PopoverContainer>
        <PopoverContainer>
          <strong>Adults</strong>
          <Quantity>
            <button className="decBtn" onClick={decreaseAdultCount}>
              <AiOutlineMinus />
            </button>
            <Text>{adults}</Text>
            <button className="incBtn" onClick={increaseAdultCount}>
              <AiOutlinePlus />
            </button>
          </Quantity>
        </PopoverContainer>
      </PopoverWrapper>
    );
  };
  const onCalendarChange = (
    _: [Moment | null, Moment | null] | null,
    dateStr: [string, string]
  ): void => {
    const dates = { checkinDate: dateStr[0], checkOutDate: dateStr[1] };
    setDate({
      checkinDate: dates.checkinDate,
      checkoutDate: dates.checkOutDate,
    });
  };
  return (
    <FormWrapper>
      <FormHeader>
        <Heading>${price} / night</Heading>
        <TextLink>Contact Hotel</TextLink>
      </FormHeader>

      <CheckoutContainer>
        <div>
          <label>Dates</label>
          <DateWrapper>
            <DatePicker
              onChange={onCalendarChange}
              defaultValues={[moment(), moment("2021-08-21", "YYYY-MM-DD")]}
            />
          </DateWrapper>
        </div>
        <GuestWrapper>
          <label>Guests</label>
          <Popover placement="bottom" content={Content} trigger="click">
            <span>
              <Text display="flex" alignItems="center">
                Guests {children + adults > 0 && children + adults}
              </Text>
            </span>
          </Popover>
        </GuestWrapper>
        <div>
          {totalCost > 0 && <Text>Your total charge is {totalCost}$ </Text>}
          <Button onClick={bookNow}>Book Now</Button>
        </div>
      </CheckoutContainer>
    </FormWrapper>
  );
};
