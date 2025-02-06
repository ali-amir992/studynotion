import "./App.css"
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/common/Navbar'
import Login from './pages/Login'
import Signup from './pages/Signup'
import OpenRoute from './components/core/Auth/OpenRoute'
import PrivateRoute from './components/core/Auth/PrivateRoute'
import ForgotPassword from './pages/ForgotPassword'
import { UpdatePassword } from './pages/UpdatePassword'
import VerifyEmail from './pages/VerifyEmail'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import MyProfile from './components/core/Dashboard/MyProfile'
import Dashboard from './pages/Dashboard'
import Error from './pages/Error'
import Settings from './components/core/Dashboard/Settings/index'
import EnrolledCourse from './components/core/Dashboard/EnrolledCourse'
import Cart from './components/core/Dashboard/Cart/index'
import { ACCOUNT_TYPE } from './utils/constant'
import { useSelector } from 'react-redux'
import AddCourse from "./components/core/Dashboard/AddCourse/index"
import MyCourses from './components/core/Dashboard/MyCourses'
import EditCourse from './components/core/Dashboard/EditCourse.jsx'
import Catalog from './pages/Catalog.jsx'
import CourseDetails from "./pages/CourseDetails.jsx"
import ViewCourse from "./pages/ViewCourse.jsx"
import VideoDetails from "./components/core/ViewCourse/VideoDetails";

const App = () => {

  const { user } = useSelector(state => state.profile)
  return (
    <div className='w-screen min-h-screen bg-richblack-900 font-inter flex flex-col'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog/:catalogName' element={<Catalog />} />
        <Route path='/course/:courseId' element={<CourseDetails />} />


        <Route path='/login'
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          } />


        <Route path='/signup'
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          } />


        <Route path='/forgot-password'
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          } />

        <Route path='/update-password/:id'
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          } />

        <Route path='/verify-email'
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          } />

        <Route path="/about" element={<About />} />
        <Route path='/contact' element={<ContactUs />} />

        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } >
          <Route path='/dashboard/my-profile'
            element={
              <MyProfile />
            } />

          <Route path="dashboard/settings" element={<Settings />} />

          {
            user?.accountType === ACCOUNT_TYPE.STUDENT && (
              <>
                <Route path="dashboard/cart" element={<Cart />} />
                <Route path="dashboard/enrolled-courses" element={<EnrolledCourse />} />
              </>
            )
          }

          {
            user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
              <>
                <Route path="dashboard/add-course" element={<AddCourse />} />
                <Route path="dashboard/my-courses" element={<MyCourses />} />
                <Route path="/dashboard/edit-course/:courseId" element={<EditCourse />} />

              </>
            )
          }

        </Route>

        <Route element={<PrivateRoute><ViewCourse /></PrivateRoute>}>
          {
            user?.accountType === ACCOUNT_TYPE.STUDENT && (
              <>
                <Route
                  path="view-course/:courseId/section/:sectionId/sub-section/:subSectionId"
                  element={<VideoDetails />}
                />
              </>
            )
          }
        </Route>

        <Route path='*' element={<Error />} />

      </Routes>
    </div>
  )
}

export default App