# Guía de Prueba: Notificaciones de Nuevas Propiedades

## Resumen del Flujo

Cuando se publica una nueva propiedad, el sistema:

1. Busca usuarios con preferencias que coincidan con la propiedad
2. Crea notificaciones para esos usuarios
3. Envía notificaciones push (si están configuradas)
4. Emite notificaciones en tiempo real vía sockets

## Criterios de Coincidencia

Un usuario recibirá notificación si:

- **Provincia**: Tiene la provincia en sus preferencias O no tiene provincias seleccionadas (acepta todas)
- **Tipo de Operación**: Tiene el operationType en sus preferencias O no tiene operationTypes seleccionados (acepta todos)

## Usuario de Prueba Existente

**Usuario con preferencias configuradas:**

- **Email**: `prueba@gmail.com`
- **Nombre**: Prueba
- **Preferencias**:
  - Provincias: Arani, Arque
  - OperationType: Alquiler

**Para probar con este usuario:**
Crea una propiedad con:

- Provincia: "Arani" o "Arque"
- OperationType: "Alquiler" (ID: f7b28299-7f4a-4934-b7aa-9c11771af638)

## Ejemplo de Datos para Probar

### Usuario Existente con Preferencias

**Usuario: `prueba@gmail.com`**

- **Preferencias configuradas**:
  - Provincias: **Arani**, **Arque**
  - OperationType: **Alquiler**

### Paso 1: Crear una Propiedad que Coincida

**Propiedad de Prueba (usando el formulario o API):**

```json
{
  "title": "Casa en Arani - Prueba de Notificaciones",
  "description": "Casa amplia para alquiler en Arani",
  "address": "Av. Principal 123",
  "city": "Arani",
  "provinceId": "86c115f1-82d9-422c-8d8a-c22cf4ff334b",
  "operationTypeId": "f7b28299-7f4a-4934-b7aa-9c11771af638",
  "propertyTypeId": "9858622c-09d2-4136-b8cd-17060462c260",
  "price": 2500,
  "areaM2": 80,
  "latitude": -17.3895,
  "longitude": -66.1568,
  "paymentId": "b417c832-6a9e-4e8d-a1f5-30b05b6823d5"
}
```

**Resultado esperado**: El usuario `prueba@gmail.com` debería recibir una notificación.

### Paso 2: Crear una Propiedad que NO Coincida

**Propiedad de Prueba (diferente provincia):**

```json
{
  "title": "Casa en Bolívar - NO debería notificar",
  "description": "Casa en Bolívar",
  "address": "Av. Principal 123",
  "city": "Bolívar",
  "provinceId": "0939abf5-cd29-4a24-b693-1722f8408bcc",
  "operationTypeId": "f7b28299-7f4a-4934-b7aa-9c11771af638",
  "propertyTypeId": "9858622c-09d2-4136-b8cd-17060462c260",
  "price": 2500,
  "areaM2": 80,
  "latitude": -17.3895,
  "longitude": -66.1568,
  "paymentId": "b417c832-6a9e-4e8d-a1f5-30b05b6823d5"
}
```

**Resultado esperado**: El usuario `prueba@gmail.com` NO debería recibir notificación (porque tiene Arani/Arque, no Bolívar).

### Paso 3: Verificar Notificaciones

Después de crear la propiedad, verificar en la tabla `notifications`:

```sql
SELECT
  n.id,
  n."userId",
  u.email,
  u."fullName",
  n.type,
  n.title,
  n.content,
  n.read,
  n."createdAt"
FROM notifications n
JOIN users u ON n."userId" = u.id
WHERE n.type = 'NEW_PROPERTY'
ORDER BY n."createdAt" DESC
LIMIT 10;
```

## IDs de Referencia

### Provincias Disponibles:

