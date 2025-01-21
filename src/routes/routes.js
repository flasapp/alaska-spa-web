import { wrap } from 'svelte-spa-router/wrap'
import Home from '@/routes/home/Home.svelte';

export const routes = {
  '/': () => Home,
	'/about': () => import('@/routes/schedule/Schedule.svelte'),
	'/delivery': wrap({
			asyncComponent: () => import('@/routes/schedule/Schedule.svelte')
		}),
	// '/delivery': wrpa({asyncComponent:() => import('@/routes/schedule/Schedule.svelte').catch((e) => console.error('Failed to load Home:', e)}))
};