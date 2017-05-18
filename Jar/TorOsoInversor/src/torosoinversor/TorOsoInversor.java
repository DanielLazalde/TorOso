/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package torosoinversor;

import com.poi.temporizador.Temporizador;
import java.util.Calendar;
import java.util.Date;
import java.util.Timer;

/**
 *
 * @author desarrollo
 */
public class TorOsoInversor {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        
        Date horaDespertar = new Date(System.currentTimeMillis());
		
		Calendar c = Calendar.getInstance();
		c.setTime(horaDespertar);
		System.out.println(c.get(Calendar.DAY_OF_WEEK) + " OK");
		// Si la hora es posterior a las 8am se programa la alarma para el dia siguiente
		if (c.get(Calendar.HOUR_OF_DAY) >= 22) {
			c.set(Calendar.DAY_OF_YEAR, c.get(Calendar.DAY_OF_YEAR) );
		}
		
		c.set(Calendar.HOUR_OF_DAY, 0);
		c.set(Calendar.MINUTE, 2);
		c.set(Calendar.SECOND, 0);
		
		horaDespertar = c.getTime();
		System.out.println(horaDespertar + " Hora despertar TorOsoInversor");
		System.out.println(c.get(Calendar.DAY_OF_WEEK));
		// El despertador suena cada 24h (una vez al dia)
		int tiempoRepeticion = 50000; 
		
		// Programamos el despertador para que "suene" a las 8am todos los dias 
		Timer temporizador = new Timer();
		temporizador.schedule(new Temporizador(), horaDespertar, tiempoRepeticion);
		
    }
    
}
