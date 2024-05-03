import "./button.scss";

type Props = {
  variant: string;
  children: React.ReactNode;
};
const Button = (props: Props) => {
  const buttonClass = `button ${props.variant}`;

  return <button className={buttonClass}>{props.children}</button>;
};

export default Button;
