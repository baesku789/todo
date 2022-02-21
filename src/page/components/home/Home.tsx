import * as React from "react";
import styles from './home.scss'


export const Home = () => {

    return (
        <>
            <h2 className={styles.home}>로그인</h2>
            <h3>아이디</h3>
            <input type="text"/>
            <h3>비밀번호</h3>
            <input type="text"/>
        </>
    )
}
