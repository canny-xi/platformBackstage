import Vue from 'vue'
import Router from 'vue-router'
import Container from '@/page/Container'
import Login from '@/page/Login'
import Company from '@/page/Company'
import Project from '@/page/Project'
import Agent from '@/page/Agent'
import Operation from '@/page/Operation'
import AddCompany from '@/page/Company/AddCompany'
import Examine from '@/page/Company/Examine'
import ShowExamine from '@/page/Company/ShowExamine'


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
      path: '/company',
      component: Container,
      children: [
        {
          path: '',
          name: 'company',
          component: Company,
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
        {
          path: '/showExamine',
          name: 'showExamine',
          component: ShowExamine
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
      ]
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
      ]
    },




  ]
})
