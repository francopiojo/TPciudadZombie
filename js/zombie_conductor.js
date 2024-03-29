/* Para insipirarte para la implementacion del ZombieConductor podes usar
al ZombieCaminante de ejemplo. Tene en cuenta que tendra algunas diferencias.
Por ejemplo, la cantidad parametros que recibe su constructor. En ZombieConductor
no son exactamente los mismos parametros que en el objeto Enemigo, a diferencia
del ZombieCaminante que eran los mismos. */

var ZombieConductor = function(sprite, x, y, ancho, alto, velocidad, rangoMov, direccion) {
  /* Completar constructor a partir de Enemigo */
  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);
 /* No olvidar agregar la/s propiedad/es unicas de ZombieConductor necesarias */
 this.direccion =direccion;
}
ZombieConductor.prototype = Object.create(Enemigo.prototype);
ZombieConductor.prototype.constructor = ZombieConductor;

/* Completar creacion del ZombieConductor */


/* Completar metodos para el movimiento y el ataque */
ZombieConductor.prototype.mover = function(){
  if (this.direccion == 'v') {
    if (this.y < this.rangoMov){
      
      this.y += this.velocidad;
    }
      else {
       this.y = 0;
    }
  }
  else{
    if (this.x < this.rangoMov){
      
      this.x += this.velocidad;
    }
      else {
       this.x = 0;
    }
  } 
}
ZombieConductor.prototype.atacar = function(jugador) {
  jugador.perderVidas(jugador.vidas);
}
