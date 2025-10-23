import styles from "./ExampleComponent.module.css";

interface ExampleComponentProps {
  title: string;
}

export default function ExampleComponent({ title }: ExampleComponentProps) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>{title}</h2>
      <p className={styles.text}>This is an example component from src/components</p>
    </div>
  );
}
