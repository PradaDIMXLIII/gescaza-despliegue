# ESTUDIO DE VIABILIDAD DEL SISTEMA

## **1. ESTABLECIMIENTO DEL ALCANCE DEL SISTEMA**
### **1.1 Estudio de la solicitud** 

        ***1.1.1 Descripción General del Sistema***

Actualmente el cliente (Miguel Prada Alonso) no dispone de ningún sistema que le permita la gestión de los eventos relacionados con la actividad deportiva de caza.

Dicho cliente quiere disponer de una aplicación multiplataforma y multidisitivo que le permita gestionar, de forma fácil e intuitiva, dichos eventos, además quiere gestionar también los datos relacionados con dicha actividad deportiva (armas, animales, seguros, vehículos, tarjetas de invitación).

El sistema le permitirá gestionar dichos eventos a través de una agenda. De tal manera, que visualizando dicha agenda, y haciendo click sobre cualquier evento, podrá acceder a él para consultarlo, modificarlo o incluso eliminarlo.

        ***1.1.2. Catálogo de objetivos del EVS***

1. Analizar y detectar los requisitos requeridos por el cliente.
2. Estudiar las posibilidades de software libre o de aplicaciones existentes en el mercado que cumplan, total o parcialmente, con los requisitos del cliente.
3. Estudiar y analizar las posibilidades que ofrecen los Sistemas con los que tenga que integrarse la aplicación.
2. Conocer las limitaciones técnicas y legales para el trato de información personal de carácter sensible protegida por la Ley Orgánica de Protección de Datos (LOPD).
4. Delimitar el catálogo de requisitos.

        ***1.1.3. Alcance.***

La aplicación dará servicio a nuestro cliente o a cualquier persona que practique la caza.

        ***1.1.4. Restricciones.***

Se contemplan las restricciones técnicas, tanto de hardware como de software, así como restricciones legales que deben estar conforme a la legislación.

### **1.2.- IDENTIFICACIÓN DEL ALCANCE DEL SISTEMA**

Se va a implementar una aplicación web que pueda gestionar y explotar los eventos deportivos de caza, así como los datos relacionados con dicha actividad.

El sistema será accesible desde Internet, siendo necesario la autenticación del usuario.

### **1.3.- ESPECIFICACIÓN DEL ALCANCE DEL EVS**

El objetivo que se pretende es estudiar en profundidad la situación actual, para así averiguar si es posible crear un sistema informático que satisfaga las necesidades del cliente. Para ello, se llevará a cabo un proceso de estudio para evaluar su viabilidad y, en su caso, ofrecer diferentes alternativas de solución.

Los usuarios que participan en el EVS son:

- Jefe de Proyecto: responsable del estudio y de las posibles alternativas que cumplan con los requisitos especificados por el cliente. 
- Equipo de Desarrollo: Capitán D. Miguel Prada Muñoz, Alumno del DIM XLIII. Realizará un estudio de la necesidad y aportará alternativas de solución.
- Scrum Master: Capitán D. Miguel Prada Muñoz, Alumno del DIM XLIII.
- Cliente: D. Miguel Prada Alonso.
- Tutor del trabajo: Comandante D. Ismael Lanchas Díaz.
- Resto de profesores del Departamento de Sistemas de Información y Ciberdefensa de la ACING: Asesoramiento y apoyo.

