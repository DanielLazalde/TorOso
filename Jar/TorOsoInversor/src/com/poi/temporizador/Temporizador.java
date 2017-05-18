package com.poi.temporizador;

import com.nhefner.main.StockTest;
import java.util.Calendar;
import java.util.TimerTask;
import javax.swing.JOptionPane;

/**
 * 
 * @author Ivan Salas Corrales <http://programandoointentandolo.com/>
 */
public class Temporizador extends TimerTask{

       static boolean pMuestraMensaje = false;
       
	@Override
	public void run() {
		Calendar diaActual = Calendar.getInstance();
		StockTest avisoToroso = new StockTest();
                
		switch (diaActual.get(Calendar.DAY_OF_WEEK)) {
			case 1: // Es domingo puedes seguir durmiendo y se apaga el despertador
			if (diaActual.get(Calendar.HOUR) > 14){
                            /*System.out.println("Zzz...");
				this.cancel();
				System.out.println("Temporizador apagado.");
				break;*/
                            System.out.println("Despierta!!!");
				avisoToroso.testStock();				
                                System.out.println("Toroso Iniciado");				
                                lanzarMensajeToroso(avisoToroso.getBuilderMensajesCompra(), avisoToroso.getBuilderMensajesVenta());
                                break;

                        }
                        else {
                                System.out.println("Inicio de la semana :)");
				
                                avisoToroso.testStock();
				
                                System.out.println("Toroso Iniciado");
				
                                lanzarMensajeToroso(avisoToroso.getBuilderMensajesCompra(), avisoToroso.getBuilderMensajesVenta());
                                
                                break;
                    
                        }
			case 2:	// Durante los dias de diario suena el despertador
                        case 3:
			case 4:
			case 5:
			case 6:
				System.out.println("Despierta!!!");
				avisoToroso.testStock();				
                                System.out.println("Toroso Iniciado");				
                                lanzarMensajeToroso(avisoToroso.getBuilderMensajesCompra(), avisoToroso.getBuilderMensajesVenta());
                                break;
			case 7: // Es sabado puedes seguir durmiendo
				/*System.out.println("Zzz...");
                                //lanzarMensajeVariasLíneas();
				break;
                                */
                                
                                 System.out.println("Despierta!!!");
				avisoToroso.testStock();				
                                System.out.println("Toroso Iniciado");				
                                lanzarMensajeToroso(avisoToroso.getBuilderMensajesCompra(), avisoToroso.getBuilderMensajesVenta());
                                break;
		}
                
                
                
	}
        
         public static void lanzarMensajeVariasLíneas(){

	  //Propiedad del sistema para salto de línea:

	  String nl = System.getProperty("line.separator");

	  //Lanzamos el mensaje:

	  JOptionPane.showMessageDialog(null, "Soy un mensaje"

	    + nl + "de varias líneas..."

	    + nl + "Y esto lo viste en el Blog de Baro :D.");

	 }
         
         
         public static void lanzarMensajeToroso(String mensajeCompra, String mensajeVenta){

            if (pMuestraMensaje){

                  //Propiedad del sistema para salto de línea:

                  String nl = System.getProperty("line.separator");

                  //Lanzamos el mensaje:

                  if (!mensajeCompra.toString().equals("")){

                    JOptionPane.showMessageDialog(null, "TORO: "

                      + nl + mensajeCompra

                      + nl + "Atte: ToroOso Inversor");
                  }

                  if (!mensajeVenta.toString().equals("")){

                    JOptionPane.showMessageDialog(null, "OSO: "

                      + nl + mensajeVenta

                      + nl + "Atte: ToroOso Inversor");
                  }
            }
	 }
         
         

	  

}