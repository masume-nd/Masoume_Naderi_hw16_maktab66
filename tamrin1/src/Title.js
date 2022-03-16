import { memo } from 'react'
const Title = function (props) {
  console.log("title render");
  return <h1 style={{ display: "inline-block" }}>{props.children}</h1>;
};
export default memo(Title);
