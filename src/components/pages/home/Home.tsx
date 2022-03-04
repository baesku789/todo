import * as React from "react";
import styles from './home.scss'
import {useEffect, useState} from "react";
import FrontApi from "../../../api/FrontApi";

const Home = () => {
    const [body, setBody] = useState("");

    useEffect(() => {
        const getData = async () => {
            const body = await FrontApi.getBody()
            setBody(body)
        }

        getData();
    },[])

    return (
        <div className={styles.container}>
            {body}
            <h2 className={styles.home}>로그인</h2>
            <h3>아이디</h3>
            <input className={styles.input} type="text"/>
            <h3>비밀번호</h3>
            <input className={styles.input} type="text"/>
        </div>
    )
}

export default Home;