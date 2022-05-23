import React, { useEffect, useState } from 'react'
import ComboBox from './components/ComboBox'
import Posts from './components/Posts'
import TabsFilter from './components/TabsFilter'

import {
  BrowserRouter as Router,

  useParams
} from "react-router-dom";
import { JSONTree } from 'react-json-tree';
import Layout from './components/Layout';
import { getSettings, setSettings, tabsCombo, techStackCombo } from './Dao/posts';


const App = () => {


  const { page = "0" } = useParams();
  const settings = getSettings();

  /// QUERY FILTER
  const [options, setOptions] = useState(techStackCombo);
  useEffect(() => {
    setOptions(
      options.map(option => {
        if (option.id === settings.tecstack) {
          return { ...option, selected: true }
        }
        return option;
      })
    );
  }, []);

  //FAV 
  const [favedPosts, setFavedPosts] = useState(settings.favedPosts);
  //TABS FILTER
  const [tabsFilters, setTabsFilter] = React.useState(tabsCombo);

  useEffect(() => {
    setTabsFilter(
      tabsFilters.map(tab => {
        if (tab.id === settings.tabFilter) {
          return { ...tab, selected: true }
        }
        return tab;
      })
    );
  }, []);





  return (
    <Layout>
      <TabsFilter
        tabsFilters={tabsFilters}
        setTabsFilter={setTabsFilter}
        setSettings={setSettings}
      />

      <ComboBox
        options={options}
        setOptions={setOptions}
        setSettings={setSettings}
      />

      <Posts
        page={page}
        tecstack={settings.tecstack}
        favedPosts={favedPosts}
        setFavedPosts={setFavedPosts}
        setSettings={setSettings}
      />
    <JSONTree data={tabsFilters} />
    <JSONTree data={settings} />

    </Layout>
  )
}

export default App;



