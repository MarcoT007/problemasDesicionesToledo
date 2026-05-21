function votaciones(){
    let edad = parseInt(document.getElementById("edad").value);
    if (edad>=18){
        document.getElementById("result").textContent = "Puedes votar";
    } else {
        document.getElementById("result").textContent = "No puedes votar";
    }
};

function sueldoextra(){
    let pago = parseInt(document.getElementById("pago").value);
    let chamba = parseInt(document.getElementById("chamba").value);
    if (chamba<=40){
        const result = pago * chamba;
        document.getElementById("result").textContent = "Tu pago Es: " + result;
    }
    else {
        let extra = chamba - 40;
        const result = (pago * 40) + (extra * (pago*2));
        document.getElementById("result").textContent = "Tu Pago Es: " + result;
    }
};

function decidirRegalo(){
    let dinero = parseInt(document.getElementById("dinero").value);
    if (dinero<=10){
        document.getElementById("result").textContent = "Puedes Comprar: Tarjeta"; 
    }   else if (dinero<=100){
        document.getElementById("result").textContent = "Puedes Comprar: Chocolates";
    }   else if (dinero<=250){
        document.getElementById("result").textContent = "Puedes Comprar: Flores";
    }   else {
        document.getElementById("result").textContent = "Puedes Comprar: Anillo";
}
};

function costoEstacionamiento(){
    let hora = parseInt(document.getElementById("hora").value);
    if (hora<=2){
        const result = hora * 5
        document.getElementById("result").textContent = "El Costo Es:" + result; 
    }   else if (hora>2 && hora<6){
        let segundo = hora - 2;
        const result = (segundo * 4) + 10;
        document.getElementById("result").textContent = "El Costo Es:" + result; 
    }   else if (hora>5 && hora<11){
        let tercero = hora - 5;
        const result = (tercero*3) + 22
       document.getElementById("result").textContent = "El Costo Es:" + result; 
    }   else {
        let cuarto = hora - 10;
        const result = (cuarto*2) + 37;
        document.getElementById("result").textContent = "El Costo Es:" + result; 
}
};

function tresPersonas(){

    let n1 = document.getElementById("n1").value;
    let e1 = parseInt(document.getElementById("e1").value);
    let n2 = document.getElementById("n1").value;
    let e2 = parseInt(document.getElementById("e2").value);
    let n3 = document.getElementById("n1").value;
    let e3 = parseInt(document.getElementById("e3").value);

    let nombre=n1;
    let edad=e1;

    if(e2<edad){
        nombre=n2;
        edad=e2;
    }
    if(e3<edad){
        nombre=n3;
        edad=e3;
    }
    document.getElementById("result").innerHTML = "La Persona Menor Es:" + nombre + "con" + edad + "años";
}

function costoDescuento(){

    let precio= parseFloat(document.getElementById("precio").value);
    let descuento;

    if (precio>=200){
        descuento=precio * 0.15;
    } else if(precio>100){
        descuento=precio * 0.12;
    } else{
        descuento= precio * 0.10;
    }

    let total= precio - descuento;

    document.getElementById("result").innerHTML =
    "Descuento: $" + descuento +
    "<br>Total Pagar: $" + total;
}

function becaAñoProm(){

    let edad= parseInt(document.getElementById("edad").value);
    let promedio= parseFloat(document.getElementById("promedio").value);
    let mensaje= "";

    if(edad>18){

        if (edad>=9){
            mensaje= "Beca de $2000";
        } else if(promedio>=7.5){
            mensaje= "Beca de $1000";
        } else if(promedio>=6){
        mensaje= "Beca de $500";
        }else{
            mensaje= "Carta De Invitación";
        }
    }else{
        if(promedio>=9){
            mensaje= "Beca de $3000";
        } else if (promedio>=8){
            mensaje= "Beca de $2000";
        } else if(promedio>=6){
            mensaje= "Beca de $100";
        }else{
            mensaje= "Carta de Invitación";
        }
    }
    document.getElementById("result").innerHTML = mensaje;
}

function bonoAntiguedadSueldo(){

    let sueldo= parseFloat(document.getElementById("sueldo").value);
    let antiguedad= parseFloat(document.getElementById("antiguedad").value);
    let bonoAnt= 0;
    let bonoSue= 0;

    if(antiguedad>2 && antiguedad<5){
        bonoAnt= sueldo * 0.2;
    } else if(antiguedad>=5){
        bonoAnt= sueldo * 0.3;
    }
    if(sueldo<1000){
        bonoSue= sueldo * 0.25;
    } else if(sueldo<=3500){
        bonoSue= sueldo * 0.15;
    } else{
        bonoSue= sueldo * 0.1;
    }
    let bono= bonoAnt > bonoSue ? bonoAnt : bonoSue;
    document.getElementById("result").innerHTML =
    "Bono asignado: $" + bono;
}

function seguroAutos(){

    let plan= document.getElementById("plan").value;
    let edad= parseInt(document.getElementById("edad").value);
    let alcohol= document.getElementById("alcohol").value;
    let lentes= document.getElementById("lentes").value;
    let enfermedad= document.getElementById("enfermedad").value;
    let base= (plan=="A") ? 1200 : 950;
    let total= base;

    if(alcohol == "si"){
        total +- base * 0.1;
    }
    if(lentes == "si"){
        total +- base * 0.05;
    } 
    if(enfermedad == "si"){
        total +- base * 0.05;
    }
    if(edad>40){
        total += base * 0.2;
    } else{
        total += base * 0.1;
    }

    document.getElementById("result").innerHTML =
    "Costo de la Póliza: $" + total;
}

function vacacionesCamion(){

    
    let costoKm= parseFloat(document.getElementById("costoKm").value);
    let mexico= 750 * 2 * costoKm;
    let pv= 800 * 2 * costoKm;
    let acapulco= 1200 * 2 * costoKm;
    let cancun= 1800 * 2 * costoKm;

    let destino= "Mexico";

    if(pv < mexico && pv <= acapulco && pv <= cancun){
        destino= "Puerto Vallarta";
    }
    if(acapulco < mexico && acapulco < pv && acapulco <= cancun){
        destino= "Acapulco";
    }
    if(cancun < mexico && cancun < pv && cancun < acapulco){
        destino= "Cancun";
    }
    document.getElementById("result").innerHTML =
    "El destino más barato es: " + destino;
}

function bonoAntiguedad(){

    let a= parseInt(document.getElementById("antiguedad").value);
    let bono;

    if(a>= 1 && a<=5){
        bono= a * 100;
    } else{
        bono=1000;
    }
    document.getElementById("result").innerHTML =
    "El Bono es: $" + bono;
}

function pagoSemanal(){

    let h= parseInt(document.getElementById("horas").value);
    let p= parseFloat(document.getElementById("pago").value);
    let sueldo= 0;

    if(h> 50){
        document.getElementById("result").innerHTML =
        "No está permitido trabajar mas de 50 horas";
        return;
    }
    if(h<=40){
        sueldo= h* p;
    } else if(h<= 45){
        sueldo=(40*p)+((h-40)*p*2);
    }else{
        sueldo= (40*p)+(5*p*2)+((h-45)*p*3);
    }
    document.getElementById("result").innerHTML =
    "Sueldo semanal: $" + sueldo;
}

function viajeEstudios(){

    let alumnos= parseInt(document.getElementById("alumnos").value);
    let costo;
    if(alumnos>100){
        costo=20;
    } else if(alumnos>=50){
        costo=35;
    } else if(alumnos>=20){
        costo=40;
    } else{
        costo=70;
}
    document.getElementById("result").innerHTML =
    "Costo por Alumno: $" + costo;
}