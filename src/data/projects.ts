import type { Project } from '../types'
import solarSimImage from '../assets/images/solar-sim-images.jpeg'

export const projects: Project[] = [
	{
		id: 'solar-sim',
		title: 'SolarSim',
		slug: 'solar-sim',
		description:
			'Aplicación web para simular la instalación de paneles solares en viviendas colombianas y estimar energía, ahorro, inversión y retorno.',
		problem:
			'Estimar de forma clara la viabilidad económica y energética de una instalación solar residencial.',
		solution:
			'Una calculadora que guarda simulaciones, consulta el historial y genera reportes PDF.',
		technologies: ['PHP', 'MySQL/MariaDB', 'JavaScript', 'HTML', 'CSS', 'Chart.js'],
		image: solarSimImage,
		demoUrl: 'https://solar-sim.site.je/',
		repositoryUrl: 'https://github.com/emmapadiila/solar-sim',
		featured: true,
	},
]
