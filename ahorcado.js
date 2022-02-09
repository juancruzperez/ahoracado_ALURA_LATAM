var btnIniciar        = document.querySelector("#iniciar-juego");
var inputPalabra      = document.querySelector("#input-nueva-palabra");
var btnAgregarPalabra = document.querySelector("#nueva-palabra");
var btnReiniciar      = document.querySelector("#reiniciar-juego")

palabrasSecretas = ["ABAJO","ABANDONAR","ABDOMEN","ABRIGO","ABRIR","ABSOLUTO","ABSTRACTOS","ABUELA","ABUELO","ABURRIDO","ABURRIMIENTO","ABURRIRSE","ACABAR","ACASO","ACEPTAR","ACERCA","ACERCAR","ACERTADO","ACIERTO","ACORDAR","ACTITUD","ACTIVIDAD","ACTIVIDADES","ACTUAL","ACTUALMENTE","ACUERDO","ADELANTE","ADENTRO","ADJETIVOS","ADMIRAR","ADOLESCENTE","ADREDE","ADULTA","ADULTO","ADVERBIOS","AEROPUERTO","AFECTAR","AFIRMAR","AFUERA","AGARRAR","AGITADO","AGREGAR","AGUJA","AHORA","AJENO","ALABAR","ALCALDE","ALCANZAR","ALEGRARSE","ALEJADO","ALEJAR","ALFABETO","ALGUIEN","ALGUNA","ALIMENTO","ALIMENTOS","ALMENDRA","ALREDEDOR","ALTURA","AMANECER","AMARGO","AMARILLO","AMBIENTE","AMBOS","AMBULANCIA","AMIGA","AMIGO","AMPLIO","ANALIZAR","ANARANJADO","ANCHO","ANCIANA","ANCIANO","ANGOSTO","ANIMAL","ANIMALES","ANOCHE","ANOCHECER","ANSIOSO","ANTERIOR","ANTERIORMENTE","ANTES","APARATO","APARECER","APARTAMENTO","APENAS","APESTOSO","APETITOSO","APOYO","APROXIMADAMENTE","AQUEL","AQUELLA","AQUELLAS","AQUELLO","AQUELLOS","ARDIENTE","ARREGLAR","ARRIBA","ARROJAR","ARROZ","ASCENSOR","ASIMISMO","ASPECTO","ASUSTADO","ASUSTARSE","ATAQUE","ATEMORIZADO","ATEMORIZARSE","ATENDER","AUMENTO","AUNQUE","AUTOPISTA","AUTOR","AUTORIDAD","AUXILIARES","AVANCE","AVANZAR","AVENA","AVENIDA","AYUDA","AYUDAR","BABOSA","BARATO","BARBA","BARRO","BASTANTE","BEBER","BEBIDA","BENEFICIO","BICHO","BIGOTE","BILLETE","BISABUELA","BISABUELO","BISNIETA","BISNIETO","BLANCO","BLANDO","BOLETO","BOLSA","BOLSILLO","BOLSO","BOMBEROS","BOSQUE","BRAGAS","BRAZO","BUENO","BUSCAR","CABALLERO","CABALLO","CABELLO","CABEZA","CADERA","CALAMAR","CALCETINES","CALENDARIO","CALIDAD","CALIENTE","CALLAR","CALLE","CALMO","CALOR","CALUROSO","CALZONCILLO","CAMBIAR","CAMBIO","CAMINO","CAMISA","CAMISETA","CAMPO","CANSADO","CANSANCIO","CANSARSE","CANTAR","CANTIDAD","CAPACIDAD","CAPAZ","CAPITAL","CARACOL","CARGO","CARNE","CARRERA","CARRETERA","CARTA","CAUSA","CEBADA","CELESTE","CENTRAL","CENTRO","CERCA","CERCANO","CERDO","CEREBRO","CERRAR","CERRO","CHAQUETA","CHINO","CIELO","CIENCIA","CIENTO","CIERRE","CIERTO","CIERVO","CINCO","CINTURA","CIRUELA","CIUDAD","CLARO","CLASE","CLAVAR","CLAVO","CLIMA","COCHE","COCODRILO","COGER","COLEGA","COLEGIO","COLOR","COLORES","COMENZAR","COMER","COMERCIO","COMIDA","COMIENZO","COMPACTO","COMPARAR","COMPETENCIA","COMPLICADO","COMPLICAR","COMPRAR","COMPRENDER","COMPROBAR","COMPUTADORA","COMUNICARSE","COMUNIDAD","CONCEPTO","CONCIENCIA","CONEJO","CONFIANZA","CONFLICTO","CONGRESISTA","CONGRESO","CONJUNCIONES","CONJUNTO","CONMIGO","CONOCER","CONOCIDA","CONOCIDO","CONOCIMIENTO","CONSECUENCIA","CONSEGUIR","CONSEJO","CONSIDERAR","CONSIGO","CONSOLAR","CONSTRUIR","CONSUMO","CONTENIDO","CONTENTO","CONTIGO","CONTINENTAL","CONTRA","CONTRARIO","CONTROL","CORDEL","CORDONES","CORRECTO","CORRIENTE","CORTAR","CORTE","COSTA","CREAR","CRECER","CRECIMIENTO","CREER","CREMALLERA","CRIATURA","CRISIS","CUADRO","CUALQUIER","CUALQUIERA","CUANDO","CUARTO","CUATRO","CUCARACHA","CUELLO","CUENTA","CUERDA","CUERPO","CUERVO","CULTURA","CULTURAL","CURSO","DEBAJO","DEBER","DECIDIR","DECIR","DECRETO","DEFENSA","DEJAR","DELANTE","DELGADO","DELICIOSO","DEMANDA","DEMASIADO","DEMOCRACIA","DEMOSTRATIVOS","DENTRO","DEPARTAMENTO","DEPORTE","DEPRISA","DERECHA","DERECHO","DESACERTADO","DESAPARECER","DESARROLLO","DESCANSAR","DESCARTAR","DESDE","DESEAR","DESENVOLVER","DESEO","DESIERTO","DESPACIO","DESPEJADO","DESPERTAR","DESTINO","DESTRUIR","DETERIORO","DETESTAR","DIAGONAL","DIARIO","DIARREA","DIBUJO","DICCIONARIO","DICTADURA","DIENTE","DIFERENCIA","DIFERENTE","DINERO","DIPUTADO","DIRECTOR","DISTINGUIR","DISTINTO","DIVERSO","DIVIDIR","DOBLAR","DOCUMENTO","DOLOR","DOLOROSO","DOMINGO","DORMIR","DORMITORIO","DULCE","DURANTE","DURAZNO","EDIFICIO","EFECTO","EJEMPLO","ELECTRICIDAD","ELEFANTE","ELEMENTO","ELEVADOR","ELLAS","ELLOS","ELOGIAR","EMBARGO","EMOCIONES","EMPEORAR","EMPEZAR","EMPLEO","EMPRESA","ENCANTADO","ENCANTARSE","ENCIMA","ENCONTRAR","ENCUENTRO","ENFADADO","ENFADARSE","ENFADO","ENFERMEDAD","ENFRENTE","ENOJADO","ENOJARSE","ENOJO","ENSEGUIDA","ENTENDER","ENTONCES","ENTORNO","ENTRADA","ENTRAR","ENTRE","ENTRETENIMIENTO","ENTREVISTAR","ENTRISTECERSE","EQUIPO","ESCALERA","ESCRIBIR","ESCRITORIO","ESCUCHAR","ESCUELA","ESCULTURA","ESFUERZO","ESPACIO","ESPALDA","ESPECIAL","ESPECIALMENTE","ESPECIE","ESPECTADOR","ESPERA","ESPERAR","ESPINILLA","ESPOSA","ESPOSO","ESTADO","ESTAR","ESTAS","ESTILO","ESTOS","ESTRELLA","ESTRICTO","ESTRUCTURA","ESTUDIO","ETAPA","EVALUAR","EVITAR","EXACTAMENTE","EXACTO","EXCEPTO","EXISTENCIA","EXISTIR","EXPENDEDORA","EXPERIENCIA","EXPLICAR","EXTERIOR","EXTRANJERO","FABRICAR","FALDA","FALSO","FALTA","FALTAR","FAMILIA","FAVOR","FECHA","FELIZ","FERROCARRIL","FIGURA","FINAL","FINALMENTE","FIRME","FLEXIBLE","FONDO","FORMA","FORMALIDAD","FRACASO","FRENTE","FRESCO","FRONTAL","FRUTA","FUEGO","FUENTE","FUERA","FUERTE","FUERZA","FUTURO","GAFAS","GALAXIA","GALLINA","GASEOSA","GENERAL","GENERAR","GENTE","GOBERNADOR","GOBIERNO","GOLPEAR","GRABADO","GRACIAS","GRADO","GRAMO","GRANDE","GRIPE","GRUESO","GRUPO","GUERRA","GUISANTES","HABER","HABLAR","HACER","HACIA","HASTA","HECHOS","HERMANA","HERMANO","HERRAMIENTAS","HIELO","HIERRO","HISTORIA","HOGAR","HOMBRE","HOMBRO","HONGO","HORRIBLE","HOTEL","HUESO","HUMANIDAD","HUMANO","IDIOMA","IGUAL","IMAGEN","IMPORTANTE","IMPOSIBLE","IMPROBABLE","INCLUSIVE","INCLUSO","INCORRECTO","INDEFINIDOS","INDIVIDUO","INFERIOR","INFORME","INICIALMENTE","INICIAR","INICIO","INMEDIATAMENTE","INSECTO","INSTANTE","INSTITUTO","INTENDENTE","INTENTAR","INTENTO","INTERCAMBIAR","INTERESADO","INTERESARSE","INTERIOR","INTERJECCIONES","INTERNACIONAL","INTERROGATIVOS","INVERSO","IZQUIERDA","JIRAFA","JOVEN","JUEVES","JUGAR","JUNGLA","JUNTO","JUSTO","LABIO","LAGARTO","LAGUNA","LANGOSTA","LANZAR","LARGO","LATERAL","LEJANO","LEJOS","LENGUAJE","LEVANTAR","LIBERTAD","LIBRO","LIGERO","LITRO","LLAVE","LLEGAR","LLEVAR","LLORAR","LLUVIA","LOCAL","LOCUCIONES","LOGRO","LOMBRIZ","LONGITUD","LUEGO","LUGAR","LUNES","MADRE","MALOLIENTE","MANERA","MANGA","MANUAL","MANZANA","MARIPOSA","MARISCO","MARTES","MATERIALES","MATRIMONIO","MAYOR","MEDIANTE","MEDIDA","MEDIDAS","MEDIO","MEDIR","MEJOR","MEJORA","MEJORAR","MEMORIA","MENOR","MENOS","MENTE","MENTIRA","MENUDO","MERCADO","METAL","METRO","MIEDO","MIENTRAS","MILENIO","MINISTRO","MINUTO","MISMA","MISMO","MOLUSCO","MOMENTO","MONTE","MORDER","MORIR","MOSCA","MOSQUITO","MOSTRAR","MOVER","MOVIMIENTO","MUCHO","MUERTE","MUJER","MUNDIAL","MUNDO","MUNICIPIO","MUSLO","NACER","NACIMIENTO","NACIONAL","NADIE","NARANJA","NARIZ","NATURALEZA","NECESARIO","NECESIDAD","NECESITAR","NEGAR","NEGRO","NIETA","NIETO","NIEVE","NINGUNA","NINGUNO","NIVEL","NOCHE","NOMBRE","NORMA","NORTE","NOSOTRAS","NOSOTROS","NOTICIA","NUBLADO","NUESTRA","NUESTRO","NUEVE","NUEVO","NUNCA","OBJETIVO","OBJETO","OBJETOS","OBTENER","OBVIO","ODIAR","OESTE","OFICINA","OLFATO","OPUESTO","ORDEN","ORDENADOR","ORDINALES","OREJA","ORIGEN","OTRAS","OTROS","OVEJA","PADRE","PALABRA","PALMA","PANEL","PANTALLA","PAPAS","PAPEL","PARADA","PARAGUAS","PARASOL","PARECER","PARECIDO","PAREJA","PARLAMENTARIO","PARTE","PARTICULAR","PARTIDO","PARTIR","PASADO","PASTO","PATATAS","PATEAR","PECHO","PEDIR","PEGAR","PENSAMIENTO","PENSAR","PERCIBIR","PERIODISMO","PERJUICIO","PERMISO","PERRO","PERSONA","PERSONALES","PERSONALIDAD","PESADO","PESAR","PICANTE","PIERNA","PINTURA","PLACER","PLANETA","PLANTA","PLANTAS","PLATA","PLAYA","PLOMO","PODER","POLILLA","PONER","POROTOS","PORQUE","POSESIVOS","POSIBILIDAD","POSIBLE","POSIBLEMENTE","POSTERIOR","POTENCIA","PRECIO","PRECISAR","PREGUNTA","PRENDA","PREPOSICIONES","PRESENCIA","PRESENTE","PRESIDENTE","PRETENDER","PRIMA","PRIMER","PRIMERA","PRIMERO","PRIMO","PRINCIPIO","PRIVADO","PROBABILIDAD","PROBABLE","PROBABLEMENTE","PROBAR","PROBLEMA","PROCESO","PRODUCTO","PROGRAMA","PROGRESO","PRONOMBRES","PRONTO","PROPIO","PROPONER","PROVINCIA","PROYECTO","PUEBLO","PUERTA","PUESTO","PULPO","PUNTO","QUEDARSE","QUERER","QUINTO","QUITAR","REALIDAD","RECHAZAR","RECIBIR","RECIENTE","RECOGER","RECUERDO","REEMPLAZAR","REGIONAL","REGULAR","RELACIONES","RELATIVO","REPARAR","REPRESENTANTE","RESFRIADO","RESPUESTA","RESULTADO","RETROCEDER","RETROCESO","REUNIRSE","REVISTA","RODILLA","ROMPER","ROSADO","RURAL","SABER","SACAR","SALADO","SALIR","SALTAMONTES","SALUD","SALVO","SANGRE","SARDINA","SECRETO","SECTOR","SECUENCIA","SEGUIR","SEGUNDO","SEGURAMENTE","SEGURIDAD","SELVA","SEMANA","SEMILLA","SENADOR","SENCILLO","SENSACIONES","SENSORIALES","SENTIDO","SENTIMIENTOS","SENTIR","SEPARADO","SEPARAR","SERIE","SERIO","SERPIENTE","SERVICIO","SIEMPRE","SIETE","SIGLO","SIGNIFICADO","SIGNIFICAR","SIGUIENTE","SILLA","SIMILAR","SIMILITUD","SIMPLE","SIQUIERA","SISTEMA","SOBRE","SOBRINA","SOBRINO","SOCIAL","SOCIEDAD","SOLAMENTE","SOLAPA","SOLICITAR","SOLICITUD","SOLITARIO","SORPRENDERSE","SORPRENDIDO","SORPRESA","SUAVE","SUELO","SUGERENCIA","SUGERIR","SUJETADOR","SUJETAR","SUPERFICIE","SUPERIOR","SUSTANTIVOS","SUSTITUIR","SUSTO","TACTO","TALLO","TAMPOCO","TANTA","TANTO","TARDE","TARIFA","TEMOR","TEMPORALES","TEMPRANO","TENER","TERCERO","TERMINAR","TEXTO","TIEMPO","TIERRA","TIGRE","TOCAR","TOMAR","TOMATE","TORMENTA","TOTAL","TRABAJAR","TRABAJO","TRAER","TRANCAR","TRANQUILO","TRANSCURSO","TRANSPORTE","TRANSPORTES","TRASERO","TRATAR","TRIGO","TRISTE","TRISTEZA","TRUENO","UNIDO","UNIVERSAL","UNIVERSIDAD","UNIVERSO","URBANO","USTED","USTEDES","USUAL","UTILIZAR","VALOR","VAPOR","VARIAR","VARIAS","VARIOS","VEGETAL","VELOCIDAD","VENDER","VENIR","VENTANA","VERBOS","VERDAD","VERDE","VERDURA","VERIFICAR","VICEVERSA","VIEJO","VIENTO","VIERNES","VILLA","VIOLETA","VISTA","VIVIR","VOLUMEN","VOLVER","VOSOTRAS","VOSOTROS","VUELTO","VUESTRA","VUESTRO","YEGUA","ZANAHORIA","ZAPATILLA","ZAPATO",];

