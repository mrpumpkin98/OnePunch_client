import * as S from "./LayoutHeader.styles";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";
import { useNavigate } from "react-router-dom";

export default function LayoutHeader(): JSX.Element {
  const navigate = useNavigate();

  const LoginClick = () => {
    window.scrollTo(0, 0);
    navigate("/TemporaryLogin");
  };

  return (
    <>
      <S.Wrapper>
        <S.Box>
          <div>
            <img src="/images/icons/Logo.png" />
          </div>
          <S.ProfileBox onClick={LoginClick}>
            <S.AvatarOut size={23} icon={<UserOutlined />} />
            <S.Name>team15</S.Name>
            <S.State>플랜 이용중</S.State>
          </S.ProfileBox>
        </S.Box>
      </S.Wrapper>
    </>
  );
}
