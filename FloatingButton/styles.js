import styled from "styled-components";
import posed from "react-pose";

export const Floating = styled(
  posed.div({
    pressable: true,
    hover: { scale: 1.1 },
    press: { x: 0, delay: 100 },
    open: {
      x: (props) =>
        props.number > 3 && (props.right ? -props.distance : props.distance),
      y: (props) =>
        props.number > 6 && (props.top ? props.distance : -props.distance),
    },
    closed: { x: 0, y: 0, rotate: 0 },
  })
)`
  position: absolute;
  top: ${(props) => (props.top ? "50" : "null")};
  display: flex;
  align-items: center;
  justify-content: center;
  top: ${(props) => (props.top ? "50px" : "none")};
  bottom: ${(props) => (!props.top ? "50px" : "none")};
  right: ${(props) => (props.right ? "50px" : "none")};
  left: ${(props) => (!props.right ? "50px" : "none")};
  z-index: 9999;
`;

export const Container = styled(
  posed.div({
    hoverable: true,
    pressable: true,
    init: { scale: 1 },
    hover: { scale: 1.2 },
    press: { scale: 0.8 },
  })
)`
  height: ${(props) => props.height}px;
  width: ${(props) => props.height}px;
  border-radius: ${(props) => props.height}px;
  background-color: #8f1d30;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Item = styled(
  posed.div({
    hoverable: true,
    pressable: true,
    init: { scale: 1 },
    hover: { scale: 1.2 },
    press: { scale: 0.8 },
    enter: {
      y: (props) => Math.sin(props.i) * props.distance,
      x: (props) => Math.cos(props.i) * props.distance,
      opacity: 1,
      delay: 150,
      transition: {
        y: { type: "spring", stiffness: 500, damping: 10 },
        x: { type: "spring", stiffness: 500, damping: 10 },
        boxShadow: { delay: 300, type: "spring", stiffness: 500, damping: 10 },
        default: { duration: 150 },
      },
    },
    exit: {
      y: 0,
      x: 0,
      opacity: 0,
      transition: {
        duration: 150,
      },
    },
  })
)`
  position: absolute;
  height: ${(props) => props.height}px;
  width: ${(props) => props.height}px;
  border-radius: ${(props) => props.height}px;
  background-color: #dbdbdb;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
