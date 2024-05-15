import { ComponentProps, FC, ReactNode, memo } from "react";
import { Button as OriginalButton } from "react-aria-components";

type Props = {
  children: ReactNode;
} & ComponentProps<typeof OriginalButton>;

export const Button: FC<Props> = memo(({ children, ...rest }) => {
  return <OriginalButton {...rest}>{children}</OriginalButton>;
});

Button.displayName = "Button";
