import styles from './react-list.module.scss';

/* eslint-disable-next-line */
export interface ReactListProps { }

export function ReactList(props: ReactListProps) {
  return (
    <div className={styles['container']}>
      <div>TOOLBAR BUTTONS</div>

    </div>
  );
}

export default ReactList;
