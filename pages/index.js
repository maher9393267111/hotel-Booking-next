import Home from '../components/Home'
import Layout from '../components/layout/Layout'
import { useSelector } from 'react-redux'
import { getRooms } from '../redux/actions/roomActions'

import { wrapper } from '../redux/store'

export default function Index() {

const { rooms } = useSelector(state => state.allRooms)
console.log(rooms)

  return (
    <Layout>
      <Home />
    </Layout>
  )
}




export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req ,query}) => {
  await store.dispatch(getRooms(req,query?.page,query?.location,query?.guests,query?.category))
})
