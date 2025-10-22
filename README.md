# 📦 Don Alejandro Store

> Sistema de gestión de facturas y clientes construido con Next.js 15 

## 📋 Descripción

Don Alejandro Store es una aplicación web moderna de gestión de facturas y clientes construida con Next.js 15, TypeScript y PostgreSQL. El sistema permite administrar clientes, crear y gestionar facturas, y visualizar métricas de negocio en un dashboard interactivo.

**📚 Basado en el Curso Oficial de Next.js**: Este proyecto fue desarrollado siguiendo el [curso oficial de Next.js Learn](https://nextjs.org/learn) (ACME Dashboard), adaptado y personalizado para "Don Alejandro Store"

## 🚀 Tecnologías Principales

- **Framework**: Next.js (latest) con App Router
- **Lenguaje**: TypeScript 5.7.3
- **Base de Datos**: PostgreSQL con `@vercel/postgres`
- **Autenticación**: NextAuth 5.0.0-beta.29 (actualmente deshabilitada)
- **Estilos**: Tailwind CSS 3.4.17
- **Validación**: Zod 3.25.17
- **Iconos**: Heroicons React 

## 📁 Estructura del Proyecto

```
app/
├── lib/
│   ├── definitions.ts    # Tipos TypeScript del sistema
│   ├── data.ts          # Capa de acceso a datos
│   └── actions.ts       # Server Actions
├── ui/
│   ├── dashboard/       # Componentes del dashboard
│   ├── customers/       # Tabla de clientes
│   └── invoices/        # Formularios de facturas
└── dashboard/
    ├── page.tsx         # Página principal del dashboard
    ├── invoices/        # Rutas de facturas
    └── customers/       # Rutas de clientes
```

## 🎯 Características Principales

### 1. Sistema de Tipos TypeScript

El proyecto utiliza un sistema de tipos centralizado que define todas las entidades del dominio :

- **User**: Usuarios autenticados del sistema
- **Customer**: Clientes que reciben facturas
- **Invoice**: Facturas con estados (pending/paid)
- **Revenue**: Datos de ingresos mensuales
- **InvoicesTable**: Vista de facturas con datos de clientes
- **CustomersTableType**: Vista de clientes con estadísticas agregadas 

### 2. Gestión de Facturas

Sistema completo CRUD para facturas con :
- Búsqueda por nombre, email, monto, fecha y estado
- Paginación (6 facturas por página)
- Creación y edición de facturas
- Eliminación de facturas
- Estados: pendiente o pagado

### 3. Gestión de Clientes

Tabla de clientes con información agregada que muestra  :
- Nombre y email del cliente
- Total de facturas
- Monto total pendiente
- Monto total pagado
- Diseño responsive (cards en móvil, tabla en desktop) 

### 4. Dashboard de Métricas

El dashboard muestra métricas clave del negocio<cite />:
- **Cobrado**: Total de facturas pagadas
- **Pendiente**: Total de facturas pendientes
- **Facturas Totales**: Cantidad total de facturas
- **Clientes Totales**: Cantidad total de clientes

## 🛠️ Instalación

```bash
# Clonar el repositorio
git clone https://github.com/RicardoH-0506/don-alejandro-store.git

# Instalar dependencias
pnpm install

# Configurar variables de entorno
# Crear archivo .env.local con:
# POSTGRES_URL=tu_url_de_postgres

# Ejecutar en desarrollo
pnpm dev

# Construir para producción
pnpm build
pnpm start
```

## 🔒 Seguridad y Autenticación

**⚠️ Nota Importante**: La autenticación está actualmente **deshabilitada** para facilitar la visualización rápida del proyecto. Todo el código de autenticación está comentado pero completamente implementado y listo para activarse cuando sea necesario.

### Sistema de Autenticación (Comentado)

El proyecto incluye un sistema completo de autenticación con NextAuth que está temporalmente deshabilitado:

- **LoginForm**: Formulario de login con validación de email/password
- **Middleware de protección**: Configurado para proteger rutas `/dashboard/*`
- **NextAuth 5.0.0-beta.29**: Sistema de sesiones y autenticación  
- **bcrypt**: Hash seguro de contraseñas
- **Server Actions**: Función `authenticate()` para validación de credenciales

Para activar la autenticación, simplemente descomenta el código en:
- `app/ui/login-form.tsx` - Componente de formulario de login
- `middleware.ts` - Protección de rutas
- `app/lib/actions.ts` - Acción de autenticación
- `auth.ts` y `auth.config.ts` - Configuración de NextAuth

### Seguridad Implementada

- Validación de datos con Zod 
- Conexiones SSL requeridas para PostgreSQL
- Preparado para contraseñas hasheadas con bcrypt

## 🎨 Características Técnicas

- **Server Components**: Renderizado del lado del servidor para mejor rendimiento
- **Server Actions**: Mutaciones de datos sin necesidad de API routes
- **Diseño Responsive**: Optimizado para móvil y desktop con Tailwind CSS
- **Type Safety**: TypeScript end-to-end con validación runtime usando Zod
- **Búsqueda con Debounce**: Búsqueda optimizada con 300ms de delay
- **Paginación**: Sistema de paginación para listas largas
- **Formateo de Moneda**: Montos almacenados en centavos y formateados para visualización


## 📝 Notas Adicionales

- El proyecto utiliza Turbopack para builds más rápidos en desarrollo 
- Los montos se almacenan en centavos en la base de datos y se formatean para visualización
- El middleware actual es un simple pass-through que permite acceso sin autenticación, ideal para demos
- Sistema de tipos completo con TypeScript para seguridad en tiempo de compilación

## 🚀 Demo

Visita la página principal en `/` para ver el landing page con el call-to-action que te lleva al dashboard .

---

**Desarrollado con ❤️ usando Next.js 15 y TypeScript**
**Basado en el [Curso Oficial de Next.js Learn](https://nextjs.org/learn)**


