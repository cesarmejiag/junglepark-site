import styles from "./MainCta.module.css";

type TypeMainCta = {
  label: string;
  className?: string;
  size?: string;
  clicked?: (ev: MouseEvent) => void;
};

export default function MainCta({
  label,
  className = "",
  size = "sm",
  clicked,
}: TypeMainCta) {
  const handleClick = (ev: any) => {
    if (typeof clicked === "function") {
      clicked(ev);
    }
  };

  return (
    <button className={`${styles.mainCta} ${className}`} onClick={handleClick}>
      {label}
    </button>
  );
}