var juegoIniciado = false;
var palabraSorteada;
var indices = [];
var arrayPalabra;
arrayLetraIngresada = [];
arrayLetrasCorrectas = [];
arrayLetrasIncorrectas = [];
let letrasUnicas = [];
//--------funcion para generar un array sin letras repetidas
//--------que sera usado para verificar el ganador
function cribarLetrasRepetidas(){
    for (i=0;i<palabraSorteada.length;i++){
        if(!letrasUnicas.includes(palabraSorteada[i])){
            letrasUnicas.push(palabraSorteada[i])
        }
    }
}
//--------sortea una palabra aleatoria del array original
//--------luego elimina esa palabra del array para que no repita
function sortearPalabra(){
    var numeroAleatorio = Math.floor(Math.random()*palabrasSecretas.length);
    palabraSorteada = palabrasSecretas[numeroAleatorio];
    palabrasSecretas.splice(numeroAleatorio,1);
    return palabraSorteada;
}
//--------crea un array para ser usado como referencia para el juego
function crearArrayPalabra(palabra){
    separada = palabra.split("");
    arrayPalabra = separada;
}
//--------asigna la funcionalidad a los botones de inicio y reinicio
btnIniciar.addEventListener("click",function(event){
    event.preventDefault();
    pincel.clearRect(0, 0, pantalla.width, pantalla.height);
    iniciarJuego();
})
btnReiniciar.addEventListener("click",function(event){
    event.preventDefault();
    pincel.clearRect(0, 0, pantalla.width, pantalla.height);
    iniciarJuego();
})
//--------permite al usuario agregar sus propias palabras
btnAgregarPalabra.addEventListener("click",function(event){
    event.preventDefault();
    palabrasSecretas.push(inputPalabra.value.toUpperCase());
    inputPalabra.value = "";
    inputPalabra.focus();
})
//--------nuclea las acciones necesarias para iniciar un nuevo juego
function iniciarJuego(){
    pincel.clearRect(0, 0, pantalla.width, pantalla.height);
    patibulo();
    sortearPalabra();
    crearArrayPalabra(palabraSorteada);
    dibujarGuiones();
    cribarLetrasRepetidas();
    juegoIniciado = true;
    arrayLetraIngresada = [];
    arrayLetrasCorrectas = [];
    arrayLetrasIncorrectas = [];
}
//--------genera un array con los indices de las letras ingresadas 
//--------por los usuarios, esto permite que si hay letras repetidas
//--------dentro de la palabra original pueda dibujar todas
//--------las instancias de esa letra
function buscarIndices(){
    if (juegoIniciado){
    var indiceBuscado = arrayPalabra.indexOf(arrayLetraIngresada[0]);
        while (indiceBuscado != -1) { //el -1 es el return de indexOf si no encuentra el elemento
            indices.push(indiceBuscado);
            indiceBuscado = arrayPalabra.indexOf(arrayLetraIngresada[0], indiceBuscado + 1);
  }
}
}
//--------dibuja la cantidad de guiones necesarios para la palabra en juego
function dibujarGuiones(){
    var inicioX = 350;
    var inicioY = 610;
    var contador = 0;
    var nLetras = palabraSorteada.length;
    while (contador<nLetras){
        pincel.fillStyle = "red";
        pincel.fillRect(inicioX+(40*contador),inicioY,30,4);
        contador++;
    }
}
//--------coloca cada letra en el lugar que deberia aparecer
function dibujarletras(arrOrden){
    var inicioX = 358;
    var inicioY = 600;
        for(i=0;i<arrOrden.length;i++){
            pincel.fillStyle = "blue";
            pincel.font = "20px Georgia";
            pincel.fillText(arrayLetraIngresada[0],inicioX+(40*arrOrden[i]),inicioY);
        }
        indices = [];
}
//--------evento para capturar las teclas del usuario, en el cual
//--------comprueba si son letras y no caracteres especiales o numeros
//--------almacena las letras en uno de dos arrays, de acuerdo a si la
//--------letra esta o no dentro de la palabra sorteada.
//--------tambien dibuja la pieza del ahorcado en caso de que sea necesario
//--------y comprueba si el juego ha terminado
document.addEventListener("keyup", function(event){
    arrayLetraIngresada = [];
    var letra = event.key.toUpperCase();
    var codigo = letra.charCodeAt();
    if (juegoIniciado){
    if(codigo>64 && codigo<91){
        arrayLetraIngresada.push(letra);
        buscarIndices();
        dibujarletras(indices);
        var comparador = arrayLetrasIncorrectas.length;
        if(arrayPalabra.includes(letra)){
            if(!arrayLetrasCorrectas.includes(letra)){
                arrayLetrasCorrectas.push(letra)
            }
        }else if(!arrayLetrasIncorrectas.includes(letra)){
            arrayLetrasIncorrectas.push(letra)
        }
        if(comparador<arrayLetrasIncorrectas.length){
            dibujarLetrasErroneas(arrayLetrasIncorrectas) 
        }
        dibujarAhorcado();
        }
    verificarFinGanador();
    verificarFinPerdedor();
    } 
});
//--------dibuja las letras que no estan en la palabra sorteada
function dibujarLetrasErroneas(letrasIncorrectas){
    var inicioX = 400;
    var inicioY = 200;
    pincel.fillStyle = "black";
    pincel.font = "20px Georgia";
    pincel.fillText("letras erroneas " + letrasIncorrectas.toString(),inicioX,inicioY);
}
//--------comprueba si el juego ha terminado con resultado positivo
function verificarFinGanador(){
    let palabraOriginalsinLetrasRepetidas = letrasUnicas.sort().toString();
    let letrasErroneasIngresadas = arrayLetrasCorrectas.sort().toString();
    if(palabraOriginalsinLetrasRepetidas===letrasErroneasIngresadas){
        pincel.fillStyle = "lightgreen";
        pincel.font = "50px Georgia";
        pincel.fillText("Ganaste, felicidades!",600,400);
        juegoIniciado = false;
        btnReiniciar.focus();
        letrasUnicas = [];
    }
}
//--------comprueba si el juego ha terminado con resultado negativo
function verificarFinPerdedor(){
    if(arrayLetrasIncorrectas.length>5){
        pincel.fillStyle = "red";
        pincel.font = "50px Georgia";
        pincel.fillText("Fin del juego!",600,400);
        juegoIniciado = false;
        alert("la palabra era " + palabraSorteada);
        btnReiniciar.focus();
        letrasUnicas = [];
    }
}
//--------dibuja la pieza del ahorcado correspondiente segun la cantidad de errores
function dibujarAhorcado(){
    let contador = arrayLetrasIncorrectas.length;
    if (contador===1){
        cabeza()
    }else if(contador===2){
        cuerpo()
    }else if(contador===3){
        brazoIzquierdo()
    }else if(contador===4){
        brazoDerecho()
    }else if(contador===5){
        piernaIzquierda()
    }else if(contador===6){
        piernaDerecha()
    }
}
