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


const Index = () => {


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


  return (
    <div>

      <TabsFilter
        tabsFilters={tabsFilters}
        setTabsFilter={setTabsFilter}
      />
      <ComboBox />
        <Posts/>

    </div>
  )
}

export default Index;


