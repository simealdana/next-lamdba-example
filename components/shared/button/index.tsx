export interface ButtonProps {
  text: String;
  onClick: () => void;
  className: String;
}
export const Button = (props: ButtonProps) => (
  <button className={`${props.className}`} onClick={props.onClick}>
    {props.text}
  </button>
);
