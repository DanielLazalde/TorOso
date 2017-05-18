package com.nhefner.main;

import com.symbols.clsSymbols;
import java.util.Iterator;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;


public class StockTest { 

    /**
     * @return the builderMensajesCompra
     */
    public String getBuilderMensajesCompra() {
        return builderMensajesCompra.toString();
    }

    /**
     * @param builderMensajesCompra the builderMensajesCompra to set
     */
    public void setBuilderMensajesCompra(StringBuilder builderMensajesCompra) {
        this.builderMensajesCompra.append(builderMensajesCompra);
    }

    /**
     * @return the builderMensajesVenta
     */
    public String getBuilderMensajesVenta() {
        return builderMensajesVenta.toString();
    }

    /**
     * @param builderMensajesVenta the builderMensajesVenta to set
     */
    public void setBuilderMensajesVenta(StringBuilder builderMensajesVenta) {
        this.builderMensajesVenta.append(builderMensajesVenta);
    }
    
    private StringBuilder builderMensajesCompra = new StringBuilder();
    private StringBuilder builderMensajesVenta = new StringBuilder();
	
    
	public void testStock() { 
		
            builderMensajesCompra = new StringBuilder();
            builderMensajesVenta = new StringBuilder();
            
		//Stock facebook = StockFetcher.getStock("BZ=F");
		/*System.out.println("Price: " + facebook.getPrice());
		System.out.println("Volume: " + facebook.getVolume()); 
		System.out.println("P/E: " + facebook.getPe());
		System.out.println("EPS: " + facebook.getEps());
		System.out.println("Year Low: " + facebook.getWeek52low());
		System.out.println("Year High: " + facebook.getWeek52high());
		System.out.println("Day Low: " + facebook.getDaylow());
		System.out.println("Day High: " + facebook.getDayhigh());
		System.out.println("50 Day Moving Av: " + facebook.getMovingav50day());
		System.out.println("Market Cap: " + facebook.getMarketcap());
		System.out.println("The full name is: " + facebook.getName());
		System.out.println("The currency is: " + facebook.getCurrency());
		System.out.println("The short ratio is: " + facebook.getShortRatio());
		System.out.println("The previous close was: " + facebook.getPreviousClose());
		System.out.println("The open for today was: " + facebook.getOpen());
		System.out.println("The exchange is " + facebook.getExchange());
                
		System.out.println("The exchange is " + facebook.getExchange());
                
                System.out.println("The change is " + facebook.getChange());
                System.out.println("The lastDateTrader is " + facebook.getLastDateTrader());*/
		                
                //builderMensajesCompra.append(mensajeVenta);
                /*
                Iterator   <String> iterator = tags.iterator();
			while (iterator.hasNext()) {
				System.out.println(iterator.next());
                        }
                */
                
                //agregarMensajeToroso("^IBEX");
                agregarMensajeToroso("NG=F");
                agregarMensajeToroso("SI=F");
                agregarMensajeToroso("EURUSD=X");
                agregarMensajeToroso("CL=F");
                agregarMensajeToroso("JPY=X");
                agregarMensajeToroso("^N225");
                agregarMensajeToroso("BZ=F");
                agregarMensajeToroso("MSFT");
                agregarMensajeToroso("^GSPC");//EE.UU 500 s&p 500  
                agregarMensajeToroso("AUDJPY=X");
                
                agregarMensajeToroso("AAPL");
                agregarMensajeToroso("GC=F");
                agregarMensajeToroso("CX");
                agregarMensajeToroso("KO");
                agregarMensajeToroso("FB");
                agregarMensajeToroso("AMZN");
                agregarMensajeToroso("NFLX");

                agregarMensajeToroso("NKE");
                agregarMensajeToroso("QQQ");
                agregarMensajeToroso("WMT");
                agregarMensajeToroso("YHOO");
                agregarMensajeToroso("TWTR");
                agregarMensajeToroso("GBPUSD=X");
                agregarMensajeToroso("SNAP");
                
                agregarMensajeToroso("PA%3DF");

                
                
                
                
                        
                                
                                
                                        
                                        
                                                
                        
                        
                
               
                
	} 
        
    public void main (String args[]) {
        System.out.println("Hello World wwww!");
        testStock();
    }
         
         private void agregarMensajeToroso(String symbol){
             
            Stock facebook = StockFetcher.getStock(symbol.trim());
		
            clsSymbols symbols = new clsSymbols();
                
            JSONObject jsonObject = symbols.metAgregarSymbolHystory(facebook);

            String mensajeCompra = jsonObject.get("mensajeCompra").toString();
            String mensajeVenta = jsonObject.get("mensajeVenta").toString();

            //mensajeCompra = "Comprar shdsdksjdk jhasajksa";
            //mensajeVenta = "VENDER hjhhewjhewjhewhjehjewc weefwwew";
            if (!mensajeCompra.equals("")){
                builderMensajesCompra.append(mensajeCompra + "\n");
                System.out.println("MensaajeToroso: " + mensajeCompra);
            }
            if(!mensajeVenta.equals("")){
                builderMensajesVenta.append(mensajeVenta + "'\n");
                System.out.println("MensaajeToroso: " + mensajeVenta);
            }
             
         }
         

}
