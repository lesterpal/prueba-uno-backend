```markdown
# 🚗 TU VEHICULO

Sistema backend para la gestión de alquiler de vehículos. Permite registrar, consultar, actualizar y eliminar información relacionada con los vehículos alquilados, almacenando todos los datos en una base de datos NoSQL (MongoDB).

---

## 📌 Descripción

Este proyecto consiste en un software para alquiler de vehículos donde el usuario puede visualizar y gestionar información clave almacenada en MongoDB, incluyendo:

- Placa del vehículo  
- Nombre de la persona que alquila  
- Tipo de vehículo seleccionado  
- Tiempo de alquiler  
- Precio del servicio  

Está diseñado como una API REST enfocada en eficiencia, escalabilidad y claridad estructural.

---

## 🛠️ Tecnologías utilizadas

Backend desarrollado con:

- **Node.js**
- **Express.js**
- **MongoDB** (Base de datos NoSQL)
- **JSON** (Intercambio de datos)

---

## ⚙️ Funcionalidades principales

Operaciones CRUD completas:

- ✅ Crear un registro de alquiler
- 🔍 Consultar vehículos alquilados
- ✏️ Actualizar información del alquiler
- ❌ Eliminar registros

---

## 📡 Endpoints principales

| Método | Endpoint            | Descripción                         |
|--------|--------------------|-------------------------------------|
| GET    | /api/vehiculos     | Obtener todos los registros         |
| GET    | /api/vehiculos/:id | Obtener un vehículo por ID          |
| POST   | /api/vehiculos     | Crear nuevo registro de alquiler    |
| PUT    | /api/vehiculos/:id | Actualizar un registro existente    |
| DELETE | /api/vehiculos/:id | Eliminar un registro                |

---

## 📁 Estructura del proyecto

```

backend/
│
├── src/
│   ├── config/        # Configuración de la base de datos
│   ├── controllers/   # Lógica de negocio
│   ├── models/        # Esquemas de MongoDB
│   └── routers/       # Definición de rutas
│
└── server.js          # Punto de entrada del servidor

````

---

## 🚀 Instalación (Backend)

1. Clonar el repositorio:

```bash
git clone <url-del-repositorio>
cd backend
````

2. Instalar dependencias:

```bash
npm install
```

3. Configurar variables de entorno:

Crear un archivo `.env` en la raíz del proyecto:

```env
DB_CONNECTION_STRING
```

4. Iniciar el servidor:

```bash
npm run dev
```
Servidor disponible en:

```
http://localhost:3200
```
---

## 🔐 Variables de entorno

| Variable             | Descripción                  |
| -------------------- | ---------------------------- |
| DB_CONNECTION_STRING | Cadena de conexión a MongoDB |

---

## ⚠️ Notas importantes

* Asegúrate de tener MongoDB en ejecución antes de iniciar el servidor.
* El proyecto sigue una arquitectura modular para facilitar mantenimiento y escalabilidad.
* Se recomienda usar herramientas como **Postman** para probar los endpoints.
* Validar correctamente los datos enviados en cada petición.

---


## 📄 Licencia

Este proyecto es de uso educativo.

## 👨‍💻 Autor
## Software Developer

Built by [LESTER](https://github.com/lesterpal) ©️ 2026
Found a bug or have an idea? [Contact me](www.linkedin.com/in/lester-palacio-b7a63b2b0).

```
