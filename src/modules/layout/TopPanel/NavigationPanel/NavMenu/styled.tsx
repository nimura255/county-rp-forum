import styled from 'utils/styled';
import { Link } from 'ui-kit/atoms/Link';

export const NavItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.breakpoints.up('l')} {
    flex-direction: row;
    height: 100%;
  }
`;

export const NavItem = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 52px;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.onPrimary};
  font-weight: 400;
  font-size: 13px;
  opacity: 0.7;
  transition: 0.2s ease background-color;

  ${({ theme }) => theme.breakpoints.up('l')} {
    height: 100%;
    width: initial;
    padding: 0 18px;
  }

  &:first-of-type {
    padding-left: 0;
  }

  &,
  &:hover {
    text-decoration: none;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.onPrimary};
  }

  &.active {
    font-weight: 500;
  }

  &:hover,
  &.active {
    opacity: 1;
  }
`;

export const MobileMenuWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const MobilePopUpContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  width: 100vw;
  background: ${({ theme }) => theme.colors.primaryVariant};
  animation: growOut 0.3s ease-in-out forwards;
  transform-origin: top center;
  user-select: none;
`;
