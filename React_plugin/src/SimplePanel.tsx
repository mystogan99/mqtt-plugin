import React, { PureComponent } from "react";
import { PanelProps } from "@grafana/data";
import { SimpleOptions } from "types";
import axios from "axios";
import "./table.css";

interface Props extends PanelProps<SimpleOptions> {}

export class SimplePanel extends PureComponent<Props> {
  render() {
    var state = {
      isToggleOn: true
    };
    var clickHandler = function() {
      const url = "http://127.0.0.1:5000/post/";
      state = {
        isToggleOn: !state.isToggleOn
      };
      if (state.isToggleOn) {
        axios.post(url, { label: "test", text: "on" });
      } else {
        axios.post(url, { label: "test", text: "off" });
      }
    };
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Day</th>
                  <th scope="col">Article</th>
                  <th scope="col">Author</th>
                  <th scope="col">Shares</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Bootstrap 4 CDN and Starter Template</td>
                  <td>Cristina</td>
                  <td>2.846</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={clickHandler}
                    >
                      <i className="far fa-eye"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Bootstrap Grid 4 Tutorial and Examples</td>
                  <td>Cristina</td>
                  <td>3.417</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={clickHandler}
                    >
                      <i className="far fa-eye"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Bootstrap Flexbox Tutorial and Examples</td>
                  <td>Cristina</td>
                  <td>1.234</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={clickHandler}
                    >
                      <i className="far fa-eye"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
