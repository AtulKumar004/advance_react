import React from "react";
import logProps from "./lopProps";
import UserInfo from "../Section3/user-info";
import lopProps from "./lopProps";
import userInclude from "./userInclude";
import DataTable from "./dataTable";
import addUser from "./addUser";

const HOCWrapper = addUser(DataTable, );

const HOC = () => {
  return <HOCWrapper  comType = {"HOC"}/>;
};

export default HOC;
