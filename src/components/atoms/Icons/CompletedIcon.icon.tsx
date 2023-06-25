function CompletedIcon({onClick}: {onClick: (value: string[] | string) => void}):JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 64 64"
      width={30}
      onClick={()=>onClick([])}
    >
      <path d="M28.75 55.5a23.5 23.5 0 1114-42.38 2 2 0 01-2.38 3.21A19.51 19.51 0 1048.25 32a19.65 19.65 0 00-.25-3.07 2 2 0 114-.62 23.85 23.85 0 01.25 3.69 23.52 23.52 0 01-23.5 23.5z" />
      <path d="M31.25 39.5a2 2 0 01-1.41-.59l-9.5-9.5a2 2 0 012.82-2.82l8.09 8.08 24.09-24.08a2 2 0 012.82 2.82l-25.5 25.5a2 2 0 01-1.41.59z" />
    </svg>
  );
}

export default CompletedIcon;
