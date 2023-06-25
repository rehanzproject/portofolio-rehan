type PencilProps = {
  onClick: (value: string[] | string) => string[] | void;
  width: number;
};
function PencilIcon(props: PencilProps): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={props.width}
      onClick={() => props.onClick("")}
    >
      <path d="M22 7.24a1 1 0 00-.29-.71l-4.24-4.24a1 1 0 00-.71-.29 1 1 0 00-.71.29l-2.83 2.83L2.29 16.05a1 1 0 00-.29.71V21a1 1 0 001 1h4.24a1 1 0 00.76-.29l10.87-10.93L21.71 8a1.19 1.19 0 00.22-.33 1 1 0 000-.24.7.7 0 000-.14zM6.83 20H4v-2.83l9.93-9.93 2.83 2.83zM18.17 8.66l-2.83-2.83 1.42-1.41 2.82 2.82z" />
    </svg>
  );
}

export default PencilIcon;
