import React, { Component, Fragment } from "react";
import "../assets/css/style.css";
import axios from "axios";

import Notes from "../../src/modules/edit-component";

import Cookies from "universal-cookie";
const cookies = new Cookies();


class EditComponent extends Component {
  state = {
    notes: [],
  };

  
  
  // console.log("token note: ", token);

  getAPI = () => {

    var token = cookies.get('access_token');
    axios
      .get("https://notes-management.herokuapp.com/api/note", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        this.setState({
          notes: res.data.data,
        });
      });
  };

  componentDidMount() {
    this.getAPI();
  }

  handleEdit = (data) => {

    console.log("onsubmit " + data)
  //   var token = cookies.get('access_token');
  //   let config = {
  //     headers: {
  //       'Authorization': `Bearer ${token}`
  //     }
  //   };

  //   var data = {
  //     title: data.title,
  //     note: data.body
  //   };
  // console.log(data)
    // axios
    //   .put("https://notes-management.herokuapp.com/api/note", data,config)
    //   .then(
    //     (res) => {
    //       console.log(res);
    //     },
    //     (er) => {
    //       console.log("err : ", er.response);
    //     }
    //   );
  };

  handleDelete = (data) => {
    var token = cookies.get('access_token');
    let config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    axios
      .delete(`https://notes-management.herokuapp.com/api/note/${data}`, config)
      .then((res) => {
        console.log("delete: ", data);
        this.getAPI();
      });
  };

  render() {
    return (
      <Fragment>
        <h1 class="h3 mb-2 mt-3 text-gray-800">Edit Notes</h1>
        <p class="mb-10">
          DataTables is a third party plugin that is used to generate the demo
          table below. For more information about DataTables, please visit the{" "}
          <a target="_blank" href="https://datatables.net">
            official DataTables documentation
          </a>
          .
        </p>

        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Note List</h6>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table
                class="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Notes</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.notes.map((notes) => {
                    return (
                      <Notes
                        data={notes}
                        remove={this.handleDelete}
                        update={this.handleEdit}
                      />
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default EditComponent;
