# Cifrado César

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Presentación del Proyecto](#2-presentación-del-proyecto)
* [3. Diseño de Prototipo](#3-diseño-de-prototipo)

***

## 1. Preámbulo

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher)
es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio
César lo usaba para enviar órdenes secretas a sus generales en los campos de
batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es
un tipo de cifrado por sustitución, es decir que cada letra del texto original
es reemplazada por otra que se encuentra un número fijo de posiciones
(desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

* La letra A se cifra como D.
* La palabra CASA se cifra como FDVD.
* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con
mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la
comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas
más complejos de codificación, como el cifrado Vigenère, e incluso tiene
aplicación en el sistema ROT13.

## 2. Presentación del proyecto
**BLINDMESSAGE** es una página web que les ofrece a los usuarios encriptar mensajes, con el objetivo de ofrecer otro nivel de seguridad al utilizar el Cifrado César para ocultar información y así pueda ser enviada de una forma más segura.

El proyecto está dirgido a empresas que necesiten ocultar información importante para ser enviada por aplicaciones de mensajería externa o interna.  La interfaz está pensada para ser sencilla y fácil de usar sin importar el rubro o área de conocimiento y acción de los usuarios,y al mismo tiempo brindar un filtro extra de seguridad al encriptar información para que pueda ser enviada de forma segura.

## 3. Diseño de Prototipo

### Fase Inicial
El primer prototipo del proyecto contemplaba como paleta de colores el `#655AE4` como color de fondo, el  `#978F8F` para el fonde del encabezado, `#CFC820` para las letras del título y `#D9D9D9` para los botones. Se proponía tres páginas web diferentes: una de incio que contenía dos botones, los cuáles redireccionarían a otra página; una correspondiente a cifrar un mensaje y otra para descifrar un mensaje. 

La imágenes del prototipo inicial se muestran a continuación:
![PrototipoPantallaInic Cipher](https://user-images.githubusercontent.com/103973458/182264107-3832d7f4-4353-4b7f-b6d6-b8560f4c9f6f.JPG)

![PrototipoPantallaCi Cipher](https://user-images.githubusercontent.com/103973458/182263873-1c1204b0-b88d-41a4-8a0b-1020c1ceacde.JPG)

![PrototipoPantallaDesc Cipher](https://user-images.githubusercontent.com/103973458/182264249-2ad40628-b757-410e-9f59-1efd4b186b88.JPG)

### Fase Final
**BLINDMESSAGE** consiste de tres pantallas:  la principal la cual contiene dos botones que dirigen al usuario, dependiedno de su elección, a esconder o revelar un mensaje.  

Cuando el usuario cifra un mensaje, se le pide que ingrese un número secreto que servirá como clave para ocultar el mensaje. Después de que se ha ingresado el mensaje y el número, al dar click en el botón; la pantalla cambiará, mostrando al usuario el nuevo mensaje y le hará el recordatorio que debe compartir el número secreto con la persona que va a revelar el mensaje. Esta misma pantalla le ofrece dos botones al usuario:  uno que lo llevará de regreso a la pantalla donde podrá seguir cifrando más información, y otro que lo redireccionará a la pantalla para revelar el mensaje.

Para revelar la información, el usuario debe ingresar el mensaje que le fue compartido, así como el número secreto que le permitirá desbloquear el contenido real. Asímismo, además de mostrar el mensaje revelado esta misma pantalla le ofrece dos botones al usuario, similares a los de la pantalla del ususario:  uno que lo llevará de regreso a la pantalla donde podrá seguir revelando más información, y otro que lo redireccionará a la función para esconder la respuesta a la información recibida.

Gracias al feedback de los días de Demo, se cambió la paleta de colores para brindarle una mejor experiencia al usuario. Se utilizó el color `#3e92cc`para el fondo, el  `#fffaff` para el fondo del encabezado, `#0a2463` para las letras del título y del body; para el hover de los botones se utilizó el color `#d8315b`. Actualmente el proyecto funciona para letras mayúsculas y minúsculas, el programa está en proceso de aceptar caracteres especiales.

A continuación se presentan las imágenes del proyecto final:

![Pantalla de Inicio-Cifrado](https://user-images.githubusercontent.com/103973458/182264402-2fb2968f-5292-4e99-85d0-f74e7d2f559d.JPG)

![PantallaCifrado](https://user-images.githubusercontent.com/103973458/182264413-8b50a2a6-cb93-4a35-b2c2-05dfc5c1b22f.JPG)

![MuestraMensajeCifrado](https://user-images.githubusercontent.com/103973458/182264483-7de76c54-02f3-4b69-9644-0513a9c2ea9e.JPG)

![PantallaDescifrado](https://user-images.githubusercontent.com/103973458/182264436-30182d3d-accb-4f3a-b2df-5ba88ff6306f.JPG)

![Muestra Mensaje Descifrado](https://user-images.githubusercontent.com/103973458/182265105-5516c915-8474-4305-990c-03d16824b36c.JPG)

