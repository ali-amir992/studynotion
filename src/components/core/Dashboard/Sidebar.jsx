// import { useState } from "react"
// import { VscSignOut } from "react-icons/vsc"
// import { useDispatch, useSelector } from "react-redux"
// import { useNavigate } from "react-router-dom"
// import {RxCross1} from "react-icons/rx"
// import { sidebarLinks } from "../../../data/dashboard-links"
// import { logout } from "../../../services/operations/authAPI"
// import ConfirmationModal from "../../common/ConfirmationModal"
// import SidebarLink from "./SidebarLink"

// export default function Sidebar({ sideBar, setSideBar }) {
//   const { user, loading: profileLoading } = useSelector(
//     (state) => state.profile
//   )
//   const { loading: authLoading } = useSelector((state) => state.auth)
//   const dispatch = useDispatch()
//   const navigate = useNavigate()
//   // to keep track of confirmation modal
//   const [confirmationModal, setConfirmationModal] = useState(null)

//   if (profileLoading || authLoading) {
//     return (
//       <div className="grid h-[calc(100vh-3.5rem)] min-w-[220px] items-center border-r-[1px] border-r-richblack-700 bg-richblack-800">
//         <div className="spinner"></div>
//       </div>
//     )
//   }

//   return (
//     <>
//       <div className="flex h-[calc(100vh-3.5rem)] min-w-[220px] flex-col border-r-[1px] border-r-richblack-700 bg-richblack-800 py-10 text-white">
//         <div className="flex flex-col">
//           {sidebarLinks.map((link) => {
//             if (link.type && user?.accountType !== link.type) return null
//             return (
//               <SidebarLink key={link.id} link={link} iconName={link.icon} />
//             )
//           })}
//         </div>
//         <div className="mx-auto mt-6 mb-6 h-[1px] w-10/12 bg-richblack-700" />
//         <div className="flex flex-col">
//           <SidebarLink
//             link={{ name: "Settings", path: "/dashboard/settings" }}
//             iconName="VscSettingsGear"
//           />
//           <button
//             onClick={() =>
//               setConfirmationModal({
//                 text1: "Are you sure?",
//                 text2: "You will be logged out of your account.",
//                 btn1Text: "Logout",
//                 btn2Text: "Cancel",
//                 btn1Handler: () => dispatch(logout(navigate)),
//                 btn2Handler: () => setConfirmationModal(null),
//               })
//             }
//             className="px-8 py-2 text-sm font-medium text-richblack-300"
//           >
//             <div className="flex items-center gap-x-2">
//               <VscSignOut className="text-lg" />
//               <span>Logout</span>
//             </div>
//           </button>
//         </div>
//       </div>
//       {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
//     </>
//   )
// }

import { useState } from "react"
import { VscSignOut } from "react-icons/vsc"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import {RxCross1} from "react-icons/rx"
import { sidebarLinks } from "../../../data/dashboard-links"
import { logout } from "../../../services/operations/authAPI"
import ConfirmationModal from "../../common/ConfirmationModal"
import SidebarLink from "./SidebarLink"
import Spinner from "../../common/Spinner"

const SideBar = ({sideBar, setSideBar}) => {

    const {user, loading: profileLoading} = useSelector( state => state.profile)
    const {loading: authLoading} = useSelector( state => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [confirmationModal, setConfirmationModal] = useState(null)

    if(profileLoading || authLoading){
        return <Spinner/>
    }
  return (
    <>
        <div className={`flex h-[calc(100vh-3.5rem)] min-w-[220px] flex-col border-r-[1px] border-richblack-700 bg-richblack-800 py-10
        ${sideBar ? " w-full lg:w-fit" : "w-0 opacity-0 hidden"} transition-[width] ease-linear duration-700
        `}>
           <button 
    onClick={() => setSideBar(prevState => !prevState)}
    className='self-start ml-8 mb-8 text-richblack-300 text-xl'
>
    <RxCross1 />
</button>
            <div className=' flex flex-col'>
                {
                    sidebarLinks.map( link => {
                        {/* console.log(user.accountType,link) */}
                        if( link.type && user?.accountType !== link.type) return null
                        return (
                            <SidebarLink setSideBar={setSideBar} key={link.id} link={link} iconName={link.icon}/>
                        )
                    })
                }
            </div>

            <div className=' mx-auto mt-6 mb-6 h-[1px] w-10/12 bg-richblack-700'></div>

            <div 
            className=' flex flex-col'>
                <SidebarLink setSideBar={setSideBar}
                    link={{name: "Settings", path:"/dashboard/settings"}}
                    iconName="VscSettingsGear"
                />
                <button
                    onClick={
                        () => {
                            setSideBar(false)
                            setConfirmationModal({
                                text1: "Are you sure?",
                                text2: "You will be logged out of your account.",
                                btn1Text: "Logout",
                                btn2Text: "Cancel",
                                btn1Handler: () => dispatch(logout(navigate)),
                                btn2Handler: () => setConfirmationModal(null)
                            })
                        }
                    }
                    className=' px-8 py-2 text-sm font-medium text-richblack-300'
                >
                    <div className='flex items-center gap-x-2'>
                        <VscSignOut className=" text-lg" />
                        <span>Logout</span>
                    </div>
                </button>   
            </div>
        </div>
        {confirmationModal && <ConfirmationModal modalData={confirmationModal} /> }
    </>
  )
}

export default SideBar