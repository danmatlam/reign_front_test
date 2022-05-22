import React from 'react'
import ComboBox from './components/ComboBox'
import CourseCard from './components/CourseCard'
import FavHeart from './components/CourseCard/FavHeart'
import Pagination from './components/Pagination'
import SwrTest from './components/SwrTest'
import TabsFilter from './components/TabsFilter'

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
  ])

  return (
    <div>

      <TabsFilter
        tabsFilters={tabsFilters}
        setTabsFilter={setTabsFilter}
      />
      <ComboBox />
      <CourseCard
        date="2 hourse ago by author"
        description="Event-driven state management in React using Storeon"
        faved={true}
      />
      <Pagination nbPages={50} />
      <SwrTest />

    </div>
  )
}

export default App