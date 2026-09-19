import type { Certificate } from '../types'

import basicProgramming from '../assets/documents/certificates/Programación Nivel Básico.pdf'
import systemsTechnician from '../assets/documents/certificates/TÉCNICO EN SISTEMAS.pdf'
import pythonControl from '../assets/documents/certificates/VARIABLES Y ESTRUCTURAS DE CONTROL EN PYTHON..pdf'
import databases from '../assets/documents/certificates/BASES DE DATOS GENERALIDADES Y SISTEMAS DE GESTION.pdf'

export const certificates: Certificate[] = [
  {
    id: 'basic-programming',
    title: 'Programación Nivel Básico',
    institution:
      'Ministerio TIC, Universidad Libre y Etraining - Programa Talento Tech',
    date: '13 de agosto de 2025',
    document: basicProgramming,
  },
  {
    id: 'systems-technician',
    title: 'Técnico en Sistemas',
    institution: 'Servicio Nacional de Aprendizaje (SENA), Regional Cesar',
    date: '6 de diciembre de 2022',
    document: systemsTechnician,
  },
  {
    id: 'python-control-structures',
    title: 'Variables y Estructuras de Control en Python',
    institution: 'Servicio Nacional de Aprendizaje (SENA), Regional Atlántico',
    date: '16 de mayo de 2025',
    document: pythonControl,
  },
  {
    id: 'database-management',
    title: 'Bases de Datos Generalidades y Sistemas de Gestión',
    institution: 'Servicio Nacional de Aprendizaje (SENA), Regional Huila',
    date: '6 de octubre de 2025',
    document: databases,
  },
]
