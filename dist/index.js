/**
 * @param {number} height           the height and width of the buttons.
 * @param {boolean} top             specify if the button should be on the top if false the
 * button will be at the bottom.
 * @param {boolean} right           specify if the button should be on the right if false the
 * button will be at the left.
 * @param {string} color            the backgroundColor for the main button
 * @children should be an Item component with params :
 *  @param {string} imgSrc          the icon to use on given button
 *  @param {function} onClick       the callback function call onClick
 *  @param {string} color            the backgroundColor for the Item
 */
import React, { useState, useEffect, useRef } from "react";
import { Container, Floating, Item } from "./styles";
import { PoseGroup } from "react-pose";
import PropTypes from "prop-types";
import MenuToggle from "./hamburger";
const rotations = {
  "3": [[3 * Math.PI / 2, Math.PI], [0, Math.PI / 2]],
  "6": [[Math.PI, Math.PI], [0, 0]]
};

function FloatingButton({
  backgroundColor,
  color,
  height,
  top,
  right,
  children
}) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  let number = React.Children.count(children);
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      setExpanded(false);
    }
  };

  function getAngle(i) {
    const angle = number <= 3 ? Math.PI / 2 : number <= 6 ? Math.PI : 2 * Math.PI;
    const rotate = rotations[number <= 3 ? "3" : "6"][Number(top)][Number(right)];
    return {
      angle: rotate + (number <= 6 ? i * angle / (number - 1) : i * angle / number),
      distance: number <= 6 ? height / Math.sin(angle / (number - 1)) + height / 2 : height / Math.sin(angle / number) + height / 2
    };
  }

  return /*#__PURE__*/React.createElement(Floating, {
    onClick: () => {
      setExpanded(!expanded);
    },
    top: top,
    right: right,
    pose: expanded ? "open" : "closed",
    number: number,
    distance: getAngle(0).distance,
    ref: ref
  }, /*#__PURE__*/React.createElement(Container, {
    height: height,
    style: {
      backgroundColor: `${backgroundColor || "none"}`
    }
  }, /*#__PURE__*/React.createElement(MenuToggle, {
    expanded: expanded,
    color: color,
    height: height
  })), /*#__PURE__*/React.createElement(PoseGroup, null, number === 1 ? /*#__PURE__*/React.createElement(Item, {
    key: 0,
    i: getAngle(0).angle,
    height: height,
    distance: getAngle(0).distance,
    style: {
      backgroundColor: children.props.color
    },
    onClick: () => children.props.onClick()
  }, /*#__PURE__*/React.createElement("img", {
    src: children.props.imgSrc,
    style: {
      height: height / 2,
      width: height / 2,
      fill: "white"
    },
    alt: "icon"
  })) : expanded && [...Array(number)].map((x, i) => /*#__PURE__*/React.createElement(Item, {
    key: i,
    i: getAngle(i).angle,
    height: height,
    distance: getAngle(i).distance,
    style: {
      backgroundColor: children[i].props.color
    },
    onClick: () => children[i].props.onClick()
  }, /*#__PURE__*/React.createElement("img", {
    src: children[i].props.imgSrc,
    style: {
      height: height / 2,
      width: height / 2
    },
    alt: `icon-${i}`
  })))));
}

FloatingButton.defaultProps = {
  color: "#dbdbdb",
  backgroundColor: "#8f1d30",
  height: 60,
  top: false,
  right: true,
  children: {}
};
FloatingButton.propTypes = {
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  height: PropTypes.number,
  top: PropTypes.bool,
  right: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};
export default FloatingButton;