import Vue from 'vue'
import Router from 'vue-router'
import Container from '@/page/Container'
import Login from '@/page/Login'
import Company from '@/page/Company'
import Project from '@/page/Project'
import NewHouse from '@/page/Project/NewHouse'
import TwoHouse from '@/page/Project/TwoHouse'
import AddProject from '@/page/Project/AddProject'

import Agent from '@/page/Agent'
import AgentList from '@/page/Agent/AgentList'
import SeeAgentInfo from '@/page/Agent/SeeAgentInfo'
import AgentAppeal from '@/page/Agent/AgentAppeal'


import House from '@/page/House'
import Transaction from '@/page/Transaction'
import Operation from '@/page/Operation'
import AddCompany from '@/page/Company/AddCompany'
import Examine from '@/page/Company/Examine'

Vue.use(Router);

export default new Router({
  // base: '/admin/company/',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/operation',
      component: Container,
      children: [
        {
          path: '',
          name: 'operation',
          component: Operation,
        },
        {
          path: '/company',
          name: 'company',
          component: Company
        },
        {
          path: '/addCompany',
          name: 'addCompany',
          component: AddCompany
        },
        {
          path: '/examine',
          name: 'examine',
          component: Examine
        },


      ]
    },
    {
      path: '/project',
      component: Container,
      children: [
        {
          path: '',
          name: 'project',
          component: Project,
        },
        {
          path: 'twoHouse',
          name: 'twoHouse',
          component: TwoHouse,
        },
        {
          path: 'newHouse',
          name: 'newHouse',
          component: NewHouse,
        },
        {
          path: 'addProject',
          name: 'addProject',
          component: AddProject,
        },


        
      ]
    },
    {
      path: '/agent',
      component: Container,
      children: [
        {
          path: '',
          name: 'agent',
          component: Agent,
        },
        {
          path: '/agentList',
          name: 'agentList',
          component: AgentList,
        },
        {
          path: '/seeAgentInfo',
          name: 'seeAgentInfo',
          component: SeeAgentInfo,
        },
        {
          path: '/agentAppeal',
          name: 'agentAppeal',
          component: AgentAppeal,
        },



      ]
    },
    {
      path: '/transaction',
      component: Container,
      children: [
        {
          path: '',
          name: 'transaction',
          component: Transaction,
        },
      ]
    },
    {
      path: '/house',
      component: Container,
      children: [
        {
          path: '',
          name: 'house',
          component: House,
        },







        
      ]
    },





  ]
})
