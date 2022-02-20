import * as React from "react";

export const Post = () => {
    return (
        <>
            <div>
                <h2>제목</h2>
                <input type="text"/>
                <h3>내용</h3>
                <textarea name="post" id="post"/>
            </div>
        </>
    )
}
