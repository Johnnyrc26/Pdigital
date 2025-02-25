# **Porsche Digital FAQ Service**

Este proyecto es un **prototipo** de servicio de preguntas frecuentes (**FAQ**) desarrollado para la aplicación móvil de **Porsche Digital**. Su objetivo es **centralizar la información** más relevante sobre los vehículos Porsche, proporcionando respuestas rápidas sin necesidad de contactar con el servicio al cliente, lo que contribuye a **reducir costos operativos**. La idea fue seleccionada para un **challenge de innovación** en Porsche Digital.

## 🚀 **Características Principales**
- 📌 **Búsqueda Inteligente**: Los usuarios pueden buscar preguntas por palabras clave o navegar por categorías predefinidas.
- 🔧 **Personalización por Porsche ID**: Las respuestas se adaptan según el modelo de coche del usuario.
- ⚡ **Independencia**: Se diseñó como un **microservicio independiente** dentro de la aplicación móvil.
- 🌐 **Backend con REST API**: Desarrollado con **Express.js y Node.js** para gestionar las consultas y respuestas de forma eficiente.
- 🛠️ **Frontend con React Native y TypeScript**: Usando **Zustand** para la gestión de estado y **React Query** para las solicitudes de datos.
- 🎨 **UI basada en Porsche Design System**: Se siguieron las pautas de diseño de [Porsche Design System](https://designsystem.porsche.com/v3/).

---

## 🏗️ **Arquitectura del Proyecto**

### 📌 **Stack Tecnológico**
- **Frontend:** React Native + TypeScript
- **Gestión de Estado:** Zustand
- **Solicitudes HTTP:** React Query
- **Backend:** Node.js + Express.js (API REST)
- **Base de Datos:** No aplica (respuestas gestionadas manualmente por privacidad de datos)

### 📌 **Estructura del Proyecto**
```bash
porsche-faq-service/
│── frontend/       # Aplicación en React Native
│   ├── src/
│   │   ├── components/  # Componentes reutilizables
│   │   ├── hooks/       # Hooks personalizados
│   │   ├── services/    # Llamadas a la API (React Query)
│   │   ├── store/       # Estado global (Zustand)
│   │   └── screens/     # Pantallas principales
│   └── package.json    # Dependencias de frontend
│
│── backend/        # API en Node.js con Express.js
│   ├── routes/     # Rutas de la API
│   ├── controllers/ # Lógica de negocio
│   ├── middleware/  # Middleware para autenticación (si aplica)
│   ├── utils/       # Utilidades
│   ├── server.js    # Configuración del servidor
│   └── package.json # Dependencias de backend
│
└── README.md       # Documentación del proyecto
```

---

## 📦 **Instalación y Ejecución**
### 🔧 **Requisitos Previos**
- **Node.js 16+**
- **Yarn o npm**

### 🚀 **Pasos para Ejecutar Localmente**
#### **1️⃣ Clonar el Repositorio**
```bash
git clone https://github.com/tuusuario/porsche-faq-service.git
cd porsche-faq-service
```
#### **2️⃣ Instalar Dependencias**
```bash
cd frontend && npm install
cd ../backend && npm install
```
#### **3️⃣ Ejecutar el Backend**
```bash
cd backend
npm run dev
```
#### **4️⃣ Ejecutar el Frontend**
```bash
cd frontend
npm start
```

---

## 📌 **API Endpoints**
### **GET /faq/general**
📍 **Obtiene preguntas frecuentes generales.**
```json
[
  { "id": 1, "question": "¿Cómo actualizar el software de mi Porsche?", "answer": "Dirígete a Configuración > Actualización de software." }
]
```

### **GET /faq/car/:id**
📍 **Obtiene preguntas frecuentes específicas del modelo del coche.**
```json
[
  { "id": 1, "model": "911", "question": "¿Cómo activar el modo Sport?", "answer": "Presiona el botón Sport en la consola central." }
]
```

---

## 📜 **Licencia**
Este proyecto fue desarrollado como parte de **Porsche Digital** y sigue sus términos de uso internos.

---

### 📌 **Próximos Pasos**
✅ **Mejorar la gestión de preguntas dinámicas en tiempo real.**  
✅ **Implementar un sistema de caching para mejorar el rendimiento.**  
✅ **Añadir pruebas unitarias y de integración con Jest o Cypress.**  

---



<img width="1080" alt="Johnny Rojas Cifra" src="https://github.com/user-attachments/assets/dea1c4ed-534b-4e6f-8b4a-cdbf833f65e6" />
