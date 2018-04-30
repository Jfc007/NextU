//Definicion de variables globales
var puntoC=0;
var tipoOP="";
var nume1=0;
var nume2=0;
var resulta=0;
var antOP='';
var antNume2=0;
var Calculadora={
  //Metodo que inicializa las variables a utilizar
  inicializaDat: function inicializa(){
    var cantDigit=0;
    var inicial=0;
    var cadMuestra='';
  },
  //Hacer los botones pequeños
  cambiaTamP: function (event){
    var seleccion=event.currentTarget.id;
    switch (seleccion) {
      case 'on':
        document.getElementById('on').style="width:21.95%;height:62.10px";
        break;
        case 'sign':
          document.getElementById('sign').style="width:21.85%;height:62.10px";
          break;
          case 'dividido':
              document.getElementById('dividido').style="width:21.85%;height:62.10px";
            break;
            case 'raiz':
                document.getElementById('raiz').style="width:21.85%;height:62.10px";
              break;
              case 'por':
                  document.getElementById('por').style="width:21.85%;height:62.10px";
                break;
                case 'menos':
                    document.getElementById('menos').style="width:21.75%;height:62.10px";
                  break;
                  case 'punto':
                      document.getElementById('punto').style="width:28.75%;height:62.10px";
                    break;
                    case 'igual':
                        document.getElementById('igual').style="width:28.75%;height:62.10px";
                      break;
                      case 'mas':
                          document.getElementById('mas').style="width:89.5%;height:99.95%";
                        break;
                        case '1':
                            document.getElementById('1').style="width:28.75%;height:62.10px";
                          break;
                          case '2':
                              document.getElementById('2').style="width:28.75%;height:62.10px";
                            break;
                            case '3':
                                document.getElementById('3').style="width:28.75%;height:62.10px";
                              break;
                              case '4':
                                  document.getElementById('4').style="width:21.95%;height:62.10px";
                                break;
                                case '5':
                                    document.getElementById('5').style="width:21.90%;height:62.10px";
                                  break;
                                  case '6':
                                      document.getElementById('6').style="width:21.75%;height:62.10px";
                                    break;
                                    case '7':
                                        document.getElementById('7').style="21.90%;height:62.10px";
                                      break;
                                      case '8':
                                          document.getElementById('8').style="21.75%;height:62.10px";
                                        break;
                                        case '9':
                                            document.getElementById('9').style="21.75%;height:62.10px";
                                          break;
                                          case '0':
                                              document.getElementById('0').style="width:28.75%;height:62.10px";
                                            break;

          default:
    }
    //llamar a funciones para el control de operaciones e ingreso de numeros y signos
    if (seleccion>=0 && seleccion<=9){
      Calculadora.insertaValores(seleccion);
    }else{
      //Calculadora.limpiaCal();
      if (seleccion=='on'){
          Calculadora.limpiaCal();
      }else{
        if (seleccion=='punto'){
          Calculadora.controlPunto();
        }else {
          if (seleccion=='sign'){
            Calculadora.ControlSigno();
          }else{
            if (seleccion=='mas'||seleccion=='menos'||seleccion=='por'||seleccion=='dividido'){
              Calculadora.identificaOp(seleccion);
            }else{
              if (seleccion=='igual'){
                Calculadora.Resultado();
              }
            }
          }
        }
      }
    }
  },
  cambiaTamO: function(event){
    //document.getElementsByClassName('tecla')[3].style="width:22%;height:62.91px"
    var seleccion1=event.currentTarget.id;
    switch (seleccion1) {
      case 'on':
        document.getElementById('on').style="width:22%;height:62.91px";
        break;
        case 'sign':
          document.getElementById('sign').style="width:22%;height:62.91px";
          break;
          case 'dividido':
              document.getElementById('dividido').style="width:22%;height:62.91px";
            break;
            case 'raiz':
                document.getElementById('raiz').style="width:22%;height:62.91px";
              break;
              case 'por':
                  document.getElementById('por').style="width:22%;height:62.91px";
                break;
                case 'menos':
                    document.getElementById('menos').style="width:22%;height:62.91px";
                  break;
                  case 'punto':
                      document.getElementById('punto').style="width:29%;height:62.91px";
                    break;
                    case 'igual':
                        document.getElementById('igual').style="width:29%;height:62.91px";
                      break;
                      case 'mas':
                          document.getElementById('mas').style="width:90%;height:100%";
                        break;
                        case '1':
                            document.getElementById('1').style="width:29%;height:62.91px";
                          break;
                          case '2':
                              document.getElementById('2').style="width:29%;height:62.91px";
                            break;
                            case '3':
                                document.getElementById('3').style="width:29%;height:62.91px";
                              break;
                              case '4':
                                  document.getElementById('4').style="width:22%;height:62.91px";
                                break;
                                case '5':
                                    document.getElementById('5').style="width:22%;height:62.91px";
                                  break;
                                  case '6':
                                      document.getElementById('6').style="width:22%;height:62.91px";
                                    break;
                                    case '7':
                                        document.getElementById('7').style="width:22%;height:62.91px";
                                      break;
                                      case '8':
                                          document.getElementById('8').style="width:22%;height:62.91px";
                                        break;
                                        case '9':
                                            document.getElementById('9').style="width:22%;height:62.91px";
                                          break;
                                          case '0':
                                              document.getElementById('0').style="width:29%;height:62.91px";
                                            break;
          default:
    }
  },
  //Metodo insertar valores al precionar tecla
  insertaValores: function (numero){
    var inicial=document.getElementById('display').innerHTML;
  //  alert (inicial);
    if (inicial.length<=7){
        if ((inicial==0 && inicial.length<2)||(inicial=='')){
          cadMuestra=numero
        }else{
          cadMuestra=inicial+numero
        }
        document.getElementById('display').innerHTML=cadMuestra
    }else{
      alert ("No es posible mostrar mas de 8 caracteres en la pantalla")
    }
  },
  //muestra valor 0 y limpia las variables al momento de presionar el boton on
  limpiaCal: function(){
    document.getElementById('display').innerHTML=0;
    Calculadora.inicializaDat;
    puntoC=0;
    tipoOP="";
    nume1=0;
    nume2=0;
    resulta=0;
    antOP='';
    antNume2=0;
  },
  //Validar si ya existe punto en el valor ingresado en caso contrario agregarlo
  controlPunto: function(){
    var cadMuestra=document.getElementById('display').innerHTML;
    if (puntoC==0){
      cadMuestra=cadMuestra +'.';
      document.getElementById('display').innerHTML=cadMuestra;
      puntoC=puntoC+1;
    }
  },
  //controlar el signo negativo en la operacion
  ControlSigno: function(){
      var cadMuestra=document.getElementById('display').innerHTML;
      var pCaracter=cadMuestra.charAt(0);
      var tamcad=cadMuestra.length;
      if ((pCaracter!=0 && pCaracter!='-')||(pCaracter==0 && tamcad>1)){
        cadMuestra='-'+cadMuestra;
       document.getElementById('display').innerHTML=cadMuestra;
     } else {
        if (pCaracter=='-'){
          cadMuestra=cadMuestra.substr(1,tamcad);
         document.getElementById('display').innerHTML=cadMuestra;
        }
      }
  },
  //veriticar la operacion se que esta utilizando
  identificaOp: function(opera){
    if (tipoOP==''){
      tipoOP=opera;
      nume1=document.getElementById('display').innerHTML;
      document.getElementById('display').innerHTML='';
    }else{
      if (tipoOP!=''){
          nume2=document.getElementById('display').innerHTML;
          document.getElementById('display').innerHTML='';
          if (tipoOP=='mas'){
            //llamar funcion suma
            Calculadora.Sumar(nume1,nume2);
            tipoOP=opera;
          }else {
            if (tipoOP=='menos'){
              //llamar funcion resta
              Calculadora.Restar(nume1,nume2);
              tipoOP=opera;
            }else {
              if (tipoOP=='por'){
                //llamar funcion multi
                Calculadora.multi(nume1,nume2);
                tipoOP=opera;
              }else {
                if (tipoOP=='dividido'){
                  //llamar funcion divi
                  Calculadora.divi(nume1,nume2);
                  tipoOP=opera;
                }
              }
            }
          }
      }
    }
  },
  //Mostrar resultado al presionar signo =
  Resultado: function(){
    if (tipoOP!='' && nume1!=0){
      antOP=tipoOP;
      nume2=document.getElementById('display').innerHTML;
      antNume2=document.getElementById('display').innerHTML;
      if (tipoOP=='mas'){
        Calculadora.Sumar(nume1,nume2);
        document.getElementById('display').innerHTML=nume1;
        tipoOP='';
      }else {
        if (tipoOP=='menos'){
          Calculadora.Restar(nume1,nume2);
          document.getElementById('display').innerHTML=nume1;
          tipoOP='';
        }else {
          if (tipoOP=='por'){
            Calculadora.multi(nume1,nume2);
            document.getElementById('display').innerHTML=nume1;
            tipoOP='';
          }else {
            if (tipoOP=='dividido'){
              Calculadora.divi(nume1,nume2);
               document.getElementById('display').innerHTML=nume1;
               tipoOP='';
            }
          }
        }
      }
    }else{
        // validar si la operacion solicitada esta vacia
      if (tipoOP=='' && nume2==0){
        if (antOP=='mas'){
          Calculadora.Sumar(nume1,antNume2);
          document.getElementById('display').innerHTML=nume1;
        }else {
          if (antOP=='menos'){
            Calculadora.Restar(nume1,antNume2);
            document.getElementById('display').innerHTML=nume1;
          }else {
            if (antOP=='por'){
              Calculadora.multi(nume1,antNume2);
              document.getElementById('display').innerHTML=nume1;
            }else {
              if (antOP=='dividido'){
                Calculadora.divi(nume1,antNume2);
                 document.getElementById('display').innerHTML=nume1;
              }
            }
          }
        }
      }
    }
  },
  //Validacion de 8 digitos
  valDig: function(dPantalla){
    var longNume=dPantalla;
    var longi=longNume.toString();
    if (longi.length>7){
      longi=longi.substr(0,8);
      return longi;
    }else {
      longNume=longNume;
      return  longNume;
    }
  },
  //funcion sumar numeros
  Sumar: function(num1,num2){
    var resulta=parseFloat(num1) + parseFloat(num2);
    nume1=Calculadora.valDig(resulta);
    nume2=0;
  },
  //funcion restar numeros
  Restar: function(num1,num2){
    var res=parseFloat(num1)-parseFloat(num2);
    nume1=Calculadora.valDig(res);
    nume2=0;
  },
  multi: function(num1,num2){
    var res=parseFloat(num1)*parseFloat(num2);
    nume1=Calculadora.valDig(res);
    nume2=0;
  },
  divi: function(num1,num2){
    if (num2!=0){
      var res=parseFloat(num1)/parseFloat(num2);
      nume1=Calculadora.valDig(res);
      nume2=0;
    }else {
      document.getElementById('display').innerHTML='ERROR'
      nume1=0;
      nume2=0;
      tipoOP='';
    }
  }
};
document.getElementById("on").onmousedown=Calculadora.cambiaTamP;
document.getElementById("sign").onmousedown=Calculadora.cambiaTamP;
document.getElementById('dividido').onmousedown=Calculadora.cambiaTamP;
document.getElementById('raiz').onmousedown=Calculadora.cambiaTamP;
document.getElementById('por').onmousedown=Calculadora.cambiaTamP;
document.getElementById('menos').onmousedown=Calculadora.cambiaTamP;
document.getElementById('punto').onmousedown=Calculadora.cambiaTamP;
document.getElementById('igual').onmousedown=Calculadora.cambiaTamP;
document.getElementById('mas').onmousedown=Calculadora.cambiaTamP;
document.getElementById('1').onmousedown=Calculadora.cambiaTamP;
document.getElementById('2').onmousedown=Calculadora.cambiaTamP;
document.getElementById('3').onmousedown=Calculadora.cambiaTamP;
document.getElementById('4').onmousedown=Calculadora.cambiaTamP;
document.getElementById('5').onmousedown=Calculadora.cambiaTamP;
document.getElementById('6').onmousedown=Calculadora.cambiaTamP;
document.getElementById('7').onmousedown=Calculadora.cambiaTamP;
document.getElementById('8').onmousedown=Calculadora.cambiaTamP;
document.getElementById('9').onmousedown=Calculadora.cambiaTamP;
document.getElementById('0').onmousedown=Calculadora.cambiaTamP;
document.getElementById('on').onmouseup=Calculadora.cambiaTamO;
document.getElementById("sign").onmouseup=Calculadora.cambiaTamO;
document.getElementById('dividido').onmouseup=Calculadora.cambiaTamO;
document.getElementById('raiz').onmouseup=Calculadora.cambiaTamO;
document.getElementById('por').onmouseup=Calculadora.cambiaTamO;
document.getElementById('menos').onmouseup=Calculadora.cambiaTamO;
document.getElementById('punto').onmouseup=Calculadora.cambiaTamO;
document.getElementById('igual').onmouseup=Calculadora.cambiaTamO;
document.getElementById('mas').onmouseup=Calculadora.cambiaTamO;
document.getElementById('1').onmouseup=Calculadora.cambiaTamO;
document.getElementById('2').onmouseup=Calculadora.cambiaTamO;
document.getElementById('3').onmouseup=Calculadora.cambiaTamO;
document.getElementById('4').onmouseup=Calculadora.cambiaTamO;
document.getElementById('5').onmouseup=Calculadora.cambiaTamO;
document.getElementById('6').onmouseup=Calculadora.cambiaTamO;
document.getElementById('7').onmouseup=Calculadora.cambiaTamO;
document.getElementById('8').onmouseup=Calculadora.cambiaTamO;
document.getElementById('9').onmouseup=Calculadora.cambiaTamO;
document.getElementById('0').onmouseup=Calculadora.cambiaTamO;
//document.getElementById('on').onmousedown=Calculadora.cambiaTamP;
//document.getElementById('on').onmouseup=Calculadora.cambiaTamO;
//document.getElementById("sign").onmousedown=Calculadora.cambiaTamP;
//document.getElementById('dividido').onmousedown=Calculadora.cambiaTamP;
//document.getElementById('raiz').onmousedown=Calculadora.cambiaTamP;

//document.getElementById('signo').onmouseup=Calculadora.cambiaTamO;

//document.getElementsByClassName('body').onload=Calculadora.inicializaDat
//document.getElementsByClassName('tecla')[0].onClick=Calculadora.cambiaTamP();