Se seguirá el plan de trabajo dado por las [_Normas_ _para_ _el_ _desarrollo_ _de_ _la_ _prácticas_ _en_ _las_ _UCO,S_ _del_ _curso_ _de_ _Diplomado_ _en_ _Informática_ _Militar_ _XLIII_](https://git.institutomilitar.com/Awes0meM4n/normas-dim).





# **2.- ESTUDIO DE LA SITUACIÓN ACTUAL**

## **2.1.- VALORACIÓN DEL ESTUDIO DE LA SITUACIÓN ACTUAL**

Actualmente no existe ningún sistema que gestione los datos y los eventos deportivos de caza del cliente. 

## **2.2.- IDENTIFICACIÓN DE LOS USUARIOS PARTICIPANTES EN EL ESTUDIO DE LA SITUACIÓN ACTUAL.**

Los usuarios participantes son:

| USUARIO |  NOMBRE |
---------| :----- 
<a id="usuarios"></a>
| Cliente/Propietario| D. Miguel Prada Alonso ||
| Tutor | Comandante D. Ismael Lanchas Díaz |
| Scrum Master | Capitán D. Miguel Prada Muñoz |
| Equipo de Desarrollo | Capitán D. Miguel Prada Muñoz |

El **perfil** de los usuarios es:
- Perfil **administrador**: Responsable de la gestión, administración y mantenimiento de la aplicación, incluyendo la gestión de los usuarios.
- Perfil **usuario**: Cualquiera, con acceso a Internet. 

## **2.3.- DESCRIPCIÓN DE LOS SISTEMAS DE INFORMACIÓN EXISTENTES**

El cliente no dispone de ningún sistema de gestión de datos y eventos deportivos de caza.

## **2.4.- REALIZACIÓN DEL DIAGNÓSTICO DE LA SITUACIÓN ACTUAL**

El cliente quiere disponer de un sistema que le permita la gestión de datos y eventos deportivos de caza.

Dicha aplicación deberá ser en entorno web, para facilitar la conectividad y acceso multidispositivo, mediante identificación de usuarios y con un Sistema Gestor de Base de Datos centralizado y seguro, que garantice la integridad y seguridad de dichos datos.


# **3.- DEFINICIÓN DE LOS REQUISITOS DEL SISTEMA**
        - [Especificación del Sistema](Especificacion_Sistema)
        - [Requisitos detectados](Requisitos)



# **4.- ESTUDIO DE LAS ALTERNATIVAS DE SOLUCIÓN**

## **4.1 PRESELECCIÓN DE LAS ALTERNATIVAS DE SOLUCIÓN:**

- **ALTERNATIVA 1:**
Aplicación integral propietaria que cumpla con todos los requisitos solicitados. Siendo desplegada en una plataforma de desarrollo en la nube. 

- **ALTERNATIVA 2:** App comercial "MyHunt", para dispotivos Android ó IOS. 

- **ALTERNATIVA 3:** App comercial "Micaza", De descarga gratuita en iOS y Android. La aplicación ofrece un buscador de cotos y campos de tiro con información de los mismos y cómo llegar; un buscador de cacerías con filtros por tipo de caza, modalidad o especie; un escáner con alertas para llevar toda la documentación en el móvil; un chat para comunicarse con otros cazadores, con el coto u otros usuarios; un tablón donde se publican los avisos del coto a todos sus miembros o clientes; un calendario donde se integran todos los eventos del usuario; toda la información actualizada sobre vedas y normativa; una tienda online para compra de accesorios de caza; acceso directo a Organizadores, servicios de caza nacionales e internacionales y a subastas de caza, también la posibilidad de federarse, contratar licencias y seguros de caza, todo de forma online.

- **ALTERNATIVA 4:** Aplicación híbrida con una API que gestiona eventos en una agenda. Siendo desplegada en una plataforma de desarrollo en la nube.


## **4.2 DESCRIPCION DE LAS ALTERNATIVAS DE SOLUCION** 

### **4.2.1 ALTERNATIVA 1:** ###

#### ALTERNATIVA 1: APLICACION DE DESARROLLO PROPIO
Desarrollo de una aplicación web en lenguaje JAVA y SGBD SQL, separando la capa de presentación de la capa de datos. 

1. Definición de la Arquitectura y tecnología.

    - **Modelo por capas**:
        - Capa de presentación: Angular
        - Capa de negocio: Java, Gradle y Spring.
        - Capa de datos: Heroku como Base de Datos en la nube.
    
    - **Desarrollo y pruebas**:
        - [GitEIE](https://git.institutomilitar.com/)/[GitHub](https://github.com/) para control de versiones, repositorio de documentación (wikis) y gestión de tareas (kanbans).
        - [Heroku](https://www.heroku.com/) como servidor de aplicaciones.
        - [GitHub pages](https://pages.github.com/) como servidor Web.
        - [Heroku](https://www.heroku.com/postgres) como Base de Datos en la nube.


1. Valoración económica.

Los costes estimados en el desarrollo de la aplicación son los siguientes:

    - Mano de obra: full stack developper (250€/día)
    - Hardware: no es necesario.
    - Software: open source.
    - Servicios Externos: Heroku.
    

| **Concepto** | **Fuente** | **Cálculo**| **Coste**|
|----|----|----|----|
| Alquiler Dominio WEB | [arsys](https://www.arsys.es/dominios) | 1 año | 10 € |
| Heroku Datos| [Hobby Básico](https://www.heroku.com/pricing#data-services/) | 1 mes | $9  |
|Heroku aplicación | [Heroku Free and Hobby](https://www.heroku.com/pricing#data-services) | 1 mes | $0 |
|Servidor web | [GitHub pages](https://pages.github.com/) | 1 mes | $0 |
|Gestión de usuarios| [***wwwhisper***](https://elements.heroku.com/addons/wwwhisper) | 1 mes | $0 |
| Mano de obra  | 1 Full Stack Developer  | 3 meses (60 días) |15.000 € |
|  |  |  **Total** | **15.118 €**



1. Estudio de la Inversión.
Esta alternativa supone el mayor avance tecnológico ya se provee al cliente de una herramienta que cumple con todas sus necesidades.
La principal inversión de esta alternativa es de recursos humanos, por ser una aplicación creada _ad-hoc_. La interfaz debe ser intuitiva y su uso sencillo.

Todo el software que se utilice será código abierto y con licencias libres.


1. Estudio de los Riesgos.
- El mayor riesgo de esta alternativa es cumplir con el plazo máximo de implementación de la apliacación, ya que debe cumplir con todos los requisitos impuestos por el cliente.

- Plataforma [Heroku](https://www.heroku.com/):
  - **Tipo de Aplicación**: 
      - [***
      Free y Hobby***](https://www.heroku.com/pricing) ($0 al mes): aplicaciones no comerciales, como prueba de conceptos, MVP y proyectos personales.
      - [***Producción***](https://www.heroku.com/pricing) ($25 al mes): aplicaciones centradas en el negocio, como API y aplicaciones web internas o de cara al cliente.

   - **Contenedores**: Heroku ejecuta la aplicación en contenedores Linux livianos y aislados llamados ***dynos***.
       - [***Libre***](https://www.heroku.com/pricing) ($0): duerme después de 30 minutos de inactividad, 512 MB RAM.
       - [***Hobby***](https://www.heroku.com/pricing) ($7 al mes): pequeños proyectos y conceptos paralelos, 512 MB RAM.

   - **Servicio de Datos**, ***Heroku Postgres***: proporciona una base de datos SQL administrada como un servicio: 
       - [***Desarrollador aficionado***](https://www.heroku.com/pricing) (0$ al mes): para uso estudiantil, personal y aficionado. Límite de filas 10k, 20 conexiones. 
       - [***Hobby Básico***](https://www.heroku.com/pricing) ($9 al mes): pequeños proyectos paralelos y prueba de conceptos, límite de filas 10M, 20 conexiones.
   - **Heroku Redis**: es un servicio de valor clave en memoria totalmente administrado para almacenar datos que cambian con frecuencia y requieren un acceso rápido.
       - [***Desarrollador aficionado***] (https://www.heroku.com/pricing) (0$ al mes): analítica de desempeño, métricas de registro de Redis, 25 MB RAM, 20 contactos.
       - [***Prima 0***](https://www.heroku.com/pricing) ($15 al mes): 50MB RAM, 40 conexiones, alta disponibilidad con conmutación por error de baja latencia.
   - **Complementos**: los complementos de Heroku son servicios en la nube de terceros totalmente administrados que pueden utilizar para desarrollar, operar y administrar las aplicaciones.

       - **Gestión de usuarios**: 
          - [***wwwhisper***](https://elements.heroku.com/addons/wwwhisper) (a partir de $0 al mes): para restringir el acceso a la aplicación sin contraseña. Simplemente hay que especificar las direcciones de correo electrónico de los usuarios a los que se les debe permitir el acceso. Los tokens de acceso se envían a los correos electrónicos ingresados por los visitantes y solo los propietarios de los correos electrónicos permitidos tienen acceso.

        - **Pruebas**:
          - [***Parrot QA***](https://elements.heroku.com/addons/parrot) (desde $9 al mes): para probar el sitio web. 

Tras el estudio y análisis de la arquitectura y tecnología necesaria para implementar el sistema, se han detectado los siguientes **riesgos**, con su respectiva probabilidad e impacto:

    1.1 Costes derivados de los servicios Heroku.

	    - PROBABILIDAD: Media
	    - IMPACTO: Alto

    1.2 No implementar el Proyecto en el tiempo establecido.

	    - PROBABILIDAD: Baja
	    - IMPACTO: Alto

    1.3 Heroku no proporcione los servicios registrados/contratados.

	    - PROBABILIDAD: Baja
	    - IMPACTO: Alto

La probabilidad de materializarse el proyecto es alta: una vez analizado, la materialización del proyecto resulta viable, contando con los medios técnicos y humanos para ello.



1. Licenciamiento de los distintos subsistemas que forman el producto.

No existe.



1. Planificación de la alternativa.
Estimación de carga de trabajo y plazos de tiempo asociados.
    - Estudio de la viabilidad del sistema: 5 días
    - Especificación de requisitos: 3 días
    - Definición del producto mínimo viable: 2 día
    - Preproducción:
        * Sprint 1: 10 días
        * Sprint 2: 20 días
    - Producción y mantenimiento: 20 días



### **4.2.2 ALTERNATIVA 2:** ###

#### ALTERNATIVA 2: APP MyHunt
[![Myhunt](/img/MyHunt.png)](https://www.hunterco.de/es/functions/)

App en IOS y Android.

1. Definición de la Arquitectura y tecnología.
   
   Herramienta diseñada por la compañía Artemisa Hunting Technologies. Entre las funcionalidades que incorpora se encuentra la geolocalización de cotos, iconos y usuarios, el resgistro de la actividad de los cazadores en cualquier modalidad (rececho, aguardo, montería, batida, etc), la creación de comunidades de cazadores, la reserva de alojamientos en ubicaciones cercanas y el almacenamiento tracks de recechos.

- La versión gratuita ofrece las siguientes funcionalidades:

MAPEO DE LUGARES DE CAZA FAVORITOS.
- Mapea lugares de caza favoritos en el mapa mundial. También disponible sin conexión.
- Marca las instalaciones y los puntos de interés importantes, como senderos, puestos de espera, cebaderos, cámaras y mucho más, con descripciones y fotos.
- El rastreo GPS en tiempo real de la ubicación.
- Gestiona los cotos ya sea en solitario o en grupo, creando listas de tareas para cada una de las instalaciones.

ORGANIZA JORNADAS DE CAZA EN SOLITARIO O EN GRUPO.
- Planifica salidas directamente en la app y puede invitar a tus compañeros de caza a unirse a tus jornadas.
- Ver la ubicación y la actividad de los compañeros de caza en directo durante las cacerías.

DOCUMENTA LAS SALIDAS EN EL DIARIO DE CAZA.
- Mantiene un registro detallado y 100% seguro de todos los avistamientos y batidas de caza, así como de los disparos y capturas en el mapa y en el diario de caza digital.
- Escoge entre una selección de más de 300 especies diferentes adaptadas a tu región.
- Exporta tu informe de capturas por correo electrónico en diferentes formatos. P.ej: Excel.

PREVISIÓN METEOROLÓGICA PARA LA CAZA
- Recibe previsiones meteorológicas detalladas para cada uno de tus lugares de caza, incluyendo:
- Información sobre el viento, luminosidad y la actividad cinegética.
- Radar de lluvia y alertas automáticas de tormenta y mal tiempo en tu ubicación.

FUNCIONES CON MYHUNT PRO
- Reserva instalaciones en tu coto de caza para ti y los miembros de tu grupo de caza.
- Crea instalaciones personalizadas.
- Marqua senderos y rutas a través de tus lugares de caza para mayor seguridad.
- Filtra tus lugares de caza por período, especie, instalaciones y ruta.
- Aproveche el mapa híbrido que le muestra la topografía y tenga su distancia de tiro de un vistazo.



1. Estimación de carga de trabajo y plazos de tiempo asociados.
App en explotación.


1. Valoración económica.
    - Mano de obra: no es necesario.
    - Hardware: es necesario dispositivo móvil para acceder a la aplicación.
    - Software: existen dos versiones, MyHunt (gratuita) y MyHunt Pro.
    - Servicios Externos: no es necesario.


| **Concepto** | **Cálculo**| **Coste**|
|----|----|----|
MyHunt Pro | Mensual | 7,99€ |
MyHunt Pro| 12 meses | 69,99€ |
MyHunt Pro| 3 meses | 19,99€ |

<br>
[MyHunt](https://www.hunterco.de/es/)

***(30 primeros días gratis)***

1. Estudio de la Inversión.
Esta alternativa no supone un gran avance tecnológico ya que se provee al cliente de una herramienta que no cumple con todas sus necesidades. La principal limitación es que sólo es para dispositivos móviles.

La versión que más se aproxima al cumplimiento de los requisitos del cliente es la Pro, que lleva asociado un gasto mensual de suscripción.

La interfaz es intuitiva y de su uso sencillo.


1. Estudio de los Riesgos.
Tras el estudio y análisis de la arquitectura y tecnología necesaria para implementar el sistema, se han detectado los siguientes **riesgos**, con su respectiva probabilidad e impacto:

    1.1 Gastos de uso por suscripción.

	    - PROBABILIDAD: Alto
	    - IMPACTO: Alto

    1.2 Vulnerabilidad en las credenciales de los usuarios.

	    - PROBABILIDAD: Media
	    - IMPACTO: Alto

    1.3 Cambio de las funcionalidades del sistema.

	    - PROBABILIDAD: Media
	    - IMPACTO: Alto

    1.4 Fiabilidad de funcionamiento del sistema.

	    - PROBABILIDAD: Baja
	    - IMPACTO: Alto


1. Licenciamiento de los distintos subsistemas que forman el producto.
No se precisa.



### **4.2.3 ALTERNATIVA 3:** ###

#### ALTERNATIVA 3: APP MiCaza
[![MiCaza](/img/Micaza.png)](https://micazaonline.com/)

App en IOS y Android.


1. Definición de la Arquitectura y tecnología.

   De descarga gratuita, está destinada a los cazadores y está destinada a proveer de información a todos los aficionados a esta actividad. La aplicación ofrece un buscador de cotos y campos de tiro con información de los mismos y cómo llegar; un buscador de cacerías con filtros por tipo de caza, modalidad o especie; un escáner con alertas para llevar toda la documentación en el móvil; un chat para comunicarse con otros cazadores, con el coto u otros usuarios; un tablón donde se publican los avisos del coto a todos sus miembros o clientes; un calendario donde se integran todos los eventos del usuario; toda la información actualizada sobre vedas y normativa; una tienda online para compra de accesorios de caza; acceso directo a Organizadores, servicios de caza nacionales e internacionales y a subastas de caza, también la posibilidad de federarse, contratar licencias y seguros de caza, todo de forma online. 

1. Estimación de carga de trabajo y plazos de tiempo asociados.
App en explotación.


1. Valoración económica.
    - Mano de obra: no es necesario.
    - Hardware: es necesario dispositivo móvil para acceder a la aplicación.
    - Software: existen dos versiones gratuitas, ***MiCaza*** (gratuita) y ***Micaza Gestor*** (enfocada a otro tipo de público, propietarios de cotos, Sociedades de Caza, Federaciones y otras instituciones).
    - Servicios Externos: no es necesario.
    

1. Estudio de la Inversión.
Esta alternativa es la que aporta un menor avance tecnológico ya que se provee al cliente de una herramienta que cumple con pocas necesidades del cliente. La principal limitación es que sólo es para dispositivos móviles.

La versión que más se aproxima al cumplimiento de los requisitos del cliente es ***MiCaza***.

La interfaz es intuitiva y de su uso sencillo.


1. Estudio de los Riesgos.
Tras el estudio y análisis de la arquitectura y tecnología necesaria para implementar el sistema, se han detectado los siguientes **riesgos**, con su respectiva probabilidad e impacto:

    1.1 Seguridad y persistencia de los datos de los usuarios.

	    - PROBABILIDAD: Media
	    - IMPACTO: Alto

    1.2 Vulnerabilidad en las credenciales de los usuarios.

	    - PROBABILIDAD: Media
	    - IMPACTO: Alto

    1.3 Cambio de las funcionalidades del sistema.

	    - PROBABILIDAD: Media
	    - IMPACTO: Alto

    1.4 Fiabilidad de funcionamiento del sistema.

	    - PROBABILIDAD: Baja
	    - IMPACTO: Alto

    1.5 Fiabilidad de los datos proporcionados.

	    - PROBABILIDAD: Baja
	    - IMPACTO: Alto


1. Licenciamiento.
No se precisa.


### **4.2.4- ALTERNATIVA 4:** ###

#### ALTERNATIVA 4: APLICACION HIBRIDA
Aplicación web híbrida en lenguaje JAVA y SGBD SQL, separando la capa de presentación de la capa de datos.

Añadiendo la funcionalidad de programación automatizada de reuniones con  ***calendly***, software de programación automatizada de reuniones.

[![cadendly](img/logo-cadendly.png)](https://calendly.com/es/pages/features)

1. Definición de la Arquitectura y tecnología.

    - **Modelo por capas**:
        - Capa de presentación: Angular
        - Capa de negocio: Java, Gradle y Spring.
        - Capa de datos: Heroku como Base de Datos en la nube.
    
    - **Desarrollo y pruebas**:
        - [GitEIE](https://git.institutomilitar.com/)/[GitHub](https://github.com/) para control de versiones, repositorio de documentación (wikis) y gestión de tareas (kanbans).
        - [Heroku](https://www.heroku.com/) como servidor de aplicaciones.
        - [GitHub pages](https://pages.github.com/) como servidor Web.
        - [Heroku](https://www.heroku.com/postgres) como Base de Datos en la nube.
        - [cadendly](https://calendly.com/es/pages/features) como software de automatización de reuniones.


1. Valoración económica.
- Mano de obra: full stack developper (250€/día)
    - Hardware: no es necesario.
    - Software: open source.
    - Servicios Externos: Heroku y _calendly_ según suscripción


| **Concepto** | **Cálculo**| **Coste**|
|----|----|----|
Calendly Basic | Mensual | $0 |
Calendly Premium| Mensual | $8 |
Calendly Pro| Mensual | $12 |

<br>

 
    

| **Concepto** | **Fuente** | **Cálculo**| **Coste**|
|----|----|----|----|
| Alquiler Dominio WEB | [arsys](https://www.arsys.es/dominios) | 1 año | 10 € |
| Heroku Datos| [Hobby Básico](https://www.heroku.com/pricing#data-services/) | 1 mes | $9  |
|Heroku aplicación | [Heroku Free and Hobby](https://www.heroku.com/pricing#data-services) | 1 mes | $0 |
|Servidor web | [GitHub pages](https://pages.github.com/) | 1 mes | $0 |
|Gestión de usuarios| [***wwwhisper***](https://elements.heroku.com/addons/wwwhisper) | 1 mes | $0 |
|Calendly Basic| [***Calendly***](https://calendly.com/es/pages/pricing) | 1 mes | $0 |
| Mano de obra  | 1 Full Stack Developer  | 3 meses (55 días) |13.750 € |
|  |  |  **Total** | **13.868 €**



1. Estudio de la Inversión.
Esta alternativa supone el mayor avance tecnológico ya se provee al cliente de una herramienta que cumple con todas sus necesidades.
La principal inversión de esta alternativa es de recursos humanos, por ser una aplicación creada _ad-hoc_. La interfaz debe ser intuitiva y su uso sencillo.

Todo el software que se utilice será código abierto y con licencias libres.


1. Estudio de los Riesgos.
- El mayor riesgo de esta alternativa es cumplir con el plazo máximo de implementación de la apliacación, ya que debe cumplir con todos los requisitos impuestos por el cliente.

- Plataforma [Heroku](https://www.heroku.com/):
  - **Tipo de Aplicación**: 
      - [***
      Free y Hobby***](https://www.heroku.com/pricing) ($0 al mes): aplicaciones no comerciales, como prueba de conceptos, MVP y proyectos personales.
      - [***Producción***](https://www.heroku.com/pricing) ($25 al mes): aplicaciones centradas en el negocio, como API y aplicaciones web internas o de cara al cliente.

   - **Contenedores**: Heroku ejecuta la aplicación en contenedores Linux livianos y aislados llamados ***dynos***.
       - [***Libre***](https://www.heroku.com/pricing) ($0): duerme después de 30 minutos de inactividad, 512 MB RAM.
       - [***Hobby***](https://www.heroku.com/pricing) ($7 al mes): pequeños proyectos y conceptos paralelos, 512 MB RAM.

   - **Servicio de Datos**, ***Heroku Postgres***: proporciona una base de datos SQL administrada como un servicio: 
       - [***Desarrollador aficionado***](https://www.heroku.com/pricing) (0$ al mes): para uso estudiantil, personal y aficionado. Límite de filas 10k, 20 conexiones. 
       - [***Hobby Básico***](https://www.heroku.com/pricing) ($9 al mes): pequeños proyectos paralelos y prueba de conceptos, límite de filas 10M, 20 conexiones.
   - **Heroku Redis**: es un servicio de valor clave en memoria totalmente administrado para almacenar datos que cambian con frecuencia y requieren un acceso rápido.
       - [***Desarrollador aficionado***] (https://www.heroku.com/pricing) (0$ al mes): analítica de desempeño, métricas de registro de Redis, 25 MB RAM, 20 contactos.
       - [***Prima 0***](https://www.heroku.com/pricing) ($15 al mes): 50MB RAM, 40 conexiones, alta disponibilidad con conmutación por error de baja latencia.
   - **Complementos**: los complementos de Heroku son servicios en la nube de terceros totalmente administrados que pueden utilizar para desarrollar, operar y administrar las aplicaciones.

       - **Gestión de usuarios**: 
          - [***wwwhisper***](https://elements.heroku.com/addons/wwwhisper) (a partir de $0 al mes): para restringir el acceso a la aplicación sin contraseña. Simplemente hay que especificar las direcciones de correo electrónico de los usuarios a los que se les debe permitir el acceso. Los tokens de acceso se envían a los correos electrónicos ingresados por los visitantes y solo los propietarios de los correos electrónicos permitidos tienen acceso.

        - **Pruebas**:
          - [***Parrot QA***](https://elements.heroku.com/addons/parrot) (desde $9 al mes): para probar el sitio web. 
    
    - Sotware [***Calendly***](https://calendly.com/es/pages/features):
      Software de programación automatizada de reuniones. Tiene las siguientes funcionalidades:
      - Notificaciones: Envíe correos electrónicos y SMS de confirmación y recordatorio para mejorar las cifras de las faltas de asistencia.
      - Tiempos de reserva: Añada tiempo extra antes o después de los eventos.
      - Límites diarios: Póngale un tope al número de reuniones por día.
      - Antelación mínima para la programación: Evite las reuniones de última hora y dese un tiempo suficiente para prepararlas.
      - Detección de zona horaria: Muestre la disponibilidad en la zona horaria de su invitado con la detección inteligente de zonas horarias.
      - Personalizaciones: Ofrezca una experiencia coherente con su marca eliminando las marcas de Calendly y personalizando su perfil.

      **Planes de suscripción**:
        - ***Basic*** (0$ al mes): 1 calendario/usuario, 1 tipo de evento, añadir al sitio web.
        - ***Premium*** ($8 al mes): 2 calendario/usuario, tipos de eventos ilimitados, recordatorios y notificaciones por correo electrónico personalizables.
         - ***Premium*** ($12 al mes): 6 calendarios/usuario, tipos de eventos ilimitados, recordatorios y notificaciones por correo electrónico personalizables, notificación por sms, redirigir invitados a otro sitio web.



Tras el estudio y análisis de la arquitectura y tecnología necesaria para implementar el sistema, se han detectado los siguientes **riesgos**, con su respectiva probabilidad e impacto:

    1.1 Costes derivados de los servicios externos (Heroku y Calendly).

	    - PROBABILIDAD: Media
	    - IMPACTO: Alto

    1.2 Los servicios externos no proporcionen los servicios registrados/contratados.

	    - PROBABILIDAD: Baja
	    - IMPACTO: Alto

La probabilidad de materializarse el proyecto es alta: una vez analizado, la materialización del proyecto resulta viable, contando con los medios técnicos y humanos para ello.



1. Licenciamiento de los distintos subsistemas que forman el producto.

No existe.



1. Planificación de la alternativa.
Estimación de carga de trabajo y plazos de tiempo asociados.
    - Estudio de la viabilidad del sistema: 5 días
    - Especificación de requisitos: 3 días
    - Definición del producto mínimo viable: 2 día
    - Preproducción:
        * Sprint 1: 10 días
        * Sprint 2: 15 días
    - Producción y mantenimiento: 20 días



### **ANEXO: MATRIZ DE TRAZABILIDAD Y MATRIZ DE DECISIÓN** ###
      [Anexo](EVS_ANEXO.md)



# **5.- SELECCIÓN DE LA ALTERNATIVA DE SOLUCION**
## **5.1 CONVOCATORIA**
El 15 de abril de 2021, se efectúa convocatoria de reunión con el cliente para la presentación de las diferentes propuestas de solución.

## **5.2 EVALUACION Y SELECCIÓN**
Se presentan las diferentes propuestas de solución al cliente. Y tras realizar el análisis y estudio de la viabilidad y requisitos del sistema de dichas alternativas, se decide que la propuesta de solución que mejor se adapta a las necesidades del cliente es la ***ALTERNARTIVA 4*** `APLICACIÓN WEB HÍBRIDA`.

Los principales factores detonantes de dicha decisión han sido principalmente el cumplimiento de los requisitos y el coste.

## **5.3 APROBACIÓN** 
Una vez finalizada dicha reunión, el cliente aprueba realizar la ***ALTERNATIVA 4***, con lo que autoriza el inicio del proceso de desarrollo.