- **Bolívar**: `0939abf5-cd29-4a24-b693-1722f8408bcc`
- **Ayopaya**: `1d907d1d-339f-4c3e-b2d3-5ff86d74c0ad`
- **Arani**: `86c115f1-82d9-422c-8d8a-c22cf4ff334b`

### Tipos de Operación:

- **Alquiler**: `f7b28299-7f4a-4934-b7aa-9c11771af638`
- **Anticretico**: `49edb388-c964-42d1-82e9-f90482f9613d`

### Tipos de Propiedad:

- **Casa**: `9858622c-09d2-4136-b8cd-17060462c260`
- **Departamento**: `66a2a21a-211d-47b9-99dd-97a109bbb6e5`

### Tipos de Pago:

- **Diario**: `b417c832-6a9e-4e8d-a1f5-30b05b6823d4`
- **Semanal**: `b417c832-6a9e-4e8d-a1f5-30b05b6823d8`
- **Mensual**: `b417c832-6a9e-4e8d-a1f5-30b05b6823d5`
- **Anual**: `b417c832-6a9e-4e8d-a1f5-30b05b6823d6`

## Casos de Prueba

### Caso 1: Usuario con Preferencias Específicas

- Usuario tiene: Provincia "Bolívar" + OperationType "Alquiler"
- Propiedad: Provincia "Bolívar" + OperationType "Alquiler"
- **Resultado esperado**: ✅ Recibe notificación

### Caso 2: Usuario sin Preferencias

- Usuario no tiene preferencias configuradas
- Propiedad: Cualquiera
- **Resultado esperado**: ✅ Recibe notificación (acepta todas)

### Caso 3: Usuario con Provincia Diferente

- Usuario tiene: Provincia "Ayopaya"
- Propiedad: Provincia "Bolívar"
- **Resultado esperado**: ❌ NO recibe notificación

### Caso 4: Usuario con OperationType Diferente

- Usuario tiene: OperationType "Anticretico"
- Propiedad: OperationType "Alquiler"
- **Resultado esperado**: ❌ NO recibe notificación

## Verificación en el Backend

Revisar los logs del servidor cuando se crea una propiedad:

- Debe mostrar: `[CreatePropertyUseCase] Propiedad creada: ...`
- Debe mostrar: `[CreatePropertyUseCase] Provincia: ... OperationTypeId: ...`
- Debe mostrar: `[CreatePropertyUseCase] Usuarios encontrados: X [array de IDs]`
- Debe mostrar: `[CreatePropertyUseCase] Usuarios a notificar: Y [array de IDs]`
- Si hay error: "Error notificando a usuarios: ..."

### Verificar Notificaciones Creadas

```sql
-- Ver todas las notificaciones de nuevas propiedades
SELECT
  n.id,
  n."userId",
  u.email,
  u."fullName",
  n.type,
  n.title,
  n.content,
  n.read,
  n."createdAt",
  n.metadata->>'propertyId' as property_id
FROM notifications n
JOIN users u ON n."userId" = u.id
WHERE n.type = 'NEW_PROPERTY'
ORDER BY n."createdAt" DESC
LIMIT 10;
```

## Verificación en el Frontend

El usuario debe ver la notificación en:

- La pantalla de notificaciones
- Push notification (si está configurado)
- Tiempo real vía sockets (si está conectado)

## Resumen de la Lógica de Búsqueda

### Cuando hay Provincia y OperationType:

- Busca usuarios que tengan esa provincia O sin provincias seleccionadas
- Y que tengan ese operationType O sin operationTypes seleccionados

### Cuando solo hay Provincia:

- Busca usuarios que tengan esa provincia O sin provincias seleccionadas
- No filtra por operationType (acepta todos)

### Cuando solo hay OperationType:

- Busca usuarios que tengan ese operationType O sin operationTypes seleccionados
- No filtra por provincia (acepta todas)

### Cuando no hay filtros:

- Busca usuarios sin preferencias de provincia (acepta todas)
- No filtra por operationType (acepta todos)
