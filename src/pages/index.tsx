import HomeView from '@/views/home'
import type { ReactElement } from 'react'
import MainLayout from '@/components/Layout/Main'
import type { NextPageWithLayout } from './_app'
 
const Page: NextPageWithLayout = () => {
  return <HomeView />
}
 
Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}
 
export default Page