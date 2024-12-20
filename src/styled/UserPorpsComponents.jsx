import Styled from "styled-components";

// 실제 DOM에 전달하면 안되는 prop은 별도로 전개한다
const CustomDiv = ({ dark, ...props }) => {
  return (
    <div {...props}>
      {dark ? "Dark Mode" : "Light Mode"}
      버튼{" "}
    </div>
  );
};

const StyledDiv = styled(CustomDiv)`
    background-color: ${(props) => (props.dark ? "black")};
    color: ${(props) => };
`;

export default CustomDiv;