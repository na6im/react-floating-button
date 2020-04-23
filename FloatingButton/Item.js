import styled from "styled-components";
import posed from "react-pose";

export default styled(
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
      //boxShadow: "0 1px 8px 0 rgb(255,255,255, 0.5)",
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
      //boxShadow: "0 1px 8px 0 rgb(255,255,255,0)",
      transition: {
        duration: 150,
      },
    },
  })
)`
  position: absolute;
  height: ${(props) => props.height}px;
  width: ${(props) => props.height}px;
  border-radius: 50px;
  background-color: #dbdbdb;
  //box-shadow: 0 1px 8px 0 rgb(255, 255, 255);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
