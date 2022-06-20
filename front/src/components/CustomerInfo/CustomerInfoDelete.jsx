import React from 'react'
import classes from './CustomerInfoDelete.module.css';
import { Button } from '@mui/material';

const BASE_URL = 'http://localhost:8090/info/customer'

const CustomerInfoDelete = (props) => {

    const customerInfoDeleteHandler = async() => {
        await fetch(BASE_URL, {
            method: 'Delete',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                id: sessionStorage.getItem('USER')
            })
        }).then((res) => {
            sessionStorage.removeItem('USER');
            window.location.reload();
        })
        console.log("삭제 complete");
        props.onClose();
    }
    
  return (
    <div className={classes.main}>
        <p>{props.email} 계정을 삭제하시겠습니까?</p>
        <div className={classes.button}>
            <Button onClick={customerInfoDeleteHandler}>회원 탈퇴</Button>
            <Button onClick={props.onClose}>취소</Button>
        </div>
    </div>
  )
}

export default CustomerInfoDelete