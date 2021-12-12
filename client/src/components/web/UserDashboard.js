import {React,useEffect,useState} from 'react'
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
import { MDBDataTable } from 'mdbreact';
import axios from 'axios'

function UserDashboard() {
    const navigate = useNavigate();
    const cookies = new Cookies();
    const [tableData, setTableData] = useState([]);

    const data = {
        columns: [
          {
            label: 'Movie Name',
            field: 'movie_name',
            key: 'movie_name',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Movie Genre',
            field: 'movie_genre',
            key: 'movie_genre',
            sort: 'asc',
            width: 270
          },
          {
            label: 'Show Time',
            field: 'show_time',
            key: 'show_time',
            sort: 'asc',
            width: 200
          },
          {
            label: 'Show Date',
            field: 'show_date',
            key: 'show_date',
            sort: 'asc',
            width: 100
          }
        ],
        rows: tableData
      };
    useEffect(() => {


        // if(cookies.get('sessionId') === undefined)
        // {
        //     navigate('/');
        // }
        axios({
            method: 'post',
            url: 'http://localhost:8040/web/fetch-movie-list',
            headers: {'Content-Type': 'application/json' }
            })
            .then(function (response) {

                if(response.data.data)
                {
                    setTableData(response.data.data)
                }
                else{

                    console.log(response)

                }

            })
            .catch((error) => {
                console.log(error)
            })


    }, [])



    return (
        <div className="dashboard-container">
        <div className="content-area">
          <div className="container-fluid">
            <div className="main"></div>
            <MDBDataTable
striped
bordered
small
data={data}
/>
</div>
</div>
</div>
    )
}

export default UserDashboard
