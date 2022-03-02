import * as React from "react";
import styles from './home.scss'
import {useEffect} from "react";

const Home = () => {
    useEffect(() => {
        const getBody = async () => {
            const response = await fetch( '/users');
            const body = await response.text();
            console.log(`body ${body}`)
        }

        getBody();
    },[])

    return (
        <div className={styles.container}>
            <h2 className={styles.home}>로그인</h2>
            <h3>아이디</h3>
            <input className={styles.input} type="text"/>
            <h3>비밀번호</h3>
            <input className={styles.input} type="text"/>
        </div>
    )
}

export default Home;