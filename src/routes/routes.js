import { createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Dashboard from '../views/Dashboard.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { 
    path: '/dashboard', 
    component: Dashboard,
    meta: {
      requiresAuth: true
    } 
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
}

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()){
      next();
    } else {
      next('/login');
    }
  } else {
    next();
  }
});

export default router;