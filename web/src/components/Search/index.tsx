import { useState } from "react";
import { Moment } from "moment";
import {
  ComponentWrapper,
  FormWrapper,
  Quantity,
  PopoverContainer,
  PopoverWrapper,
} from "./index.style";
import { DatePicker, Input, Button, Text } from "@hotel-ui";
import { ImLocation } from "react-icons/im";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Popover } from "antd";
import { useHistory } from "react-router-dom";
import { LISTING_POSTS_PAGE } from "settings/constant";
export const SearchForm = () => {
  const [room, setRoom] = useState(0);
  const [children, setChildren] = useState(0);
  const [adults, setAdults] = useState(0);
  const [value, setValue] = useState("Kathmandu, Nepal");
  const history = useHistory();

  const searchHotels = () => {
    const date = JSON.parse(localStorage.getItem("dates") as string);

    if (room && value.length > 1 && children && adults && date) {
      localStorage.setItem("guests", JSON.stringify({ children, adults }));
      history.push({
        pathname: LISTING_POSTS_PAGE,
        search: `room=${room}&location=${value}`,
        state: { room },
      });
    }
  };
  const onCalendarChange = (
    _: [Moment | null, Moment | null] | null,
    dateStr: [string, string]
  ): void => {
    localStorage.removeItem("dates");
    const dates = { checkinDate: dateStr[0], checkOutDate: dateStr[1] };
    localStorage.setItem("dates", JSON.stringify(dates));
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const Content = () => {
    const increaseRoomCount = () => {
      setRoom(room + 1);
    };

    const decreaseRoomCount = () => {
      if (room === 0) return;
      setRoom(room - 1);
    };
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
          <strong>Room</strong>
          <Quantity>
            <button className="decBtn" onClick={decreaseRoomCount}>
              <AiOutlineMinus />
            </button>
            <Text>{room}</Text>
            <button className="incBtn" onClick={increaseRoomCount}>
              <AiOutlinePlus />
            </button>
          </Quantity>
        </PopoverContainer>
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

  return (
    <FormWrapper>
      <ComponentWrapper>
        <Input
          LeftIcon={ImLocation}
          placeholder="'Kathmandu, Nepal'"
          padding="0px 30px 0px 40px"
          borderHover="white"
          onChange={onChange}
          value={value}
        />
      </ComponentWrapper>
      <ComponentWrapper>
        <DatePicker onChange={onCalendarChange} />
      </ComponentWrapper>
      <ComponentWrapper>
        <Popover placement="bottom" content={Content} trigger="click">
          <Text display="flex" alignItems="center" marginX="15px">
            Room {room > 0 && room}
          </Text>
          <Text display="flex" alignItems="center">
            Guests {children + adults > 0 && children + adults}
          </Text>
        </Popover>
      </ComponentWrapper>
      <ComponentWrapper>
        <Button
          variant="primary"
          size="medium"
          width="100%"
          onClick={searchHotels}
        >
          Find Hotels
        </Button>
      </ComponentWrapper>
    </FormWrapper>
  );
};
