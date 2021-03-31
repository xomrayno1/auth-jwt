import React, { useEffect, useState } from 'react';

function Category(props) {

    const [data, setData] = useState([]);

    useEffect(()=>{
        fetchData();
    },[])
     
    console.log(data)
      function fetchData(){
        var myHeaders = new Headers();
        const token = localStorage.getItem('accessToken');
      
        fetch("http://localhost:8080/category", {
            method : 'GET',
            headers : {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('accessToken'),
            },
            redirect: 'follow',
        })
          .then(response => {
            if(response.ok){
                return response.json()
            }
            if(response.status === 403){
                console.log("Bạn không có quyền vào cái này")
            }
            throw Error(response.status)
          })
          .then(result => setData(result))
          .catch(error => console.log('error', error));
    }

    return (
        <div>
            <h1>Category</h1>
            {
                data && data.map(item => (
                    <p key={item.id}>{item.name}</p>
                ))
            }
        </div>
    );
}

export default Category;