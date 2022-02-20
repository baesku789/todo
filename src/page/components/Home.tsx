import * as React from "react";
import styles from './home.scss'

export interface HomeProps {
    name: string,
    age : number
}

export const Home = (props: HomeProps) => {
    const name : string = props.name;
    const age : number = props.age;

    return (
        <>
            <div className={styles.home}>{name}</div>
            <div className={styles.home}>{age}</div>
        </>
    )
}
