import { createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Feed from '../views/Feed.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { 
    path: '/feed', 
    component: Feed,
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
      alert('Você precisa estar logado para acessar essa página!');
      next('/login');
    }
  } else {
    next();
  }
});

export default router;