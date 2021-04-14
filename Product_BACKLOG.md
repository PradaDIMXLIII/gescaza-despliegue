<table>
    <tr> 
        <th colspan = "6" ><h1><b>PRODUCT BACKLOG:</b></h1></th> 
    </tr>
    <tr> 
        <th><b>Prioridad</b></th> 
        <th><b>Descripción</b></th>
        <th><b>Valor que aporta</b></th> 
        <th><b>Definition of "Done" (DoD)</b></th> 
        <th><b>Riesgos</b></th> 
        <th><b>Dependencias</b></th> 
        <th><b>Estimación del esfuerzo</b></th> 
    </tr>
    <tr> 
        <td>1</td> 
        <td>Tener los endpoints necesarios para el <em>CRUD Cazador</em> en /api/cazador</td> 
        <td>CRUD Cazador</td>
        <td>Test Postman</td> 
        <td>superar en Heroku Postgres el límite filas 10M</td> 
        <td>Inicializado el proyecto Spring y BD</td> 
        <td>0.5 dia</td> 
    </tr>
 <tr> 
        <td>2</td> 
        <td>Tener los endpoints necesarios para el <em>CRUD Evento Caza</em> en /api/cazador</td> 
        <td>CRUD Evento Caza</td>
        <td>Test Postman</td> 
        <td>superar en Heroku Postgres el límite filas 10M</td> 
        <td>Haber realizado el CRUD Cazador</td> 
        <td>0.5 dia</td> 
    </tr>
    <tr> 
        <td>3</td> 
        <td>Tener los endpoints necesarios para la <em>Consulta de eventos</em> desde la agenda</td> 
        <td>Consulta Eventos Caza</td>
        <td>Test Postman</td> 
        <td>No se contempla</td> 
        <td>Haber realizado el CRUD Evento Caza</td> 
        <td>0.5 dia</td> 
    </tr>
    <tr> 
        <td>4</td> 
        <td>Tener los endpoints necesarios para la <em>Autenticación</em> de usuario</td> 
        <td>Autenticación de usuario</td>
        <td>Test Postman</td> 
        <td>No se contempla</td> 
        <td>Integración complemento wwwhisper</td> 
        <td>0.5 dia</td> 
    </tr>
    <tr> 
        <td>5</td> 
        <td>Tener los endpoints necesarios para la <em>Notificación de eventos</em> al usuario</td> 
        <td>Notificación de eventos al usuario</td>
        <td>Test Postman</td> 
        <td>No se contempla</td> 
        <td>Integración API calendly</td> 
        <td>0.5 dia</td> 
    </tr>
     <tr> 
        <td>6</td> 
        <td>Tener los endpoints necesarios para la <em>Realización de Prototipo</em> MVP</td> 
        <td>Prototipo MVP</td>
        <td>Test Postman</td> 
        <td>No se contempla</td> 
        <td>FrontEnd MVP</td> 
        <td>2 dia</td> 
    </tr>
   
    
<table>