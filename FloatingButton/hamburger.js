import React, { useState } from "react";
import styled from "styled-components";
import posed from "react-pose";
import PropTypes from "prop-types";

const ToggleWrapper = styled.span`
  cursor: pointer;
  display: flex;
  size: ${(props) => props.size / 2}px;
  position: relative;
  width: ${(props) => props.size / 2}px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Line = styled.div`
  size: ${(props) => props.size * 0.05}px;
  width: ${(props) => props.size * 0.5}px;
  border: white;
  border-radius: ${(props) => props.size * 0.05}px;
  background-color: ${(props) => props.color};
`;

const Line1 = posed(Line)({
  open: {
    y: (props) => props.size / 6,
    rotate: 45,
  },
  closed: { y: 0, rotate: 0 },
});

const Line2 = posed(Line)({
  open: {
    rotate: 0,
    width: 0,
  },
  closed: { width: (props) => props.size * 0.5, rotate: 0 },
});

const Line3 = posed(Line)({
  open: {
    y: (props) => -props.size / 6,
    rotate: -45,
  },
  closed: { y: 0, rotate: 0 },
});

const MenuToggle = ({ size, color }) => {
  const [open, setOpen] = useState(false);
  return (
    <ToggleWrapper onClick={() => setOpen(true)} size={size}>
      <Line1 pose={open ? "open" : "closed"} size={size} color={color} />
      <Line2 pose={open ? "open" : "closed"} size={size} color={color} />
      <Line3 pose={open ? "open" : "closed"} size={size} color={color} />
    </ToggleWrapper>
  );
};

MenuToggle.defaultProps = {
  size: 60,
  color: "white",
};

MenuToggle.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

export default MenuToggle;
