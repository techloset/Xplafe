// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// // import Update from '../../screen/update/Update';
// // import Header from '../header/Header';
// // import JobSummary from '../../screen/jobSummary/JobSummary';
// // import Show from '../imageComponent/Show'
// // import More from '../../screen/more/More';
// // import Fuzu from '../../component/imageComponent/Fuzu'
// // import Navigation from '../navigation/Navigation';
// // import Vacancy from '../imageComponent/Vacancy';
// // import Message from '../imageComponent/Message';
// // import Courses from '../imageComponent/Courses';
// // import { commonColors } from '../../assets/color/color';

// const Tab = createBottomTabNavigator();



// function Tabs() {
//     return (
//         <Tab.Navigator
//             tabBarOptions={{
//                 activeTintColor: 'rgba(255, 200, 3, 1)',
//             }}
//             screenOptions={{
//                 tabBarHideOnKeyboard: true,
//                 tabBarStyle: {
//                     height: 80,
//                     borderTopLeftRadius: 20,
//                     borderTopRightRadius: 20,
//                     gap: 8,
//                     // backgroundColor: commonColors.bgColor,
//                     // position: "absolute",
//                 },
//                 tabBarItemStyle: {
//                     margin: 5,
//                     activeTintColor: 'rgba(255, 200, 3, 1)',
//                 }
//             }}
//         >
//             <Tab.Screen name="JOBS" component={Navigation} options={{
//                 headerShown: false,
//                 tabBarIcon: ({ focused }) => <Vacancy color={focused ? "rgba(255, 200, 3, 1)" : "#636363"} />
//             }} />
//             <Tab.Screen name="MESSAGES" component={Header} options={{
//                 headerShown: false,
//                 tabBarIcon: ({ focused }) => <Message color={focused ? "rgba(255, 200, 3, 1)" : "#636363"} />
//             }} />
//             <Tab.Screen name="FUZU" component={Update} options={{
//                 headerShown: false,
//                 tabBarIcon: ({ focused }) => <Fuzu color={focused ? "rgba(255, 200, 3, 1)" : "#636363"} />,
//             }} />
//             <Tab.Screen name="COURSES" component={JobSummary} options={{
//                 headerShown: false,
//                 tabBarIcon: ({ focused }) => <Courses color={focused ? "rgba(255, 200, 3, 1)" : "#636363"} />,
//             }} />
//             <Tab.Screen name="MORE" component={More} options={{
//                 headerShown: false,
//                 // tabBarIcon: ({ focused }) => <Show color={focused ? "rgba(255, 200, 3, 1)" : "#636363"} />,
//             }} />
//         </Tab.Navigator>
//     );
// }
// export default Tabs





// function TabNavigation() {
//     return (
//         <Tab.Navigator>
//             <Tab.Screen name="Home" component={Login} />
//             <Tab.Screen name="Settings" component={Register} />
//             <Tab.Screen name="Settings" component={Around} />
//         </Tab.Navigator>
//     );
// }
// export default TabNavigation



// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../../screen/login/Login';
import Register from '../../screen/register/Register';
import Around from '../../screen/around/Around';


// const Tab = createBottomTabNavigator();
// const TabNavigation = () => {
//     return (
//         <Tab.Navigator>
//             <Tab.Screen name="Home" component={Login} />
//             <Tab.Screen name="Settings" component={Register} />
//             {/* <Tab.Screen name="lettings" component={Around} /> */}
//         </Tab.Navigator>
//     )
// }
// export default TabNavigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function TabNavigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Login} />
            <Tab.Screen name="Settings" component={Register} />
        </Tab.Navigator>
    );
}

export default TabNavigation