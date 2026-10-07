# ANVIDA

Sitio web de ANVIDA, construido con Next.js y publicado como sitio estático en
Firebase Hosting.

## Desarrollo local

Instala las dependencias y ejecuta el servidor de desarrollo:

```powershell
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Despliegue en Firebase Hosting

El proyecto Firebase configurado es `anvida-medellin`. Next.js genera los
archivos estáticos en `out/`, que Firebase Hosting publica.

1. Autentícate con Firebase CLI: `firebase login`.
2. Genera el sitio estático: `npm run build`.
3. Despliega en Hosting: `firebase deploy --only hosting --project anvida-medellin`.

El sitio queda disponible en
[https://anvida-medellin.web.app](https://anvida-medellin.web.app).
