# 🎓 Sistema de Gestión Escolar MVP (Django + Angular + MongoDB)

Bienvenido al repositorio oficial del **MVP de Gestión Escolar**. Esta plataforma integral ha sido diseñada para facilitar la comunicación y administración académica entre la institución, los docentes y los apoderados.

## 🚀 Características Principales

### 🔐 Autenticación y Roles
*   **Sistema Multi-rol**: Soporte nativo para Administradores, Docentes y Apoderados.
*   **Seguridad JWT**: Autenticación persistente mediante JSON Web Tokens.
*   **Perfiles Personalizados**: Redirección automática según el rol del usuario.

### 📅 Módulos Académicos
*   **Asistencia**: Registro masivo de presencias diario por curso.
*   **Evaluaciones**: Calendario interactivo de pruebas y trabajos prácticos.
*   **Anotaciones (Hoja de Vida)**: Bitácora conductual con indicadores visuales (Positivas/Negativas).
*   **Reuniones y Citaciones**: Gestión de asambleas presenciales y enlaces directos a reuniones virtuales (Zoom/Meet).

## 🛠️ Stack Tecnológico

| Componente | Tecnología |
| :--- | :--- |
| **Backend** | Django 6.0.3 + Django REST Framework |
| **Frontend** | Angular + Angular Material (Tema Azure) |
| **Base de Datos** | MongoDB Atlas (NoSQL) |
| **Seguridad** | SimpleJWT + CORS Headers |

## 📦 Instalación y Configuración

### 1. Backend (Django)
```powershell
cd backend
# Crear venv
python -m venv venv
.\venv\Scripts\activate
# Instalar dependencias
pip install django djangorestframework django-cors-headers djangorestframework-simplejwt django-mongodb-backend pymongo python-dotenv
# Configurar .env
# Crear un archivo .env con: MONGODB_PASSWORD=tu_password
# Ejecutar migraciones
python manage.py makemigrations
python manage.py migrate
# Iniciar servidor
python manage.py runserver
```

### 2. Frontend (Angular)
```powershell
cd frontend/escolar-frontend
# Instalar dependencias
npm install
# Iniciar servidor de desarrollo
ng serve --port 4205
```

## 🏗️ Estructura del Proyecto

```text
/backend
  ├── escolar_api/      # Configuración del proyecto y App de escolar_api
  ├── venv/             # Entorno virtual
  └── manage.py         # Punto de entrada Django
/frontend
  └── escolar-frontend/ # Aplicación Angular con componentes por módulo
```

## 💡 Pruebas Sugeridas
1.  **Login**: Acceder a `http://localhost:4205` con credenciales creadas en el admin.
2.  **Docente**: Registrar una anotación para un alumno.
3.  **Apoderado**: Verificar que la anotación aparezca en el panel con su color correspondiente (Verde/Rojo).

---
**Desarrollado como parte del MVP de Sistema de Gestión Escolar.** 🎓🚀
