import React from 'react'
import ComboBox from './components/ComboBox'
import Posts from './components/Posts'
import TabsFilter from './components/TabsFilter'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import { JSONTree } from 'react-json-tree';
import AppBar from './components/AppBar';
import Layout from './components/Layout';


const App = () => {


  const [tabsFilters, setTabsFilter] = React.useState([
    {
      id: "all",
      title: "All",
      selected: true
    },
    {
      id: "myFaves",
      title: "My Faves",
      selected: false
    }
  ]);


  const { page = "0" } = useParams();

  return (
    <Layout>
      

      <TabsFilter
        tabsFilters={tabsFilters}
        setTabsFilter={setTabsFilter}
      />
      
      <ComboBox />

      <Posts page={page}/>


    </Layout>
  )
}

export default App;



